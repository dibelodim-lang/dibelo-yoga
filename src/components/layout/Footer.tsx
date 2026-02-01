const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-serif text-xl text-foreground">
            Dibelo<span className="text-primary">.</span>yoga
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground font-sans text-xs tracking-wide">
            © {new Date().getFullYear()} Dimitris Dibelo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
