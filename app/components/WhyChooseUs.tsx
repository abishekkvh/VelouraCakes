'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Sparkles, Palette, Heart, Truck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Baked to Order',
    description: 'Every dessert is baked fresh on the day of delivery, ensuring peak flavor and soft texture.',
    gradient: 'from-warm to-warm-600',
  },
  {
    icon: Shield,
    title: 'No Preservatives',
    description: 'Wholesome natural ingredients with zero artificial flavor enhancers or chemicals.',
    gradient: 'from-royal to-royal-600',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Only the finest premium cocoa, fresh butter, and grade-A ingredients go into our batters.',
    gradient: 'from-warm to-royal',
  },
  {
    icon: Palette,
    title: 'Bespoke Customization',
    description: 'Tailor-made decoration and themes for birthdays, gifting, and corporate events.',
    gradient: 'from-royal-400 to-royal',
  },
  {
    icon: Heart,
    title: 'Eggless Speciality',
    description: 'Dedicated and safe vegetarian options across all our signature dessert categories.',
    gradient: 'from-warm-400 to-warm',
  },
  {
    icon: Truck,
    title: 'On-Time Local Delivery',
    description: 'Temperature-stable packaging ensures your order lands fresh and safe across Chennai.',
    gradient: 'from-royal to-warm',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-royal via-royal-600 to-royal-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30" />
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-radial from-warm/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
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
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-6 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Veloura <span className="text-warm">Difference</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover how we combine gourmet flavor and visual elegance to make every celebration beautiful.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/90">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 group-hover:text-royal transition-colors">
                  {feature.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '3000+', label: 'Happy Customers' },
            { value: '40+', label: 'Menu Varieties' },
            { value: '100%', label: 'Eggless Available' },
            { value: 'Chennai', label: 'Local Delivery' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
