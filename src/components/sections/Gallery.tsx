import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import streetYoga from "@/assets/street-urban-yoga.jpeg";
import sunsetYoga from "@/assets/sunset-yoga.jpg";
import yogaAdjustments from "@/assets/yoga-adjustments.jpg";
import yogaWorkshop from "@/assets/yoga-workshop.jpg";
import tittibhasana from "@/assets/tittibhasana.jpg";

const images = [
  { src: streetYoga, alt: "Urban street yoga practice" },
  { src: sunsetYoga, alt: "Sunset yoga session" },
  { src: yogaAdjustments, alt: "Yoga adjustments and guidance" },
  { src: yogaWorkshop, alt: "Yoga workshop session" },
  { src: tittibhasana, alt: "Tittibhasana pose" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Moments in <span className="text-gradient-gold">Motion</span>
          </h2>
        </motion.div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${
                index === 0 || index === 4 ? "row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
