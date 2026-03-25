import { motion } from "motion/react";
import { Gamepad2, GraduationCap, Users } from "lucide-react";

export default function AboutFeatures() {
  const features = [
    {
      title: "Simulasi Interaktif",
      desc: "Menyelam ke dasar lautan virtual, bertatap muka langsung dengan fauna yang terjebak, dan rasakan urgensi pembersihan sampah laut.",
      icon: <Gamepad2 className="w-10 h-10 text-ocean-abyss" />,
      delay: 0.1
    },
    {
      title: "Pusat Edukasi Visual",
      desc: "Artikel, infografis timeline hidup plastik, hingga realita pahit berbentuk dokumenter pendek yang mengubah perspektif.",
      icon: <GraduationCap className="w-10 h-10 text-ocean-abyss" />,
      delay: 0.3
    },
    {
      title: "Ekosistem Kolaboratif",
      desc: "Platform bagi para pahlawan laut untuk terhubung, membagikan fakta, dan mendorong aksi nyata di dunia fisik.",
      icon: <Users className="w-10 h-10 text-ocean-abyss" />,
      delay: 0.5
    }
  ];

  return (
    <section className="py-24 bg-ocean-surface overflow-hidden relative">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-white rounded-full blur-[150px] opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white shadow-sm text-ocean-deep text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Ekosistem Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss mb-6">
            Apa yang Kami Tawarkan?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl shadow-ocean-abyss/10 border border-white flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-wave-light flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-ocean-abyss mb-4">
                {feature.title}
              </h3>
              <p className="text-ocean-deep/70 font-sans leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
