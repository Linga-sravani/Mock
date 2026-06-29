import React from 'react';import { Link } from 'react-router-dom';import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            Join the Heritage Living Family
          </h3>
          <p className="text-amber-100 mb-6">
            Get exclusive offers, health tips, and new product updates
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">H</span>
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-white">Heritage Living</h4>
                <p className="text-xs text-stone-400">Traditional • Natural • Healthy</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm mb-4">
              Bringing back traditional, healthy living through authentic products that our ancestors used. No chemicals, no plastic, just nature.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-amber-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-amber-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-amber-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-amber-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Products</Link></li>
              <li><Link to="/categories" className="hover:text-amber-400 transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="text-white font-semibold mb-4">Categories</h5>
            <ul className="space-y-2">
              <li><Link to="/products?category=copper-brass" className="hover:text-amber-400 transition-colors">Copper & Brass</Link></li>
              <li><Link to="/products?category=earthen-clay" className="hover:text-amber-400 transition-colors">Earthen & Clay</Link></li>
              <li><Link to="/products?category=cast-iron" className="hover:text-amber-400 transition-colors">Cast Iron</Link></li>
              <li><Link to="/products?category=wooden-bamboo" className="hover:text-amber-400 transition-colors">Wooden & Bamboo</Link></li>
              <li><Link to="/products?category=natural-cleaning" className="hover:text-amber-400 transition-colors">Natural Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>123 Heritage Lane, Traditional Market, Mumbai 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>hello@heritageliving.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © 2024 Heritage Living. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
