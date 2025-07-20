import HeroSection from '@/components/HeroSection'; // Import the HeroSection component
import { FaTelegramPlane } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-[#1f4037] via-[#2c7744] to-[#39a845]"> {/* Esto asegura un layout flexible sin altura mínima */}
      <HeroSection
        title="Formación IT: Conquista el Mercado Global con Confianza"
        description="Deja atrás la incertidumbre. Te equipamos con las habilidades técnicas, la visión estratégica y el acompañamiento que las empresas tech exigen hoy. ¡Tu futuro en IT empieza aquí! 🚀"
        ctaText="Explora Nuestros Cursos"
        ctaLink="/cursos-destacados"
      >
        <div className="mt-10 text-center text-white">
          <p className="text-xl font-semibold mb-2">¿Te gustaría sumarte a nuestra comunidad?</p>
          <a
            href="https://t.me/JovenesIT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white rounded-full text-lg hover:bg-white hover:text-green-700 transition-colors duration-300"
          >
            <FaTelegramPlane className="text-xl" />
            Únete a nuestro canal de Telegram
          </a>
        </div>
      </HeroSection>
    </main>
  );
}