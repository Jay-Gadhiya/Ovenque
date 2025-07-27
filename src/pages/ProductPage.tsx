/**
 * Product Detail Page - Following SOLID Principles
 * Single responsibility for displaying product details
 */

import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Plus, Minus, Star, Clock, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { LoadingSpinner } from '../components/ui/loading-spinner';
import { ErrorBoundary } from '../components/ui/error-boundary';
import { PRODUCTS, BRAND_CONFIG } from '../lib/constants';
import { useCart } from '../hooks/use-cart';
import { Product } from '../lib/types';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, getTotalItems } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id) as Product | undefined;

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Show success feedback with better UX
      const button = document.querySelector('[data-add-to-cart]') as HTMLButtonElement;
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.disabled = true;
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 1500);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!product) {
    return (
      <ErrorBoundary
        fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The product you're looking for doesn't exist.
              </p>
              <Link to="/">
                <Button>Return Home</Button>
              </Link>
            </div>
          </div>
        }
      >
        <div />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate(-1)}
                  className="transition-all duration-200 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Link to="/" className="flex items-center space-x-2 group">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <h1 className="text-2xl font-bold text-primary font-playfair">
                    {BRAND_CONFIG.name}
                  </h1>
                </Link>
              </div>
              <Link to="/">
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Cart
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-2xl bg-accent/10 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
                  {product.category}
                </Badge>
                {product.rating && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div>
                {product.rating && product.reviews && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(Math.floor(product.rating))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                      <Star className="w-4 h-4 fill-primary/30 text-primary/30" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                )}
                <h1 className="text-4xl font-bold text-foreground font-playfair mb-2">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-primary mb-4">₹{product.price}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="transition-all duration-200 hover:scale-110"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="transition-all duration-200 hover:scale-110"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Add to Cart */}
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 transition-all duration-200 hover:scale-105" 
                  onClick={handleAddToCart}
                  data-add-to-cart
                >
                  Add to Cart - ₹{product.price * quantity}
                </Button>
                {product.preparationTime && product.servingSize && product.nutritionInfo && (
                  <div className="grid grid-cols-3 gap-2 text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{product.preparationTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{product.servingSize}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <span>{product.nutritionInfo.calories} cal</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          {(product.longDescription || product.ingredients || product.nutritionInfo) && (
            <div className="mt-16 space-y-12">
              <Separator />
              
              {/* Description */}
              {product.longDescription && (
                <div className="animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    About This Product
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {product.longDescription}
                  </p>
                </div>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <div className="animate-fade-in-up animation-delay-200">
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Ingredients
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="secondary" className="justify-start">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Nutrition Info */}
              {product.nutritionInfo && (
                <div className="animate-fade-in-up animation-delay-400">
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Nutrition Information
                  </h2>
                  <Card className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {product.nutritionInfo.calories}
                        </div>
                        <div className="text-sm text-muted-foreground">Calories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {product.nutritionInfo.protein}
                        </div>
                        <div className="text-sm text-muted-foreground">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {product.nutritionInfo.carbs}
                        </div>
                        <div className="text-sm text-muted-foreground">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {product.nutritionInfo.fat}
                        </div>
                        <div className="text-sm text-muted-foreground">Fat</div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}