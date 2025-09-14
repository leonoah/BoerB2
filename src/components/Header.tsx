import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-espresso">
              בוער <span className="text-rose">בי</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-espresso hover:text-rose transition-colors duration-300"
            >
              על התנועה
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-espresso hover:text-rose transition-colors duration-300"
            >
              המסלולים
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-espresso hover:text-rose transition-colors duration-300"
            >
              אירועים
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-espresso hover:text-rose transition-colors duration-300"
            >
              צור קשר
            </button>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-reverse space-x-4 mr-4">
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-reverse space-x-2 text-sageGrey hover:text-rose transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">וואטסאפ</span>
              </a>
              <a
                href="https://calendly.com/boerb-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm flex items-center space-x-reverse space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>שיחת התאמה</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-espresso hover:text-rose transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-0 left-0 bg-ivory/95 backdrop-blur-sm shadow-lg border-t border-champagne/20">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-right text-espresso hover:text-rose transition-colors duration-300"
              >
                על התנועה
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-right text-espresso hover:text-rose transition-colors duration-300"
              >
                המסלולים
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block w-full text-right text-espresso hover:text-rose transition-colors duration-300"
              >
                אירועים
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-right text-espresso hover:text-rose transition-colors duration-300"
              >
                צור קשר
              </button>
              
              <div className="pt-4 border-t border-champagne/20 space-y-3">
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center flex items-center justify-center space-x-reverse space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>וואטסאפ עכשיו</span>
                </a>
                <a
                  href="https://calendly.com/boerb-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center flex items-center justify-center space-x-reverse space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>שיחת התאמה (15 דק׳)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;