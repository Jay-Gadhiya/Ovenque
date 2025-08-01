/**
 * Product Card Component - Dessert Wonderland Design
 * Features mouth-watering hover effects and animations
 */

import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Product } from '../../lib/types';
import { useCart } from '../../hooks/use-cart';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    
    // Add sweet success animation
    const button = e.currentTarget as HTMLButtonElement;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  };

  return (
    <Card className={`overflow-hidden card-hover bg-gradient-to-br from-vanilla/80 to-white/60 backdrop-blur-sm border-2 border-caramel/20 shadow-xl hover:shadow-2xl transition-all duration-500 group ${className}`}>
      <Link to={`/product/${product.id}`}>
        <div className="relative h-72 overflow-hidden">
          {/* Main product image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category badge with dessert styling */}
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-caramel to-honey text-white shadow-lg animate-float-gentle">
            {product.category}
          </Badge>
          
          {/* Rating with sparkle effect */}
          {product.rating && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-sparkle" />
              <span className="text-sm font-bold text-chocolate">{product.rating}</span>
            </div>
          )}
          
          {/* Floating heart for favorites */}
          <div className="absolute top-4 right-16 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-berry/90 backdrop-blur-sm rounded-full p-2 shadow-lg animate-float-gentle">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Dripping effect on hover */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-gradient-to-b from-chocolate to-caramel rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-drip" />
          
          {/* Sugar sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                  animationDelay: `${i * 200}ms`
                }}
              />
            ))}
          </div>
        </div>
      </Link>
      
      <CardContent className="p-6 space-y-4">
        {/* Product name with gradient text */}
        <div className="flex justify-between items-start">
          <h4 className="text-2xl font-bold font-playfair line-clamp-1 text-transparent bg-clip-text bg-gradient-to-r from-chocolate to-caramel">
            {product.name}
          </h4>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-berry to-primary whitespace-nowrap ml-2">
            ₹{product.price}
          </span>
        </div>
        
        {/* Description with enhanced styling */}
        <p className="text-chocolate/70 leading-relaxed line-clamp-2 text-base">
          {product.description}
        </p>
        
        {/* Rating and reviews */}
        {product.rating && product.reviews && (
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-3 h-3 fill-yellow-400/30 text-yellow-400/30" />
            </div>
            <span className="text-chocolate/60">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        )}
        
        {/* Action buttons with dessert styling */}
        <div className="flex gap-3 pt-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-berry to-primary hover:from-primary hover:to-berry text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-melt drip-effect"
          >
            Add to Cart
          </Button>
          <Link to={`/product/${product.id}`} className="flex-shrink-0">
            <Button 
              variant="outline" 
              className="px-6 py-3 border-2 border-caramel text-caramel hover:bg-caramel hover:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-melt"
            >
              Details
            </Button>
          </Link>
        </div>
        
        {/* Preparation time and serving info */}
        {(product.preparationTime || product.servingSize) && (
          <div className="flex justify-between text-xs text-chocolate/50 pt-2 border-t border-caramel/20">
            {product.preparationTime && (
              <span className="flex items-center gap-1">
                🕐 {product.preparationTime}
              </span>
            )}
            {product.servingSize && (
              <span className="flex items-center gap-1">
                🍽️ {product.servingSize}
              </span>
            )}
          </div>
        )}
      </CardContent>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg shadow-2xl shadow-caramel/20"></div>
      </div>
    </Card>
  );
}