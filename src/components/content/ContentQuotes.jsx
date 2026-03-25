import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function ContentQuotes() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* CSS Parallax Background using fixed attachment */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518091043644-c1d4457be68f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed origin-center"
      ></div>
      
      {/* Deep cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss via-ocean-abyss/60 to-ocean-abyss mix-blend-multiply opacity-90"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.5, 0],
              x: Math.sin(i) * 50
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-white blur-[2px]"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-ocean-sky/30 bg-ocean-sky/10 backdrop-blur-md flex items-center justify-center mb-10 text-ocean-sky shadow-[0_0_30px_rgba(135,206,235,0.2)]"
        >
          <Quote className="w-8 h-8 md:w-10 md:h-10 fill-current opacity-80" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white max-w-4xl leading-[1.3] md:leading-[1.4] mb-8"
        >
          "Kita tidak mewarisi lautan dari nenek moyang kita,<br className="hidden md:block" />
          <span className="text-ocean-sky italic font-light font-serif tracking-widest leading-[1.5]"> kita meminjamnya dari anak cucu kita.</span>"
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "60px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-px bg-ocean-sky mb-6"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/60 font-sans tracking-widest uppercase text-sm font-bold"
        >
          Pepatah Penduduk Asli
        </motion.p>
      </div>

    </section>
  );
}
