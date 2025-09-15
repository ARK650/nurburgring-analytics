import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const carImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1686426740904-30eef3f8e5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjB0cmFjayUyMG51cmJ1cmdyaW5nfGVufDF8fHx8MTc1NzYyMjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Nürburgring Legend",
    category: "Track Special"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1674652760267-8ebe846e184b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwb25lJTIwY2FyJTIwcmFjaW5nfGVufDF8fHx8MTc1NzYyMjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Formula 1 Beast",
    category: "Open Wheel"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1689782917982-648ebf172e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmNhciUyMHJhY2luZyUyMHRyYWNrfGVufDF8fHx8MTc1NzYyMjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Supercar Elite",
    category: "GT Racing"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1707828303718-7683d7f44568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcnNwb3J0JTIwcmFjaW5nJTIwY2FyJTIwc3BlZWR8ZW58MXx8fHwxNzU3NjIyNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Speed Demon",
    category: "Motorsport"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1717415840036-08a13f830214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwY29ja3BpdCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc2MjI0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cockpit View",
    category: "Interior"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1727166827019-f82eb1eb1cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjByYWNpbmd8ZW58MXx8fHwxNzU3NjIyNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Luxury Racer",
    category: "Sports Car"
  }
];

export function CarGallery() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Racing Gallery
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore the machines that push the limits on the world's most challenging circuit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carImages.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50"
              style={{ perspective: "1000px" }}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <ImageWithFallback
                    src={car.url}
                    alt={car.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                      <div className="w-6 h-6 border-2 border-emerald-400 rounded-full border-t-transparent animate-spin" />
                    </div>
                    <p className="text-emerald-400 tracking-wide">VIEW DETAILS</p>
                  </div>
                </motion.div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg text-white">{car.title}</h3>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </div>
                <p className="text-sm text-slate-400">{car.category}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl border border-emerald-500/0 group-hover:border-emerald-500/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}