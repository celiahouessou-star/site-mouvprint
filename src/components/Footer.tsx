import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Logo MOUV'PRINT"
            width={64}
            height={64}
            loading="lazy"
            className="h-14 w-14 md:h-16 md:w-16 object-contain shrink-0"
          />
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            MOUV<span className="text-gradient">'PRINT</span>
          </span>
        </div>
        <p className="text-xs tracking-wider whitespace-nowrap">
          © {new Date().getFullYear()} MOUV'PRINT — Voyager dans le temps en un regard.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
