import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import arInterface from "@/assets/ar-interface.jpeg";

interface DemoProps {
  onOpenVideo: () => void;
}

const Demo = ({ onOpenVideo }: DemoProps) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="demo" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div ref={ref} className="container reveal relative z-10">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-card-elevated">
          <img
            src={arInterface}
            alt="Aperçu de l'interface AR MOUV'PRINT"
            loading="lazy"
            width={1600}
            height={1200}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="relative z-10 px-6 py-24 md:py-32 text-center">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6 font-semibold">
              — Démonstration
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
              Voir l'<span className="text-gradient">expérience</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Plongez dans une démonstration immersive de MOUV'PRINT en action.
            </p>

            <button
              type="button"
              onClick={onOpenVideo}
              className="group inline-flex items-center gap-4 pl-3 pr-8 py-3 rounded-full bg-gradient-future text-primary-foreground font-semibold shadow-glow-violet hover:shadow-neon hover:scale-105 transition-all duration-500 border border-white/15"
            >
              <span className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition">
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              </span>
              Voir la démonstration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
