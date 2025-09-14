import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('enter'); // enter, hold, exit

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('hold');
    }, 800);

    const timer2 = setTimeout(() => {
      setAnimationPhase('exit');
    }, 2200);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-ivory flex items-center justify-center transition-all duration-700 ${
      animationPhase === 'exit' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-rose/10 to-champagne/10 transition-all duration-1000 ${
          animationPhase === 'enter' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`} style={{ animationDelay: '0.2s' }} />
        
        <div className={`absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full bg-gradient-to-br from-champagne/10 to-sageGrey/10 transition-all duration-1000 ${
          animationPhase === 'enter' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`} style={{ animationDelay: '0.4s' }} />
        
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-blush/20 to-ivory border border-champagne/20 transition-all duration-1200 ${
          animationPhase === 'enter' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`} style={{ animationDelay: '0.1s' }} />
      </div>

      {/* Main content */}
      <div className="relative text-center">
        {/* Logo/Brand */}
        <div className={`mb-8 transition-all duration-800 ${
          animationPhase === 'enter' ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}>
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-2">
              בוער <span className="text-rose">בי</span>
            </h1>
            
            {/* Sparkle animation */}
            <div className={`absolute -top-2 -right-2 transition-all duration-500 ${
              animationPhase === 'hold' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <Sparkles className="w-6 h-6 text-champagne animate-pulse" />
            </div>
          </div>
          
          <p className={`text-lg text-espresso/70 font-light mt-4 transition-all duration-800 delay-200 ${
            animationPhase === 'enter' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            תנועה קהילתית לנשים
          </p>
        </div>

        {/* Loading animation */}
        <div className={`transition-all duration-800 delay-300 ${
          animationPhase === 'enter' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {/* Progress dots */}
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full bg-rose transition-all duration-300`}
                style={{
                  animation: `pulse 1.5s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            ))}
          </div>
          
          {/* Loading text */}
          <p className="text-sm text-espresso/50 font-light">
            {animationPhase === 'enter' && 'מתחילות...'}
            {animationPhase === 'hold' && 'מכינות את המקום...'}
            {animationPhase === 'exit' && 'מוכנות לתנועה!'}
          </p>
        </div>
      </div>

      {/* Custom keyframes for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;