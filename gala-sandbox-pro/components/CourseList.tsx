import React from 'react';
import CourseCard from './CourseCard'; // Import the CourseCard component
import Link from 'next/link'; // <--- ADD THIS LINE

// Define the interface for a course object, matching CourseCardProps (excluding isFeatured)
interface Course {
  icon: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  topics?: string;
  link: string;
}

interface CourseListProps {
  courses: Course[]; // Array of course objects
  title: string; // Title for the section
  showAllCoursesLink?: boolean; // Optional prop to show "View All Courses" button
  featuredOnly?: boolean; // Optional prop to indicate if only featured courses are shown
}

const CourseList: React.FC<CourseListProps> = ({ courses, title, showAllCoursesLink = false, featuredOnly = false }) => {
  return (
    <section className={`py-20 text-center ${featuredOnly ? 'bg-courses-section-bg' : 'bg-background-light'} transition-colors duration-400`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-heading-color transition-colors duration-400">
          {title}
        </h2>
        <div className="course-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <CourseCard
              key={index} // Using index as key for now, ideally use a unique ID from course data
              icon={course.icon}
              title={course.title}
              description={course.description}
              duration={course.duration}
              difficulty={course.difficulty}
              topics={course.topics}
              link={course.link}
              isFeatured={featuredOnly} // Pass the featuredOnly prop to CourseCard
            />
          ))}
        </div>
        {showAllCoursesLink && (
          <Link
            href="/cursos"
            className="btn inline-block bg-gradient-to-r from-accent-green-platzi to-accent-blue-platzi text-white px-8 py-4 rounded-lg no-underline font-semibold text-lg transition-all duration-300 shadow-lg hover:translate-y-[-4px] hover:shadow-xl"
          >
            Ver Catálogo Completo de Cursos
          </Link>
        )}
      </div>
    </section>
  );
};

export default CourseList;
