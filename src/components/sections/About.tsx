import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
              About
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              A Journey of
              <br />
              <span className="text-gradient-gold">Transformation</span>
            </h2>

            <div className="line-accent w-16 mb-8" />

            <div className="space-y-6 text-muted-foreground font-sans text-base leading-relaxed">
              <p>
                Dimitris Dibelo is a globally-renowned yoga teacher with over a decade of 
                experience. His journey into yoga began at the age of 23 when he encountered 
                serious issues with his lower back and knees. Motivated to find a solution, 
                he immersed himself in the practice and eventually turned his passion into a career.
              </p>
              
              <p>
                Authorized by Yoga Alliance as an Experienced Registered Yoga Teacher (ERYT) 
                at the 500-hour level, Dimitris offers trainings in Ashtanga Vinyasa Yoga and 
                Hatha Yoga. His teaching style combines the wisdom of his teacher, Kristina 
                Karitinos Ireland, with his own Italian temperament and sense of humor.
              </p>

              <p>
                Dynamic and playful, his classes emphasize the importance of breath, alignment, 
                and respect for the human body, while integrating the ancient healing wisdom 
                of Ayurveda.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <span className="block font-serif text-4xl text-primary">15+</span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Years</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="block font-serif text-4xl text-primary">E-RYT</span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">500 Hour</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="block font-serif text-4xl text-primary">∞</span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Students</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
