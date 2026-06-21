'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddToCartButton from './AddToCartButton';

// Brownies by weight
const weightBrownies = [
  { name: 'Fudge Brownie', prices: { 'quarter': 175, 'half': 350, 'one': 700 }, image: '/images/fudge_brownie.png', description: 'Dense, moist fudge brownie with a crackly top and gooey chocolate center.' },
  { name: 'Double Chocolate Brownie', prices: { 'quarter': 200, 'half': 400, 'one': 800 }, image: '/images/double_choc_brownie.png', description: 'Dark chocolate brownie loaded with rich chocolate chips.' },
  { name: 'Triple Chocolate Brownie', prices: { 'quarter': 250, 'half': 500, 'one': 1000 }, image: '/images/matilda_cake.png', description: 'Three chocolates — dark, milk, and white — in one decadent brownie.' },
  { name: 'Oreo Brownie', prices: { 'quarter': 250, 'half': 500, 'one': 1000 }, image: '/images/cookies_cream.png', description: 'Fudgy brownie loaded with crushed Oreo cookies throughout.' },
  { name: 'Creamy Cookie Brownie', prices: { 'quarter': 270, 'half': 520, 'one': 1000 }, image: '/images/cookie_tin.png', description: 'Cookie crumble-loaded brownie with a cream swirl.' },
  { name: 'Strawberry Brownie', prices: { 'quarter': 270, 'half': 520, 'one': 1000 }, image: '/images/classic_strawberry.png', description: 'Chocolate brownie topped with fresh strawberry compote.' },
  { name: 'Peanut Butter Brownie', prices: { 'quarter': 270, 'half': 520, 'one': 1000 }, image: '/images/banana_toffee.png', description: 'Swirled with creamy peanut butter throughout the fudge batter.' },
  { name: 'Nuts Brownie', prices: { 'quarter': 270, 'half': 520, 'one': 1000 }, image: '/images/brownie_walnut.png', description: 'Loaded with premium crunchy walnuts and almonds.' },
];

// Special/Box Brownies
const customBrownies = [
  { name: 'Bento Brownie', price: 400, description: 'Personal size custom decorated brownie cake.', image: '/images/fudge_brownie.png', badge: 'Specialty' },
  { name: 'Layer Brownie', price: 600, description: 'Multiple delicious brownie layers sandwiching rich chocolate fudge.', image: '/images/double_choc_brownie.png', badge: 'Best Seller' },
  { name: 'Nutella Brownie (Box)', prices: { 'half': 400, 'one': 780 }, description: 'Indulgent hazelnut spread topped brownie box.', image: '/images/matilda_cake.png', badge: 'Premium' },
  { name: 'Kinder Brownie (Box)', prices: { 'half': 450, 'one': 900 }, description: 'Topped with milk chocolate Kinder pieces.', image: '/images/earl_grey_mango.png', badge: 'Premium' },
  { name: 'Lotus Biscoff Brownie (Box)', prices: { 'half': 450, 'one': 900 }, description: 'Topped with creamy Lotus cookie butter.', image: '/images/lotus_biscoff_cake.png', badge: 'Premium' },
];

export default function Brownies() {
  const [activeWeight, setActiveWeight] = useState<'quarter' | 'half' | 'one'>('half');
  const [boxWeight, setBoxWeight] = useState<'half' | 'one'>('half');

  return (
    <section id="brownies" className="section-padding bg-gradient-to-br from-[#1A0A0A] via-[#2C1810] to-[#1A0A0A] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />
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
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-6 py-2 rounded-full mb-4">
            Chocolate Heaven
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Signature <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">Fudge Brownies</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Decadent, chewy, and loaded with premium chocolate. Pick your favorite flavors and sizes.
          </p>
        </motion.div>

        {/* --- Category 1: Brownies by Weight --- */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 border-b border-white/10 pb-6">
            <h3 className="font-playfair text-2xl font-bold text-white">Classic & Flavored Brownies</h3>
            
            {/* Weight Switcher */}
            <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1 shadow-lg">
              {(['quarter', 'half', 'one'] as const).map((w) => (
                <button
                  key={w}
                  onClick={() => setActiveWeight(w)}
                  className={`px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 ${
                    activeWeight === w
                      ? 'bg-amber-500 text-charcoal shadow-md'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {w === 'quarter' ? '1/4 KG' : w === 'half' ? '1/2 KG' : '1 KG'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weightBrownies.map((b, index) => {
              const currentPrice = b.prices[activeWeight];
              const variantName = activeWeight === 'quarter' ? '1/4 KG' : activeWeight === 'half' ? '1/2 KG' : '1 KG';
              return (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between group hover:bg-white/10 transition-colors"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={b.image}
                        alt={b.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors mb-2">{b.name}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-5 pb-5 pt-4 border-t border-white/10 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold text-amber-400">₹{currentPrice}</span>
                      <span className="text-white/40 text-[10px]">{variantName}</span>
                    </div>
                    <AddToCartButton
                      name={b.name}
                      price={currentPrice}
                      variant={variantName}
                      image={b.image}
                      className="bg-amber-500 hover:bg-amber-600 text-charcoal text-xs px-3 py-1.5"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- Category 2: Bento & Specialty Boxes --- */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 border-b border-white/10 pb-6">
            <h3 className="font-playfair text-2xl font-bold text-white">Bento & Specialty Boxes</h3>
            
            {/* Box Weight switcher */}
            <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1 shadow-lg">
              {(['half', 'one'] as const).map((w) => (
                <button
                  key={w}
                  onClick={() => setBoxWeight(w)}
                  className={`px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 ${
                    boxWeight === w
                      ? 'bg-amber-500 text-charcoal shadow-md'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {w === 'half' ? '1/2 KG Box' : '1 KG Box'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customBrownies.map((box, index) => {
              const hasWeightPrices = 'prices' in box;
              const price = hasWeightPrices && box.prices ? (box.prices as any)[boxWeight] : (box as any).price;
              const variantText = hasWeightPrices 
                ? (boxWeight === 'half' ? '1/2 KG Box' : '1 KG Box') 
                : 'Unit';

              return (
                <motion.div
                  key={box.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between group hover:bg-white/10 transition-colors"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={box.image}
                        alt={box.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs bg-amber-500/20 backdrop-blur-sm text-amber-400 font-semibold px-2 py-1 rounded">
                          {box.badge}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">Eggless Opt. Available</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">{box.name}</h4>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">{box.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-5 pb-5 pt-4 border-t border-white/10 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold text-amber-400">₹{price}</span>
                      <span className="text-white/40 text-[10px]">{variantText}</span>
                    </div>
                    <AddToCartButton
                      name={box.name}
                      price={price}
                      variant={variantText}
                      image={box.image}
                      className="bg-amber-500 hover:bg-amber-600 text-charcoal text-xs px-3 py-1.5"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
