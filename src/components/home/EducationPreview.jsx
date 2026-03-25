import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

export default function EducationPreview() {
  const topics = [
    {
      title: "Rantai Makanan Laut",
      desc: "Pahami bagaimana mikroplastik menyusup dari plankton hingga ke manusia.",
      tag: "Ekosistem",
    },
    {
      title: "Coral Bleaching",
      desc: "Menyelidiki fenomena pemutihan karang akibat kenaikan suhu laut global.",
      tag: "Iklim",
    },
    {
      title: "Tumpahan Minyak",
      desc: "Dampak jangka panjang limbah industri terhadap populasi burung dan mamalia laut.",
      tag: "Polusi",
    },
  ];

  return (
    <section className="py-24 bg-wave-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 flex flex-col justify-center"
          >
            <p className="text-ocean-surface font-semibold tracking-widest uppercase text-sm mb-4">
              Pusat Pengetahuan
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss mb-6 leading-tight">
              Edukasi Sebagai Langkah Pertama
            </h2>
            <p className="text-ocean-deep/70 text-lg mb-10 leading-relaxed font-sans">
              Sebelum melakukan aksi, pemahaman mendalam tentang ekosistem adalah kuncinya. Akses perpustakaan digital interaktif kami untuk memahami kondisi kritis laut saat ini.
            </p>
            
            <Link 
              to="/content" 
              className="group inline-flex items-center gap-3 bg-ocean-abyss text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:bg-ocean-deep w-max"
            >
              <BookOpen className="w-5 h-5" />
              Mulai Belajar
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Topic Cards */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white p-8 md:p-10 rounded-xl border border-ocean-abyss/[0.05] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Minimalist hover accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-ocean-surface transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-wave-soft text-ocean-mid text-xs font-bold uppercase tracking-widest rounded-md mb-4">
                      {topic.tag}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-ocean-abyss mb-3 group-hover:text-ocean-deep transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-ocean-deep/60 leading-relaxed max-w-lg">
                      {topic.desc}
                    </p>
                  </div>
                  <div className="hidden sm:flex mt-2 w-10 h-10 rounded-full border border-ocean-surface/30 items-center justify-center text-ocean-surface group-hover:bg-ocean-surface group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
