import { projects } from "../data/projects";

// Diccionario visual: Recibe el texto y devuelve el SVG correspondiente
const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();

  if (t === "react")
    return (
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
    );
  if (t.includes("tailwind"))
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#38BDF8]"
      >
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-8.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C4.777 13.382 3.416 12 3.601 12z"
          fill="currentColor"
        />
      </svg>
    );
  if (t === "astro")
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#FF5D01]"
      >
        <path
          d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12c-3.866 0-7-1.79-7-4s3.134-4 7-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  return (
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
  );
};

const Projects = () => {
  const topProjects = projects.filter((project) => project.isTop === true);

  return (
    <section
      id="projects"
      className="relative w-full px-4 md:px-16 -mt-32 md:mt-0 pt-4 pb-8 md:pt-16 bg-[#0a0a0a] min-h-screen"
    >
      <h2 className="text-4xl md:text-6xl font-display font-black text-[#d1d1d1] text-center mb-16 uppercase tracking-tighter">
        Proyectos destacados
      </h2>

      {/* Devolvemos el padding bottom gigante para tener espacio de scroll del naipe */}
      <div className="flex flex-col gap-24 pb-[5vh]">
        {topProjects.map((project, index) => (
          <div
            key={project.id}
            // 🔥 DE VUELTA EL STICKY PARA EL EFECTO NAIPE
            className="group sticky w-full max-w-5xl mx-auto rounded-3xl border border-white/10 border-t-white/20 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_-30px_40px_-15px_rgba(0,0,0,0.9)] flex flex-col md:flex-row h-[450px] md:h-[500px] overflow-hidden transition-all duration-500 ease-out"
            // 🔥 EL VERDADERO FIX: Subimos el punto de anclaje (top) a 8vh para que no se corte abajo
            // Y quitamos el scale estático que aplastaba tus tarjetas
            style={{
              top: `calc(8vh + ${index * 30}px)`,
            }}
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] z-50"></div>

            {/* --- Lado Izquierdo: Textos y Botones --- */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-transparent">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider text-gray-200 uppercase cursor-default"
                  >
                    {getTechIcon(tag)}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botones seguros y alineados */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a
                  href={project.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] group/btn"
                >
                  <span>Ver proyecto</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>

                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
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
                  <span>Código</span>
                </a>
              </div>
            </div>

            {/* --- Lado Derecho: Imagen --- */}
            <div className="absolute right-0 top-0 w-full md:w-3/5 h-full bg-[#050505] -z-10 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${project.id * 10}/800/600`}
                alt={`Imagen de ${project.title}`}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transform transition-all duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent w-full md:w-1/2 hidden md:block"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
