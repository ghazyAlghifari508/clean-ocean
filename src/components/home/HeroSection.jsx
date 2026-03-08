import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Parallax and cinematic scaling effects
  const y = useTransform(scrollY, [0, window.innerHeight], [0, 250]);
  const scale = useTransform(scrollY, [0, window.innerHeight], [1, 1.1]); // Slight scale up instead of down so it doesn't reveal edges, or we scale the container and keep overflow hidden.
  // Actually, to create a cinematic "scale down" effect on scroll while keeping it full width, 
  // we can scale the video down slightly while translating it down.
  const videoScale = useTransform(scrollY, [0, window.innerHeight], [1.05, 1]);
  const videoOpacity = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0.6]);

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <motion.div
        className="absolute inset-0 z-0 origin-center bg-ocean-abyss"
        style={{ y }}
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop"
          className="w-full h-full object-cover bg-ocean-abyss transition-opacity duration-700"
          style={{ scale: videoScale, opacity: videoOpacity }}
        >
          <source src="/assets/Video%20Project.mp4" type="video/mp4" />
        </motion.video>

        {/* Subtle dark overlay for aesthetics to make text pop gently */}
        <div className="absolute inset-0 bg-ocean-abyss/40 pointer-events-none" />

        {/* Only a subtle bottom gradient to blend the very edge into the ocean below, keeping the video bright */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0ea5e9] to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${8 + i * 7.5}%`,
              top: `${15 + (i % 4) * 20}%`,
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              background: `radial-gradient(circle, rgba(224,247,250,${0.4 + (i % 3) * 0.15}), transparent)`,
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
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
          <span className="inline-block px-5 py-2.5 rounded-full bg-ocean-surface/25 border border-ocean-sky/40 text-ocean-foam text-sm font-semibold backdrop-blur-md shadow-lg shadow-ocean-mid/10">
            🌊 Edukasi Lingkungan Laut
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
        >
          Jaga <span className="text-gradient">Lautmu</span>,
          <br />
          Jaga <span className="text-gradient">Masa Depanmu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
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
          <Link to="/content" className="btn-primary text-base px-10 py-4 shadow-xl shadow-ocean-mid/20">
            Pelajari Lebih Lanjut
          </Link>
          <Link to="/about" className="btn-secondary text-base px-10 py-4">
            Tentang Kami
          </Link>
        </motion.div>
      </div>

      {/* Friendly Scroll Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group p-4"
        aria-label="Scroll to next section"
      >
        <span className="text-white/80 text-sm font-semibold tracking-wider group-hover:text-white transition-colors duration-300 drop-shadow-md">
          Mulai Menjelajah
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.button>

      {/* Soft Ocean Wave Divider */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[8vh] md:h-[12vh]"
          data-name="Ocean Wave Divider"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25.09,1081.56,9.15,1164,15.61c12.19,1,24.2,2.37,36,4.03V120H0Z"
            fill="#063B52" /* Matches ocean-abyss color */
          ></path>
        </svg>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path
            fill="#063B52"
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
