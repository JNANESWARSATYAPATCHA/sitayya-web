import { GoogleGenAI } from '@google/genai';
import { NextRequest } from 'next/server';

const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;

async function sendWhatsAppMessage(toPhone: string, text: string) {
  if (!META_ACCESS_TOKEN || !PHONE_NUMBER_ID) {
    console.warn("Missing META_ACCESS_TOKEN or PHONE_NUMBER_ID. Skipping message send.");
    return;
  }
  
  const url = `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`;
  const body = {
    messaging_product: "whatsapp",
    to: toPhone,
    type: "text",
    text: { body: text }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${META_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error(`Failed to send WhatsApp message: ${err}`);
    }
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === 'sitayya_secure_token_2026') {
    return new Response(challenge, { status: 200 });
  }

  return new Response('Forbidden', { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract the message from the Meta payload
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;
    const messages = value?.messages;

    if (!messages || messages.length === 0) {
      return new Response('Event received', { status: 200 });
    }

    const message = messages[0];
    
    if (message.type !== 'text') {
      return new Response('Non-text message received', { status: 200 });
    }

    const senderPhone = message.from;
    const textBody = message.text?.body;

    if (!textBody) {
      return new Response('No text body found', { status: 200 });
    }

    console.log(`Received message from ${senderPhone}: ${textBody}`);

    const ai = new GoogleGenAI({});
    
    const systemPrompt = `You are the reservation assistant for Sitayya Family Restaurant.
Your goal is to gather 4 pieces of information from the user: Name, Party Size, Date, and Time.
Analyze the user's message.
If any of the 4 required fields are missing, generate a conversational reply asking for the missing information.
If all 4 fields are present, generate a friendly confirmation message to the user, and also provide the extracted data.

You MUST respond strictly in the following JSON format:
{
  "replyMessage": "The conversational reply to the user, either asking for missing info or confirming the reservation.",
  "extractedData": {
    "name": "...",
    "partySize": "...",
    "date": "...",
    "time": "..."
  }
}
If you have not yet gathered all 4 pieces of information, output null for "extractedData".
Return ONLY this JSON object. No markdown, no additional text.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: textBody,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
      }
    });

    let result;
    try {
      result = JSON.parse(response.text || '{}');
    } catch (e) {
      console.error('Failed to parse Gemini response', response.text);
      return new Response('Error parsing AI response', { status: 200 });
    }

    const { replyMessage, extractedData } = result;

    // Auto-reply to the user
    if (replyMessage) {
      await sendWhatsAppMessage(senderPhone, replyMessage);
    }

    // Log extracted data if all fields are gathered
    if (extractedData) {
      console.log(`Final Extracted Reservation Data for ${senderPhone}:`, JSON.stringify(extractedData, null, 2));
      // Phase 2: Connect to Google Sheets API
    }

    return new Response('Message processed', { status: 200 });

  } catch (error) {
    console.error('Webhook error:', error);
    // Returning 200 even on error to prevent WhatsApp from endlessly retrying
    return new Response('Error processing webhook', { status: 200 });
  }
}
