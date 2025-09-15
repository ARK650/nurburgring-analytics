import { motion } from "motion/react";
import { Trophy, Clock, Zap, Star, Car } from "lucide-react";

const lapRecords = [
  {
    category: "Overall Record",
    time: "5:19.55",
    car: "Porsche 919 Hybrid Evo",
    year: "2018",
    driver: "Timo Bernhard",
    description: "Unrestricted prototype lap record",
    gradient: "from-yellow-400 to-orange-500",
    icon: Trophy
  },
  {
    category: "Production Car",
    time: "6:40.33",
    car: "AMG GT Black Series",
    year: "2021",
    driver: "Maro Engel",
    description: "Fastest street-legal production car",
    gradient: "from-emerald-400 to-green-500",
    icon: Car
  },
  {
    category: "Electric Vehicle",
    time: "6:45.90",
    car: "Porsche Taycan Turbo S",
    year: "2019",
    driver: "Lars Kern",
    description: "Fastest electric production car",
    gradient: "from-blue-400 to-cyan-500",
    icon: Zap
  },
  {
    category: "Front-Wheel Drive",
    time: "7:40.10",
    car: "Renault Mégane RS Trophy-R",
    year: "2019",
    driver: "Laurent Hurgon",
    description: "Fastest front-wheel drive car",
    gradient: "from-purple-400 to-pink-500",
    icon: Star
  }
];

const famousCars = [
  {
    name: "Porsche 919 Hybrid Evo",
    category: "LMP1 Prototype",
    power: "1160 HP",
    lapTime: "5:19.55",
    year: "2018",
    description: "The ultimate track weapon, freed from racing regulations",
    image: "🏎️"
  },
  {
    name: "Mercedes-AMG GT Black Series",
    category: "Production Car",
    power: "720 HP",
    lapTime: "6:40.33",
    year: "2021",
    description: "The most track-focused AMG ever built",
    image: "🚗"
  },
  {
    name: "Lamborghini Aventador SVJ",
    category: "Supercar",
    power: "770 HP",
    lapTime: "6:44.97",
    year: "2018",
    description: "Italian aerodynamic excellence meets German precision",
    image: "🏁"
  },
  {
    name: "Porsche 911 GT2 RS MR",
    category: "Track Special",
    power: "700 HP",
    lapTime: "6:40.33",
    year: "2018",
    description: "Manthey Racing's take on the ultimate 911",
    image: "🏆"
  }
];

export function RecordHolders() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-emerald-500/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-32 left-20 w-24 h-24 border border-blue-500/20 rounded-full"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-yellow-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Record Holders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Meet the legendary machines and drivers who have conquered the Green Hell, 
            setting lap times that define automotive excellence.
          </p>
        </motion.div>

        {/* Lap Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {lapRecords.map((record, index) => (
            <motion.div
              key={record.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${record.gradient} mb-4`}>
                  <record.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{record.category}</h3>
                <div className={`text-3xl font-bold bg-gradient-to-r ${record.gradient} bg-clip-text text-transparent mb-2`}>
                  {record.time}
                </div>
                <div className="text-emerald-400 font-medium mb-1">{record.car}</div>
                <div className="text-slate-400 text-sm mb-2">{record.driver} • {record.year}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{record.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Famous Cars Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Legendary Nürburgring Conquerors
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {famousCars.map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{car.image}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{car.name}</h4>
                      <div className="text-emerald-400 text-sm font-medium mb-2">{car.category}</div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div>
                          <div className="text-slate-400 text-xs">Power</div>
                          <div className="text-white font-semibold">{car.power}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-xs">Lap Time</div>
                          <div className="text-emerald-400 font-semibold">{car.lapTime}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-xs">Year</div>
                          <div className="text-white font-semibold">{car.year}</div>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-sm leading-relaxed">{car.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-2xl p-8 border border-emerald-500/20"
        >
          <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Think you can set a new record?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            The Nürburgring Nordschleife is open to the public during selected times. 
            Experience the legendary circuit yourself and become part of its storied history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors">
              Book Track Day
            </button>
            <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
