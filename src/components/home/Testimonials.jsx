import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: 'Maria Silva',
    result: 'Perdeu 15kg em 6 meses',
    text: 'O Eduardo mudou completamente minha relação com o exercício. Não só perdi peso, mas ganhei confiança e energia para viver melhor.',
    rating: 5,
    image: 'Mulher sorridente após transformação física com Eduardo Castro'
  }, {
    name: 'João Santos',
    result: 'Ganhou 8kg de massa muscular',
    text: 'Sempre fui magro e achava impossível ganhar músculo. Com o método do Eduardo, consegui o corpo que sempre sonhei.',
    rating: 5,
    image: 'Homem mostrando ganho de massa muscular após treino com Eduardo Castro'
  }, {
    name: 'Ana Costa',
    result: 'Melhorou condicionamento em 70%',
    text: 'Aos 45 anos, pensava que era tarde demais. Eduardo me provou o contrário. Hoje me sinto mais forte que aos 30!',
    rating: 5,
    image: 'Mulher de meia idade em excelente forma física após treino'
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Histórias de
            <span className="gradient-text"> Transformação Real</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das centenas de pessoas que já transformaram suas vidas com nosso método.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="bg-gray-50 rounded-2xl p-6 card-hover">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              
              <Quote className="h-8 w-8 icon-gradient mb-4" />
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full object-cover mr-4" alt={testimonial.image} src="https://horizons-cdn.hostinger.com/aaef720a-e293-4317-80f1-6e9bcb972bcd/user-icon-on-transparent-background-free-png-uxCGN.webp" />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.result}</p>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;