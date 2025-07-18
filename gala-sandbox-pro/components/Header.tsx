// components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-8
                       bg-backgroundLight dark:bg-primaryDarkBlue
                       shadow-md dark:shadow-lg transition-colors duration-300 ease-in-out">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <Image
            src={theme === 'dark' ? '/camino-tech-logo-dark.svg' : '/camino-tech-logo.svg'} // ¡ACTUALIZADO: Rutas de imagen para CaminoTech!
            alt="CaminoTech Logo" // ¡ACTUALIZADO: Texto alternativo para CaminoTech!
            width={150} // Ajusta el tamaño según tu logo
            height={40} // Ajusta el tamaño según tu logo
            priority // Carga prioritaria para el logo
          />
        </Link>

        {/* Iconos a la derecha: Theme Toggle y Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:space-x-6"> {/* Espaciado entre iconos */}
          {/* Theme Toggle */}
          <button
            className="text-textLight dark:text-white p-2 rounded-md cursor-pointer text-xl
                       transition-colors duration-300 hover:text-primaryBlue dark:hover:text-secondaryGreen
                       focus:outline-none"
            aria-label="Cambiar tema"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <i className="fas fa-moon"></i> // Ícono de luna para cambiar a oscuro
            ) : (
              <i className="fas fa-sun"></i> // Ícono de sol para cambiar a claro
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle md:hidden text-textLight dark:text-white text-2xl cursor-pointer p-1
                       focus:outline-none"
            aria-label="Abrir/Cerrar menú"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <i className="fas fa-times"></i> // Icono de cerrar (X)
            ) : (
              <i className="fas fa-bars"></i> // Icono de hamburguesa
            )}
          </button>
        </div>

        {/* Navigation Links */}
        {/* La navegación en móvil será una superposición */}
        <nav className={`
          fixed inset-0 z-40
          bg-backgroundLight dark:bg-primaryDarkBlue
          flex flex-col items-center justify-center
          md:relative md:inset-auto md:bg-transparent md:dark:bg-transparent
          md:flex md:flex-row md:justify-end md:items-center
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:translate-x-0
          overflow-y-auto md:overflow-visible // Para que el scroll funcione en móvil si hay muchos links
        `}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-6
                         list-none p-0 m-0 text-2xl md:text-base">
            <li><Link href="#inicio" className="nav-link" onClick={closeMobileMenu}>Inicio</Link></li>
            <li><Link href="#filosofia" className="nav-link" onClick={closeMobileMenu}>Nuestra Filosofía</Link></li>
            <li><Link href="#cursos-destacados" className="nav-link" onClick={closeMobileMenu}>Cursos</Link></li>
            <li><Link href="#sobre-mi" className="nav-link" onClick={closeMobileMenu}>Sobre Mí</Link></li>
            <li><Link href="#contacto" className="nav-link" onClick={closeMobileMenu}>Contacto</Link></li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}