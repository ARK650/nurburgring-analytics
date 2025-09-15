import { motion } from "motion/react";

interface NurburgringTrackProps {
  showCar?: boolean;
  className?: string;
}

export function NurburgringTrack({ showCar = true, className = "" }: NurburgringTrackProps) {
  // Simplified but recognizable Nürburgring Nordschleife track layout
  const trackPath = "M 100 200 Q 150 150 200 180 Q 250 220 300 200 Q 350 180 400 220 Q 450 260 500 240 Q 550 220 600 260 Q 650 300 700 280 Q 750 260 800 300 Q 850 340 900 320 Q 950 300 1000 340 Q 1050 380 1100 360 Q 1150 340 1200 380 Q 1250 420 1300 400 Q 1350 380 1400 420 Q 1450 460 1500 440 Q 1550 420 1600 460 Q 1650 500 1700 480 Q 1750 460 1800 500 Q 1850 540 1900 520 Q 1950 500 2000 540 Q 2050 580 2100 560 Q 2150 540 2200 580 Q 2250 620 2300 600 Q 2350 580 2400 620 Q 2450 660 2500 640 Q 2550 620 2600 660 Q 2650 700 2700 680 Q 2750 660 2800 700 Q 2850 740 2900 720 Q 2950 700 3000 740 Q 3050 780 3100 760 Q 3150 740 3200 780 Q 3250 820 3300 800 Q 3350 780 3400 820 Q 3450 860 3500 840 Q 3550 820 3600 860 Q 3650 900 3700 880 Q 3750 860 3800 900 Q 3850 940 3900 920 Q 3950 900 4000 940 Q 4050 980 4100 960 Q 4150 940 4200 980 L 4200 1200 Q 4150 1240 4100 1220 Q 4050 1200 4000 1240 Q 3950 1280 3900 1260 Q 3850 1240 3800 1280 Q 3750 1320 3700 1300 Q 3650 1280 3600 1320 Q 3550 1360 3500 1340 Q 3450 1320 3400 1360 Q 3350 1400 3300 1380 Q 3250 1360 3200 1400 Q 3150 1440 3100 1420 Q 3050 1400 3000 1440 Q 2950 1480 2900 1460 Q 2850 1440 2800 1480 Q 2750 1520 2700 1500 Q 2650 1480 2600 1520 Q 2550 1560 2500 1540 Q 2450 1520 2400 1560 Q 2350 1600 2300 1580 Q 2250 1560 2200 1600 Q 2150 1640 2100 1620 Q 2050 1600 2000 1640 Q 1950 1680 1900 1660 Q 1850 1640 1800 1680 Q 1750 1720 1700 1700 Q 1650 1680 1600 1720 Q 1550 1760 1500 1740 Q 1450 1720 1400 1760 Q 1350 1800 1300 1780 Q 1250 1760 1200 1800 Q 1150 1840 1100 1820 Q 1050 1800 1000 1840 Q 950 1880 900 1860 Q 850 1840 800 1880 Q 750 1920 700 1900 Q 650 1880 600 1920 Q 550 1960 500 1940 Q 450 1920 400 1960 Q 350 2000 300 1980 Q 250 1960 200 2000 Q 150 2040 100 2020 L 100 200 Z";
  
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 4300 2200" 
        className="w-full h-full opacity-20 scale-75"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Track outline */}
        <defs>
          <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Track surface */}
        <motion.path
          d={trackPath}
          fill="none"
          stroke="url(#trackGradient)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Track center line */}
        <motion.path
          d={trackPath}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="20 15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Famous corners markers */}
        <g className="opacity-60">
          {/* Start/Finish */}
          <circle cx="100" cy="200" r="8" fill="#10b981" />
          <text x="120" y="205" fill="#10b981" fontSize="24" fontWeight="bold">Start/Finish</text>
          
          {/* Flugplatz */}
          <circle cx="800" cy="300" r="6" fill="#f59e0b" />
          <text x="820" y="305" fill="#f59e0b" fontSize="20">Flugplatz</text>
          
          {/* Schwedenkreuz */}
          <circle cx="1500" cy="440" r="6" fill="#f59e0b" />
          <text x="1520" y="445" fill="#f59e0b" fontSize="20">Schwedenkreuz</text>
          
          {/* Adenauer Forst */}
          <circle cx="2400" cy="620" r="6" fill="#f59e0b" />
          <text x="2420" y="625" fill="#f59e0b" fontSize="20">Adenauer Forst</text>
          
          {/* Bergwerk */}
          <circle cx="3400" cy="820" r="6" fill="#f59e0b" />
          <text x="3420" y="825" fill="#f59e0b" fontSize="20">Bergwerk</text>
          
          {/* Kesselchen */}
          <circle cx="4200" cy="1200" r="6" fill="#f59e0b" />
          <text x="4100" y="1240" fill="#f59e0b" fontSize="20">Kesselchen</text>
          
          {/* Karussell */}
          <circle cx="3000" cy="1440" r="6" fill="#ef4444" />
          <text x="2900" y="1480" fill="#ef4444" fontSize="20">Karussell</text>
          
          {/* Döttinger Höhe */}
          <circle cx="1000" cy="1840" r="6" fill="#f59e0b" />
          <text x="1020" y="1845" fill="#f59e0b" fontSize="20">Döttinger Höhe</text>
        </g>

        {/* Animated racing car */}
        {showCar && (
          <motion.g>
            <motion.circle
              r="12"
              fill="#10b981"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
            >
              <animateMotion
                dur="25s"
                repeatCount="indefinite"
                rotate="auto"
                begin="3.5s"
              >
                <mpath href="#track-path" />
              </animateMotion>
            </motion.circle>
            
            {/* Car trail effect */}
            <motion.circle
              r="8"
              fill="#10b981"
              fillOpacity="0.4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7, duration: 0.5 }}
            >
              <animateMotion
                dur="25s"
                repeatCount="indefinite"
                rotate="auto"
                begin="3.7s"
              >
                <mpath href="#track-path" />
              </animateMotion>
            </motion.circle>
            
            <motion.circle
              r="4"
              fill="#10b981"
              fillOpacity="0.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9, duration: 0.5 }}
            >
              <animateMotion
                dur="25s"
                repeatCount="indefinite"
                rotate="auto"
                begin="3.9s"
              >
                <mpath href="#track-path" />
              </animateMotion>
            </motion.circle>
          </motion.g>
        )}

        {/* Hidden path for animation */}
        <path id="track-path" d={trackPath} fill="none" stroke="none" />
      </svg>

      {/* Track info overlay */}
      <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/20">
        <div className="text-emerald-400 text-sm font-bold mb-1">NÜRBURGRING NORDSCHLEIFE</div>
        <div className="text-xs text-slate-400">20.832 km • 73 turns • "The Green Hell"</div>
      </div>
    </div>
  );
}
