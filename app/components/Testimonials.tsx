'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kavitha Rangarajan',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    text: "The Earl Grey Mango Tres Leches was a absolute masterpiece! Incredibly moist and not overly sweet. The fresh mangoes tasted amazing. Everyone at the party loved it.",
    product: 'Tres Leches',
  },
  {
    name: 'Deepak Kumar',
    location: 'Adyar, Chennai',
    rating: 5,
    text: "Hands down the best fudge brownies I've had in Chennai. The double chocolate brownie has this perfect crackly top and gooey center. Order checkout on WhatsApp was super easy.",
    product: 'Fudge Brownies',
  },
  {
    name: 'Shalini S.',
    location: 'Nungambakkam, Chennai',
    rating: 5,
    text: "We ordered the Large Biscoff Cookie Tin for a client gift. The tin looked very premium and the cookies inside were freshly baked and delicious. Highly recommend for corporate gifting!",
    product: 'Cookie Tins',
  },
  {
    name: 'Vikram Aditya',
    location: 'T. Nagar, Chennai',
    rating: 5,
    text: "The Blueberry Cheesecake slice was incredibly rich and creamy. They delivered it exactly on time in temperature-controlled boxes. Tasted pure and premium.",
    product: 'Cheesecake',
  },
  {
    name: 'Aishwarya Murali',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    text: "I ordered the Matilda Cake slice and it is honestly chocolate heaven. Super moist cake layers with the richest fudge imaginable. Will definitely order again!",
    product: 'Matilda Cake',
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-royal relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,159,28,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,209,102,0.1),transparent_50%)]" />
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
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-6 py-2 rounded-full mb-4">
            Customer Love
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our <span className="text-warm">Customers</span> Say
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our happy dessert lovers!
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8 md:p-12 mx-4 md:mx-16"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-warm/30 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentIndex].rating ? 'text-warm fill-warm' : 'text-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-lg md:text-xl text-charcoal mb-8 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-royal to-royal-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-playfair font-bold text-charcoal text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-charcoal/60 text-sm">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="bg-royal-100 text-royal text-sm font-medium px-4 py-2 rounded-full">
                    {testimonials[currentIndex].product}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-warm' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
