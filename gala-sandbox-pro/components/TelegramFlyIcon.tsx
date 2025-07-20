"use client";

import { motion, useAnimation } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface TelegramFlyIconProps {
  anchorRef: React.RefObject<HTMLElement> | null;
}

const TelegramFlyIcon = ({ anchorRef }: TelegramFlyIconProps) => {
  const controls = useAnimation();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!anchorRef || !anchorRef.current) return;

    const rect = anchorRef.current.getBoundingClientRect();
    setPosition({ x: rect.left, y: rect.top });

    const start = async () => {
      await controls.start({
        offsetDistance: "100%",
        rotate: 45,
        transition: { duration: 1.8, ease: "easeInOut" },
      });
      window.open("https://t.me/eliascoranti", "_blank");
    };

    start();

    const reset = setTimeout(() => {
      controls.set({ offsetDistance: "0%" });
    }, 2500);

    return () => clearTimeout(reset);
  }, [anchorRef, controls]);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ left: position.x, top: position.y }}
    >
      <svg className="absolute w-[400px] h-[300px]">
        <motion.path
          d="M0,100 C100,0 300,0 400,-100"
          fill="none"
          stroke="transparent"
          strokeWidth="2"
          id="telegramPath"
        />
      </svg>

      <motion.div
        animate={controls}
        initial={{ offsetDistance: "0%" }}
        style={{
          offsetPath: "path('M0,100 C100,0 300,0 400,-100')",
          offsetDistance: "0%",
          offsetRotate: "auto",
        }}
      >
        <FaTelegramPlane size={40} className="text-white drop-shadow-lg" />
      </motion.div>
    </div>
  );
};

export default TelegramFlyIcon;