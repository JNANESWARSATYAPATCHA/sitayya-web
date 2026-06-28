"use client";

import { motion } from "framer-motion";

const viewport = { once: true, margin: "-100px" };

const revealContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const revealLine = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headlineLines = [
  "Royal flavors, served with heritage",
  "and contemporary grace.",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-royal-dark px-6 py-8 md:px-10 md:py-16 shadow-[0_0_60px_rgba(197,160,89,0.08)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/3206923/3206923-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 z-10 bg-black/70" />

      <div className="relative z-20">

      <motion.p
        className="relative z-20 text-xs uppercase tracking-[0.35em] text-royal-gold/80"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
          Sitayya Family Restaurant
      </motion.p>
      <motion.h1
        className="relative z-20 mt-6 max-w-3xl font-heading text-3xl leading-tight text-royal-gold sm:text-4xl md:text-5xl lg:text-6xl"
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {headlineLines.map((line) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className="block"
              variants={revealLine}
              viewport={viewport}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h1>
      <motion.p
        className="relative z-20 mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        Discover a curated menu of slow-cooked biryanis and celebratory
        favorites, crafted for guests who savor every detail.
      </motion.p>

      <motion.div
        className="relative z-20 mt-8 flex flex-wrap gap-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.button
          type="button"
          className="rounded-full bg-royal-gold px-6 py-3 text-sm font-semibold text-royal-dark transition"
          whileHover={{ scale: 1.05, backgroundColor: "#E27D60" }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          viewport={viewport}
        >
          Reserve a Table
        </motion.button>
        <motion.a
          href="#menu"
          className="rounded-full border border-royal-gold/40 px-6 py-3 text-sm font-semibold text-royal-gold transition hover:border-royal-gold"
          viewport={viewport}
        >
          Book a Table
        </motion.a>
      </motion.div>
      </div>
    </section>
  );
}
