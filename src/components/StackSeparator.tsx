import { useEffect, useRef } from "react";
import Matter from "matter-js";

// Tu arsenal técnico ahora con Logos (SVGs) y colores de marca
const techStack = [
  // --- CORE FRONTEND & BACKEND ---
  {
    name: "REACT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "ASTRO",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
  },
  {
    name: "TYPESCRIPT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "NODE.JS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  // --- DATA & CLOUD ---
  {
    name: "POSTGRESQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "SUPABASE",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "DOCKER",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "NETLIFY",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  },
  // --- DEVOPS & CMS ---
  {
    name: "GITHUB", // Logo en blanco para que se vea en el fondo negro
    img: "https://api.iconify.design/mdi:github.svg?color=white",
  },
  {
    name: "LINUX",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "WORDPRESS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
  },
  // --- IA & VIBE CODING (El factor sorpresa) ---
  {
    name: "GEMINI AI",
    img: "https://api.iconify.design/logos:google-gemini.svg",
  },
  {
    name: "CLAUDE",
    img: "https://api.iconify.design/logos:claude-icon.svg",
  },
  {
    name: "VIBE CODING", // Ícono de destellos mágicos
    img: "https://api.iconify.design/lucide:sparkles.svg?color=white",
  },
];

const TechStackPhysics = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sceneRef.current) return;

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    const world = engine.world;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // Suelo y Paredes adaptadas a la nueva altura
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, {
      isStatic: true,
    });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, {
      isStatic: true,
    });
    World.add(world, [ground, leftWall, rightWall]);

    // Las pastillas ahora son un poco más anchas para que quepa el logo (160px)
    const bodies = techStack.map(() => {
      const x = Math.random() * (width - 160) + 80;
      const y = -Math.random() * 300 - 50; // Caen desde más cerquita
      return Bodies.rectangle(x, y, 160, 50, {
        restitution: 0.6,
        friction: 0.1,
        density: 0.001,
        chamfer: { radius: 25 },
      });
    });

    World.add(world, bodies);

    // Configuración del Mouse
    const mouse = Mouse.create(sceneRef.current);

    // 🔥 EL FIX DEFINITIVO PARA EL SCROLL 🔥
    // Le quitamos a Matter.js el poder sobre TODOS los eventos de rueda posibles
    mouse.element.removeEventListener("wheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener(
      "DOMMouseScroll",
      (mouse as any).mousewheel,
    );

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Matter.Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body, index) => {
        const el = elementsRef.current[index];
        if (el) {
          // Centramos el div (160x50) sobre el cuerpo físico
          el.style.transform = `translate(${body.position.x - 80}px, ${body.position.y - 25}px) rotate(${body.angle}rad)`;
        }
      });
    });

    return () => {
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    // Redujimos la altura a 300px para que funcione como separador real
    <section className="relative w-full h-[300px] bg-[#050505] border-y border-white/10 overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Título de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-6xl md:text-[8rem] font-display font-black text-white/[0.03] uppercase tracking-tighter leading-none select-none">
          MI STACK
        </h2>
      </div>

      {/* Contenedor de Físicas */}
      <div ref={sceneRef} className="absolute inset-0 z-10">
        {techStack.map((tech, i) => (
          <div
            key={i}
            ref={(el) => {
              elementsRef.current[i] = el;
            }}
            // Estilo de la Pastilla con logo
            className="absolute top-0 left-0 w-[160px] h-[50px] bg-[#0a0a0c] border border-white/10 rounded-full flex items-center justify-start px-4 gap-3 text-white font-mono font-bold text-xs md:text-sm tracking-widest shadow-lg select-none hover:border-white/30 transition-colors duration-300"
            style={{ willChange: "transform" }}
          >
            {/* Logo de la tecnología */}
            <img
              src={tech.img}
              alt={`${tech.name} logo`}
              className="w-6 h-6 object-contain drop-shadow-md"
              draggable="false" // Previene bugs visuales al arrastrar la imagen
            />
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackPhysics;
