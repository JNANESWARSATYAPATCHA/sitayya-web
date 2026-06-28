import BentoGallery from "@/components/sections/BentoGallery";
import Heritage from "@/components/sections/Heritage";
import Founders from "@/components/sections/Founders";
import FullMenu from "@/components/sections/FullMenu";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <Hero />
      <BentoGallery />
      <FullMenu />
      <Founders />
      <Heritage />
      <Reviews />
    </main>
  );
}
