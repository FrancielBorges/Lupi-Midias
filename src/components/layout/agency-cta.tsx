import React, { FormEvent } from 'react';
import { Container } from './container';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export function AgencyCTA() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Esta função permite um feedback visual para o usuário
    // mas o Netlify Forms irá capturar e enviar o formulário automaticamente
    // para o e-mail configurado (fraancieelj@gmail.com)
    window.location.href = '/obrigado';
  };

  return (
    <section id="contact-form" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-60" />
        
        {/* Subtle animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/30 rounded-full w-1 h-1"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, -Math.random() * 30, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="relative rounded-2xl border border-primary/20 overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative z-10 p-8 md:p-12 bg-card/40">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Amplie seus <span className="text-primary">Resultados</span> com uma Estratégia Digital de Alta Performance
                  </motion.h2>
                  
                  <motion.p
                    className="text-foreground/70 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Agende uma consultoria gratuita com nossos especialistas e descubra como podemos transformar seu investimento em marketing digital em resultados mensuráveis e escaláveis.
                  </motion.p>
                  
                  <div className="space-y-4">
                    {[
                      'Análise completa das suas campanhas atuais',
                      'Identificação de oportunidades não exploradas',
                      'Proposta personalizada baseada em dados',
                      'Plano de ação para implementação imediata'
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                      >
                        <Check className="text-primary shrink-0 mt-1" size={16} />
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-background/20 rounded-xl p-6 backdrop-blur-sm border border-primary/10">
                  <h3 className="text-xl font-bold mb-6">Agende sua Consultoria Gratuita</h3>
                  
                  <form 
                    id="consultoria-form"
                    name="consultoria"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="relative z-10 mt-8 max-w-xl mx-auto"
                    netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="consultoria" />
                    
                    {/* Campo honeypot para evitar spam */}
                    <p className="hidden">
                      <label>
                        Não preencha este campo se você for humano: <input name="bot-field" />
                      </label>
                    </p>
                    
                    <div className="grid gap-6 mb-8">
                      <div>
                        <label className="text-sm text-foreground/70 mb-1 block">Nome</label>
                        <input 
                          type="text" 
                          name="nome"
                          required
                          className="w-full bg-background/50 border border-primary/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" 
                          placeholder="Seu nome" 
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-foreground/70 mb-1 block">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          className="w-full bg-background/50 border border-primary/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" 
                          placeholder="seuemail@exemplo.com" 
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-foreground/70 mb-1 block">Empresa</label>
                        <input 
                          type="text" 
                          name="empresa"
                          required
                          className="w-full bg-background/50 border border-primary/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" 
                          placeholder="Nome da sua empresa" 
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-foreground/70 mb-1 block">Orçamento Mensal em Anúncios</label>
                        <select 
                          name="orcamento"
                          required
                          className="w-full bg-background/50 border border-primary/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                        >
                          <option value="">Selecione uma opção</option>
                          <option value="5000">Até R$ 5.000</option>
                          <option value="10000">R$ 5.000 a R$ 10.000</option>
                          <option value="30000">R$ 10.000 a R$ 30.000</option>
                          <option value="more">Mais de R$ 30.000</option>
                        </select>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                        <span className="mr-2">Solicitar Consultoria</span>
                        <ArrowRight size={16} />
                      </Button>
                    </motion.div>
                    
                    <p className="text-xs text-center text-foreground/60 mt-4">
                      Ao enviar, você concorda com nossa política de privacidade e termos de uso.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 