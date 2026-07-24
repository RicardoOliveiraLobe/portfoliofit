import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const MacroCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: 'sedentary',
    goal: 'maintain'
  });
  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateMacros = () => {
    const { age, gender, weight, height, activity, goal } = formData;
    
    if (!age || !weight || !height) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos para calcular.",
        variant: "destructive",
      });
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    };

    let calories = bmr * activityFactors[activity];

    if (goal === 'lose') {
      calories *= 0.8;
    } else if (goal === 'gain') {
      calories *= 1.15;
    }

    const protein = weight * 2.2;
    const fat = calories * 0.25 / 9;
    const carbs = (calories - (protein * 4) - (fat * 9)) / 4;

    setResults({
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat)
    });
  };

  const handleNutritionPlan = () => {
    const phoneNumber = "62994506114";
    const message = "Olá, Eduardo! Usei a calculadora de macros no seu site e gostaria de um plano nutricional completo.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 icon-gradient mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Calculadora de Macronutrientes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Idade
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Ex: 30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sexo
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Peso (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Ex: 70"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Altura (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Ex: 175"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nível de Atividade
            </label>
            <select
              name="activity"
              value={formData.activity}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="sedentary">Sedentário (pouco ou nenhum exercício)</option>
              <option value="light">Leve (exercício 1-3 dias/semana)</option>
              <option value="moderate">Moderado (exercício 3-5 dias/semana)</option>
              <option value="active">Ativo (exercício 6-7 dias/semana)</option>
              <option value="very_active">Muito ativo (exercício 2x/dia)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Objetivo
            </label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="lose">Perder peso</option>
              <option value="maintain">Manter peso</option>
              <option value="gain">Ganhar peso</option>
            </select>
          </div>

          <Button 
            onClick={calculateMacros}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            Calcular Macronutrientes
          </Button>
        </div>

        {/* Results */}
        <div>
          {results ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Seus Resultados</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">Calorias Diárias</span>
                  <span className="text-2xl font-bold text-primary">{results.calories}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">Proteínas</span>
                  <span className="text-xl font-bold text-primary">{results.protein}g</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">Carboidratos</span>
                  <span className="text-xl font-bold text-primary">{results.carbs}g</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">Gorduras</span>
                  <span className="text-xl font-bold text-primary">{results.fat}g</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Exemplos de Alimentos:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Proteínas:</strong> Frango, peixe, ovos, whey protein</p>
                  <p><strong>Carboidratos:</strong> Arroz, batata doce, aveia, frutas</p>
                  <p><strong>Gorduras:</strong> Azeite, castanhas, abacate, salmão</p>
                </div>
              </div>

              <Button 
                onClick={handleNutritionPlan}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Quero um Plano Nutricional Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
              <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Preencha os dados ao lado para calcular suas necessidades nutricionais personalizadas.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MacroCalculator;