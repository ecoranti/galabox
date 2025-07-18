// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CaminoTech - Tu Guía en el Mundo IT',
  description: 'Formación IT para latinos: Conquista el Mercado Global con Confianza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      {/* El ThemeProvider envolverá el body y manejará la clase 'dark' */}
      <ThemeProvider>
        {/* Las clases de color base para el body ahora se manejan en globals.css */}
        <body className="relative min-h-screen">
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8BDKCJJ"
          height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}

          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}