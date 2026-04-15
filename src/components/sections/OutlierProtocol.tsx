import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import outlierLogo from "@/assets/outlier-protocol-logo.png";

const OutlierProtocol = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreExpertise = [
  "The Outlier Protocol: Elite-level physical and mental optimization.",
  "Global Educator: Leading International Yoga Teacher Trainings & Workshops worldwide.",
  "Studio Founder: Visionary leadership in Hatha Yoga & Pilates studio management.",
  "International Certification: 500+ hours certified (Ashtanga & Hatha).",
  "Therapeutic Bodywork: Traditional Ayurvedic & Deep Tissue expertise (Sri Lanka).",
  "Nervous System Specialist: Meditation & Pranayama techniques from the Bihar School of India."];


  return (
    <section className="section-padding bg-charcoal relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-primary rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 border border-primary rounded-full" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-12 flex items-start justify-center">

          <img
            src={outlierLogo}
            alt="Outlier Protocol"
            className="w-[15.6rem] md:w-[20.8rem] lg:w-[23.4rem] h-auto" />

        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8 text-center">

          <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
            "I bridge the gap between ancient wisdom and high-performance living."
          </p>

          <div className="space-y-6 text-muted-foreground font-sans text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              With a global footprint spanning from the Bihar School of Yoga in India to elite environments in London, Scotland, and the USA, I have dedicated my career to mastering the mechanics of the human body and mind. As the Founder of my own <a href="https://hathastudio.gr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">Hatha Yoga & Pilates studio</a>, I have spent years cultivating a space for physical transformation and structural integrity.
            </p>

            <p>
              Today, I lead The Outlier Protocol, a bespoke wellness framework designed for high-performers, CEOs, and VIPs who operate in high-pressure environments. Beyond private residency coaching, I lead International Yoga Teacher Trainings and specialized workshops globally, mentoring the next generation of practitioners and shaping the future of wellness education.
            </p>

            <p>
              My methodology integrates advanced Pranayama (Nervous System Regulation), Rocket & Ashtanga Yoga, and Ayurvedic therapeutic practices to ensure peak physical state and mental clarity.
            </p>
          </div>
        </motion.div>

        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16">

          <span className="block text-center text-primary font-sans text-xs tracking-[0.3em] uppercase mb-8">
            Core Expertise
          </span>
          
          <div className="grid md:grid-cols-2 gap-4">
            {coreExpertise.map((item, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="p-4 border border-border bg-background/50 text-muted-foreground font-sans text-sm leading-relaxed">

                {item}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 p-8 md:p-12 border border-primary/30 bg-background/30 text-center">

          <p className="text-foreground font-serif text-lg md:text-xl leading-relaxed">
            Whether it's a luxury resort partnership, a private villa residency, or a yacht-based intensive, I deliver a transformative experience that transcends standard wellness practices.
          </p>
        </motion.div>
      </div>
    </section>);

};

export default OutlierProtocol;