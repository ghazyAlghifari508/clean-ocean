import { motion } from "motion/react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ProblemCards from "../components/home/ProblemCards";
import FeaturedContent from "../components/home/FeaturedContent";
import CTABanner from "../components/home/CTABanner";
import OceanBackground from "../components/home/OceanBackground";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />

      {/* 
        Single continuous vertical section from just below surface to the seabed.
        This provides the seamless dive experience the user requested.
      */}
      <div className="relative">
        {/* Animated sea creatures floating in the background throughout the entire rest of the page */}
        <OceanBackground />

        {/* Content Layers on top of the creatures */}
        <div className="relative z-10 pt-10">
          <StatsSection />
          <ProblemCards />
          <FeaturedContent />
          <CTABanner />
        </div>
      </div>
    </motion.div>
  );
}
