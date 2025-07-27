/**
 * Order Service - Single Responsibility Principle
 * Handles order processing and contact method integration
 */

import { CartItem, ContactMethod } from '../types';
import { BRAND_CONFIG } from '../constants';

export class OrderService {
  /**
   * Generate order message for external communication
   */
  public static generateOrderMessage(items: CartItem[]): string {
    const orderDetails = items.map(item => 
      `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return `🍰 New Order from ${BRAND_CONFIG.name}\n\n${orderDetails}\n\nTotal: ₹${total}\n\nPlease confirm my order. Thank you!`;
  }

  /**
   * Get available contact methods
   */
  public static getContactMethods(): ContactMethod[] {
    return [
      {
        type: 'whatsapp',
        label: 'Order via WhatsApp',
        icon: 'MessageCircle',
        action: (orderDetails: string) => {
          const message = encodeURIComponent(orderDetails);
          window.open(`https://wa.me/${BRAND_CONFIG.contact.whatsapp}?text=${message}`, '_blank');
        }
      },
      {
        type: 'email',
        label: 'Order via Email',
        icon: 'Mail',
        action: (orderDetails: string) => {
          const subject = encodeURIComponent(`New Order - ${BRAND_CONFIG.name}`);
          const body = encodeURIComponent(orderDetails);
          window.open(`mailto:${BRAND_CONFIG.contact.email}?subject=${subject}&body=${body}`, '_blank');
        }
      },
      {
        type: 'phone',
        label: 'Call to Order',
        icon: 'Phone',
        action: () => {
          window.open(`tel:${BRAND_CONFIG.contact.phone}`, '_blank');
        }
      }
    ];
  }

  /**
   * Process order through selected contact method
   */
  public static processOrder(items: CartItem[], contactMethod: ContactMethod): void {
    if (items.length === 0) {
      throw new Error('Cannot process empty order');
    }

    const orderMessage = this.generateOrderMessage(items);
    contactMethod.action(orderMessage);
  }
}