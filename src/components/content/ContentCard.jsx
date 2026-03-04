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
      className="glass-card overflow-hidden group cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luna-midnight/80 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-luna-medium/80 text-white backdrop-blur-sm">
          {article.category}
        </span>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-luna-light transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {article.description}
        </p>
        <div className="flex items-center justify-between text-white/30 text-xs pt-4 border-t border-luna-deep/30">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
          <span>{article.date}</span>
        </div>
      </div>
    </motion.article>
  );
}
