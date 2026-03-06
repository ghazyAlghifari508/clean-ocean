import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Seaweed, Coral, Shell, Starfish, Lobster } from "./OceanCreatures";

export default function CTABanner() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden mt-10">

      {/* ── Ocean Floor Graphics ── */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        {/* Sand floor */}
        <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-40 md:h-48">
          <path fill="#1a3a2e" d="M0,60 C120,40 240,80 360,50 C480,20 600,70 720,60 C840,50 960,75 1080,55 C1200,35 1320,65 1440,50 L1440,180 L0,180 Z" opacity="0.6" />
          <path fill="#2a4a3e" d="M0,90 C180,70 360,100 540,85 C720,70 900,95 1080,80 C1260,65 1380,85 1440,80 L1440,180 L0,180 Z" opacity="0.5" />
          <path fill="#3a5a4e" d="M0,110 C200,100 400,120 600,105 C800,90 1000,115 1200,100 C1350,90 1400,105 1440,100 L1440,180 L0,180 Z" opacity="0.4" />
        </svg>

        {/* Seaweed */}
        <div className="absolute bottom-0 left-[5%] animate-sway" style={{ transformOrigin: "bottom center" }}><Seaweed height={100} color="#2E8B57" /></div>
        <div className="absolute bottom-0 left-[15%] animate-sway-slow" style={{ transformOrigin: "bottom center", animationDelay: "1s" }}><Seaweed height={130} color="#3CB371" /></div>
        <div className="absolute bottom-0 left-[28%] animate-sway" style={{ transformOrigin: "bottom center", animationDelay: "0.5s" }}><Seaweed height={90} color="#2E8B57" /></div>
        <div className="absolute bottom-0 right-[20%] animate-sway-slow" style={{ transformOrigin: "bottom center", animationDelay: "2s" }}><Seaweed height={110} color="#228B22" /></div>
        <div className="absolute bottom-0 right-[8%] animate-sway" style={{ transformOrigin: "bottom center", animationDelay: "1.5s" }}><Seaweed height={125} color="#3CB371" /></div>
        <div className="absolute bottom-0 left-[50%] animate-sway" style={{ transformOrigin: "bottom center", animationDelay: "0.8s" }}><Seaweed height={95} color="#2E8B57" /></div>

        {/* Coral */}
        <div className="absolute bottom-2 left-[10%]"><Coral size={65} color="#FF7F7F" /></div>
        <div className="absolute bottom-2 left-[40%]"><Coral size={50} color="#FFB74D" /></div>
        <div className="absolute bottom-2 right-[15%]"><Coral size={55} color="#FF7F7F" /></div>
        <div className="absolute bottom-2 right-[35%]"><Coral size={45} color="#E07070" /></div>

        {/* Shells */}
        <div className="absolute bottom-4 left-[22%]"><Shell size={30} /></div>
        <div className="absolute bottom-3 left-[55%]" style={{ transform: "rotate(15deg)" }}><Shell size={25} /></div>
        <div className="absolute bottom-5 right-[28%]" style={{ transform: "rotate(-10deg)" }}><Shell size={35} /></div>

        {/* Starfish */}
        <div className="absolute bottom-4 left-[35%]" style={{ transform: "rotate(20deg)" }}><Starfish size={35} /></div>
        <div className="absolute bottom-3 right-[42%]" style={{ transform: "rotate(-15deg)" }}><Starfish size={28} /></div>

        {/* Lobster */}
        <div className="absolute bottom-6 left-[60%]"><div className="animate-lobster-walk"><Lobster size={55} /></div></div>
        <div className="absolute bottom-8 left-[75%]"><div className="animate-lobster-walk" style={{ animationDelay: "3s" }}><Lobster size={45} style={{ transform: "scaleX(-1)" }} /></div></div>
      </div>

      <div className="container-custom relative z-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 rounded-full bg-ocean-surface/20 flex items-center justify-center mx-auto mb-8 border border-ocean-surface/30 shadow-lg shadow-ocean-abyss/50 backdrop-blur-md"
          >
            <Heart className="w-7 h-7 text-ocean-sky" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Mulai dari <span className="text-gradient">Langkah Kecil</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed font-medium drop-shadow-md">
            Setiap tindakan kecil yang kita lakukan hari ini berdampak besar bagi masa depan
            lautan kita. Mari bergabung dan jadilah bagian dari perubahan bersama OceanGuard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/content" className="btn-primary text-base px-10 py-4 flex items-center justify-center gap-2 shadow-xl shadow-ocean-abyss/50">
              Jelajahi Edukasi
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-10 py-4 shadow-xl shadow-ocean-abyss/50 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10">
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
