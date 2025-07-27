import React from 'react';
import { GhostIcon, Twitter, Github, Disc, Send, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GhostIcon className="text-purple-400 h-8 w-8" />
              <span className="text-white text-xl font-bold">Bloco Fantasma</span>
            </div>
            <p className="text-gray-400 mb-4">
              A spectral cryptocurrency haunting the blockchain with innovations.
            </p>
            <div className="flex space-x-4">
              <a href="https://google.com.br" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://google.com.br" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://google.com.br" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Disc size={20} />
              </a>
              <a href="https://google.com.br" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Tokenomics', 'Roadmap', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Whitepaper', 'Documentation', 'GitHub', 'Blog', 'Media Kit'].map((item) => (
                <li key={item}>
                  <a 
                    href="https://google.com.br"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and announcements.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none border border-gray-700 focus:border-purple-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bloco Fantasma. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="https://google.com.br" className="hover:text-purple-400 transition-colors">Terms</a>
            <a href="https://google.com.br" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="https://google.com.br" className="hover:text-purple-400 transition-colors">Legal</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 bg-purple-900/80 p-3 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300 hover:scale-110 hover:shadow-purple-500/25 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;