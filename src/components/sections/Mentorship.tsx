import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Activity, ScanLine, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import AssessmentDialog from "./AssessmentDialog";
import { DIAGNOSTIC_MINUTES, MENTORSHIP_CAPACITY } from "@/lib/mentorship";

const steps = [
  { icon: ScanLine, title: "Biomechanical & Neural Intake", description: `A focused ${DIAGNOSTIC_MINUTES}-minute diagnostic session to assess joint mobility, movement blind spots, and autonomic stress baseline.` },
  { icon: Activity, title: "Custom Protocol Design", description: "Integrating Outlyer Protocol movement mechanics, targeted pranayama, and Ayurvedic recovery habits directly into your weekly schedule." },
  { icon: Video, title: "Live 1-on-1 Real-Time Coaching", description: "High-definition two-way video instruction with immediate form adjustments, progressive overload, and nervous system recalibration." },
];
const Mentorship = () => {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return <section id="mentorship" className="section-padding bg-charcoal border-y border-border">
    <div className="container-wide">
      <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }}>
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <p className="text-primary uppercase text-xs mb-7">Bespoke Remote Mentorship</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-balance mb-8">Precision Movement & Nervous System Regulation. <span className="text-gradient-gold">Tailored to Your Architecture.</span></h2>
          <div className="line-accent w-24 mx-auto mb-8" />
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">Move beyond generic video libraries. Experience real-time biomechanical analysis, proprietary Ashtanga & Rocket conditioning, and traditional Pranayama protocols built specifically for high-performers, recovery, and longevity.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">{steps.map((step, index) => <article key={step.title} className="group border border-border rounded-sm p-7 lg:p-9 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-gold motion-reduce:transition-none">
          <div className="flex justify-between items-center mb-9"><span className="font-serif text-3xl text-primary/70">0{index + 1}</span><step.icon className="h-6 w-6 text-primary" strokeWidth={1} aria-hidden="true" /></div>
          <h3 className="font-serif text-2xl lg:text-3xl leading-tight mb-5">{step.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
        </article>)}</div>
        <div className="text-center py-14 sm:py-16">
          <Button onClick={() => setOpen(true)} className="h-auto min-h-14 px-6 sm:px-9 rounded-sm whitespace-normal uppercase text-xs leading-relaxed">Apply for a Diagnostic Assessment<ArrowUpRight aria-hidden="true" /></Button>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-lg mx-auto mt-5">Strictly limited to <span className="text-primary">{MENTORSHIP_CAPACITY} active 1-on-1 clients</span> at any time to guarantee bespoke attention.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 border-t border-border pt-8">{["Direct real-time 1-on-1 feedback (No pre-recorded videos)", "E-RYT 500 & Bihar School of Yoga Lineage", "Flexible global time zone scheduling"].map(text => <p key={text} className="flex gap-3 text-xs leading-relaxed text-muted-foreground"><Check className="text-primary h-4 w-4 shrink-0" aria-hidden="true" />{text}</p>)}</div>
      </motion.div>
    </div>
    <AssessmentDialog open={open} onOpenChange={setOpen} />
  </section>;
};
export default Mentorship;