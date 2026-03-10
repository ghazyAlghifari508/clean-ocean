import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Coral, Seaweed } from "../home/OceanCreatures";

export default function AboutStory() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #063B52 0%, #0C5F7F 50%, #063B52 100%)",
        }}
      />

      {/* Floating bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 6 + (i % 3) * 5,
            height: 6 + (i % 3) * 5,
            left: `${10 + (i * 15) % 80}%`,
            bottom: "0%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
          }}
          animate={{
            y: [0, -400 - i * 50],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeIn",
          }}
        />
      ))}

      {/* Decorative seaweed left side */}
      <div className="absolute bottom-0 left-4 opacity-30 animate-sway origin-bottom">
        <Seaweed height={140} color="#2E8B57" />
      </div>
      <div className="absolute bottom-0 left-14 opacity-20 animate-sway-slow origin-bottom">
        <Seaweed height={100} color="#3CB371" />
      </div>

      {/* Decorative coral right side */}
      <div className="absolute bottom-0 right-6 opacity-25">
        <Coral size={55} color="#FF7F7F" />
      </div>
      <div className="absolute bottom-0 right-20 opacity-20">
        <Coral size={40} color="#FF9F6F" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Illustrated image area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-ocean-surface/20 shadow-2xl shadow-ocean-mid/20">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=500&fit=crop"
                alt="Ocean conservation"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss/50 via-transparent to-ocean-mid/20" />

              {/* Floating marine decorations on the image */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{ y: [-5, 5, -5], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg width="30" height="18" viewBox="0 0 40 24" fill="none" opacity="0.6">
                  <ellipse cx="18" cy="12" rx="14" ry="9" fill="#FFD700" />
                  <polygon points="32,12 40,5 40,19" fill="#FFA500" />
                  <circle cx="11" cy="10" r="2" fill="#fff" />
                </svg>
              </motion.div>
            </div>

            {/* Secondary image with coral frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-ocean-abyss hidden md:block shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=300&h=300&fit=crop"
                alt="Beach cleanup"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ocean-mid/20" />
            </motion.div>

            {/* Decorative glow ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-ocean-surface/5 blur-3xl" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ocean-deep/50 border border-ocean-surface/20 text-ocean-sky text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-ocean-sky animate-pulse" />
              Cerita Kami
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Lahir dari Kepedulian terhadap{" "}
              <span className="text-gradient">Lautan Indonesia</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                OceanGuard lahir dari keprihatinan mendalam atas kondisi lautan yang
                semakin tercemar oleh sampah plastik dan limbah manusia. Sebagai negara
                kepulauan terbesar di dunia, Indonesia memiliki tanggung jawab besar
                untuk menjaga kekayaan lautnya.
              </p>
              <p>
                Kami percaya bahwa perubahan dimulai dari kesadaran. Dengan menyajikan
                informasi yang visual, menarik, dan mudah dipahami, kami berharap dapat
                menginspirasi generasi muda untuk peduli dan bertindak nyata.
              </p>
              <p>
                Melalui pendekatan storytelling visual dan data yang akurat, OceanGuard
                menghadirkan pengalaman edukasi yang tidak hanya informatif, tetapi juga
                emosional dan berkesan.
              </p>
            </div>

            {/* Small animated stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { label: "Artikel", value: "50+" },
                { label: "Relawan", value: "200+" },
                { label: "Kota", value: "15+" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-ocean-deep/30 border border-ocean-surface/10"
                >
                  <div className="text-ocean-sky font-display font-bold text-xl">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave section divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-14"
        >
          <path
            fill="#063B52"
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            opacity="0.5"
          />
          <path
            fill="#0C5F7F"
            d="M0,40 C360,60 720,20 1080,40 C1260,50 1380,45 1440,40 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}
