/**
 * Hero Section Component - Single Responsibility Principle
 * Handles hero presentation with animated baking icon
 */

import { Button } from '../ui/button';
import { BRAND_CONFIG } from '../../lib/constants';

interface HeroSectionProps {
  onOrderClick?: () => void;
}

export function HeroSection({ onOrderClick }: HeroSectionProps) {
  return (
    <section className="hero-gradient py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-amber-500/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Animated Baking Icon */}
          <div className="flex justify-center lg:justify-start animate-fade-in-up">
            <div className="relative">
              {/* Animated Baking Scene */}
              <div className="w-80 h-80 relative">
                {/* Oven */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-2xl">
                  {/* Oven Door */}
                  <div className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-b from-amber-700 to-amber-800 rounded border-2 border-amber-600">
                    {/* Oven Window */}
                    <div className="absolute top-2 left-2 right-2 h-16 bg-gradient-to-b from-yellow-200 to-orange-300 rounded opacity-80 animate-pulse">
                      {/* Baking Items Inside */}
                      <div className="absolute bottom-1 left-2 w-3 h-2 bg-amber-600 rounded animate-bounce-gentle"></div>
                      <div className="absolute bottom-1 right-2 w-3 h-2 bg-amber-700 rounded animate-bounce-gentle animation-delay-200"></div>
                    </div>
                    {/* Oven Handle */}
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-400 rounded"></div>
                  </div>
                </div>
                
                {/* Steam/Smoke */}
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-8 bg-gradient-to-t from-gray-300 to-transparent rounded-full opacity-60 animate-float"></div>
                  <div className="w-1 h-6 bg-gradient-to-t from-gray-200 to-transparent rounded-full opacity-40 animate-float animation-delay-200 ml-3"></div>
                  <div className="w-1 h-4 bg-gradient-to-t from-gray-100 to-transparent rounded-full opacity-30 animate-float animation-delay-400 ml-1"></div>
                </div>
                
                {/* Floating Ingredients */}
                <div className="absolute top-10 left-10 w-6 h-6 bg-amber-400 rounded-full animate-float shadow-lg"></div>
                <div className="absolute top-20 right-16 w-4 h-4 bg-amber-600 rounded-full animate-float animation-delay-400 shadow-lg"></div>
                <div className="absolute top-5 right-8 w-3 h-3 bg-amber-500 rounded-full animate-float animation-delay-600 shadow-lg"></div>
                
                {/* Chef Hat */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-16 h-12 bg-white rounded-t-full shadow-lg animate-bounce-gentle">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-white rounded-full shadow-md"></div>
                  </div>
                </div>
                
                {/* Sparkles */}
                <div className="absolute top-16 left-20 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute top-24 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-200"></div>
                <div className="absolute top-8 left-32 w-1 h-1 bg-yellow-200 rounded-full animate-ping animation-delay-400"></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-playfair leading-tight">
                Fresh Baked
                <span className="block text-amber-800 animate-fade-in-up animation-delay-400">
                  Delights
                </span>
              </h2>
              <p className="text-xl text-amber-800 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
                Discover our cloud kitchen's signature brownies and muffins, 
                baked fresh daily with premium ingredients and lots of love.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 animate-fade-in-up animation-delay-800 hover:scale-105 transition-transform duration-200"
                onClick={onOrderClick}
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}