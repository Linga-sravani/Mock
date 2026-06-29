import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Share2, Check, Truck, Shield, RotateCcw, ChevronRight, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'benefits' | 'care'>('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-amber-700 hover:text-amber-800">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-stone-500 hover:text-amber-700">Home</Link>
            <ChevronRight className="w-4 h-4 text-stone-400" />
            <Link to="/products" className="text-stone-500 hover:text-amber-700">Products</Link>
            <ChevronRight className="w-4 h-4 text-stone-400" />
            <span className="text-stone-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.badge && (
                <span className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full">
                  {product.badge}
                </span>
              )}
              {discount > 0 && (
                <span className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full">
                  {discount}% OFF
                </span>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-800 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-stone-200 text-stone-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-stone-600">{product.rating}</span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600">{product.reviews} Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-stone-800">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-stone-400 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
              {discount > 0 && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-medium rounded">
                  Save ₹{(product.originalPrice! - product.price).toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-stone-600 mb-6">{product.description}</p>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-semibold text-stone-800 mb-3">Key Benefits:</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-3 bg-stone-100 rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <Minus className="w-5 h-5 text-stone-600" />
                </button>
                <span className="w-12 text-center font-semibold text-stone-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <Plus className="w-5 h-5 text-stone-600" />
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                  }
                }}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </motion.button>

              <button className="p-4 border-2 border-stone-200 rounded-xl hover:border-amber-500 hover:text-amber-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              <button className="p-4 border-2 border-stone-200 rounded-xl hover:border-amber-500 hover:text-amber-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-stone-100 rounded-xl">
              <div className="text-center">
                <Truck className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-stone-600">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-stone-600">100% Authentic</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-stone-600">Easy Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-4 border-b border-stone-200">
            {['description', 'benefits', 'care'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-amber-700'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-600">{product.description}</p>
                <p className="text-stone-600 mt-4">
                  This product is crafted using traditional methods that have been passed down through generations. Each piece is made with care and attention to detail, ensuring you receive a product that not only serves its purpose but also connects you to our rich heritage.
                </p>
              </div>
            )}
            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-stone-800">{benefit}</h4>
                      <p className="text-sm text-stone-600 mt-1">
                        Traditional products offer natural benefits without any chemicals or artificial additives.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'care' && (
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-xl">
                  <h4 className="font-medium text-stone-800 mb-2">No Soap Needed!</h4>
                  <p className="text-stone-600">
                    Traditional copper, brass, and steel products are naturally antimicrobial. Simply rinse with water and dry. For stubborn residue, use a mixture of lemon and salt or traditional wood ash.
                  </p>
                </div>
                <div className="p-4 bg-stone-100 rounded-xl">
                  <h4 className="font-medium text-stone-800 mb-2">Natural Cleaning Tips</h4>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Use lemon and salt for natural shine</li>
                    <li>Wood ash works great for tough stains</li>
                    <li>Avoid harsh chemical cleaners</li>
                    <li>Dry thoroughly after washing</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
