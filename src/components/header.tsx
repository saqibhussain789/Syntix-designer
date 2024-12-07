import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "FEATURES",
    "COURSES",
    "TEACHERS",
    "PRICING",
    "TESTIMONIAL",
    "BLOG",
    "CONTACT",
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-black bg-opacity-70">
      <nav className="max-w-9xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">SyntixDesigner</div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8 font-semibold text-white justify-center">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-gray-800 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-black bg-opacity-90 text-white font-semibold space-y-4 p-4 text-center">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-gray-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
