import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full pt-32 bg-[#050505] overflow-hidden"
    >
      {/* --- SECCIÓN 1: EL LLAMADO A LA ACCIÓN Y REDES --- */}
      <div className="max-w-6xl mx-auto px-4 md:px-16 relative z-10 flex flex-col items-center justify-center text-center mb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
        >
          ¿Tienes un proyecto en mente?
        </motion.p>

        {/* El HABLEMOS Masivo */}
        <motion.a
          href="mailto:tucorreo@email.com?subject=Propuesta%20de%20Trabajo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-display font-black text-white uppercase tracking-tighter leading-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-500 hover:scale-105 transition-all duration-500 mb-16 block"
        >
          Hablemos
        </motion.a>

        {/* Redes Sociales con Íconos y Efecto Hover Subrayado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {/* GITHUB */}
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm md:text-base font-semibold text-gray-400 uppercase tracking-[0.2em] hover:text-white transition-colors relative group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub</span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm md:text-base font-semibold text-gray-400 uppercase tracking-[0.2em] hover:text-white transition-colors relative group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn</span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* CORREO REAL */}
          <a
            href="mailto:carteagachamorro@gmail.com"
            className="flex items-center gap-3 text-sm md:text-base font-semibold text-gray-400 uppercase tracking-[0.2em] hover:text-white transition-colors relative group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>carteagachamorro@gmail.com</span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </motion.div>
      </div>

      {/* --- SECCIÓN 2: LA TARJETA DEL FOOTER (CRÉDITOS Y FIRMA) --- */}
      <div className="w-full bg-[#0a0a0c] border-t-2 border-white/10 rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-10">
          {/* Lado Izquierdo: Nombre Outline (AHORA SOLO EL NOMBRE) */}
          <div className="md:w-1/2 flex items-center">
            <h2
              className="text-5xl md:text-[5rem] font-display font-black uppercase leading-[0.85] tracking-tighter"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.8)",
              }}
            >
              CARLOS <br />
              <span className="text-white" style={{ WebkitTextStroke: "0px" }}>
                DEV
              </span>
            </h2>
          </div>

          {/* Lado Derecho: Estatus, Ubicación y Créditos (TODO AGRUPADO AQUÍ) */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end w-full">
            {/* Bloque de Estatus y Radar */}
            <div className="flex flex-col items-start md:items-end gap-5 mb-8 pb-8 border-b border-white/10 w-full md:w-auto">
              {/* Disponibilidad */}
              <span className="flex items-center gap-2 text-xs md:text-sm font-semibold text-green-400 uppercase tracking-[0.2em]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                DISPONIBLE (OPEN TO WORK)
              </span>

              {/* Radar de Ubicación Colombia */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start md:items-end text-right">
                  <span className="text-xs md:text-sm font-semibold text-white uppercase tracking-[0.2em]">
                    COLOMBIA
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                    100% REMOTO
                  </span>
                </div>
                {/* Animación de Radar Tech */}
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#050505] border border-white/10 overflow-hidden group shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  {/* Líneas de coordenadas */}
                  <div className="absolute w-full h-[1px] bg-blue-500/30"></div>
                  <div className="absolute h-full w-[1px] bg-blue-500/30"></div>
                  {/* Punto de ubicación palpitando */}
                  <div className="absolute w-2 h-2 mt-2 ml-2 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute w-2 h-2 mt-2 ml-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
                </div>
              </div>
            </div>

            {/* Copyright y Créditos */}
            <div className="flex flex-col items-start md:items-end gap-3 text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-[0.2em] md:text-right">
              <p>
                © {new Date().getFullYear()} CARLOS. TODOS LOS DERECHOS
                RESERVADOS.
              </p>
              <p>
                DISEÑADO EN LA MATRIX. INSPIRADO POR{" "}
                <a
                  href="https://www.youtube.com/shorts/mF8Bkx1zDeo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors underline decoration-white/20 hover:decoration-white"
                >
                  RINA GRIM
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
