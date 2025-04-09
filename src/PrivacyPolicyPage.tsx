import React from 'react';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './App.css';

function PrivacyPolicyPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground relative" style={{
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
              className="frost-glass rounded-xl p-6 md:p-10"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Política de Privacidade
                <div className="absolute -bottom-2 left-0 h-1 bg-primary/50 rounded-full w-full" />
              </h1>
              
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                <p>
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
                
                <p>
                  A Lupi Mídias valoriza a privacidade de seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossos serviços, visita nosso site ou interage conosco.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Informações que Coletamos</h2>
                
                <h3 className="text-lg font-medium mt-6 mb-2">1.1 Informações fornecidas por você</h3>
                <p>
                  Podemos coletar informações que você nos fornece diretamente, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de identificação pessoal (nome, e-mail, telefone, empresa)</li>
                  <li>Informações de contato comercial</li>
                  <li>Informações de faturamento</li>
                  <li>Conteúdo de mensagens enviadas através de nossos formulários</li>
                  <li>Feedbacks e avaliações sobre nossos serviços</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-6 mb-2">1.2 Informações coletadas automaticamente</h3>
                <p>
                  Quando você visita nosso site, podemos coletar automaticamente:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de acesso e uso do site</li>
                  <li>Informações do dispositivo e navegador</li>
                  <li>Endereço IP e localização aproximada</li>
                  <li>Cookies e tecnologias similares</li>
                  <li>Dados de interação com nossos anúncios</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Como Utilizamos suas Informações</h2>
                <p>
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer e melhorar nossos serviços de marketing digital</li>
                  <li>Personalizar sua experiência com nossa empresa</li>
                  <li>Processar transações e gerenciar sua conta</li>
                  <li>Enviar comunicações relevantes sobre nossos serviços</li>
                  <li>Realizar análises de mercado e entender tendências</li>
                  <li>Cumprir obrigações legais e resolver disputas</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Compartilhamento de Informações</h2>
                <p>
                  Podemos compartilhar suas informações com:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Parceiros de negócios e fornecedores que nos auxiliam na prestação de serviços</li>
                  <li>Plataformas de publicidade (Google, Meta, LinkedIn, etc.) para gerenciamento de campanhas</li>
                  <li>Autoridades governamentais, quando exigido por lei</li>
                </ul>
                <p>
                  Não vendemos ou alugamos suas informações pessoais a terceiros.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Seus Direitos e Escolhas</h2>
                <p>
                  Você possui direitos relacionados às suas informações pessoais, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar e solicitar cópia das suas informações</li>
                  <li>Corrigir informações imprecisas ou incompletas</li>
                  <li>Solicitar a exclusão de suas informações</li>
                  <li>Retirar seu consentimento para certas atividades de processamento</li>
                  <li>Optar por não receber e-mails de marketing</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Segurança</h2>
                <p>
                  Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de suas informações.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Alterações na Política de Privacidade</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta política regularmente.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Contato</h2>
                <p>
                  Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco pelo e-mail: <a href="mailto:contato@lupimidias.com.br" className="text-primary hover:text-primary/80">contato@lupimidias.com.br</a>
                </p>
              </div>
            </motion.div>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyPolicyPage; 