'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddToCartButtonProps {
  name: string;
  price: number;
  variant?: string;
  image?: string;
  className?: string;
}

export default function AddToCartButton({ name, price, variant, image, className = '' }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({ name, price, variant, image });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleAdd}
      className={`flex items-center justify-center gap-2 bg-royal text-white px-4 py-2 rounded-full font-medium hover:bg-royal-600 transition-colors shadow-md ${className}`}
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Add to Cart</span>
    </motion.button>
  );
}
