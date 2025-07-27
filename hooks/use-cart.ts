/**
 * Custom hook for cart management
 * Following Dependency Inversion Principle - depends on abstractions
 */

'use client';

import { useState, useEffect } from 'react';
import { CartItem, Product } from '@/lib/types';
import { CartService } from '@/lib/services/cart-service';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cartService = CartService.getInstance();
    
    // Initialize cart from localStorage (client-side only)
    cartService.initializeCart();
    setCart(cartService.getCart());
    setIsLoading(false);

    // Subscribe to cart changes
    const unsubscribe = cartService.subscribe((updatedCart) => {
      setCart(updatedCart);
    });

    return unsubscribe;
  }, []);

  const addToCart = (product: Product, quantity: number = 1) => {
    const cartService = CartService.getInstance();
    cartService.addItem(product, quantity);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const cartService = CartService.getInstance();
    cartService.updateQuantity(productId, quantity);
  };

  const removeFromCart = (productId: string) => {
    const cartService = CartService.getInstance();
    cartService.removeItem(productId);
  };

  const clearCart = () => {
    const cartService = CartService.getInstance();
    cartService.clearCart();
  };

  const getTotalPrice = () => {
    const cartService = CartService.getInstance();
    return cartService.getTotalPrice();
  };

  const getTotalItems = () => {
    const cartService = CartService.getInstance();
    return cartService.getTotalItems();
  };

  const isEmpty = () => {
    const cartService = CartService.getInstance();
    return cartService.isEmpty();
  };

  return {
    cart,
    isLoading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isEmpty
  };
}