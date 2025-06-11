
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ObjectivesSection />
      <SkillsSection />
      <ExperiencesSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
