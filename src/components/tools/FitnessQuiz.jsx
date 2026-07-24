import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ClipboardList, ArrowRight, Trophy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const FitnessQuiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const questions = [
    {
      id: 'exercise_frequency',
      question: 'Com que frequência você se exercita?',
      options: [
        { value: 0, label: 'Nunca ou raramente' },
        { value: 1, label: '1-2 vezes por semana' },
        { value: 2, label: '3-4 vezes por semana' },
        { value: 3, label: '5+ vezes por semana' }
      ]
    },
    {
      id: 'cardio_endurance',
      question: 'Como você avalia sua resistência cardiovascular?',
      options: [
        { value: 0, label: 'Fico sem fôlego subindo escadas' },
        { value: 1, label: 'Consigo caminhar por 15-20 minutos' },
        { value: 2, label: 'Consigo correr por 20-30 minutos' },
        { value: 3, label: 'Tenho excelente resistência' }
      ]
    },
    {
      id: 'strength',
      question: 'Qual sua experiência com musculação?',
      options: [
        { value: 0, label: 'Nunca pratiquei' },
        { value: 1, label: 'Iniciante (menos de 6 meses)' },
        { value: 2, label: 'Intermediário (6 meses - 2 anos)' },
        { value: 3, label: 'Avançado (mais de 2 anos)' }
      ]
    },
    {
      id: 'flexibility',
      question: 'Como está sua flexibilidade?',
      options: [
        { value: 0, label: 'Muito rígido, dificuldade para me alongar' },
        { value: 1, label: 'Flexibilidade limitada' },
        { value: 2, label: 'Flexibilidade razoável' },
        { value: 3, label: 'Muito flexível' }
      ]
    },
    {
      id: 'lifestyle',
      question: 'Como é seu estilo de vida?',
      options: [
        { value: 0, label: 'Muito sedentário, trabalho sentado' },
        { value: 1, label: 'Pouco ativo, algumas caminhadas' },
        { value: 2, label: 'Moderadamente ativo' },
        { value: 3, label: 'Muito ativo no dia a dia' }
      ]
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: value
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    let level, description, recommendations;

    if (percentage <= 33) {
      level = 'Iniciante';
      description = 'Você está começando sua jornada fitness. É o momento perfeito para criar bases sólidas!';
      recommendations = [
        'Comece com exercícios básicos e funcionais',
        'Foque em criar o hábito de se exercitar',
        'Trabalhe mobilidade e flexibilidade',
        'Acompanhamento profissional é essencial'
      ];
    } else if (percentage <= 66) {
      level = 'Intermediário';
      description = 'Você já tem uma base fitness, mas há muito espaço para evolução!';
      recommendations = [
        'Intensifique seus treinos gradualmente',
        'Varie os tipos de exercício',
        'Foque em técnica e progressão',
        'Considere um plano mais estruturado'
      ];
    } else {
      level = 'Avançado';
      description = 'Parabéns! Você tem um excelente condicionamento físico!';
      recommendations = [
        'Mantenha a consistência',
        'Explore novos desafios',
        'Foque em objetivos específicos',
        'Otimize sua performance'
      ];
    }

    setResults({
      score: totalScore,
      percentage: Math.round(percentage),
      level,
      description,
      recommendations
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  const handlePersonalTraining = () => {
    const phoneNumber = "62994506114";
    const message = "Olá, Eduardo! Fiz o Quiz de Condicionamento no seu site e gostaria de um plano personalizado.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (results) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <Trophy className="h-8 w-8 icon-gradient mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Resultado do Quiz</h2>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary mb-2">
              {results.percentage}%
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Nível: {results.level}
            </div>
            <p className="text-lg text-gray-600">
              {results.description}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recomendações para você:
            </h3>
            <ul className="space-y-2">
              {results.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={handlePersonalTraining}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Quero um Plano Personalizado
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={resetQuiz}
              className="w-full"
            >
              Refazer Quiz
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <ClipboardList className="h-8 w-8 icon-gradient mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Quiz de Condicionamento Físico</h2>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-8"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-accent hover:bg-primary/5 transition-all"
            >
              {option.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FitnessQuiz;