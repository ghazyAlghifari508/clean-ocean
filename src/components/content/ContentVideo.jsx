import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

export default function ContentVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden text-center flex flex-col items-center">
      {/* Subtle top/bottom gradients to blend into other sections */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ocean-abyss/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-ocean-sky/10 text-ocean-abyss text-xs font-bold uppercase tracking-widest rounded-full mb-6 outline outline-1 outline-ocean-abyss/10">
            Dokumenter Pendek
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss mb-6 leading-tight">
            Apa yang Terjadi pada Plastik yang Anda Buang?
          </h2>
          <p className="text-ocean-abyss/70 text-lg leading-relaxed">
            Ikuti perjalanan sepotong plastik dari tempat sampah hingga ke dasar samudra, dan pelajari bagaimana ia berdampak pada ekosistem kita secara global.
          </p>
        </motion.div>

        {/* Video Player Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden group border border-ocean-abyss/10 shadow-2xl"
        >
          {!isPlaying ? (
            <>
              {/* Thumbnail Image */}
              <img 
                src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1600&q=80" 
                alt="Ocean underwater with sunlight piercing through" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Cinematic Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-ink via-ocean-abyss/40 to-transparent mix-blend-multiply opacity-80"></div>
              
              {/* Play Button Wrapper */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-ocean-abyss hover:scale-110 active:scale-95 group/btn"
                >
                  <Play className="w-8 h-8 ml-2 fill-current" />
                  
                  {/* Radar pulse effect behind button */}
                  <span className="absolute inset-0 rounded-full border border-white/40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50 pointer-events-none group-hover/btn:hidden"></span>
                </button>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-left">
                  <p className="text-white font-bold text-xl drop-shadow-lg">Durasi: 04:21</p>
                  <p className="text-white/70 text-sm">TED-Ed Documentary</p>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-black group/video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_6xlNyWPpB8?autoplay=1&rel=0"
                title="What really happens to the plastic you throw away? - Emma Bryce"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              
              {/* Overlay Close Button - appears on hover or at the top */}
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-30 bg-ocean-abyss/80 hover:bg-ocean-abyss text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover/video:opacity-100 flex items-center gap-2"
              >
                <span>Tutup Video</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
