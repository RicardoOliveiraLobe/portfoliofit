import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email para se inscrever.",
      });
      return;
    }
    
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
    setEmail('');
  };

  const handleReadMore = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const featuredArticles = [
    {
      title: 'Mitos e Verdades sobre Hipertrofia Muscular',
      excerpt: 'Descubra os principais mitos que podem estar sabotando seus ganhos de massa muscular e aprenda as verdades baseadas em ciência.',
      date: '2024-01-15',
      readTime: '8 min',
      image: 'Homem treinando pesado na academia para hipertrofia muscular',
      category: 'Hipertrofia'
    },
    {
      title: 'Como Manter a Motivação na Academia',
      excerpt: 'Estratégias práticas para manter a consistência nos treinos e superar os momentos de desmotivação.',
      date: '2024-01-10',
      readTime: '6 min',
      image: 'Pessoa motivada se exercitando na academia com determinação',
      category: 'Motivação'
    },
    {
      title: 'O Papel do Sono na Recuperação Muscular',
      excerpt: 'Entenda como o sono afeta diretamente seus resultados e aprenda a otimizar seu descanso para máxima recuperação.',
      date: '2024-01-05',
      readTime: '10 min',
      image: 'Pessoa dormindo tranquilamente para recuperação muscular',
      category: 'Recuperação'
    }
  ];

  const recentArticles = [
    {
      title: 'Suplementação: O que Realmente Funciona?',
      excerpt: 'Guia completo sobre suplementos essenciais e quais realmente valem o investimento.',
      date: '2024-01-20',
      readTime: '12 min',
      category: 'Nutrição'
    },
    {
      title: 'Treino em Casa vs Academia: Prós e Contras',
      excerpt: 'Análise detalhada das vantagens e desvantagens de cada modalidade.',
      date: '2024-01-18',
      readTime: '7 min',
      category: 'Treino'
    },
    {
      title: 'Alimentação Pré e Pós-Treino: Guia Completo',
      excerpt: 'Tudo que você precisa saber sobre nutrição para otimizar seus treinos.',
      date: '2024-01-12',
      readTime: '9 min',
      category: 'Nutrição'
    },
    {
      title: 'Como Quebrar Plateaus no Treino',
      excerpt: 'Estratégias avançadas para continuar progredindo quando os resultados estagnam.',
      date: '2024-01-08',
      readTime: '11 min',
      category: 'Treino'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Eduardo Castro Personal Trainer</title>
        <meta name="description" content="Artigos sobre fitness, nutrição e motivação por Eduardo Castro. Dicas práticas para hipertrofia, emagrecimento e bem-estar." />
      </Helmet>
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog do <span className="text-yellow-400">Eduardo Castro</span>
              </h1>
              <p className="text-xl mb-8">
                Conteúdos exclusivos sobre fitness, nutrição e motivação. 
                Aprenda com quem vive e respira transformação.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center"
            >
              <Download className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                E-book Gratuito: "Guia Completo de Hipertrofia"
              </h2>
              <p className="text-lg mb-6">
                Receba nosso e-book exclusivo e fique por dentro das novidades do blog!
              </p>
              
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button 
                  type="submit"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6"
                >
                  Baixar Grátis
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Artigos em <span className="gradient-text">Destaque</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="relative h-48">
                    <img 
                      className="w-full h-full object-cover" 
                      alt={article.title}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleReadMore}
                    >
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Artigos <span className="gradient-text">Recentes</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {recentArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer"
                  onClick={handleReadMore}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          {article.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString('pt-BR')}
                          <span className="mx-2">•</span>
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <ArrowRight className="h-5 w-5 text-gray-400 ml-4 flex-shrink-0" />
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleReadMore}
              >
                Ver Todos os Artigos
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;