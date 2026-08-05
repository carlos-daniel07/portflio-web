import React from 'react';

const Navbar = () => {
  // Array de datos: ¡Si algún día quieres cambiar un enlace, lo haces aquí y listo!
  const navItems = [
    {
      label: "Proyectos",
      href: "#projects",
      // Ícono de Terminal (Code)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      label: "Sobre mí",
      href: "#about",
      // Ícono de Usuario (User)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    
    {
      label: "Experiencia",
      href: "#experience",
      // Ícono de Maletín (Briefcase)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      label: "Contacto",
      href: "#contact",
      // Ícono de Correo (Mail)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* 1. NAVEGACIÓN DESKTOP (Pantallas grandes) */}
      {/* Usamos 'hidden md:flex' para que desaparezca en celulares */}
      <nav className="hidden md:flex absolute top-8 w-full justify-center gap-16 text-sm font-semibold tracking-[0.2em] text-gray-400 z-50 uppercase">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-white transition-colors duration-300">
            {item.label}
          </a>
        ))}
      </nav>

      {/* 2. NAVEGACIÓN MOBILE (Pantallas pequeñas - Bottom App Bar) */}
      {/* Usamos 'md:hidden' para que desaparezca en PC y 'fixed bottom-6' para anclarlo abajo */}
      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[350px]">
        {/* El cristal flotante (Glassmorphism) */}
        <div className="flex items-center justify-between px-8 py-4 bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
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