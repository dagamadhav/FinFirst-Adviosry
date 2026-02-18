import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { FocusAreas } from './components/FocusAreas';
import { WhyUs } from './components/WhyUs';
import { Team } from './components/Team';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ServicePartnerPage } from './components/ServicePatner';
import { Toaster } from 'sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePortfolioSubmitPitch = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onBack={() => setCurrentPage('home')} />;
      case 'portfolio':
        return (
          <PortfolioPage
            onBack={() => setCurrentPage('home')}
            onContact={handlePortfolioSubmitPitch}
          />
        );
      case 'service-partners':
        return (
          <ServicePartnerPage
            onBack={() => setCurrentPage('home')}
            onContact={handlePortfolioSubmitPitch}
          />
        );
      default:
        return (
          <>
            <Hero />
            <Stats />
            <FocusAreas onNavigate={setCurrentPage} />
            <WhyUs />
            <Team onNavigate={setCurrentPage} />
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      <Toaster position="top-center" expand={false} richColors />
      <Navbar onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
