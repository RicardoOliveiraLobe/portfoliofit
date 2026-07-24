import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const phoneNumber = "62994506114";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e mensagem.",
        variant: "destructive",
      });
      return;
    }

    const messageText = `Olá, meu nome é ${formData.name}. Assunto: ${formData.subject || 'Contato pelo site'}. Mensagem: ${formData.message}. (Contato: ${formData.email} / ${formData.phone})`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleSocialClick = () => {
    window.open('https://www.instagram.com/eduardocfit', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'eduardopersonalfit@gmail.com',
      description: 'Respondo em até 24 horas'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '62994506114',
      description: 'Atendimento de seg à sex, 8h às 18h'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Senador Canedo, GO',
      description: 'Atendimento presencial e online'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Eduardo Castro Personal Trainer</title>
        <meta name="description" content="Entre em contato com Eduardo Castro. Agende sua consulta gratuita e comece sua transformação hoje mesmo. WhatsApp, email e redes sociais." />
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
                Vamos Conversar?
              </h1>
              <p className="text-xl mb-8">
                Estou aqui para ajudar você a alcançar seus objetivos. 
                Entre em contato e vamos começar sua transformação!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-2xl card-hover"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                    <info.icon className="h-8 w-8 icon-gradient" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 mb-1">
                    {info.info}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envie sua Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(62) 99450-6114"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="personal">Personal Training</option>
                        <option value="online">Consultoria Online</option>
                        <option value="nutrition">Consultoria Online + Nutricional</option>
                        <option value="other">Outros</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Conte-me sobre seus objetivos e como posso ajudar..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que me escolher?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Experiência comprovada:</strong> Mais de 100 alunos transformados
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Metodologia única:</strong> Abordagem que une corpo e mente
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Acompanhamento total:</strong> Suporte constante em sua jornada
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Resultados garantidos:</strong> Compromisso com sua transformação
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Me siga no Instagram
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={handleSocialClick}
                      className="flex items-center w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Instagram className="h-6 w-6 icon-gradient mr-3" />
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">Instagram</div>
                        <div className="text-sm text-gray-600">@eduardocfit</div>
                      </div>
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;