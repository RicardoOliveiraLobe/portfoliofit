import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Chatbot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Olá! Sou o assistente virtual do Eduardo Castro. Como posso ajudar você hoje?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    'Quais são os horários de atendimento?',
    'Como funciona a consultoria online?',
    'Qual o valor do personal training?',
    'Como agendar uma consulta?'
  ];

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: messages.length + 1,
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    let botResponse = '';
    switch (question) {
      case 'Quais são os horários de atendimento?':
        botResponse = 'Atendo de segunda a sexta, das 8h às 18h. Finais de semana apenas para emergências. Posso te conectar com o Eduardo para agendar um horário!';
        break;
      case 'Como funciona a consultoria online?':
        botResponse = 'A consultoria online inclui plano de treino personalizado, acompanhamento via WhatsApp e ajustes mensais. Tudo feito remotamente com total suporte!';
        break;
      case 'Qual o valor do personal training?':
        botResponse = 'Os valores variam conforme o plano escolhido. Temos opções a partir de R$ 197/mês. Quer que eu conecte você com o Eduardo para mais detalhes?';
        break;
      case 'Como agendar uma consulta?':
        botResponse = 'É super fácil! Posso te direcionar para o WhatsApp do Eduardo ou você pode usar nosso sistema de agendamento. Qual prefere?';
        break;
      default:
        botResponse = 'Essa é uma ótima pergunta! Vou conectar você diretamente com o Eduardo para uma resposta mais detalhada.';
    }

    const botMessage = {
      id: messages.length + 2,
      text: botResponse,
      isBot: true,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botMessage]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    const botMessage = {
      id: messages.length + 2,
      text: 'Obrigado pela sua mensagem! Vou conectar você com o Eduardo Castro para uma resposta personalizada. Enquanto isso, você pode explorar nossos serviços no site!',
      isBot: true,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputMessage('');

    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente Virtual</h3>
                  <p className="text-xs opacity-90">Eduardo Castro</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Perguntas frequentes:</p>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;