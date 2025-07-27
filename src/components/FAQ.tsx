import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-purple-900/30 py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-lg font-semibold text-white pr-8">{question}</h3>
        <motion.span 
          className="text-purple-400"
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-300 pt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Bloco Fantasma?",
      answer: "Bloco Fantasma is a revolutionary cryptocurrency that combines cutting-edge blockchain technology with a unique ghostly theme. It offers faster transaction speeds, enhanced privacy, and innovative staking mechanisms."
    },
    {
      question: "How do I purchase GHOST tokens?",
      answer: "GHOST tokens can be purchased on supported exchanges after our public launch. You'll need to create an account on an exchange that lists GHOST, deposit funds, and then purchase the tokens. Details about exchanges will be announced on our official channels."
    },
    {
      question: "What makes Bloco Fantasma different from other cryptocurrencies?",
      answer: "Bloco Fantasma features a unique consensus mechanism that combines the security of proof-of-stake with enhanced privacy features. Our 'Spectral Sharding' technology allows for faster transactions while maintaining security. Additionally, our deflationary model creates increasing scarcity over time."
    },
    {
      question: "Is Bloco Fantasma environmentally friendly?",
      answer: "Yes! Unlike traditional proof-of-work cryptocurrencies that consume vast amounts of energy, Bloco Fantasma operates on a proof-of-stake mechanism that requires significantly less computational power, making it more environmentally sustainable."
    },
    {
      question: "How can I participate in governance?",
      answer: "GHOST token holders can participate in governance decisions through our decentralized autonomous organization (DAO). This allows the community to vote on protocol changes, treasury allocations, and future development directions."
    },
    {
      question: "Where can I store my GHOST tokens?",
      answer: "GHOST tokens can be stored in any Ethereum-compatible wallet that supports custom tokens. We also have a dedicated Bloco Fantasma wallet application in development that will offer enhanced features specifically for GHOST token holders."
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute opacity-5"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 0.7, 0.5],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 1
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <HelpCircle size={50} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4">
            <HelpCircle size={40} className="text-purple-400 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Answers to the most common questions about Bloco Fantasma and the GHOST token.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto bg-gray-800/30 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-purple-900/20">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
              index={index}
            />
          ))}

          <motion.div 
            className="mt-8 p-4 bg-purple-900/20 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-center text-white">
              Have more questions? <a href="https://google.com.br" className="text-purple-400 hover:text-purple-300 underline">Join our community</a> or <a href="https://google.com.br" className="text-purple-400 hover:text-purple-300 underline">contact our team</a>.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;