'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void; // Optional click handler for mobile menu closing
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const pathname = usePathname(); // Get the current path

  // Determine if the link is active. For root, check if pathname is exactly '/'.
  // For other paths, check if pathname starts with the href.
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        text-white no-underline font-semibold text-base transition-colors duration-300
        hover:text-accent-green-platzi
        ${isActive ? 'text-accent-green-platzi' : ''}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
