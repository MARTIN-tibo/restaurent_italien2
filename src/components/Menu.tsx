import React from 'react';
import { FileText, Star, Utensils } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      category: 'Antipasti',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        { name: 'Bruschetta della Casa', price: '8€', description: 'Tomates fraîches, basilic, huile d\'olive extra vierge' },
        { name: 'Antipasto Misto', price: '16€', description: 'Sélection de charcuteries et fromages italiens' },
        { name: 'Burrata di Puglia', price: '14€', description: 'Burrata crémeuse, roquette, tomates cerises' }
      ]
    },
    {
      category: 'Pizzas',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        { name: 'Margherita', price: '12€', description: 'Tomate, mozzarella, basilic frais' },
        { name: 'Diavola', price: '15€', description: 'Tomate, mozzarella, salami piquant' },
        { name: 'Quattro Stagioni', price: '17€', description: 'Artichauts, champignons, jambon, olives' }
      ]
    },
    {
      category: 'Pasta',
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        { name: 'Spaghetti Carbonara', price: '14€', description: 'Œufs, guanciale, pecorino romano, poivre noir' },
        { name: 'Penne all\'Arrabbiata', price: '12€', description: 'Tomates, ail, piment, persil' },
        { name: 'Risotto ai Porcini', price: '18€', description: 'Riz Carnaroli, champignons porcini, parmesan' }
      ]
    }
  ];

  return (
    <section id="carte" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Notre Carte
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos spécialités italiennes préparées avec amour et des ingrédients d'exception
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.category}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <span className="text-red-700 font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-700 to-red-800 text-white rounded-2xl p-12">
          <Utensils className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Envie de découvrir toute notre carte ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Consultez notre menu complet avec tous nos plats, vins et desserts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Télécharger la Carte (PDF)</span>
            </button>
            <button 
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Star className="w-5 h-5" />
              <span>Réserver Maintenant</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;