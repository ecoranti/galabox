"use client";
import { useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import FlyingPlane from '@/components/FlyingPlane';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  
  // Ref para apuntar al ícono estático y medir su posición
  const iconRef = useRef<HTMLSpanElement>(null);

  const handleAnimationStart = () => {
    if (iconRef.current) {
      // Obtenemos la posición exacta del ícono en la pantalla
      const rect = iconRef.current.getBoundingClientRect();
      setStartPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      
      // Activamos la animación
      setIsAnimating(true);
    }
  };

  const handleAnimationComplete = () => {
    window.open('https://t.me/tu_comunidad', '_blank'); // Reemplaza con tu enlace
    setIsAnimating(false);
  };

  return (
    <main className="flex flex-col bg-gradient-to-b from-[#1f4037] via-[#2c7744] to-[#39a845]">
      <HeroSection
        title="Formación IT: Conquista el Mercado Global con Confianza"
        description="Deja atrás la incertidumbre. Te equipamos con las habilidades técnicas, la visión estratégica y el acompañamiento que las empresas tech exigen hoy. ¡Tu futuro en IT empieza aquí! 🚀"
        ctaText="Explora Nuestros Cursos"
        ctaLink="/cursos-destacados"
      >
        <div className="mt-10 text-center">
          <h3 className="text-white text-lg font-semibold mb-4">
            ¿Te gustaría sumarte a nuestra comunidad?
          </h3>
          <div className="flex items-center justify-center gap-4 mt-4 relative">
            <button
              onClick={handleAnimationStart}
              disabled={isAnimating}
              className="bg-white text-green-800 font-semibold py-2 px-6 rounded-full hover:scale-105 transition disabled:scale-100 disabled:opacity-70"
            >
              Unirme a la comunidad
            </button>

            {/* Ícono estático. La magia está en la clase 'opacity-0' */}
            <span 
              ref={iconRef} 
              className={`text-white transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <FaTelegramPlane size={32} />
            </span>
          </div>
        </div>
      </HeroSection>

      {/* El componente de animación se renderiza solo cuando es necesario */}
      {isAnimating && (
        <FlyingPlane 
          startX={startPosition.x} 
          startY={startPosition.y} 
          onComplete={handleAnimationComplete} 
        />
      )}
    </main>
  );
}
