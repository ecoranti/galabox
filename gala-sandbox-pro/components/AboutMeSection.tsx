'use client'; // This component needs to be a Client Component because it handles state and interactive elements.
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaTelegramPlane, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

interface AboutMeSectionProps {
  showCta?: boolean;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ showCta = false }) => {

  useEffect(() => {
    // Optional: Could setup global hover pulse effect here if needed later
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-foreground py-20 px-4">
      <div className="max-w-3xl w-full text-center">
        <img
          src="/elias-coranti.jpg"
          alt="Elías Coranti"
          className="mx-auto rounded-full shadow-lg w-40 h-40 object-cover mb-6"
        />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Sobre mí</h2>
        <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed">
          ¡Hola! Soy <span className="text-green-400 font-semibold">Elías Coranti</span>, el fundador de <span className="text-green-400 font-semibold">DestinoTech</span>. Mi viaje en el mundo de la tecnología ha sido una montaña rusa de aprendizajes, desafíos y oportunidades inesperadas.
          Desde mis inicios, siempre creí en el poder del esfuerzo individual y la constancia. Sin embargo, lo que realmente marcó la diferencia fueron líderes y mentores que me apoyaron, retaron y afirmaron mi valor. Ellos me impulsaron a seguir incluso cuando el camino parecía incierto.
        </p>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          Esa experiencia transformadora me inspiró a fundar DestinoTech, un proyecto con la misión de hacer que el conocimiento tecnológico sea <span className="text-green-400 font-semibold">accesible para todos</span>. Aquí no solo compartimos habilidades IT, sino que replicamos ese acompañamiento humano, mentoría auténtica, y la guía que marca la diferencia. 
          Quiero ayudarte a desbloquear tu máximo potencial, brindándote las herramientas, la mentalidad estratégica y la resiliencia necesarias para conquistar el mundo tecnológico.
        </p>
        <div className="flex justify-center gap-8 mt-10 text-3xl">
          <a
            href="https://t.me/JovenesIT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/eliascoranti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
