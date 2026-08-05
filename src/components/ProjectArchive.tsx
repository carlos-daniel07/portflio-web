import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const ProjectArchive = () => {
  // 1. Separamos solo los proyectos que NO son Top
  const archiveProjects = projects.filter((project) => !project.isTop);

  // 2. Estado para saber qué botón tocó el usuario
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(6);

  // 3. Magia Senior: Extraemos las categorías automáticamente sin repetirlas
  const allCategories = [
    "Todos",
    ...new Set(archiveProjects.flatMap((project) => project.techTags)),
  ];

  // 4. Proyectos a mostrar según el filtro
  const filteredProjects =
    activeFilter === "Todos"
      ? archiveProjects
      : archiveProjects.filter((project) =>
          project.techTags.includes(activeFilter),
        );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setVisibleCount(6); // Siempre volvemos a mostrar 6 al cambiar de categoría
  };

  return (
    <section className="w-full px-4 md:px-16 py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Explora mi archivo
          </h2>
          <p className="text-gray-400">
            Otros proyectos, experimentos y código en los que he trabajado.
          </p>
        </div>

        {/* AQUÍ IRÁN LOS BOTONES DE FILTRO */}
        {/* --- LOS BOTONES DE FILTRO --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allCategories.map((category) => (
            <button
              key={category}
              // 🚨 EL FIX ESTÁ AQUÍ: Reemplaza tu onClick viejo por este 👇
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === category
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105"
                  : "bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* AQUÍ IRÁ LA CUADRÍCULA CON FRAMER MOTION */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                // 🚨 NUEVO: overflow-hidden es vital para que la imagen no se salga de los bordes curvos
                className="group relative flex flex-col justify-between p-7 rounded-2xl border border-white/5 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                {/* --- EL FONDO MÁGICO --- */}
                {/* 1. La imagen real del proyecto (usamos Picsum de placeholder por ahora) */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-in-out z-0"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${project.id * 5}/600/400)`,
                  }}
                ></div>

                {/* 2. La máscara negra/degradada para salvar la legibilidad (El salvavidas UX) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-gray-950/80 to-gray-900/70 z-0"></div>

                {/* --- EL CONTENIDO DE TU TARJETA (z-10 para que flote encima del fondo) --- */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Cabecera */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors duration-300">
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
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="flex gap-3 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                          title="Ver código"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                          title="Ver en vivo"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Textos */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Pastillitas */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/10">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-gray-200 bg-black/40 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🚨 NUEVO: Botón de "Ver más" que solo aparece si hay más proyectos ocultos */}
        {visibleCount < filteredProjects.length && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="mt-16 px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Ver más proyectos
          </motion.button>
        )}

        {/* Mensaje por si un filtro no tiene resultados (buena práctica UX) */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 mt-12 font-mono"
          >
            No hay proyectos con esta tecnología aún.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ProjectArchive;
