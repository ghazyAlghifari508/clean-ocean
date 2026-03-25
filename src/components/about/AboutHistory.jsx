import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function AboutHistory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves the background image much slower than the scroll creating deep parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Fades out the background softly towards the edges
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const milestones = [
    {
      year: "2015",
      title: "Penyadaran Pertama",
      desc: "Sebuah video viral tentang sedotan plastik yang tersangkut di hidung penyu membuka mata dunia—dan kami—bahwa ada bencana tak kasat mata di lautan."
    },
    {
      year: "2018",
      title: "Inisiatif Terbentuk",
      desc: "Sekelompok mahasiswa kelautan dan pengembang teknologi bersatu. Merumuskan cara baru untuk menceritakan kisah laut yang sekarat."
    },
    {
      year: "2021",
      title: "Edukasi Imersif",
      desc: "Kami meluncurkan platform simulasi interaktif pertama, membuktikan bahwa pengalaman visual lebih efektif mengubah perilaku dibanding sekadar membaca data."
    },
    {
      year: "Hari Ini",
      title: "Gerakan Global",
      desc: "OceanGuard bukan lagi sekadar platform, melainkan komunitas pahlawan laut yang bergerak aktif membersihkan pesisir Nusantara dan menyuarakan regulasi."
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-ocean-abyss overflow-hidden min-h-screen">

      {/* Central Parallax Background - STAYS FIXED AND MOVES SLOWLY */}
      <motion.div
        style={{ y: bgY, opacity: opacity }}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg md:max-w-2xl lg:max-w-3xl opacity-20 pointer-events-none"
      >
        <div className="w-full h-[140%] -mt-[20%] bg-[url('https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1200&q=80')] bg-cover bg-center grayscale mix-blend-screen mask-image-gradient"></div>
        {/* Soft edge fading for the image using Tailwind arbitrary values or custom CSS */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss via-transparent to-ocean-abyss"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-abyss via-transparent to-ocean-abyss"></div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm text-ocean-sky text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-white/10">
            Perjalanan Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Jejak Langkah OceanGuard
          </h2>
        </div>

        {/* Scrolling Text Nodes */}
        <div className="max-w-3xl mx-auto flex flex-col gap-24 relative">

          {/* Vertical central line tracker */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-ocean-sky md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(135,206,235,0.6)]"
          />

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
              >
                {/* Year Marker */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-ocean-abyss border-4 border-ocean-sky shadow-[0_0_20px_rgba(135,206,235,0.3)] flex items-center justify-center md:-translate-x-1/2 z-20">
                  <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
                </div>

                <div className="hidden md:block w-1/2"></div>

                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <h3 className="text-ocean-sky font-bold text-xl mb-2 tracking-widest uppercase">
                    {item.year}
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-white/70 font-sans leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
