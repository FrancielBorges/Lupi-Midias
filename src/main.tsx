import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

// Componente de carregamento
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-primary text-lg">Carregando...</div>
  </div>
)

// Carregamento preguiçoso dos componentes de página
const App = lazy(() => import('./App.tsx'))
const ThankYouPage = lazy(() => import('./ThankYouPage.tsx'))
const PrivacyPolicyPage = lazy(() => import('./PrivacyPolicyPage.tsx'))
const TermsOfServicePage = lazy(() => import('./TermsOfServicePage.tsx'))
const FAQPage = lazy(() => import('./FAQPage.tsx'))
const ContactPage = lazy(() => import('./ContactPage.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/obrigado" element={<ThankYouPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-de-servico" element={<TermsOfServicePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
