"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/Project', label: 'Project' },
    { href: '/contact', label: 'Contact' }
  ];
  return (
    <nav className="bg-[#171717] shadow-lg">
      <div className="max-w-1xl mx-auto px-10 ">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center ">
              <span className="text-1xl font-bold text-white">G<span className='text-[#FFA300] text-1xl'>.</span>M<span className='text-[#FFA300] text-1xl'>.</span>C</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="max-md:hidden flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-1xl text-white duration-300 hover:text-[#FFA300] px-3 py-2 rounded-md font-bold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#FFA300] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white hover:text-[#FFA300] px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
