import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: 'cyan' | 'purple' | 'red';
}

export function Card({ children, className = '', delay = 0, glowColor = 'cyan' }: CardProps) {
  const glowColors = {
    cyan: 'shadow-cyan-500/50',
    purple: 'shadow-purple-500/50',
    red: 'shadow-red-500/50',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`
        bg-gradient-to-br from-gray-900 to-black 
        border border-gray-800 
        p-6 
        relative 
        overflow-hidden
        hover:border-${glowColor === 'cyan' ? 'cyan' : glowColor === 'purple' ? 'purple' : 'red'}-500/50
        hover:${glowColors[glowColor]}
        transition-all duration-300
        ${className}
      `}
    >
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }} />
      </div>

      
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/30" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
