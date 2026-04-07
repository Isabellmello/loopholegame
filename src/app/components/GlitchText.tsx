import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function GlitchText({ text, className = '', intensity = 'medium' }: GlitchTextProps) {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const intervalTime = intensity === 'high' ? 2000 : intensity === 'medium' ? 3000 : 5000;
    
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`relative z-10 ${glitchActive ? 'animate-glitch' : ''}`}>
        {text}
      </span>
      {glitchActive && (
        <>
          <span 
            className="absolute top-0 left-0 z-0 text-cyan-400 opacity-70"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-2px, -1px)',
            }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 z-0 text-purple-600 opacity-70"
            style={{
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translate(2px, 1px)',
            }}
          >
            {text}
          </span>
        </>
      )}
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }
        .animate-glitch {
          animation: glitch 0.2s infinite;
        }
      `}</style>
    </span>
  );
}
