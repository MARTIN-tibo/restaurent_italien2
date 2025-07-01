import React from 'react';
import { Heart, Users, ChefHat, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="histoire" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une trattoria familiale où tradition et passion se retrouvent dans l'assiette
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                L'authenticité avant tout
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nichée au cœur du 15e arrondissement de Paris, La Padellina vous invite à découvrir 
                l'Italie à travers une cuisine authentique, généreuse et faite maison. Notre chef, 
                originaire de Naples, perpétue les traditions culinaires transmises de génération en génération.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chaque plat raconte une histoire, chaque saveur évoque un souvenir. De nos pizzas 
                cuites au four à bois à nos pâtes fraîches préparées quotidiennement, nous mettons 
                un point d'honneur à respecter les recettes originales de nos ancêtres.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <Heart className="w-8 h-8 text-red-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Passion Familiale</h4>
                <p className="text-sm text-gray-600">Recettes transmises depuis 3 générations</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <ChefHat className="w-8 h-8 text-green-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Fait Maison</h4>
                <p className="text-sm text-gray-600">Pâtes fraîches et sauces préparées chaque jour</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <Users className="w-8 h-8 text-yellow-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Ambiance Conviviale</h4>
                <p className="text-sm text-gray-600">Un accueil chaleureux dans un cadre authentique</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <Award className="w-8 h-8 text-blue-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Produits d'Exception</h4>
                <p className="text-sm text-gray-600">Ingrédients sélectionnés directement d'Italie</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Intérieur du restaurant"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Préparation des desserts"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pâtes fraîches"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;