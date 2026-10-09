import { IntroBand } from "@/components/band/IntroBand";
import { ContactSection } from "@/components/contact/ContactSection";
import { SiteHeader } from "@/components/header/SiteHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { RevealController } from "@/components/RevealController";
import { ServicesSection } from "@/components/services/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-fg">
      <SiteHeader />
      <main>
        <HeroSection />
        <IntroBand />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
      </main>
      <ContactSection />
      <RevealController />
    </div>
  );
}
