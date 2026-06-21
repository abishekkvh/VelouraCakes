'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddToCartButtonProps {
  name: string;
  price: number;
  variant?: string;
  image?: string;
  className?: string;
  compact?: boolean;
}

export default function AddToCartButton({ name, price, variant, image, className = '', compact = false }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({ name, price, variant, image });
  };

  if (compact) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAdd}
        className={`flex items-center justify-center w-8 h-8 rounded-full bg-white border border-royal text-royal shadow-sm hover:bg-royal-50 transition-colors ${className}`}
      >
        <Plus className="w-5 h-5" strokeWidth={3} />
      </motion.button>
    );
  }

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
