import React from 'react';
import CourseList from '@/components/CourseList'; // Import the CourseList component
import HeroSection from '@/components/HeroSection'; // Import the HeroSection component

// Define the data for all courses
const allCourses = [
  {
    icon: '💻',
    title: 'Introducción al Mundo Tech',
    description: 'Ideal para principiantes. Aprende los conceptos fundamentales de la tecnología, los roles más demandados en la industria y cómo construir tu perfil profesional desde cero.',
    duration: '10 horas',
    difficulty: 'Básico',
    topics: 'Fundamentos de IT, Roles en Tech, Primeros Pasos en Programación, Herramientas Esenciales.',
    link: 'https://hotmart.com/tu-curso-intro',
  },
  {
    icon: '🌐',
    title: 'Fundamentos de Redes',
    description: 'Sumérgete en el corazón de la conectividad. Domina los modelos OSI y TCP/IP, protocolos de red (HTTP, DNS, FTP), y conceptos clave como direccionamiento IP y subredes.',
    duration: '15 horas',
    difficulty: 'Básico-Intermedio',
    topics: 'Modelos de Red, Protocolos, Direccionamiento IP, Dispositivos de Red, Seguridad Básica.',
    link: 'https://hotmart.com/tu-curso-redes',
  },
  {
    icon: '🔒',
    title: 'Ciberseguridad desde Cero',
    description: 'Protege la información en un mundo digital. Aprende los principios básicos de la ciberseguridad, amenazas comunes, cómo proteger tus sistemas y datos, y las herramientas esenciales para empezar.',
    duration: '12 horas',
    difficulty: 'Básico',
    topics: 'Principios de Seguridad, Amenazas Comunes, Criptografía, Seguridad en Redes, Mejores Prácticas.',
    link: 'https://hotmart.com/tu-curso-ciberseguridad',
  },
  {
    icon: '☁️',
    title: 'Introducción al Mundo Cloud',
    description: 'Explora los pilares de la computación en la nube. Aprende los fundamentos de AWS, Azure y GCP, y descubre cómo la infraestructura moderna permite construir soluciones escalables.',
    duration: '20 horas',
    difficulty: 'Básico-Intermedio',
    topics: 'Fundamentos de Cloud, AWS/Azure/GCP (Introductorio), Infraestructura como Código.',
    link: 'https://hotmart.com/tu-curso-cloud',
  },
  {
    icon: '🗄️',
    title: 'Introducción a Bases de Datos',
    description: 'Entiende cómo se almacena y gestiona la información. Aprende SQL, diseño de bases de datos relacionales y conceptos básicos de bases de datos NoSQL.',
    duration: '18 horas',
    difficulty: 'Básico-Intermedio',
    topics: 'Modelos de Datos, SQL (CRUD), Normalización, MySQL/PostgreSQL, Introducción a NoSQL.',
    link: 'https://hotmart.com/tu-curso-bases-datos',
  },
  {
    icon: '🐳',
    title: 'Microservicios con Docker',
    description: 'Aprende a contenerizar aplicaciones y a orquestar servicios mediante Docker. Descubre cómo construir arquitecturas modulares y escalables usando contenedores en entornos reales.',
    duration: '16 horas',
    difficulty: 'Intermedio',
    topics: 'Contenedores, Docker CLI, Docker Compose, Arquitectura de Microservicios, Deploy con Docker.',
    link: 'https://hotmart.com/tu-curso-docker',
  },
  {
    icon: '🐍',
    title: 'Python para Profesionales IT',
    description: 'Descubre el potencial de Python como herramienta clave en automatización, análisis de datos y desarrollo de scripts para entornos IT. Ideal para quienes buscan potenciar su perfil técnico.',
    duration: '20 horas',
    difficulty: 'Básico-Intermedio',
    topics: 'Fundamentos de Python, Scripts para IT, Automatización de Tareas, Introducción a APIs y Librerías Útiles.',
    link: 'https://hotmart.com/tu-curso-python',
  },
];

// Metadata for the page
export const metadata = {
  title: 'CaminoTech - Catálogo de Cursos',
  description: 'Explora el catálogo completo de cursos de CaminoTech para impulsar tu carrera en tecnología.',
};

const CursosPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Catálogo Completo de Cursos"
        description="Explora nuestra oferta educativa diseñada para impulsarte en tu carrera IT. Desde fundamentos hasta especializaciones, encuentra el camino que te llevará al éxito."
        ctaText="Contáctanos para más información"
        ctaLink="/contacto"
      />
      <CourseList courses={allCourses} title="Todos Nuestros Cursos" showAllCoursesLink={false} />
    </>
  );
};

export default CursosPage;
