import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import finFirstLogo from "../assets/finFirstLogo.png";
import { investmentAreas, scrollToService } from "../data/homeContent";

export function Navbar({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'About', href: '#about', page: 'about' },
    { name: 'Portfolio', href: '#portfolio', page: 'portfolio' },
    { name: 'Service Partners', href: '#service-partners', page: 'service-partners' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: { name: string; href: string; page?: string }) => {
    if (link.page && onNavigate) {
      e.preventDefault();
      onNavigate(link.page);
      setIsOpen(false);
      setServicesOpen(false);
    } else if (link.href.startsWith('#') && onNavigate) {
      onNavigate('home');
      setIsOpen(false);
    }
  };

  const handleServiceClick = (index: number) => {
    scrollToService(index, onNavigate);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Our Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 rounded-2xl border border-gray-100 bg-white py-2 shadow-xl">
                {investmentAreas.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceClick(index)}
                    className="block w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>

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

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              className="flex w-full items-center justify-between text-lg font-medium text-gray-900"
              aria-expanded={mobileServicesOpen}
            >
              Our Services
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="mt-3 ml-2 flex flex-col space-y-2 border-l-2 border-gray-100 pl-4">
                {investmentAreas.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceClick(index)}
                    className="text-left text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>

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
