import ContentHero from "../components/content/ContentHero";
import ContentQuotes from "../components/content/ContentQuotes";
import ContentImpactCards from "../components/content/ContentImpactCards";
import ContentTimeline from "../components/content/ContentTimeline";
import ContentBentoGrid from "../components/content/ContentBentoGrid";
import ContentSolutions from "../components/content/ContentSolutions";
import ContentVideo from "../components/content/ContentVideo";
import ContentCTA from "../components/content/ContentCTA";

export default function Content() {
  return (
    <main className="w-full bg-white">
      <ContentHero />
      <ContentQuotes />
      <ContentBentoGrid />
      <ContentTimeline />
      <ContentImpactCards />
      <ContentSolutions />
      <ContentVideo />
      <ContentCTA />
    </main>
  );
}
