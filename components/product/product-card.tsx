/**
 * Product Card Component - Single Responsibility Principle
 * Handles individual product display and interaction
 */

'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    addToCart(product);
  };

  return (
    <Card className={`overflow-hidden card-hover bg-card/50 backdrop-blur-sm transition-all duration-300 ${className}`}>
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
            {product.category}
          </Badge>
          {product.rating && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{product.rating}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-2xl font-bold text-foreground font-playfair line-clamp-1">
            {product.name}
          </h4>
          <span className="text-2xl font-bold text-primary whitespace-nowrap ml-2">
            ₹{product.price}
          </span>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex gap-3">
          <Button
            onClick={handleAddToCart}
            className="flex-1 transition-all duration-200 hover:scale-105"
          >
            Add to Cart
          </Button>
          <Link href={`/product/${product.id}`}>
            <Button variant="outline" className="px-6 transition-all duration-200 hover:scale-105">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}