import React from 'react';
import Link from 'next/link'; // Use Next.js Link for internal navigation
import { style } from 'framer-motion/client';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  fullHeight?: boolean; // New prop to control full height behavior
}

const HeroSection: React.FC<React.PropsWithChildren<HeroSectionProps>> = ({ title, description, ctaText, ctaLink, fullHeight = false, children }) => {
  let sectionClasses = `
    bg-gradient-to-r from-gradient-start-platzi to-gradient-end-platzi
    text-white text-center
    flex flex-col justify-center items-center /* These ensure content is centered vertically */
    relative overflow-hidden px-4
  `;

  if (fullHeight) {
    sectionClasses += ' min-h-screen py-24';
  } else {
    sectionClasses += ' min-h-[500px] py-24';
  }

  return (
    <section className={sectionClasses}>
      {/* The inner container should still center its content and take full height of the section */}
      {/* Ensure the inner container also takes full height of the section */}
      <div className="container flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl mx-auto animate-fade-in-up">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          {description}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-gradient-to-r from-accent-green-platzi to-accent-blue-platzi text-white px-8 py-4 rounded-lg no-underline font-semibold text-lg transition-all duration-300 shadow-lg hover:translate-y-[-4px] hover:shadow-xl animate-scale-in delay-200"
        >
          {ctaText}
        </Link>
        {children && (
          <div className="mt-10 animate-fade-in-up delay-300">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
