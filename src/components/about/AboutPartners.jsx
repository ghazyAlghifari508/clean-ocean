import { motion } from "motion/react";

export default function AboutPartners() {
  const logos = [
    { name: "OceanWatch", icon: "OW" },
    { name: "Blue Horizons", icon: "BH" },
    { name: "EcoMarine", icon: "EM" },
    { name: "SeaSavers", icon: "SS" },
    { name: "CoralLife", icon: "CL" },
    { name: "Global Water", icon: "GW" },
  ];

  // Double the array to make the infinite loop seamless
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="text-ocean-deep/60 font-sans tracking-widest uppercase text-sm font-bold">
          Didukung Penuh Oleh Mitra Konservasi Global
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        {/* Moving Marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-32 w-max px-16 group-hover:[animation-play-state:paused]"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-ocean-surface flex items-center justify-center text-white font-bold font-display text-xl shadow-inner">
                {logo.icon}
              </div>
              <span className="text-xl md:text-2xl font-bold text-ocean-abyss">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      </div>
    </section>
  );
}
