import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calculator, ClipboardList, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MacroCalculator from '@/components/tools/MacroCalculator';
import FitnessQuiz from '@/components/tools/FitnessQuiz';

const Tools = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  
  const phoneNumber = "62994506114";
  const message = "Olá, Eduardo! Vim pelo seu site e gostaria de mais informações.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const tools = [
    {
      id: 'calculator',
      icon: Calculator,
      title: 'Calculadora de Macronutrientes',
      description: 'Calcule suas necessidades calóricas e divisão de macronutrientes',
    },
    {
      id: 'quiz',
      icon: ClipboardList,
      title: 'Quiz de Condicionamento',
      description: 'Avalie seu nível físico atual e receba recomendações',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ferramentas Gratuitas - Eduardo Castro Personal Trainer</title>
        <meta name="description" content="Use nossas ferramentas gratuitas: calculadora de macronutrientes e quiz de condicionamento físico. Descubra seu plano ideal com Eduardo Castro." />
      </Helmet>
      
      <div> {/* Removido o pt-16 daqui, pois já está no App.jsx */}
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ferramentas <span className="text-secondary">Gratuitas</span>
              </h1>
              <p className="text-xl mb-8">
                Use nossas ferramentas interativas para descobrir suas necessidades 
                nutricionais e avaliar seu nível de condicionamento físico.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Navigation */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`flex-1 p-6 rounded-2xl border-2 transition-all ${
                    activeTab === tool.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-accent'
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <tool.icon className={`h-8 w-8 icon-gradient`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    activeTab === tool.id ? 'text-primary' : 'text-gray-900'
                  }`}>
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tool.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Tool Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {activeTab === 'calculator' && <MacroCalculator />}
              {activeTab === 'quiz' && <FitnessQuiz />}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Target className="h-16 w-16 icon-gradient mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pronto para o Próximo Nível?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Essas ferramentas são apenas o começo. Para resultados reais e duradouros, 
                você precisa de um plano personalizado e acompanhamento profissional.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={handleWhatsAppClick}
              >
                Falar com Eduardo Castro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tools;