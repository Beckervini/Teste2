
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/data/portfolioData";

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20">
      <SectionHeader 
        title="Projetos em Destaque"
        subtitle="Todos os projetos estão disponíveis no GitHub para visualização do código fonte"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
