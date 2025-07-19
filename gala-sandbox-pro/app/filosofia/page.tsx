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
    <main className="flex flex-col min-h-[calc(100vh-64px)] pb-32">
      <HeroSection
        title="Nuestra Filosofía"
        description="En DestinoTech, creemos en una guía personalizada para tu éxito en el mundo IT."
        ctaText="Explora Nuestros Cursos"
        ctaLink="/cursos"
      />
      <PhilosophySection />
    </main>
  );
};

export default FilosofiaPage;
