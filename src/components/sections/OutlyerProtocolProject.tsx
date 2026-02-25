import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OutlyerProtocolProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 border border-primary rounded-full" />
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
              Alongside my private sessions, I am the founder of the Outlyer Protocol. This project is a holistic approach to movement and consciousness, designed for those who seek to transcend the conventional.
            </p>
            <p>
              The Outlyer Protocol merges the dynamics of Yoga with an 'outlyer' mindset—breaking boundaries and exploring the full spectrum of human capability. Whether we meet on a mountain top or a coastal retreat, this is about more than just exercise; it's about a radical shift in perspective.
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
            Inquire for Travel & Villa Sessions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OutlyerProtocolProject;
