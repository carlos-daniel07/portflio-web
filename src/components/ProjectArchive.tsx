import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

// 🔥 DICCIONARIO DE URLS (Usando tu CDN de Devicon)
const techIconUrls: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Astro:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
  "Node Js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  npm: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
};

// Ícono genérico por si falta alguno en la lista
const defaultIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg";

const ProjectArchive = () => {
  const archiveProjects = projects.filter((project) => !project.isTop);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(6);

  const allCategories = [
    "Todos",
    ...new Set(archiveProjects.flatMap((project) => project.techTags)),
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? archiveProjects
      : archiveProjects.filter((project) =>
          project.techTags.includes(activeFilter),
        );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setVisibleCount(6);
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

        {/* --- LOS BOTONES DE FILTRO --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              // Añadimos 'group', 'relative' y 'overflow-hidden' para contener el relleno
              className={`group relative overflow-hidden px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === category
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105"
                  : "border border-white/10 text-gray-400 hover:text-black hover:border-white"
              }`}
            >
              {/* Efecto de relleno progresivo (se desliza desde la izquierda) */}
              {activeFilter !== category && (
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
              )}

              {/* Texto asegurado por encima del fondo animado */}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

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
                className="group relative flex flex-col justify-between p-7 rounded-2xl border border-white/5 bg-[#050505] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* 🚨 AQUÍ USAMOS TU project.image DE LA BD */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out z-0"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-0"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
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
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>

                    <div className="flex gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
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
                          className="text-gray-400 hover:text-[#38BDF8] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300"
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

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md group-hover:text-[#e0e0e0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  {/* 🚨 AQUÍ EL RENDERIZADO LIMPIO CON LA ETIQUETA IMG Y TU CDN */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md transition-colors hover:border-white/30"
                      >
                        <img
                          src={techIconUrls[tag] || defaultIcon}
                          alt={`${tag} icon`}
                          className="w-3.5 h-3.5 object-contain"
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🚨 BOTÓN "VER MÁS" CON ANIMACIÓN DE RELLENO */}
        {visibleCount < filteredProjects.length && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="group relative overflow-hidden mt-16 px-8 py-3 rounded-full border border-white/10 text-gray-300 font-semibold hover:text-black hover:border-white transition-all duration-300"
          >
            {/* Efecto de relleno progresivo (se desliza desde la izquierda) */}
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>

            {/* Texto asegurado por encima del fondo animado */}
            <span className="relative z-10">Ver más proyectos</span>
          </motion.button>
        )}

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
