'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag, MessageCircle } from 'lucide-react';

export default function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "Hi, I'd like to place an order with Veloura Desserts for the following items:%0A%0A";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}`;
      if (item.variant) {
        message += ` (${item.variant})`;
      }
      message += ` - ${item.quantity} x ₹${item.price} = ₹${item.quantity * item.price}%0A`;
    });

    message += `%0A*Total Amount: ₹${cartTotal}*`;
    message += `%0A%0APlease let me know the delivery availability and payment details. Thanks!`;

    const whatsappLink = `https://wa.me/916383289827?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-royal" />
                <h2 className="font-playfair text-2xl font-bold text-charcoal">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="text-lg">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-royal font-medium hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center bg-cream/30 p-4 rounded-xl">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-charcoal text-lg">{item.name}</h3>
                        {item.variant && (
                          <p className="text-sm text-gray-500">{item.variant}</p>
                        )}
                        <p className="text-royal font-semibold mt-1">₹{item.price}</p>
                        
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-500 hover:underline ml-auto"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium">Total</span>
                  <span className="text-2xl font-bold text-charcoal">₹{cartTotal}</span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Checkout via WhatsApp</span>
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  You will be redirected to WhatsApp to confirm and send your order.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
