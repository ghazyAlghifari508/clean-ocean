import { motion } from "motion/react";
import ContentCard from "./ContentCard";

export default function ContentGrid({ articles }) {
  return (
    <div className="relative">
      {/* Floating bubble decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none hidden md:block"
          style={{
            width: 6 + (i % 3) * 4,
            height: 6 + (i % 3) * 4,
            right: `${5 + i * 8}%`,
            top: `${20 + i * 20}%`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,255,255,0.05))",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        />
      ))}

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {articles.map((article, index) => (
          <ContentCard key={article.id} article={article} index={index} />
        ))}

        {articles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-20"
          >
            {/* Sad fish illustration */}
            <motion.div
              className="mx-auto mb-6"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                <ellipse cx="36" cy="25" rx="28" ry="18" fill="#1A8FB5" opacity="0.3" />
                <polygon points="64,25 80,12 80,38" fill="#0C5F7F" opacity="0.3" />
                <circle cx="25" cy="20" r="4" fill="#fff" opacity="0.5" />
                <circle cx="25" cy="21" r="2" fill="#063B52" opacity="0.5" />
                {/* Sad mouth */}
                <path
                  d="M20,32 Q28,28 36,32"
                  stroke="#87CEEB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.4"
                />
                {/* Tear drop */}
                <circle cx="25" cy="27" r="2" fill="#87CEEB" opacity="0.3" />
              </svg>
            </motion.div>
            <p className="text-white/30 text-lg font-display">
              Tidak ada artikel berdasarkan filter ini.
            </p>
            <p className="text-white/20 text-sm mt-2">
              Coba pilih kategori lain untuk menemukan konten menarik
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Coral reef divider at bottom */}
      {articles.length > 0 && (
        <div className="mt-16 flex justify-center">
          <svg width="200" height="30" viewBox="0 0 200 30" fill="none" opacity="0.2">
            <path
              d="M0,25 Q25,15 50,20 Q60,5 70,18 Q85,8 100,15 Q115,5 130,18 Q140,8 150,20 Q175,15 200,25"
              stroke="#4DB8DB"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="60" cy="5" r="3" fill="#FF7F7F" opacity="0.5" />
            <circle cx="100" cy="12" r="2.5" fill="#FFD700" opacity="0.5" />
            <circle cx="140" cy="8" r="3" fill="#FF7F7F" opacity="0.5" />
          </svg>
        </div>
      )}
    </div>
  );
}
