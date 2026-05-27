import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function AvatarParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 2000 }} 
      /* AJUSTES: Agrandamos la caja base en móviles (360x480) y evitamos desbordes con max-w-[95vw] */
      className="relative w-[360px] h-[480px] max-w-[95vw] md:w-[500px] md:h-[650px] flex items-center justify-center cursor-crosshair"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            y: [0, -18, 8, -25, 12, 0], 
            x: [0, 10, -5, 15, -8, 0],
            rotateZ: [0, 1.5, -1, 0.5, 0]
          }}
          transition={{
            duration: 8,           
            repeat: Infinity,      
            ease: "easeInOut",    
          }}
        >
          {/* AJUSTES: w-full en móvil para que crezca, md:w-[95%] en PC para mantener el margen */}
          <motion.img
            style={{ transform: "translateZ(60px)" }} 
            src="/avatar-sf.png" 
            alt="Avatar Carlos"
            className="w-full md:w-[95%] h-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.7)] pointer-events-none"
          />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}