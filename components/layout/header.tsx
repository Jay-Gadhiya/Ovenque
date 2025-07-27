/**
 * Header Component - Single Responsibility Principle
 * Handles navigation and branding only
 */

'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BRAND_CONFIG } from '@/lib/constants';
import { useCart } from '@/hooks/use-cart';

interface HeaderProps {
  onCartClick?: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <h1 className="text-2xl font-bold text-primary font-playfair transition-colors group-hover:text-primary/80">
              {BRAND_CONFIG.name}
            </h1>
          </Link>

          {/* Cart Button */}
          <Button
            onClick={onCartClick}
            variant="outline"
            size="sm"
            className="relative transition-all duration-200 hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs animate-pulse">
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}