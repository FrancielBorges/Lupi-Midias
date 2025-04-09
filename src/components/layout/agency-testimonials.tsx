import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

// Container component para manter consistência com outros componentes
const Container = ({ className, children, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`container mx-auto px-4 md:px-6 max-w-7xl ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export function AgencyTestimonials() {
  // Variantes de animação para container e itens
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Dados dos testimonials baseados na imagem
  const testimonials = [
    {
      id: 1,
      content: "Precisamos contratar mais 3 funcionários para dar conta da demanda! Só esse mês tivemos um aumento de 120% nas vendas através das campanhas. O ROI está incrível, cada R$1 investido está retornando R$8,5 em vendas!",
      highlight: "Aumento de 120% nas vendas",
      client: "Cliente E-commerce"
    },
    {
      id: 2,
      content: "Impressionante! Reduzimos o CPA em 47% e dobramos a taxa de conversão. As campanhas de Delivery trouxeram um público muito mais qualificado, o que aumentou nosso ticket médio em 35%.",
      highlight: "CPA reduzido em 47%",
      client: "Cliente Delivery"
    },
    {
      id: 3,
      content: "Os leads que chegam agora são perfeitos para nosso produto! Antes fechávamos 1 a cada 10 leads, agora estamos fechando 4 a cada 10. Já estamos negociando contratos anuais com 5 grandes empresas.",
      highlight: "Taxa de conversão de 40%",
      client: "Cliente B2B"
    },
    {
      id: 4,
      content: "Faturamos mais de R$750.000 no último trimestre com apenas R$15.000 investidos em mídia! Nosso e-commerce cresceu 85% em relação ao mesmo período do ano passado. Estamos expandindo a operação!",
      highlight: "50x de retorno sobre investimento",
      client: "Cliente Varejo"
    },
    {
      id: 5,
      content: "As campanhas segmentadas triplicaram nossos leads qualificados. Chegamos a um ponto onde cada lead que recebemos tem 70% de chance de fechar negócio. Nossa equipe comercial está extremamente satisfeita!",
      highlight: "Triplicamos os leads qualificados",
      client: "Cliente Serviços"
    },
    {
      id: 6,
      content: "Abrimos duas novas unidades graças ao aumento de 150% na demanda. O funil de vendas está operando com eficiência máxima e nosso custo de aquisição caiu para menos da metade. Resultado extraordinário!",
      highlight: "Expansão com 2 novas unidades",
      client: "Cliente Serviços"
    }
  ];

  return (
    <section id="cases" className="py-20 relative overflow-hidden">
      {/* Radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] opacity-70 -z-10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Resultados de Clientes
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Veja o que nossos clientes estão falando sobre os resultados que conseguimos para eles.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <div className="frost-glass rounded-lg p-6 h-full border border-border/30 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary rounded-full w-2 h-2 mr-2" />
                    <span className="text-sm font-medium text-primary">{testimonial.client}</span>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <Separator className="my-4 bg-border/30" />
                  
                  <div className="bg-primary/10 text-primary px-3 py-2 rounded-md text-sm font-medium mt-auto">
                    {testimonial.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => {
              const contactForm = document.getElementById('contact-form');
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contato';
              }
            }}
          >
            Quer resultados como esses? Fale Conosco
          </Button>
        </motion.div>
      </Container>
    </section>
  );
} 