import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); // Example user role state

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/', role: 'all' },
    { name: 'About', path: '/about', role: 'all' },
    { name: 'Projects', path: '/projects', role: 'all' },
    { name: 'Contact Us', path: '/admin', role: 'all' },
    // Add more items as needed
  ];

  // Function to filter items based on user role
  const filteredNavItems = navItems.filter(item => item.role === 'all' || item.role === userRole);

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Render navigation items
  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        <Link to={item.path} className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">{item.name}</Link>
      </li>
    ));
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Text Branding */}
            <Link to="/" className="block" aria-label="Bioinformatics Munich Student Lab e.V.">
              <span className="text-xl font-bold text-purple-600">Bioinformatics Munich Student Lab e.V.</span>
            </Link>

          </div>


          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {renderNavItems(filteredNavItems)}
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              {/* Hamburger Icon SVG */}
            </button>

            {/* Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                {renderNavItems(filteredNavItems)}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
