import AvatarParallax from "./AvatarParallax";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center mt-16 md:mt-0 min-h-screen ">
      {/* 1. TÍTULO: Lo subimos a md:top-[8%] en escritorio para darle aire arriba */}
      <div className="absolute top-[6%] md:top-[12%] w-full text-center z-0 px-4">
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-display font-black text-[#d1d1d1] leading-none tracking-tight uppercase md:whitespace-nowrap">
          Hola, soy Carlos
        </h1>
      </div>

      {/* 2. AVATAR: Lo bajamos a md:top-[55%] en escritorio para destapar el título */}
      <div className="absolute top-[35%] md:top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <AvatarParallax />
      </div>

      {/* 3. INFO Y BOTÓN: Lo bajamos a md:bottom-16 para matar el espacio vacío de abajo */}
      <div className="absolute bottom-48 md:bottom-16 w-full max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center z-20 gap-8 md:gap-8">
        <div className="max-w-[280px] md:max-w-[320px] text-center md:text-left">
          <p className="text-xs md:text-sm font-sans font-semibold text-gray-200 uppercase leading-relaxed tracking-[0.2em]">
            Me dedico a escribir código y resolver problemas. Hago que tus ideas
            se vean increíbles en internet. Así de simple.
          </p>
        </div>

        <div>
          <button className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/20 bg-[#050505] overflow-hidden transition-all duration-300 hover:border-white hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
            {/* --- EL HUMO ORGÁNICO Y CAÓTICO --- */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-60">
              <motion.div
                animate={{
                  x: ["0%", "40%", "-20%", "30%", "0%"],
                  y: ["0%", "-30%", "40%", "10%", "0%"],
                  scale: [1, 1.3, 0.9, 1.2, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 bg-gray-300/30 blur-xl rounded-full"
              />

              <motion.div
                animate={{
                  x: ["-30%", "20%", "-40%", "10%", "-30%"],
                  y: ["20%", "-20%", "-10%", "30%", "20%"],
                  scale: [1.2, 0.8, 1.4, 1, 1.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/3 w-20 h-20 -mt-10 -ml-10 bg-white/20 blur-xl rounded-full"
              />

              <motion.div
                animate={{
                  x: ["20%", "-20%", "10%", "-10%", "20%"],
                  y: ["-40%", "10%", "-30%", "20%", "-40%"],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 right-1/4 w-24 h-12 -mt-6 -mr-12 bg-gray-400/20 blur-lg rounded-full"
              />
            </div>

            {/* --- EL BARRIDO BLANCO (Hover) --- */}
            <div className="absolute left-0 top-0 bottom-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full z-20"></div>

            {/* --- CONTENIDO (Texto e Icono) --- */}
            <div className="relative z-30 flex items-center gap-3 text-white group-hover:text-black transition-colors duration-300">
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                Contáctame
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
