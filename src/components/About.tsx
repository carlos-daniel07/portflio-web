import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-4 md:px-16 py-32 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Luces de neón azules de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título Brutalista */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-lg">
            Sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Mí
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
            {/* El Número Gigante "01" de fondo (Estilo revista/chill) */}
            <span className="absolute -top-4 right-6 text-[120px] font-black text-white/5 select-none pointer-events-none">
              01
            </span>

            <div className="relative z-10 w-full md:w-1/2">
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-6 tracking-tight">
                Lo que <br /> <span className="text-blue-400">Hago</span>
              </h3>
              <p className="text-gray-400 font-medium mb-10 leading-relaxed">
                Construyo experiencias web que rompen el molde. Nada de
                plantillas aburridas. Puro código a medida, animaciones fluidas
                y diseño que hace que la gente diga "wow".
              </p>

              {/* Botón tipo "Pastilla Wireframe" basado en tu nueva imagen */}
              <a
                href="#contacto"
                className="inline-block px-8 py-3 rounded-full border-2 border-blue-500/50 bg-blue-500/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Hablemos
              </a>
            </div>

            {/* Área para el Avatar 3D */}
            <div className="relative z-10 w-full md:w-1/2 h-64 md:h-80 flex justify-center items-center">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>

              {/* Imagen con bordes gruesos haciendo match con la tarjeta principal */}
              <div className="relative z-10 h-full w-full rounded-[2rem] border-2 border-white/10 overflow-hidden bg-black/50">
                <img
                  src="https://picsum.photos/seed/avatar3d/400/500"
                  alt="Avatar 3D"
                  className="h-full w-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* TARJETA 02: Desarrollo y Diseño */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 relative p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0c] border-2 border-white/10 flex flex-col justify-center group hover:border-cyan-500/40 transition-colors overflow-hidden"
          >
            {/* El Número Gigante "02" */}
            <span className="absolute -top-4 right-6 text-[120px] font-black text-white/5 select-none pointer-events-none">
              02
            </span>

            <div className="relative z-10 mb-10 mt-8">
              <h4 className="text-2xl font-black text-white uppercase tracking-wider mb-3">
                Desarrollo
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-blue-500/50">
                Me especializo en arquitecturas escalables con React, Astro y
                Node. Código limpio, rápido y letal para el navegador.
              </p>
            </div>

            <div className="relative z-10">
              <h4 className="text-2xl font-black text-white uppercase tracking-wider mb-3">
                Diseño
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-cyan-500/50">
                No solo programo. Entiendo de UI/UX, animaciones y cómo hacer
                que una interfaz tenga verdadero 'flow' y retenga al usuario.
              </p>
            </div>
          </motion.div>

          {/* TARJETA 03: Filosofía Callejera con Animación Flotante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 relative p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0c] border-2 border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-blue-500/40 transition-colors overflow-hidden"
          >
            {/* El Número Gigante "03" centrado en el fondo */}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[200px] font-black text-white/[0.03] select-none pointer-events-none">
              03
            </span>

            <div className="md:w-2/3 relative z-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-4">
                Fuera de la Matrix
              </h3>
              <p className="text-gray-400 text-lg">
                Cuando me desconecto del editor de código, me inspiro en la
                cultura urbana, la música y el diseño. Creo que las mejores
                interfaces nacen cuando mezclas la disciplina de la ingeniería
                con la rebeldía del arte.
              </p>
            </div>

            {/* Cuadritos Flotantes Desordenados (Ahora con bordes gruesos) */}
            <div className="md:w-1/3 flex justify-center md:justify-end gap-4 opacity-90 z-10">
              {["TS", "JS", "CSS"].map((tech, i) => (
                <motion.div
                  key={tech}
                  animate={{
                    y: [0, i % 2 === 0 ? -15 : 15, 0],
                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                    rotate: [
                      i % 2 === 0 ? -10 : 10,
                      i % 2 === 0 ? 10 : -10,
                      i % 2 === 0 ? -10 : 10,
                    ],
                  }}
                  transition={{
                    duration: 4 + i * 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  // UPGRADE: Bordes de 2px y rounded-2xl para hacer match con el resto
                  className="w-16 h-16 rounded-2xl bg-[#050505] border-2 border-white/10 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:border-blue-400 transition-colors duration-300"
                >
                  <span className="text-white font-black text-lg uppercase tracking-tighter">
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
