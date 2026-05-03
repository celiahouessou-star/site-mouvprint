import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

const VideoModal = ({ open, onClose }: VideoModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Démonstration vidéo MOUV'PRINT"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
    >
      {/* Background flou */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-2xl" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl glass-strong rounded-3xl overflow-hidden border border-white/15 shadow-neon animate-scale-in"
      >
        {/* Bouton fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la vidéo"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-strong hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vidéo */}
        <div className="aspect-video bg-black">
          <video
            controls
            autoPlay
            className="h-full w-full"
          >
            <source
              src={`${import.meta.env.BASE_URL}videos/demo.mp4`}
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;