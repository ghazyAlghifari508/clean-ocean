import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ImpactGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1616897597151-2ea3954477ca?auto=format&fit=crop&q=80",
      title: "Mikroplastik",
      desc: "Invasi tak kasat mata",
      className: "col-span-1 border-ocean-abyss/10"
    },
    {
      src: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&q=80",
      title: "Jaring Hantu",
      desc: "Perangkap abadi biota",
      className: "col-span-1 md:col-span-2 border-ocean-abyss/10"
    },
    {
      src: "https://images.unsplash.com/photo-1617142108319-66c7ab469b41?auto=format&fit=crop&q=80",
      title: "Bleaching Karang",
      desc: "Pudar oleh suhu laut",
      className: "col-span-1 md:col-span-2 min-h-[300px] border-ocean-abyss/10"
    },
    {
      src: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?auto=format&fit=crop&q=80",
      title: "Tumpahan Minyak",
      desc: "Polusi mematikan",
      className: "col-span-1 border-ocean-abyss/10"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-ocean-surface font-semibold tracking-widest uppercase text-sm mb-4">
              Dampak Nyata
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss leading-tight">
              Realita di Bawah Permukaan
            </h2>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex items-center gap-2 text-ocean-abyss font-semibold hover:text-ocean-surface transition-colors"
          >
            Lihat Lebih Banyak <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden bg-wave-light border ${img.className}`}
            >
              <div className="absolute inset-0 bg-ocean-ink/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={img.src} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss/90 via-ocean-abyss/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-ocean-sky text-sm font-semibold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {img.desc}
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
