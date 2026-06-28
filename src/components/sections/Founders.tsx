import { FOUNDERS } from "@/constants/menu";
import RevealCard from "@/components/ui/RevealCard";

export default function Founders() {
  return (
    <section id="founders" className="py-10 md:py-24">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.35em] text-royal-gold/70">
          Heritage
        </p>
        <h2 className="font-heading text-2xl text-royal-gold sm:text-3xl md:text-4xl">
          The Minds Behind Sitayya
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {FOUNDERS.map((founder) => (
          <RevealCard
            key={founder.name}
            title={founder.name}
            subtitle={founder.role}
            description={founder.bio}
            imageUrl={founder.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
