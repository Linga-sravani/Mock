import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';import { ChevronRight } from 'lucide-react';
import { categories, products } from '../data/products';

export function Categories() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            Product Categories
          </h1>
          <p className="text-amber-100">
            Explore our range of traditional, healthy living products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const categoryProducts = products.filter(p => p.category === category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-3xl mb-2 block">{category.icon}</span>
                        <h3 className="text-xl font-serif font-bold text-white">{category.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-stone-600 mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-stone-500">
                          {categoryProducts.length} products
                        </span>
                        <span className="flex items-center gap-1 text-amber-700 font-medium group-hover:gap-2 transition-all">
                          Shop Now <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
