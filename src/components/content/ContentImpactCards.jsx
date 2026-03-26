import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ContentImpactCards() {
  // We use an index state to track which card is hovered
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const cards = [
    {
      title: "Mikroplastik",
      subtitle: "Acaman Tak Kasat Mata",
      desc: "Hancur terbawa arus menjadi pecahan kurang dari 5mm, lalu termakan ikan dan masuk ke rantai makanan manusia.",
      image: "https://images.unsplash.com/photo-1616897597151-2ea3954477ca?auto=format&fit=crop&q=80",
    },
    {
      title: "Jaring Hantu",
      subtitle: "Perangkap Abadi",
      desc: "Jaring nelayan yang tertinggal terus membunuh biota laut selama ratusan tahun tanpa ampun di dasar samudra.",
      image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&q=80",
    },
    {
      title: "Kehilangan Ekosistem",
      subtitle: "Dampak Jangka Panjang",
      desc: "Pemutihan karang dan penumpukan limbah racun membuat terumbu karang mati, menghilangkan rumah ikan.",
      image: "https://images.unsplash.com/photo-1617142108319-66c7ab469b41?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <section className="py-24 bg-ocean-ink overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 text-ocean-sky text-xs font-bold uppercase tracking-widest rounded-full mb-4 outline outline-1 outline-white/10">
            Realita Berbahaya
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-2xl mx-auto leading-tight">
            Bagaimana Plastik Menghancurkan Ekosistem Kita
          </h2>
        </motion.div>

        {/* Hover-Expand Parallax Cards Layout */}
        <div className="w-full h-[500px] md:h-[600px] flex flex-col md:flex-row gap-4">
          {cards.map((card, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-grow ${
                  isActive ? "md:flex-[3]" : "md:flex-[1]"
                } ${isActive ? "flex-[5]" : "flex-[1]"}`} // also handles mobile flex ratios
              >
                {/* Background Image with slow parallax/scale on active */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                    style={{ 
                      backgroundImage: `url(${card.image})`,
                      transform: isActive ? 'scale(1.05)' : 'scale(1.2)'
                    }}
                  />
                </div>

                {/* Dark overlapping gradient */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive ? "bg-gradient-to-t from-ocean-abyss/90 via-ocean-abyss/40 to-transparent" : "bg-black/60"
                  }`}
                ></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <div className="relative">
                    {/* Vertical Title (visible when NOT active) */}
                    <div 
                      className={`absolute bottom-0 left-0 transition-all duration-500 origin-bottom-left ${
                        isActive ? "opacity-0 invisible scale-90" : "opacity-100 visible scale-100 md:-rotate-90 md:translate-y-0"
                      }`}
                    >
                      <h3 className="font-display font-bold text-white text-xl md:text-2xl whitespace-nowrap">
                        {card.title}
                      </h3>
                    </div>

                    {/* Active Content (visible when ACTIVE) */}
                    <div 
                      className={`transition-all duration-500 delay-100 transform ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute bottom-0 pointer-events-none"
                      }`}
                    >
                      <span className="text-ocean-sky font-bold tracking-widest uppercase text-xs mb-3 block">
                        {card.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-white text-3xl md:text-4xl mb-4 leading-tight">
                        {card.title}
                      </h3>
                      
                      {/* Hide description text on very small screens if needed, but flex takes care of it */}
                      <p className="text-white/80 font-sans max-w-sm mb-6 line-clamp-3 md:line-clamp-none">
                        {card.desc}
                      </p>

                      <button className="flex items-center gap-2 text-white font-bold text-sm tracking-wide group/btn">
                        Pelajari Sedikitnya 
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
