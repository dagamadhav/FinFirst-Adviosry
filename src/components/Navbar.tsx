import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import finFirstLogo from "../assets/finFirstLogo.png";


export function Navbar({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', page: 'about' },
    { name: 'Portfolio', href: '#portfolio', page: 'portfolio' },
    { name: 'Service Partners', href: '#service-partners', page: 'service-partners' },
    { name: 'Team', href: '#team' },
    // { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    if (link.page && onNavigate) {
      e.preventDefault();
      onNavigate(link.page);
      setIsOpen(false);
    } else if (link.href.startsWith('#') && onNavigate) {
      // If we are on a different page, go home first
      onNavigate('home');
      setIsOpen(false);
      // Let the default anchor behavior (or a timeout) handle the scroll
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/100 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => {
              onNavigate?.('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={finFirstLogo}
              alt="FinFirst Advisors"
              className="h-16 mb-2"
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all"
          >
            Send Pitch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-lg font-medium text-gray-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('home');
              setIsOpen(false);
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="w-full py-3 bg-gray-900 text-white text-center font-semibold rounded-xl"
          >
            Send Pitch
          </a>
        </div>
      )}
    </nav>
  );
}