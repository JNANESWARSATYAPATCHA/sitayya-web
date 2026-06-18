const WHATSAPP_LINK = "https://wa.me/";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:scale-105"
    >
      WhatsApp
    </a>
  );
}
