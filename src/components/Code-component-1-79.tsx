import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ReactNode } from 'react';

interface DataCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export function DataCard({ title, children, delay = 0 }: DataCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      whileHover={{ 
        rotateY: 5, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      style={{ perspective: "1000px" }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40 transition-colors duration-300">
        <div className="p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-400 tracking-wide">{title}</h3>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </div>
          <div className="h-full">
            {children}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}