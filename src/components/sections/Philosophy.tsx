import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary rounded-full" />
      </div>


      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          {/* Title */}
          <div className="text-center">
            <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
              Philosophy
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              Remember to
              <br />
              <span className="text-gradient-gold italic">Breathe</span>
            </h2>

            <div className="line-accent w-24 mx-auto md:mx-0 mb-12" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8 text-center"
        >
          <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
            "The act of synchronizing breathing, movement and music really sets you free 
            and energises you."
          </p>

          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-2xl mx-auto">
            We improvise sequences and music according to the students' energy at every 
            moment during the 75 minutes that the class lasts. By listening to the music, 
            people can travel and elevate their mood while doing yoga. The atmosphere 
            changes with the asanas and the sequences of exercises, achieving an appropriate 
            rhythm for each level of intensity.
          </p>

          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-2xl mx-auto">
            Dimitris's approach goes beyond physical practice. He believes in the transformative 
            power of yoga as a tool for personal growth and self-discovery. Through his classes, 
            he encourages students to cultivate mindfulness, tap into their inner strength, and 
            find balance in all aspects of life.
          </p>
        </motion.div>

        {/* Ayurveda Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 p-8 md:p-12 border border-border bg-charcoal/50 text-center"
        >
          <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
            Ayurveda Integration
          </span>
          <p className="text-foreground font-serif text-lg md:text-xl leading-relaxed">
            By sharing Ayurvedic wisdom and its healing power in a modern language, 
            Dimitris empowers his students to achieve holistic wellbeing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
