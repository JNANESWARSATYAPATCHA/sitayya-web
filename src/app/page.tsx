import Link from "next/link";
import BentoGallery from "@/components/sections/BentoGallery";
import Heritage from "@/components/sections/Heritage";
import Founders from "@/components/sections/Founders";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:gap-20 px-4 md:px-6 pb-12 md:pb-24 pt-8 md:pt-16 sm:px-10 lg:px-16 overflow-x-hidden">
      <Hero />
      <BentoGallery />
      
      <section className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-12 md:py-20 text-center backdrop-blur">
        <p className="text-xs uppercase tracking-[0.35em] text-royal-gold/70">
          A Culinary Journey
        </p>
        <h2 className="max-w-2xl font-heading text-2xl md:text-3xl lg:text-4xl text-white">
          Discover over 100+ authentic Bhimavaram delicacies.
        </h2>
        <Link
          href="/menu"
          className="mt-4 rounded-full bg-royal-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-royal-dark transition hover:bg-white"
        >
          Explore Our Full Menu
        </Link>
      </section>

      <Founders />
      <Heritage />
      <Reviews />
    </main>
  );
}
