import React from 'react';
import { Button } from '@/components/ui/button';
import { Container } from './container';

export function Header() {
  return (
    <header className="py-4 border-b border-border/40 bg-card/70 backdrop-blur-md sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-bold text-xl">S</span>
          </div>
          <span className="font-semibold text-xl tracking-tight">Startup</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
} 