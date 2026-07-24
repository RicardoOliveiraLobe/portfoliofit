import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Heart, Trophy } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Planos Personalizados',
      description: 'Treinos e dietas adaptados ao seu biotipo, objetivos e rotina.',
    },
    {
      icon: Brain,
      title: 'Mindset Vencedor',
      description: 'Desenvolva a mentalidade necessária para alcançar seus objetivos.',
    },
    {
      icon: Heart,
      title: 'Saúde Integral',
      description: 'Cuidamos do seu corpo, mente e bem-estar de forma holística.',
    },
    {
      icon: Trophy,
      title: 'Resultados Comprovados',
      description: 'Mais de 100 clientes transformados com metodologia exclusiva.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o
            <span className="gradient-text"> Eduardo Castro?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que um personal trainer, sou seu parceiro na jornada de transformação. 
            Conheça os diferenciais que fazem a diferença real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gray-50 card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <benefit.icon className="h-8 w-8 icon-gradient" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;