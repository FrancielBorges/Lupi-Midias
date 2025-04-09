import React from 'react';
import { Button } from '@/components/ui/button';
import { Container } from './container';

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <Container className="relative">
        <div className="max-w-5xl mx-auto glass-effect rounded-2xl p-8 md:p-12 border border-primary/20 shadow-glow overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px]" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px]" />
          
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <span className="text-primary">Transform</span> Your Business?
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Join thousands of successful companies already using our high-performance platform to scale their operations and achieve unprecedented growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary/50">
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-foreground/60">
              No credit card required. 14-day free trial. Cancel anytime.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
} 