import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Concept", href: "#concept" },
  { label: "Comment ça marche ?", href: "#how" },
  { label: "Galerie", href: "#gallery" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between gap-6 px-4 md:px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled ? "glass-strong shadow-card-elevated" : "glass"
          }`}
          aria-label="Navigation principale"
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Logo MOUV'PRINT"
              width={64}
              height={64}
              className="h-14 w-14 md:h-16 md:w-16 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <span className="font-display font-bold tracking-tight text-lg hidden sm:inline">
              MOUV<span className="text-gradient">'PRINT</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#demo"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gradient-future text-primary-foreground text-sm font-semibold shadow-glow-violet hover:scale-105 transition-all duration-500"
          >
            Voir la démo
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="block w-5 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-5 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-5 h-0.5 bg-foreground" />
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-3xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-sm bg-gradient-future text-primary-foreground font-semibold text-center"
                >
                  Voir la démo
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
