import { motion } from "motion/react";
import { Navigation } from "./components/Navigation";
import { NurburgringTrack } from "./components/NurburgringTrack";
import { TrackHistory } from "./components/TrackHistory";
import { RecordHolders } from "./components/RecordHolders";
import { CarCategories } from "./components/CarCategories";
import { TrackGallery } from "./components/TrackGallery";
import { DataCard } from "./components/DataCard";
import { AnimatedChart } from "./components/AnimatedChart";
import { CarGallery } from "./components/CarGallery";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Timer, Zap, Trophy, TrendingUp, MapPin, Calendar, Users, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Nürburgring track background */}
        <NurburgringTrack className="opacity-30" />

        {/* Grid background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Hero content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-8 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 text-sm px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              20.832 km • 73 turns • The Green Hell
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl mb-8 font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
          >
            NÜRBURGRING
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl text-slate-200 mb-4 font-light">
              The Ultimate Proving Ground
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Experience the legendary Nordschleife through comprehensive lap time data, 
              historic achievements, and the machines that conquered the Green Hell.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
              <Trophy className="w-5 h-5 mr-2" />
              Explore Records
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Track History
            </Button>
          </motion.div>

          {/* Key stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">5:19.55</div>
              <div className="text-slate-300 font-medium">Absolute Record</div>
              <div className="text-slate-400 text-sm">Porsche 919 Hybrid Evo</div>
            </div>
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">6:40.33</div>
              <div className="text-slate-300 font-medium">Production Car</div>
              <div className="text-slate-400 text-sm">AMG GT Black Series</div>
            </div>
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">1927</div>
              <div className="text-slate-300 font-medium">Since</div>
              <div className="text-slate-400 text-sm">Nearly a century</div>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-6 h-6 bg-emerald-400/60 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-32 left-16 w-4 h-4 bg-blue-400/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 right-10 w-3 h-3 bg-purple-400/50 rounded-full blur-sm"
        />
      </section>

      {/* Stats Dashboard */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black" />

        <div className="relative z-10 container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center content-spacing"
          >
            <h2 className="text-gradient-multi mb-6">
              Performance Dashboard
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Advanced analytics and real-time insights from the Green Hell
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hover-lift"
            >
              <DataCard title="FASTEST LAP TIMES" delay={0.1}>
                <AnimatedChart type="bar" title="Lap Times by Sector" />
                <div className="mt-4 p-4 glass-card border-emerald-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Current Record</span>
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">6:47.25</span>
                    </div>
                  </div>
                </div>
              </DataCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hover-lift"
            >
              <DataCard title="CARS BY CATEGORY" delay={0.2}>
                <AnimatedChart type="pie" title="Vehicle Distribution" />
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Total Entries</span>
                    <span className="text-white font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Active Sessions</span>
                    <span className="text-emerald-400 font-semibold animate-pulse-slow">23</span>
                  </div>
                </div>
              </DataCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="hover-lift"
            >
              <DataCard title="HISTORICAL RECORDS" delay={0.3}>
                <AnimatedChart type="line" title="Lap Time Evolution" />
                <div className="mt-4 p-4 glass-card border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Improvement</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 font-semibold">-26.8s</span>
                    </div>
                  </div>
                </div>
              </DataCard>
            </motion.div>
          </div>

          {/* Live data indicators */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 glass-card border-emerald-500/30 hover-glow">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 tracking-wide font-medium">
                LIVE DATA STREAMING
              </span>
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Track History Section */}
      <div id="history">
        <TrackHistory />
      </div>

      {/* Record Holders Section */}
      <div id="records">
        <RecordHolders />
      </div>

      {/* Car Categories Section */}
      <div id="cars">
        <CarCategories />
      </div>

      {/* Visual Gallery Section */}
      <div id="gallery">
        <TrackGallery />
      </div>

      {/* Car Gallery */}
      <CarGallery />

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-slate-800 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          >
            {/* Brand Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Nürburgring Analytics
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The definitive source for Nürburgring Nordschleife performance data, 
                lap times, and automotive history at the Green Hell.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-sm tracking-wide">
                  Data updated daily
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#records" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Lap Records
                  </a>
                </li>
                <li>
                  <a href="#history" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Track History
                  </a>
                </li>
                <li>
                  <a href="#cars" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Featured Cars
                  </a>
                </li>
                <li>
                  <a href="#events" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Track Days
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-emerald-400 w-full justify-start"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  API Documentation
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-blue-400 w-full justify-start"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Submit Lap Time
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-purple-400 w-full justify-start"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Contact Developer
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-slate-800 text-center"
          >
            <p className="text-slate-500 text-sm mb-4">
              © 2025 Nürburgring Analytics. Built with passion for motorsport and data visualization.
            </p>
            <p className="text-slate-600 text-xs">
              Not affiliated with Nürburgring GmbH. All lap times and data are for educational and entertainment purposes.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}