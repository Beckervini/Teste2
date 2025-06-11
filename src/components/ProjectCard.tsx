
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export const ProjectCard = ({ title, description, technologies, github }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <CardHeader>
        <CardTitle className="text-lg text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-colors" asChild>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Ver no GitHub
            <ExternalLink className="w-3 h-3 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
