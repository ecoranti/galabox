import React from 'react';

const PhilosophySection: React.FC = () => {
  return (
    <section className="philosophy-section py-20 text-center bg-card-background-light border-b border-border-light transition-colors duration-400">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-heading-color transition-colors duration-400">
          CaminoTech: Más que Cursos, Tu Guía Hacia el Éxito
        </h2>
        <div className="philosophy-content text-lg leading-relaxed text-text-light transition-colors duration-400">
          <p className="mb-5">
            En el camino de la tecnología, el esfuerzo individual es clave, pero{' '}
            <span className="font-semibold text-accent-green-platzi">el verdadero impulso viene de la guía adecuada.</span>{' '}
            He tenido la fortuna de contar con líderes que me desafiaron, me afirmaron y me animaron a ir más allá. Hoy, mi misión es ser ese{' '}
            <span className="font-semibold text-accent-green-platzi">impulso para ti.</span>
          </p>
          <p>
            No solo te enseñamos lo técnico; te preparamos para los{' '}
            <span className="font-semibold text-accent-green-platzi">desafíos reales del mercado global.</span>{' '}
            Te acompañamos para que desarrolles no solo habilidades duras, sino también la{' '}
            <span className="font-semibold text-accent-green-platzi">confianza y la mentalidad estratégica</span>{' '}
            para destacar. Porque tu potencial es ilimitado, y con el mentor correcto, puedes alcanzarlo todo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
