import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { teamData } from "../../data/team";

export default function TeamSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-luna-midnight">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-luna-deep/50 text-luna-light text-xs font-semibold uppercase tracking-widest mb-4">
            Tim Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Di Balik <span className="text-gradient">OceanGuard</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Sekelompok individu yang bersemangat untuk membuat perubahan nyata bagi lautan kita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 text-center group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-luna-light to-luna-medium flex items-center justify-center mx-auto mb-5 text-luna-midnight font-bold text-xl font-display group-hover:scale-110 transition-transform duration-300">
                {member.avatar}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-luna-medium text-sm font-medium mb-4">{member.role}</p>
              <p className="text-white/40 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
