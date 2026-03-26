import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function ContentQuotes() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background with cinematic overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed origin-center z-0"
      ></div>
      
      {/* Deep cinematic gradient overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss via-ocean-abyss/40 to-ocean-abyss/80 z-10"></div>
      
      {/* Floating particles (Marine Snow) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`quote-particle-${i}`}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.6, 0.6, 0],
              x: (i % 2 === 0 ? "20px" : "-20px")
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute rounded-full bg-ocean-foam/30 blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center justify-center text-center">
        {/* Quote Icon with pulse effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-ocean-sky/40 bg-ocean-sky/10 backdrop-blur-xl flex items-center justify-center mb-12 text-ocean-sky shadow-2xl shadow-ocean-sky/20"
        >
          <Quote className="w-10 h-10 md:w-14 md:h-14 fill-current opacity-90" />
        </motion.div>

        {/* The Quote Headline */}
        <div className="overflow-hidden mb-12 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-tight md:leading-tight lg:leading-[1.1]"
          >
            "Kita tidak mewarisi lautan dari nenek moyang kita,<br className="hidden md:block" />
            <span className="text-gradient-bright italic font-light font-serif tracking-widest leading-[1.6]"> kita meminjamnya dari anak cucu kita.</span>"
          </motion.h1>
        </div>
        
        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100px" }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-px bg-gradient-to-r from-transparent via-ocean-sky to-transparent mb-8"
        ></motion.div>
      </div>

    </section>
  );
}
