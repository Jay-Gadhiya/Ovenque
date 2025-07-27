/**
 * Cart Sidebar Component - Single Responsibility Principle
 * Handles cart display and management UI
 */

import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { LoadingSpinner } from '../ui/loading-spinner';
import { useCart } from '../../hooks/use-cart';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToOrder: () => void;
}

export function CartSidebar({ isOpen, onClose, onProceedToOrder }: CartSidebarProps) {
  const { cart, isLoading, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="flex items-center justify-center py-8">
            <LoadingSpinner size="lg" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Your Cart ({getTotalItems()} items)
          </DialogTitle>
        </DialogHeader>
        
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button variant="outline" onClick={onClose} className="mt-4">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 border border-border rounded-lg transition-all duration-200 hover:shadow-md">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded transition-transform duration-200 hover:scale-105" 
                />
                <div className="flex-1">
                  <h4 className="font-medium line-clamp-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">₹{item.price} each</p>
                  <p className="text-sm font-medium text-primary">₹{item.price * item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 transition-all duration-200 hover:scale-110"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 transition-all duration-200 hover:scale-110"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 text-destructive hover:text-destructive transition-all duration-200 hover:scale-110"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total: ₹{getTotalPrice()}</span>
              </div>
              <Button 
                className="w-full transition-all duration-200 hover:scale-105"
                onClick={() => {
                  onClose();
                  onProceedToOrder();
                }}
              >
                Proceed to Order
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}