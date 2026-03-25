import { motion } from "motion/react";
import { Compass, Eye } from "lucide-react";

export default function AboutVisionMission() {
  return (
    <section id="about-vision" className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Huge Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-black text-ocean-sky/5 whitespace-nowrap pointer-events-none select-none">
        OCEAN GUARD
      </div>

      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10">

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-wave-light p-10 md:p-14 rounded-3xl border border-gray-100 shadow-xl shadow-ocean-abyss/5 group hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-ocean-abyss text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
            <Compass className="w-8 h-8" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean-abyss mb-6">
            Misi Kami
          </h2>
          <p className="text-ocean-deep/80 font-sans text-lg md:text-xl leading-relaxed">
            Mengedukasi masyarakat tentang darurat sampah laut melalui
            <strong> pengalaman simulasi interaktif</strong> yang menyenangkan, mudah dipahami,
            dan menggugah empati nyata terhadap ekosistem.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-gradient-to-br from-ocean-abyss to-ocean-deep p-10 md:p-14 rounded-3xl shadow-2xl shadow-ocean-abyss/20 text-white group hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-ocean-sky flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
            <Eye className="w-8 h-8" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
            Visi Masa Depan
          </h2>
          <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed">
            Menciptakan generasi baru yang sadar akan jejak lingkungan mereka,
            serta aktif bergerak bersama menjaga kelestarian laut bagi kehidupan makhluk di dalamnya.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
