import React from 'react';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Search } from 'lucide-react';
import './App.css';
import { Button } from '@/components/ui/button';

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div 
      className="border-b relative z-10"
      style={{
        borderColor: 'rgba(84, 218, 87, 0.2)',
        borderBottomWidth: '1px'
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
        style={{ backgroundColor: 'transparent' }}
      >
        <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary group-hover:text-primary/80"
        >
          <ChevronDown className={`transition-colors ${isOpen ? "text-primary" : ""}`} size={20} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 16 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="pb-2 text-white">{answer}</div>
      </motion.div>
    </motion.div>
  );
}

function FAQCategory({ title, items }: { title: string; items: { question: string; answer: React.ReactNode }[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 relative inline-block text-white">
        {title}
        <div className="absolute -bottom-2 left-0 h-1 bg-primary/80 rounded-full w-full" />
      </h2>
      <div 
        className="rounded-xl p-6 border relative"
        style={{ 
          backgroundColor: 'transparent', 
          boxShadow: '0 0 10px rgba(84, 218, 87, 0.1)',
          borderColor: 'rgba(84, 218, 87, 0.3)'
        }}
      >
        <div 
          className="absolute inset-0 rounded-xl pointer-events-none" 
          style={{ backgroundColor: 'rgba(84, 218, 87, 0.03)' }} 
        />
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function FAQPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const servicesFAQs = [
    {
      question: 'Quais plataformas de tráfego pago vocês gerenciam?',
      answer: (
        <p>
          Gerenciamos campanhas nas principais plataformas de tráfego pago, incluindo Google Ads (Search, Display, Shopping), Meta Ads (Facebook e Instagram), LinkedIn Ads, TikTok Ads e YouTube Ads. Nossa equipe é certificada e possui expertise específica em cada uma dessas plataformas.
        </p>
      )
    },
    {
      question: 'Quanto devo investir em tráfego pago?',
      answer: (
        <div>
          <p>
            O investimento adequado em tráfego pago varia conforme diversos fatores, como:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Seu segmento de mercado e nível de competição</li>
            <li>Seus objetivos de marketing (branding, conversões, leads)</li>
            <li>Sua margem de lucro e ticket médio</li>
            <li>Ciclo de vendas do seu produto/serviço</li>
          </ul>
          <p className="mt-2">
            Realizamos uma análise inicial para recomendar o investimento ideal para seu caso específico, sempre buscando o melhor ROI possível.
          </p>
        </div>
      )
    },
    {
      question: 'Vocês oferecem serviços para pequenas empresas?',
      answer: (
        <p>
          Sim! Temos planos adequados para empresas de todos os portes. Para pequenas empresas, oferecemos pacotes iniciais com foco em resultados rápidos e retorno sobre investimento. Nossa abordagem é escalável e cresce conforme o desenvolvimento do seu negócio.
        </p>
      )
    },
    {
      question: 'Quanto tempo leva para ver resultados com tráfego pago?',
      answer: (
        <p>
          Os primeiros resultados já podem ser percebidos nos primeiros dias de campanha, principalmente em métricas como cliques, impressões e tráfego. Porém, para resultados consistentes em termos de conversões e ROI, normalmente recomendamos um período de 30 a 90 dias, que é quando conseguimos otimizar adequadamente as campanhas com base nos dados coletados.
        </p>
      )
    },
    {
      question: 'Vocês criam os anúncios ou preciso fornecer materiais prontos?',
      answer: (
        <p>
          Oferecemos um serviço completo que inclui a criação dos anúncios (textos, imagens e vídeos) alinhados à sua identidade visual e objetivos de marketing. Caso você já possua materiais, podemos utilizá-los ou adaptá-los para melhor performance nas plataformas. Nossa equipe de criação é especializada em desenvolver materiais otimizados para cada canal de tráfego pago.
        </p>
      )
    }
  ];
  
  const contractingFAQs = [
    {
      question: 'Como funciona o processo de contratação?',
      answer: (
        <div>
          <p>Nosso processo de contratação é simples e transparente:</p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>Reunião inicial para entender seu negócio e objetivos</li>
            <li>Análise do seu mercado e da concorrência</li>
            <li>Elaboração de proposta personalizada</li>
            <li>Após aprovação, definição do cronograma e início dos trabalhos</li>
            <li>Onboarding e configuração das estratégias iniciais</li>
            <li>Início das campanhas e monitoramento contínuo</li>
          </ol>
        </div>
      )
    },
    {
      question: 'Qual é o prazo mínimo de contrato?',
      answer: (
        <p>
          Geralmente trabalhamos com contratos mínimos de 3 meses, pois é o tempo necessário para implementar estratégias, testar hipóteses e otimizar as campanhas adequadamente. No entanto, temos flexibilidade para adaptar os prazos conforme as necessidades específicas do seu negócio.
        </p>
      )
    },
    {
      question: 'Como são calculados os honorários da agência?',
      answer: (
        <p>
          Nossos honorários são calculados com base na complexidade do projeto, número de plataformas, volume de campanhas e nível de personalização necessário. Trabalhamos com dois modelos principais: fee mensal fixo ou percentual sobre o investimento em mídia. Durante nossa proposta comercial, apresentaremos a opção mais adequada para o seu caso.
        </p>
      )
    },
    {
      question: 'Posso cancelar o serviço se não estiver satisfeito?',
      answer: (
        <p>
          Sim. Nossos contratos incluem uma cláusula de cancelamento com aviso prévio de 30 dias. No entanto, nosso compromisso é com a sua satisfação e resultados, por isso trabalhamos de forma transparente e colaborativa para ajustar as estratégias sempre que necessário antes de considerar um cancelamento.
        </p>
      )
    }
  ];
  
  const resultsFAQs = [
    {
      question: 'Como vocês medem e reportam os resultados?',
      answer: (
        <div>
          <p>
            Utilizamos uma combinação de ferramentas e métricas para medir e reportar resultados:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Dashboards personalizados com as principais métricas do seu negócio</li>
            <li>Relatórios periódicos detalhados (semanais ou mensais, conforme sua preferência)</li>
            <li>Reuniões de alinhamento para análise de resultados e ajustes estratégicos</li>
            <li>Plataformas como Google Analytics, Meta Business Suite, LinkedIn Campaign Manager, entre outras</li>
          </ul>
          <p className="mt-2">
            Todos os relatórios são personalizados para focar nas métricas mais relevantes para seu negócio.
          </p>
        </div>
      )
    },
    {
      question: 'Vocês garantem resultados específicos?',
      answer: (
        <p>
          Embora não possamos garantir resultados específicos devido a fatores externos que fogem ao nosso controle (como mudanças de algoritmo, ações da concorrência, sazonalidade de mercado), nos comprometemos a utilizar as melhores práticas e estratégias do mercado para maximizar seus resultados. Estabelecemos metas realistas baseadas em benchmarks do seu segmento e no histórico da sua conta, e trabalhamos incansavelmente para alcançá-las.
        </p>
      )
    },
    {
      question: 'O que acontece se as campanhas não performarem bem?',
      answer: (
        <p>
          Se uma campanha não estiver performando conforme o esperado, agimos rapidamente: analisamos os dados para identificar os gargalos, realizamos ajustes técnicos, testamos novas abordagens criativas e, se necessário, realocamos o orçamento para canais com melhor desempenho. Mantemos total transparência durante todo o processo e desenvolvemos planos de ação específicos para reverter a situação. Nosso objetivo é sempre otimizar continuamente para atingir e superar as metas estabelecidas.
        </p>
      )
    }
  ];
  
  const technicalFAQs = [
    {
      question: 'Preciso dar acesso às minhas contas de anúncio?',
      answer: (
        <p>
          Sim, precisamos de acesso às suas contas de anúncio para gerenciar adequadamente suas campanhas. Podemos trabalhar com contas já existentes ou criar novas contas em seu nome. Todo o acesso é tratado com máxima segurança e confidencialidade, e você sempre mantém a propriedade total das contas. Fornecemos instruções detalhadas sobre como conceder o acesso adequado sem comprometer a segurança.
        </p>
      )
    },
    {
      question: 'Vocês instalam pixel e códigos de rastreamento?',
      answer: (
        <p>
          Sim, a instalação correta de pixels (Facebook, TikTok), tags (Google) e outros códigos de rastreamento faz parte do nosso serviço. Nossa equipe técnica pode instalar esses elementos em seu site ou fornecer instruções detalhadas para sua equipe de TI. O rastreamento adequado é essencial para medir conversões, otimizar campanhas e criar públicos personalizados para remarketing.
        </p>
      )
    },
    {
      question: 'É possível integrar o tráfego pago com meu CRM ou sistema de vendas?',
      answer: (
        <p>
          Absolutamente! Incentivamos a integração do tráfego pago com seu CRM ou sistema de vendas para obter uma visão completa da jornada do cliente e calcular o ROI com precisão. Temos experiência com diversas integrações, incluindo Salesforce, HubSpot, RD Station, entre outros. Estas integrações permitem atribuição avançada de conversões e um entendimento mais profundo do impacto das campanhas em seus resultados de negócio.
        </p>
      )
    }
  ];
  
  const allFAQs = [
    ...servicesFAQs.map(faq => ({ ...faq, category: 'Serviços' })),
    ...contractingFAQs.map(faq => ({ ...faq, category: 'Contratação' })),
    ...resultsFAQs.map(faq => ({ ...faq, category: 'Resultados' })),
    ...technicalFAQs.map(faq => ({ ...faq, category: 'Aspectos Técnicos' }))
  ];
  
  const filteredFAQs = allFAQs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    React.Children.toArray(faq.answer).some(
      child => typeof child === 'string' && child.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  return (
    <div className="min-h-screen bg-background text-foreground relative" style={{
      backgroundImage: `
        radial-gradient(circle at 15% 50%, rgba(84, 218, 87, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 85% 30%, rgba(84, 218, 87, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 50% 70%, rgba(84, 218, 87, 0.12) 0%, transparent 45%)
      `,
      backgroundColor: "hsl(220 35% 5%)"
    }}>
      {/* Background floating lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-light w-[500px] h-[500px] left-[10%] top-[15%]" style={{ animationDelay: '0s' }} />
        <div className="floating-light w-[600px] h-[600px] right-[5%] top-[30%]" style={{ animationDelay: '-2s' }} />
        <div className="floating-light w-[550px] h-[550px] left-[20%] bottom-[10%]" style={{ animationDelay: '-4s' }} />
        <div className="floating-light w-[450px] h-[450px] right-[15%] bottom-[20%]" style={{ animationDelay: '-6s' }} />
        <div className="floating-light w-[350px] h-[350px] left-[40%] bottom-[40%]" style={{ animationDelay: '-3s', opacity: 0.2 }} />
        <div className="floating-light w-[250px] h-[250px] right-[35%] top-[60%]" style={{ animationDelay: '-5s', opacity: 0.25 }} />
      </div>
      
      <div className="relative z-10">
        <main className="pt-12 pb-20">
          <Container>
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ChevronLeft size={20} className="mr-1" />
              <span>Voltar para a página inicial</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-white">
                Perguntas Frequentes
                <div className="absolute -bottom-2 left-0 h-1 bg-primary/80 rounded-full w-full" />
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mb-10">
                Encontre respostas para as dúvidas mais comuns sobre nossos serviços de tráfego pago
                e como podemos ajudar a impulsionar seus resultados digitais.
              </p>
              
              <div className="relative mb-12 max-w-lg">
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none" 
                  style={{ backgroundColor: 'rgba(84, 218, 87, 0.03)' }} 
                />
                <input
                  type="text"
                  placeholder="Buscar perguntas frequentes..."
                  className="relative z-10 w-full py-3 px-4 pl-12 border rounded-full focus:outline-none text-white"
                  style={{ 
                    backgroundColor: 'transparent', 
                    borderColor: 'rgba(84, 218, 87, 0.3)'
                  }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-primary/70 z-10" size={18} />
              </div>
              
              {searchTerm ? (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">Resultados da busca</h2>
                  {filteredFAQs.length > 0 ? (
                    <div 
                      className="rounded-xl p-6 mb-8 border relative"
                      style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                        boxShadow: '0 0 10px rgba(84, 218, 87, 0.1)',
                        borderColor: 'rgba(84, 218, 87, 0.3)'
                      }}
                    >
                      <div 
                        className="absolute inset-0 rounded-xl pointer-events-none" 
                        style={{ backgroundColor: 'rgba(84, 218, 87, 0.03)' }} 
                      />
                      {filteredFAQs.map((faq, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          <div className="text-primary text-sm mb-1 font-medium">{faq.category}</div>
                          <FAQItem question={faq.question} answer={faq.answer} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div 
                      className="rounded-xl p-8 text-center border relative"
                      style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                        boxShadow: '0 0 10px rgba(84, 218, 87, 0.1)',
                        borderColor: 'rgba(84, 218, 87, 0.3)'
                      }}
                    >
                      <div 
                        className="absolute inset-0 rounded-xl pointer-events-none" 
                        style={{ backgroundColor: 'rgba(84, 218, 87, 0.03)' }} 
                      />
                      <p className="relative z-10 text-lg text-white">Nenhum resultado encontrado para "{searchTerm}"</p>
                      <p className="relative z-10 text-white/60 mt-2">Tente outros termos ou navegue pelas categorias abaixo</p>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <FAQCategory title="Serviços" items={servicesFAQs} />
                  <FAQCategory title="Contratação" items={contractingFAQs} />
                  <FAQCategory title="Resultados" items={resultsFAQs} />
                  <FAQCategory title="Aspectos Técnicos" items={technicalFAQs} />
                </>
              )}
              
              <div 
                className="mt-16 rounded-xl p-8 text-center border relative"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                  boxShadow: '0 0 10px rgba(84, 218, 87, 0.1)',
                  borderColor: 'rgba(84, 218, 87, 0.3)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-xl pointer-events-none" 
                  style={{ backgroundColor: 'rgba(84, 218, 87, 0.03)' }} 
                />
                <h2 className="relative z-10 text-2xl font-bold mb-4 text-white">Não encontrou o que procura?</h2>
                <p className="relative z-10 text-lg mb-6 max-w-2xl mx-auto text-white/90">
                  Entre em contato conosco para esclarecer qualquer dúvida sobre nossos serviços 
                  ou para uma avaliação personalizada do seu projeto.
                </p>
                <Button 
                  onClick={() => {
                    window.location.href = "/contato";
                  }}
                  className="relative z-10 bg-primary hover:bg-primary/90 text-gray-900 font-medium"
                >
                  Entre em contato
                </Button>
              </div>
            </motion.div>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default FAQPage; 