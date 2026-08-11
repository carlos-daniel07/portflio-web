import React from "react";

const navItems = [
  {
    label: "Proyectos",
    href: "#projects", // Usamos el ID real de tu sección
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Sobre mí",
    href: "#about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Experiencia",
    href: "#experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Contacto",
    href: "#contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const Navbar = () => {
  // 🔥 AQUÍ ESTÁ EL FIX SIN RIESGOS 🔥
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault(); // Bloquea el comportamiento nativo que pone el # en la URL

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // Hace el scroll suave hacia la sección sin modificar tu URL para nada
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. NAVEGACIÓN DESKTOP */}
      <nav className="hidden md:flex absolute top-8 w-full justify-center gap-16 text-sm font-semibold tracking-[0.2em] text-gray-400 z-50 uppercase">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)} // Inyectamos el interceptor
            className="relative group hover:text-white transition-colors duration-300"
          >
            {item.label}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* 2. NAVEGACIÓN MOBILE */}
      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[350px]">
        <div className="flex items-center justify-between px-8 py-4 bg-[#0a0a0c]/80 backdrop-blur-md border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)} // Inyectamos el interceptor aquí también
              className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
