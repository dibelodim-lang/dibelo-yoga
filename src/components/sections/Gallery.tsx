import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { studioPhotos } from "@/lib/studio-photos";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery/IMG_0521.jpg.asset.json";
import gallery15 from "@/assets/gallery/IMG_0620.jpg.asset.json";
import gallery16 from "@/assets/gallery/IMG_0647.jpg.asset.json";
import gallery17 from "@/assets/gallery/IMG_7709.jpg.asset.json";
import gallery18 from "@/assets/gallery/IMG_8704.jpg.asset.json";

const images = [
  ...studioPhotos,
  { src: gallery2, alt: "Crow pose on concrete" },
  { src: gallery3, alt: "Stretching in dark studio" },
  { src: gallery4, alt: "Seated side stretch in warehouse" },
  { src: gallery5, alt: "Meditative seated pose" },
  { src: gallery6, alt: "Standing balance pose" },
  { src: gallery7, alt: "Flying crow arm balance" },
  { src: gallery8, alt: "Seated meditation in studio" },
  { src: gallery9, alt: "Upward facing dog in group class" },
  { src: gallery10, alt: "Hands-on adjustment in extended pose" },
  { src: gallery11, alt: "Guided stretch in group session" },
  { src: gallery12, alt: "Assisted extended side angle pose" },
  { src: gallery13, alt: "Hands-on adjustment in forward fold" },
  { src: gallery14.url, alt: "Dimitris Dibelo in a twisted downward dog variation" },
  { src: gallery15.url, alt: "Dimitris Dibelo in a low lunge with arms overhead" },
  { src: gallery16.url, alt: "Dimitris Dibelo in a one-legged arm balance" },
  { src: gallery17.url, alt: "Dimitris Dibelo in a seated forward fold backlit by window light" },
  { src: gallery18.url, alt: "Dimitris Dibelo in a bound squat pose on a city street" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
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
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-105 motion-reduce:transform-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 md:-left-12 bg-background/90 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-3 md:-right-12 bg-background/90 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
