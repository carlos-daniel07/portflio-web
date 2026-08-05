import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Un "espía" que revisa qué tanto ha bajado el usuario
  useEffect(() => {
    const toggleVisibility = () => {
      // Si el usuario baja más de 500px, mostramos el botón
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Limpiamos el evento al desmontar por buenas prácticas
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // La función que hace el viaje suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          // UPGRADE: Diseño tech chill con bordes de 2px, backdrop-blur y hover azul
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99] p-3 md:p-4 rounded-2xl bg-[#0a0a0c]/80 backdrop-blur-md border-2 border-white/10 text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Volver arriba"
        >
          {/* Ícono de flecha hacia arriba con un saltito extra al hacer hover */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-y-1 transition-transform duration-300"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
