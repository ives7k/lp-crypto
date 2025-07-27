import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GhostLogo from './GhostLogo';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-0">
            <GhostLogo />
          </div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white -mt-8 mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="relative">
              <img 
                src="/images/name.avif" 
                alt="Bloco Fantasma"
                className="w-[540px] h-auto mx-auto"
              />
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-100/80 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Uma criptomoeda espectral que assombra o blockchain com inovações
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;