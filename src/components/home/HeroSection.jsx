import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920&h=1080&fit=crop"
          alt="Deep ocean underwater"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-luna-midnight/60 via-transparent to-luna-midnight" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-luna-light/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-luna-medium/20 border border-luna-medium/30 text-luna-light text-sm font-medium backdrop-blur-sm">
            🌊 Edukasi Lingkungan Laut
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
        >
          Jaga <span className="text-gradient">Lautmu</span>,
          <br />
          Jaga <span className="text-gradient">Masa Depanmu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Lebih dari 8 juta ton sampah plastik masuk ke lautan setiap tahun.
          Bersama kita bisa mengubah masa depan ekosistem laut untuk generasi yang akan datang.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/content" className="btn-primary text-base px-10 py-4">
            Pelajari Lebih Lanjut
          </Link>
          <Link to="/about" className="btn-secondary text-base px-10 py-4">
            Tentang Kami
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-luna-light/60" />
        </motion.div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path
            fill="#011C40"
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
