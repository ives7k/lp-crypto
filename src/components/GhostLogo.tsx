import React from 'react';

const GhostLogo: React.FC = () => {
  return (
    <div className="relative inline-block">
      <div className="relative transform-gpu">
        <img 
          src="/images/logo.avif"
          alt="Bloco Fantasma Logo"
          width={540}
          height={540}
          className="animate-ghost-float transform-gpu transition-all duration-300 hover:scale-105"
        />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-ghost-particle"
            style={{
              left: `${50 + Math.cos(i * (Math.PI * 2) / 5) * 40}%`,
              top: `${50 + Math.sin(i * (Math.PI * 2) / 5) * 40}%`,
              animationDelay: `${i * 0.8}s`
            }}
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes ghost-float {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-20px) rotate(-3deg) scale(1.02); }
          50% { transform: translateY(0) rotate(0deg) scale(1); }
          75% { transform: translateY(20px) rotate(3deg) scale(0.98); }
        }
        
        @keyframes ghost-particle {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          25% { 
            transform: translate(15px, -15px) scale(1.5);
            opacity: 0.5;
          }
          50% { 
            transform: translate(30px, 0) scale(1);
            opacity: 0.2;
          }
          75% { 
            transform: translate(15px, 15px) scale(1.5);
            opacity: 0.5;
          }
        }
        
        .animate-ghost-float {
          animation: ghost-float 8s ease-in-out infinite;
          will-change: transform;
        }
        
        .animate-ghost-particle {
          animation: ghost-particle 12s ease-in-out infinite;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default GhostLogo;