/**
 * Products Section Component - Dessert Wonderland Design
 * Features enhanced layout with mouth-watering presentation
 */

import { ProductCard } from './product-card';
import { PRODUCTS } from '../../lib/constants';

export function ProductsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-vanilla/30 via-transparent to-mint/20"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-honey/10 rounded-full blur-3xl animate-float-gentle"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-berry/10 rounded-full blur-3xl animate-float-gentle animation-delay-400"></div>
      
      {/* Sugar particles */}
      <div className="sugar-particles">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="sugar-particle"
            style={{ 
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <h3 className="text-5xl md:text-6xl font-bold font-playfair mb-4 text-transparent bg-clip-text bg-gradient-to-r from-chocolate via-caramel to-berry animate-float-gentle">
              Our Sweet
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-berry via-primary to-mint animate-float-gentle animation-delay-200">
                Specialties
              </span>
            </h3>
            
            {/* Decorative underline */}
            <div className="flex justify-center mt-4">
              <div className="w-24 h-1 bg-gradient-to-r from-caramel to-honey rounded-full animate-chocolate-flow"></div>
            </div>
          </div>
          
          <p className="text-xl text-chocolate/70 max-w-3xl mx-auto leading-relaxed">
            Handcrafted with <span className="font-semibold text-caramel">premium ingredients</span>, 
            each dessert is a perfect blend of <span className="font-semibold text-berry">taste</span>, 
            <span className="font-semibold text-mint"> quality</span>, and 
            <span className="font-semibold text-honey"> artistry</span>.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: "🌟", text: "Premium Quality", color: "caramel" },
              { icon: "👨‍🍳", text: "Expert Crafted", color: "berry" },
              { icon: "🎂", text: "Fresh Daily", color: "mint" },
              { icon: "💝", text: "Made with Love", color: "honey" }
            ].map((badge, index) => (
              <div 
                key={badge.text}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${badge.color}/10 border border-${badge.color}/20 backdrop-blur-sm animate-float-gentle`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="text-lg animate-ingredient-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                  {badge.icon}
                </span>
                <span className={`font-medium text-${badge.color === 'mint' ? 'chocolate' : badge.color}`}>
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Products grid with enhanced spacing */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className="animate-layer-reveal"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <ProductCard 
                product={product}
                className="h-full"
              />
            </div>
          ))}
        </div>
        
        {/* Call to action section */}
        <div className="text-center mt-20 space-y-6">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-vanilla/50 to-honey/30 backdrop-blur-sm border border-caramel/20 shadow-2xl">
            <h4 className="text-2xl font-bold font-playfair text-chocolate mb-4">
              Can't decide? 
            </h4>
            <p className="text-chocolate/70 mb-6 max-w-md">
              Try our <span className="font-semibold text-caramel">Sweet Surprise Box</span> - 
              a curated selection of our most popular treats!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-berry to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-melt drip-effect">
              Order Surprise Box
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}