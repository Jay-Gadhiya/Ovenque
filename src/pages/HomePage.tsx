/**
 * Home Page Component - Following SOLID Principles
 * Orchestrates components without handling business logic directly
 */

import { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
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
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header onCartClick={() => setIsCartOpen(true)} />

        {/* Hero Section */}
        <HeroSection onOrderClick={scrollToProducts} />

        {/* Products Section */}
        <div id="products">
          <ProductsSection />
        </div>

        {/* Contact Section */}
        <section className="bg-accent/30 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h3 className="text-4xl font-bold text-foreground mb-6 font-playfair">
                Ready to Order?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get in touch with us through your preferred method
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  description: 'Speak directly with our team',
                  contact: BRAND_CONFIG.contact.phone,
                  href: `tel:${BRAND_CONFIG.contact.phone}`,
                  delay: 'animation-delay-200'
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  description: 'Quick and easy ordering',
                  contact: 'Message Us',
                  href: `https://wa.me/${BRAND_CONFIG.contact.whatsapp}`,
                  delay: 'animation-delay-400'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  description: 'Send us your order details',
                  contact: BRAND_CONFIG.contact.email,
                  href: `mailto:${BRAND_CONFIG.contact.email}`,
                  delay: 'animation-delay-600'
                }
              ].map((method, index) => (
                <Card 
                  key={method.title}
                  className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up ${method.delay}`}
                >
                  <method.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{method.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <a 
                    href={method.href} 
                    className="text-primary hover:underline transition-colors duration-200"
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

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <h1 className="text-2xl font-bold text-primary font-playfair">
                {BRAND_CONFIG.name}
              </h1>
            </div>
            <p className="text-muted-foreground mb-4">
              {BRAND_CONFIG.description}
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 {BRAND_CONFIG.name}. All rights reserved.
            </p>
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