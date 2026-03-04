import { motion } from "motion/react";

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-luna-medium text-white shadow-lg shadow-luna-medium/20"
              : "bg-luna-dark/50 text-white/50 hover:text-white hover:bg-luna-deep/50 border border-luna-deep/30"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
