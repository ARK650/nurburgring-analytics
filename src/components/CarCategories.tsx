import { motion } from "motion/react";
import { Car, Zap, Trophy, Users, ChevronRight, Clock, Gauge, Star } from "lucide-react";

const carCategories = [
  {
    title: "Road Legal Supercars",
    icon: Car,
    description: "Street-legal machines that blur the line between road and track",
    gradient: "from-emerald-400 to-green-500",
    cars: [
      {
        name: "Mercedes-AMG GT Black Series",
        lapTime: "6:40.33",
        power: "720 HP",
        year: "2021",
        price: "$325,000",
        country: "🇩🇪",
        brand: "Mercedes-AMG",
        image: "🏎️",
        highlights: ["Track-focused aero", "Handcrafted V8", "Active aerodynamics"]
      },
      {
        name: "Porsche 911 GT2 RS",
        lapTime: "6:47.25",
        power: "700 HP",
        year: "2017",
        price: "$293,200",
        country: "🇩🇪",
        brand: "Porsche",
        image: "🚗",
        highlights: ["Rear-wheel drive", "Twin-turbo flat-6", "Michelin Pilot Sport Cup 2"]
      },
      {
        name: "Lamborghini Aventador SVJ",
        lapTime: "6:44.97",
        power: "770 HP",
        year: "2018",
        price: "$517,770",
        country: "🇮🇹",
        brand: "Lamborghini",
        image: "🏁",
        highlights: ["Active aerodynamics", "V12 naturally aspirated", "Carbon fiber body"]
      },
      {
        name: "McLaren P1 LM",
        lapTime: "6:43.22",
        power: "986 HP",
        year: "2016",
        price: "$3,600,000",
        country: "🇬🇧",
        brand: "McLaren",
        image: "🏆",
        highlights: ["Hybrid powerplant", "Track-only aero", "Lightweight construction"]
      },
      {
        name: "Ferrari 488 Pista",
        lapTime: "7:00.03",
        power: "710 HP",
        year: "2018",
        price: "$350,000",
        country: "🇮🇹",
        brand: "Ferrari",
        image: "🔴",
        highlights: ["F1-derived aero", "Twin-turbo V8", "Carbon fiber construction"]
      },
      {
        name: "Porsche 911 GT3 RS",
        lapTime: "7:03.00",
        power: "520 HP",
        year: "2022",
        price: "$223,800",
        country: "🇩🇪",
        brand: "Porsche",
        image: "🟢",
        highlights: ["Natural aspiration", "PDK transmission", "Motorsport DNA"]
      },
      {
        name: "Aston Martin Vulcan",
        lapTime: "6:58.00",
        power: "820 HP",
        year: "2015",
        price: "$2,300,000",
        country: "🇬🇧",
        brand: "Aston Martin",
        image: "🟣",
        highlights: ["Track-only beast", "V12 engine", "Limited production"]
      },
      {
        name: "Koenigsegg One:1",
        lapTime: "6:45.00",
        power: "1340 HP",
        year: "2014",
        price: "$2,850,000",
        country: "🇸🇪",
        brand: "Koenigsegg",
        image: "⚡",
        highlights: ["1:1 power ratio", "Megacar class", "Advanced aerodynamics"]
      },
      {
        name: "Pagani Huayra BC",
        lapTime: "6:52.00",
        power: "790 HP",
        year: "2016",
        price: "$2,550,000",
        country: "🇮🇹",
        brand: "Pagani",
        image: "💎",
        highlights: ["Art meets performance", "AMG V12", "Carbon titanium"]
      },
      {
        name: "Bugatti Chiron Pur Sport",
        lapTime: "7:25.00",
        power: "1479 HP",
        year: "2020",
        price: "$3,600,000",
        country: "🇫🇷",
        brand: "Bugatti",
        image: "👑",
        highlights: ["Quad-turbo W16", "Track-focused", "Ultimate luxury"]
      },
      {
        name: "Ford GT",
        lapTime: "7:04.00",
        power: "647 HP",
        year: "2017",
        price: "$450,000",
        country: "🇺🇸",
        brand: "Ford",
        image: "🦅",
        highlights: ["Carbon fiber monocoque", "EcoBoost V6", "Le Mans winner"]
      },
      {
        name: "Chevrolet Corvette Z06",
        lapTime: "7:19.00",
        power: "670 HP",
        year: "2023",
        price: "$106,395",
        country: "🇺🇸",
        brand: "Chevrolet",
        image: "🇺🇸",
        highlights: ["Mid-engine layout", "Supercharged V8", "Track package"]
      }
    ]
  },
  {
    title: "Electric Vehicles",
    icon: Zap,
    description: "The future of performance with instant torque and silent speed",
    gradient: "from-blue-400 to-cyan-500",
    cars: [
      {
        name: "Porsche Taycan Turbo S",
        lapTime: "7:42.34",
        power: "750 HP",
        year: "2019",
        price: "$185,000",
        country: "🇩🇪",
        brand: "Porsche",
        image: "⚡",
        highlights: ["800V architecture", "Adaptive air suspension", "Instant torque"]
      },
      {
        name: "Tesla Model S Plaid",
        lapTime: "7:35.58",
        power: "1020 HP",
        year: "2021",
        price: "$129,990",
        country: "🇺🇸",
        brand: "Tesla",
        image: "🔋",
        highlights: ["Tri-motor AWD", "Carbon fiber spoiler", "Track mode"]
      },
      {
        name: "BMW iX M60",
        lapTime: "8:14.38",
        power: "610 HP",
        year: "2022",
        price: "$108,900",
        country: "🇩🇪",
        brand: "BMW",
        image: "🔷",
        highlights: ["Adaptive dampers", "M Sport package", "Sustainable materials"]
      },
      {
        name: "Mercedes EQS AMG 53",
        lapTime: "8:25.00",
        power: "649 HP",
        year: "2022",
        price: "$125,000",
        country: "🇩🇪",
        brand: "Mercedes-AMG",
        image: "💫",
        highlights: ["AMG performance", "Luxury interior", "Advanced aero"]
      },
      {
        name: "Lucid Air Dream Edition",
        lapTime: "7:45.00",
        power: "1111 HP",
        year: "2021",
        price: "$169,000",
        country: "🇺🇸",
        brand: "Lucid",
        image: "✨",
        highlights: ["Longest range", "Glass roof", "Dream Drive Pro"]
      },
      {
        name: "Audi e-tron GT RS",
        lapTime: "8:05.00",
        power: "637 HP",
        year: "2021",
        price: "$142,400",
        country: "🇩🇪",
        brand: "Audi",
        image: "🔶",
        highlights: ["800V charging", "Quattro AWD", "Carbon roof"]
      },
      {
        name: "Polestar 3",
        lapTime: "8:30.00",
        power: "517 HP",
        year: "2023",
        price: "$73,400",
        country: "🇸🇪",
        brand: "Polestar",
        image: "⭐",
        highlights: ["Performance pack", "Air suspension", "Google built-in"]
      },
      {
        name: "Genesis Electrified GV70",
        lapTime: "8:45.00",
        power: "429 HP",
        year: "2022",
        price: "$59,990",
        country: "🇰🇷",
        brand: "Genesis",
        image: "🌟",
        highlights: ["Luxury EV", "AWD system", "Face Connect"]
      },
      {
        name: "Rivian R1T",
        lapTime: "8:55.00",
        power: "835 HP",
        year: "2021",
        price: "$73,000",
        country: "🇺🇸",
        brand: "Rivian",
        image: "🏔️",
        highlights: ["Electric truck", "Quad-motor", "Tank turn"]
      },
      {
        name: "Ford Mustang Mach-E GT",
        lapTime: "8:40.00",
        power: "480 HP",
        year: "2021",
        price: "$59,400",
        country: "🇺🇸",
        brand: "Ford",
        image: "🐎",
        highlights: ["Mustang heritage", "AWD system", "Track mode"]
      },
      {
        name: "Jaguar I-PACE",
        lapTime: "8:50.00",
        power: "394 HP",
        year: "2018",
        price: "$69,850",
        country: "🇬🇧",
        brand: "Jaguar",
        image: "🐆",
        highlights: ["British luxury", "AWD system", "Aluminum architecture"]
      }
    ]
  },
  {
    title: "Race Cars & Prototypes",
    icon: Trophy,
    description: "Purpose-built machines pushing the absolute limits of physics",
    gradient: "from-red-400 to-orange-500",
    cars: [
      {
        name: "Porsche 919 Hybrid Evo",
        lapTime: "5:19.55",
        power: "1160 HP",
        year: "2018",
        price: "Priceless",
        country: "🇩🇪",
        brand: "Porsche",
        image: "🏎️",
        highlights: ["LMP1 technology", "Unrestricted aero", "Hybrid energy recovery"]
      },
      {
        name: "Mercedes W11 F1",
        lapTime: "5:24.00*",
        power: "1000 HP",
        year: "2020",
        price: "$15,000,000",
        country: "🇩🇪",
        brand: "Mercedes-AMG",
        image: "🏁",
        highlights: ["Formula 1 champion", "DAS system", "Aerodynamic perfection"]
      },
      {
        name: "Radical SR8 LM",
        lapTime: "6:48.00",
        power: "460 HP",
        year: "2009",
        price: "$175,000",
        country: "🇬🇧",
        brand: "Radical",
        image: "⚡",
        highlights: ["Motorcycle engine", "Extreme downforce", "Minimal weight"]
      },
      {
        name: "McLaren MP4/4 F1",
        lapTime: "5:45.00*",
        power: "685 HP",
        year: "1988",
        price: "$8,500,000",
        country: "🇬🇧",
        brand: "McLaren",
        image: "🏆",
        highlights: ["Most successful F1", "Senna & Prost", "15/16 wins"]
      },
      {
        name: "Audi R18 e-tron",
        lapTime: "6:11.13",
        power: "550 HP",
        year: "2014",
        price: "$3,500,000",
        country: "🇩🇪",
        brand: "Audi",
        image: "🔋",
        highlights: ["Le Mans winner", "Hybrid LMP1", "TDI technology"]
      },
      {
        name: "BMW V12 LMR",
        lapTime: "6:25.00",
        power: "580 HP",
        year: "1999",
        price: "$2,800,000",
        country: "🇩🇪",
        brand: "BMW",
        image: "🔷",
        highlights: ["Le Mans winner", "V12 engine", "Open cockpit"]
      },
      {
        name: "Ferrari 333 SP",
        lapTime: "6:35.00",
        power: "650 HP",
        year: "1994",
        price: "$1,200,000",
        country: "🇮🇹",
        brand: "Ferrari",
        image: "🔴",
        highlights: ["Sports prototype", "V12 soundtrack", "IMSA champion"]
      },
      {
        name: "Peugeot 908 HDi FAP",
        lapTime: "6:18.00",
        power: "700 HP",
        year: "2007",
        price: "$4,200,000",
        country: "🇫🇷",
        brand: "Peugeot",
        image: "🦁",
        highlights: ["Diesel power", "Le Mans winner", "Advanced aero"]
      },
      {
        name: "Toyota TS050 Hybrid",
        lapTime: "6:07.00",
        power: "986 HP",
        year: "2016",
        price: "$5,000,000",
        country: "🇯🇵",
        brand: "Toyota",
        image: "🌸",
        highlights: ["Hybrid LMP1", "Le Mans winner", "AWD system"]
      },
      {
        name: "Nissan R390 GT1",
        lapTime: "6:30.00",
        power: "641 HP",
        year: "1997",
        price: "$1,800,000",
        country: "🇯🇵",
        brand: "Nissan",
        image: "🗾",
        highlights: ["GT1 class", "Twin-turbo V8", "Road version exists"]
      },
      {
        name: "Bentley Speed 8",
        lapTime: "6:22.00",
        power: "600 HP",
        year: "2003",
        price: "$3,000,000",
        country: "🇬🇧",
        brand: "Bentley",
        image: "🎩",
        highlights: ["Le Mans winner", "British luxury", "Twin-turbo W12"]
      }
    ]
  },
  {
    title: "Track Day Specials",
    icon: Users,
    description: "Accessible performance for enthusiasts and weekend warriors",
    gradient: "from-purple-400 to-pink-500",
    cars: [
      {
        name: "BMW M2 CS",
        lapTime: "7:52.00",
        power: "450 HP",
        year: "2020",
        price: "$83,600",
        country: "🇩🇪",
        brand: "BMW",
        image: "🔷",
        highlights: ["Lightweight construction", "Track-tuned suspension", "Manual transmission"]
      },
      {
        name: "Caterham Seven 620R",
        lapTime: "7:55.00",
        power: "310 HP",
        year: "2013",
        price: "$87,000",
        country: "🇬🇧",
        brand: "Caterham",
        image: "🟢",
        highlights: ["Extreme power-to-weight", "Pure driving experience", "No driver aids"]
      },
      {
        name: "Ariel Atom 4",
        lapTime: "7:40.00",
        power: "320 HP",
        year: "2018",
        price: "$75,000",
        country: "🇬🇧",
        brand: "Ariel",
        image: "💨",
        highlights: ["Exposed chassis", "Motorcycle engine", "Minimal weight"]
      },
      {
        name: "KTM X-Bow GT-XR",
        lapTime: "7:45.00",
        power: "365 HP",
        year: "2020",
        price: "$185,000",
        country: "🇦🇹",
        brand: "KTM",
        image: "🧡",
        highlights: ["Carbon monocoque", "Audi engine", "Track weapon"]
      },
      {
        name: "Lotus Exige Cup 430",
        lapTime: "7:38.00",
        power: "430 HP",
        year: "2017",
        price: "$118,000",
        country: "🇬🇧",
        brand: "Lotus",
        image: "🟡",
        highlights: ["Supercharged V6", "Extreme aero", "Lightweight ethos"]
      },
      {
        name: "Alpine A110S",
        lapTime: "8:05.00",
        power: "292 HP",
        year: "2019",
        price: "$73,350",
        country: "🇫🇷",
        brand: "Alpine",
        image: "🔵",
        highlights: ["French finesse", "Mid-engine layout", "Perfect balance"]
      },
      {
        name: "Ginetta G60-LT-P1",
        lapTime: "7:30.00",
        power: "600 HP",
        year: "2018",
        price: "$520,000",
        country: "🇬🇧",
        brand: "Ginetta",
        image: "🏁",
        highlights: ["LMP1 for road", "Carbon fiber body", "Track focus"]
      },
      {
        name: "Donkervoort D8 GTO-JD70",
        lapTime: "7:25.00",
        power: "415 HP",
        year: "2020",
        price: "$180,000",
        country: "🇳🇱",
        brand: "Donkervoort",
        image: "🟠",
        highlights: ["Dutch engineering", "Audi engine", "Carbon everything"]
      },
      {
        name: "BAC Mono R",
        lapTime: "7:20.00",
        power: "340 HP",
        year: "2019",
        price: "$235,000",
        country: "🇬🇧",
        brand: "BAC",
        image: "⚫",
        highlights: ["Single seater", "Cosworth engine", "Ultimate focus"]
      },
      {
        name: "Vuhl 05RR",
        lapTime: "7:50.00",
        power: "385 HP",
        year: "2017",
        price: "$85,000",
        country: "🇲🇽",
        brand: "Vuhl",
        image: "🌶️",
        highlights: ["Mexican engineering", "Ford EcoBoost", "Track weapon"]
      },
      {
        name: "Dallara Stradale",
        lapTime: "7:10.00",
        power: "400 HP",
        year: "2017",
        price: "$180,000",
        country: "🇮🇹",
        brand: "Dallara",
        image: "⚪",
        highlights: ["F1 tech transfer", "Carbon monocoque", "Pure performance"]
      },
      {
        name: "Praga R1R",
        lapTime: "7:15.00",
        power: "365 HP",
        year: "2020",
        price: "$195,000",
        country: "🇨🇿",
        brand: "Praga",
        image: "🔴",
        highlights: ["Czech precision", "Race car for road", "Extreme aero"]
      }
    ]
  }
];

export function CarCategories() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/80 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nürburgring Hall of Fame
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From street-legal supercars to purpose-built race machines, explore the diverse vehicles 
            that have left their mark on the world's most challenging circuit.
          </p>
        </motion.div>

        <div className="space-y-16">
          {carCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient}`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <p className="text-slate-400 mt-1">{category.description}</p>
                </div>
              </div>

              {/* Cars Horizontal Scroll */}
              <div className="relative">
                {/* Scroll container */}
                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500">
                  {category.cars.map((car, carIndex) => (
                    <motion.div
                      key={car.name}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: carIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group/card flex-shrink-0"
                    >
                      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02] overflow-hidden w-80">
                        {/* Car Image Header */}
                        <div className={`h-32 bg-gradient-to-br ${category.gradient} relative overflow-hidden flex items-center justify-center`}>
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="relative z-10 text-center">
                            <div className="text-4xl mb-2">{car.image}</div>
                            <div className="text-white/80 text-sm font-medium">{car.brand}</div>
                          </div>
                          
                          {/* Country Flag */}
                          <div className="absolute top-3 left-3 text-2xl bg-white/20 backdrop-blur-sm rounded-full p-1">
                            {car.country}
                          </div>

                          {/* Lap Time Badge */}
                          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                            <div className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                              {car.lapTime}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Car Header */}
                          <div className="mb-4">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-lg font-bold text-white group-hover/card:text-emerald-400 transition-colors leading-tight">
                                {car.name}
                              </h4>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                              <span>{car.year}</span>
                              <span>•</span>
                              <span>{car.brand}</span>
                              <span>•</span>
                              <span>{car.country}</span>
                            </div>
                          </div>

                          {/* Performance Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-slate-800/50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Gauge className="w-3 h-3 text-emerald-400" />
                                <div className="text-slate-400 text-xs">Power</div>
                              </div>
                              <div className="text-white font-semibold text-sm">{car.power}</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Star className="w-3 h-3 text-yellow-400" />
                                <div className="text-slate-400 text-xs">Price</div>
                              </div>
                              <div className="text-white font-semibold text-sm">{car.price}</div>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="space-y-2 mb-4">
                            <div className="text-slate-400 text-xs font-medium uppercase tracking-wide">Key Features:</div>
                            {car.highlights.slice(0, 3).map((highlight, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <ChevronRight className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300 text-xs leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Bottom Section */}
                          <div className="pt-4 border-t border-slate-700">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span className="text-slate-400 text-xs">Nürburgring</span>
                              </div>
                              <div className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                {car.lapTime}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll indicators */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-full bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-8 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-12 border border-emerald-500/20"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              More Data Coming Soon
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              We're working on expanding our database with comprehensive lap times, 
              vehicle specifications, and historical data. Soon you'll be able to filter, 
              compare, and analyze performance data across all categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors">
                Subscribe for Updates
              </button>
              <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg transition-colors">
                Submit Your Data
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
