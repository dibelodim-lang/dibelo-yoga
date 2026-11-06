import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AssessmentDialog from "./AssessmentDialog";
import { studioPhotos } from "@/lib/studio-photos";
const disciplines = [
  { title: "Hatha Yoga", badge: "Foundation & balance", description: "A grounded practice exploring alignment, steady breath and mindful movement.", photo: studioPhotos[9] },
  { title: "Vinyasa Yoga", badge: "Flow & energy", description: "Move with your breath through fluid sequences that build strength and ease.", photo: studioPhotos[8] },
  { title: "Ashtanga Yoga", badge: "Strength & focus", description: "An intentional, dynamic practice rooted in tradition, discipline and progression.", photo: studioPhotos[2] },
  { title: "Specialized Workshops", badge: "Explore & deepen", description: "Go deeper into movement, pranayama and the possibilities of your practice.", photo: studioPhotos[3] },
];
const Services = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  return <section id="services" className="section-padding bg-charcoal">
  <div className="container-wide">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"><div><p className="text-primary text-xs uppercase mb-4">Find your practice</p><h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">Movement for every chapter.</h2></div><p className="text-muted-foreground text-sm leading-relaxed max-w-xs">From your first breath on the mat to a deeper exploration. A practice shaped around you.</p></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">{disciplines.map(item => <article key={item.title} className="group">
      <a href="#contact" aria-label={`Inquire about ${item.title}`} className="block relative aspect-[3/4] overflow-hidden mb-6"><img src={item.photo.src} alt={item.photo.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" /><span className="absolute bottom-4 right-4 bg-background text-foreground p-2 rounded-full"><ArrowUpRight size={18} /></span></a>
      <p className="text-[10px] uppercase text-primary mb-3">{item.badge}</p><h3 className="font-serif text-3xl mb-3">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
    </article>)}</div>
    <div className="mt-14 pt-9 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"><div><h3 className="font-serif text-3xl mb-2">Personalized Yoga</h3><p className="text-sm text-muted-foreground">Healing & recovery · Athletic performance · Beginners</p><p className="text-xs text-muted-foreground mt-2">All classes available Online and In-Person</p></div><Button className="rounded-none h-12 px-7" onClick={() => setAssessmentOpen(true)}>Book a Session<ArrowUpRight /></Button></div>
  </div>
  <AssessmentDialog open={assessmentOpen} onOpenChange={setAssessmentOpen} />
</section>;
};
export default Services;
