import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Necklaces = () => {
  const { state, dispatch } = useAppContext();

  const necklaces = [
    {
      id: 1,
      name: 'CLASSIC SNAKE NECKLACE',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'necklaces'
    },
    {
      id: 2,
      name: 'ELEGANT CHAIN NECKLACE',
      price: 999,
      originalPrice: 1299,
      image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'necklaces'
    },
    {
      id: 3,
      name: 'PEARL DROP NECKLACE',
      price: 1499,
      originalPrice: 1899,
      image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'necklaces'
    },
    {
      id: 4,
      name: 'GOLDEN PENDANT NECKLACE',
      price: 1199,
      originalPrice: 1499,
      image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'necklaces'
    },
    {
      id: 5,
      name: 'VINTAGE CHARM NECKLACE',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'necklaces'
    },
    {
      id: 6,
      name: 'STATEMENT COLLAR NECKLACE',
      price: 1599,
      originalPrice: 1999,
      image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
      sale: true,
      category: 'necklaces'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">NECKLACES</h1>
          <p className="text-gray-600">
            Discover our beautiful collection of necklaces, from delicate chains to bold statement pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {necklaces.map((product) => {
            const isInWishlist = state.wishlist.find(item => item.id === product.id);
            
            return (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                  {product.sale && (
                    <div className="absolute top-4 left-4 bg-brand text-dark-chocolate px-3 py-1 text-sm font-medium rounded z-10">
                      Sale
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
                  <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-brand text-dark-chocolate px-4 py-2 rounded-lg font-medium hover:bg-brand-hover transition-colors opacity-0 group-hover:opacity-100 flex items-center space-x-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
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

export default Necklaces;