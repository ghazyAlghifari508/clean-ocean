import { motion } from "motion/react";
import heroWhale from "../../assets/hero_whale.png";
import { ArrowRight } from "lucide-react";

export default function ContentHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-ocean-abyss overflow-hidden flex items-center">

      {/* Deep Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-abyss via-[#0c2b4a] to-ocean-ink z-0"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-ocean-sky/40 blur-[1px] animate-bubble-rise"
            style={{
              top: `${10 + Math.random() * 90}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
        {/* Soft light rays from above */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-ocean-sky/10 to-transparent opacity-30 transform -skew-x-12 blur-3xl pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center h-full pt-28 pb-16">

        {/* Left Side: Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
          <span className="inline-block px-4 py-1.5 bg-ocean-sky/10 border border-ocean-sky/20 text-ocean-sky text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-8 shadow-[0_0_15px_rgba(135,206,235,0.15)]">
            Eksplorasi Pengetahuan
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-md">
            Laut Berbicara, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-sky to-white drop-shadow-lg">
              Sudahkah Kamu Mendengarnya?
            </span>
          </h1>

          <p className="text-white/70 font-sans text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            Dari fakta mengejutkan yang tersembunyi di palung terdalam, hingga panduan aksi nyata—semua yang perlu kamu tahu tentang nasib samudra kita ada di sini.
          </p>

          <button
            onClick={() => {
              document.getElementById('content-filters')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 bg-ocean-sky text-ocean-abyss px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(135,206,235,0.3)] hover:shadow-[0_0_30px_rgba(135,206,235,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            <span>Mulai Belajar</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Right Side: Visual Area */}
        <div className="w-full md:w-1/2 relative h-[40vh] md:h-auto min-h-[400px] flex items-center justify-center mt-12 md:mt-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[500px] lg:max-w-[600px]"
          >
            <div className="absolute inset-0 bg-ocean-sky/20 blur-[100px] rounded-full mix-blend-screen scale-75 animate-pulse-slow"></div>
            <img
              src={heroWhale}
              alt="Whale swimming in deep ocean"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float-slow relative z-10"
              style={{ filter: "brightness(1.15) contrast(1.1)" }}
            />
          </motion.div>
        </div>

      </div>

      {/* Bottom gradient bridge to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
    </section>
  );
}
