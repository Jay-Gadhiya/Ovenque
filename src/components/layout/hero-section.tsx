/**
 * Hero Section Component - Dessert Wonderland Design
 * Features animated baking scene with mouth-watering visuals
 */

import { Button } from '../ui/button';
import { BRAND_CONFIG } from '../../lib/constants';

interface HeroSectionProps {
  onOrderClick?: () => void;
}

export function HeroSection({ onOrderClick }: HeroSectionProps) {
  return (
    <section className="hero-gradient py-20 px-4 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Sugar particle effects */}
      <div className="sugar-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="sugar-particle" />
        ))}
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-honey/20 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-berry/20 rounded-full blur-3xl animate-float-gentle animation-delay-400" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-mint/20 rounded-full blur-2xl animate-float-gentle animation-delay-800" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Animated Dessert Wonderland */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-96 h-96">
              {/* Main Dessert Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Layered Cake with Cross-section Effect */}
                <div className="dessert-layers w-48 h-48 rounded-full relative bg-gradient-to-b from-vanilla to-chocolate shadow-2xl">
                  <div className="layer layer-1"></div>
                  <div className="layer layer-2"></div>
                  <div className="layer layer-3"></div>
                  <div className="layer layer-4"></div>
                  <div className="layer layer-5"></div>
                  
                  {/* Cake decorations */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-berry rounded-full animate-sparkle animation-delay-200"></div>
                  <div className="absolute top-8 left-8 w-4 h-4 bg-mint rounded-full animate-sparkle animation-delay-600"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-honey rounded-full animate-sparkle animation-delay-1000"></div>
                  
                  {/* Dripping chocolate effect */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-chocolate rounded-b-full animate-drip"></div>
                  <div className="absolute bottom-0 left-1/3 w-1 h-6 bg-caramel rounded-b-full animate-drip animation-delay-300"></div>
                  <div className="absolute bottom-0 right-1/3 w-1 h-6 bg-caramel rounded-b-full animate-drip animation-delay-700"></div>
                </div>
              </div>
              
              {/* Floating Ingredients */}
              <div className="absolute top-16 left-8 animate-ingredient-bounce">
                <div className="w-8 h-8 bg-honey rounded-full shadow-lg relative">
                  <div className="absolute inset-1 bg-gradient-to-br from-yellow-200 to-honey rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute top-24 right-12 animate-ingredient-bounce animation-delay-400">
                <div className="w-6 h-6 bg-chocolate rounded-sm shadow-lg transform rotate-12"></div>
              </div>
              
              <div className="absolute bottom-24 left-12 animate-ingredient-bounce animation-delay-800">
                <div className="w-5 h-5 bg-berry rounded-full shadow-lg"></div>
              </div>
              
              <div className="absolute bottom-32 right-8 animate-ingredient-bounce animation-delay-600">
                <div className="w-4 h-4 bg-mint rounded-full shadow-lg"></div>
              </div>
              
              {/* Oven with Glow Effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                <div className="w-32 h-20 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-2xl animate-oven-glow">
                  {/* Oven Door */}
                  <div className="absolute top-1 left-1 right-1 bottom-1 bg-gradient-to-b from-amber-700 to-amber-800 rounded border border-amber-600">
                    {/* Oven Window with Baking Glow */}
                    <div className="absolute top-1 left-1 right-1 h-10 bg-gradient-to-b from-orange-200 to-orange-400 rounded opacity-90">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50 animate-chocolate-flow"></div>
                    </div>
                    {/* Oven Handle */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-1 h-6 bg-gray-400 rounded-full shadow"></div>
                  </div>
                </div>
              </div>
              
              {/* Steam Effects */}
              <div className="steam-effect absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="steam"></div>
                <div className="steam"></div>
                <div className="steam"></div>
              </div>
              
              {/* Sparkle Effects */}
              <div className="absolute top-12 left-16 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-sparkle animation-delay-300"></div>
              <div className="absolute bottom-16 left-20 w-1 h-1 bg-white rounded-full animate-sparkle animation-delay-600"></div>
              <div className="absolute top-32 right-16 w-2 h-2 bg-yellow-200 rounded-full animate-sparkle animation-delay-900"></div>
              
              {/* Floating Cupcakes */}
              <div className="absolute top-8 right-4 animate-float-gentle">
                <div className="w-12 h-16 relative">
                  {/* Cupcake base */}
                  <div className="absolute bottom-0 w-12 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-lg"></div>
                  {/* Frosting */}
                  <div className="absolute top-0 w-12 h-10 bg-gradient-to-b from-pink-200 to-berry rounded-t-full"></div>
                  {/* Cherry on top */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-24 animate-float-gentle animation-delay-500">
                <div className="w-10 h-14 relative">
                  <div className="absolute bottom-0 w-10 h-7 bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-lg"></div>
                  <div className="absolute top-0 w-10 h-9 bg-gradient-to-b from-blue-200 to-mint rounded-t-full"></div>
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text Content with Enhanced Typography */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl font-bold font-playfair leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chocolate via-caramel to-honey animate-float-gentle">
                  Sweet
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry via-primary to-mint animate-float-gentle animation-delay-200">
                  Dreams
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey via-caramel to-chocolate animate-float-gentle animation-delay-400">
                  Await
                </span>
              </h2>
              
              <p className="text-xl text-chocolate/80 leading-relaxed max-w-2xl">
                Indulge in our <span className="font-semibold text-caramel">handcrafted desserts</span> made with 
                <span className="font-semibold text-berry"> premium ingredients</span> and 
                <span className="font-semibold text-honey"> endless love</span>. 
                Every bite is a journey to dessert paradise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-caramel to-honey hover:from-honey hover:to-caramel btn-melt drip-effect shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={onOrderClick}
                >
                  Order Sweet Treats
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-white btn-melt shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View Menu
                </Button>
              </div>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {[
                { icon: "🍰", text: "Fresh Daily", color: "berry" },
                { icon: "🥧", text: "Premium Quality", color: "caramel" },
                { icon: "🧁", text: "Made with Love", color: "mint" }
              ].map((feature, index) => (
                <div 
                  key={feature.text}
                  className={`text-center p-4 rounded-2xl bg-${feature.color}/10 backdrop-blur-sm border border-${feature.color}/20 animate-float-gentle`}
                  style={{ animationDelay: `${(index + 1) * 300}ms` }}
                >
                  <div className="text-3xl mb-2 animate-ingredient-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                    {feature.icon}
                  </div>
                  <p className={`font-medium text-${feature.color === 'mint' ? 'chocolate' : feature.color}`}>
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}