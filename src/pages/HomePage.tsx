/**
 * Home Page Component - Dessert Wonderland Design
 * Enhanced with mouth-watering visuals and animations
 */

import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Award } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ErrorBoundary } from '../components/ui/error-boundary';
import { Header } from '../components/layout/header';
import { HeroSection } from '../components/layout/hero-section';
import { ProductsSection } from '../components/product/products-section';
import { CartSidebar } from '../components/cart/cart-sidebar';
import { OrderModal } from '../components/order/order-modal';
import { BRAND_CONFIG } from '../lib/constants';

export function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-vanilla via-background to-mint/20">
        {/* Header */}
        <Header onCartClick={() => setIsCartOpen(true)} />

        {/* Hero Section */}
        <HeroSection onOrderClick={scrollToProducts} />

        {/* Products Section */}
        <div id="products">
          <ProductsSection />
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-honey/20 via-caramel/10 to-berry/20 relative overflow-hidden">
          <div className="sugar-particles">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="sugar-particle" style={{ animationDelay: `${i * 1.2}s` }} />
            ))}
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-transparent bg-clip-text bg-gradient-to-r from-chocolate to-caramel">
                Why Sweet Lovers Choose Us
              </h3>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Experience the difference that passion and quality make in every bite
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Premium Ingredients',
                  description: 'We source only the finest ingredients from trusted suppliers worldwide',
                  color: 'caramel',
                  emoji: '🏆'
                },
                {
                  icon: Clock,
                  title: 'Fresh Daily',
                  description: 'Every dessert is baked fresh daily to ensure maximum flavor and quality',
                  color: 'berry',
                  emoji: '⏰'
                },
                {
                  icon: MapPin,
                  title: 'Local Delivery',
                  description: 'Fast and reliable delivery to bring sweetness right to your doorstep',
                  color: 'mint',
                  emoji: '🚚'
                }
              ].map((feature, index) => (
                <Card 
                  key={feature.title}
                  className={`p-8 text-center card-hover bg-gradient-to-br from-white/80 to-${feature.color}/10 backdrop-blur-sm border-2 border-${feature.color}/20 shadow-xl animate-layer-reveal`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6">
                    <div className="text-4xl mb-4 animate-ingredient-bounce" style={{ animationDelay: `${index * 150}ms` }}>
                      {feature.emoji}
                    </div>
                    <feature.icon className={`w-8 h-8 text-${feature.color} mx-auto animate-float-gentle`} />
                  </div>
                  <h4 className="text-xl font-bold font-playfair mb-4 text-chocolate">{feature.title}</h4>
                  <p className="text-chocolate/70 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Enhanced Design */}
        <section className="py-24 px-4 bg-gradient-to-br from-chocolate/5 via-caramel/10 to-honey/15 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-16 space-y-6">
              <h3 className="text-5xl md:text-6xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-chocolate via-caramel to-berry animate-float-gentle">
                Ready to Indulge?
              </h3>
              <p className="text-xl text-chocolate/70 leading-relaxed max-w-2xl mx-auto">
                Get in touch with us through your preferred method and let us bring 
                <span className="font-semibold text-caramel"> sweetness </span>
                to your day
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  description: 'Speak directly with our sweet team',
                  contact: BRAND_CONFIG.contact.phone,
                  href: `tel:${BRAND_CONFIG.contact.phone}`,
                  color: 'caramel',
                  emoji: '📞'
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  description: 'Quick and easy sweet ordering',
                  contact: 'Message Us',
                  href: `https://wa.me/${BRAND_CONFIG.contact.whatsapp}`,
                  color: 'berry',
                  emoji: '💬'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  description: 'Send us your sweet requests',
                  contact: BRAND_CONFIG.contact.email,
                  href: `mailto:${BRAND_CONFIG.contact.email}`,
                  color: 'mint',
                  emoji: '📧'
                }
              ].map((method, index) => (
                <Card 
                  key={method.title}
                  className={`p-8 text-center card-hover bg-gradient-to-br from-white/90 to-${method.color}/10 backdrop-blur-sm border-2 border-${method.color}/20 shadow-2xl animate-layer-reveal chocolate-melt`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6">
                    <div className="text-3xl mb-4 animate-ingredient-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                      {method.emoji}
                    </div>
                    <method.icon className={`w-10 h-10 text-${method.color} mx-auto animate-float-gentle`} />
                  </div>
                  <h4 className="text-xl font-bold font-playfair mb-3 text-chocolate">{method.title}</h4>
                  <p className="text-chocolate/60 mb-6 text-sm leading-relaxed">{method.description}</p>
                  <a 
                    href={method.href} 
                    className={`inline-block px-6 py-3 bg-gradient-to-r from-${method.color} to-${method.color}/80 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-melt drip-effect`}
                    target={method.title === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  >
                    {method.contact}
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Dessert Theme */}
        <footer className="bg-gradient-to-r from-chocolate via-chocolate/90 to-chocolate text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-caramel/10 to-honey/10"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-caramel to-honey rounded-2xl flex items-center justify-center shadow-2xl animate-float-gentle">
                <span className="text-white font-bold text-2xl">O</span>
              </div>
              <h1 className="text-3xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-caramel to-honey">
                {BRAND_CONFIG.name}
              </h1>
            </div>
            
            <p className="text-white/80 mb-6 text-lg max-w-2xl mx-auto leading-relaxed">
              {BRAND_CONFIG.description} - Where every bite is a sweet memory in the making.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {['🍰', '🧁', '🍪', '🥧', '🍩'].map((emoji, index) => (
                <div 
                  key={index}
                  className="text-2xl animate-ingredient-bounce"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/60 text-sm">
                © 2025 {BRAND_CONFIG.name}. All rights reserved. Made with 💖 and lots of sugar.
              </p>
            </div>
          </div>
        </footer>

        {/* Cart Sidebar */}
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onProceedToOrder={() => setIsOrderModalOpen(true)}
        />

        {/* Order Modal */}
        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}