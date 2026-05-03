import { ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1254}
          height={1254}
          className="w-full h-full object-cover scale-110 animate-blur-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-gradient-glow opacity-70" />
      </div>

      {/* Floating orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-float" />
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/25 blur-[140px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-scan" />
      </div>

      <div className="container relative z-10 text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Expérience en réalité augmentée
          </span>
        </div>

        <h1
          className="font-display font-black tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-foreground">MOUV</span>
          <span className="text-gradient">'PRINT</span>
        </h1>

        <p
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          Voyager dans le temps en un regard
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#concept"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-future text-primary-foreground font-semibold text-base shadow-glow-violet hover:shadow-neon hover:scale-105 transition-all duration-500 border border-white/10"
          >
            Découvrir l'expérience
            <ArrowDown className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-1" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-strong hover:bg-white/10 hover:border-white/30 transition-all duration-500 font-medium"
          >
            Voir la démonstration
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
