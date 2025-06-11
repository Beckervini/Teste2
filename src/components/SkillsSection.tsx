
import { SkillCard } from "./SkillCard";
import { SectionHeader } from "./SectionHeader";
import { skills } from "@/data/portfolioData";

export const SkillsSection = () => {
  return (
    <section id="competencias" className="py-20">
      <SectionHeader title="Competências Técnicas" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};
