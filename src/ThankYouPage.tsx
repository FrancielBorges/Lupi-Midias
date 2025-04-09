import React from 'react';
import { AgencyThankYou } from '@/components/layout/agency-thank-you';
import { Footer } from '@/components/layout/footer';
import './App.css';

function ThankYouPage() {
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
        <main>
          <AgencyThankYou />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ThankYouPage; 