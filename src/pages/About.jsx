import { motion } from "motion/react";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import VisionMission from "../components/about/VisionMission";
import ImpactSection from "../components/about/ImpactSection";
import UnderwaterBackground from "../components/common/UnderwaterBackground";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AboutHero />
      <div className="relative">
        <UnderwaterBackground variant="shallow" />
        <div className="relative z-10">
          <AboutStory />
          <VisionMission />
          <ImpactSection />
        </div>
      </div>
    </motion.div>
  );
}
