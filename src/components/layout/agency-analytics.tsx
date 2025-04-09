import React from 'react';
import { Container } from './container';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, HelpCircle, TrendingUp, ChevronUp, Target, Percent, DollarSign, Sparkles, Award, Users, Zap } from 'lucide-react';

const lineChartData = [
  { name: 'Jan', conversoes: 65, cliques: 400, ctr: 6.5 },
  { name: 'Fev', conversoes: 59, cliques: 420, ctr: 5.9 },
  { name: 'Mar', conversoes: 80, cliques: 450, ctr: 8.0 },
  { name: 'Abr', conversoes: 81, cliques: 480, ctr: 8.1 },
  { name: 'Mai', conversoes: 56, cliques: 380, ctr: 5.6 },
  { name: 'Jun', conversoes: 55, cliques: 390, ctr: 5.5 },
  { name: 'Jul', conversoes: 75, cliques: 420, ctr: 7.5 },
  { name: 'Ago', conversoes: 95, cliques: 510, ctr: 9.5 },
  { name: 'Set', conversoes: 90, cliques: 490, ctr: 9.0 },
];

const barChartData = [
  { name: 'Google', value: 45, fill: '#4285F4' },
  { name: 'Facebook', value: 28, fill: '#1877F2' },
  { name: 'Instagram', value: 17, fill: '#E1306C' },
  { name: 'LinkedIn', value: 12, fill: '#0077B5' },
  { name: 'TikTok', value: 8, fill: '#000000' },
];

const pieChartData = [
  { name: 'Celular', value: 55, fill: '#FF6B6B' },
  { name: 'Computador', value: 40, fill: '#4ECDC4' },
  { name: 'Tablet', value: 5, fill: '#FFD166' },
];

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFD166', '#15552a'];

// Componentes de logo dos canais
interface ChannelIconProps {
  channel: string;
  size?: number;
  withBackground?: boolean;
}

const ChannelIcon = ({ channel, size = 16, withBackground = false }: ChannelIconProps) => {
  const IconContent = () => {
    switch (channel) {
      case 'Google':
      case 'Google Ads':
        return (
          <svg viewBox="0 0 24 24" width={size * 0.75} height={size * 0.75}>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        );
      case 'Facebook':
      case 'Facebook Ads':
        return (
          <svg viewBox="0 0 24 24" width={size * 0.75} height={size * 0.75} fill="white">
            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
          </svg>
        );
      case 'Instagram':
      case 'Instagram Ads':
        return (
          <svg viewBox="0 0 24 24" width={size * 0.75} height={size * 0.75} fill="white">
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.508 1.105 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.509.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.053.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.053.059-1.37.059-4.04 0-2.67-.01-2.987-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.053-.047-1.37-.059-4.04-.059zm0 3.063A5.135 5.135 0 1 1 12 17.135 5.135 5.135 0 0 1 12 6.865zm0 8.468A3.333 3.333 0 1 0 12 8.667a3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
          </svg>
        );
      case 'LinkedIn':
      case 'LinkedIn Ads':
        return (
          <svg viewBox="0 0 24 24" width={size * 0.75} height={size * 0.75} fill="white">
            <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
          </svg>
        );
      case 'TikTok':
      case 'TikTok Ads':
        return (
          <svg viewBox="0 0 24 24" width={size * 0.75} height={size * 0.75} fill="white">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-2.723l-3.404.01v10.683c0 .914-.515 1.711-1.273 2.117a2.596 2.596 0 0 1-1.322.361 2.595 2.595 0 0 1-2.594-2.595 2.595 2.595 0 0 1 3.916-2.233v-3.471a6.095 6.095 0 0 0-7.8 5.704 6.095 6.095 0 0 0 6.095 6.095 6.095 6.095 0 0 0 6.095-6.095v-5.446c1.582 1.13 3.49 1.703 5.428 1.626v-3.441c-.364.047-.73.07-1.095.07l.905-.072z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (withBackground) {
    const getBgColor = () => {
      switch (channel) {
        case 'Google':
        case 'Google Ads':
          return 'bg-white';
        case 'Facebook':
        case 'Facebook Ads':
          return 'bg-[#1877F2]';
        case 'Instagram':
        case 'Instagram Ads':
          return 'bg-[#E1306C]';
        case 'LinkedIn':
        case 'LinkedIn Ads':
          return 'bg-[#0077B5]';
        case 'TikTok':
        case 'TikTok Ads':
          return 'bg-black';
        default:
          return 'bg-muted';
      }
    };

    return (
      <div className={`w-[${size * 2}px] h-[${size * 2}px] ${getBgColor()} rounded-full flex items-center justify-center shadow-md`}>
        <IconContent />
      </div>
    );
  }

  return <IconContent />;
};

// Dados de gráficos atualizados com ícones de canais
const channelIcons = {
  Google: <ChannelIcon channel="Google" withBackground={true} size={36} />,
  Facebook: <ChannelIcon channel="Facebook" withBackground={true} size={36} />,
  Instagram: <ChannelIcon channel="Instagram" withBackground={true} size={36} />,
  LinkedIn: <ChannelIcon channel="LinkedIn" withBackground={true} size={36} />,
  TikTok: <ChannelIcon channel="TikTok" withBackground={true} size={36} />
};

// Componente para os benefícios
const BenefitTag = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <motion.div 
    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs flex items-center gap-1 inline-flex"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    whileHover={{ y: -3 }}
  >
    {icon}
    <span>{text}</span>
  </motion.div>
);

export function AgencyAnalytics() {
  return (
    <section id="analytics" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        
        {/* Data points background */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/30 rounded-full w-1 h-1"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -5 }}>
          <motion.path
            d="M0,50 Q300,300 600,150 T1000,300"
            fill="none"
            stroke="rgba(84, 218, 87, 0.15)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M200,0 Q400,200 800,100 T1200,200"
            fill="none"
            stroke="rgba(84, 218, 87, 0.15)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
        
        {/* Circular glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full blur-[150px] bg-primary/10 animate-pulse" style={{ animationDuration: '8s' }} />
      </div>
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-sm font-medium">Insights estratégicos</span>
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Analytics 360°</span> para Decisões Orientadas por Dados
            </h2>
            <p className="text-foreground/70 text-lg">
              Oferecemos uma análise completa 360° que transforma dados em insights acionáveis, orientando suas estratégias de marketing digital para resultados reais.
            </p>
            
            <motion.div 
              className="flex flex-wrap gap-3 justify-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <BenefitTag icon={<Target size={12} />} text="Estratégia personalizada" />
              <BenefitTag icon={<TrendingUp size={12} />} text="Crescimento ROI" />
              <BenefitTag icon={<Users size={12} />} text="Audiência qualificada" />
              <BenefitTag icon={<Zap size={12} />} text="Insights acionáveis" />
              <BenefitTag icon={<Award size={12} />} text="Resultados comprovados" />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="frost-glass rounded-xl p-6 shadow-lg relative overflow-hidden neon-border"
        >
          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px]" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                Dashboard de Performance
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15 }}
                >
                  <HelpCircle size={16} className="text-foreground/50" />
                </motion.span>
              </h3>
              <p className="text-sm text-foreground/60">Visualização completa dos seus resultados de tráfego pago</p>
            </div>
          </div>
          
          <Tabs defaultValue="performance" className="relative z-10">
            <TabsList className="grid md:grid-cols-4 grid-cols-3 w-full max-w-2xl mb-6 bg-background/40 backdrop-blur-md">
              <TabsTrigger value="performance" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Performance</TabsTrigger>
              <TabsTrigger value="channels" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Canais</TabsTrigger>
              <TabsTrigger value="devices" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Dispositivos</TabsTrigger>
              <TabsTrigger value="budget" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary hidden md:block">Orçamento</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Impressões', value: '1.2M', change: '+15.3%', benefit: 'Maior visibilidade', icon: <Users className="text-primary mr-2" size={16} /> },
                  { label: 'Cliques', value: '82.5K', change: '+8.7%', benefit: 'Mais tráfego qualificado', icon: <Target className="text-primary mr-2" size={16} /> },
                  { label: 'Conversões', value: '5,392', change: '+23.1%', benefit: 'Crescimento em vendas', icon: <Zap className="text-primary mr-2" size={16} /> },
                  { label: 'CPA Médio', value: 'R$25,00', change: '-12.6%', benefit: 'Redução de custos', icon: <DollarSign className="text-primary mr-2" size={16} /> }
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card key={i} className="frost-glass">
                      <CardContent className="p-4">
                        <div className="flex items-center text-sm text-foreground/60 mb-1">
                          {metric.icon}
                          {metric.label}
                        </div>
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <div className={`text-xs flex items-center mt-1 ${
                          metric.change.startsWith('+') 
                            ? 'text-green-500' 
                            : metric.label === 'CPA Médio' && metric.change.startsWith('-')
                              ? 'text-green-500'
                              : 'text-red-500'
                        }`}>
                          {metric.change.startsWith('+') || (metric.label === 'CPA Médio' && metric.change.startsWith('-')) 
                            ? <ChevronUp size={12} className="mr-1" /> 
                            : <ArrowUpRight size={12} className="mr-1" />
                          }
                          {metric.change}
                        </div>
                        <div className="text-xs text-primary mt-2 font-medium flex items-center">
                          <Sparkles size={10} className="mr-1" />
                          {metric.benefit}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <Card className="frost-glass">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-sm font-medium">Métricas de Conversão ao Longo do Tempo</h4>
                      <p className="text-xs text-foreground/60 mt-1">Visualize o crescimento constante das suas métricas</p>
                    </div>
                    <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                      Crescimento Consistente
                    </div>
                  </div>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={lineChartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis 
                          dataKey="name" 
                          stroke="rgba(255,255,255,0.5)"
                          tick={{ fill: '#ffffff', fontSize: 12 }}
                          tickMargin={5}
                        />
                        <YAxis stroke="rgba(255,255,255,0.5)" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="conversoes" 
                          stroke="#54da57" 
                          strokeWidth={3}
                          dot={{ r: 4, strokeWidth: 2, fill: '#1a1a1a' }}
                          activeDot={{ r: 6, fill: '#54da57' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="ctr" 
                          stroke="#888" 
                          strokeDasharray="5 5" 
                          strokeWidth={2} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="channels" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="frost-glass">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-sm font-medium">Distribuição por Canal</h4>
                        <p className="text-xs text-foreground/60 mt-1">Otimizamos seus investimentos nos canais mais eficazes</p>
                      </div>
                      <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                        Otimização de Orçamento
                      </div>
                    </div>
                    
                    <div className="flex justify-center my-4 space-x-4">
                      {Object.entries(channelIcons).map(([name, icon], index) => (
                        <motion.div 
                          key={name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                        >
                          <div className="flex flex-col items-center">
                            {icon}
                            <span className="text-xs mt-2">{name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={barChartData}
                          layout="vertical"
                          margin={{ top: 5, right: 50, left: 70, bottom: 5 }}
                          barSize={30}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis 
                            type="number"
                            stroke="rgba(255,255,255,0.5)" 
                            tickFormatter={(value) => `${value}%`}
                          />
                          <YAxis 
                            dataKey="name" 
                            type="category"
                            stroke="rgba(255,255,255,0.7)"
                            tick={{ fill: '#ffffff', fontSize: 12 }}
                            tickLine={false}
                            width={70}
                          />
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
                            labelStyle={{ color: '#fff' }}
                            formatter={(value) => [`${value}%`, 'Investimento']}
                          />
                          <Bar 
                            dataKey="value" 
                            name="Distribuição de Investimento"
                            radius={[0, 4, 4, 0]} 
                            label={{ 
                              position: 'right', 
                              fill: '#ffffff',
                              fontSize: 12,
                              formatter: (value: number) => `${value}%` 
                            }}
                          >
                            {barChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <Separator className="my-4 bg-border/30" />

                    <div className="grid grid-cols-5 gap-2 mt-3">
                      <div className="col-span-5 text-xs text-foreground/70 mb-1">Crescimento por plataforma (último trimestre):</div>
                      {barChartData.map((channel, index) => (
                        <div key={index} className="bg-background/30 p-2 rounded-lg text-center">
                          <div 
                            className="w-3 h-3 rounded-full mx-auto mb-1"
                            style={{ backgroundColor: channel.fill }}
                          />
                          <div className="text-xs font-medium">{channel.name}</div>
                          <div className={`text-xs ${index < 2 ? 'text-green-400' : index < 4 ? 'text-amber-400' : 'text-blue-400'}`}>
                            {index === 0 ? '+12.5%' : index === 1 ? '+8.3%' : index === 2 ? '+15.2%' : index === 3 ? '+5.4%' : '+21.7%'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="frost-glass">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-sm font-medium">Performance por Canal</h4>
                          <p className="text-xs text-foreground/60 mt-1">Compare o desempenho entre canais e maximize seu ROI</p>
                        </div>
                        <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                          ROI Maximizado
                        </div>
                      </div>
                      <div className="space-y-4">
                        {[
                          { name: 'Google Ads', conversion: '6.3%', cpa: 'R$19,50', roi: '280%' },
                          { name: 'Facebook Ads', conversion: '4.8%', cpa: 'R$23,00', roi: '210%' },
                          { name: 'Instagram Ads', conversion: '5.1%', cpa: 'R$21,40', roi: '230%' },
                          { name: 'LinkedIn Ads', conversion: '3.7%', cpa: 'R$26,80', roi: '190%' }
                        ].map((channel, i) => (
                          <div key={i} className="relative">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium flex items-center">
                                <ChannelIcon channel={channel.name} />
                                {channel.name}
                              </span>
                              <span className="text-xs text-foreground/60">Conversão: {channel.conversion}</span>
                            </div>
                            <div className="h-2 w-full bg-background/60 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-primary rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${parseFloat(channel.conversion) * 10}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                              />
                            </div>
                            <div className="flex justify-between mt-1 text-xs text-foreground/60">
                              <span>CPA: {channel.cpa}</span>
                              <span>ROI: {channel.roi}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="frost-glass">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-sm font-medium">Dispositivos</h4>
                          <p className="text-xs text-foreground/60 mt-1">Conheça seu público em diferentes plataformas</p>
                        </div>
                        <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                          Presença Multiplataforma
                        </div>
                      </div>
                      <div className="h-60 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <Pie
                              data={pieChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={65}
                              fill="#8884d8"
                              paddingAngle={5}
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value}%`}
                              labelLine={true}
                            >
                              {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
                              labelStyle={{ color: '#fff' }}
                              formatter={(value) => [`${value}%`]}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="flex justify-center space-x-4 mt-5">
                        {pieChartData.map((device, index) => (
                          <div key={index} className="bg-background/30 px-3 py-2 rounded-lg flex items-center">
                            <div 
                              className="w-4 h-4 rounded-full mr-2"
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <div className="text-sm">
                              <span className="font-medium">{device.value}%</span> {device.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="devices" className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <Card className="frost-glass">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-sm font-medium">Distribuição por Dispositivo</h4>
                        <p className="text-xs text-foreground/60 mt-1">Adapte suas campanhas para o comportamento do usuário</p>
                      </div>
                      <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                        Experiência Otimizada
                      </div>
                    </div>
                    <div className="h-80 flex items-center justify-center">
                      <ResponsiveContainer width="70%" height="70%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            outerRadius={55}
                            fill="#8884d8"
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
                            labelStyle={{ color: '#fff' }}
                            formatter={(value) => [`${value}%`]}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {pieChartData.map((device, index) => (
                        <div key={index} className="bg-background/30 p-2 rounded-lg flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          />
                          <div className="text-xs">
                            {device.name}: <span className="font-medium">{device.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="frost-glass">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-sm font-medium">Performance por Dispositivo</h4>
                        <p className="text-xs text-foreground/60 mt-1">Entenda o comportamento de conversão em cada dispositivo</p>
                      </div>
                      <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                        Conversões Personalizadas
                      </div>
                    </div>
                    <div className="space-y-6">
                      {pieChartData.map((device, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{device.name}</span>
                            <span className="text-xs text-foreground/60">{device.value}% do tráfego</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { label: 'CTR', value: device.name === 'Computador' ? '4.2%' : device.name === 'Celular' ? '4.5%' : '4.0%' },
                              { label: 'Conversão', value: device.name === 'Computador' ? '6.8%' : device.name === 'Celular' ? '8.2%' : '5.5%' },
                              { label: 'CPA', value: device.name === 'Computador' ? 'R$21,40' : device.name === 'Celular' ? 'R$18,30' : 'R$24,50' }
                            ].map((metric, j) => (
                              <div key={j} className="bg-background/30 rounded-lg p-2">
                                <div className="text-xs text-foreground/60">{metric.label}</div>
                                <div className="text-base font-medium">{metric.value}</div>
                              </div>
                            ))}
                          </div>
                          {i < pieChartData.length - 1 && <Separator className="bg-border/30" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="budget" className="space-y-4">
              <div className="grid grid-cols-3 gap-6">
                <Card className="frost-glass col-span-2">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-sm font-medium">Desempenho do Orçamento</h4>
                        <p className="text-xs text-foreground/60 mt-1">Visualize como seus investimentos geram retorno</p>
                      </div>
                      <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                        Investimento Estratégico
                      </div>
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: 'Google', budget: 12000, spent: 10800, conversions: 580 },
                            { name: 'Facebook', budget: 8000, spent: 7600, conversions: 420 },
                            { name: 'Instagram', budget: 6000, spent: 5800, conversions: 310 },
                            { name: 'LinkedIn', budget: 4000, spent: 3200, conversions: 150 },
                            { name: 'TikTok', budget: 2000, spent: 1700, conversions: 95 },
                          ]}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                          <YAxis stroke="rgba(255,255,255,0.5)" />
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
                            labelStyle={{ color: '#fff' }}
                          />
                          <Bar dataKey="budget" fill="#54da57" radius={[4, 4, 0, 0]} opacity={0.3} />
                          <Bar dataKey="spent" fill="#54da57" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="frost-glass">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-sm font-medium">Resumo do Orçamento</h4>
                        <p className="text-xs text-foreground/60 mt-1">Acompanhe e otimize seus investimentos</p>
                      </div>
                      <div className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">
                        ROI Maximizado
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-foreground/60">Orçamento Total</span>
                          <span className="text-base font-medium">R$ 32.000,00</span>
                        </div>
                        <div className="h-2 w-full bg-background/60 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '90%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-foreground/60">Utilizado: 90%</span>
                          <span className="text-xs text-foreground/60">R$ 29.100,00</span>
                        </div>
                      </div>
                      
                      <Separator className="bg-border/30" />
                      
                      <div className="space-y-3">
                        <h5 className="text-xs font-medium text-foreground/60 mb-2">Desempenho por Canal</h5>
                        {[
                          { name: 'Google Ads', budget: '37.5%', spent: '90%', cpa: 'R$12,80' },
                          { name: 'Facebook Ads', budget: '25%', spent: '95%', cpa: 'R$13,50' },
                          { name: 'Instagram Ads', budget: '18.75%', spent: '96.7%', cpa: 'R$14,20' },
                          { name: 'LinkedIn Ads', budget: '12.5%', spent: '80%', cpa: 'R$17,30' },
                          { name: 'TikTok Ads', budget: '6.25%', spent: '85%', cpa: 'R$10,90' }
                        ].map((channel, i) => (
                          <div key={i} className="flex items-center gap-3 bg-background/20 px-3 py-2 rounded-lg">
                            <ChannelIcon channel={channel.name} size={22} withBackground={true} />
                            <div className="flex-1 text-right">
                              <div className="text-xs text-foreground/60">CPA: {channel.cpa}</div>
                              <div className="text-xs text-primary">{channel.spent} utilizado</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <div className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
              onClick={() => {
                const element = document.getElementById('solicitar-analise');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Solicitar Análise 360° Gratuita
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 