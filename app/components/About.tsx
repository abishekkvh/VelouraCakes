'use client';

import { motion } from 'framer-motion';
import { Leaf, Clock, Palette, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: 'No Preservatives',
    description: '100% natural, high-quality ingredients with zero artificial preservatives or chemical additives.',
  },
  {
    icon: Clock,
    title: 'Baked to Order',
    description: 'Every dessert is baked fresh on the day of delivery, assuring unmatched taste and soft texture.',
  },
  {
    icon: Palette,
    title: 'Artisanal Decor',
    description: 'Elegant custom presentation, designed meticulously to elevate your special celebration moments.',
  },
  {
    icon: Sparkles,
    title: '100% Eggless Options',
    description: 'Dedicated vegetarian options across all items, ensuring everyone can indulge safely.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-block">Our Story</span>
          <h2 className="section-title">
            Crafted with <span className="text-royal">Passion</span> & <span className="text-warm">Precision</span>
          </h2>
          <p className="section-subtitle">
            Veloura Desserts creates premium homemade treats with a focus on fresh baking, premium rich ingredients, and gorgeous design aesthetics.
          </p>
        </motion.div>

        {/* Image and Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about_baker.png"
                alt="Baker decorating a cake"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900/30 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-warm text-white p-6 rounded-2xl shadow-xl animate-bounce-subtle"
            >
              <div className="text-3xl font-bold font-playfair">100%</div>
              <div className="text-sm">Homemade</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal leading-tight">
              Where Elegant Flavor Meets <span className="text-royal">Exquisite Style</span>
            </h3>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              At Veloura Desserts, we believe that sweet moments are made beautiful when flavor and presentation align. Every cake, brownie, and cookie tin is crafted with the highest standards in mind, using fresh butter, rich chocolates, and natural flavor pairings.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Based in Anna Nagar, Chennai, we bake completely on-demand to guarantee that your desserts land on your table as fresh and soft as possible. Whether you are ordering a rich Matilda cake, cookie tins for gifting, or our signature fudge brownies, we make sure every single bite feels like pure luxury.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="badge-accent">Eggless Specialities</span>
              <span className="badge-accent">Fresh Butter Only</span>
              <span className="badge-accent">100% Vegetarian Available</span>
              <span className="badge-accent">Gourmet Quality</span>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="premium-card p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-royal-100 to-royal-50 flex items-center justify-center group-hover:from-royal group-hover:to-royal-600 transition-all duration-500">
                <item.icon className="w-8 h-8 text-royal group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-charcoal mb-3">{item.title}</h4>
              <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
