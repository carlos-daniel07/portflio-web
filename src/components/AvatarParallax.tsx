import { motion } from "framer-motion";

export default function AvatarParallax() {
  return (
    // Contenedor principal limpio, sin eventos de mouse ni perspectivas 3D
    <div className="relative w-[280px] h-[300px] max-w-[95vw] md:w-[500px] md:h-[650px] flex items-center justify-center">
      {/* Contenedor animado: Solo mantiene la levitación y rotación suave */}
      <motion.div
        className="relative flex items-center justify-center w-full h-full"
        animate={{
          y: [0, -18, 8, -25, 12, 0],
          x: [0, 10, -5, 15, -8, 0],
          rotateZ: [0, 1.5, -1, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Tu imagen normal, sin transformaciones Z extrañas */}
        <img
          src="/avatar-sf.png"
          alt="Avatar Carlos"
          className="w-full md:w-[95%] h-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.7)] pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
