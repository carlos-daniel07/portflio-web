import { motion } from "framer-motion";

const stages = [
  {
    id: "05",
    role: "DESARROLLADOR FULL STACK (PROYECTO PROPIO)",
    company: "Biomanage",
    date: "Presente",
    desc: "Diseño y desarrollo desde cero de un SaaS para gestión de equipos biomédicos, abarcando frontend, backend y base de datos. Actualmente en desarrollo activo (~75% completado).",
    status: "En Desarrollo",
  },
  {
    id: "04",
    role: "DESARROLLADOR FRONTEND",
    company: "Enlace Azul (Co-creación - Freelance)",
    date: "2025 - Presente",
    desc: "Diseño y desarrollo de la interfaz completa de la app, incluyendo el módulo de login y autenticación. Integración de APIs REST del backend y optimización de rendimiento para web y dispositivos móviles.",
    status: "En Producción / Clientes Activos",
  },
  {
    id: "03",
    role: "DESARROLLADOR FRONTEND (ORACLE APEX)",
    company: "melAppido (colaboración empresarial con The Master S.A.S)",
    date: "OCT 2024",
    desc: "Personalización de interfaces para una plataforma tipo marketplace empresarial sobre Oracle APEX. Creación de layouts responsivos y estilos adaptados a la identidad visual corporativa, en coordinación con backend y UX/UI.",
    status: "Completado",
  },
  {
    id: "02",
    role: "DESARROLLADOR FRONTEND FREELANCE",
    company: "Múltiples marcas y proyectos personales",
    date: "2023 - 2024",
    desc: "Creación y despliegue de landing pages responsivas para distintas marcas y empresas (incluyendo Beacons IoT Technologies y proyectos propios), además de una página corporativa en WordPress. Control de versiones con Git/GitHub y despliegue continuo en Netlify.",
    status: "Completado",
  },
  {
    id: "01",
    role: "DESARROLLADOR ANDROID IoT (PRACTICANTE) ",
    company: "Tech Medic — Código Azul (sector salud)",
    date: "2021",
    desc: "Desarrollo de una app Android en Kotlin integrada con Arduino (IoT) para activar alarmas físicas y enviar notificaciones push en tiempo real vía Firebase Cloud Messaging ante emergencias hospitalarias, reduciendo tiempos de respuesta médica.",
    status: "Completado",
  },
];

const certs = [
  {
    title: "10 Proyectos de JavaScript para portafolio y entrevistas",
    issuer: "Udemy",
    year: "Feb 2026",
    link: "https://ude.my/UC-82ab6c0c-85dd-43c1-acf6-2ebde977117c",
  },
  {
    title: "Desarrollo con Node.js: Aplicación, testing y seguridad",
    issuer: "Udemy",
    year: "Dic 2025",
    link: "https://ude.my/UC-664a47a7-bc4f-49b5-aaa7-228867a011e1",
  },
  {
    title: "MySQL desde 0 hasta supabase",
    issuer: "Udemy",
    year: "Nov 2025",
    link: "https://ude.my/UC-86a064a0-e669-4918-bb55-18fb6bafe66e",
  },
  {
    title: "Máster en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
    issuer: "Udemy",
    year: "Jun 2023",
    link: "https://ude.my/UC-6eec5a8a-9f34-4c23-8948-cc094e308d51",
  },
  {
    title: "Curso profesional de JavaScript",
    issuer: "Código Facilito",
    year: "Abr 2023",
    link: "https://codigofacilito.com/certificates/b7f5cbec-107f-4919-b92e-8a85dd42848f.pdf",
  },
  { title: "Ingeniería Biomédica", issuer: "ITM", year: "2021", link: "" },

  {
    title: "Machine Learning con Python",
    issuer: "ITM",
    year: "2019",
    link: "",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-24 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-16 relative z-10">
        {/* Título Principal Ajustado */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter text-center md:text-left w-full mb-6 md:mb-0">
            EXPERIENCIA
          </h2>
        </div>

        {/* --- LISTA DE EXPERIENCIA --- */}
        <div className="flex flex-col border-t-2 border-white/10">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b-2 border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              {/* Bloque Izquierdo: ID y Rol */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 md:w-5/12 mb-6 md:mb-0">
                <span className="text-3xl md:text-4xl font-display font-black text-white/10 group-hover:text-white/20 transition-colors pointer-events-none tracking-tighter">
                  {stage.id}
                </span>
                <div>
                  {/* Título del rol (Estilo Título CARLOS, adaptado a subtítulo) */}
                  <h3 className="text-xl md:text-xl font-display font-black text-white uppercase tracking-tighter mb-2 group-hover:text-gray-200 transition-colors">
                    {stage.role}
                  </h3>
                  {/* Compañía (Estilo Navbar: uppercase, tracking amplio, color gris) */}
                  <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]">
                    {stage.company}
                  </p>
                </div>
              </div>

              {/* Bloque Central: Descripción */}
              <div className="md:w-4/12 mb-6 md:mb-0 pr-0 md:pr-8">
                {/* 🔥 Le quitamos uppercase, tracking exagerado y le dimos un estilo de lectura relajada */}
                <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              {/* Bloque Derecho: Fecha y Status (Estilo Navbar) */}
              <div className="flex flex-col items-start md:items-end md:w-3/12 justify-center gap-2">
                <div className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-[0.2em]">
                  {stage.date}
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  {stage.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ANEXO: CERTIFICACIONES Y CURSOS --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 flex flex-col md:flex-row gap-10 justify-between"
        >
          <div className="md:w-1/3">
            {/* Título sección certificados (Estilo Título CARLOS) */}
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase text-white tracking-tighter text-center md:text-left w-full mb-6 md:mb-0">
              Educación & <br /> Certificados
            </h3>
          </div>

          <div className="md:w-2/3 flex flex-col gap-6">
            {certs.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col py-6 border-b border-white/5"
              >
                {/* Tag pequeño: plataforma + fecha, arriba y en su propia línea */}
                <div className="flex gap-3 text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">
                  <span>{cert.issuer}</span>
                  <span className="text-gray-600">•</span>
                  <span>{cert.year}</span>
                </div>

                {/* Título del certificado interactivo (Hover Premium) */}
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 w-fit"
                  >
                    <h4 className="text-lg md:text-xl font-bold text-gray-200 tracking-tight mb-2 md:mb-0 group-hover:text-white group-hover:underline underline-offset-4 decoration-white/40 transition-all duration-300">
                      {cert.title}
                    </h4>
                    {/* Ícono con efecto de movimiento (salta en diagonal) */}
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <h4 className="text-lg md:text-xl font-bold text-gray-100 tracking-tight mb-2 md:mb-0">
                    {cert.title}
                  </h4>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
