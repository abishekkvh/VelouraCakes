'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddToCartButton from './AddToCartButton';

const bowlBrownies = [
  { name: 'Kinder Bowl Brownie', price: 150, image: '/images/earl_grey_mango.png' },
  { name: 'KitKat Bowl Brownie', price: 150, image: '/images/fudge_brownie.png' },
  { name: 'Triple Chocolate Bowl Brownie', price: 150, image: '/images/double_choc_brownie.png' },
  { name: 'Nutella Bowl Brownie', price: 150, image: '/images/matilda_cake.png' },
  { name: 'Pista Bowl Brownie', price: 150, image: '/images/matcha_strawberry.png' },
  { name: 'Oreo Bowl Brownie', price: 150, image: '/images/cookies_cream.png' }
];

const cheesecakes = [
  { name: 'Mango Cheesecake', price: 150, image: '/images/earl_grey_mango.png' },
  { name: 'Blueberry Cheesecake', price: 150, image: '/images/blueberry_garden.png' },
  { name: 'Biscoff Cheesecake', price: 180, image: '/images/lotus_biscoff_cake.png' },
  { name: 'Oreo Cheesecake', price: 180, image: '/images/cookies_cream.png' },
  { name: 'Tiramisu Cheesecake', price: 180, image: '/images/matilda_cake.png' }
];

export default function Specials() {
  const [activeTab, setActiveTab] = useState<'brownies' | 'cheesecakes'>('brownies');

  return (
    <section id="specials" className="section-padding bg-gradient-to-b from-cream-dark to-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm/5 rounded-full blur-3xl" />
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
          <span className="badge-accent mb-4 inline-block">Limited Offers</span>
          <h2 className="section-title">
            Special <span className="text-royal">Favorites Menu</span>
          </h2>
          <p className="section-subtitle">
            Indulge in our crowd-pleasers at special pricing. Handcrafted sweetness, made affordable.
          </p>
        </motion.div>

        {/* Tabs switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-100">
            <button
              onClick={() => setActiveTab('brownies')}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === 'brownies'
                  ? 'bg-royal text-white shadow-md'
                  : 'text-charcoal hover:text-royal'
              }`}
            >
              Bowl Brownies (₹150 Flat)
            </button>
            <button
              onClick={() => setActiveTab('cheesecakes')}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === 'cheesecakes'
                  ? 'bg-royal text-white shadow-md'
                  : 'text-charcoal hover:text-royal'
              }`}
            >
              Artisanal Cheesecakes
            </button>
          </div>
        </motion.div>

        {/* Content Items */}
        <motion.div
          layout
          className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence mode="popLayout">
            {(activeTab === 'brownies' ? bowlBrownies : cheesecakes).map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="premium-card flex flex-col justify-between group w-[140px] sm:w-auto shrink-0 snap-start overflow-hidden"
              >
              <div className="flex flex-col h-full">
                <div className="relative h-32 sm:h-48">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-warm text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2 sm:py-1 rounded">
                    Promo
                  </div>
                  {/* Floating Add To Cart Button - Mobile Only */}
                  <div className="absolute -bottom-3 right-1 sm:hidden z-10">
                    <AddToCartButton
                      name={item.name}
                      price={item.price}
                      variant="Special"
                      image={item.image}
                      compact={true}
                    />
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex flex-col grow">
                  <h4 className="font-playfair text-sm sm:text-xl font-bold text-charcoal sm:mb-2 group-hover:text-royal transition-colors line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="hidden sm:block text-charcoal/60 text-sm leading-relaxed line-clamp-2">
                    {activeTab === 'brownies' 
                      ? 'Indulgent fudge brownie bowl served with premium toppings.' 
                      : 'Creamy, rich cheesecake prepared using real fruit pulp and high-quality cheese.'}
                  </p>
                  <div className="mt-1 sm:mt-auto pt-1 sm:pt-4 sm:border-t sm:border-gray-100/50 flex justify-between items-center">
                    <span className="text-sm sm:text-2xl font-bold text-royal">₹{item.price}</span>
                    <div className="hidden sm:block">
                      <AddToCartButton
                        name={item.name}
                        price={item.price}
                        variant="Special"
                        image={item.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
