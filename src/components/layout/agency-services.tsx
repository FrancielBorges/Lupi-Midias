import React from 'react';
import { Container } from './container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Globe, Search, ShoppingBag, Users, BarChart, Zap, LineChart, BadgePercent } from 'lucide-react';

// Componente para os ícones das plataformas de anúncios
const AdPlatformIcon = ({ platform, size = 18 }: { platform: string, size?: number }) => {
  switch (platform) {
    case 'Google':
    case 'Google Ads':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" width={size} height={size}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          <span className="text-sm font-medium">Google Ads</span>
        </div>
      );
    case 'Facebook':
    case 'Facebook Ads':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[#1877F2] rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" width={size * 0.65} height={size * 0.65} fill="white">
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
            </svg>
          </div>
          <span className="text-sm font-medium">Facebook Ads</span>
        </div>
      );
    case 'Instagram':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" width={size * 0.65} height={size * 0.65} fill="white">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.053.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.053.059-1.37.059-4.04 0-2.67-.01-2.987-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.053-.047-1.37-.059-4.04-.059zm0 3.063A5.135 5.135 0 1 1 12 17.135 5.135 5.135 0 0 1 12 6.865zm0 8.468A3.333 3.333 0 1 0 12 8.667a3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
            </svg>
          </div>
          <span className="text-sm font-medium">Instagram</span>
        </div>
      );
    case 'LinkedIn':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[#0077B5] rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" width={size * 0.65} height={size * 0.65} fill="white">
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
            </svg>
          </div>
          <span className="text-sm font-medium">LinkedIn</span>
        </div>
      );
    case 'TikTok':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-black rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" width={size * 0.65} height={size * 0.65} fill="white">
              <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-2.723l-3.404.01v10.683c0 .914-.515 1.711-1.273 2.117a2.596 2.596 0 0 1-1.322.361 2.595 2.595 0 0 1-2.594-2.595 2.595 2.595 0 0 1 3.916-2.233v-3.471a6.095 6.095 0 0 0-7.8 5.704 6.095 6.095 0 0 0 6.095 6.095 6.095 6.095 0 0 0 6.095-6.095v-5.446c1.582 1.13 3.49 1.703 5.428 1.626v-3.441c-.364.047-.73.07-1.095.07l.905-.072z" />
            </svg>
          </div>
          <span className="text-sm font-medium">TikTok</span>
        </div>
      );
    case 'YouTube':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[#FF0000] rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" width={size * 0.65} height={size * 0.65} fill="white">
              <path d="M23.5 6.19c-.28-1.04-1.08-1.86-2.1-2.14C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.4.55c-1.02.28-1.82 1.1-2.1 2.14C0 8.08 0 12 0 12s0 3.92.5 5.81c.28 1.04 1.08 1.86 2.1 2.14 1.88.55 9.4.55 9.4.55s7.52 0 9.4-.55c1.02-.28 1.82-1.1 2.1-2.14.5-1.89.5-5.81.5-5.81s0-3.92-.5-5.81zM9.5 15.5v-7l6.25 3.5-6.25 3.5z" />
            </svg>
          </div>
          <span className="text-sm font-medium">YouTube</span>
        </div>
      );
    case 'Display':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[#4285F4] rounded-full shadow-sm">
            <svg viewBox="0 0 24 24" width={size * 0.65} height={size * 0.65} fill="white">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8" stroke="white" strokeWidth="2" />
              <path d="M12 17v4" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-sm font-medium">Display</span>
        </div>
      );
    case 'Remarketing':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-primary rounded-full shadow-sm">
            <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="none">
              <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="white" strokeWidth="2" />
              <path d="M8 12L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-medium">Remarketing</span>
        </div>
      );
    default:
      return <span>{platform}</span>;
  }
};

const services = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'Google Ads',
    description: 'Estratégias personalizadas para campanhas de Search, Display e Shopping que geram conversões reais para seu negócio.',
    tags: ['Search', 'Display', 'Shopping', 'Remarketing']
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Meta Ads',
    description: 'Campanhas no Facebook e Instagram que atingem exatamente seu público-alvo com mensagens que convertem.',
    tags: ['Facebook', 'Instagram', 'Audience Network', 'Messenger']
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'LinkedIn Ads',
    description: 'Marketing B2B de alta performance para gerar leads qualificados e aumentar seu reconhecimento no mercado.',
    tags: ['Sponsored Content', 'Message Ads', 'Text Ads', 'Dynamic Ads']
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: 'E-commerce Ads',
    description: 'Aumente suas vendas online com estratégias específicas para plataformas de e-commerce e marketplaces.',
    tags: ['Google Shopping', 'Facebook Catalog', 'Amazon Ads', 'Marketplace Ads']
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Analytics Avançado',
    description: 'Análise profunda de dados com dashboards personalizados para otimizar constantemente suas campanhas.',
    tags: ['Data Studio', 'Dashboards', 'KPIs', 'Attribution']
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Integração SEO & PPC',
    description: 'Estratégias integradas que combinam o melhor do tráfego orgânico e pago para maximizar resultados.',
    tags: ['Pesquisa de Palavras-chave', 'Landing Pages', 'Estratégia de Conteúdo', 'CRO']
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Remarketing Avançado',
    description: 'Recupere visitantes que não converteram com campanhas inteligentes e segmentadas em múltiplos canais.',
    tags: ['Remarketing Dinâmico', 'Audiências', 'Multicanal', 'Anúncios Sequenciais']
  },
  {
    icon: <BadgePercent className="h-10 w-10 text-primary" />,
    title: 'Otimização de Performance',
    description: 'Otimização contínua baseada em dados para garantir o menor custo por aquisição e o máximo ROI.',
    tags: ['Teste A/B', 'Gestão de Lances', 'Índice de Qualidade', 'Rastreamento de Conversões']
  }
];

export function AgencyServices() {
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

  return (
    <section id="serviços" className="py-12 md:py-20 relative overflow-hidden">
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
      </div>
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 relative inline-block">
              Soluções de <span className="text-primary">Tráfego Pago</span> de Alta Performance
              <motion.div 
                className="absolute -bottom-2 left-1/2 h-1 bg-primary/50 rounded-full"
                initial={{ width: 0, x: '-50%' }}
                whileInView={{ width: '60%', x: '-30%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
            <p className="text-foreground/70 text-base md:text-lg">
              Estratégias personalizadas e orientadas por dados para maximizar seu ROI e gerar conversões reais.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mt-6 md:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              'Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube', 'Display', 'Remarketing'
            ].map((platform, i) => (
              <motion.div
                key={platform}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-full bg-card/50 backdrop-blur-md border border-primary/10 hover:bg-primary/10 transition-colors cursor-pointer ${i >= 3 ? 'hidden md:block' : ''}`}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(84, 218, 87, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + (i * 0.05) }}
              >
                <AdPlatformIcon platform={platform} size={i < 3 ? 16 : 18} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="frost-glass h-full">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/70 min-h-[60px] md:min-h-[80px]">
                    {service.description}
                  </CardDescription>
                  <Separator className="bg-border/30" />
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 