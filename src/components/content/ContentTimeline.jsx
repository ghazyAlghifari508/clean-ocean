import { motion } from "motion/react";
import { Clock, Factory, Droplets, Skull, AlertCircle } from "lucide-react";

export default function ContentTimeline() {
  const steps = [
    {
      year: "Hari 1",
      title: "Produksi & Konsumsi Momen",
      desc: "Plastik sekali pakai diproduksi dalam hitungan detik, digunakan hanya selama 12 menit, lalu dibuang ke tempat sampah atau berserakan di jalan.",
      icon: <Factory className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
    },
    {
      year: "Bulan 1 - 6",
      title: "Perjalanan ke Laut",
      desc: "Terbawa angin dan hujan, sampah plastik masuk ke selokan, sungai, hingga akhirnya bermuara di lautan lepas, mencemari pesisir.",
      icon: <Droplets className="w-6 h-6 text-white" />,
      color: "bg-teal-500",
    },
    {
      year: "Tahun 1 - 50",
      title: "Fragmentasi Mematikan",
      desc: "Paparan sinar UV dan ombak memecah plastik besar menjadi mikroplastik. Bentuknya menyerupai makanan, menipu penyu dan burung laut.",
      icon: <AlertCircle className="w-6 h-6 text-white" />,
      color: "bg-amber-500",
    },
    {
      year: "Tahun 400+",
      title: "Jejak Abadi & Beracun",
      desc: "Bahkan setelah berabad-abad, plastik tidak pernah hancur. Mereka mengendap di dasar laut terdalam dan masuk ke dalam rantai makanan manusia.",
      icon: <Skull className="w-6 h-6 text-white" />,
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-24 bg-wave-light relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ocean-sky/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-ocean-deep text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-sm border border-gray-100">
            Siklus Plastik
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss mb-4">
            Perjalanan Abadi Sampah Kita
          </h2>
          <p className="text-ocean-deep/70 max-w-2xl mx-auto font-sans">
            Sebuah kronologi tragis bagaimana keputusan 12 menit menghancurkan ekosistem selama berabad-abad.
          </p>
        </motion.div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center glowing line for desktop, left line for mobile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ocean-sky via-ocean-abyss to-transparent md:-translate-x-1/2 rounded-full opacity-20"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isEven ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot (Center) */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`absolute left-6 md:left-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center -translate-x-1/2 z-20 ${step.color}`}
                >
                  {step.icon}
                </motion.div>

                {/* Desktop Spacer (Half width) */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className={`w-full md:w-1/2 pl-20 md:px-12 py-4 flex ${isEven ? "md:justify-end" : "justify-start"}`}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-xl shadow-ocean-abyss/5 border border-ocean-sky/10 relative group hover:-translate-y-1 transition-transform duration-300 w-full ${isEven ? 'md:text-right' : 'text-left'}`}>

                    {/* Small pointer triangle logic for desktop */}
                    <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white border-t border-l border-ocean-sky/10 rotate-45 ${isEven ? "right-[-8px] border-r-0 border-b-0" : "left-[-8px] border-l-0 border-t-0 border-r border-b"
                      }`}></div>

                    <div className={`flex items-center gap-2 mb-3 text-ocean-sky font-bold ${isEven ? 'md:justify-end' : ''}`}>
                      <Clock className="w-4 h-4" />
                      <span className="uppercase tracking-widest text-xs">{step.year}</span>
                    </div>

                    <h3 className="font-display font-bold text-ocean-abyss text-2xl mb-4">
                      {step.title}
                    </h3>

                    <p className="text-ocean-deep/70 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
