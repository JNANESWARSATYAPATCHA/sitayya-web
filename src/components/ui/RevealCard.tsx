"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type RevealCardProps = {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  price?: string;
};

const titleVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

const detailVariants = {
  rest: { opacity: 0, y: 32 },
  hover: { opacity: 1, y: 0 },
};

export default function RevealCard({
  title,
  subtitle,
  description,
  imageUrl,
  price,
}: RevealCardProps) {
  return (
    <motion.article
      className="group relative h-[400px] overflow-hidden rounded-2xl"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(min-width: 1024px) 360px, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <motion.h3
          className="font-heading text-2xl text-white"
          variants={titleVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="mt-3 space-y-2 text-sm text-white/80"
          variants={detailVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
            <p className="text-white/70">{subtitle}</p>
            {price && <p className="font-semibold text-royal-gold">{price}</p>}
          </div>
          <p>{description}</p>
        </motion.div>
      </div>
    </motion.article>
  );
}
