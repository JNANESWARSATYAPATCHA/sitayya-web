import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { LanguageProvider } from "@/components/ui/LanguageContext";
import SmoothScroll from "@/components/ui/SmoothScroll";
import UrgencyBanner from "@/components/ui/UrgencyBanner";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sitayya Family Restaurant",
  description: "A premium culinary experience rooted in heritage and craft.",
};

export const viewport: Viewport = {
  width: 1280,
  initialScale: 0.5,
  maximumScale: 2.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${playfair.variable} h-full`}
    >
      <head>
        {/* TODO: Replace with actual Sitayya Pixel IDs. */}
        <script
          id="meta-pixel-code"
          dangerouslySetInnerHTML={{ __html: "// Meta Pixel Code" }}
        />
        <script
          id="google-analytics-gtag"
          dangerouslySetInnerHTML={{ __html: "// Google Analytics (gtag.js)" }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white antialiased font-body overflow-x-hidden">
        <UrgencyBanner />
        <LanguageProvider>
          <SmoothScroll>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1 pt-28">{children}</div>
              <Footer />
            </div>
          </SmoothScroll>
        </LanguageProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
