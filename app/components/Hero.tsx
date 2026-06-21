'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const link = "https://wa.me/916383289827?text=Hi,%20I'd%20like%20to%20place%20an%20order";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAE0F5] via-white to-[#F5E6F0]" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-warm/20 blur-xl animate-float hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-royal/30 blur-2xl animate-float-reverse hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md border border-royal/10 text-royal-900 text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 rounded-3xl sm:rounded-full shadow-sm max-w-[90%] mx-auto leading-snug">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-royal animate-pulse shrink-0" />
            <span>Eggless Available • Premium Quality • Freshly Baked</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 leading-tight"
        >
          <span className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-royal-900 block mb-2">
            Made with Love,
          </span>
          <span className="font-script text-royal-500 text-6xl md:text-7xl lg:text-8xl xl:text-9xl -rotate-2 inline-block drop-shadow-sm mt-4">
            for Sweet Moments
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-royal-800/80 max-w-3xl mx-auto mb-10 font-light"
        >
          Signature fudge brownies, artisanal cookie tins, rich cheesecakes, and premium custom desserts crafted fresh in Chennai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Order on WhatsApp
          </a>
          <Link href="#menu" className="btn-outline border-royal-200 text-royal hover:bg-royal hover:text-white">
            Explore Menu
            <ArrowDown className="w-5 h-5 animate-bounce-subtle" />
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-royal-800/70 text-sm"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-royal-100/50 backdrop-blur-sm flex items-center justify-center mb-2 text-royal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>100% Eggless Options</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-royal-100/50 backdrop-blur-sm flex items-center justify-center mb-2 text-royal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Freshly Baked</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-royal-100/50 backdrop-blur-sm flex items-center justify-center mb-2 text-royal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span>Chennai Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-royal-100/50 backdrop-blur-sm flex items-center justify-center mb-2 text-royal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span>Made with Love</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-royal/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-royal/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
