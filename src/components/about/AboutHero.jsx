import { useState } from "react";
import { motion } from "motion/react";
import { Turtle } from "../home/OceanCreatures";
import { Anchor, Info } from "lucide-react";

/* Fish that dart away when cursor approaches */
function InteractiveFishSVG({ x, y, size = 40, hue = 0, direction = "right" }) {
  const [scared, setScared] = useState(false);
  const isRight = direction === "right";
  return (
    <motion.div
      className="absolute pointer-events-auto cursor-pointer"
      style={{ left: x, top: y }}
      onHoverStart={() => setScared(true)}
      onHoverEnd={() => setScared(false)}
      animate={
        scared
          ? {
            x: isRight ? 120 : -120,
            y: -30,
            scale: 1.15,
            transition: { type: "spring", stiffness: 200, damping: 15 },
          }
          : {
            x: 0,
            y: 0,
            scale: 1,
            transition: { duration: 2.5, type: "spring" },
          }
      }
    >
      <svg
        width={size}
        height={size * 0.6}
        viewBox="0 0 40 24"
        fill="none"
        style={{
          transform: isRight ? "scaleX(1)" : "scaleX(-1)",
          filter: `hue-rotate(${hue}deg)`,
        }}
      >
        <ellipse cx="18" cy="12" rx="14" ry="9" fill="#FFD700" opacity="0.8" />
        <polygon points="32,12 40,5 40,19" fill="#FFA500" opacity="0.7" />
        <circle cx="11" cy="10" r="2" fill="#fff" opacity="0.9" />
        <circle cx="11" cy="10" r="1" fill="#063B52" />
        <path d="M22,8 Q26,12 22,16" stroke="#E8A000" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated underwater gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0ea5e9 0%, #0369a1 25%, #0C5F7F 55%, #063B52 100%)",
          }}
        />

        {/* Light rays */}
        <div className="absolute top-0 inset-x-0 h-[80%] flex justify-center gap-10 opacity-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-32 h-[120%]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
                transform: `rotate(${-15 + i * 6}deg) translateY(-10%)`,
                transformOrigin: "top center",
                filter: "blur(10px)",
              }}
            />
          ))}
        </div>

        {/* Floating particles / plankton */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: 2 + (i % 4),
              height: 2 + (i % 4),
              left: `${5 + (i * 4.7) % 90}%`,
              top: `${10 + (i * 7.3) % 80}%`,
            }}
            animate={{
              y: [0, -20 - (i % 3) * 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: (i * 0.5) % 4,
            }}
          />
        ))}

        {/* Animated SVG coral reef silhouettes at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 200"
            className="w-full h-28 md:h-40"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,180 Q50,120 100,140 Q150,80 220,130 Q280,70 350,120 Q400,90 450,110 Q520,60 600,100 Q670,70 750,120 Q820,80 900,110 Q960,50 1040,100 Q1100,80 1180,130 Q1250,70 1320,110 Q1380,90 1440,120 L1440,200 L0,200Z"
              fill="#0C5F7F"
              opacity="0.5"
            />
            <path
              d="M0,200 Q80,150 160,170 Q240,130 320,160 Q380,120 450,150 Q530,100 620,140 Q700,110 780,150 Q860,120 940,145 Q1020,100 1120,140 Q1200,120 1280,155 Q1360,130 1440,160 L1440,200 L0,200Z"
              fill="#063B52"
            />
          </svg>
        </div>

        {/* Interactive fish that dart away on hover */}
        <InteractiveFishSVG x="8%" y="28%" size={42} hue={0} direction="right" />
        <InteractiveFishSVG x="85%" y="45%" size={35} hue={180} direction="left" />
        <InteractiveFishSVG x="70%" y="25%" size={28} hue={90} direction="left" />

        {/* Turtle swimming */}
        <motion.div
          className="absolute bottom-[20%] right-[10%] opacity-60"
          animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Turtle size={100} />
        </motion.div>

        {/* Rising bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bub-${i}`}
            className="absolute rounded-full"
            style={{
              width: 6 + (i % 4) * 4,
              height: 6 + (i % 4) * 4,
              left: `${8 + (i * 12) % 85}%`,
              bottom: "-5%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(255,255,255,0.1))",
              boxShadow: "inset 0 0 6px rgba(255,255,255,0.4)",
            }}
            animate={{
              y: [0, -500 - i * 60],
              opacity: [0.5, 0],
              scale: [0.5, 1.2],
            }}
            transition={{
              duration: 8 + (i % 3) * 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      {/* Text content — extra pt for navbar clearance */}
      <div className="relative z-10 container-custom text-center pt-36 md:pt-40 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-ocean-foam text-sm font-medium backdrop-blur-md mb-6 shadow-lg shadow-ocean-mid/20"
        >
          <Info className="w-4 h-4 text-ocean-sky" />
          Tentang Kami
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Mengenal{" "}
          <span className="text-gradient">OceanGuard</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Platform edukasi digital yang berdedikasi untuk meningkatkan kesadaran
          tentang pentingnya menjaga ekosistem laut dari ancaman sampah.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex items-start justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
