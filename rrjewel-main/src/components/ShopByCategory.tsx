import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  const categories = [
    {
      name: 'EARRINGS',
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/earrings',
      description: 'Delicate elegance for every moment'
    },
    {
      name: 'BRACELETS',
      image: 'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/bracelets',
      description: 'Wrist adornments of refined taste'
    },
    {
      name: 'NECKLACES',
      image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/necklaces',
      description: 'Statement pieces that define elegance'
    }
  ];

  return (
    <section className="py-24 border-t border-gold-primary/10 bg-deep-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="text-gold-primary text-sm tracking-widest font-light">
              CURATED COLLECTIONS
            </div>
          </div>
          <h2 className="luxury-serif text-5xl md:text-6xl text-wine-deep mb-6 leading-tight">
            Explore Our
            <br />
            <span className="text-gold-primary">Finest Collections</span>
          </h2>
          <p className="text-text-on-dark/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover exquisite jewelry pieces carefully curated for the modern luxury connoisseur
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Card container */}
              <div className="aspect-[4/5] relative bg-black/40 border border-gold-primary/20 rounded-2xl overflow-hidden">
                {/* Background image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-300" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border border-gold-primary/30 rounded transition-all duration-300 group-hover:border-gold-primary/60 group-hover:w-16 group-hover:h-16" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="luxury-serif text-4xl md:text-5xl text-text-on-dark tracking-widest mb-4 text-center transition-colors group-hover:text-gold-primary">
                    {category.name}
                  </h3>
                  <p className="text-text-on-dark/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                    {category.description}
                  </p>
                </div>

                {/* Soft glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 shadow-glow rounded-2xl pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;