import React from 'react';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-2 rounded-full">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-sm">P</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">La Padellina</h3>
                <p className="text-gray-400 text-sm">Trattoria Italienne Authentique</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Une trattoria familiale au cœur de Paris où tradition et passion se retrouvent 
              dans l'assiette. Découvrez l'authentique cuisine italienne dans une ambiance 
              chaleureuse et conviviale.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Notre Histoire
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('carte')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Carte
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Réservation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">42 Rue de la Convention</p>
                  <p className="text-gray-300">75015 Paris</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href="tel:0145789012" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  01 45 78 90 12
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@lapadellina.fr" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  contact@lapadellina.fr
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-sm">Horaires</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mar - Ven : 19h00 - 22h30</p>
                <p>Sam - Dim : 19h00 - 23h00</p>
                <p className="text-red-400">Fermé le lundi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2024 La Padellina. Tous droits réservés.</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>Fait avec amour à Paris</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Mentions Légales
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;