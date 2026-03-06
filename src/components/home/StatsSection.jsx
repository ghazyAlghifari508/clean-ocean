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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
      className="glass-card p-8 text-center group hover:border-ocean-sky/30 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ocean-sky/20 to-ocean-surface/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
        {(() => {
          const Icon = iconMap[stat.icon];
          return Icon ? <Icon className="w-6 h-6 text-ocean-sky" /> : null;
        })()}
      </div>
      <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-1">
        {count}
        <span className="text-ocean-sky">{stat.suffix}</span>
      </div>
      <div className="text-ocean-surface text-sm font-semibold uppercase tracking-wider mb-3">
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
    <section ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-deep/50 text-ocean-sky text-xs font-semibold uppercase tracking-widest mb-4">
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
