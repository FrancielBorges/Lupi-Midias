import React from 'react';
import { Button } from '@/components/ui/button';
import { Container } from './container';

export function Hero() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -left-32 top-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="text-sm font-medium">Launching Your Next Big Idea</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Transform Your Vision Into</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">A High-Value Reality</span>
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-2xl">
              Elevate your business with our cutting-edge platform designed for modern startups.
              We provide all the tools you need to scale and succeed in today's market.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/50">
                View Demo
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background">
                    <span className="text-xs font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/70">
                <span className="font-semibold text-primary">500+</span> satisfied customers
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-xl -z-10" />
              <div className="high-ticket-card p-1">
                <div className="w-full aspect-video bg-card rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-background/80 p-6 flex items-center justify-center">
                    <p className="text-center text-xl font-medium">
                      Interactive Product Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 