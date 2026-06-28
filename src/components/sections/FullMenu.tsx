"use client";

import { useMemo, useState } from "react";

import { FULL_MENU } from "@/constants/menu";
import { useLanguage } from "@/components/ui/LanguageContext";
import RevealCard from "@/components/ui/RevealCard";

const categories = ["Biryanis", "Pulaos", "Fried Rice"] as const;

type Category = (typeof categories)[number];

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Biryanis");
  const { language } = useLanguage();

  const activeItems = useMemo(() => {
    return FULL_MENU.find((entry) => entry.category === activeCategory)?.items ?? [];
  }, [activeCategory]);

  const getDisplayName = (item: { name: string; nameTe?: string }) =>
    language === "te" && item.nameTe ? item.nameTe : item.name;

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
    </section>
  );
}
