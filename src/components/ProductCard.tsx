import React from 'react';import { motion } from 'framer-motion';import { ShoppingCart, Heart, Star, Check } from 'lucide-react';import { Product } from '../types';import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-square bg-stone-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-medium rounded-full">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-amber-50 transition-colors">
            <Heart className="w-4 h-4 text-stone-600" />
          </button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="px-4 py-2 bg-white rounded-full text-stone-800 font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-stone-200 text-stone-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-stone-500">({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-stone-800 group-hover:text-amber-700 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Benefits Preview */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.benefits.slice(0, 2).map((benefit, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full"
            >
              <Check className="w-3 h-3" />
              {benefit}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-stone-800">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-stone-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          disabled={!product.inStock}
          className="w-full mt-3 py-2.5 px-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
