/**
 * Cart Service - Single Responsibility Principle
 * Handles all cart-related operations and persistence
 */

import { CartItem, Product } from '../types';
import { STORAGE_KEYS } from '../constants';

export class CartService {
  private static instance: CartService;
  private cart: CartItem[] = [];
  private listeners: Array<(cart: CartItem[]) => void> = [];

  private constructor() {
    // Don't load from storage in constructor to avoid SSR issues
  }

  /**
   * Singleton pattern implementation
   */
  public static getInstance(): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService();
    }
    return CartService.instance;
  }

  /**
   * Initialize cart by loading from localStorage
   * Should be called after component mounts on client-side
   */
  public initializeCart(): void {
    this.loadFromStorage();
  }

  /**
   * Subscribe to cart changes
   */
  public subscribe(listener: (cart: CartItem[]) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  /**
   * Notify all subscribers of cart changes
   */
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener([...this.cart]));
  }

  /**
   * Load cart from localStorage
   */
  private loadFromStorage(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
        if (savedCart) {
          this.cart = JSON.parse(savedCart);
        }
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
      this.cart = [];
    }
  }

  /**
   * Save cart to localStorage
   */
  private saveToStorage(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(this.cart));
      }
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }

  /**
   * Get current cart items
   */
  public getCart(): CartItem[] {
    return [...this.cart];
  }

  /**
   * Add item to cart
   */
  public addItem(product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ ...product, quantity });
    }
    
    this.saveToStorage();
    this.notifyListeners();
  }

  /**
   * Update item quantity
   */
  public updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveToStorage();
      this.notifyListeners();
    }
  }

  /**
   * Remove item from cart
   */
  public removeItem(productId: string): void {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveToStorage();
    this.notifyListeners();
  }

  /**
   * Clear entire cart
   */
  public clearCart(): void {
    this.cart = [];
    this.saveToStorage();
    this.notifyListeners();
  }

  /**
   * Get total price
   */
  public getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  /**
   * Get total item count
   */
  public getTotalItems(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Check if cart is empty
   */
  public isEmpty(): boolean {
    return this.cart.length === 0;
  }
}