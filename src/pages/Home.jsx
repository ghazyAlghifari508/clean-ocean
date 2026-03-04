import { motion } from "motion/react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ProblemCards from "../components/home/ProblemCards";
import FeaturedContent from "../components/home/FeaturedContent";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <StatsSection />
      <ProblemCards />
      <FeaturedContent />
      <CTABanner />
    </motion.div>
  );
}
