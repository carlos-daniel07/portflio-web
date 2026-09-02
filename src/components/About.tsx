import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-4 md:px-16 py-16 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Luces de neón azules de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título Brutalista (Tamaño reducido un ~15% y primera en mayúscula) */}
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none drop-shadow-lg">
            Sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              mí
            </span>
          </h2>
        </div>

        {/* --- EL BENTO GRID TECH CHILL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* TARJETA 01: El Avatar y el "LO QUE HAGO" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // UPGRADE: Bordes gruesos (border-2) y súper redondeados (rounded-[2.5rem])
            className="md:col-span-7 relative p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0c] border-2 border-white/10 flex flex-col md:flex-row items-center gap-8 group hover:border-blue-500/40 transition-colors overflow-hidden"
          >
            <div className="relative z-10 w-full md:w-1/2">
              {/* Nuevo Título: Mi Enfoque */}
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-6 tracking-tight">
                Mi <br /> <span className="text-blue-400">Enfoque</span>
              </h3>

              {/* Texto de la Opción 3 ajustado sutilmente */}
              <p className="text-gray-400 font-medium mb-10 leading-relaxed">
                Desarrollo software a medida priorizando el rendimiento y la
                escalabilidad. Entiendo el ecosistema web actual, pero mi base
                es la ingeniería de software pura. Creo sistemas donde la lógica
                sólida y la eficiencia se encuentran para entregar productos que
                marcan la diferencia.
              </p>

              {/* Botón Hablemos (Se queda igual) */}
              <a
                href="#contacto"
                className="inline-block px-8 py-3 rounded-full border-2 border-blue-500/50 bg-blue-500/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Hablemos
              </a>
            </div>

            {/* Área para la Imagen / Avatar */}
            {/* 🔥 EL FIX: Cambiamos md:h-80 por md:h-full y le damos un min-h-[320px] */}
            <div className="relative z-10 w-full md:w-1/2 h-72 md:h-full min-h-[320px] flex justify-center items-center">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>

              {/* Contenedor de la foto que ahora se estira correctamente */}
              <div className="relative z-10 h-full w-full rounded-[2rem] border-2 border-white/10 overflow-hidden bg-black/50">
                <img
                  // 🔥 Te puse una foto de código oscura de prueba, cámbiala por la tuya cuando quieras
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                  alt="Perfil"
                  className="h-full w-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* TARJETA 02: Frontend y Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 relative p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0c] border-2 border-white/10 flex flex-col justify-center group hover:border-cyan-500/40 transition-colors overflow-hidden"
          >
            {/* Bloque 1: Frontend */}
            <div className="relative z-10 mb-10 mt-8 md:mt-0">
              <h4 className="text-2xl font-black text-white uppercase tracking-wider mb-3">
                Frontend
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-blue-500/50">
                Construyo interfaces dinámicas y optimizadas para el navegador.
                Mi enfoque está en escribir código limpio con React y Astro,
                asegurando interacciones rápidas y estructuralmente sólidas.
              </p>
            </div>

            {/* Bloque 2: Backend & Mobile */}
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-white uppercase tracking-wider mb-3">
                Backend
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-cyan-500/50">
                Estructuro APIs y la lógica de servidor que dan vida a las
                aplicaciones utilizando Node. Conecto la interfaz con bases de
                datos eficientes. Además, mantengo un interés activo y en
                constante aprendizaje en el desarrollo de aplicaciones móviles.
              </p>
            </div>
          </motion.div>

          {/* TARJETA 03: Evolución Continua y Stack en aprendizaje */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 relative p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0c] border-2 border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-blue-500/40 transition-colors overflow-hidden"
          >
            <div className="md:w-2/3 relative z-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-4">
                Evolución Continua
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                El ecosistema tecnológico avanza rápido y mi metodología se
                adapta a él. Optimizo mi flujo de trabajo integrando
                herramientas modernas de terminal y asistencia de IA; esto me
                permite automatizar lo repetitivo y enfocar mi energía en la
                arquitectura y la lógica de negocio. Además, mantengo un
                aprendizaje activo: actualmente profundizando en{" "}
                <span className="text-blue-400 font-semibold">Python</span> para
                potenciar mis capacidades en el backend, la automatización de
                procesos y el análisis de datos.
              </p>
            </div>

            {/* Cuadritos Flotantes (React, Node, Python, Git) */}
            <div className="md:w-1/3 flex justify-center md:justify-end gap-3 opacity-90 z-10 flex-wrap">
              {["REACT", "NODE", "PYTHON", "GIT"].map((tech, i) => (
                <motion.div
                  key={tech}
                  animate={{
                    y: [0, i % 2 === 0 ? -12 : 12, 0],
                    x: [0, i % 2 === 0 ? 8 : -8, 0],
                    rotate: [
                      i % 2 === 0 ? -6 : 6,
                      i % 2 === 0 ? 6 : -6,
                      i % 2 === 0 ? -6 : 6,
                    ],
                  }}
                  transition={{
                    duration: 4 + i * 1,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="px-4 h-14 rounded-2xl bg-[#050505] border-2 border-white/10 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:border-blue-400 transition-colors duration-300"
                >
                  <span className="text-white font-black text-xs md:text-sm uppercase tracking-wider">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
