import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Glasses, ScanLine, Layout, Hourglass, Wand2 } from "lucide-react";

const steps = [
  { icon: Glasses, title: "Mettre les lunettes", desc: "Équipez-vous de la technologie AR" },
  { icon: ScanLine, title: "Scanner l'environnement", desc: "L'IA détecte le contexte urbain" },
  { icon: Layout, title: "Interface AR", desc: "Le monde réel s'enrichit d'éléments virtuels." },
  { icon: Hourglass, title: "Choix d'une époque", desc: "Passé, présent ou futur — d'un simple regard." },
  { icon: Wand2, title: "Transformation", desc: "La ville se métamorphose autour de vous." },
];

const HowItWorks = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 blur-[180px] rounded-full pointer-events-none" />

      <div ref={ref} className="container reveal relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6 font-semibold">
            — En 5 étapes
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight whitespace-nowrap">
            Comment ça <span className="text-gradient">marche{"\u00a0"}?</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"} text-center lg:text-inherit`}>
                    <div className="inline-flex items-center gap-3 mb-3">
                      <span className="font-display font-black text-5xl text-gradient leading-none">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 lg:inline-block">
                      {s.desc}
                    </p>
                  </div>

                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl glass-strong border border-primary/30 flex items-center justify-center shadow-glow-violet animate-pulse-glow">
                      <Icon className="w-9 h-9 text-primary-glow" />
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
