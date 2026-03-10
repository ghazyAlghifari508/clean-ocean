import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Compass, Shield, Waves, Anchor, Heart, Handshake, Eye } from "lucide-react";

export default function VisionMission() {
  const { ref, isInView } = useScrollAnimation();

  const cards = [
    {
      icon: <Compass className="w-6 h-6 text-ocean-sky" />,
      title: "Visi Kami",
      gradient: "from-ocean-sky to-ocean-surface",
      content: (
        <p className="text-white/55 leading-relaxed">
          Menjadi platform edukasi lingkungan laut terdepan di Indonesia yang menginspirasi
          jutaan orang untuk peduli dan bertindak nyata dalam menjaga kelestarian ekosistem
          laut demi generasi masa depan yang lebih baik.
        </p>
      ),
    },
    {
      icon: <Shield className="w-6 h-6 text-ocean-surface" />,
      title: "Misi Kami",
      gradient: "from-ocean-surface to-ocean-mid",
      content: (
        <ul className="space-y-3 text-white/55">
          {[
            "Menyediakan konten edukasi berkualitas tinggi dan berbasis data tentang isu sampah laut.",
            "Membangun pengalaman visual yang immersive untuk mendekatkan masyarakat dengan realita kondisi laut.",
            "Mendorong kolaborasi antara masyarakat, komunitas, lembaga pendidikan, dan pemerintah.",
            "Menginspirasi perubahan perilaku nyata dalam pengelolaan sampah sehari-hari.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-ocean-surface mt-2 flex-shrink-0 shadow-sm shadow-ocean-surface/50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: <Heart className="w-6 h-6 text-ocean-mid" />,
      title: "Nilai Kami",
      gradient: "from-ocean-mid to-ocean-deep",
      content: (
        <div className="space-y-3 text-white/55 leading-relaxed">
          <div className="flex items-start gap-3">
            <Waves className="w-5 h-5 text-ocean-sky/60 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white/80 font-medium">Transparansi</span> — Data dan fakta yang akurat menjadi landasan semua konten kami.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-ocean-sky/60 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white/80 font-medium">Empati</span> — Kami peduli pada setiap makhluk laut dan ekosistemnya.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Handshake className="w-5 h-5 text-ocean-sky/60 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white/80 font-medium">Kolaborasi</span> — Bersama, kita bisa membuat perubahan nyata.
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Anchor className="w-6 h-6 text-cyan-400" />,
      title: "Komitmen Kami",
      gradient: "from-cyan-400 to-ocean-sky",
      content: (
        <p className="text-white/55 leading-relaxed">
          Kami berkomitmen untuk terus mengembangkan platform ini sebagai sumber edukasi
          yang terpercaya dan menjangkau lebih banyak masyarakat Indonesia. Setiap konten
          dirancang dengan riset mendalam dan pendekatan visual yang menarik agar pesan
          konservasi laut tersampaikan dengan efektif.
        </p>
      ),
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0C5F7F 0%, #063B52 50%, #042A3B 100%)",
        }}
      />

      {/* Floating background particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-ocean-sky/10 pointer-events-none"
          style={{
            width: 4 + (i % 5) * 3,
            height: 4 + (i % 5) * 3,
            left: `${(i * 8.3) % 95}%`,
            top: `${(i * 7.1) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 5 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Wave top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-14"
        >
          <path
            fill="#063B52"
            d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,20 1440,30 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Visi &{" "}
            <span className="text-gradient">Misi</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Prinsip dan tujuan yang memandu setiap langkah kami dalam melindungi lautan Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative glass-card p-8 md:p-10 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} rounded-t-2xl`}
              />

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-ocean-surface/0 group-hover:bg-ocean-surface/5 transition-colors duration-500 rounded-[20px]" />

              {/* Corner bubble decoration on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-3 h-3 rounded-full bg-white/15" />
                <div className="w-2 h-2 rounded-full bg-white/10 ml-3 -mt-1" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-ocean-deep/50 border border-ocean-surface/15 flex items-center justify-center mb-6 group-hover:border-ocean-surface/30 group-hover:bg-ocean-deep/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-ocean-surface/10">
                  {card.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-14"
        >
          <path
            fill="#063B52"
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}
