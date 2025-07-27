/**
 * Type definitions for the Ovenque application
 * Following Interface Segregation Principle - specific interfaces for different concerns
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  longDescription?: string;
  ingredients?: string[];
  nutritionInfo?: NutritionInfo;
  preparationTime?: string;
  servingSize?: string;
  rating?: number;
  reviews?: number;
}

export interface NutritionInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactMethod {
  type: 'phone' | 'email' | 'whatsapp';
  label: string;
  icon: string;
  action: (orderDetails: string) => void;
}

export interface OrderSummary {
  items: CartItem[];
  total: number;
  itemCount: number;
}