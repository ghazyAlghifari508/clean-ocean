import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-deep-ocean relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path fill="#063B52" d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,0 L0,0 Z" />
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
            Visi & <span className="text-gradient">Misi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-ocean-sky to-ocean-surface" />
            <div className="w-14 h-14 rounded-2xl bg-ocean-sky/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-ocean-sky" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Visi Kami</h3>
            <p className="text-white/50 leading-relaxed">
              Menjadi platform edukasi lingkungan laut terdepan di Indonesia yang menginspirasi
              jutaan orang untuk peduli dan bertindak nyata dalam menjaga kelestarian ekosistem
              laut demi generasi masa depan yang lebih baik.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-ocean-surface to-ocean-deep" />
            <div className="w-14 h-14 rounded-2xl bg-ocean-surface/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-ocean-surface" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Misi Kami</h3>
            <ul className="space-y-3 text-white/50">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-surface mt-2 flex-shrink-0" />
                <span>Menyediakan konten edukasi berkualitas tinggi dan berbasis data tentang isu sampah laut.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-surface mt-2 flex-shrink-0" />
                <span>Membangun pengalaman visual yang immersive untuk mendekatkan masyarakat dengan realita kondisi laut.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-surface mt-2 flex-shrink-0" />
                <span>Mendorong kolaborasi antara masyarakat, komunitas, lembaga pendidikan, dan pemerintah.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-surface mt-2 flex-shrink-0" />
                <span>Menginspirasi perubahan perilaku nyata dalam pengelolaan sampah sehari-hari.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path fill="#063B52" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
