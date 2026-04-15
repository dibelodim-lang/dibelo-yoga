import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import outlyerBg from "@/assets/outlyer-bg.png";

const OutlyerProtocolProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={outlyerBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
            The Outlyer Protocol Project
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Redefining <span className="text-gradient-gold">Human Potential</span>
          </h2>

          <div className="line-accent w-24 mx-auto mb-8" />

          <div className="space-y-6 text-muted-foreground font-sans text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              Alongside my private sessions, I am the founder of the Outlier Protocol. This project is a holistic approach to movement and consciousness, designed for those who seek to transcend the conventional.
            </p>
            <p>
              The Outlyer Protocol merges the dynamics of Yoga with an 'outlier' mindset breaking boundaries and exploring the full spectrum of human capability. Whether we meet on a mountain top or a coastal retreat, this is about more than just exercise; it's about a radical shift in perspective.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-8">
            "Ready to book your private experience?"
          </p>
          <a href="#contact" className="btn-elegant">
            Inquire for Travel & Private Sessions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OutlyerProtocolProject;
