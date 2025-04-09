import React, { useState, useEffect } from 'react';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AgencyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getItemLink = (item: string) => {
    if (item === 'Contatos') {
      return '/contato';
    }
    return `#${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : ''
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <Link to="/">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img src="/logo.png" alt="Lupi Mídias" className="h-12" />
            </picture>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Serviços', 'Cases', 'Sobre Nós', 'Contatos'].map((item, index) => (
            <motion.a 
              key={item}
              href={getItemLink(item)}
              className="text-foreground/80 hover:text-primary transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <span className="absolute left-0 right-0 bottom-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
              onClick={() => window.location.href = '/contato'}
            >
              Fale Conosco
            </Button>
          </motion.div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card/95 backdrop-blur-xl border-primary/10">
              <nav className="flex flex-col gap-6 mt-10">
                {['Serviços', 'Cases', 'Sobre Nós', 'Contatos'].map((item) => (
                  <a 
                    key={item}
                    href={getItemLink(item)}
                    className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/20"
                  >
                    {item}
                  </a>
                ))}
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow mt-4"
                  onClick={() => window.location.href = '/contato'}
                >
                  Fale Conosco
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
} 