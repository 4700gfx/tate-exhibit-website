import React from 'react';
import Button from '../common/Button';

const Navbar = () => {
  const navItems = [
    { key: 'home', name: 'Home', sectionId: 'home' },
    { key: 'aboutMe', name: 'About Me', sectionId: 'about-us' },
    { key: 'works', name: 'Works', sectionId: 'works' },
    { key: 'gallery', name: 'Gallery', sectionId: 'gallery' },
    { key: 'contactMe', name: 'Contact Me', sectionId: 'contact-me' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex flex-row items-center justify-between w-[85vw] mx-auto px-6 py-4 text-tate-platinum font-tate-primary">
      {/* Navigation Links */}
      <ul className="flex flex-row gap-8 items-center">
        {navItems.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => scrollToSection(tab.sectionId)}
              className="text-tate-platinum text-base hover:opacity-70 transition-opacity duration-300 cursor-pointer font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-tate-platinum after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              aria-label={`Navigate to ${tab.name} section`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Logo/Brand */}
      <h1 className="text-5xl font-bold absolute left-1/2 transform -translate-x-1/2">
        Tate.
      </h1>

      {/* CTA Button */}
      <div className="flex items-center">
        <Button title="Learn More" variant="secondary" size="sm" />
      </div>
    </nav>
  );
};

export default Navbar;