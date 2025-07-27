import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      phase: "Fase 1",
      title: "Gênesis Espectral",
      time: "Q1 2025",
      completed: true,
      items: [
        "Desenvolvimento do conceito inicial",
        "Formação da equipe",
        "Criação do whitepaper técnico",
        "Desenvolvimento do contrato inteligente"
      ]
    },
    {
      phase: "Fase 2",
      title: "Início da Assombração",
      time: "Q2 2025",
      completed: true,
      items: [
        "Venda privada de tokens",
        "Construção da comunidade",
        "Auditorias de segurança",
        "Listagens iniciais em exchanges"
      ]
    },
    {
      phase: "Fase 3",
      title: "Protocolo Fantasma",
      time: "Q3 2025",
      completed: false,
      items: [
        "Lançamento da plataforma de staking",
        "Lançamento da carteira móvel",
        "Anúncios de parcerias",
        "Expansão das listagens em exchanges"
      ]
    },
    {
      phase: "Fase 4",
      title: "Expansão Etérea",
      time: "Q4 2025",
      completed: false,
      items: [
        "Ativação do sistema de governança",
        "Integração cross-chain",
        "Parcerias no metaverso",
        "Lançamento da plataforma NFT"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute opacity-5"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 0.7, 0.5],
              opacity: [0.05, 0.1, 0.05],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Calendar size={150} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4">
            <Calendar size={40} className="text-purple-400 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Roteiro
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa jornada espectral através do blockchain e além. Uma evolução assombrosa do Bloco Fantasma.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {index < milestones.length - 1 && (
                <motion.div 
                  className="absolute left-7 md:left-1/2 top-[80px] bottom-0 w-0.5 bg-purple-900/50 ml-[1px] md:-ml-[1px]"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              )}
              
              <AnimatedSection 
                delay={index * 0.2} 
                className="flex flex-col md:flex-row md:items-center mb-12 relative"
              >
                <motion.div 
                  className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-2 md:order-1 relative z-10 pl-24 md:pl-0"
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-bold text-white flex flex-row md:flex-row-reverse items-center gap-2 flex-wrap">
                    <span>{milestone.phase}: {milestone.title}</span>
                    {milestone.completed && (
                      <CheckCircle size={20} className="text-green-400" />
                    )}
                  </h3>
                  <p className="text-purple-400 font-semibold my-3">{milestone.time}</p>
                  <ul className="space-y-2 break-words">
                    {milestone.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        className="text-gray-300 text-left md:text-right break-words"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 order-1 md:order-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative ${milestone.completed ? 'bg-purple-600' : 'bg-gray-700 border-2 border-purple-500/50'}`}>
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                    <motion.div 
                      className="absolute -inset-1 rounded-full bg-purple-500/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
                
                <div className="md:w-1/2 md:pl-12 order-3" />
              </AnimatedSection>
            </div>
          ))}
          
          <AnimatedSection delay={0.8} className="text-center mt-16 p-6 bg-gradient-to-b from-purple-900/20 to-transparent rounded-xl border border-purple-800/30">
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              O Além
            </motion.h3>
            <p className="text-gray-300">
              Nossa jornada continua além do roteiro visível no reino espectral de possibilidades infinitas.
              O futuro do Bloco Fantasma será moldado por nossa comunidade e pelo cenário em constante evolução do blockchain.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;