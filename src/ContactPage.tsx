import React from 'react';
import { Container } from '@/components/layout/container';
import { Footer } from '@/components/layout/footer';
import { Link } from 'react-router-dom';
import { ChevronLeft, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import './App.css';

function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // O Netlify capturará o envio do formulário automaticamente
    // Esta função é mantida para garantir compatibilidade com testes locais
    // Em produção, o Netlify gerenciará o redirecionamento
    if (window.location.hostname !== 'localhost') {
      // Em desenvolvimento, ainda redirecionamos manualmente
      window.location.href = '/obrigado';
    }
  };

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
                Entre em Contato
                <div className="absolute -bottom-2 left-0 h-1 bg-primary/80 rounded-full w-full" />
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mb-10">
                Estamos prontos para ajudar a impulsionar seus resultados digitais.
                Preencha o formulário abaixo ou use um de nossos canais de contato.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <div 
                    className="rounded-xl p-8 border relative h-full"
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
                    
                    <form 
                      name="contact" 
                      method="POST" 
                      data-netlify="true" 
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit} 
                      className="relative z-10 space-y-6"
                      action="/obrigado"
                    >
                      {/* Campo oculto necessário para o Netlify Forms */}
                      <input type="hidden" name="form-name" value="contact" />
                      
                      {/* Campo honeypot para evitar spam */}
                      <p className="hidden">
                        <label>
                          Não preencha este campo se você for humano: <input name="bot-field" />
                        </label>
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                            Nome completo *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            style={{ borderColor: 'rgba(84, 218, 87, 0.3)' }}
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                            E-mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            style={{ borderColor: 'rgba(84, 218, 87, 0.3)' }}
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                            Empresa
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            style={{ borderColor: 'rgba(84, 218, 87, 0.3)' }}
                            placeholder="Nome da sua empresa"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                            Telefone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            style={{ borderColor: 'rgba(84, 218, 87, 0.3)' }}
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
                          Assunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          style={{ borderColor: 'rgba(84, 218, 87, 0.3)' }}
                        >
                          <option value="" disabled selected className="bg-card text-foreground">Selecione um assunto</option>
                          <option value="proposta" className="bg-card text-foreground">Solicitar proposta</option>
                          <option value="duvida" className="bg-card text-foreground">Dúvida sobre serviços</option>
                          <option value="parceria" className="bg-card text-foreground">Proposta de parceria</option>
                          <option value="outro" className="bg-card text-foreground">Outro assunto</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                          Mensagem *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          style={{ borderColor: 'rgba(84, 218, 87, 0.3)' }}
                          placeholder="Como podemos ajudar?"
                        ></textarea>
                      </div>
                      
                      <div>
                        <Button 
                          type="submit"
                          className="bg-primary hover:bg-primary/90 text-gray-900 font-medium px-6 py-3"
                        >
                          <Send size={16} className="mr-2" />
                          Enviar mensagem
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div>
                  <div 
                    className="rounded-xl p-8 border relative mb-6"
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
                    
                    <h3 className="text-xl font-semibold mb-6 text-white relative z-10">Informações de Contato</h3>
                    
                    <ul className="space-y-6 relative z-10">
                      <li className="flex items-start">
                        <MapPin className="text-primary flex-shrink-0 mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-white font-medium">Endereço</p>
                          <p className="text-white/70 text-sm">Lages, SC</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Phone className="text-primary flex-shrink-0 mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-white font-medium">Telefone</p>
                          <a href="tel:+5549999827586" className="text-white/70 text-sm hover:text-primary transition-colors">
                            (49) 9 9982-7586
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Mail className="text-primary flex-shrink-0 mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-white font-medium">E-mail</p>
                          <a href="mailto:contato@lupimidias.com.br" className="text-white/70 text-sm hover:text-primary transition-colors">
                            contato@lupimidias.com.br
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Clock className="text-primary flex-shrink-0 mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-white font-medium">Horário de Atendimento</p>
                          <p className="text-white/70 text-sm">Segunda à Sexta: 09h às 18h</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div 
                    className="rounded-xl p-8 border relative"
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
                    
                    <h3 className="text-xl font-semibold mb-4 text-white relative z-10">Análise Gratuita</h3>
                    <p className="text-white/70 text-sm mb-4 relative z-10">
                      Solicite uma análise gratuita das suas campanhas e descubra oportunidades para melhorar seus resultados.
                    </p>
                    <Button 
                      className="bg-white hover:bg-white/90 text-gray-900 font-medium w-full relative z-10"
                      onClick={() => {
                        const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
                        if (subjectSelect) {
                          subjectSelect.value = 'proposta';
                        }
                        document.getElementById('message')?.focus();
                      }}
                    >
                      Solicitar análise gratuita
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage; 