'use client'; // Este componente necesita ser un Client Component porque maneja estado y elementos interactivos.

import React from 'react';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';

const ContactSection: React.FC = () => {

  return (
    <section className="contact-content-section py-16 bg-background-light dark:bg-background-dark text-text-light text-center transition-colors duration-400">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="w-full mt-8 flex flex-col items-center text-center relative">
          <h2 className="text-4xl font-bold text-heading-color transition-colors duration-400 mb-4">
            Únete a nuestra comunidad
          </h2>
          <div className="flex justify-center items-center gap-6 mt-4">
            <a
              href="https://t.me/JovenesIT"
              target="_blank"
              aria-label="Únete a nuestra comunidad"
              className="group inline-flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 hover:drop-shadow-[0_0_12px_rgba(0,170,255,0.5)]"
            >
              <FaTelegramPlane className="text-blue-400 dark:text-white text-4xl transition-colors duration-500 ease-in-out group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a
              href="https://wa.me/5493584023966"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="inline-flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_0_25px_rgba(0,255,0,0.6)] transition-all duration-300"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
