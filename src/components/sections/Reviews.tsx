"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Sandeep Kumar",
    review: "Absolutely incredible! The most authentic Bhimavaram flavors I've had in years. The Chicken Pulao is out of this world and the family atmosphere makes it so special.",
  },
  {
    name: "Priya Sharma",
    review: "The Gongura Mutton Biryani is a masterpiece. Real heritage cooking that takes you straight to Andhra. Beautiful ambiance and top-tier hospitality.",
  },
  {
    name: "Ravi Teja",
    review: "A hidden gem! From the spicy Royyala Iguru to the perfect Double Egg Fried Rice, every bite was flawless. Highly recommended for weekend family dinners.",
  },
];

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-royal-gold text-royal-gold" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16">
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.35em] text-royal-gold/70">
          Wall of Love
        </p>
        <h2 className="font-heading text-3xl text-white sm:text-4xl">
          What our guests are saying.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <motion.article
            key={review.name}
            className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <StarIcon key={idx} />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base italic">
              "{review.review}"
            </p>
            <div className="mt-auto pt-4 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold font-bold">
                {review.name.charAt(0)}
              </div>
              <p className="font-semibold text-white/90">
                {review.name}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
