import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Heart, Target, Users } from 'lucide-react';
const About = () => {
  const achievements = [{
    icon: Award,
    title: 'Certificações',
    description: 'CREF, Especialização em Hipertrofia, Nutrição Esportiva'
  }, {
    icon: Users,
    title: '100+ Alunos',
    description: 'Transformações reais em 5 anos de carreira'
  }, {
    icon: Target,
    title: 'Metodologia Única',
    description: 'Abordagem que une corpo, mente e lifestyle'
  }, {
    icon: Heart,
    title: 'Paixão pelo Fitness',
    description: 'Dedicação total ao bem-estar dos meus alunos'
  }];
  return <>
      <Helmet>
        <title>Sobre Eduardo Castro - Personal Trainer Especializado</title>
        <meta name="description" content="Conheça a história de Eduardo Castro, personal trainer especializado em transformação física e mental. Descubra sua filosofia e abordagem única." />
      </Helmet>
      
      <div> {/* Removido o pt-16 daqui, pois já está no App.jsx */}
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Conheça o Eduardo Castro
                </h1>
                <p className="text-xl mb-6">Minha trajetória na Educação Física começou movida por um propósito: ajudar pessoas a superarem seus limites e alcançarem sua melhor versão.</p>
                <p className="text-lg text-white/90">Sou formado em Bacharelado em Educação Física pela Universidade UniAraguaia (2024) e acumulo mais de 5 anos de experiência na área, atuando com diferentes perfis e objetivos.</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                <img className="w-full rounded-2xl shadow-2xl" alt="Eduardo Castro personal trainer profissional" src="https://horizons-cdn.hostinger.com/aaef720a-e293-4317-80f1-6e9bcb972bcd/whatsapp-image-2025-10-19-at-16.38.40-8WLDc.jpeg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          }} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Minha <span className="gradient-text">Jornada</span>
              </h2>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="prose prose-lg mx-auto text-gray-600">
              <p>Durante esse caminho, enfrentei desafios, aprendi com cada fase e evoluí constantemente. Hoje, vivo o ponto mais alto e único da minha carreira, um momento de amadurecimento, conquistas e grandes projetos que serão decisivos para o meu futuro.</p>
              
              <p>Carrego uma vontade de vencer inexplicável e a certeza de que tudo o que é plantado com esforço, dedicação e propósito, mais cedo ou mais tarde, é colhido.</p>
              
              <p></p>
              
              <p>
                Minha filosofia é que a verdadeira evolução nasce nos dias difíceis, transformando desafios em amadurecimento completo. E eu estou aqui para te guiar nessa jornada.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-50">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Conquistas e <span className="gradient-text">Diferenciais</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                    <achievement.icon className="h-8 w-8 icon-gradient" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Minha <span className="gradient-text">Filosofia</span>
              </h2>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-gray-600 prose prose-lg mx-auto">
                <blockquote className="text-2xl font-medium text-gray-900 italic mb-6">
                  "A verdadeira evolução nasce nos dias difíceis.”
                </blockquote>
                <p>
                  Acredito que os maiores resultados não vêm apenas quando tudo está dando certo, mas sim quando escolhemos continuar mesmo nos dias em que o corpo cansa e a mente duvida.
                </p>
                <p>
                  Foram os altos e baixos que me ensinaram a crescer — porque cada desafio supera o físico e molda também o mental e o emocional.
                </p>
                <p>
                  Treinar, pra mim, é um processo de amadurecimento completo: é sobre fortalecer o corpo, equilibrar a mente e aprender a ter paciência com o próprio caminho.
                </p>
                <p>
                  No fim, a conquista vai muito além do espelho, é sobre se tornar alguém mais forte por dentro e por fora.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default About;