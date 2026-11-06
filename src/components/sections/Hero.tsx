import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { studioPhotos } from "@/lib/studio-photos";

const Hero = () => {
  const reduced = useReducedMotion();
  return <>
    <section className="studio-inverse relative min-h-[620px] h-[86svh] max-h-[900px] flex items-center overflow-hidden">
      <img src={studioPhotos[1].src} alt={studioPhotos[1].alt} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover object-[65%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/10" />
      <div className="container-wide relative w-full pt-20 pb-16">
        <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
          <p className="text-primary uppercase text-xs mb-7">Private practice · Global connection</p>
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light leading-none mb-7">Dimitris <span className="block italic">Dibelo</span></h1>
          <p className="font-serif text-2xl sm:text-3xl mb-5">Room to move. Space to breathe.</p>
          <p className="text-foreground/80 text-sm sm:text-base leading-relaxed max-w-md">A personal approach to yoga, movement and mindful living. Practice with intention, wherever you are.</p>
          <div className="flex flex-wrap gap-3 mt-9"><Button asChild className="rounded-none h-12 px-6"><a href="#services">Explore Classes<ArrowUpRight /></a></Button><Button asChild variant="outline" className="rounded-none h-12 px-6 bg-transparent border-foreground/50 text-foreground hover:bg-foreground hover:text-background"><a href="#mentorship">Begin Your Journey</a></Button></div>
        </motion.div>
      </div>
      <a href="#about" aria-label="Discover the studio" className="absolute right-6 bottom-8 border border-foreground/40 rounded-full p-3 text-foreground"><ArrowDown size={20} /></a>
    </section>
    <div className="bg-secondary border-b border-border"><div className="container-wide flex flex-wrap items-center justify-center sm:justify-between gap-4 py-6 text-[10px] sm:text-xs uppercase text-muted-foreground"><span>Hatha · Vinyasa · Ashtanga</span><span>In-person & online</span><span>Breath. Balance. Connection.</span></div></div>
  </>;
};
export default Hero;
