import AvatarParallax from "./AvatarParallax";

const Hero = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center mt-16 md:mt-0 ">
      
      {/* 1. TÍTULO: Lo bajamos a top-[12%] en móvil para quitar el hueco de arriba */}
      <div className="absolute top-[3%] md:top-[10%] w-full text-center z-0">
        <h1 className="text-[8vw] font-display font-black text-[#d1d1d1] leading-none tracking-tight uppercase whitespace-nowrap">
          Hola, soy Carlos
        </h1>
      </div>

      {/* 2. AVATAR: Lo subimos a top-[38%] en móvil para acercarlo al título */}
      <div className="absolute top-[38%] md:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <AvatarParallax/>
      </div>

      {/* 3. INFO Y BOTÓN: Lo subimos a bottom-32 en móvil para darle más aire al menú flotante */}
      <div className="absolute bottom-32 md:bottom-32 w-full max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center z-20 gap-6 md:gap-8">
        
        <div className="max-w-[280px] text-center md:text-left">
          <p className="text-xs md:text-sm font-sans font-semibold text-gray-300 uppercase leading-relaxed tracking-wider">
            Desarrollador de software apasionado por crear proyectos audaces y
            memorables
          </p>
        </div>

        <div>
          <button className="relative group overflow-hidden rounded-full p-[2px]">
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full"></span>
            <div className="relative bg-[#0a0a0a] text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all group-hover:bg-opacity-0">
              Contáctame
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;