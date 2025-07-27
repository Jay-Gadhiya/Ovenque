/**
 * Application constants following Open/Closed Principle
 * Easy to extend without modifying existing code
 */

import { Product } from './types';

export const BRAND_CONFIG = {
  name: 'Ovenque',
  tagline: 'Fresh Bakery Delights',
  description: 'Cloud kitchen specializing in soft brownies and fresh muffins',
  contact: {
    phone: '+919876543210',
    email: 'orders@ovenque.com',
    whatsapp: '919876543210'
  }
} as const;

export const PRODUCTS: Product[] = [
  {
    id: 'soft-brownie',
    name: 'Soft Brownie',
    price: 120,
    image: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Rich, fudgy chocolate brownie made with premium cocoa and chocolate chunks',
    category: 'Dessert',
    longDescription: 'Indulge in our signature Soft Brownie, a decadent treat that melts in your mouth. Made with premium Belgian cocoa and real chocolate chunks, each brownie is carefully crafted to achieve the perfect balance of fudgy texture and rich chocolate flavor.',
    ingredients: [
      'Premium Belgian Cocoa',
      'Dark Chocolate Chunks',
      'Fresh Eggs',
      'Unsalted Butter',
      'Brown Sugar',
      'All-Purpose Flour',
      'Espresso',
      'Vanilla Extract',
      'Sea Salt'
    ],
    nutritionInfo: {
      calories: 280,
      protein: '4g',
      carbs: '36g',
      fat: '14g'
    },
    preparationTime: '45 minutes',
    servingSize: '1 piece (85g)',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'fresh-muffin',
    name: 'Fresh Muffin',
    price: 80,
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fluffy, moist muffins baked fresh daily with seasonal fruits and nuts',
    category: 'Breakfast',
    longDescription: 'Start your day right with our Fresh Muffins, baked every morning using only the finest ingredients. Our muffins feature a tender, fluffy crumb and are loaded with seasonal fruits and premium nuts.',
    ingredients: [
      'Fresh Seasonal Fruits',
      'Premium Nuts',
      'All-Purpose Flour',
      'Fresh Eggs',
      'Real Butter',
      'Brown Sugar',
      'Baking Powder',
      'Vanilla Extract',
      'Cinnamon',
      'Salt'
    ],
    nutritionInfo: {
      calories: 220,
      protein: '5g',
      carbs: '32g',
      fat: '9g'
    },
    preparationTime: '30 minutes',
    servingSize: '1 muffin (70g)',
    rating: 4.6,
    reviews: 89
  }
];

export const STORAGE_KEYS = {
  CART: 'ovenque-cart'
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
} as const;