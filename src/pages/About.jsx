import AboutHero from "../components/about/AboutHero";
import AboutHistory from "../components/about/AboutHistory";
import AboutVisionMission from "../components/about/AboutVisionMission";
import AboutValues from "../components/about/AboutValues";
import AboutLocalFacts from "../components/about/AboutLocalFacts";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutImpactGallery from "../components/about/AboutImpactGallery";
import AboutTeam from "../components/about/AboutTeam";
import AboutPartners from "../components/about/AboutPartners";
import ContentCTA from "../components/content/ContentCTA";

export default function About() {
  return (
    <main className="w-full bg-white">
      <AboutHero />
      <AboutHistory />
      <AboutVisionMission />
      <AboutValues />
      <AboutLocalFacts />
      <AboutFeatures />
      <AboutImpactGallery />
      <AboutTeam />
      <AboutPartners />
      <ContentCTA />
    </main>
  );
}
