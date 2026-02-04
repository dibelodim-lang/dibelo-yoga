import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 1
      }} className="text-center">
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

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1,
          delay: 0.3
        }} className="flex flex-col items-center gap-6 mb-12">
            <a href="mailto:dibelodim@gmail.com" className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans text-lg">
              <Mail className="w-5 h-5" />
              dibelodim@gmail.com
            </a>
            <a href="https://wa.me/306936772036" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans text-lg">
              <Phone className="w-5 h-5" />
              +30 6936772036
            </a>
          </motion.div>


          {/* Studio Link */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1,
          delay: 0.7
        }} className="mt-16 pt-12 border-t border-border">
            <p className="text-muted-foreground font-sans text-sm mb-4">
              Owner of
            </p>
            <a href="https://hathastudio.gr/" target="_blank" rel="noopener noreferrer" className="font-serif text-xl text-foreground hover:text-primary transition-colors duration-300">Hatha Yoga & Pilates Studio</a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Contact;