import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Earrings = () => {
  const { state, dispatch } = useAppContext();

  const earrings = [
    {
      id: 1,
      name: 'AURORA EDGE EARRING',
      price: 599,
      originalPrice: 1200,
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      soldOut: true,
      category: 'earrings'
    },
    {
      id: 2,
      name: 'BOLD BLOOM EARRING',
      price: 599,
      originalPrice: 1100,
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'earrings'
    },
    {
      id: 3,
      name: 'CHERISH EARRING',
      price: 799,
      originalPrice: 1200,
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'earrings'
    },
    {
      id: 4,
      name: 'ECHO DROP EARRING',
      price: 999,
      originalPrice: 1200,
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'earrings'
    },
    {
      id: 5,
      name: 'FOXY HEART EARRING',
      price: 649,
      originalPrice: 1200,
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'earrings'
    },
    {
      id: 6,
      name: 'DUO LOVE EARRING',
      price: 999,
      originalPrice: 1200,
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'earrings'
    }
  ];

  const toggleWishlist = (product: any) => {
    const isInWishlist = state.wishlist.find(item => item.id === product.id);
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EARRINGS</h1>
          <p className="text-gray-600">
            Discover our stunning collection of earrings, from elegant studs to statement drops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {earrings.map((product) => {
            const isInWishlist = state.wishlist.find(item => item.id === product.id);
            
            return (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                  {product.sale && (
                    <div className="absolute top-4 left-4 bg-brand text-dark-chocolate px-3 py-1 text-sm font-medium rounded z-10">
                      Sale
                    </div>
                  )}
                  {product.soldOut && (
                    <div className="absolute top-4 right-12 bg-red-500 text-dark-chocolate px-3 py-1 text-sm font-medium rounded z-10">
                      Sold Out
                    </div>
                  )}
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow z-10"
                  >
                    <Heart className={`h-4 w-4 transition-colors ${
                      isInWishlist ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'
                    }`} />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.soldOut && (
                    <button
                      onClick={() => addToCart(product)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-brand text-dark-chocolate px-4 py-2 rounded-lg font-medium hover:bg-brand-hover transition-colors opacity-0 group-hover:opacity-100 flex items-center space-x-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      Rs. {product.price.toLocaleString()}.00
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        Rs. {product.originalPrice.toLocaleString()}.00
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Earrings;