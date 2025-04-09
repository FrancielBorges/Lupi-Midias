import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import ThankYouPage from './ThankYouPage.tsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.tsx'
import TermsOfServicePage from './TermsOfServicePage.tsx'
import FAQPage from './FAQPage.tsx'
import ContactPage from './ContactPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
        <Route path="/termos-de-servico" element={<TermsOfServicePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
