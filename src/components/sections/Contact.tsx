import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
            Get in Touch
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Begin Your <span className="text-gradient-gold">Journey</span>
          </h2>

          <div className="line-accent w-24 mx-auto mb-8" />

          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-xl mx-auto mb-12">
            Whether you're recovering from an injury, seeking to elevate your athletic 
            performance, or taking your first steps into the world of yoga, together 
            we will cultivate strength, balance, and serenity.
          </p>

          {/* Contact Button */}
          <motion.a
            href="mailto:contact@dibelo.yoga"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="btn-primary inline-flex items-center gap-3 mb-16"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-8"
          >
            <a
              href="https://www.youtube.com/channel/UCFhrr4fHY9bcLCxK3zA278A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/dimitrisdibelo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Studio Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <p className="text-muted-foreground font-sans text-sm mb-4">
              Owner of
            </p>
            <a
              href="https://hathastudio.gr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xl text-foreground hover:text-primary transition-colors duration-300"
            >
              Yoga & Pilates Studio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
