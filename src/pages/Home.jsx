import { useEffect } from "react";
import { motion } from "motion/react";
import HeroSection from "../components/home/HeroSection";
import QuickStats from "../components/home/QuickStats";
import SimulationTeaser from "../components/home/SimulationTeaser";
import EducationPreview from "../components/home/EducationPreview";
import OceanJourney from "../components/home/OceanJourney";
import ImpactGallery from "../components/home/ImpactGallery";
import MarineLife from "../components/home/MarineLife";

export default function Home() {
  // Update document title
  useEffect(() => {
    document.title = "Beranda | OClean Dive";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-white"
    >
      <HeroSection />
      <QuickStats />
      <OceanJourney />
      <MarineLife />
      <SimulationTeaser />
      <ImpactGallery />
      <EducationPreview />
    </motion.div>
  );
}
