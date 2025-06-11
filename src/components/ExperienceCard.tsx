
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const ExperienceCard = ({ title, company, period, description, technologies }: ExperienceCardProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
      <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 ring-4 ring-white dark:ring-slate-900"></div>
      
      <Card className="ml-6 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <CardTitle className="text-xl text-slate-800 dark:text-slate-200">{title}</CardTitle>
              <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">{company}</CardDescription>
            </div>
            <Badge variant="outline" className="w-fit">
              <Calendar className="w-3 h-3 mr-1" />
              {period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
