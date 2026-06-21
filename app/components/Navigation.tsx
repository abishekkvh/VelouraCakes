'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Why Us', href: '#why-choose-us' },
  { name: 'Reviews', href: '#testimonials' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/916383289827?text=Hi,%20I'd%20like%20to%20place%20an%20order";

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2">
              <img src="/images/Velora Logo.png" alt="Veloura Logo" className="w-10 h-10 rounded-full object-cover bg-white/10" />
              <span className={`font-playfair text-2xl font-bold ${
                scrolled ? 'text-royal' : 'text-royal-900'
              }`}>
                Veloura
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors relative group ${
                    scrolled ? 'text-charcoal hover:text-royal' : 'text-royal-800 hover:text-royal'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-royal`} />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:+916383289827`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-royal hover:bg-royal/10'
                    : 'text-royal-800 hover:bg-royal/10'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">Order Now</span>
              </a>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  scrolled ? 'text-charcoal hover:bg-royal/10' : 'text-royal-800 hover:bg-royal/10'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-royal text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  scrolled ? 'text-charcoal hover:bg-royal/10' : 'text-royal-800 hover:bg-royal/10'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-royal text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-royal/10 text-royal`}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-royal-900/95 backdrop-blur-lg pt-24 md:hidden"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-playfair text-white hover:text-warm transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-white/10 pt-6 mt-4 flex flex-col gap-4"
                >
                  <a
                    href={`tel:+916383289827`}
                    className="flex items-center gap-3 text-white hover:text-warm transition-colors py-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call: +91 6383289827</span>
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Order on WhatsApp</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
