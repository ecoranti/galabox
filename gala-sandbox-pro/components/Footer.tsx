import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[linear-gradient(270deg,_#000000,_#064e3b,_#000000)] animate-gradient-flow-horizontal text-white min-h-16 py-4 flex items-center justify-center text-center text-sm relative overflow-hidden">
      {/* Línea superior con degradado */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      
      <p className="text-white drop-shadow-sm relative z-10">
        © 2025 Elías Coranti / DestinoTech. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;