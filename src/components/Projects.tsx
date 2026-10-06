import { projects } from "../data/projects";

const techIconUrls: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Astro:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Node Js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  Postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  "CSS Modules":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  JSON: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
  "Material UI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  "AWS Amplify":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amplify/amplify-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "HTML/CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  SCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  SVG: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svg/svg-original.svg",
  "Font Awesome":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fontawesome/fontawesome-original.svg",
  Ionicons:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg",
  "Responsive Design":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "REST API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Canvas API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "File API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Fetch API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "QR Server API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "LocalStorage API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Web Audio API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Parallax.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Kiro (AI)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
  npm: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
};

const defaultIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg";

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
            <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center relative z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#0a0a0a] from-60% to-transparent">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed line-clamp-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider text-gray-200 cursor-default"
                  >
                    <img
                      src={techIconUrls[tag] || defaultIcon}
                      alt=""
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain"
                    />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botones 100% Dinámicos basados en la data real */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                {/* 1. Botón Principal: Si hay URL, es "Visitar sitio". Si está vacío, es "Ver Demo" */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitar el sitio de ${project.title}`}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <span>Visitar sitio</span>
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
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                ) : (
                  <a
                    href="#demo"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <span>Ver Demo</span>
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
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </a>
                )}

                {/* 2. Botón de Código: SOLO se renderiza si el string de github NO está vacío */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver el código de ${project.title} en GitHub`}
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
                )}
              </div>
            </div>

            {/* --- Lado Derecho: Imagen --- */}
            <div className="absolute right-0 top-0 w-full md:w-3/5 h-full bg-[#050505] -z-10 overflow-hidden">
              <img
                src={project.image}
                alt={project.alt || project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transform transition-all duration-700 ease-in-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent w-full md:w-[15%] hidden md:block"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
