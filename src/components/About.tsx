import React from 'react';
import { Shield, Zap, Lock, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Segurança Espectral",
      description: "Protegido por criptografia fantasmagórica que torna as transações virtualmente invisíveis para hackers."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Velocidade Fantasma",
      description: "Transações que se movem em velocidades sobrenaturais através do blockchain."
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: "Privacidade Etérea",
      description: "Suas transações são envoltas em uma névoa de privacidade que só você pode ver através."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "Recompensas Assombradas",
      description: "Ganhe recompensas fantasmagóricas através do nosso mecanismo inovador de staking."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Sobre o Bloco Fantasma
            <div className="h-1 w-24 bg-purple-500 mx-auto mt-2"></div>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Uma presença espectral no mundo das criptomoedas, o Bloco Fantasma move-se invisivamente através do blockchain,
            oferecendo recursos revolucionários que as criptomoedas tradicionais só podem sonhar.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index}
              delay={index * 0.2}
              className="bg-gray-800/50 p-6 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="bg-gray-700/50 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.6} className="mt-16 bg-gray-800/30 rounded-xl p-8 border border-purple-900/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">O Blockchain Fantasma</h3>
              <p className="text-gray-300 mb-4">
                Diferentemente de outras criptomoedas, o Bloco Fantasma existe no reino espectral do blockchain,
                permitindo transações que são tanto rápidas quanto assustadoramente seguras.
              </p>
              <p className="text-gray-300">
                Nosso mecanismo de consenso fantasmagórico garante que suas transações sejam validadas por forças sobrenaturais,
                tornando o Bloco Fantasma mais eficiente em energia que criptomoedas tradicionais de proof-of-work.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden relative z-10 group">
                <img 
                  src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg" 
                  alt="Crypto blockchain visualization" 
                  className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;