import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

export default function CTABanner() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=600&fit=crop"
          alt="Ocean surface"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luna-midnight/95 via-luna-dark/90 to-luna-midnight/95" />
      </div>

      <div className="container-custom relative z-10">
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
            className="w-16 h-16 rounded-full bg-luna-medium/20 flex items-center justify-center mx-auto mb-8 border border-luna-medium/30"
          >
            <Heart className="w-7 h-7 text-luna-light" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mulai dari <span className="text-gradient">Langkah Kecil</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Setiap tindakan kecil yang kita lakukan hari ini berdampak besar bagi masa depan
            lautan kita. Mari bergabung dan jadilah bagian dari perubahan bersama OceanGuard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/content" className="btn-primary text-base px-10 py-4 flex items-center justify-center gap-2">
              Jelajahi Edukasi
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-10 py-4">
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
