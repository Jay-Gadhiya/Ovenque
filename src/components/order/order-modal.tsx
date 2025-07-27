/**
 * Order Modal Component - Single Responsibility Principle
 * Handles order completion UI and contact method selection
 */

import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { useCart } from '../../hooks/use-cart';
import { OrderService } from '../../lib/services/order-service';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { cart, getTotalPrice, clearCart } = useCart();

  const handleOrderSubmit = (contactMethod: any) => {
    try {
      OrderService.processOrder(cart, contactMethod);
      clearCart();
      onClose();
    } catch (error) {
      console.error('Order processing failed:', error);
      alert('Failed to process order. Please try again.');
    }
  };

  const contactMethods = OrderService.getContactMethods();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Order</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-accent/20 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Order Summary</h4>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2 font-semibold">
              <div className="flex justify-between">
                <span>Total:</span>
                <span>₹{getTotalPrice()}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Choose your preferred contact method:</p>
            {contactMethods.map((method) => {
              const IconComponent = method.icon === 'MessageCircle' ? MessageCircle : 
                                 method.icon === 'Mail' ? Mail : Phone;
              
              return (
                <Button 
                  key={method.type}
                  className="w-full justify-start gap-3 transition-all duration-200 hover:scale-105" 
                  variant={method.type === 'whatsapp' ? 'default' : 'outline'}
                  onClick={() => handleOrderSubmit(method)}
                >
                  <IconComponent className="w-4 h-4" />
                  {method.label}
                </Button>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}