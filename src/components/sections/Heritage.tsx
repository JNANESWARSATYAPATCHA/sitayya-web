"use client";

import { motion } from "framer-motion";

const heritageSteps = [
  {
    year: "1994",
    title: "The First Pulao is Served",
    description: "In a tiny 4-table setup, the first fragrant pulao marked the beginning of Sitayya's story.",
  },
  {
    year: "2010",
    title: "Gandhinagar Expansion",
    description: "The restaurant expanded into our current Gandhinagar location, welcoming more families with royal warmth.",
  },
  {
    year: "2026",
    title: "Digital Chapter Begins",
    description: "The Authentic Taste of Bhimavaram goes digital, bringing heritage dining into the modern era.",
  },
] as const;

const viewport = { once: true, margin: "-100px" };

export default function Heritage() {
  return (
    <section id="heritage" className="py-10 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-royal-gold/70">
            Heritage Timeline
          </p>
          <h2 className="font-heading text-2xl text-white sm:text-3xl md:text-4xl">
            Three defining moments in the Sitayya story.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-royal-gold/70 via-royal-gold/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {heritageSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={step.year} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10">
                  <div className="hidden md:block" />
                  <motion.article
                    className={`relative ml-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur ${isLeft ? "md:col-start-1 md:mr-10" : "md:col-start-2 md:ml-10"}`}
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={viewport}
                  >
                    <div className="absolute -left-3 top-6 h-4 w-4 rounded-full border border-[#C5A059] bg-[#0A0A0A] md:left-auto md:-right-12 md:translate-x-1/2" />
                    <p className="text-sm uppercase tracking-[0.35em] text-royal-gold/80">
                      {step.year}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                      {step.description}
                    </p>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}