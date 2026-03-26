import { motion } from "motion/react";
import { Recycle, ShoppingBag, Droplet, UserCheck } from "lucide-react";

export default function ContentSolutions() {
  const solutions = [
    {
      title: "Kurangi Plastik Sekali Pakai",
      desc: "Gunakan tas belanja kain, botol minum yang bisa diisi ulang, dan sedotan berbahan ramah lingkungan untuk rutinitas harian.",
      icon: <ShoppingBag className="w-8 h-8 text-white" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Pilah & Daur Ulang",
      desc: "Kenali jenis plastik yang bisa didaur ulang. Pisahkan sampah organik dan anorganik dari rumah untuk memudahkan proses pembuangan.",
      icon: <Recycle className="w-8 h-8 text-white" />,
      color: "from-teal-500/20 to-emerald-500/20",
    },
    {
      title: "Hemat Penggunaan Air",
      desc: "Pasang filter mikroplastik di mesin cuci dan hindari kosmetik yang mengandung microbeads yang langsung terbuang ke laut.",
      icon: <Droplet className="w-8 h-8 text-white" />,
      color: "from-sky-500/20 to-indigo-500/20",
    },
    {
      title: "Dukung Komunitas Lokal",
      desc: "Bergabung dalam kegiatan bersih pantai atau donasi untuk yayasan konservasi laut seperti OceanGuard.",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  return (
    <section className="relative py-24 bg-ocean-abyss overflow-hidden">

      {/* Moving background orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ocean-sky/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-ocean-sky text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-white/20 shadow-lg">
            Aksi Nyata
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Menjadi Bagian Dari Solusi
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-sans text-lg">
            Perubahan besar dimulai dari langkah kecil di rumah tangga. Apa yang bisa kamu lakukan hari ini untuk masa depan lautan?
          </p>
        </motion.div>

        {/* 3D Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.03, y: -10, rotateX: 2, rotateY: -2 }}
              className="relative p-8 lg:p-10 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-colors duration-500"
              style={{ perspective: 1000 }} // perspective for subtle 3D hover
            >
              {/* Internal glow using the color prop */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-white/70 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
