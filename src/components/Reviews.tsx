import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Marie L.',
    rating: 5,
    comment:
      "Un vrai goût d'Italie au coeur de Paris ! Les pâtes sont incroyables et l'accueil chaleureux."
  },
  {
    name: 'Lucas P.',
    rating: 5,
    comment:
      'Pizza délicieuse et ambiance conviviale, je recommande vivement cette trattoria.'
  },
  {
    name: 'Sophie D.',
    rating: 4,
    comment:
      "Desserts maison excellents, service attentionné. On reviendra bientôt !"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Avis Google
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que nos premiers clients pensent de La Padellina
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 font-semibold text-gray-700">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill={i < review.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
