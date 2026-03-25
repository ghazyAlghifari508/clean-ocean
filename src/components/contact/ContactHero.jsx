import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-white">
      {/* Soft background glow */}
      <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-ocean-sky/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-ocean-sky/10 border border-ocean-sky/20 flex items-center justify-center text-ocean-deep mb-8 shadow-sm"
          >
            <Mail className="w-8 h-8" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-wave-light text-ocean-deep text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-gray-100 shadow-sm"
          >
            Hubungi Kami
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-ocean-abyss leading-[1.05] tracking-tighter mb-8"
          >
            Ayo Terhubung! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-deep via-ocean-surface to-ocean-sky drop-shadow-sm">
              Bersama Kita Bisa
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-ocean-deep/70 font-sans max-w-2xl leading-relaxed mx-auto font-light"
          >
            Punya pertanyaan, ide kolaborasi, atau sekadar ingin menyapa?
            Kami sangat menantikan setiap suara yang peduli pada masa depan lautan.
          </motion.p>
        </div>
      </div>

      {/* Decorative gradient bridge to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-wave-soft/40 to-transparent pointer-events-none"></div>
    </section>
  );
}
