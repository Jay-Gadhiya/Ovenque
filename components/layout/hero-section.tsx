/**
 * Hero Section Component - Single Responsibility Principle
 * Handles hero presentation only
 */

import { Button } from '@/components/ui/button';
import { BRAND_CONFIG } from '@/lib/constants';

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
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-playfair leading-tight">
            Fresh Baked
            <span className="block text-amber-800 animate-fade-in-up animation-delay-200">
              Delights
            </span>
          </h2>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Discover our cloud kitchen's signature brownies and muffins, 
            baked fresh daily with premium ingredients and lots of love.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 animate-fade-in-up animation-delay-600 hover:scale-105 transition-transform duration-200"
            onClick={onOrderClick}
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}