import { motion } from "motion/react";
import { ShieldCheck, HeartPulse, Recycle, Search } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      title: "Transparansi Penuh",
      desc: "Kami menyajikan fakta ilmiah lautan tanpa dilebih-lebihkan. Realitas sudah cukup mengejutkan tanpa perlu didramatisir.",
      icon: <Search className="w-8 h-8 text-ocean-abyss" />,
      size: "large" // spans 2 cols
    },
    {
      title: "Aksi Berkelanjutan",
      desc: "Tidak hanya teori, kami mendorong perubahan kebiasaan harian dari hal terkecil.",
      icon: <Recycle className="w-8 h-8 text-ocean-abyss" />,
      size: "small"
    },
    {
      title: "Integritas Ekosistem",
      desc: "Setiap langkah memprioritaskan harmoni antara manusia dan alam.",
      icon: <ShieldCheck className="w-8 h-8 text-ocean-abyss" />,
      size: "small"
    },
    {
      title: "Empati yang Nyata",
      desc: "Kami membawa penderitaan biota laut ke layar Anda agar simpati berubah menjadi empati, dan empati menjadi aksi.",
      icon: <HeartPulse className="w-8 h-8 text-white" />,
      size: "large",
      dark: true
    }
  ];

  return (
    <section className="py-24 bg-wave-light/50 relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-ocean-deep text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-sm border border-gray-100">
            Pilar Utama
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss mb-6">
            Nilai yang Kami Perjuangkan
          </h2>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] max-w-5xl mx-auto">
          {values.map((v, index) => {
            const isLarge = v.size === "large";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden group border ${
                  isLarge ? "md:col-span-2" : "col-span-1"
                } ${
                  v.dark 
                    ? "bg-ocean-abyss text-white border-ocean-deep shadow-xl shadow-ocean-abyss/20" 
                    : "bg-white text-ocean-abyss border-gray-100 shadow-lg shadow-gray-200/50"
                }`}
              >
                {/* Glowing hover orb effect in the background */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${
                    v.dark ? "bg-ocean-sky" : "bg-ocean-surface"
                  }`}
                />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10 ${
                  v.dark ? "bg-white/10 border border-white/20" : "bg-wave-light border border-gray-50"
                }`}>
                  {v.icon}
                </div>
                
                <div className="relative z-10">
                  <h3 className={`text-2xl font-display font-bold mb-3 ${isLarge ? "md:text-3xl" : ""}`}>
                    {v.title}
                  </h3>
                  <p className={v.dark ? "text-white/70" : "text-ocean-deep/70"}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
