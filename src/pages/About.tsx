import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Award, Users, Target, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="relative py-24 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-amber-100 max-w-3xl mx-auto"
          >
            Reviving the wisdom of our ancestors for a healthier, sustainable future
          </motion.p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                Why Natura?
              </h2>
              <p className="text-stone-600 mb-4">
                In a world dominated by plastic and chemicals, we're bringing back the wisdom of our grandparents. Our ancestors lived healthier lives using simple, natural products that stood the test of time.
              </p>
              <p className="text-stone-600 mb-4">
                Copper bottles that purify water naturally. Cast iron cookware that adds iron to your food. Clay pots that cool water without electricity. These aren't just products – they're a return to a healthier way of life.
              </p>
              <p className="text-stone-600">
                At Natura, we curate authentic, handcrafted products that honor traditional craftsmanship while meeting modern quality standards. Every product tells a story of skilled artisans and time-tested wisdom.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/hero-kitchen.jpg"
                alt="Traditional Kitchen"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-amber-100">Happy Families</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Our Values</h2>
            <p className="text-stone-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainability',
                description: 'Zero plastic, zero waste. Our products last generations, reducing environmental impact significantly.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Health First',
                description: 'Every product is chosen for its health benefits. No chemicals, no toxins – just nature\'s goodness.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Authenticity',
                description: 'We work directly with artisans to bring you genuine, handcrafted products with traditional methods.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No Soap Philosophy */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-4">The "No Soap" Revolution</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              One of our core philosophies is reducing chemical dependency in cleaning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Copper & Brass',
                fact: 'Naturally antimicrobial – just rinse with water'
              },
              {
                title: 'Cast Iron',
                fact: 'Seasoned surface repels food – wipe clean with cloth'
              },
              {
                title: 'Steel Utensils',
                fact: 'Hot water rinse is enough for daily cleaning'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-800/50 p-6 rounded-2xl border border-green-700"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-green-200">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Our Team</h2>
            <p className="text-stone-600">Passionate about bringing tradition back</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Ananya Sharma', role: 'Founder & CEO', initial: 'A' },
              { name: 'Rajiv Patel', role: 'Head of Sourcing', initial: 'R' },
              { name: 'Priya Menon', role: 'Artisan Relations', initial: 'P' },
              { name: 'Vikram Singh', role: 'Quality Control', initial: 'V' }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{member.initial}</span>
                </div>
                <h3 className="font-semibold text-stone-800">{member.name}</h3>
                <p className="text-stone-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '10,000+', label: 'Happy Customers' },
              { value: '500+', label: 'Products' },
              { value: '50+', label: 'Artisan Partners' },
              { value: '4.8★', label: 'Average Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-amber-200 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
