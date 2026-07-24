import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/home/Hero';
import ValueProposition from '@/components/home/ValueProposition';
import ServicesPreview from '@/components/home/ServicesPreview';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Eduardo Castro - Seu Guia para um Corpo e Mente Mais Fortes</title>
        <meta name="description" content="Transforme seu físico e seus hábitos com um plano personalizado. Personal trainer especializado em treino presencial, consultoria online e nutrição." />
      </Helmet>
      
      <div> {/* Removido o pt-16 daqui, pois já está no App.jsx */}
        <Hero />
        <ValueProposition />
        <ServicesPreview />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;