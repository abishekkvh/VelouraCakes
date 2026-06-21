'use client';

import React from 'react';
import { CartProvider } from './context/CartContext';
import { LocationProvider } from './context/LocationContext';
import CartSidebar from './components/CartSidebar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocationProvider>
      <CartProvider>
        {children}
        <CartSidebar />
      </CartProvider>
    </LocationProvider>
  );
}
