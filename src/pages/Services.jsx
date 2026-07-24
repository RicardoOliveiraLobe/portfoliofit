import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Video, Apple, BrainCircuit, Zap } from 'lucide-react';

const Services = () => {
  const phoneNumber = "62994506114";

  const handleContract = (planName) => {
    const message = `Olá, Eduardo! Gostaria de saber mais sobre o plano: ${planName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: Users,
      title: 'Acompanhamento Presencial',
      description: 'Treinos guiados presencialmente, com acompanhamento direto, ajustes imediatos e atenção total à sua evolução.',
      planName: 'Acompanhamento Presencial',
    },
    {
      icon: Video,
      title: 'Consultoria Online',
      description: 'Treinos personalizados e acompanhamento remoto, ajustados semanalmente conforme seu progresso.',
      planName: 'Consultoria Online',
    },
    {
      icon: Apple,
      title: 'Consultoria Online + Nutrição',
      description: 'Treinos personalizados + plano alimentar adaptado por nutricionista, garantindo resultados mais consistentes.',
      planName: 'Consultoria Online + Nutrição',
    },
    {
      icon: BrainCircuit,
      title: 'Consultoria Online + Acompanhamento psicoterapêutico',
      description: 'Treinos personalizados + suporte psicológico para motivação, foco e performance mental.',
      planName: 'Consultoria Online + Acompanhamento psicoterapêutico',
    },
    {
      icon: Zap,
      title: 'Consultoria Online + Nutrição + Acompanhamento psicoterapêutico',
      description: 'A experiência completa: treino, nutrição e acompanhamento mental integrados, para evolução constante do corpo e da mente.',
      planName: 'Consultoria Online + Nutrição + Acompanhamento psicoterapêutico',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Eduardo Castro Personal Trainer</title>
        <meta name="description" content="Conheça os planos de Eduardo Castro: acompanhamento presencial, consultoria online, nutrição e psicologia esportiva." />
      </Helmet>
      
      <div>
        <section className="py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos <span className="text-secondary">Planos</span>
              </h1>
              <p className="text-xl mb-8">
                Escolha o plano que melhor se adapta à sua jornada de transformação. Todos os serviços incluem acompanhamento personalizado e suporte total.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 flex flex-col card-hover"
                >
                  <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 icon-gradient" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 text-left">{service.title}</h3>
                  
                  <p className="text-foreground/80 mb-8 text-left flex-grow">
                    {service.description}
                  </p>

                  <Button 
                    onClick={() => handleContract(service.planName)} 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white mt-auto"
                  >
                    Quero Saber Mais
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;