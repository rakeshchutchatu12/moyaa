import React from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
}

const Wishlist: React.FC<WishlistProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useAppContext();

  const removeFromWishlist = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Wishlist</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          {state.wishlist.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Your wishlist is empty</p>
              <button
                onClick={onClose}
                className="mt-4 bg-brand text-dark-chocolate px-6 py-2 rounded-lg hover:bg-brand-hover transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {state.wishlist.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="relative mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Heart className="h-4 w-4 text-red-500 fill-current" />
                    </button>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-brand font-bold">
                      Rs. {item.price.toLocaleString()}.00
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        Rs. {item.originalPrice.toLocaleString()}.00
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-brand text-dark-chocolate py-2 px-4 rounded-lg font-medium hover:bg-brand-hover transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;