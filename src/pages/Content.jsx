import { useState, useMemo } from "react";
import { motion } from "motion/react";
import ContentHeader from "../components/content/ContentHeader";
import CategoryFilter from "../components/content/CategoryFilter";
import ContentGrid from "../components/content/ContentGrid";
import { articlesData, categories } from "../data/articles";
import UnderwaterBackground from "../components/common/UnderwaterBackground";
import { Shell, Anchor, Waves, Fish } from "lucide-react";

/* Ocean facts data with Lucide icons */
const OCEAN_FACTS = [
  { Icon: Shell, fact: "Gurita memiliki tiga jantung dan darah berwarna biru." },
  { Icon: Anchor, fact: "Paus biru adalah hewan terbesar yang pernah hidup di Bumi." },
  { Icon: Waves, fact: "Terumbu karang mendukung 25% dari semua kehidupan laut." },
  { Icon: Fish, fact: "Hiu sudah ada sejak sebelum pohon muncul di Bumi." },
];

export default function Content() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Semua") return articlesData;
    return articlesData.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ContentHeader />

      <div className="relative">
        <UnderwaterBackground variant="mid" />

        <div className="relative z-10">
          {/* Ocean Facts quick-learn strip */}
          <section className="py-10 px-4 md:px-8">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {OCEAN_FACTS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl bg-ocean-deep/30 border border-ocean-surface/10 backdrop-blur-sm group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-ocean-deep/40 border border-ocean-surface/15 flex items-center justify-center mb-3 group-hover:border-ocean-surface/30 transition-colors">
                      <item.Icon className="w-4 h-4 text-ocean-sky" />
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {item.fact}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Main content section */}
          <section className="section-padding">
            <div className="container-custom">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              <ContentGrid articles={filteredArticles} />
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
