import React from 'react';
import PhilosophySection from '@/components/PhilosophySection'; // Import the PhilosophySection component
import HeroSection from '@/components/HeroSection'; // Import the HeroSection component for the top banner

// Metadata for the page
export const metadata = {
  title: 'DestinoTech - Nuestra Filosofía',
  description: 'Descubre la visión y los principios que guían a DestinoTech en la formación de profesionales IT.',
};

const FilosofiaPage: React.FC = () => {
  return (
    <>
      {/* Hero section specific to the Philosophy page */}
      <HeroSection
        title="Nuestra Filosofía"
        description="En DestinoTech, creemos en una guía personalizada para tu éxito en el mundo IT."
        ctaText="Explora Nuestros Cursos"
        ctaLink="/cursos"
      />
      {/* Main content of the philosophy section */}
      <PhilosophySection />
    </>
  );
};

export default FilosofiaPage;
