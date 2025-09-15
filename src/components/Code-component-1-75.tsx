import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedTrack() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simplified Nürburgring-inspired track path (stylized)
  const trackPath = "M50,200 C100,180 150,160 200,180 C250,200 300,190 350,170 C400,150 450,140 500,160 C550,180 600,200 650,180 C700,160 750,150 800,170 C850,190 900,210 950,200 C1000,190 1050,180 1100,200 C1150,220 1200,240 1250,220 C1300,200 1350,180 1400,200 C1450,220 1500,240 1550,220 C1600,200 1650,180 1700,200 C1750,220 1800,210 1850,190 C1900,170 1950,160 2000,180 C2050,200 2100,220 2150,200 C2200,180 2250,160 2300,180 C2350,200 2400,220 2400,250 C2400,280 2350,300 2300,320 C2250,340 2200,360 2150,340 C2100,320 2050,300 2000,320 C1950,340 1900,360 1850,340 C1800,320 1750,300 1700,320 C1650,340 1600,360 1550,340 C1500,320 1450,300 1400,320 C1350,340 1300,360 1250,340 C1200,320 1150,300 1100,320 C1050,340 1000,360 950,340 C900,320 850,300 800,320 C750,340 700,360 650,340 C600,320 550,300 500,320 C450,340 400,360 350,340 C300,320 250,300 200,320 C150,340 100,360 50,340 C25,320 10,300 10,270 C10,240 25,220 50,200 Z";

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        viewBox="0 0 2400 600"
        className="w-full h-full"
        style={{ transform: 'scale(1.2)' }}
      >
        <defs>
          <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0080ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff0080" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Track outline */}
        <motion.path
          d={trackPath}
          fill="none"
          stroke="url(#trackGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Animated racing line */}
        <motion.circle
          r="4"
          fill="#00ff88"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: [0, 1, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path={trackPath}
          />
        </motion.circle>
        
        {/* Additional glowing points */}
        {[0.2, 0.4, 0.6, 0.8].map((offset, index) => (
          <motion.circle
            key={index}
            r="2"
            fill="#0080ff"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: [0, 0.8, 0] } : {}}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: index * 0.5,
              ease: "easeInOut" 
            }}
          >
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path={trackPath}
              begin={`${offset * 8}s`}
            />
          </motion.circle>
        ))}
      </svg>
    </div>
  );
}