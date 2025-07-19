import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark-blue text-white py-8 text-center text-sm relative overflow-hidden">
      {/* Línea superior con degradado */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      
      <p className="text-footer-text-light relative z-10">
        © 2025 Elías Coranti / DestinoTech. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;