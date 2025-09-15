import { motion } from "motion/react";
import { Camera, MapPin, Clock, Trophy, Car, Users } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "track" | "cars" | "events" | "history";
  description: string;
  location?: string;
  year?: string;
  icon: any;
  gradient: string;
  imageAlt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Flugplatz Corner",
    category: "track",
    description: "The famous 'Airport' section where cars become briefly airborne",
    location: "Sector 1",
    year: "2024",
    icon: MapPin,
    gradient: "from-emerald-400 to-green-500",
    imageAlt: "Flugplatz corner aerial view"
  },
  {
    id: "2",
    title: "Porsche 919 Hybrid Evo",
    category: "cars",
    description: "The ultimate lap record holder conquering the Green Hell",
    location: "Döttinger Höhe",
    year: "2018",
    icon: Trophy,
    gradient: "from-yellow-400 to-orange-500",
    imageAlt: "Porsche 919 Hybrid Evo on track"
  },
  {
    id: "3",
    title: "Karussell Banking",
    category: "track",
    description: "The legendary banked concrete corner unique to the Nordschleife",
    location: "Sector 3",
    year: "1927",
    icon: MapPin,
    gradient: "from-blue-400 to-cyan-500",
    imageAlt: "Karussell banked corner"
  },
  {
    id: "4",
    title: "Tourist Drive Day",
    category: "events",
    description: "Public access sessions where enthusiasts experience the legend",
    location: "Full Circuit",
    year: "2024",
    icon: Users,
    gradient: "from-purple-400 to-pink-500",
    imageAlt: "Cars on track during public session"
  },
  {
    id: "5",
    title: "AMG GT Black Series",
    category: "cars",
    description: "Production car lap record holder showcasing road-legal perfection",
    location: "Start/Finish",
    year: "2021",
    icon: Car,
    gradient: "from-red-400 to-rose-500",
    imageAlt: "Mercedes AMG GT Black Series"
  },
  {
    id: "6",
    title: "Historic Grand Prix Era",
    category: "history",
    description: "When F1 legends raced on the full 28km Nordschleife",
    location: "Original Circuit",
    year: "1970s",
    icon: Clock,
    gradient: "from-indigo-400 to-purple-500",
    imageAlt: "Classic F1 cars racing"
  }
];

const categories = [
  { key: "track", label: "Track Sections", icon: MapPin },
  { key: "cars", label: "Legendary Cars", icon: Car },
  { key: "events", label: "Events", icon: Users },
  { key: "history", label: "History", icon: Clock }
];

export function TrackGallery() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Visual Journey
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience the Nürburgring through stunning imagery capturing the essence, 
            history, and legendary moments of the world's most challenging circuit.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-sm rounded-full border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all duration-300"
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                {/* Image Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${item.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center">
                    <item.icon className="w-12 h-12 text-white/80 mx-auto mb-2" />
                    <div className="text-white/60 text-sm">{item.imageAlt}</div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium capitalize">
                      {item.category}
                    </span>
                  </div>

                  {/* Photo Icon */}
                  <div className="absolute top-4 right-4">
                    <Camera className="w-5 h-5 text-white/60" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium">View Details</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient}`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-emerald-500/20"
        >
          <Camera className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Share Your Nürburgring Experience
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Have amazing photos or videos from your Nürburgring experience? 
            We'd love to feature them in our gallery and share your story with fellow enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors">
              Submit Photos
            </button>
            <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg transition-colors">
              View Full Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
