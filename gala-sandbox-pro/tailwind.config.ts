// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // ¡CLAVE para el modo oscuro!
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores para tema claro (ej. del diseño Platzi)
        // Puedes ajustar estos valores hexadecimales a tus colores exactos
        primaryBlue: '#0A224D', // Azul oscuro principal (para header, footer, algunos iconos)
        secondaryGreen: '#4CAF50', // Verde vibrante (para gradientes, acentos)
        accentBlue: '#2196F3', // Azul para algunos acentos y gradientes
        hoverGreen: '#388E3C', // Verde oscuro para hover

        backgroundLight: '#F8F8F8', // Fondo muy claro para tema claro
        textLight: '#333333', // Texto oscuro para tema claro
        cardBackgroundLight: '#FFFFFF', // Fondo de tarjeta en tema claro
        borderLight: '#EEEEEE', // Borde ligero en tema claro

        gradientStartLight: '#0A224D', // Inicio del gradiente en tema claro (azul oscuro)
        gradientEndLight: '#4CAF50',   // Fin del gradiente en tema claro (verde brillante)

        // Colores para tema oscuro
        primaryDarkBlue: '#1a1a2e', // Fondo oscuro principal para tema oscuro
        secondaryDarkBlue: '#2c2c4d', // Fondo de secciones secundarias en tema oscuro
        backgroundDark: '#121212', // Fondo general más oscuro
        textDark: '#e0e0e0', // Texto claro para tema oscuro
        borderDark: '#444444', // Borde oscuro en tema oscuro
        
        gradientStartDark: '#1a1a2e', // Inicio del gradiente en tema oscuro
        gradientEndDark: '#388E3C',   // Fin del gradiente en tema oscuro

        // Mapeo de los colores a tus variables CSS para consistencia (importante)
        'var-primary-blue': 'var(--color-primary-blue)',
        'var-secondary-green': 'var(--color-secondary-green)',
        'var-background-light': 'var(--color-background-light)',
        'var-text-light': 'var(--color-text-light)',
        'var-border-light': 'var(--color-border-light)',
        'var-gradient-start-light': 'var(--color-gradient-start-light)',
        'var-gradient-end-light': 'var(--color-gradient-end-light)',
        'var-heading-color-light': 'var(--color-heading-color-light)',
        'var-card-background-light': 'var(--color-card-background-light)',
        'var-courses-section-bg-light': 'var(--color-courses-section-bg-light)',

        'var-primary-dark-blue': 'var(--color-primary-dark-blue)',
        'var-secondary-dark-blue': 'var(--color-secondary-dark-blue)',
        'var-background-dark': 'var(--color-background-dark)',
        'var-text-dark': 'var(--color-text-dark)',
        'var-border-dark': 'var(--color-border-dark)',
        'var-gradient-start-dark': 'var(--color-gradient-start-dark)',
        'var-gradient-end-dark': 'var(--color-gradient-end-dark)',
        'var-heading-color-dark': 'var(--color-heading-color-dark)',
        'var-card-background-dark': 'var(--color-card-background-dark)',
        'var-courses-section-bg-dark': 'var(--color-courses-section-bg-dark)',
      },
      height: {
        'screen-minus-header': 'calc(100vh - 45px)', // Altura del header ajustada a 45px
      }
    },
  },
  plugins: [],
};

export default config;