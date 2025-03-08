"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur md:hidden overflow-hidden">
        <button
          onClick={toggleMenu}
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
        >
          Menu
        </button>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur md:hidden fixed top-16 w-full z-10 overflow-hidden">
          <a href="#home" className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
            Home
          </a>
          <a href="#about" className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
            About
          </a>
          <a href="#projects" className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
            Projects
          </a>
          <a href="#experience" className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
            Experience
          </a>
          <a href="#experience" className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
            Contact
          </a>
        </div>
      )}
      <nav className="hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur overflow-hidden">
        <a href="#home" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
          Home
        </a>
        <a href="#about" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
          About
        </a>
        <a href="#projects" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
          Projects
        </a>
        <a href="#experience" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
          Experience
        </a>
        <a href="#experience" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
