"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { SIGNATURE_DISHES } from "@/constants/menu";

const viewport = { once: true, margin: "-100px" };

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport,
};

export default function BentoGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="grid gap-6 lg:grid-cols-[1.1fr_1fr]"
    >
      <motion.div
        className="rounded-3xl border border-[#C5A059]/30 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-8 text-gray-300"
        style={{ y: leftY }}
        {...cardMotion}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
          Signature Heritage
        </p>
        <h2 className="mt-4 font-heading text-3xl text-gray-300 sm:text-4xl">
          Crafted for celebratory evenings and quiet indulgence.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
          Each dish is prepared in small batches with premium spices, slow
          caramelization, and a finish of saffron and ghee.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
        style={{ y: rightY }}
        viewport={viewport}
      >
        {SIGNATURE_DISHES.map((dish) => (
          <motion.article
            key={dish.name}
            className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-royal-dark"
            {...cardMotion}
          >
            <Image
              src={dish.imageUrl}
              alt={dish.name}
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
            <div className="relative z-10 p-6">
              <h3 className="font-heading text-xl text-royal-gold">
                {dish.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {dish.heritage}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
