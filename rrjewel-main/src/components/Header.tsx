import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Cart from './Cart';
import Wishlist from './Wishlist';
import SearchModal from './SearchModal';

const Header = () => {
  const { state, dispatch } = useAppContext();
  const [isShopByOpen, setIsShopByOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUserClick = () => {
    if (state.user) {
      const shouldLogout = window.confirm('Do you want to sign out?');
      if (shouldLogout) {
        dispatch({ type: 'LOGOUT' });
      }
    } else {
      dispatch({ type: 'TOGGLE_SIGNIN', payload: true });
    }
  };

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'COLLECTIONS', path: '/products' },
    { label: 'CUSTOMIZATION', path: '/products' },
    { label: 'MATERIALS', path: '/products' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Premium announcement banner */}
      <div className="bg-gradient-to-r from-gold-primary/20 via-transparent to-gold-primary/20 text-text-primary text-center py-3 text-xs tracking-widest luxury-serif border-b border-gold-primary/20">
        ELEVATE YOUR LUXURY • FINEST CRAFTSMANSHIP • TIMELESS ELEGANCE
        <Link 
          to="/products"
          className="ml-3 text-gold-primary hover:text-gold-highlight transition-colors font-semibold"
        >
          Explore Collection →
        </Link>
      </div>

      {/* Floating luxury navigation */}
      <header className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrollY > 100 ? 'top-4' : 'top-8'
      }`}>
        <nav className="glass-card px-8 py-4 rounded-full shadow-glow border border-gold-primary/30 bg-dark-chocolate">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 pr-4 border-r border-gold-primary/20 hover:text-gold-primary transition-colors"
            >
              <div className="text-xl luxury-serif text-deep-teal tracking-widest">
                MYRA
              </div>
            </Link>

            {/* Navigation links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-text-muted text-xs luxury-serif tracking-widest hover:text-gold-primary transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Shop by dropdown for mobile */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setIsShopByOpen(!isShopByOpen)}
                className="flex items-center gap-1 text-text-muted text-xs luxury-serif tracking-widest hover:text-gold-primary transition-colors"
              >
                <span>SHOP</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              
              {isShopByOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 glass-card shadow-glow rounded-lg p-2 border border-gold-primary/20">
                  <Link
                    to="/earrings"
                    className="block px-4 py-3 text-xs text-text-primary hover:text-gold-primary hover:bg-gold-primary/10 rounded transition-colors"
                    onClick={() => setIsShopByOpen(false)}
                  >
                    Earrings
                  </Link>
                  <Link
                    to="/bracelets"
                    className="block px-4 py-3 text-xs text-text-primary hover:text-gold-primary hover:bg-gold-primary/10 rounded transition-colors"
                    onClick={() => setIsShopByOpen(false)}
                  >
                    Bracelets
                  </Link>
                  <Link
                    to="/necklaces"
                    className="block px-4 py-3 text-xs text-text-primary hover:text-gold-primary hover:bg-gold-primary/10 rounded transition-colors"
                    onClick={() => setIsShopByOpen(false)}
                  >
                    Necklaces
                  </Link>
                </div>
              )}
            </div>

            {/* User actions */}
            <div className="flex items-center gap-6 pl-4 border-l border-gold-primary/20">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-text-muted hover:text-gold-primary transition-colors hover-gold-glow"
                title="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              <button
                onClick={handleUserClick}
                className="text-text-muted hover:text-gold-primary transition-colors hover-gold-glow relative"
                title={state.user ? `Signed in as ${state.user.name}` : 'Sign in'}
              >
                <User className="h-4 w-4" />
                {state.user && (
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                )}
              </button>
              
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="text-text-muted hover:text-gold-primary transition-colors hover-gold-glow relative"
                title="Wishlist"
              >
                <Heart className="h-4 w-4" />
                {state.wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold-primary text-luxury-dark text-xs rounded-full h-4 w-4 flex items-center justify-center text-xs font-semibold">
                    {state.wishlist.length}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-text-muted hover:text-gold-primary transition-colors hover-gold-glow relative"
                title="Shopping Bag"
              >
                <ShoppingBag className="h-4 w-4" />
                {state.cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold-primary text-luxury-dark text-xs rounded-full h-4 w-4 flex items-center justify-center text-xs font-semibold">
                    {state.cart.length}
                  </span>
                )}
              </button>

              {state.user && state.user.email === 'admin@moraa.com' && (
                <Link
                  to="/admin"
                  className="text-gold-primary hover:text-gold-highlight font-semibold text-xs transition-colors"
                >
                  ADMIN
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Modals */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;