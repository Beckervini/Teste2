
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20">
      <SectionHeader title="Vamos Conversar?" />
      
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Estou sempre aberto a novas oportunidades e projetos interessantes. 
          Vamos criar algo incrível juntos!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
            <a href="https://www.linkedin.com/in/vinicius-becker-a2aba7233" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              Linkedin
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
