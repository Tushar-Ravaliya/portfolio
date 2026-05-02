const Footer = () => {
  return (
    <footer className="py-12 editorial-border bg-dark text-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="text-4xl font-display mb-6">Tushar.</h2>
            <p className="text-light/50 max-w-sm mb-12">
              Crafting exceptional digital experiences through innovative engineering and thoughtful design.
            </p>
            <div className="flex gap-6">
              <a href="#" className="uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-widest text-light/40 mb-4">&copy; {new Date().getFullYear()} TUSHAR RAVALIYA</p>
            <p className="text-xs uppercase tracking-widest text-light/40">ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
