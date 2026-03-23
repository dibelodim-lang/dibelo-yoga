import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Anchor, Globe, Monitor } from "lucide-react";

const YogaWithoutBoundaries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Home,
      title: "Villa Yoga Sessions",
      description: "Transform your garden or terrace into your own personal sanctuary.",
    },
    {
      icon: Anchor,
      title: "On-Board Practice",
      description: "Specialized sessions designed for the unique space and flow of a yacht.",
    },
    {
      icon: Globe,
      title: "Global Travel Companion",
      description: "Book your private instructor for the duration of your holidays, anywhere in the world.",
    },
    {
      icon: Monitor,
      title: "Private 1-on-1 Online Coaching",
      description: "High-performance guidance and bespoke programming, delivered directly to you, anywhere in the world.",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 border border-primary rounded-full" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
            Yoga Without Boundaries
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Your Practice, Your Space,{" "}
            <span className="text-gradient-gold">Anywhere in the World.</span>
          </h2>

          <div className="line-accent w-24 mx-auto mb-8" />

          <div className="space-y-6 text-muted-foreground font-sans text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              Yoga is not confined by four walls. Whether you are on a summer getaway, relaxing at a secluded villa, or sailing the open seas on your yacht, your practice follows you.
            </p>
            <p>
              I offer bespoke Vinyasa Yoga sessions tailored to your unique environment and schedule, regardless of your location globally. From the serenity of a deck in the middle of the Aegean to the privacy of your vacation residence, I bring energy, balance, and mindfulness directly to you.
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              className="p-8 border border-border bg-card text-center"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-5" />
              <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaWithoutBoundaries;
