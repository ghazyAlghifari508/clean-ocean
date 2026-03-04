import { motion } from "motion/react";
import ContentCard from "./ContentCard";

export default function ContentGrid({ articles }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {articles.map((article, index) => (
        <ContentCard key={article.id} article={article} index={index} />
      ))}

      {articles.length === 0 && (
        <div className="col-span-full text-center py-20">
          <p className="text-white/30 text-lg">Tidak ada artikel berdasarkan filter ini.</p>
        </div>
      )}
    </motion.div>
  );
}
