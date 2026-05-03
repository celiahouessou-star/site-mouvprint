import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Modes from "@/components/Modes";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Gallery from "@/components/Gallery";
import Value from "@/components/Value";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    document.title = "MOUV'PRINT — Voyager dans le temps en un regard";
    const desc =
      "MOUV'PRINT : une expérience en réalité augmentée pour explorer la ville à travers le passé, le présent et le futur.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Modes />
        <HowItWorks />
        <Demo onOpenVideo={() => setVideoOpen(true)} />
        <Gallery />
        <Value />
        <Conclusion onOpenVideo={() => setVideoOpen(true)} />
      </main>
      <Footer />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
};

export default Index;
