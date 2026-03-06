import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { problemsData } from "../../data/stats";
import { Shell, TreePalm, Users } from "lucide-react";

const iconMap = { Shell, TreePalm, Users };

export default function ProblemCards() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden">
      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-deep/50 text-ocean-sky text-xs font-semibold uppercase tracking-widest mb-4">
            Dampak Nyata
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mengapa Ini <span className="text-gradient">Penting?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Sampah laut berdampak pada seluruh rantai kehidupan, dari biota laut hingga manusia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemsData.map((problem, index) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 relative group cursor-default shadow-lg shadow-ocean-abyss/40"
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${problem.color}, transparent)` }}
                />

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${problem.color}15` }}
                >
                  {Icon && <Icon className="w-7 h-7" style={{ color: problem.color }} />}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 font-display">
                  {problem.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
