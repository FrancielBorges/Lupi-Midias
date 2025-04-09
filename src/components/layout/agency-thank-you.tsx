import React, { useEffect } from 'react';
import { Container } from './container';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft, Calendar, MessageSquare, Phone, Mail } from 'lucide-react';

export function AgencyThankYou() {
  // Efeito para rolar para o topo quando a página é carregada
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center">
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
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative rounded-2xl border border-primary/20 overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative z-10 p-8 md:p-12 bg-card/40 text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle size={40} className="text-primary" />
              </motion.div>
              
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Obrigado pelo seu contato!
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 mb-8"
              >
                <p className="text-xl text-foreground/80">
                  Recebemos sua solicitação com sucesso.
                </p>
                <p className="text-foreground/60">
                  Um de nossos especialistas entrará em contato com você em breve para agendar sua consultoria gratuita e discutir como podemos impulsionar seus resultados com tráfego pago.
                </p>
              </motion.div>
              
              {/* Próximos passos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-background/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10 mb-8 max-w-lg mx-auto"
              >
                <h3 className="text-lg font-semibold mb-4">Próximos passos:</h3>
                
                <div className="space-y-4 text-left">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mt-1 flex-shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Agendamento</h4>
                      <p className="text-sm text-foreground/70">Nossa equipe entrará em contato em até 24 horas úteis para agendar sua consultoria</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mt-1 flex-shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Confirmação por WhatsApp</h4>
                      <p className="text-sm text-foreground/70">Você receberá uma mensagem no WhatsApp com todos os detalhes da sua consultoria</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mt-1 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Consultoria Personalizada</h4>
                      <p className="text-sm text-foreground/70">Nosso especialista irá analisar seu negócio e desenvolver uma estratégia sob medida</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center"
              >
                <Button 
                  className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 flex items-center"
                  onClick={() => window.location.href = "/"}
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Voltar para a página inicial
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-8 text-sm text-foreground/60"
          >
            <p className="mb-2">Dúvidas? Entre em contato:</p>
            <p>
              <a 
                href="https://wa.me/5549999827586?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                (49) 9 9982-7586
              </a> 
              {" ou "}
              <a 
                href="mailto:contato@lupimidias.com.br" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                contato@lupimidias.com.br
              </a>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}