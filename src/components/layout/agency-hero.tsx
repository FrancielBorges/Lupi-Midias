import React from 'react';
import { Button } from '@/components/ui/button';
import { Container } from './container';
import { motion } from 'framer-motion';
import { Zap, BarChart3, TrendingUp, Target, MousePointer } from 'lucide-react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

export function AgencyHero() {
  const navigate = useNavigate();
  
  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient circles */}
        <div className="absolute top-0 left-[15%] w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-0 right-[15%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-60" />
        
        {/* Animated particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/40 rounded-full w-1 h-1"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, -Math.random() * 50, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Subtle grid overlay with gradient fade */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(84, 218, 87, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(84, 218, 87, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          {/* Gradient fade overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom,
                rgba(84, 218, 87, 0.1) 0%,
                rgba(84, 218, 87, 0.05) 40%,
                rgba(84, 218, 87, 0) 100%)`
            }}
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mx-auto lg:mx-0"
            >
              <Zap size={16} className="animate-pulse" />
              <span className="text-xs md:text-sm font-medium">Resultados Comprovados em Tráfego Pago</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="block mb-2">Transforme seu</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary relative">
                Investimento Digital
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[3px] bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <span className="block mt-2">em Resultados Reais</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0"
            >
              Somos especialistas em estratégias de tráfego pago que geram conversões reais. 
              Amplie seu alcance, otimize seus anúncios e maximize seu ROI com nossa abordagem orientada por dados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/contato');
                  }
                }}
              >
                Solicitar Análise Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:border-primary/50"
                onClick={() => {
                  const casesSection = document.getElementById('cases');
                  if (casesSection) {
                    casesSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    const servicesSection = document.getElementById('serviços');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                Ver Nossos Cases
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-6 md:pt-8 grid grid-cols-3 gap-2 md:gap-6"
            >
              {[
                { icon: <BarChart3 className="text-primary" />, value: 35, suffix: 'M', label: 'milhões gerados para nossos clientes' },
                { icon: <TrendingUp className="text-primary" />, value: 60, suffix: 'K+', label: 'Mais de 60 mil leads gerados' },
                { icon: <Target className="text-primary" />, value: 30, suffix: '+', label: 'Mais de 30 segmentos atendidos' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-1 md:mb-2">{stat.icon}</div>
                  <div className="text-lg md:text-2xl font-bold text-primary">
                    <CountUp end={stat.value} duration={2.5} decimals={stat.suffix === '%' ? 1 : 0} />
                    {stat.suffix}
                  </div>
                  <div className="text-[10px] sm:text-xs text-foreground/60 line-clamp-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 w-full max-w-xl mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-xl -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              
              <motion.div 
                className="relative high-ticket-card p-1 overflow-hidden rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 border border-primary/30 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                      className="w-[500px] h-[500px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-45 absolute -top-[450px] -left-[250px]"
                      animate={{ left: '100%' }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatType: 'loop',
                        ease: "easeInOut",
                        repeatDelay: 1
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Dashboard visualization */}
                <motion.div 
                  className="bg-card/80 backdrop-blur-md rounded-lg overflow-hidden p-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Dashboard header */}
                  <motion.div 
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Painel de Campanhas</h3>
                      <p className="text-xs text-foreground/60">Performance em tempo real</p>
                    </div>
                    <div className="flex gap-2">
                      {['dia', 'semana', 'mês'].map((period, i) => (
                        <motion.span 
                          key={period}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                          className={`text-xs px-3 py-1 rounded-full cursor-pointer ${
                            period === 'semana' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted text-foreground/60 hover:bg-muted/80'
                          }`}
                        >
                          {period.charAt(0).toUpperCase() + period.slice(1)}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Performance metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'Cliques', value: '25,431', change: '+12.5%' },
                      { label: 'Conversões', value: '1,987', change: '+18.2%' },
                      { label: 'CPC', value: 'R$1,28', change: '-5.3%' },
                      { label: 'Taxa de Conv.', value: '7,8%', change: '+3.1%' }
                    ].map((metric, i) => (
                      <motion.div 
                        key={i} 
                        className="bg-background/40 p-3 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + (i * 0.1) }}
                      >
                        <p className="text-xs text-foreground/60 mb-1">{metric.label}</p>
                        <div className="flex justify-between items-end">
                          <span className="text-lg font-semibold">{metric.value}</span>
                          <span className={`text-xs ${
                            metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                          }`}>{metric.change}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Mock chart */}
                  <motion.div 
                    className="w-full h-32 bg-background/40 rounded-lg overflow-hidden flex items-end p-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {[...Array(24)].map((_, i) => {
                      const height = 20 + Math.random() * 60;
                      return (
                        <motion.div 
                          key={i}
                          className="flex-1 mx-[1px] bg-primary"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.6, delay: 1 + (i * 0.03) }}
                        />
                      );
                    })}
                  </motion.div>
                  
                  {/* Active campaigns */}
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <h4 className="text-sm font-medium mb-3">Campanhas Ativas</h4>
                    <div className="space-y-2">
                      {[
                        { name: 'Google Search', performance: 92 },
                        { name: 'Meta Ads', performance: 84 },
                        { name: 'LinkedIn Sponsored', performance: 76 }
                      ].map((campaign, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.3 + (i * 0.1) }}
                        >
                          <span className="text-xs">{campaign.name}</span>
                          <div className="w-24 h-2 bg-muted/50 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              animate={{ width: `${campaign.performance}%` }}
                              transition={{ duration: 0.8, delay: 1.5 + (i * 0.1) }}
                            />
                          </div>
                          <span className="text-xs text-primary">{campaign.performance}%</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 