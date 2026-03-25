import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MapPin, AlertTriangle } from "lucide-react";

// Helper component for animated numbers
function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progressRatio, 4);
      
      setCount(Math.floor(easeOut * end));

      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end); // Ensure exact finish
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function AboutLocalFacts() {
  const [inView, setInView] = useState(false);

  return (
    <section className="relative w-full py-32 overflow-hidden bg-ocean-abyss">
      
      {/* Background Parallax Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1621451537084-482c73073e0f?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed"
      ></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-ocean-abyss/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss via-transparent to-ocean-abyss"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6 text-ocean-sky border border-white/20">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Realita di Halaman Belakang Kita
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-sans text-lg">
            Mengapa OceanGuard lahir di sini? Karena krisis ini nyata, dekat, dan mengancam 
            seluruh keindahan nusantara yang membentang dari Sabang hingga Merauke.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="text-5xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter">
              #{inView ? <AnimatedCounter end={2} /> : "0"}
            </div>
            <div className="h-1 w-12 bg-ocean-sky mx-auto mb-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
            <h3 className="text-xl font-bold text-white mb-2">Penyumbang Terbesar</h3>
            <p className="text-white/70 text-sm">Indonesia adalah penyumbang sampah plastik ke laut terbesar kedua di dunia setelah Tiongkok.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="text-5xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter">
              {inView ? <AnimatedCounter end={17} suffix="K+" /> : "0"}
            </div>
            <div className="h-1 w-12 bg-amber-400 mx-auto mb-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
            <h3 className="text-xl font-bold text-white mb-2">Pulau Terancam</h3>
            <p className="text-white/70 text-sm">Lebih dari 17.000 pulau eksotis dikelilingi oleh perairan yang perlahan dipenuhi oleh invasi mikroplastik.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
