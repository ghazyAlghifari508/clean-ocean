import { motion } from "motion/react";
import heroWhale from "../../assets/hero_whale.png";
import { ArrowRight } from "lucide-react";

export default function ContentHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white overflow-hidden flex items-center">
      
      {/* Subtle top gradient to ensure navbar logo is visible on white bg */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ocean-abyss/50 to-transparent z-40 pointer-events-none"></div>

      {/* Vertical S-Curve Split (Ocean Abyss Right Side) */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none z-0 overflow-hidden">
        {/* We use a wide flexible SVG that stretches to fill the right half with an organic curve */}
        <svg 
          preserveAspectRatio="none" 
          viewBox="0 0 1000 1000" 
          className="absolute top-0 right-0 h-full w-full md:w-[75%] lg:w-[65%] text-ocean-abyss" 
          fill="currentColor"
        >
          {/* Organic S-Curve from top to bottom */}
          <path d="M300,0 C550,250 50,600 400,1000 L1000,1000 L1000,0 Z" />
        </svg>

        {/* Deep sea details only visible in the blue section */}
        <div className="absolute inset-0 right-0 w-[60%] ml-auto pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-ocean-sky/30 blur-[1px] animate-bubble-rise"
              style={{
                top: `${20 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center h-full pt-20">
        
        {/* Left Side: Text Area (Light Background Area) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-start text-left pt-10 pb-20 md:py-0 pr-8"
        >
          <span className="inline-block px-4 py-1.5 bg-ocean-foam text-ocean-deep text-sm font-bold uppercase tracking-widest rounded-full mb-6">
            Pusat Edukasi
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-display font-black text-ocean-abyss leading-[1.05] tracking-tight mb-6">
            Laut Berbicara, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-deep to-ocean-surface">
              Sudahkah Kamu Mendengarnya?
            </span>
          </h1>
          
          <p className="text-ocean-deep/70 font-sans text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Dari fakta mengejutkan yang tersembunyi di palung terdalam, hingga panduan aksi nyata—semua yang perlu kamu tahu tentang nasib samudra kita ada di sini.
          </p>
          
          <button 
            onClick={() => {
              document.getElementById('content-filters')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-4 bg-ocean-abyss text-white px-8 py-4 rounded-full shadow-xl shadow-ocean-abyss/10 border border-ocean-abyss/5 hover:shadow-2xl hover:shadow-ocean-abyss/20 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <span className="font-bold">Mulai Belajar</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </motion.div>

        {/* Right Side: Visual Area (Deep Blue Area) */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto min-h-[400px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[600px] -mr-10 lg:-mr-20"
          >
            <img 
              src={heroWhale} 
              alt="Whale swimming in deep ocean" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-float-slow"
              style={{ filter: "brightness(1.1) contrast(1.05)" }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
