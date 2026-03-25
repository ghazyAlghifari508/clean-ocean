import { motion } from "motion/react";
import { Trash2, AlertTriangle, Clock, FishOff } from "lucide-react";

const stats = [
  {
    icon: <Trash2 className="w-5 h-5" />,
    value: "8 Juta Ton",
    label: "Sampah plastik masuk ke laut setiap tahun",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    value: "700+",
    label: "Spesies laut terancam oleh polusi plastik",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    value: "450 Tahun",
    label: "Waktu plastik untuk terurai di alam",
  },
  {
    icon: <FishOff className="w-5 h-5" />,
    value: "1 dari 3",
    label: "Ikan mengandung partikel mikroplastik",
  },
];

export default function QuickStats() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ocean-abyss mb-3">
            Realita yang Mengkhawatirkan
          </h2>
          <div className="h-[2px] w-16 bg-ocean-surface mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white p-8 md:p-10 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-ocean-abyss/[0.06] text-ocean-deep mb-5">
                {stat.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-ocean-abyss mb-2">
                {stat.value}
              </h3>

              <p className="text-sm text-ocean-deep/60 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
