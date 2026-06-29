import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, Grid3X3, LayoutGrid, ChevronDown, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);
  const [gridView, setGridView] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            Our Products
          </h1>
          <p className="text-amber-100">
            Discover authentic traditional products for healthy living
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 sticky top-24">
              <h3 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-stone-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-amber-100 text-amber-700 font-medium'
                        : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                        selectedCategory === category.id
                          ? 'bg-amber-100 text-amber-700 font-medium'
                          : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span>{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-stone-700 mb-3">Price Range</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Under ₹500', range: [0, 500] as [number, number] },
                    { label: '₹500 - ₹1000', range: [500, 1000] as [number, number] },
                    { label: '₹1000 - ₹2000', range: [1000, 2000] as [number, number] },
                    { label: 'Above ₹2000', range: [2000, 5000] as [number, number] }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                          ? 'bg-amber-100 text-amber-700 font-medium'
                          : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="text-sm font-medium text-stone-700 mb-3">Rating</h4>
                <div className="space-y-2">
                  {['4 & above', '3 & above'].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 text-sm text-stone-600">
                      <input type="checkbox" className="rounded border-stone-300 text-amber-600 focus:ring-amber-500" />
                      {rating}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-100 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-50"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-sm text-stone-600">
                  {filteredProducts.length} products found
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>

                {/* Grid View Toggle */}
                <div className="hidden sm:flex items-center gap-1 bg-stone-100 rounded-lg p-1">
                  <button
                    onClick={() => setGridView('grid')}
                    className={`p-2 rounded-md ${gridView === 'grid' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <Grid3X3 className="w-4 h-4 text-stone-600" />
                  </button>
                  <button
                    onClick={() => setGridView('list')}
                    className={`p-2 rounded-md ${gridView === 'list' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <LayoutGrid className="w-4 h-4 text-stone-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || priceRange[0] !== 0) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-stone-600">Active filters:</span>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
                  >
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <X className="w-3 h-3" />
                  </button>
                )}
                {priceRange[0] !== 0 && (
                  <button
                    onClick={() => setPriceRange([0, 5000])}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
                  >
                    ₹{priceRange[0]} - ₹{priceRange[1]}
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}

            {/* Products Grid */}
            <div className={
              gridView === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'grid grid-cols-1 gap-4'
            }>
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-stone-600">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    setPriceRange([0, 5000]);
                  }}
                  className="mt-4 text-amber-700 hover:text-amber-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setShowFilters(false)}
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            className="absolute left-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-stone-800">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-stone-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Same filter content as desktop */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-stone-700 mb-3">Categories</h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-amber-100 text-amber-700 font-medium'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-amber-100 text-amber-700 font-medium'
                        : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
