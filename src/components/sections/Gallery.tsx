import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";

const images = [
  { src: gallery1, alt: "Sunset handstand yoga pose" },
  { src: gallery2, alt: "Crow pose on concrete" },
  { src: gallery3, alt: "Stretching in dark studio" },
  { src: gallery4, alt: "Seated side stretch in warehouse" },
  { src: gallery5, alt: "Meditative seated pose" },
  { src: gallery6, alt: "Standing balance pose" },
  { src: gallery7, alt: "Flying crow arm balance" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

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

        {/* Elegant Autoplay Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-transparent border-primary/40 text-primary hover:bg-primary hover:text-background" />
            <CarouselNext className="hidden md:flex -right-12 bg-transparent border-primary/40 text-primary hover:bg-primary hover:text-background" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
