import { motion } from "framer-motion";

const stages = [
  {
    id: "03",
    role: "Desarrollador Frontend",
    company: "Agencia & Freelance",
    date: "2023 - Presente",
    // Todo en mayúsculas y espaciado para mantener la consistencia estética
    desc: "CONSTRUYENDO INTERFACES MODERNAS CON REACT Y ASTRO. OPTIMIZACIÓN DE RENDIMIENTO Y DESARROLLO A MEDIDA SIN PLANTILLAS.",
    status: "Activo",
  },
  {
    id: "02",
    role: "Desarrollador Web",
    company: "Independiente",
    date: "2021 - 2023",
    desc: "CREACIÓN DE LANDING PAGES, E-COMMERCE Y DASHBOARDS. INTEGRACIÓN DE APIS Y DISEÑO DE EXPERIENCIAS DE USUARIO.",
    status: "Completado",
  },
  {
    id: "01",
    role: "Inmersión Web",
    company: "Autodidacta",
    date: "2020 - 2021",
    desc: "BASES DE PROGRAMACIÓN, JAVASCRIPT VANILLA, CONTROL DE VERSIONES Y DISEÑO DE INTERFACES CON FIGMA.",
    status: "Completado",
  },
];

const certs = [
  { title: "React Avanzado", issuer: "Platzi / Udemy", year: "2023" },
  { title: "Arquitectura Frontend", issuer: "DevTalles", year: "2022" },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-32 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-16 relative z-10">
        {/* Título Principal (Estilo Título CARLOS) */}
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none">
            Experiencia
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
                <span className="text-4xl md:text-5xl font-display font-black text-white/10 group-hover:text-white/20 transition-colors pointer-events-none tracking-tighter">
                  {stage.id}
                </span>
                <div>
                  {/* Título del rol (Estilo Título CARLOS, adaptado a subtítulo) */}
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter mb-2 group-hover:text-gray-200 transition-colors">
                    {stage.role}
                  </h3>
                  {/* Compañía (Estilo Navbar: uppercase, tracking amplio, color gris) */}
                  <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]">
                    {stage.company}
                  </p>
                </div>
              </div>

              {/* Bloque Central: Descripción (Estilo Navbar para unificar) */}
              <div className="md:w-4/12 mb-6 md:mb-0 pr-0 md:pr-8">
                <p className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-[0.15em] leading-loose">
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
            <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter">
              Cursos & <br /> Certificados
            </h3>
          </div>

          <div className="md:w-2/3 flex flex-col gap-6">
            {certs.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-end pb-6 border-b border-white/5"
              >
                {/* Título del certificado (Estilo Título CARLOS) */}
                <h4 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tighter mb-2 md:mb-0">
                  {cert.title}
                </h4>

                {/* Detalles (Estilo Navbar) */}
                <div className="flex gap-4 text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  <span>{cert.issuer}</span>
                  <span className="text-gray-600">•</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
