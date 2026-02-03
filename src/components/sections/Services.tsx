import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import servicesYogaPose from "@/assets/services-yoga-pose.png";
import sunsetYoga from "@/assets/sunset-yoga.jpg";
import yogaWorkshop from "@/assets/yoga-workshop.jpg";

const services = [
  {
    title: "Rehabilitation",
    subtitle: "Healing & Recovery",
    description:
      "Guided therapeutic yoga techniques to address specific injuries, alleviate chronic pain, improve flexibility, and promote overall well-being through tailored sequences and modifications.",
    image: servicesYogaPose,
  },
  {
    title: "Athletic",
    subtitle: "Performance Enhancement",
    description:
      "Optimize athletic performance through yoga that increases mobility, builds core strength, enhances mental focus, and prevents injuries. Uncover your untapped potential.",
    image: sunsetYoga,
  },
  {
    title: "Beginners",
    subtitle: "Foundation Building",
    description:
      "A nurturing and supportive atmosphere for those new to yoga, where you can gradually build strength, flexibility, and mindfulness with patience and comprehensive guidance.",
    image: yogaWorkshop,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-charcoal" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
            Private Classes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Personalized <span className="text-gradient-gold">Yoga</span>
          </h2>
          <div className="line-accent w-24 mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl text-foreground mt-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Online/In-Person Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20 pt-16 border-t border-border"
        >
          <p className="text-muted-foreground font-sans text-sm tracking-wide mb-8">
            All classes available both <span className="text-primary">Online</span> and{" "}
            <span className="text-primary">In-Person</span>
          </p>
          <a href="#contact" className="btn-elegant">
            Book a Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
