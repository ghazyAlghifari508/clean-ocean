import { motion } from "motion/react";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import VisionMission from "../components/about/VisionMission";
import TeamSection from "../components/about/TeamSection";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AboutHero />
      <AboutStory />
      <VisionMission />
      <TeamSection />
    </motion.div>
  );
}
