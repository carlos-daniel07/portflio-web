const Hero = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center mt-16 md:mt-0 ">
      <div className="absolute top-[1%] md:top-[10%]  w-full text-center z-0">
        <h1 className="text-[8vw] font-display font-black text-[#d1d1d1] leading-none tracking-tight uppercase whitespace-nowrap">
          Hola, soy Carlos
        </h1>
      </div>

      <div className="absolute top-[45%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="w-[280px] h-[350px] md:w-[380px] md:h-[480px] bg-gradient-to-b from-gray-800/80 to-transparent rounded-[100px] flex items-center justify-center border border-gray-700/50 shadow-2xl backdrop-blur-sm">
          <span className="text-gray-400 text-center px-4 font-mono">
            [ Avatar 3D ]<br />
            aterrizará aquí
          </span>
        </div>
      </div>

      <div className="absolute bottom-16 md:bottom-32 w-full max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center z-20 gap-8">
        <div className="max-w-[280px] text-left">
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
