import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OutlierProtocol from "@/components/sections/OutlierProtocol";
import Philosophy from "@/components/sections/Philosophy";
import Gallery from "@/components/sections/Gallery";
import YogaWithoutBoundaries from "@/components/sections/YogaWithoutBoundaries";
import OutlyerProtocolProject from "@/components/sections/OutlyerProtocolProject";
import Contact from "@/components/sections/Contact";
import Mentorship from "@/components/sections/Mentorship";
import studioVideo from "@/assets/mysore-dimitris-union-yoga.mp4.asset.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OutlierProtocol />
        <Philosophy />
        <Gallery />
        <YogaWithoutBoundaries />
        <OutlyerProtocolProject />
        <Mentorship />
        <div className="studio-inverse studio-video-ending relative isolate overflow-hidden bg-background">
          <video
            className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
            src={studioVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-background/65" />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
