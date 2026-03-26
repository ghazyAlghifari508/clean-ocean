import { motion } from "motion/react";
import { Link } from "react-router-dom";
import seaTurtleImg from "../../assets/sea-turtle.png";
import reefSharkImg from "../../assets/reef-shark.png";
import coralReefImg from "../../assets/coral-reef.png";

export default function MarineLife() {
  const creatures = [
    {
      id: "turtle",
      name: "Penyu Belimbing",
      status: "Kritis",
      threat: "Memakan kantong plastik yang dikira ubur-ubur.",
      image: seaTurtleImg
    },
    {
      id: "shark",
      name: "Hiu Karang",
      status: "Terancam",
      threat: "Tersangkut di jaring nelayan yang ditinggalkan (ghost nets).",
      image: reefSharkImg
    },
    {
      id: "jellyfish",
      name: "Terumbu Karang",
      status: "Rentan",
      threat: "Tertutupi oleh endapan mikroplastik dan bahan kimia.",
      image: coralReefImg
    }
  ];

  return (
    <section className="pt-0 pb-0 text-white relative">
      {/* No gradient bridge, clean solid background */}
      <div className="h-4 bg-ocean-abyss"></div>

      <div className="bg-ocean-abyss py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ocean-surface/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/3"
          >
            <p className="text-ocean-sky font-semibold tracking-widest uppercase text-sm mb-4">
              Biota yang Terdampak
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Mereka Tak Bisa Melawan
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed font-sans">
              Jutaan makhluk laut tidak bisa membedakan antara makanan dan plastik. Tindakan kita di darat menentukan hidup mati mereka di dasar lautan.
            </p>
          </motion.div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {creatures.map((creature, index) => (
              <motion.div
                key={creature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/[0.03] border border-white/10 hover:border-ocean-surface/50 rounded-xl p-8 transition-colors duration-300"
              >
                <div className="w-full h-48 rounded-lg overflow-hidden mb-8 border border-white/5 group-hover:border-ocean-surface/30 transition-colors">
                  <img 
                    src={creature.image} 
                    alt={creature.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold mb-2">{creature.name}</h3>
                  <span className="inline-block px-2 py-1 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest outline outline-1 outline-red-500/30 rounded">
                    Status: {creature.status}
                  </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed">
                  {creature.threat}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      </div>

      {/* Clean solid background bridge */}
      <div className="h-4 bg-ocean-abyss"></div>
    </section>
  );
}
