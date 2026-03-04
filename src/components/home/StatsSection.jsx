import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useCountUp } from "../../hooks/useCountUp";
import { statsData } from "../../data/stats";
import { Waves, Fish, Globe, Clock } from "lucide-react";

const iconMap = { Waves, Fish, Globe, Clock };

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, { duration: 2500 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-8 text-center group hover:border-luna-light/30 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-luna-light/20 to-luna-medium/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
        {(() => {
          const Icon = iconMap[stat.icon];
          return Icon ? <Icon className="w-6 h-6 text-luna-light" /> : null;
        })()}
      </div>
      <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-1">
        {count}
        <span className="text-luna-light">{stat.suffix}</span>
      </div>
      <div className="text-luna-medium text-sm font-semibold uppercase tracking-wider mb-3">
        {stat.unit}
      </div>
      <p className="text-white font-semibold text-base mb-2">{stat.label}</p>
      <p className="text-white/40 text-sm leading-relaxed">{stat.description}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-luna-midnight relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-luna-deep/50 text-luna-light text-xs font-semibold uppercase tracking-widest mb-4">
            Fakta & Data
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Angka yang <span className="text-gradient">Mengejutkan</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Fakta nyata tentang krisis sampah laut yang terjadi saat ini di seluruh lautan dunia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
