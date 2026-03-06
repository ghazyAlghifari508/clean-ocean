import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { articlesData } from "../../data/articles";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedContent() {
  const { ref, isInView } = useScrollAnimation();
  const featured = articlesData.slice(0, 3);

  return (
    <section ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-deep/50 text-ocean-sky text-xs font-semibold uppercase tracking-widest mb-4">
              Konten Unggulan
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Pelajari <span className="text-gradient">Lebih Dalam</span>
            </h2>
          </div>
          <Link
            to="/content"
            className="mt-4 md:mt-0 flex items-center gap-2 text-ocean-surface hover:text-ocean-sky text-sm font-semibold transition-colors group"
          >
            Lihat Semua Konten
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-ocean-mid/80 text-white backdrop-blur-sm">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ocean-sky transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-white/30 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
