import React, { useState } from 'react';import { Link, useLocation } from 'react-router-dom';import { motion, AnimatePresence } from 'framer-motion';import { ShoppingCart, Search, Menu, X, Leaf, User, Heart } from 'lucide-react';import { useCart } from '../context/CartContext';

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 text-amber-50 text-center py-2 text-sm">
        <span className="flex items-center justify-center gap-2">
          <Leaf className="w-4 h-4" />
          Free Shipping on orders above ₹999 | 100% Natural & Sustainable Products
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl font-bold">N</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-serif font-bold text-stone-800">Natura</h1>
              <p className="text-xs text-stone-500 -mt-1">Traditional • Natural • Healthy</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for copper bottles, clay pots, cast iron..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-stone-200 focus:border-amber-500 focus:outline-none bg-stone-100/50 text-stone-700 placeholder-stone-400 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="lg:hidden p-2 hover:bg-stone-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-stone-600" />
            </button>
            
            <button className="hidden sm:flex p-2 hover:bg-stone-100 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-stone-600" />
            </button>
            
            <button className="hidden sm:flex p-2 hover:bg-stone-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-stone-600" />
            </button>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-amber-100 rounded-full transition-colors group"
            >
              <ShoppingCart className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center font-medium"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors relative py-2 ${
                location.pathname === link.path
                  ? 'text-amber-700'
                  : 'text-stone-600 hover:text-amber-600'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                />
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-stone-50 border-t border-stone-200"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-amber-100 text-amber-700'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-stone-200">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
