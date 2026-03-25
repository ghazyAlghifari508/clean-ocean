import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, BookOpen, AlertTriangle, ShieldCheck, Info } from "lucide-react";

const FILTER_TABS = ["Semua", "Fakta", "Dampak", "Solusi", "Kisah"];

const CONTENT_DATA = [
  {
    id: 1,
    title: "Apa Itu Mikroplastik dan Mengapa Berbahaya?",
    category: "Fakta",
    type: "article",
    desc: "Plastik tidak pernah benar-benar terurai; mereka hanya pecah menjadi partikel mikro tak kasat mata.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
    size: "large", // spans 2 cols, 2 rows in bento
    icon: <Info className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Penyu Pemakan Plastik",
    category: "Fakta",
    type: "funfact",
    desc: "1 dari 3 penyu laut pernah mengonsumsi sampah plastik karena teksturnya di air menyerupai ubur-ubur.",
    size: "small", // spans 1 col
  },
  {
    id: 3,
    title: "Suhu Lautan Memanas",
    category: "Dampak",
    type: "article",
    desc: "Pemutihan terumbu karang masif terjadi akibat kenaikan ekstrem suhu laut global.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&q=80",
    size: "medium", // spans 1 col, 2 rows
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "5 Langkah Bebas Plastik",
    category: "Solusi",
    type: "article",
    desc: "Mulai dari diri sendiri. Panduan praktis mengurangi jejak sampah plastik harimu.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    size: "medium",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Kisah Nelayan Bajo",
    category: "Kisah",
    type: "article",
    desc: "Bagaimana masyarakat pesisir berjuang mempertahankan tangkapan di tengah invasi sampah.",
    image: "https://images.unsplash.com/photo-1520695287272-b7f8af46d367?w=600&q=80",
    size: "medium",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export default function ContentBentoGrid() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredData = CONTENT_DATA.filter((item) =>
    activeFilter === "Semua" ? true : item.category === activeFilter
  );

  return (
    <section id="content-filters" className="py-24 bg-white scroll-mt-10">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Interactive Filter sub-navigation */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-ocean-surface font-semibold tracking-widest uppercase text-sm mb-6">
            Eksplorasi Topik
          </p>

          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-inner">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors z-10 ${activeFilter === tab ? "text-white" : "text-ocean-abyss/60 hover:text-ocean-abyss"
                  }`}
              >
                {activeFilter === tab && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 bg-ocean-abyss rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => {
              // Map size to tailwind col/row spans
              let spanClasses = "col-span-1 row-span-1";
              if (item.size === "large") spanClasses = "col-span-1 md:col-span-2 row-span-2";
              if (item.size === "medium") spanClasses = "col-span-1 row-span-2";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`${spanClasses} rounded-2xl overflow-hidden relative group bg-wave-light border border-gray-100 flex flex-col`}
                >
                  {item.type === "article" ? (
                    <>
                      {/* Image background with zoom on hover for articles */}
                      <div className="absolute inset-0 z-0 bg-ocean-ink">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ocean-abyss/90 via-ocean-abyss/40 to-transparent mix-blend-multiply"></div>

                      <div className="relative z-20 flex flex-col h-full justify-between p-8">
                        <div className="flex justify-between items-start">
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded shadow-sm">
                            {item.category}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h3 className={`font-display font-bold text-white mb-3 ${item.size === 'large' ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                            {item.title}
                          </h3>
                          <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-none max-w-md">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Funfact styling - solid color, typographic focus
                    <div className="relative z-20 flex flex-col h-full justify-between p-8 bg-ocean-foam/40">
                      <div>
                        <span className="text-ocean-sky font-bold uppercase tracking-widest text-xs mb-4 block">
                          Fun Fact
                        </span>
                        <h3 className="font-display font-bold text-ocean-abyss text-2xl mb-2 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-ocean-deep/70 text-sm font-medium">
                        "{item.desc}"
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-ocean-deep/50">Belum ada konten di kategori ini.</p>
          </div>
        )}

      </div>
    </section>
  );
}
