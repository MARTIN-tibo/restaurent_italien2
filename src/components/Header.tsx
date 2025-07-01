import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-2 rounded-full">
              <div className="w-6 h-6 flex items-center justify-center font-bold text-sm">P</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">La Padellina</h1>
              <p className="text-xs text-gray-600 -mt-1">Trattoria Italienne</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('histoire')}
              className="text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
            >
              Notre Histoire
            </button>
            <button 
              onClick={() => scrollToSection('carte')}
              className="text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
            >
              Carte
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
            >
              Réservation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>15e arr., Paris</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>01 45 78 90 12</span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-red-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium py-2"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('histoire')}
                className="text-left text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium py-2"
              >
                Notre Histoire
              </button>
              <button 
                onClick={() => scrollToSection('carte')}
                className="text-left text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium py-2"
              >
                Carte
              </button>
              <button 
                onClick={() => scrollToSection('reservation')}
                className="text-left text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium py-2"
              >
                Réservation
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;