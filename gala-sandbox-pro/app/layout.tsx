import type { Metadata } from 'next';
import './globals.css'; // Import global styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { ThemeProvider } from '@/components/ThemeProvider'; // Import ThemeProvider
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer
import GoogleTagManager from '@/components/GoogleTagManager';

export const metadata: Metadata = {
  title: 'DestinoTech - Tu Guía en el Mundo IT',
  description: 'Formación IT para latinos: Conquista el Mercado Global con Confianza.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen transition-colors duration-400 bg-gradient-to-r from-gradient-start-platzi to-gradient-end-platzi">
        <GoogleTagManager />
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
