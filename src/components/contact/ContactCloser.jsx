import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ContactCloser() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale the text up and fade it in as user scrolls through
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="h-screen bg-ocean-abyss flex items-center justify-center overflow-hidden relative">
      
      {/* Dynamic background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[80vw] h-[80vw] bg-ocean-surface/20 blur-[150px] rounded-full"
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <motion.div style={{ scale, opacity }}>
          <h2 className="text-4xl md:text-6xl lg:text-[84px] font-display font-black text-white leading-[1.1] max-w-5xl mx-auto italic">
            "Laut tidak bisa berbicara — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-sky to-ocean-surface">
              tapi kita bisa bersuara untuknya.
            </span>"
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-ocean-sky mx-auto mt-12 rounded-full"
          />
        </motion.div>
      </div>

      {/* Subtle floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}
