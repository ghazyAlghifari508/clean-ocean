import { motion } from "motion/react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=800&fit=crop"
          alt="Ocean surface at sunset"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss/70 via-ocean-deep/60 to-ocean-abyss" />
      </div>

      <div className="relative z-10 container-custom text-center py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-ocean-surface/20 border border-ocean-surface/30 text-ocean-foam text-sm font-medium backdrop-blur-sm mb-6"
        >
          ✉️ Hubungi Kami
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Mari <span className="text-gradient">Berkolaborasi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          Punya pertanyaan, masukan, atau ingin berkolaborasi? Kami senang mendengar dari Anda.
          Hubungi kami dan jadilah bagian dari perubahan bersama OceanGuard.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path fill="#063B52" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
