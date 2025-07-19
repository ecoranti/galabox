'use client';

import React from 'react';
import { FaTelegramPlane, FaWhatsapp, FaLinkedinIn, FaYoutube, FaTelegram } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark text-text-light transition-colors duration-300 pt-16">

      <div className="container mx-auto px-4 max-w-2xl py-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Envíanos un Mensaje</h3>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nombre Completo:</label>
            <input type="text" className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tu Email:</label>
            <input type="email" className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tu Mensaje:</label>
            <textarea className="w-full px-4 py-2 h-32 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <h4 className="font-semibold text-lg mb-2">También puedes encontrarme en:</h4>
          <div className="flex justify-center gap-4 text-2xl">
            <a href="https://t.me/JovenesIT" target="_blank" aria-label="Telegram" className="hover:text-blue-400">
              <FaTelegramPlane />
            </a>
            <a href="#" target="_blank" aria-label="YouTube" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="mt-4 text-sm">
            Para consultas directas, puedes escribir a:{" "}
            <a href="mailto:eliascoranti3@gmail.com" className="text-blue-400 hover:underline">
              eliascoranti3@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
