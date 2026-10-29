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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
