import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { Bio } from "@/components/bio/Bio";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ColorStrip } from "@/components/projects/ColorStrip";
import { Marquee } from "@/components/projects/Marquee";
import { WorkList } from "@/components/projects/WorkList";
import { ClosingCTA } from "@/components/cta/ClosingCTA";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="page-frame flex-1 flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Bio />
        <SkillsSection />
        <ExperienceTimeline />
        <Marquee />
        <ColorStrip />
        <WorkList />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
