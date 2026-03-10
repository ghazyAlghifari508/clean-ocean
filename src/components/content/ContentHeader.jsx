import { useState } from "react";
import { motion } from "motion/react";
import { Fish as FishLottie } from "../home/OceanCreatures";
import { BookOpen, Compass } from "lucide-react";

/* Interactive fish that darts when cursor approaches */
function SwimFish({ direction = "right", y, delay, hue = 0 }) {
  const [scared, setScared] = useState(false);
  const isRight = direction === "right";
  return (
    <motion.div
      className="absolute pointer-events-auto cursor-pointer"
      style={{ top: y }}
      onHoverStart={() => setScared(true)}
      onHoverEnd={() => setScared(false)}
      initial={{ x: isRight ? "-100px" : "calc(100vw + 100px)" }}
      animate={
        scared
          ? { x: isRight ? "calc(100vw + 200px)" : "-200px" }
          : { x: isRight ? "calc(100vw + 100px)" : "-100px" }
      }
      transition={
        scared
          ? { duration: 0.8, ease: "easeOut" }
          : { duration: 22 + delay * 3, repeat: Infinity, ease: "linear", delay }
      }
    >
      <svg
        width="50"
        height="30"
        viewBox="0 0 50 30"
        fill="none"
        style={{
          transform: isRight ? "scaleX(1)" : "scaleX(-1)",
          filter: `hue-rotate(${hue}deg)`,
        }}
      >
        <ellipse cx="22" cy="15" rx="18" ry="11" fill="#4DB8DB" opacity="0.7" />
        <polygon points="40,15 50,7 50,23" fill="#1A8FB5" opacity="0.6" />
        <circle cx="13" cy="12" r="3" fill="#fff" opacity="0.9" />
        <circle cx="13" cy="12" r="1.5" fill="#063B52" />
        <path d="M28,9 Q33,15 28,21" stroke="#0C5F7F" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

export default function ContentHeader() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated underwater gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0369a1 0%, #0C5F7F 30%, #063B52 65%, #042A3B 100%)",
          }}
        />

        {/* Light particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 pointer-events-none"
            style={{
              width: 2 + (i % 3) * 2,
              height: 2 + (i % 3) * 2,
              left: `${(i * 6.7) % 95}%`,
              top: `${(i * 7.3) % 85}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + (i % 3) * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Interactive swimming fish */}
        <SwimFish direction="right" y="25%" delay={0} hue={0} />
        <SwimFish direction="left" y="55%" delay={5} hue={120} />
        <SwimFish direction="right" y="70%" delay={10} hue={240} />

        {/* Lottie fish */}
        <motion.div
          className="absolute top-[35%] opacity-40"
          animate={{ x: ["-100px", "calc(100vw + 100px)"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 3 }}
        >
          <FishLottie type={2} size={60} hue={180} />
        </motion.div>

        {/* Rising bubbles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bub-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 8 + (i % 3) * 5,
              height: 8 + (i % 3) * 5,
              left: `${10 + i * 15}%`,
              bottom: "-5%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
              boxShadow: "inset 0 0 6px rgba(255,255,255,0.3)",
            }}
            animate={{
              y: [0, -600],
              opacity: [0.5, 0],
              scale: [0.5, 1.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeIn",
            }}
          />
        ))}

        {/* Bottom reef silhouette */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20 md:h-28"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 Q60,60 120,80 Q180,40 260,70 Q340,30 420,65 Q500,40 580,55 Q660,30 740,60 Q820,40 900,70 Q980,50 1060,65 Q1140,35 1220,55 Q1300,45 1380,70 L1440,60 L1440,120 L0,120Z"
              fill="#0C5F7F"
              opacity="0.4"
            />
            <path
              d="M0,120 Q100,80 200,95 Q300,70 400,90 Q500,65 600,85 Q700,70 800,90 Q900,75 1000,85 Q1100,65 1200,80 Q1300,70 1440,85 L1440,120 L0,120Z"
              fill="#063B52"
            />
          </svg>
        </div>
      </div>

      {/* Hero text — pt for navbar clearance */}
      <div className="relative z-10 container-custom text-center pt-36 md:pt-40 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-ocean-foam text-sm font-medium backdrop-blur-md mb-6 shadow-lg shadow-ocean-mid/20"
        >
          <Compass className="w-4 h-4 text-ocean-sky" />
          Perpustakaan Laut
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Jelajahi Konten{" "}
          <span className="text-gradient">Edukasi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Selami pengetahuan tentang ekosistem laut, dampak pencemaran, dan
          solusi nyata yang bisa kita lakukan bersama untuk masa depan lautan yang lebih baik.
        </motion.p>

        {/* Quick stats with Lucide icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-8 mt-10"
        >
          {[
            { Icon: BookOpen, label: "Artikel", count: "9+" },
            { Icon: Compass, label: "Kategori", count: "3" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="w-10 h-10 rounded-lg bg-ocean-deep/40 border border-ocean-surface/15 flex items-center justify-center mx-auto mb-2">
                <s.Icon className="w-4 h-4 text-ocean-sky" />
              </div>
              <div className="text-white font-display font-bold text-lg">{s.count}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
