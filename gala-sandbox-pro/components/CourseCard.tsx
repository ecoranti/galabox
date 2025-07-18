// Diseño profesional base para tu página Next.js con Tailwind
// Archivos recomendados: app/page.tsx, components/CourseCard.tsx, components/AboutSection.tsx, components/Footer.tsx

// --- components/CourseCard.tsx ---
"use client";
import Image from "next/image";
import { FC } from "react";

interface CourseCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const CourseCard: FC<CourseCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <Image src={icon} alt={title} width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          className="mt-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Inscribirme
        </a>
      )}
    </div>
  );
};

export default CourseCard;