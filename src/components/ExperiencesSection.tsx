
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeader } from "./SectionHeader";
import { experiences } from "@/data/portfolioData";

export const ExperiencesSection = () => {
  return (
    <section id="experiencias" className="py-20">
      <SectionHeader title="Experiências" />
      
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};
