import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function SimulationTeaser() {
  return (
    <section className="py-24 bg-wave-soft">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="bg-ocean-abyss rounded-2xl overflow-hidden shadow-2xl relative">
          
          {/* Subtle Deep Sea Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-abyss via-[#0a1e4a] to-ocean-ink opacity-80 z-0"></div>

          <div className="flex flex-col lg:flex-row relative z-10">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-ocean-surface/20 text-ocean-sky px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Simulasi 3D
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-sky opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean-sky"></span>
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Rasakan Sendiri <br />
                  <span className="text-ocean-sky">Kondisi Laut Kita</span>
                </h2>
                
                <p className="text-white/70 text-lg mb-10 leading-relaxed font-sans max-w-lg">
                  Lakukan simulasi penyelaman virtual interaktif. Ambil tindakan langsung untuk membersihkan sampah plastik dan selamatkan biota laut yang terjebak di dasar samudra.
                </p>

                <ul className="space-y-4 mb-10 text-white/80">
                  {["Kumpulkan sampah plastik", "Bebaskan spesies terancam", "Pelajari kedalaman laut"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-ocean-surface/20 flex items-center justify-center text-ocean-sky flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/simulation" 
                  className="inline-flex items-center gap-3 bg-white text-ocean-abyss px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-ocean-foam hover:shadow-lg active:scale-[0.98]"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Mulai Simulasi
                </Link>
              </motion.div>
            </div>

            {/* Immersive Photo/Visual Context */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-[400px] lg:h-full min-h-[400px] relative rounded-xl overflow-hidden group"
              >
                {/* Genuine Unsplash photo of a scuba diver exploring pollution or deep sea */}
                <img 
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop" 
                  alt="Scuba diver navigating deep blue waters" 
                  className="w-full h-full object-cover origin-center transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Simulated depth UI overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-ink/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                    <p className="text-white/50 text-xs font-mono mb-1">KEDALAMAN</p>
                    <p className="text-white font-mono text-2xl">45.2<span className="text-sm text-ocean-sky ml-1">M</span></p>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-ocean-coral/20 border border-ocean-coral/40 flex items-center justify-center text-ocean-coral animate-pulse">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
