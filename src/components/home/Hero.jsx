import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="gradient-text bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Mentoria fitness
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Elevando sua perfomance com estratégia e constância
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.5
      }} className="mt-16">
          <img className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl" alt="Eduardo Castro personal trainer profissional e inspirador" src="https://horizons-cdn.hostinger.com/aaef720a-e293-4317-80f1-6e9bcb972bcd/whatsapp-image-2025-10-19-at-16.18.11-yDPIi.jpeg" />
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
    </section>;
};
export default Hero;