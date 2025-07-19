'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import NavLink from './NavLink'; // Import the NavLink component
import Image from 'next/image'; // Import Image for optimized images

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked (useful for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary-dark-blue text-white py-2 fixed top-0 left-0 w-full z-50 shadow-md h-[45px] flex items-center">
      <div className="container flex justify-between items-center w-full">
        {/* Logo/Site Title */}
        <Link href="/" className="no-underline text-white text-xl font-bold flex items-center">
          {/* Using Next.js Image component for optimized image loading */}
          <Image
            src="/camino-tech-logo.svg" // Path to your logo in the public folder
            alt="DestinoTech Logo"
            width={30} // Set appropriate width
            height={30} // Set appropriate height
            className="mr-2"
          />
          DestinoTech
        </Link>

        {/* Mobile Menu Toggle and Theme Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="bg-none border-none text-white text-2xl cursor-pointer p-1"
            aria-label="Abrir menú"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* Toggle icon */}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex list-none m-0 p-0 gap-6">
            <li><NavLink href="/" onClick={closeMenu}>Inicio</NavLink></li>
            <li><NavLink href="/filosofia" onClick={closeMenu}>Nuestra Filosofía</NavLink></li>
            <li><NavLink href="/cursos" onClick={closeMenu}>Cursos</NavLink></li>
            <li><NavLink href="/sobre-mi" onClick={closeMenu}>Sobre Mí</NavLink></li>
            <li><NavLink href="/contacto" onClick={closeMenu}>Contacto</NavLink></li>
          </ul>
        </nav>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation Menu (visible when isMenuOpen is true) */}
      <nav
        className={`fixed top-[45px] left-0 w-full h-[calc(100vh-45px)] bg-primary-dark-blue flex flex-col items-center justify-start pt-10 transition-transform duration-400 ease-in-out z-40 md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col list-none m-0 p-0 gap-8 text-center w-full">
          <li><NavLink href="/" onClick={closeMenu}>Inicio</NavLink></li>
          <li><NavLink href="/filosofia" onClick={closeMenu}>Nuestra Filosofía</NavLink></li>
          <li><NavLink href="/cursos" onClick={closeMenu}>Cursos</NavLink></li>
          <li><NavLink href="/sobre-mi" onClick={closeMenu}>Sobre Mí</NavLink></li>
          <li><NavLink href="/contacto" onClick={closeMenu}>Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
