'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddToCartButton from './AddToCartButton';

const cookieFlavors = [
  { 
    name: 'Classic Tin', 
    prices: { small: 150, medium: 350, large: 550 },
    description: 'Golden chocolate chip cookies baked with soft centers and premium butter.',
    image: '/images/cookie_tin.png'
  },
  { 
    name: 'Double Chocolate Tin', 
    prices: { small: 180, medium: 380, large: 600 },
    description: 'Rich dark chocolate dough loaded with gourmet milk chocolate chips.',
    image: '/images/double_choc_brownie.png'
  },
  { 
    name: 'Triple Chocolate Tin', 
    prices: { small: 200, medium: 400, large: 600 },
    description: 'Ultimate chocolate experience with white, milk, and dark chocolate chunks.',
    image: '/images/fudge_brownie.png'
  },
  { 
    name: 'Red Velvet Tin', 
    prices: { small: 230, medium: 430, large: 650 },
    description: 'Vibrant red velvet cookies with premium white chocolate chips.',
    image: '/images/classic_strawberry.png'
  },
  { 
    name: 'Creamy Cookie Tin', 
    prices: { small: 230, medium: 430, large: 650 },
    description: 'Loaded with cookie crumbles and white chocolate chunks.',
    image: '/images/cookies_cream.png'
  },
  { 
    name: 'Biscoff Cookie Tin', 
    prices: { small: 230, medium: 430, large: 650 },
    description: 'Infused with Lotus Biscoff cookie butter spread and crumbs.',
    image: '/images/lotus_biscoff_cake.png'
  }
];

export default function CookieTins() {
  const [activeSize, setActiveSize] = useState<'small' | 'medium' | 'large'>('medium');

  return (
    <section id="cookie-tins" className="section-padding bg-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-80 h-80 bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-warm/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="badge-premium mb-4 inline-block">Sharing & Gifting</span>
          <h2 className="section-title">
            Artisanal <span className="text-royal">Cookie Tins</span>
          </h2>
          <p className="section-subtitle">
            Perfect for celebrations, gifts, or late-night cravings. Packaged in elegant reusable tins.
          </p>
        </motion.div>

        {/* Size Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-12"
        >
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-100">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeSize === size
                    ? 'bg-royal text-white shadow-md'
                    : 'text-charcoal hover:text-royal'
                }`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)} Tin
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cookieFlavors.map((cookie, index) => {
            const price = cookie.prices[activeSize];
            const sizeLabel = activeSize === 'small' ? 'Small' : activeSize === 'medium' ? 'Medium' : 'Large';
            return (
              <motion.div
                key={cookie.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="premium-card flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cookie.image}
                      alt={cookie.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-warm text-white text-[10px] font-bold px-2 py-1 rounded">
                      Freshly Baked
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-playfair text-xl font-bold text-charcoal mb-2 group-hover:text-royal transition-colors">
                      {cookie.name} ({sizeLabel})
                    </h4>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                      {cookie.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-100/50 mt-auto">
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-royal">₹{price}</span>
                      <span className="text-charcoal/40 text-[10px]">{sizeLabel} Size</span>
                    </div>
                    <AddToCartButton
                      name={cookie.name}
                      price={price}
                      variant={sizeLabel}
                      image={cookie.image}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
