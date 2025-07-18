// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; // Asegúrate de importar Image para usarlo en la sección "Sobre Mí"
import Link from 'next/link'; // Importa Link si los botones en Hero/Cursos apuntan a rutas internas
import type { Variants } from 'framer-motion';

export default function Home() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: 'easeOut', delay: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main>
      {/* Sección Hero */}
      <section
        id="inicio"
        className="hero-section flex flex-col justify-center items-center text-center px-4 md:px-8
                  h-screen-minus-header sm:h-screen
                  bg-gradient-to-r from-gradientStartLight to-gradientEndLight
                  dark:bg-gradient-to-r dark:from-gradientStartDark dark:to-gradientEndDark
                  text-textLight dark:text-textDark relative overflow-hidden pt-[45px]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={textVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl mx-auto text-headingColorLight dark:text-headingColorDark">
            Formación IT para latinos: Conquista el Mercado Global con Confianza
          </motion.h2>
          <motion.p variants={textVariants} className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-textLight dark:text-textDark">
            Deja atrás la incertidumbre. Te equipamos con las <b className="font-bold">habilidades técnicas, la visión estratégica y el acompañamiento</b> que las empresas tech más exigen hoy. ¡Tu futuro en IT empieza aquí! 🚀
          </motion.p>
          <motion.a
            href="#cursos-destacados"
            variants={buttonVariants}
            className="btn-primary"
          >
            Explora Nuestros Cursos
          </motion.a>
        </motion.div>
      </section>

      {/* Sección Nuestra Filosofía */}
      <section id="filosofia" className="philosophy-section py-20 text-center bg-cardBackgroundLight dark:bg-cardBackgroundDark border-b border-borderLight dark:border-borderDark transition-colors duration-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="container mx-auto px-4 max-w-4xl"
        >
          <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl font-bold mb-8 text-headingColorLight dark:text-headingColorDark">
            CaminoTech: Más que Cursos, Tu Guía Hacia el Éxito
          </motion.h2>
          <motion.div variants={containerVariants} className="text-textLight dark:text-textDark leading-relaxed text-lg">
            <motion.p variants={cardVariants} className="mb-5">En el camino de la tecnología, el esfuerzo individual es clave, pero <b className="font-bold">el verdadero impulso viene de la guía adecuada.</b> He tenido la fortuna de contar con líderes que me desafiaron, me afirmaron y me animaron a ir más allá. Hoy, mi misión es ser ese <b className="font-bold">impulso para ti.</b></motion.p>
            <motion.p variants={cardVariants}>No solo te enseñamos lo técnico; te preparamos para los <b className="font-bold">desafíos reales del mercado global.</b> Te acompañamos para que desarrolles no solo habilidades duras, sino también la <b className="font-bold">confianza y la mentalidad estratégica</b> para destacar. Porque tu potencial es ilimitado, y con el mentor correcto, puedes alcanzarlo todo.</motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Cursos Destacados */}
      <section id="cursos-destacados" className="courses-section py-20 text-center bg-coursesSectionBgLight dark:bg-coursesSectionBgDark transition-colors duration-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl font-bold mb-12 text-headingColorLight dark:text-headingColorDark">
            Nuestros Cursos Más Populares
          </motion.h2>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Curso 1 Destacado */}
            <motion.div variants={cardVariants} className="course-card bg-cardBackgroundLight dark:bg-cardBackgroundDark rounded-xl p-8 shadow-md flex flex-col justify-between items-center border border-borderLight dark:border-borderDark transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-primaryBlue dark:text-secondaryGreen text-5xl mb-4 text-center w-full">
                <i className="fas fa-desktop"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-headingColorLight dark:text-headingColorDark text-center">Introducción al mundo tech</h3>
              <p className="text-textLight dark:text-textDark leading-relaxed text-center flex-grow">Descubre los pilares del ecosistema tecnológico y cómo posicionarte para el éxito.</p>
              <div className="mt-auto flex flex-col items-center gap-3 w-full">
                <p className="text-textLight dark:text-textDark text-sm"><b>Duración:</b> 10 horas<br /><b>Dificultad:</b> Básico</p>
                <a href="https://hotmart.com/tu-curso-intro" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Saber Más
                </a>
              </div>
            </motion.div>

            {/* Curso 2 Destacado */}
            <motion.div variants={cardVariants} className="course-card bg-cardBackgroundLight dark:bg-cardBackgroundDark rounded-xl p-8 shadow-md flex flex-col justify-between items-center border border-borderLight dark:border-borderDark transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-primaryBlue dark:text-secondaryGreen text-5xl mb-4 text-center w-full">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-headingColorLight dark:text-headingColorDark text-center">Fundamentos de Redes</h3>
              <p className="text-textLight dark:text-textDark leading-relaxed text-center flex-grow">Domina los modelos OSI y TCP/IP, y los protocolos esenciales que sustentan toda la infraestructura.</p>
              <div className="mt-auto flex flex-col items-center gap-3 w-full">
                <p className="text-textLight dark:text-textDark text-sm"><b>Duración:</b> 15 horas<br /><b>Dificultad:</b> Básico-Intermedio</p>
                <a href="https://hotmart.com/tu-curso-redes" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Saber Más
                </a>
              </div>
            </motion.div>

            {/* Curso 3 Destacado */}
            <motion.div variants={cardVariants} className="course-card bg-cardBackgroundLight dark:bg-cardBackgroundDark rounded-xl p-8 shadow-md flex flex-col justify-between items-center border border-borderLight dark:border-borderDark transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-primaryBlue dark:text-secondaryGreen text-5xl mb-4 text-center w-full">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-headingColorLight dark:text-headingColorDark text-center">Ciberseguridad desde cero</h3>
              <p className="text-textLight dark:text-textDark leading-relaxed text-center flex-grow">Inicia tu camino en la ciberseguridad con los principios básicos y amenazas comunes.</p>
              <div className="mt-auto flex flex-col items-center gap-3 w-full">
                <p className="text-textLight dark:text-textDark text-sm"><b>Duración:</b> 12 horas<br /><b>Dificultad:</b> Básico</p>
                <a href="https://hotmart.com/tu-curso-ciberseguridad" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Saber Más
                </a>
              </div>
            </motion.div>

          </motion.div>
          {/* Este botón ahora también usará la clase de Tailwind y será animado por Framer Motion */}
          <motion.a
            href="/cursos" // Puedes crear una página /cursos.tsx para el catálogo completo
            variants={buttonVariants} // Reutiliza las variantes del botón
            className="btn-primary" // Clase global .btn-primary
          >
            Ver Catálogo Completo de Cursos
          </motion.a>
        </motion.div>
      </section>

      {/* Sección Sobre Mí (Contenido de sobre-mi.html integrado aquí) */}
      <section id="sobre-mi" className="about-me-section py-20 bg-cardBackgroundLight dark:bg-primaryDarkBlue text-center border-t border-b border-borderLight dark:border-borderDark transition-colors duration-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="container mx-auto px-4 max-w-4xl"
        >
          <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl font-bold mb-10 text-headingColorLight dark:text-headingColorDark">Mi Historia: Elías Coranti y la Visión de CaminoTech</motion.h2>
          <motion.img
            src="/elias-coranti.jpg" // ¡Ruta confirmada!
            alt="Foto de Elías Coranti"
            variants={buttonVariants}
            className="rounded-full w-48 h-48 object-cover mx-auto mb-8 shadow-lg"
          />

          <motion.div variants={containerVariants} className="text-textLight dark:text-textDark leading-relaxed text-lg"> {/* Color de texto para el párrafo */}
            <motion.p variants={cardVariants} className="mb-5">¡Hola! Soy Elías Coranti, el fundador de CaminoTech. Mi viaje en el mundo de la tecnología ha sido una montaña rusa de aprendizajes, desafíos y, sobre todo, <b className="font-bold">oportunidades inesperadas.</b></motion.p>
            <motion.p variants={cardVariants} className="mb-5">Desde mis inicios, siempre creí firmemente en el poder del esfuerzo individual y la constancia. Sin embargo, lo que realmente marcó la diferencia en mi trayectoria fue la presencia de <b className="font-bold">líderes y mentores excepcionales.</b> Personas que no solo me enseñaron habilidades técnicas, sino que también me brindaron su apoyo incondicional, me desafiaron a pensar en grande, y me dieron la confianza para seguir adelante, incluso cuando el camino parecía incierto.</motion.p>
            <motion.p variants={cardVariants} className="mb-5">Recuerdo con cariño cómo su guía me impulsó, sus palabras me afirmaron en momentos de duda y su ánimo me dio la energía para avanzar. Esas experiencias fueron transformadoras, y me di cuenta de la importancia de tener a alguien que cree en ti y te empuja hacia tu mejor versión.</motion.p>
            <motion.p variants={cardVariants} className="mb-5">Fue esa convicción profunda, sumada a mi pasión por la tecnología y la enseñanza, lo que me llevó a crear <b className="font-bold">CaminoTech.</b> Mi objetivo no es solo impartir conocimientos técnicos; es replicar esa invaluable experiencia de mentoría. Quiero ser ese líder y esa guía para ti, impulsándote a desarrollar no solo las habilidades más demandadas en IT, sino también la mentalidad estratégica, la confianza y la resiliencia que te permitirán conquistar el mercado global.</motion.p>
            <motion.p variants={cardVariants} className="mb-5">Creo firmemente que tu potencial es ilimitado. En CaminoTech, te acompañaremos en cada paso, brindándote las herramientas, el conocimiento y el apoyo necesario para que superes tus propios límites y alcances tus metas más ambiciosas. <b className="font-bold">Tu éxito es mi éxito, y juntos vamos a construir un futuro brillante en la tecnología.</b></motion.p>
            <motion.p variants={cardVariants}>Gracias por estar aquí y por confiar en CaminoTech. Estoy emocionado de ser parte de tu transformación.</motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección Call to Action / Comunidad */}
      <section id="contacto" className="cta-community-section py-20 text-center bg-backgroundLight dark:bg-secondaryDarkBlue transition-colors duration-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="container mx-auto px-4 max-w-3xl"
        >
          <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl font-bold mb-8 text-headingColorLight dark:text-headingColorDark">¿Listo para dar el Salto? ¡Conversemos!</motion.h2>
          <motion.p variants={textVariants} className="text-textLight dark:text-textDark leading-relaxed text-lg mb-8">Si buscas una guía real, respuestas claras y el apoyo que necesitas para despegar en tecnología, este es tu lugar. Conéctate con Elías y una red de profesionales, comparte dudas y encuentra la inspiración para tu transformación.</motion.p>

          <motion.div variants={containerVariants} className="flex flex-col items-center">
            <motion.a href="mailto:tuemail@ejemplo.com" variants={buttonVariants} className="btn-primary mb-8"> {/* Usa la clase global .btn-primary */}
              Enviar un Email
            </motion.a>
            <motion.div variants={containerVariants} className="social-icons flex space-x-6">
              <motion.a href="https://t.me/JovenesIT" target="_blank" rel="noopener noreferrer" aria-label="Únete a nuestro grupo de Telegram" variants={cardVariants} className="text-primaryBlue dark:text-secondaryGreen text-4xl hover:text-primaryBlue transition-colors duration-300"> {/* Colores para íconos sociales */}
                <i className="fab fa-telegram"></i>
              </motion.a>
              <motion.a href="https://www.youtube.com/@EliasCoranti" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro canal de YouTube" variants={cardVariants} className="text-primaryBlue dark:text-secondaryGreen text-4xl hover:text-primaryBlue transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/eliascoranti/" target="_blank" rel="noopener noreferrer" aria-label="Conecta en LinkedIn" variants={cardVariants} className="text-primaryBlue dark:text-secondaryGreen text-4xl hover:text-primaryBlue transition-colors duration-300">
                <i className="fab fa-linkedin"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pie de Página */}
      <footer className="bg-primaryDarkBlue dark:bg-backgroundDark text-textLight dark:text-textDark py-6 text-center text-sm"> {/* Ajuste de colores */}
        <div className="container mx-auto px-4">
          <p className="text-textLight dark:text-textDark">© {new Date().getFullYear()} Elías Coranti / CaminoTech. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}