import { useScrollReveal } from "@/hooks/useScrollReveal";
import scenePast from "@/assets/scene-past.png";
import scenePresent from "@/assets/scene-present.png";
import sceneFuture from "@/assets/scene-future.jpeg";
import { Clock, Eye, Rocket } from "lucide-react";

const modes = [
  {
    id: "past",
    label: "Passé",
    icon: Clock,
    image: scenePast,
    text: "Redonner vie aux bâtiments et scènes historiques.",
    accent: "text-past",
    glow: "shadow-glow-sepia",
    badge: "bg-past/20 text-past border-past/30",
  },
  {
    id: "present",
    label: "Présent",
    icon: Eye,
    image: scenePresent,
    text: "Afficher des informations culturelles et créer des fresques interactives.",
    accent: "text-foreground",
    glow: "shadow-card-elevated",
    badge: "bg-white/10 text-foreground border-white/20",
  },
  {
    id: "future",
    label: "Futur",
    icon: Rocket,
    image: sceneFuture,
    text: "Imaginer la ville de demain avec des projections futuristes.",
    accent: "text-gradient",
    glow: "shadow-glow-violet",
    badge: "bg-primary/20 text-primary-glow border-primary/40",
  },
];

const Modes = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="modes" className="relative py-32 md:py-40">
      <div ref={ref} className="container reveal">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6 font-semibold">
            — Trois époques
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
            Choisissez votre <span className="text-gradient">époque</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {modes.map((m, i) => {
            const Icon = m.icon;
            return (
              <article
                key={m.id}
                className={`group relative overflow-hidden rounded-3xl glass border border-white/10 hover:border-white/30 ${m.glow} transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02]`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={m.image}
                    alt={`Vue ${m.label.toLowerCase()} de la ville`}
                    loading="lazy"
                    width={1280}
                    height={1600}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div
                    className={`inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border ${m.badge} mb-4 backdrop-blur-md`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold tracking-widest uppercase">
                      {m.label}
                    </span>
                  </div>
                  <h3 className={`font-display font-bold text-3xl md:text-4xl mb-3 ${m.accent}`}>
                    {m.label}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {m.text}
                  </p>
                </div>

                {/* AR scan border effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary-glow" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary-glow" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary-glow" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary-glow" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modes;
