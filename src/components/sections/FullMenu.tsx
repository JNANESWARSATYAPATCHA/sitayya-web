"use client";

import { useEffect, useMemo, useState } from "react";

import { FULL_MENU } from "@/constants/menu";
import { useLanguage } from "@/components/ui/LanguageContext";
import RevealCard from "@/components/ui/RevealCard";

const categories = ["Biryanis", "Pulaos", "Fried Rice"] as const;

type Category = (typeof categories)[number];

const vipSpecials = [
  {
    name: "Ulavacharu Chicken Biryani",
    imageUrl:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop",
    description:
      "A private weekend pour of ulavacharu richness, layered with fragrant rice and finished for a members-only indulgence.",
  },
] as const;

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Biryanis");
  const [isVip, setIsVip] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setIsVip(localStorage.getItem("isVip") === "true");
  }, []);

  const activeItems = useMemo(() => {
    return FULL_MENU.find((entry) => entry.category === activeCategory)?.items ?? [];
  }, [activeCategory]);

  const getDisplayName = (item: { name: string; nameTe?: string }) =>
    language === "te" && item.nameTe ? item.nameTe : item.name;

  const handleUnlockVip = () => {
    window.open(
      "https://wa.me/91XXXXXXXXXX?text=Add%20me%20to%20the%20VIP%20list!",
      "_blank",
      "noopener,noreferrer",
    );
    localStorage.setItem("isVip", "true");
    setIsVip(true);
  };

  return (
    <section id="menu" className="py-16">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-royal-gold/70">
            Full Menu
          </p>
          <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
            A curated selection of local signatures.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-royal-gold bg-royal-gold text-royal-dark"
                    : "border-white/15 text-white/70 hover:border-white/40"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeItems.map((item) => (
          <RevealCard
            key={item.name}
            title={getDisplayName(item)}
            subtitle={activeCategory}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>

      <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#C5A059]/20 bg-[#0A0A0A] p-6">
        <div
          className={`${isVip ? "" : "blur-md backdrop-grayscale"} relative grid gap-6`}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-royal-gold/70">
              VIP Weekend Specials
            </p>
            <h3 className="font-heading text-2xl text-white sm:text-3xl">
              Members-only indulgence for weekend guests.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vipSpecials.map((item) => (
              <RevealCard
                key={item.name}
                title={getDisplayName(item)}
                subtitle="VIP Weekend Special"
                description={item.description}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>

        {!isVip ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/15 px-4">
            <button
              type="button"
              onClick={handleUnlockVip}
              className="rounded-full border border-[#C5A059] bg-[#C5A059] px-6 py-3 text-sm font-semibold text-[#0A0A0A] shadow-[0_0_24px_rgba(197,160,89,0.35)] transition hover:scale-105"
            >
              Unlock Secret Menu
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
