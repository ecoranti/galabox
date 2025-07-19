import HeroSection from '@/components/HeroSection'; // Import the HeroSection component

export default function Home() {
  return (
    <main className="flex flex-col bg-red-200"> {/* Esto asegura un layout flexible sin altura mínima */}
      <HeroSection
        title="Formación IT: Conquista el Mercado Global con Confianza"
        description="Deja atrás la incertidumbre. Te equipamos con las habilidades técnicas, la visión estratégica y el acompañamiento que las empresas tech más exigen hoy. ¡Tu futuro en IT empieza aquí! 🚀"
        ctaText="Explora Nuestros Cursos"
        ctaLink="/cursos-destacados" // Link to the featured courses page
      />
      {/* Other sections for the home page will go here later */}
    </main>
  );
}