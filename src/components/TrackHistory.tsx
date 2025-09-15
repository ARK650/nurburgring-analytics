import { motion } from "motion/react";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

const historyTimeline = [
  {
    year: "1927",
    title: "Track Construction Begins",
    description: "Work starts on the Nürburgring in the Eifel mountains, designed as a test track for German automotive industry.",
    icon: MapPin
  },
  {
    year: "1928",
    title: "Official Opening",
    description: "The Nürburgring opens with both the Nordschleife (North Loop) and Südschleife (South Loop), totaling 28.265 km.",
    icon: Calendar
  },
  {
    year: "1976",
    title: "Formula 1 Moves Away",
    description: "After Niki Lauda's near-fatal crash, Formula 1 deems the Nordschleife too dangerous for championship racing.",
    icon: Trophy
  },
  {
    year: "1983",
    title: "Modern GP Circuit Built",
    description: "A new 5.148 km Grand Prix circuit is constructed, bringing Formula 1 back to the Nürburgring.",
    icon: Calendar
  },
  {
    year: "2009",
    title: "Public Access Begins",
    description: "The Nordschleife becomes a public toll road, allowing enthusiasts to drive the legendary circuit.",
    icon: Users
  }
];

export function TrackHistory() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-black to-slate-900/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Legend of "Green Hell"
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            For nearly a century, the Nürburgring has stood as the ultimate proving ground for automotive excellence. 
            From its dangerous early days to its modern status as a public racing circuit, discover the rich history 
            of the world's most challenging track.
          </p>
        </motion.div>

        {/* Key Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">20.832 km</div>
            <div className="text-slate-300">Total Length</div>
            <div className="text-sm text-slate-400 mt-2">Nordschleife Circuit</div>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">73</div>
            <div className="text-slate-300">Turns</div>
            <div className="text-sm text-slate-400 mt-2">Challenging corners</div>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">300m</div>
            <div className="text-slate-300">Elevation Change</div>
            <div className="text-sm text-slate-400 mt-2">Maximum difference</div>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">6:11.13</div>
            <div className="text-slate-300">Lap Record</div>
            <div className="text-sm text-slate-400 mt-2">Porsche 919 Hybrid Evo</div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 rounded-full" />
          
          <div className="space-y-12">
            {historyTimeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      {index % 2 === 0 ? (
                        <>
                          <div className="text-2xl font-bold text-emerald-400">{event.year}</div>
                          <event.icon className="w-6 h-6 text-emerald-400" />
                        </>
                      ) : (
                        <>
                          <event.icon className="w-6 h-6 text-blue-400" />
                          <div className="text-2xl font-bold text-blue-400">{event.year}</div>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-emerald-500" />
                </div>
                
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Famous Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl text-slate-300 italic mb-4 max-w-4xl mx-auto">
            "The Nürburgring is the most beautiful, most difficult, most dangerous circuit in the world."
          </blockquote>
          <cite className="text-emerald-400 font-semibold">— Jackie Stewart, 3-time F1 World Champion</cite>
        </motion.div>
      </div>
    </section>
  );
}
