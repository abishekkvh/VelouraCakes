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
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                className="premium-card flex flex-col justify-between group w-[140px] sm:w-auto shrink-0 snap-start overflow-hidden"
              >
              <div className="flex flex-col h-full">
                <div className="relative h-32 sm:h-52">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={cookie.image}
                      alt={cookie.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-warm text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2 sm:py-1 rounded">
                    Freshly Baked
                  </div>
                  {/* Floating Add To Cart Button - Mobile Only */}
                  <div className="absolute -bottom-3 right-1 sm:hidden z-10">
                    <AddToCartButton
                      name={cookie.name}
                      price={price}
                      variant={sizeLabel}
                      image={cookie.image}
                      compact={true}
                    />
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex flex-col grow">
                  <h4 className="font-playfair text-sm sm:text-xl font-bold text-charcoal sm:mb-2 group-hover:text-royal transition-colors line-clamp-2">
                    {cookie.name} <span className="hidden sm:inline">({sizeLabel})</span>
                  </h4>
                  <p className="hidden sm:block text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {cookie.description}
                  </p>
                  <div className="mt-1 sm:mt-auto pt-1 sm:pt-4 sm:border-t sm:border-gray-100/50 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-2xl font-bold text-royal">₹{price}</span>
                      <span className="text-charcoal/40 text-[9px] sm:text-[10px]">{sizeLabel} Size</span>
                    </div>
                    <div className="hidden sm:block">
                      <AddToCartButton
                        name={cookie.name}
                        price={price}
                        variant={sizeLabel}
                        image={cookie.image}
                      />
                    </div>
                  </div>
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
