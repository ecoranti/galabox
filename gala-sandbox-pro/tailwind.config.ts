import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-light': 'var(--background-light)',
        'text-light': 'var(--text-light)',
        'card-background-light': 'var(--card-background-light)',
        'border-light': 'var(--border-light)',
        'primary-dark-blue': 'var(--primary-dark-blue)',
        'gradient-start-platzi': 'var(--gradient-start-platzi)',
        'gradient-end-platzi': 'var(--gradient-end-platzi)',
        'accent-green-platzi': 'var(--accent-green-platzi)',
        'accent-blue-platzi': 'var(--accent-blue-platzi)',
        'hover-platzi': 'var(--hover-platzi)',
        'footer-text-light': 'var(--footer-text-light)',
        'heading-color': 'var(--heading-color)',
        'courses-section-bg': 'var(--courses-section-bg)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
