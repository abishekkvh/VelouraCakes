'use client';

import React from 'react';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartSidebar />
    </CartProvider>
  );
}
