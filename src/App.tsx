import React from 'react';
import { AgencyHeader } from '@/components/layout/agency-header';
import { AgencyHero } from '@/components/layout/agency-hero';
import { AgencyServices } from '@/components/layout/agency-services';
import { AgencyAbout } from '@/components/layout/agency-about';
import { AgencyTestimonials } from '@/components/layout/agency-testimonials';
import { AgencyAnalytics } from '@/components/layout/agency-analytics';
import { AgencyCTA } from '@/components/layout/agency-cta';
import { Footer } from '@/components/layout/footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
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
        <AgencyHeader />
        <main>
          <AgencyHero />
          <AgencyServices />
          <AgencyAbout />
          <AgencyTestimonials />
          <AgencyAnalytics />
          <AgencyCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
