import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Video, Apple, BrainCircuit, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: Users,
      title: 'Acompanhamento Presencial',
      description: 'Treinos guiados presencialmente, com acompanhamento direto, ajustes imediatos e atenção total à sua evolução.',
    },
    {
      icon: Video,
      title: 'Consultoria Online',
      description: 'Treinos personalizados e acompanhamento remoto, ajustados semanalmente conforme seu progresso.',
    },
    {
      icon: Apple,
      title: 'Consultoria Online + Nutrição',
      description: 'Treinos personalizados + plano alimentar adaptado por nutricionista, garantindo resultados mais consistentes.',
    },
    {
      icon: BrainCircuit,
      title: 'Consultoria Online + Acompanhamento psicoterapêutico',
      description: 'Treinos personalizados + suporte psicológico para motivação, foco e performance mental.',
    },
    {
      icon: Zap,
      title: 'Consultoria Online + Nutrição + Acompanhamento psicoterapêutico',
      description: 'A experiência completa: treino, nutrição e acompanhamento mental integrados, para evolução constante do corpo e da mente.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos <span className="gradient-text">Planos</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Escolha o plano que melhor se alinha com seus objetivos e estilo de vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col"
            >
              <div className="p-8 flex-grow flex flex-col">
                 <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <service.icon className="h-8 w-8 icon-gradient" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/80 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white mt-auto">
                  <Link to="/servicos">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;