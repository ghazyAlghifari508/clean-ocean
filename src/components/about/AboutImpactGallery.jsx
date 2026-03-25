import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function AboutImpactGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal translation based on scroll progress
  // Move horizontally by the total width of the gallery minus viewport width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbfc9?auto=format&fit=crop&q=80&w=800",
      title: "Kerusakan Karang",
      location: "Raja Ampat, 2021"
    },
    {
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      title: "Pembersihan Masal",
      location: "Bali, 2022"
    },
    {
      url: "https://images.unsplash.com/photo-1520695287272-b7f8af46d367?auto=format&fit=crop&q=80&w=800",
      title: "Masyarakat Pesisir",
      location: "Bajo, 2023"
    },
    {
      url: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&q=80&w=800",
      title: "Jaring Hantu",
      location: "Laut Jawa, 2023"
    },
  ];

  return (
    // The section is heightened to allow scrolling distance
    <section ref={targetRef} className="relative h-[250vh] bg-ocean-abyss">
      
      {/* Sticky container that locks the view while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
        
        {/* Text Container: Always on top */}
        <div className="w-full px-6 md:px-16 shrink-0 z-20 pointer-events-none mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-ocean-sky text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-white/20">
              Galeri Realita
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Jejak <span className="text-ocean-surface">Visual</span>
            </h2>
            <p className="text-white/70 max-w-2xl font-sans text-base md:text-lg">
              Setiap frame menyimpan cerita diam—sejuta emosi yang memanggil kita untuk bertindak sekarang juga. Geser ke bawah untuk menyaksikan realita lautan kita.
            </p>
          </motion.div>
        </div>

        {/* The horizontally translating container: Always below text */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-6 md:px-16 w-max pb-12">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="relative w-[300px] md:w-[450px] lg:w-[600px] aspect-[4/5] md:aspect-[3/2] shrink-0 rounded-3xl overflow-hidden group border border-white/10 shadow-2xl"
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss via-ocean-abyss/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.title}
                </h3>
                <p className="text-ocean-sky font-sans tracking-widest uppercase text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {photo.location}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
