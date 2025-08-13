import React from 'react';

const PhilosophySection: React.FC = () => {
  return (
    <section className="philosophy-section py-20 text-center bg-card-background-light dark:bg-primary-dark-blue border-b border-border-light dark:border-border-dark transition-colors duration-400">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-heading-color-light dark:text-heading-color-dark transition-colors duration-400">
          CaminoTech: Un Ecosistema para tu Crecimiento
        </h2>
        <div className="philosophy-content text-lg leading-relaxed text-text-light dark:text-text-dark transition-colors duration-400">
          <p className="mb-5">
            En el camino de la tecnología, el esfuerzo individual es solo el comienzo. El verdadero catalizador es estar rodeado de las personas correctas: líderes con visión, compañeros con determinación y una comunidad que comparte tus mismos sueños. Yo tuve esa fortuna, y gracias a esos mentores que me afirmaron y me impulsaron, hoy quiero replicar ese ecosistema para ti.
          </p>
          <p className="mb-5">
            Aquí no solo te enseñamos lo técnico. Nuestra misión es guiarte para que desarrolles la confianza, las habilidades estratégicas y la resiliencia necesarias para destacar en el mercado global. Porque tu potencial es ilimitado, y con el apoyo adecuado, puedes alcanzarlo todo.
          </p>
          <p>
            Recuerda: <b className="font-bold">la suerte y las oportunidades se encuentran donde se construyen, no donde se esperan.</b> Es hora de empezar a construir tu futuro en el mejor entorno posible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;