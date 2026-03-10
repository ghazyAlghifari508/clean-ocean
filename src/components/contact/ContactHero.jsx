import { useState } from "react";
import { motion } from "motion/react";
import { Diver, Jellyfish } from "../home/OceanCreatures";
import { Anchor } from "lucide-react";

/* Jellyfish with glow on hover */
function GlowJellyfish({ size, color, left, top, delay = 0 }) {
  const [glowing, setGlowing] = useState(false);
  return (
    <motion.div
      className="absolute pointer-events-auto cursor-pointer"
      style={{ left, top }}
      onHoverStart={() => setGlowing(true)}
      onHoverEnd={() => setGlowing(false)}
      animate={{
        y: [-15, 15, -15],
        x: [-5, 5, -5],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <motion.div
        animate={{
          filter: glowing
            ? `drop-shadow(0 0 20px ${color}) drop-shadow(0 0 40px ${color})`
            : "drop-shadow(0 0 0px transparent)",
          scale: glowing ? 1.15 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Jellyfish size={size} color={color} glow={false} />
      </motion.div>
    </motion.div>
  );
}

export default function ContactHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Calm underwater gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0C5F7F 0%, #063B52 40%, #042A3B 100%)",
          }}
        />

        {/* Gentle light rays */}
        <div className="absolute top-0 inset-x-0 h-[70%] flex justify-center gap-14 opacity-15 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-36 h-[130%]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
                transform: `rotate(${-10 + i * 7}deg) translateY(-10%)`,
                transformOrigin: "top center",
                filter: "blur(12px)",
              }}
            />
          ))}
        </div>

        {/* Interactive glowing jellyfish */}
        <GlowJellyfish size={70} color="#c084fc" left="8%" top="20%" delay={0} />
        <GlowJellyfish size={50} color="#60a5fa" left="85%" top="40%" delay={3} />
        <GlowJellyfish size={40} color="#67e8f9" left="75%" top="18%" delay={5} />

        {/* Diver illustration */}
        <motion.div
          className="absolute right-[12%] bottom-[10%] hidden md:block opacity-50"
          animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Diver size={100} />
        </motion.div>

        {/* Small swimming fish */}
        <motion.div
          className="absolute top-[45%] opacity-40"
          animate={{ x: ["-80px", "calc(100vw + 80px)"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg width="35" height="20" viewBox="0 0 40 24" fill="none">
            <ellipse cx="18" cy="12" rx="14" ry="9" fill="#FFD700" opacity="0.7" />
            <polygon points="32,12 40,5 40,19" fill="#FFA500" opacity="0.6" />
            <circle cx="11" cy="10" r="2" fill="#fff" opacity="0.9" />
            <circle cx="11" cy="10" r="1" fill="#063B52" />
          </svg>
        </motion.div>

        {/* Rising bubbles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 6 + (i % 3) * 4,
              height: 6 + (i % 3) * 4,
              left: `${15 + i * 16}%`,
              bottom: "-5%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
              boxShadow: "inset 0 0 6px rgba(255,255,255,0.3)",
            }}
            animate={{
              y: [0, -500],
              opacity: [0.4, 0],
              scale: [0.5, 1.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeIn",
            }}
          />
        ))}

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-20"
          >
            <path
              fill="#063B52"
              d="M0,40 C360,70 720,10 1080,40 C1260,55 1380,50 1440,40 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </div>

      {/* Text content — extra pt for navbar clearance */}
      <div className="relative z-10 container-custom text-center pt-36 md:pt-40 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-ocean-foam text-sm font-medium backdrop-blur-md mb-6 shadow-lg shadow-ocean-mid/20"
        >
          <Anchor className="w-4 h-4 text-ocean-sky" />
          Hubungi Kami
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Mari{" "}
          <span className="text-gradient">Berkolaborasi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Punya pertanyaan, masukan, atau ingin berkolaborasi?
          Kami senang mendengar dari Anda. Bersama-sama, kita bisa menjaga laut kita!
        </motion.p>
      </div>
    </section>
  );
}
