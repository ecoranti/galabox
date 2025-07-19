import React from 'react';
import Link from 'next/link'; // Use Link for internal navigation or external links

interface CourseCardProps {
  icon: string; // Could be an emoji, a FontAwesome class string, or a simple character
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  topics?: string; // Optional: for detailed course pages
  link: string; // The URL to enroll or learn more
  isFeatured?: boolean; // Optional prop to differentiate featured cards if needed
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon,
  title,
  description,
  duration,
  difficulty,
  topics,
  link,
  isFeatured = false, // Default to false
}) => {
  return (
    <div className="course-card bg-card-background-light rounded-lg p-6 shadow-md flex flex-col justify-between h-full border border-border-light transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
      <div className="icon text-4xl text-accent-green-platzi mb-4 text-center">
        {/* Render icon based on type */}
        {icon.startsWith('fa-') ? <i className={`fas ${icon}`}></i> : icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-heading-color text-center">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-text-light text-center flex-grow mb-4">
        {description}
      </p>
      <div className="course-details mt-auto flex flex-col items-center gap-2 w-full text-text-light text-sm">
        <p>
          <b>Duración:</b> {duration}
        </p>
        <p>
          <b>Dificultad:</b> {difficulty}
        </p>
        {topics && ( // Conditionally render topics if provided
          <p className="text-center text-xs mt-2">
            <b>Temario:</b> {topics}
          </p>
        )}
        <Link
          href={link}
          target="_blank" // Open external links in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="btn inline-block bg-accent-green-platzi text-white px-5 py-2 rounded-lg no-underline font-semibold text-sm transition-all duration-300 hover:bg-hover-platzi hover:translate-y-[-2px] hover:shadow-md mt-4"
        >
          {isFeatured ? 'Saber Más' : 'Inscribirme Ahora'}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;