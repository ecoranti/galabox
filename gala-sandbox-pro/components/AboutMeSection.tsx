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
    <section
      className="contact-content-section flex flex-col justify-center items-center bg-background-light dark:bg-background-dark text-text-light text-center transition-colors duration-400 py-20"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold text-heading-color transition-colors duration-400">
            ¿Querés saber más de mí?
          </h2>
          <div className="social-icons flex justify-center text-4xl gap-10">
            <a
              href="https://t.me/JovenesIT"
              target="_blank"
              aria-label="Telegram"
              className="text-accent-blue-platzi hover:text-hover-platzi transition-colors duration-300"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.youtube.com/@JovenesIT"
              target="_blank"
              aria-label="YouTube"
              className="text-red-600 hover:text-red-400 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/eliascoranti"
              target="_blank"
              aria-label="LinkedIn"
              className="text-blue-700 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
