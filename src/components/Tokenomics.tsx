import React from 'react';
import { PieChart, Wallet, ArrowUpRight, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Tokenomics: React.FC = () => {
  const tokenDistribution = [
    { 
      name: "Venda Pública", 
      percentage: 40, 
      color: "bg-purple-500" 
    },
    { 
      name: "Equipe & Consultores", 
      percentage: 20, 
      color: "bg-blue-500" 
    },
    { 
      name: "Desenvolvimento", 
      percentage: 15, 
      color: "bg-indigo-500" 
    },
    { 
      name: "Marketing", 
      percentage: 10, 
      color: "bg-violet-500" 
    },
    { 
      name: "Reservas", 
      percentage: 15, 
      color: "bg-purple-700" 
    },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute opacity-10"
            initial={{ rotate: 0, scale: 0.5 }}
            animate={{ 
              rotate: 360,
              scale: [0.5, 0.7, 0.5],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <PieChart size={100} className="text-purple-300" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4">
            <PieChart size={40} className="text-purple-400 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tokenomics
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            O Bloco Fantasma possui uma estrutura tokenômica cuidadosamente projetada para
            garantir sustentabilidade e crescimento a longo prazo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-6">Distribuição dos Tokens</h3>
            <div className="space-y-6">
              {tokenDistribution.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white">{item.name}</span>
                    <span className="text-white font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatedSection delay={0.4} className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-purple-800/30">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Wallet className="mr-2 text-purple-400" size={24} />
                Detalhes do Token
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Nome do Token</p>
                  <p className="text-white font-medium">Bloco Fantasma</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Símbolo do Token</p>
                  <p className="text-white font-medium">GHOST</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Fornecimento Total</p>
                  <p className="text-white font-medium">1.000.000.000 GHOST</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Blockchain</p>
                  <p className="text-white font-medium">Rede Etérea</p>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="bg-gray-800/30 p-8 rounded-xl border border-purple-900/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Utilidades Fantasmagóricas</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex gap-4 items-start"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-700/70 p-3 rounded-lg">
                  <ArrowUpRight className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Recompensas de Staking</h4>
                  <p className="text-gray-300">
                    Faça stake dos seus tokens GHOST para ganhar recompensas espectrais e ajudar a proteger a rede.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4 items-start"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-700/70 p-3 rounded-lg">
                  <Users className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Governança</h4>
                  <p className="text-gray-300">
                    Detentores de GHOST podem votar em mudanças do protocolo e influenciar o futuro do Bloco Fantasma.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/20 p-6 rounded-lg border border-purple-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">Mecanismo Deflacionário</h4>
                <p className="text-gray-300">
                  Para cada transação, 2% dos tokens são queimados, garantindo uma diminuição contínua
                  do fornecimento e aumentando a escassez ao longo do tempo – como fantasmas desaparecendo no éter.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;