import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh] md:min-h-[700px] overflow-hidden flex flex-col bg-ocean-sky/5">

      {/* Decorative top soft glow */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-ocean-sky/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Text Content - Positioned to be vertically centered */}
      <div className="relative z-20 flex-1 w-full flex flex-col justify-center pt-24 md:pt-32 pb-32 md:pb-48">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-black text-ocean-abyss leading-[1.05] tracking-tight">
              Kami Percaya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-deep to-ocean-surface">
                Lautan Bisa
              </span> <br />
              bernapas kembali.
            </h1>
          </motion.div>

          {/* Right: Description & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col md:items-start text-left"
          >
            <p className="text-ocean-deep font-sans text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              OClean Dive lahir dari satu keprihatinan: melihat lautan biru kita tercekik 
              oleh sampah plastik. Kami mengemas edukasi menjadi pengalaman interaktif 

              agar setiap orang sadar bahwa perubahan sekecil apa pun berdampak besar.
            </p>

            <button
              onClick={() => {
                document.getElementById('about-vision')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center justify-center gap-3 bg-ocean-abyss text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-ocean-abyss/20 hover:-translate-y-1 transition-all duration-300 w-fit active:scale-95"
            >
              <span className="font-bold tracking-wide">Misi Kami</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Layered Ocean Illustration (Absolute to prevent pushing text) */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] md:h-[50vh] overflow-hidden pointer-events-none z-10">

        {/* Fill the bottom-most pixels explicitly with ocean-abyss to prevent any 1px gap */}
        <div className="absolute bottom-0 left-0 w-full h-[5vh] bg-ocean-abyss z-0"></div>

        {/* Layer 1: Back Wave (Light Blue) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-0 w-[200%] md:w-full h-full text-ocean-surface/60 flex items-end"
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[70%] fill-current mb-[-2px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,170.7C672,171,768,213,864,229.3C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Fauna Silhouettes Removed */}

        {/* Layer 2: Middle Wave (Deep Blue) */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 w-[200%] md:w-full h-full text-ocean-deep z-20 flex items-end"
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[55%] fill-current mb-[-2px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96L60,117.3C120,139,240,181,360,192C480,203,600,181,720,154.7C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Turtle Silhouette Removed */}

        {/* Layer 3: Front Wave (Abyss - matches next section) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 w-full h-full text-ocean-abyss z-30 flex items-end"
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[40%] fill-current mb-[-2px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Ambient Bubbles Removed */}
      </div>
    </section>
  );
}
