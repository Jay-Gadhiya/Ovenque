/**
 * Header Component - Dessert Wonderland Design
 * Enhanced with sweet styling and animations
 */

import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { BRAND_CONFIG } from '../../lib/constants';
import { useCart } from '../../hooks/use-cart';

interface HeaderProps {
  onCartClick?: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-vanilla/90 to-white/95 backdrop-blur-md border-b-2 border-caramel/20 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo with Enhanced Design */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-caramel via-honey to-berry rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-float-gentle">
                <span className="text-white font-bold text-2xl font-playfair">O</span>
              </div>
              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-sparkle"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-sparkle animation-delay-300"></div>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-chocolate via-caramel to-berry transition-all duration-300 group-hover:scale-105">
                {BRAND_CONFIG.name}
              </h1>
              <p className="text-xs text-chocolate/60 font-medium tracking-wide">
                Sweet Dreams Await
              </p>
            </div>
          </Link>

          {/* Navigation Menu (for larger screens) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-chocolate hover:text-caramel transition-colors duration-200 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caramel transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-chocolate hover:text-caramel transition-colors duration-200 font-medium relative group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caramel transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link 
              to="/about" 
              className="text-chocolate hover:text-caramel transition-colors duration-200 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caramel transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Cart Button with Enhanced Design */}
          <Button
            onClick={onCartClick}
            className="relative bg-gradient-to-r from-berry to-primary hover:from-primary hover:to-berry text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 btn-melt drip-effect"
          >
            <ShoppingCart className="w-5 h-5 mr-2 animate-float-gentle" />
            <span className="hidden sm:inline">Sweet Cart</span>
            <span className="sm:hidden">Cart</span>
            
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 w-6 h-6 p-0 flex items-center justify-center text-xs bg-gradient-to-r from-honey to-caramel text-white border-2 border-white shadow-lg animate-bounce">
                {totalItems}
              </Badge>
            )}
            
            {/* Sparkle effect for cart */}
            {totalItems > 0 && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"></div>
            )}
          </Button>
        </div>
      </div>
      
      {/* Subtle bottom border animation */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-caramel to-transparent animate-chocolate-flow"></div>
    </header>
  );
}