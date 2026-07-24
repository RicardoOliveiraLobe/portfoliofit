import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Tools from '@/pages/Tools';
import Contact from '@/pages/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen scroll-smooth bg-white">
        <Helmet>
          <title>Eduardo Castro - Personal Trainer & Consultoria Online</title>
          <meta name="description" content="Transforme seu físico e seus hábitos com Eduardo Castro. Personal trainer especializado em treino presencial, consultoria online e planos de nutrição personalizados." />
          <meta name="keywords" content="personal trainer, Eduardo Castro, treino presencial, consultoria online, nutrição, hipertrofia, fitness" />
          <meta property="og:title" content="Eduardo Castro - Personal Trainer & Consultoria Online" />
          <meta property="og:description" content="Seu guia para um corpo e mente mais fortes. Transforme seu físico com planos personalizados." />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <Navbar />
        
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/ferramentas" element={<Tools />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </div>
        
        <WhatsAppButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;