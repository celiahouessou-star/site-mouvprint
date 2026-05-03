import { useScrollReveal } from "@/hooks/useScrollReveal";

const Concept = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="concept" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

      <div ref={ref} className="container reveal relative z-10 text-center max-w-4xl">
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6 font-semibold">
          — Le concept
        </span>
        <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-[1.05]">
          Une nouvelle manière
          <br />
          d'<span className="text-gradient">explorer la ville</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
          MOUV'PRINT est une expérience en réalité augmentée qui permet d'explorer une ville
          à travers trois époques : le <span className="text-past font-medium">passé</span>,
          le <span className="text-foreground font-medium">présent</span> et
          le <span className="text-gradient font-medium">futur</span>.
        </p>
      </div>
    </section>
  );
};

export default Concept;
