'use client';

import { motion } from 'framer-motion';
import { FaTelegramPlane } from 'react-icons/fa';

interface FlyingPlaneProps {
  startX: number;
  startY: number;
  onComplete?: () => void;
}

const FlyingPlane = ({ startX, startY, onComplete }: FlyingPlaneProps) => {
  // La ruta de la animación se construye dinámicamente para volar hacia la esquina superior derecha
  const dynamicPath = `M${startX},${startY} C${startX + 50},${startY - 150} ${window.innerWidth - 150},100 ${window.innerWidth + 20}, -20`;

  return (
    <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      <motion.g
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        onAnimationComplete={() => {
          if (onComplete) {
            onComplete();
          }
        }}
        style={{
          offsetPath: `path("${dynamicPath}")`,
        }}
      >
        {/* ¡El cambio clave! El avión ahora es blanco. */}
        <FaTelegramPlane size={32} color="white" />
      </motion.g>
    </svg>
  );
};

export default FlyingPlane;
