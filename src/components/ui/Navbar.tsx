"use client";

import Link from "next/link";

import { SitayyaLogo } from "@/components/ui/Logo";
import { useLanguage } from "@/components/ui/LanguageContext";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Heritage", href: "#heritage" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/70 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <SitayyaLogo className="h-11 w-11" />
          <span className="flex flex-col">
            <span className="font-heading text-2xl tracking-[0.3em] text-[#C5A059]">
              SITAYYA
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gray-400">
              The Authentic Taste of Bhimavaram
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-[#C5A059]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059] transition hover:border-[#C5A059] hover:text-white"
            aria-label="Toggle language between English and Telugu"
          >
            <span className={language === "en" ? "text-white" : "text-[#C5A059]/60"}>EN</span>
            <span className="px-1 text-white/35">|</span>
            <span className={language === "te" ? "text-white" : "text-[#C5A059]/60"}>TE</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
