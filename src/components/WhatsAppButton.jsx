import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "62994506114";
  const message = "Olá, Eduardo! Vim pelo seu site e gostaria de mais informações.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="floating-whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </button>
  );
};

export default WhatsAppButton;