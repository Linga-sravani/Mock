import React from 'react';import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';import { ArrowRight, Shield, Truck, Leaf, Award, Star, Check, ChevronRight } from 'lucide-react';import { ProductCard } from '../components/ProductCard';import { products, categories, testimonials } from '../data/products';

export function Home() {
  const featuredProducts = products.filter(p => p.badge).slice(0, 4);
  const bestSellers = products.filter(p => p.rating >= 4.8).slice(0, 8);

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-kitchen.jpg"
            alt="Traditional Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/30"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300 text-sm mb-6"
            >
              <Leaf className="w-4 h-4" />
              100% Natural & Traditional Products
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            >
              Embrace the Wisdom of{' '}
              <span className="text-amber-400">Traditional Living</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-stone-300 mb-8"
            >
              Discover authentic copper, brass, clay, and cast iron products that our ancestors used for healthier living. No chemicals, no soap needed – just nature's way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-stone-300 text-sm">100% Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-amber-400" />
                <span className="text-stone-300 text-sm">Free Shipping 999+</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-stone-300 text-sm">Handcrafted Quality</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Traditional Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-4">
              Why Choose Traditional Products?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our ancestors knew the secret to healthy living. Rediscover their wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🫖',
                title: 'No Chemicals Needed',
                description: 'Copper and brass naturally kill bacteria. No soap or cleaning agents required.'
              },
              {
                icon: '🌿',
                title: 'Health Benefits',
                description: 'Traditional metals add essential minerals to water and food naturally.'
              },
              {
                icon: '♻️',
                title: 'Eco-Friendly',
                description: 'Sustainable materials that last generations. Zero plastic, zero waste.'
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Heirlooms',
                description: 'Quality products that can be passed down through generations.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-stone-50 to-white border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-2">
                Shop by Category
              </h2>
              <p className="text-stone-600">Find the perfect traditional products for your home</p>
            </div>
            <Link
              to="/categories"
              className="hidden sm:flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
            >
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="block group"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-2xl mb-1 block">{category.icon}</span>
                      <h3 className="text-white font-medium text-sm">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-2">
                Featured Products
              </h2>
              <p className="text-stone-600">Handpicked favorites from our collection</p>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
            >
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Switch to Traditional Living Today
              </h3>
              <p className="text-amber-100">
                Use code HERITAGE20 for 20% off your first order
              </p>
            </div>
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-50 transition-colors shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-2">
                Best Sellers
              </h2>
              <p className="text-stone-600">Most loved products by our customers</p>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
            >
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-stone-600">Join thousands of happy families living traditionally</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-100"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 text-sm">{testimonial.name}</p>
                    <p className="text-stone-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-xs text-amber-600 mt-3">Purchased: {testimonial.product}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              The Heritage Living Difference
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We're not just selling products – we're reviving a healthier way of life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'No Soap Needed',
                description: 'Our copper, brass, and steel products are naturally antimicrobial. Just rinse with water – no chemical soaps required!',
                icon: '💧'
              },
              {
                title: 'Health in Every Drop',
                description: 'Traditional metals like copper and iron add essential minerals to your water and food, promoting better health naturally.',
                icon: '❤️'
              },
              {
                title: 'Sustainable Forever',
                description: 'These products last generations. No plastic, no waste, no replacement needed. True sustainability.',
                icon: '🌍'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-stone-800/50 border border-stone-700"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-stone-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
