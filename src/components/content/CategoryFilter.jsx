import { motion } from "motion/react";
import { Waves, Trash2, Fish, Lightbulb, LayoutGrid } from "lucide-react";

const CATEGORY_CONFIG = {
  "Semua": { Icon: Waves, color: "text-ocean-sky" },
  "Jenis Sampah": { Icon: Trash2, color: "text-amber-400" },
  "Dampak Ekosistem": { Icon: Fish, color: "text-emerald-400" },
  "Solusi & Aksi": { Icon: Lightbulb, color: "text-yellow-400" },
};

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const cfg = CATEGORY_CONFIG[category] || { Icon: LayoutGrid, color: "text-white/50" };
        const { Icon } = cfg;

        return (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${isActive
                ? "bg-gradient-to-r from-ocean-mid to-ocean-surface text-white shadow-lg shadow-ocean-mid/30"
                : "bg-ocean-deep/30 text-white/50 hover:text-white hover:bg-ocean-deep/60 border border-ocean-surface/10 hover:border-ocean-surface/25 backdrop-blur-sm"
              }`}
          >
            {/* Active ripple effect */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0, opacity: 0.3 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                }}
              />
            )}
            <Icon className={`relative z-10 w-4 h-4 ${isActive ? "text-white" : cfg.color}`} />
            <span className="relative z-10">{category}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
