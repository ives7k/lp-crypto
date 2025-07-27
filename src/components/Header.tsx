import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed w-full z-50 bg-transparent"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div></div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {['Início', 'Sobre', 'Tokenomics', 'Roteiro', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'Início' ? 'home' : item.toLowerCase()}`}
              className="text-white/70 hover:text-white transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Nav Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {['Início', 'Sobre', 'Tokenomics', 'Roteiro', 'FAQ'].map((item) => (
          <a 
            key={item} 
            href={`#${item === 'Início' ? 'home' : item.toLowerCase()}`}
            className="text-white text-2xl hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;