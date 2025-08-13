"use client";
import { useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Home() {
  // Eliminamos el estado y la lógica para la animación, ya no son necesarios
  const handleJoinCommunity = () => {
    window.open('https://t.me/oportunidadesparatodos', '_blank'); // Enlace actualizado a la comunidad real
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
              onClick={handleJoinCommunity}
              className="bg-white text-green-800 font-semibold py-2 px-6 rounded-full hover:scale-105 transition"
            >
              Unirme a la comunidad
            </button>
          </div>
        </div>
      </HeroSection>

      {/* El componente de animación se elimina */}
      {/* Ya no se renderiza FlyingPlane */}
    </main>
  );
}