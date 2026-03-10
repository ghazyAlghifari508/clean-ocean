import { motion } from "motion/react";
import { Clock, ArrowUpRight } from "lucide-react";

export default function ContentCard({ article, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-ocean-surface/10 hover:border-ocean-surface/25 transition-all duration-500 relative"
      style={{
        background: "rgba(6, 59, 82, 0.5)",
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Shine animation on hover */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="absolute top-0 -left-[150%] w-[200%] h-full animate-shine"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-ocean-surface/0 group-hover:bg-ocean-surface/[0.03] transition-colors duration-500 rounded-2xl z-0" />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss/90 via-ocean-abyss/30 to-ocean-mid/10" />

        {/* Category badge (coral tag style) */}
        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-ocean-mid/90 to-ocean-surface/80 text-white backdrop-blur-sm shadow-md">
          {article.category}
        </span>

        {/* Arrow button */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>

        {/* Small decorative fish */}
        <motion.div
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          animate={{ x: [-3, 3, -3], y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg width="20" height="12" viewBox="0 0 40 24" fill="none">
            <ellipse cx="18" cy="12" rx="14" ry="9" fill="#FFD700" opacity="0.7" />
            <polygon points="32,12 40,5 40,19" fill="#FFA500" opacity="0.6" />
            <circle cx="11" cy="10" r="2" fill="#fff" opacity="0.9" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col relative z-10">
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ocean-sky transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-white/30 text-xs pt-4 border-t border-ocean-surface/10">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span>{article.date}</span>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-ocean-surface/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.article>
  );
}
