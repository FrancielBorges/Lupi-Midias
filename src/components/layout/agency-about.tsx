import React from 'react';
import { Container } from './container';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Users, Target, Lightbulb, Award, Rocket, TrendingUp } from 'lucide-react';

// Placeholder para imagens - substitua pelos caminhos reais das imagens
const LOGO_IMAGE = '/icon.png'; // Usando o ícone da logo que contém o lobo
const TEAM_WORK_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

// Tipos para os componentes
interface CompanyValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatisticProps {
  value: string;
  label: string;
}

// Componente para os valores da empresa
const CompanyValue = ({ icon, title, description }: CompanyValueProps) => {
  return (
    <motion.div 
      className="flex gap-4 p-5 rounded-xl bg-card/40 backdrop-blur-sm border border-border/20 h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(84, 218, 87, 0.15)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="mt-1 bg-primary/10 p-2.5 rounded-lg text-primary flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </motion.div>
  );
};

// Componente para as estatísticas
const Statistic = ({ value, label }: StatisticProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl font-bold text-primary mb-1">{value}</span>
      <span className="text-sm text-foreground/70">{label}</span>
    </div>
  );
};

export function AgencyAbout() {
  return (
    <section id="sobre-nós" className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
              Sobre Nós
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Juntando forças para impulsionar o seu negócio
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 text-lg"
          >
            Com 5 anos de experiência no mercado, nossa agência oferece soluções completas de tráfego pago 
            para negócios de todos os nichos e portes.
          </motion.p>
        </div>

        {/* O Espírito do Lobo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-background/20 p-8 border border-primary/10 relative flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <picture>
                  <source srcSet="/icon.webp" type="image/webp" />
                  <motion.img
                    src={LOGO_IMAGE}
                    alt="Lobo - símbolo da Lupi Mídias"
                    className="max-h-[250px] object-contain z-10"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      filter: "drop-shadow(0 0 12px rgba(84, 218, 87, 0.5))"
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </picture>
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] z-0 opacity-70"></div>
              </div>
              <div className="text-center mt-6 text-sm text-foreground/70 italic max-w-md">
                "Assim como os lobos, trabalhamos em equipe para alcançar objetivos extraordinários"
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border-4 border-primary/20 rounded-2xl -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-semibold">O Espírito do Lobo</h3>
            <p className="text-foreground/80">
              O nome "Lupi Mídias" tem sua origem na palavra latina para lobo, refletindo a força e 
              espírito de colaboração que nos inspira. Assim como uma alcateia, trabalhamos em equipe, 
              com cada membro desempenhando um papel vital no sucesso coletivo.
            </p>
            <p className="text-foreground/80">
              Adotamos esta filosofia em nosso trabalho diário, onde cada especialista contribui com sua 
              expertise única para criar estratégias completas e eficientes. Como os lobos, somos ágeis, 
              adaptáveis e focados em resultados.
            </p>
            
            <Separator className="bg-border/20 my-5" />
            
            <h3 className="text-2xl font-semibold">Nossa Abordagem</h3>
            <p className="text-foreground/80">
              Desenvolvemos soluções completas para empresas que buscam crescimento através do ambiente digital. 
              Desde negócios locais até e-commerces e infoprodutos, oferecemos tudo o que nossos clientes 
              precisam para começar a vender utilizando a internet e anúncios eficientes.
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="mb-20 relative">
          {/* Removendo silhueta de lobo do background */}
          <div className="absolute -z-10 w-full h-full overflow-hidden pointer-events-none">
            {/* Efeito pulsante global */}
            <motion.div
              className="absolute left-1/2 top-40 -translate-x-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[60px]"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-semibold mb-3">Nossos Valores</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Princípios fundamentais que guiam nossa atuação e parceria com cada cliente
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              {
                icon: <Target size={24} />,
                title: "Orientação por Resultados",
                description: "Focamos em métricas que realmente importam para o crescimento do seu negócio."
              },
              {
                icon: <Lightbulb size={24} />,
                title: "Inovação Constante",
                description: "Estamos sempre atualizados com as últimas tendências e tecnologias do mercado."
              },
              {
                icon: <Users size={24} />,
                title: "Parceria Genuína",
                description: "Tratamos o negócio dos nossos clientes como se fosse o nosso próprio."
              },
              {
                icon: <Award size={24} />,
                title: "Excelência",
                description: "Buscamos a perfeição em cada detalhe das nossas estratégias e campanhas."
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Crescimento Sustentável",
                description: "Desenvolvemos estratégias que garantem resultados consistentes a longo prazo."
              },
              {
                icon: <Rocket size={24} />,
                title: "Agilidade",
                description: "Respondemos rapidamente às mudanças do mercado e às necessidades dos clientes."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <CompanyValue {...value} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Números */}
        <div className="mb-12">
          <div className="relative p-8 lg:p-10 rounded-2xl overflow-hidden border border-border/20 backdrop-blur-sm">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/30 -z-10" />
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-semibold mb-2">Nosso Impacto em Números</h3>
                <p className="text-foreground/70">
                  O que conseguimos alcançar para nossos clientes ao longo dos anos
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "30+", label: "Empresas assessoradas no Brasil" },
                  { value: "R$35M+", label: "Gerados em Vendas" },
                  { value: "60K+", label: "Leads Gerados" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Statistic {...stat} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 