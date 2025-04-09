import React from 'react';
import { Container } from './container';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente para exibir os ícones das redes sociais de publicidade
interface AdPlatformIconProps {
  platform: string;
  size?: number;
}

const AdPlatformIcon: React.FC<AdPlatformIconProps> = ({ platform, size = 20 }) => {
  switch (platform) {
    case 'google':
      return (
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm mr-2">
            <svg viewBox="0 0 24 24" width={size} height={size}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          <span className="text-sm">Google Ads</span>
        </div>
      );
    case 'meta':
      return (
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-[#1877F2] rounded-full shadow-sm mr-2">
            <svg viewBox="0 0 24 24" width={size * 0.7} height={size * 0.7} fill="white">
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
            </svg>
          </div>
          <span className="text-sm">Meta Ads</span>
        </div>
      );
    case 'instagram':
      return (
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full shadow-sm mr-2">
            <svg viewBox="0 0 24 24" width={size * 0.7} height={size * 0.7} fill="white">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.053.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.053.059-1.37.059-4.04 0-2.67-.01-2.987-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.053-.047-1.37-.059-4.04-.059zm0 3.063A5.135 5.135 0 1 1 12 17.135 5.135 5.135 0 0 1 12 6.865zm0 8.468A3.333 3.333 0 1 0 12 8.667a3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
            </svg>
          </div>
          <span className="text-sm">Instagram Ads</span>
        </div>
      );
    case 'linkedin':
      return (
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-[#0077B5] rounded-full shadow-sm mr-2">
            <svg viewBox="0 0 24 24" width={size * 0.7} height={size * 0.7} fill="white">
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
            </svg>
          </div>
          <span className="text-sm">LinkedIn Ads</span>
        </div>
      );
    case 'tiktok':
      return (
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-black rounded-full shadow-sm mr-2">
            <svg viewBox="0 0 24 24" width={size * 0.7} height={size * 0.7} fill="white">
              <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-2.723l-3.404.01v10.683c0 .914-.515 1.711-1.273 2.117a2.596 2.596 0 0 1-1.322.361 2.595 2.595 0 0 1-2.594-2.595 2.595 2.595 0 0 1 3.916-2.233v-3.471a6.095 6.095 0 0 0-7.8 5.704 6.095 6.095 0 0 0 6.095 6.095 6.095 6.095 0 0 0 6.095-6.095v-5.446c1.582 1.13 3.49 1.703 5.428 1.626v-3.441c-.364.047-.73.07-1.095.07l.905-.072z" />
            </svg>
          </div>
          <span className="text-sm">TikTok Ads</span>
        </div>
      );
    case 'analytics':
      return (
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-primary/20 rounded-full shadow-sm mr-2">
            <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#54da57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V12L16 14" stroke="#54da57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm">Analytics 360°</span>
        </div>
      );
    default:
      return null;
  }
};

export function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="py-16 border-t border-border/40 bg-card/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] bg-primary/5 -z-1" />
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full blur-[100px] bg-primary/5 -z-1" />
      
      <Container>
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img src="/logo.png" alt="Lupi Mídias" className="h-10" />
              </picture>
            </div>
            <p className="text-sm text-foreground/70 mb-6 max-w-md">
              Especialistas em tráfego pago que transformam investimentos em resultados reais para empresas de todos os portes.
            </p>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex space-x-3"
            >
              {[
                { icon: <Facebook size={16} />, name: 'facebook', color: 'bg-[#1877F2]' },
                { icon: <Instagram size={16} />, name: 'instagram', color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
                { icon: <Linkedin size={16} />, name: 'linkedin', color: 'bg-[#0077B5]' },
                { icon: <Twitter size={16} />, name: 'twitter', color: 'bg-[#1DA1F2]' }
              ].map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.name === 'instagram' ? 'https://instagram.com/lupimidias' : 
                       social.name === 'linkedin' ? 'https://www.linkedin.com/company/lupi-m%C3%ADdias' : 
                       social.name === 'facebook' ? 'https://www.facebook.com/assessorialupi' :
                       `#${social.name}`} 
                  variants={fadeInUp}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                  target={social.name === 'instagram' || social.name === 'linkedin' || social.name === 'facebook' ? '_blank' : undefined}
                  rel={social.name === 'instagram' || social.name === 'linkedin' || social.name === 'facebook' ? 'noopener noreferrer' : undefined}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-1">
            <h3 className="font-medium mb-5 text-lg">Soluções de Tráfego Pago</h3>
            <ul className="space-y-4">
              {[
                { platform: 'google', href: '#serviços' },
                { platform: 'meta', href: '#serviços' },
                { platform: 'instagram', href: '#serviços' },
                { platform: 'linkedin', href: '#serviços' },
                { platform: 'tiktok', href: '#serviços' }
              ].map((item) => (
                <motion.li 
                  key={item.platform} 
                  whileHover={{ x: 5 }} 
                  transition={{ duration: 0.2 }}
                  className="transform transition-transform"
                >
                  <a 
                    href={item.href} 
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <AdPlatformIcon platform={item.platform} />
                  </a>
                </motion.li>
              ))}
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="transform transition-transform"
              >
                <a 
                  href="#analytics" 
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <AdPlatformIcon platform="analytics" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="font-medium mb-5 text-lg">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Serviços', href: '#serviços' },
                { name: 'Cases', href: '#cases' },
                { name: 'Sobre Nós', href: '#sobre-nós' }
              ].map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href={item.href} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center">
                    <ArrowRight size={12} className="mr-2 text-primary" />
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="font-medium mb-5 text-lg">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm text-foreground/70">Lages, SC</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3 flex-shrink-0" />
                <span className="text-sm text-foreground/70">(49) 9 9982-7586</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3 flex-shrink-0" />
                <span className="text-sm text-foreground/70">contato@lupimidias.com.br</span>
              </li>
              <li className="mt-6">
                <div className="frost-glass p-4 rounded-lg">
                  <p className="text-sm text-primary mb-2 font-medium">Transforme seu negócio</p>
                  <p className="text-xs text-foreground/70 mb-3">Pronto para ver seus resultados multiplicarem?</p>
                  <button 
                    onClick={() => {
                      const contactForm = document.getElementById('contact-form');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = '/contato';
                      }
                    }}
                    className="text-xs bg-primary text-primary-foreground py-2 px-4 rounded inline-block hover:bg-primary/90 transition-colors"
                  >
                    Fale Conosco
                  </button>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Lupi Mídias. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/politica-de-privacidade" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-servico" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
            <Link to="/faq" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </motion.div>
      </Container>
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
} 