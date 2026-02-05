import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
              The Outlier Protocol
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              Mastery Over
              <br />
              <span className="text-gradient-gold">Comfort</span>
            </h2>

            <div className="line-accent w-16 mb-8 mx-auto" />

            <div className="space-y-6 text-muted-foreground font-sans text-base leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                The Outlier Protocol is a high-performance wellness architecture designed for the global elite—CEOs, VIPs, and individuals operating in high-pressure environments. Moving away from traditional passive recovery, the protocol focuses on active optimization, bridging the gap between ancient disciplines and modern bio-performance.
              </p>
              
              <p>
                Its core philosophy, "Mastery Over Comfort," emphasizes that true peak performance is achieved through the technical recalibration of human mechanics and neural resilience.
              </p>

              <p>
                The protocol is structured into three distinct modules, each serving a specific strategic purpose:
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="module-1" className="border-primary/20">
                  <AccordionTrigger className="text-foreground font-serif text-lg hover:no-underline">
                    Module I: Neural Recalibration
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p><strong className="text-foreground">The Goal:</strong> Nervous System Restoration.</p>
                    <p><strong className="text-foreground">The Experience:</strong> This module acts as a technical intervention to release accumulated biological stress. Using targeted movement and advanced breathwork techniques, it transitions the organism from a "fight or flight" state to one of "optimal recovery."</p>
                    <p><strong className="text-foreground">Strategic Application:</strong> It is specifically designed for the Arrival Phase of a stay, making it the ideal solution for neutralizing jet lag and the immediate stressors of high-stakes travel.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="module-2" className="border-primary/20">
                  <AccordionTrigger className="text-foreground font-serif text-lg hover:no-underline">
                    Module II: Structural Power
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p><strong className="text-foreground">The Goal:</strong> Functional Power and Physical Mastery.</p>
                    <p><strong className="text-foreground">The Experience:</strong> This is the core of the High-Performer Protocol. It utilizes the principles of biomechanics combined with the discipline of Ashtanga and Hatha Yoga to build structural integrity. Rather than simple exercise, this module is a strategic alignment session.</p>
                    <p><strong className="text-foreground">Strategic Application:</strong> The focus is on minimizing physical "friction"—the minor misalignments and inefficiencies that drain energy—thereby maximizing the body's total energy output and physical power.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="module-3" className="border-primary/20">
                  <AccordionTrigger className="text-foreground font-serif text-lg hover:no-underline">
                    Module III: The Ascent (Signature Experience)
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p><strong className="text-foreground">The Goal:</strong> Mental Clarity and Flow State.</p>
                    <p><strong className="text-foreground">The Experience:</strong> Considered the pinnacle of the protocol, The Ascent is an immersive, high-aesthetic experience. It combines advanced breathwork with live sonic frequencies and a DJ set. The movement and breath are synchronized to guide the participant into a state of absolute euphoria and mental clarity.</p>
                    <p><strong className="text-foreground">Strategic Application:</strong> It is offered as a Bespoke Private session or an Exclusive Group Event, serving as a transformative "peak experience" that unlocks the creative and cognitive flow state necessary for high-level leadership.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>

        {/* Collaboration & Delivery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-20"
        >
          <span className="block text-center text-primary font-sans text-xs tracking-[0.3em] uppercase mb-8">
            Collaboration & Delivery
          </span>
          
          <p className="text-center text-muted-foreground font-sans text-base leading-relaxed max-w-3xl mx-auto mb-12">
            The protocol is delivered through three specialized formats to ensure it fits the lifestyle of the modern outlier:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-background/50 text-center">
              <h4 className="font-serif text-xl text-foreground mb-4">Private Residency</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Personalized 1-on-1 guidance provided within private suites or villas.
              </p>
            </div>
            <div className="p-8 border border-border bg-background/50 text-center">
              <h4 className="font-serif text-xl text-foreground mb-4">The Outlier Journey</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A modular 3- or 5-day intensive covering the full spectrum of the method for sustainable results.
              </p>
            </div>
            <div className="p-8 border border-border bg-background/50 text-center">
              <h4 className="font-serif text-xl text-foreground mb-4">Signature Events</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Limited-edition workshops designed to be the highlight of a luxury resort's seasonal wellness calendar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
