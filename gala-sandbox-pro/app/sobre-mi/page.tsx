import React from 'react';
import HeroSection from '@/components/HeroSection'; // Import HeroSection for the top banner
import AboutMeSection from '@/components/AboutMeSection'; // Import the AboutMeSection component

// Metadata for the page
export const metadata = {
  title: 'DestinoTech - Sobre Mí',
  description: 'Descubre la historia de Elías Coranti, fundador de DestinoTech, y la visión detrás de la plataforma.',
};

const SobreMiPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Mi Historia: Elías Coranti y la Visión de DestinoTech"
        description="Descubre el camino que me llevó a crear esta plataforma, impulsado por la pasión y la convicción de que todos merecen una guía sólida en el mundo IT."
        ctaText="Explora Nuestros Cursos"
        ctaLink="/cursos"
      />
      <AboutMeSection showCta={true} /> {/* Render the AboutMeSection with CTA */}
    </>
  );
};

export default SobreMiPage;
