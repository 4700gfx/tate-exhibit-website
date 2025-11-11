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
    <nav className="flex flex-row items-center justify-between mx-auto px-4 py-3 text-tate-platinum font-tate-primary">
      <ul className="flex flex-row gap-6">
        {navItems.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => scrollToSection(tab.sectionId)}
              className="text-tate-black text-md hover:text-tate-platinum transition-colors duration-200 cursor-pointer"
              aria-label={`Navigate to ${tab.name} section`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      <h1 className='text-5xl font-bold'>Tate</h1>

      <Button title="Learn More" variant='secondary' size='sm'/>
    </nav>
  );
};

export default Navbar;