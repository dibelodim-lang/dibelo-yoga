import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import costaVayaImg from "@/assets/costa-vaya-dj.jpg";
import breatheAscent from "@/assets/breathe-ascent.png";


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
          className="flex flex-col items-center justify-center"
        >
          <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-8">
            Philosophy
          </span>

          {/* Title with elegant ascent mark */}
          <div className="relative flex items-center justify-center gap-5 md:gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, rotate: -25, scale: 0.7 }}
              animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <img
                src={breatheAscent}
                alt=""
                aria-hidden="true"
                className="relative w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain animate-[spin_60s_linear_infinite]"
              />
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-left">
              Remember to
              <br />
              <span className="text-gradient-gold italic">Breathe</span>
            </h2>
          </div>

          <div className="line-accent w-24 mx-auto mb-12" />
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

        {/* Costa Vaya — Music & Sound */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 md:mt-28"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
              Sound & Soul
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
              The Sound of the <span className="text-gradient-gold italic">Practice</span>
            </h3>
            <div className="line-accent w-24 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 1 }}
              className="md:col-span-2 relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="relative overflow-hidden border border-primary/20">
                <img
                  src={costaVayaImg}
                  alt="Costa Vaya — underground DJ and music composer"
                  loading="lazy"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-serif text-xl text-foreground italic">Costa Vaya</p>
                <p className="text-primary font-sans text-[10px] tracking-[0.3em] uppercase mt-1">
                  Resident Sound
                </p>
              </div>
            </motion.div>

            {/* Bio */}
            <div className="md:col-span-3 space-y-6">
              <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
                "A pure underground, low-profile artist who speaks through his music."
              </p>
              <p className="text-muted-foreground font-sans text-base leading-relaxed">
                Emotional at times, hard and raw at others, Costa Vaya's sets move effortlessly
                between house and techno, creating deeply immersive journeys on the dancefloor.
              </p>
              <p className="text-muted-foreground font-sans text-base leading-relaxed">
                Having studied Music Technology and Audio Engineering in Athens, he has released
                on labels such as MoBlack Records, Ocha Records, Fatsouls Records, Atal Music and
                Deep Soul Space, while also composing original scores for films, theatrical
                performances and documentaries.
              </p>
              <p className="text-muted-foreground font-sans text-base leading-relaxed">
                Today he devotes himself to an old-school label dedicated exclusively to vinyl —
                a return to the roots, to quality sound, authenticity and the true spirit of
                dance culture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
