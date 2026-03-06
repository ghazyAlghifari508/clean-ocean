import { useState, useMemo } from "react";
import { motion } from "motion/react";
import ContentHeader from "../components/content/ContentHeader";
import CategoryFilter from "../components/content/CategoryFilter";
import ContentGrid from "../components/content/ContentGrid";
import { articlesData, categories } from "../data/articles";

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
      <section className="section-padding bg-ocean-abyss">
        <div className="container-custom">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <ContentGrid articles={filteredArticles} />
        </div>
      </section>
    </motion.div>
  );
}
