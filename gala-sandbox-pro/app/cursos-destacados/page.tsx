import React from 'react';
import CourseList from '@/components/CourseList'; // Import the CourseList component
import HeroSection from '@/components/HeroSection'; // Import the HeroSection component

// Define the data for featured courses (a subset of allCourses)
const featuredCourses = [
  {
    icon: '💻',
    title: 'Introducción al Mundo Tech',
    description: 'Descubre los pilares del ecosistema tecnológico y cómo posicionarte para el éxito.',
    duration: '10 horas',
    difficulty: 'Básico',
    link: 'https://hotmart.com/tu-curso-intro',
  },
  {
    icon: '🌐',
    title: 'Fundamentos de Redes',
    description: 'Domina los modelos OSI y TCP/IP, y los protocolos esenciales que sustentan toda la infraestructura.',
    duration: '15 horas',
    difficulty: 'Básico-Intermedio',
    link: 'https://hotmart.com/tu-curso-redes',
  },
  {
    icon: '🔒',
    title: 'Ciberseguridad desde Cero',
    description: 'Inicia tu camino en la ciberseguridad con los principios básicos y amenazas comunes.',
    duration: '12 horas',
    difficulty: 'Básico',
    link: 'https://hotmart.com/tu-curso-ciberseguridad',
  },
];

// Metadata for the page
export const metadata = {
  title: 'DestinoTech - Cursos Destacados',
  description: 'Descubre los cursos más populares y destacados de DestinoTech para iniciar o avanzar en tu carrera IT.',
};

const CursosDestacadosPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Nuestros Cursos Más Populares"
        description="Sumérgete en nuestras formaciones más demandadas, diseñadas para darte un impulso inmediato."
        ctaText="Ver Catálogo Completo de Cursos"
        ctaLink="/cursos"
      />
      <CourseList courses={featuredCourses} title="Cursos Destacados" showAllCoursesLink={true} featuredOnly={true} />
    </>
  );
};

export default CursosDestacadosPage;
