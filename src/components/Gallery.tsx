import { useScrollReveal } from "@/hooks/useScrollReveal";
import identite from "@/assets/Idendité_bg.png";
import arInterface from "@/assets/ar-interface.jpeg";
import wireframe from "@/assets/wireframe.jpg";
import arGlasses from "@/assets/ar-glasses.png";
import scenePast from "@/assets/scene-past.png";
import scenePresent from "@/assets/scene-present.png";
import sceneFuture from "@/assets/scene-future.jpeg";

type OrbitItem = {
  src: string;
  alt: string;
  label: string;
};

/** Visuels en couronne autour de l’identité (6 segments, depuis le haut) */
const orbitItems: OrbitItem[] = [
  { src: arGlasses, alt: "Lunettes de réalité augmentée portées", label: "Hardware" },
  { src: arInterface, alt: "Interface AR holographique", label: "Interface AR" },
  { src: wireframe, alt: "Wireframe de l'application", label: "Wireframe" },
  { src: scenePast, alt: "Scène passé sépia", label: "Passé" },
  { src: scenePresent, alt: "Scène présent lumineuse", label: "Présent" },
  { src: sceneFuture, alt: "Scène futur néon", label: "Futur" },
];

/** Position du centre de chaque vignette sur le cercle (pourcentages du conteneur) */
function polarPercent(index: number, total: number, radius: number) {
  const start = -Math.PI / 2;
  const step = (2 * Math.PI) / total;
  const rad = start + index * step;
  return {
    left: 50 + radius * Math.cos(rad),
    top: 50 + radius * Math.sin(rad),
  };
}

const Gallery = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  const n = orbitItems.length;
  const radius = 41;
  const cardPct = 23;

  return (
    <section id="gallery" className="relative py-36 md:py-44">
      <div ref={ref} className="container reveal">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            — Galerie
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Univers <span className="text-gradient">visuel</span>
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[min(96vw,1040px)] px-1 sm:px-2">
          {/* Conteneur carré = base du cercle */}
          <div className="relative mx-auto aspect-square w-full">
            {/* Cercles guides */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[91%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
              aria-hidden
            />

            {/* Couronne */}
            {orbitItems.map((it, i) => {
              const { left, top } = polarPercent(i, n, radius);
              return (
                <figure
                  key={it.label}
                  className="group absolute z-[1] aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-muted/20 shadow-card-elevated glass transition-all duration-500 hover:z-[5] hover:border-primary/40 hover:shadow-glow-violet sm:rounded-3xl md:rounded-[1.75rem]"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${cardPct}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-85 transition-opacity group-hover:opacity-100" />
                  <figcaption className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 md:bottom-4 md:left-4 md:right-4">
                    <span className="truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/90 sm:text-xs md:text-sm">
                      {it.label}
                    </span>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary-glow shadow-glow-violet sm:h-2.5 sm:w-2.5" />
                  </figcaption>
                </figure>
              );
            })}

            {/* Identité : couches plein cercle (inset-0 + rounded-full) + radial blanc qui épouse le disque */}
            <figure className="group absolute left-1/2 top-1/2 z-10 isolate aspect-square w-[34%] min-w-[10rem] max-w-[18.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white/15 shadow-glow-violet sm:w-[32%]">
              <div
                className="absolute inset-0 rounded-full bg-gradient-future brightness-[0.86] saturate-[1.06]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_26%,hsl(0_0%_100%_/_0.34)_0%,hsl(0_0%_100%_/_0.09)_38%,transparent_58%),radial-gradient(circle_at_72%_74%,hsl(0_0%_100%_/_0.08)_0%,transparent_46%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-black/5 to-black/22"
                aria-hidden
              />
              <div className="relative z-10 flex h-full w-full items-center justify-center p-4 sm:p-5 md:p-6">
                <img
                  src={identite}
                  alt="Identité graphique MOUV'PRINT"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="max-h-[90%] max-w-[94%] object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
