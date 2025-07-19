'use client';

'use client';

import { Sun, Moon } from 'lucide-react';
import React from 'react';
import { useTheme } from './ThemeProvider'; // Import the useTheme hook

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Use the theme and toggleTheme from context

  return (
    <button
      onClick={toggleTheme}
      className="bg-none border border-white border-opacity-40 text-white p-2 rounded-md cursor-pointer text-lg transition-all duration-300 flex items-center justify-center hover:bg-white hover:bg-opacity-20 hover:border-white hover:text-white"
      aria-label="Cambiar tema"
    >
      {/* Conditionally render sun or moon icon based on current theme */}
      {theme === 'light' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
