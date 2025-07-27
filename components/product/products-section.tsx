/**
 * Products Section Component - Single Responsibility Principle
 * Handles products display layout
 */

import { ProductCard } from './product-card';
import { PRODUCTS } from '@/lib/constants';

export function ProductsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-4xl font-bold text-foreground mb-4 font-playfair">
            Our Specialties
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Handcrafted with the finest ingredients, each item is a perfect blend of taste and quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRODUCTS.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}