import { motion } from "motion/react";

export default function ContactHero() {
  return (
    <section className="relative pt-44 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-ocean-sky/10 text-ocean-deep text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-ocean-sky/20"
          >
            Hubungi Kami
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-ocean-abyss leading-[0.9] tracking-tighter mb-8"
          >
            Ayo Terhubung! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-deep via-ocean-surface to-ocean-sky">
              Bersama Kita Bisa
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-ocean-deep/70 font-sans max-w-2xl leading-relaxed"
          >
            Punya pertanyaan, ide kolaborasi, atau sekadar ingin menyapa? 
            Kami senang mendengar setiap suara yang peduli pada masa depan lautan.
          </motion.p>
        </div>
      </div>
      
      {/* Decorative background element: Large outline text */}
      <div className="absolute -bottom-10 right-0 pointer-events-none select-none overflow-hidden hidden lg:block">
        <motion.span 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-[250px] font-display font-black text-ocean-abyss leading-none uppercase"
          style={{ WebkitTextStroke: '2px currentColor', color: 'transparent' }}
        >
          CONNECT
        </motion.span>
      </div>
    </section>
  );
}
