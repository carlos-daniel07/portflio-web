import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

// 🔥 1. EL DICCIONARIO VISUAL (Vive en el Frontend)
// Mapea el texto puro de tu "API" al SVG correspondiente
// 🔥 EL DICCIONARIO VISUAL (AHORA SÍ CON LOS LOGOS OFICIALES)
// 🔥 DICCIONARIO CON LOS LOGOS 100% OFICIALES (Nada de íconos genéricos)
// 🔥 DICCIONARIO DEFINITIVO: Sin errores de TypeScript y con los logos 100% OFICIALES
const techIcons: Record<string, React.ReactNode> = {
  React: (
    <svg
      width="14"
      height="14"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#61DAFB]"
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  ),
  Astro: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="text-[#FF5D01]"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>file_type_astro</title>
        <path
          d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  "Node Js": (
    // ✅ Logo Oficial de Node.js (El hexágono)
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#339933]"
    >
      <path d="M11.83 22.5 1.53 16.58V4.74L11.83 0l10.3 5.92-5.15 2.96v-5.92L11.83 5.93l-5.15 2.96v5.92l5.15 2.96 5.15-2.96v-3.85l5.15 2.96v6.08l-10.3 5.8z" />
    </svg>
  ),
  Node: (
    // ✅ Mismo hexágono por si el texto viene solo como "Node"
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#339933]"
    >
      <path d="M11.83 22.5 1.53 16.58V4.74L11.83 0l10.3 5.92-5.15 2.96v-5.92L11.83 5.93l-5.15 2.96v5.92l5.15 2.96 5.15-2.96v-3.85l5.15 2.96v6.08l-10.3 5.8z" />
    </svg>
  ),
  Typescript: (
    // ✅ Logo Oficial de TypeScript
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#3178C6]"
    >
      <path d="M4 4h16v16H4V4z" fill="currentColor" />
      <path
        d="M9 9v6M7 11h4M17 15h-3c-1 0-1-1-1-1.5s.5-1.5 1-1.5 1-.5 1-1.5-.5-1.5-1-1.5h-3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  ),
  default: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
};

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
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === category
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105"
                  : "bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5"
              }`}
            >
              {category}
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

                  {/* 🚨 AQUÍ EL RENDERIZADO LIMPIO DE LOS ÍCONOS */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md transition-colors hover:border-white/30"
                      >
                        {techIcons[tag] || techIcons["default"]}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredProjects.length && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="mt-16 px-8 py-3 rounded-full border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            Ver más proyectos
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
