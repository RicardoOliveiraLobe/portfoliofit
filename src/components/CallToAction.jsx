import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CallToAction = () => {
  const phoneNumber = "62994506114";
  const message = "Olá, Eduardo! Vim pelo seu site e gostaria de mais informações.";

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Começar Sua
            <br />
            <span className="text-green-300">Transformação?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Não deixe para amanhã o que pode começar hoje. Sua melhor versão está esperando por você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale Comigo no WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-white">
            <div>
              <div className="text-3xl font-bold text-green-300">100+</div>
              <div className="text-lg">Clientes Transformados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">5 Anos</div>
              <div className="text-lg">de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">98%</div>
              <div className="text-lg">Satisfação dos Clientes</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CallToAction;