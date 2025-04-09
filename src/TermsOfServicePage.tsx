import React from 'react';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './App.css';

function TermsOfServicePage() {
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
              className="frost-glass rounded-xl p-6 md:p-10"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Termos de Serviço
                <div className="absolute -bottom-2 left-0 h-1 bg-primary/50 rounded-full w-full" />
              </h1>
              
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                <p>
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
                
                <p>
                  Estes Termos de Serviço ("Termos") regulam o uso dos serviços oferecidos pela Lupi Mídias ("nós", "nosso", "Lupi Mídias"), incluindo nosso site, ferramentas e serviços de marketing digital. Ao utilizar nossos serviços, você concorda com estes Termos.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Serviços Oferecidos</h2>
                <p>
                  A Lupi Mídias é uma agência especializada em tráfego pago que oferece serviços de marketing digital, incluindo, mas não limitado a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestão de campanhas de tráfego pago em diversas plataformas (Google Ads, Meta, LinkedIn, etc.)</li>
                  <li>Consultoria em estratégias de marketing digital</li>
                  <li>Análise de dados e relatórios de performance</li>
                  <li>Desenvolvimento de landing pages e materiais para campanhas</li>
                  <li>Otimização de conversão e aumento de ROI</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Contratação de Serviços</h2>
                <p>
                  A contratação de nossos serviços é formalizada por meio de proposta comercial específica que detalha o escopo, prazos, valores e condições particulares do serviço contratado. Estes Termos complementam a proposta comercial aceita pelo cliente.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Obrigações do Cliente</h2>
                <p>
                  Ao contratar nossos serviços, o cliente se compromete a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer informações precisas, completas e atualizadas necessárias para a execução dos serviços</li>
                  <li>Responder às solicitações da Lupi Mídias em tempo hábil para não prejudicar o andamento dos serviços</li>
                  <li>Manter ativos e com créditos suficientes as contas nas plataformas de anúncios (quando aplicável)</li>
                  <li>Aprovar os materiais e estratégias nos prazos estabelecidos</li>
                  <li>Efetuar os pagamentos conforme acordado na proposta comercial</li>
                  <li>Respeitar a legislação aplicável e os termos de uso das plataformas utilizadas</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Obrigações da Lupi Mídias</h2>
                <p>
                  A Lupi Mídias se compromete a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Executar os serviços conforme especificado na proposta comercial</li>
                  <li>Utilizar as melhores práticas de mercado na prestação dos serviços</li>
                  <li>Manter o cliente informado sobre o andamento e resultados das campanhas</li>
                  <li>Fornecer relatórios periódicos conforme acordado</li>
                  <li>Proteger as informações confidenciais do cliente</li>
                  <li>Buscar constantemente a otimização e melhoria dos resultados</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Pagamentos e Faturamento</h2>
                <p>
                  As condições de pagamento, valores e formas de faturamento serão especificadas na proposta comercial. Em caso de atraso no pagamento, poderão ser aplicadas as seguintes medidas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cobrança de juros de mora e correção monetária conforme legislação vigente</li>
                  <li>Suspensão dos serviços até a regularização do pagamento</li>
                  <li>Rescisão contratual em caso de atraso prolongado</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Propriedade Intelectual</h2>
                <p>
                  A Lupi Mídias respeita os direitos de propriedade intelectual e espera o mesmo de seus clientes. Para tanto:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>O cliente garante que possui os direitos sobre todos os materiais fornecidos para uso nas campanhas</li>
                  <li>Os relatórios, estratégias e conhecimentos desenvolvidos pela Lupi Mídias são de sua propriedade, ressalvado acordo específico em contrário</li>
                  <li>O uso da marca e materiais do cliente pela Lupi Mídias limita-se à execução dos serviços contratados</li>
                  <li>A Lupi Mídias poderá, mediante autorização prévia, utilizar os resultados obtidos como caso de sucesso em seu portfólio</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Prazo e Rescisão</h2>
                <p>
                  O prazo de prestação dos serviços e as condições de rescisão serão especificados na proposta comercial. De forma geral:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A prestação de serviços poderá ser por prazo determinado ou indeterminado, conforme acordado</li>
                  <li>Qualquer das partes poderá rescindir o contrato mediante aviso prévio conforme estabelecido na proposta</li>
                  <li>Em caso de rescisão antecipada, poderão ser aplicadas as multas ou compensações previstas na proposta</li>
                  <li>A rescisão não exime o cliente do pagamento dos serviços já prestados</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitação de Responsabilidade</h2>
                <p>
                  A Lupi Mídias empregará seus melhores esforços para atingir os resultados desejados, porém:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Não garante resultados específicos, uma vez que estes dependem de diversos fatores externos (mercado, concorrência, sazonalidade, etc.)</li>
                  <li>Não se responsabiliza por prejuízos decorrentes de informações incorretas fornecidas pelo cliente</li>
                  <li>Não se responsabiliza por mudanças nas políticas ou algoritmos das plataformas de anúncios</li>
                  <li>A responsabilidade da Lupi Mídias limita-se ao valor total pago pelo cliente pelos serviços</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">9. Confidencialidade</h2>
                <p>
                  Ambas as partes se comprometem a manter confidencialidade sobre as informações compartilhadas durante a prestação dos serviços, exceto quando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A informação já for de domínio público</li>
                  <li>A divulgação for exigida por lei ou decisão judicial</li>
                  <li>Houver consentimento prévio da outra parte</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">10. Alterações nos Termos</h2>
                <p>
                  A Lupi Mídias pode modificar estes Termos a qualquer momento, publicando a versão atualizada em seu site. As alterações entrarão em vigor imediatamente após sua publicação. Recomendamos que você revise estes Termos regularmente.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">11. Disposições Gerais</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil</li>
                  <li>Eventuais controvérsias serão resolvidas preferencialmente de forma amigável, ou, na impossibilidade, no foro da comarca de Lages, SC</li>
                  <li>A tolerância quanto ao descumprimento de qualquer obrigação não implica em renúncia ao direito de exigir o cumprimento da obrigação</li>
                  <li>Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">12. Contato</h2>
                <p>
                  Em caso de dúvidas sobre estes Termos, entre em contato conosco pelo e-mail: <a href="mailto:contato@lupimidias.com.br" className="text-primary hover:text-primary/80">contato@lupimidias.com.br</a>
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

export default TermsOfServicePage; 