import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

export default function ContentVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-ocean-abyss relative overflow-hidden text-center flex flex-col items-center">
      {/* Subtle top/bottom gradients to blend into other sections */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 text-ocean-sky text-xs font-bold uppercase tracking-widest rounded-full mb-6 outline outline-1 outline-white/10">
            Dokumenter Pendek
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Mata Rantai yang Terputus
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Saksikan bagaimana sampah plastik mikroskopis menyusup ke dalam rantai makanan, dari plankton hingga berakhir di piring makan kita.
          </p>
        </motion.div>

        {/* Video Player Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] group border border-white/10"
        >
          {!isPlaying ? (
            <>
              {/* Thumbnail Image */}
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a1e8a4a2a1?w=1600&q=80" 
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
                  <p className="text-white font-bold text-xl drop-shadow-lg">Durasi: 03:45</p>
                  <p className="text-white/70 text-sm">OceanGuard Originals</p>
                </div>
              </div>
            </>
          ) : (
            // Dummy Video Placeholder (since we don't have a real video link)
            <div className="absolute inset-0 bg-black flex flex-col items-center justify-center text-white">
              <Play className="w-12 h-12 text-ocean-surface mb-4 opacity-50" />
              <p className="text-lg font-bold">Video Player Placeholder</p>
              <p className="text-sm text-white/50">Di sini video YouTube atau file mp4 akan diputar.</p>
              <button 
                onClick={() => setIsPlaying(false)}
                className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
              >
                Tutup Video
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
