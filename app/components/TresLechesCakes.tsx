'use client';

import { motion } from 'framer-motion';
import AddToCartButton from './AddToCartButton';

const cakes = [
  { name: 'Earl Grey Mango', price: 150, image: '/images/earl_grey_mango.png', description: 'Infused with earl grey tea and loaded with fresh sweet mangoes.' },
  { name: 'Cookies Cream', price: 160, image: '/images/cookies_cream.png', description: 'Rich cookies and cream crumbles soaked in delicious sweet milk.' },
  { name: 'Liche Rose', price: 160, image: '/images/lychee_rose.png', description: 'Subtle aromatic lychee and rose infusion, light and refreshing.' },
  { name: 'Matilda Cake', price: 170, image: '/images/matilda_cake.png', description: 'A decadent, super moist chocolate cake slice with rich fudge.' },
  { name: 'Classic Strawberry', price: 170, image: '/images/classic_strawberry.png', description: 'Classic sweet milk cake topped with fresh, juicy strawberries.' },
  { name: 'Lotus Biscoff', price: 170, image: '/images/lotus_biscoff_cake.png', description: 'Loaded with Lotus Biscoff spread and cookie crumbles.' },
  { name: 'Matcha Strawberry', price: 170, image: '/images/matcha_strawberry.png', description: 'Premium Japanese matcha tea paired with fresh strawberries.' },
  { name: 'Banana Toffee', price: 170, image: '/images/banana_toffee.png', description: 'Creamy banana slices topped with delicious homemade toffee caramel.' },
  { name: 'Blueberry Garden', price: 170, image: '/images/blueberry_garden.png', description: 'Topped with sweet, tangy orchard blueberries and whipped cream.' }
];

export default function TresLechesCakes() {
  return (
    <section id="menu" className="section-padding bg-cream-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-0 w-72 h-72 bg-royal/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-warm/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-block">Artisanal Desserts</span>
          <h2 className="section-title">
            Tres Leches & <span className="text-royal">Cakes</span>
          </h2>
          <p className="section-subtitle">
            Deliciously soaked three-milk cakes and decadent fudge creations, crafted fresh daily.
          </p>
        </motion.div>

        {/* Cakes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="premium-card group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-royal shadow-sm">
                    Eggless Available
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-xl font-bold text-charcoal mb-2 group-hover:text-royal transition-colors">
                    {cake.name}
                  </h4>
                  <p className="text-charcoal/60 text-sm mb-4 leading-relaxed h-12 overflow-hidden">
                    {cake.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-gray-100/50 mt-auto">
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-bold text-royal">₹{cake.price}</span>
                  <AddToCartButton 
                    name={cake.name} 
                    price={cake.price} 
                    image={cake.image}
                    variant="Slice"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
