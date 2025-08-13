'use client'; // This component needs to be a Client Component because it handles state and interactive elements.
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Asegúrate de tener este import si usas <Image>
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
        {/* Usamos el componente Image de Next.js */}
        <Image
          src="/elias-coranti.jpg"
          alt="Elías Coranti"
          width={160} // Ajuste de tamaño para el componente Image
          height={160} // Ajuste de tamaño
          className="mx-auto rounded-full shadow-lg w-40 h-40 object-cover mb-6"
        />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Sobre mí</h2>
        
        {/* TEXTO CORREGIDO Y FUSIONADO */}
        <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed">
          ¡Hola! Soy Elías Coranti, y me emociona que estés aquí. Tal vez pienses que, con 30 años, no tengo décadas de experiencia para compartir. Y tienes razón. Mi recorrido es más corto, pero está lleno de aprendizajes que quiero entregarte de corazón. No soy un gurú, sino un compañero más en el camino, y mi edad no me frena, sino que me inspira a ser un ejemplo mientras sigo aprendiendo y creciendo, rodeado siempre de personas valiosas y extraordinarias que me ayudan a mejorar cada día.
        </p>
        <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed">
          Mi historia no empezó en una oficina de Silicon Valley. Empecé en mi barrio, con trabajos honestos como ayudar a mi padre electricista o, sí, <b className="font-bold">cortando el pasto con mis hermanos</b>, usando una Zanella 50 y un carrito. Fue un inicio humilde, lleno de esfuerzo, pero con una curiosidad insaciable por <b className="font-bold">conocer y hacer cosas nuevas</b>, herencia de mi familia. Aquel camino me llevó a enfocarme en mi carrera de Ingeniería en Telecomunicaciones.
        </p>
        <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed">
          El verdadero punto de inflexión fue cuando, a pesar de mi inglés básico de secundaria, di mi <b>primer salto al mundo profesional de redes en 2018</b>. En ese trabajo, que me puso en contacto con empresas de gran envergadura (carriers, embajadas, aeropuertos), escalé rápidamente mis conocimientos de redes y pude poner en práctica todo lo que aprendía en la universidad. Fue ahí, con el uso diario del inglés y el crecimiento profesional, donde me di cuenta de una verdad poderosa: la <b>experiencia técnica y el dominio del inglés eran las llaves para acceder a oportunidades globales</b>. Y luego, tras años de esfuerzo, empecé a hacer <b>trabajos remotos para empresas extranjeras pagados en USD</b>.
        </p>
        <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed">
          Mi misión con <b>CaminoTech</b> es simple: ayudarte a construir tus propias oportunidades. Te mostraré el camino para que dejes atrás la incertidumbre, te formes en lo que el mercado realmente demanda y <b>domines el mundo global de IT</b>. Porque <b>tu éxito es mi éxito</b>, y estoy aquí para acompañarte en tu transformación.
        </p>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          Gracias por estar aquí y por confiar en CaminoTech. Estoy emocionado de ser parte de tu transformación.
        </p>
        {/* FIN DEL TEXTO CORREGIDO */}

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