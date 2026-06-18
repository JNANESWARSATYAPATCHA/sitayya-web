from fastapi import FastAPI, Request, Response
import requests

app = FastAPI()

# --- CONFIGURATION ---
# We will get these from Meta in the next step.
META_VERIFY_TOKEN = "sitayya_secure_token_2026"
META_ACCESS_TOKEN = "YOUR_META_TOKEN" 
PHONE_NUMBER_ID = "YOUR_PHONE_ID"

# --- THE BOT'S MEMORY (STATE MACHINE) ---
user_sessions = {}

STATE_START = "start"
STATE_AWAITING_SIZE = "awaiting_size"
STATE_AWAITING_TIME = "awaiting_time"

# --- THE WEBHOOK ENDPOINTS ---

@app.get("/webhook")
async def verify_webhook(request: Request):
    """Meta calls this ONCE to verify your server exists."""
    mode = request.query_params.get("hub.mode")
    token = request.query_params.get("hub.verify_token")
    challenge = request.query_params.get("hub.challenge")

    if mode == "subscribe" and token == META_VERIFY_TOKEN:
        print("✅ Webhook Verified by Meta!")
        return Response(content=challenge, status_code=200)
    return Response(status_code=403)

@app.post("/webhook")
async def receive_message(request: Request):
    """Meta pushes every new WhatsApp message here."""
    body = await request.json()

    try:
        if body.get("object") == "whatsapp_business_account":
            entry = body["entry"][0]
            changes = entry["changes"][0]
            value = changes["value"]
            
            if "messages" in value:
                message = value["messages"][0]
                sender_phone = message["from"]
                msg_text = message["text"]["body"].lower()

                # Process the message through our State Machine
                reply_text = process_conversation(sender_phone, msg_text)
                
                if reply_text:
                    send_whatsapp_reply(sender_phone, reply_text)
                    
        return {"status": "success"}
        
    except KeyError:
        return {"status": "ignored"}

# --- CONVERSATION LOGIC ---

def process_conversation(sender_phone, msg_text):
    """Determines what the bot should say next."""
    if sender_phone not in user_sessions:
        user_sessions[sender_phone] = {"state": STATE_START, "data": {}}

    session = user_sessions[sender_phone]
    current_state = session["state"]

    if current_state == STATE_START:
        if "book" in msg_text or "table" in msg_text:
            session["state"] = STATE_AWAITING_SIZE
            return "👑 Welcome to Sitayya! How many people are in your party?"
        else:
            return "Hi! Reply with 'Book a table' to start your reservation."

    elif current_state == STATE_AWAITING_SIZE:
        session["data"]["party_size"] = msg_text
        session["state"] = STATE_AWAITING_TIME
        return f"Great, a table for {msg_text}. What time should we expect you today? (e.g., 8:00 PM)"

    elif current_state == STATE_AWAITING_TIME:
        session["data"]["time"] = msg_text
        
        size = session["data"]["party_size"]
        time = session["data"]["time"]
        
        # We have the data! Reset the user's state.
        del user_sessions[sender_phone] 
        
        # TODO: Phase 3 - Send this to Google Sheets!
        print(f"\n🚨 [DATABASE SAVE TRIGGERED] 🚨\nPhone: {sender_phone} | Size: {size} | Time: {time}\n")
        
        return "✅ Perfect! Your request is sent to the kitchen. See you at Sitayya!"

# --- OUTBOUND MESSAGING ---

def send_whatsapp_reply(to_phone: str, message: str):
    """Fires the JSON payload back to Meta to send the actual WhatsApp message."""
    url = f"https://graph.facebook.com/v18.0/{PHONE_NUMBER_ID}/messages"
    
    headers = {
        "Authorization": f"Bearer {META_ACCESS_TOKEN}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "messaging_product": "whatsapp",
        "to": to_phone,
        "type": "text",
        "text": {"body": message}
    }
    
    # Send the request
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        print(f"💬 Bot replied to {to_phone}: {message}")
    else:
        print(f"❌ Failed to send message: {response.text}")