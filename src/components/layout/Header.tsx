import { useState, useEffect } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import AssessmentDialog from "@/components/sections/AssessmentDialog";

const navLinks = [
  { href: "#services", label: "Classes" },
  { href: "#about", label: "Your Teacher" },
  { href: "#experiences", label: "Workshops & Travel" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#mentorship", label: "Online Coaching" },
  { href: "#contact", label: "Contact" },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const openAssessment = () => { setOpen(false); setAssessmentOpen(true); };
  return <header className={`fixed top-0 inset-x-0 z-40 border-b transition-colors duration-300 ${isScrolled ? "bg-background/95 border-border backdrop-blur-md" : "studio-inverse bg-background/20 border-foreground/20"}`}>
    <div className="container-wide flex items-center justify-between h-20 gap-5">
      <a href="#" aria-label="Dibelo Yoga home" className="shrink-0 leading-none"><span className="font-serif text-3xl">Dibelo<span className="text-primary">.</span></span><span className="block text-[9px] uppercase mt-1">Yoga & movement</span></a>
      <nav aria-label="Main navigation" className="hidden xl:flex gap-6 items-center">{navLinks.map(link => <a key={link.href} href={link.href} className="text-xs text-foreground/80 hover:text-primary transition-colors">{link.label}</a>)}</nav>
      <div className="flex items-center gap-2"><Button className="hidden sm:inline-flex rounded-none text-xs h-11 px-5" onClick={openAssessment}>Book a Session<ArrowUpRight /></Button>
      <Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
        <SheetContent className="w-[min(90vw,400px)] overflow-y-auto"><SheetHeader className="text-left mt-8"><SheetTitle className="font-serif text-4xl">Dibelo Yoga</SheetTitle><SheetDescription>Yoga & movement</SheetDescription></SheetHeader><nav aria-label="Mobile navigation" className="flex flex-col mt-10">{navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-serif text-2xl py-4 border-b border-border hover:text-primary">{link.label}</a>)}</nav><Button className="mt-8 w-full" onClick={openAssessment}>Book a Session<ArrowUpRight /></Button></SheetContent>
      </Sheet></div>
    </div>
    <AssessmentDialog open={assessmentOpen} onOpenChange={setAssessmentOpen} />
  </header>;
};
export default Header;
