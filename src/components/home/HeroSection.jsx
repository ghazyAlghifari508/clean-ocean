import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-ocean-abyss overflow-hidden flex flex-col justify-center">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-ink/60 via-ocean-abyss to-ocean-deep/40 pointer-events-none"></div>

      {/* Minimal floating particles — only 6, very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/[0.06] animate-bubble-rise"
            style={{
              left: `${15 + i * 14}%`,
              bottom: "-5%",
              width: `${3 + i}px`,
              height: `${3 + i}px`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-24 pb-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-ocean-surface font-semibold tracking-widest uppercase text-sm mb-6"
          >
            OceanGuard — Edukasi Laut
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
          >
            Lautan Kita<br />
            <span className="text-ocean-surface">Sedang Menangis.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 font-sans mb-12 max-w-xl leading-relaxed"
          >
            Selami lautan bersama kami — dan temukan apa yang tersembunyi di balik permukaannya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link
              to="/simulation"
              className="inline-flex items-center gap-3 bg-white text-ocean-abyss px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-ocean-foam hover:shadow-lg active:scale-[0.98]"
            >
              Mulai Menyelam
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Clean wave transition */}
      <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 V46.29 c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120 H0 Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </section>
  );
}
