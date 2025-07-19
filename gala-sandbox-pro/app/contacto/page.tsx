import React from 'react';
import HeroSection from '@/components/HeroSection'; // Import HeroSection for the top banner
import ContactSection from '@/components/ContactSection'; // Import the ContactSection component

// Metadata for the page
export const metadata = {
  title: 'DestinoTech - Contacto',
  description: 'Contáctate con DestinoTech para consultas, ideas o para saber más sobre nuestros programas de formación IT.',
};

const ContactoPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="¡Conversemos!"
        description="¿Tienes preguntas, ideas o simplemente quieres saludar? ¡Estoy aquí para escucharte!"
        ctaText="Explora Nuestros Cursos"
        ctaLink="/cursos"
      />
      <ContactSection />
    </>
  );
};

export default ContactoPage;
