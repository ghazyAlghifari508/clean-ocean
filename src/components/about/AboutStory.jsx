import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AboutStory() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-luna-midnight">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=500&fit=crop"
                alt="Ocean conservation"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-luna-midnight hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=300&h=300&fit=crop"
                alt="Beach cleanup"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-luna-deep/50 text-luna-light text-xs font-semibold uppercase tracking-widest mb-4">
              Cerita Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Lahir dari Kepedulian terhadap <span className="text-gradient">Lautan Indonesia</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                OceanGuard lahir dari keprihatinan mendalam atas kondisi lautan yang semakin
                tercemar oleh sampah plastik dan limbah manusia. Sebagai negara kepulauan terbesar
                di dunia, Indonesia memiliki tanggung jawab besar untuk menjaga kekayaan lautnya.
              </p>
              <p>
                Kami percaya bahwa perubahan dimulai dari kesadaran. Dengan menyajikan informasi
                yang visual, menarik, dan mudah dipahami, kami berharap dapat menginspirasi
                generasi muda untuk peduli dan bertindak nyata dalam menjaga kelestarian
                ekosistem laut.
              </p>
              <p>
                Melalui pendekatan storytelling visual dan data yang akurat, OceanGuard
                menghadirkan pengalaman edukasi yang tidak hanya informatif, tetapi juga
                emosional dan berkesan — mendekatkan setiap orang dengan realita kondisi
                lautan kita saat ini.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
