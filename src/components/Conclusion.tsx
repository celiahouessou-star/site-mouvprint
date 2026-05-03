import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logo from "@/assets/logo.png";

interface ConclusionProps {
  onOpenVideo: () => void;
}

const Conclusion = ({ onOpenVideo }: ConclusionProps) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 blur-[180px] rounded-full pointer-events-none animate-pulse-glow" />

      <div ref={ref} className="container reveal relative z-10 text-center max-w-3xl">
        <img
          src={logo}
          alt="Logo MOUV'PRINT"
          width={240}
          height={240}
          loading="lazy"
          className="h-44 md:h-56 lg:h-64 w-auto mx-auto mb-8 drop-shadow-[0_0_48px_hsl(268_90%_65%/0.6)]"
        />
        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-10">
          Avec <span className="text-gradient">MOUV'PRINT</span>, la ville se regarde autrement et{" "}
          <span className="text-gradient">vit à travers le temps</span>.
        </h2>

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
    </section>
  );
};

export default Conclusion;
