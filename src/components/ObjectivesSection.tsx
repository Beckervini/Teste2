
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";

export const ObjectivesSection = () => {
  return (
    <section id="objetivos" className="py-20">
      <SectionHeader title="Objetivos" />
      
      <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none shadow-xl">
        <CardContent className="p-8">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
            Busco oportunidades para aplicar minha experiência em desenvolvimento full stack, 
            trabalhando com tecnologias modernas como Java, .NET, Python, Typescript, Javascript, Html, cloud computing entre outras. 
            Meu objetivo é contribuir para projetos inovadores, sempre focando em arquiteturas limpas, 
            segurança robusta e soluções escaláveis que realmente façam a diferença.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
