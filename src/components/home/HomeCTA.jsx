import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Send, Heart } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative mt-20">
      {/* Wave transition into CTA */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%] z-10 pointer-events-none">
        <svg 
          className="relative block w-full h-[50px] md:h-[100px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 V46.29 c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120 H0 Z" 
            fill="#063B52"
          ></path>
        </svg>
      </div>

      <div className="bg-ocean-abyss py-24 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-ocean-surface/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-ocean-sky/5 rounded-full blur-[120px]"></div>
        
        {/* Animated bubbles in the background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-bubble-rise"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-10%",
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-16 rounded-[3rem] shadow-2xl relative"
          >
            {/* Corner decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 text-ocean-surface/40 animate-sway">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 C 60 40, 90 50, 100 50 C 90 50, 60 60, 50 100 C 40 60, 10 50, 0 50 C 10 50, 40 40, 50 0 Z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Jadilah Bagian dari <span className="text-ocean-surface">Gerakan</span>
            </h2>
            
            <p className="text-xl text-ocean-foam/90 font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
              Laut yang bersih dimulai dari langkah kecil. Bergabunglah sebagai relawan, bagikan idemu, atau mulai kolaborasi nyata bersama kami.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto overflow-hidden group relative inline-flex items-center justify-center gap-2 bg-ocean-surface text-ocean-ink px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(77,184,219,0.5)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Hubungi Kami
                </span>
              </Link>
              
              <Link 
                to="/content" 
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 bg-transparent border-2 border-ocean-surface/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-ocean-surface hover:bg-ocean-surface/10 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Pelajari Lebih Lanjut
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
