import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useEffect, useState } from 'react';

const lapTimeData = [
  { track: 'T1', time: 142.3, driver: 'Hamilton' },
  { track: 'T2', time: 156.8, driver: 'Verstappen' },
  { track: 'T3', time: 149.2, driver: 'Leclerc' },
  { track: 'T4', time: 158.7, driver: 'Russell' },
  { track: 'T5', time: 147.9, driver: 'Norris' },
];

const categoryData = [
  { name: 'Formula 1', value: 35, color: '#00ff88' },
  { name: 'GT3', value: 28, color: '#0080ff' },
  { name: 'LMP1', value: 22, color: '#ff0080' },
  { name: 'Touring', value: 15, color: '#ffaa00' },
];

const historicalData = [
  { year: '2019', record: 405.7 },
  { year: '2020', record: 398.2 },
  { year: '2021', record: 392.8 },
  { year: '2022', record: 389.4 },
  { year: '2023', record: 384.1 },
  { year: '2024', record: 378.9 },
];

interface AnimatedChartProps {
  type: 'bar' | 'line' | 'pie';
  title: string;
}

export function AnimatedChart({ type, title }: AnimatedChartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={lapTimeData}>
              <XAxis 
                dataKey="track" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#10b981', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#10b981', fontSize: 12 }}
              />
              <Bar 
                dataKey="time" 
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
              >
                <motion.rect
                  initial={{ scaleY: 0 }}
                  animate={isVisible ? { scaleY: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </Bar>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00ff88" />
                  <stop offset="100%" stopColor="#0080ff" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={historicalData}>
              <XAxis 
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#10b981', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#10b981', fontSize: 12 }}
              />
              <Line 
                type="monotone" 
                dataKey="record" 
                stroke="#00ff88"
                strokeWidth={3}
                dot={{ fill: '#00ff88', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#ff0080' }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-lg" />
      {renderChart()}
      
      {type === 'pie' && (
        <div className="flex flex-wrap gap-2 mt-4">
          {categoryData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-2"
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-slate-300">{item.name}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}