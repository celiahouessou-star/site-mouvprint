import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Landmark, Sparkles, Building2, EyeOff, Palette, Layers } from "lucide-react";

const values = [
  { icon: Landmark, title: "Valorise le patrimoine", desc: "Faire revivre l'histoire au cœur de vos rues." },
  { icon: Sparkles, title: "Culture immersive", desc: "Une narration vivante, sensorielle et augmentée." },
  { icon: Building2, title: "Réactive les centres-villes", desc: "Attire et fait vibrer les espaces publics." },
  { icon: EyeOff, title: "Sans smartphone", desc: "Une expérience pure, libérée des écrans." },
  { icon: Palette, title: "Design × Technologie", desc: "Fusion harmonieuse entre créativité et innovation." },
  { icon: Layers, title: "Navigation temporelle unique", desc: "Un lieu, trois temporalités." },
];

const Value = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="value" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[160px] rounded-full pointer-events-none" />

      <div ref={ref} className="container reveal relative z-10">
        <div className="text-center mb-20 mx-auto px-2">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6 font-semibold">
            — Valeur ajoutée
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight whitespace-nowrap">
            Pourquoi <span className="text-gradient">MOUV'PRINT</span>{"\u00a0"}?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="group relative p-8 rounded-3xl glass border border-white/10 hover:border-primary/40 hover:shadow-glow-violet transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-future flex items-center justify-center mb-6 shadow-glow-violet group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{v.title}</h3>
                <p
                  className={`text-muted-foreground text-sm leading-relaxed ${
                    i === values.length - 1 ? "whitespace-nowrap" : ""
                  }`}
                >
                  {v.desc}
                </p>

                <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/40">
                  0{i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Value;
