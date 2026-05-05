const Navbar = () => {
  return (
    <nav className="absolute top-8 flex w-full justify-center gap-8 md:gap-16 text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-400 z-50 uppercase">
      <a href="#about" className="hover:text-white transition-colors">
        Sobre mí
      </a>
      <a href="#projects" className="hover:text-white transition-colors">
        Proyectos
      </a>
      <a href="#experience" className="hover:text-white transition-colors">
        Experiencia
      </a>
      <a href="#contact" className="hover:text-white transition-colors">
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;
