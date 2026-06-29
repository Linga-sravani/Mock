import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function CartSidebar() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalItems
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-stone-50 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-700" />
                <h2 className="text-lg font-serif font-bold text-stone-800">Your Cart</h2>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-sm rounded-full">
                  {totalItems} items
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-stone-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-12 h-12 text-stone-300" />
                  </div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Your cart is empty</h3>
                  <p className="text-stone-500 mb-4">Add some traditional products to get started!</p>
                  <Link
                    to="/products"
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 bg-white rounded-xl p-3 shadow-sm border border-stone-100"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-stone-800 text-sm line-clamp-2">
                          {item.product.name}
                        </h4>
                        <p className="text-amber-700 font-bold mt-1">
                          ₹{item.product.price.toLocaleString()}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-stone-100 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-stone-200 rounded-lg transition-colors"
                            >
                              <Minus className="w-4 h-4 text-stone-600" />
                            </button>
                            <span className="w-8 text-center font-medium text-stone-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-stone-200 rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4 text-stone-600" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-200 p-4 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="text-xl font-bold text-stone-800">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-green-600 mb-4 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Free delivery on orders above ₹999
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center mt-3 text-amber-700 hover:text-amber-800 text-sm font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
