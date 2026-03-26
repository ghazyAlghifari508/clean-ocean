import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force play video on mount for browsers that might block initial autoplay
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log("Video autoplay prevented:", error);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-ocean-abyss overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.pixabay.com/video/2025/02/19/259359_large.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-ocean-abyss/40 z-[1] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-ink/40 via-transparent to-ocean-abyss/60 z-[2] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-24 pb-40 flex flex-col items-center">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-ocean-surface font-semibold tracking-widest uppercase text-sm mb-6"
          >
            OClean Dive — Edukasi Laut
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
          >
            Lautan Kita<br />
            <span className="text-ocean-surface underline decoration-white/20 underline-offset-8">Sedang Menangis.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 font-sans mb-12 max-w-2xl mx-auto leading-relaxed"
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
              className="inline-flex items-center gap-3 bg-white text-ocean-abyss px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-ocean-sky hover:text-white hover:shadow-xl active:scale-[0.98]"
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

      {/* Organic Wave Transition */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-[5]">
        <svg
          className="relative block w-full h-[60px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224.5C672,245.3,768,266.7,864,250.7C960,234.7,1056,181.3,1152,165.3C1248,149.3,1344,170.7,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
