
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Calendar } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { education, certifications } from "@/data/portfolioData";

export const EducationSection = () => {
  return (
    <section id="formacao" className="py-20">
      <SectionHeader title="Formação & Certificações" />
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            Formação Acadêmica
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-slate-800 dark:text-slate-200">{edu.degree}</CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            Certificações
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-slate-800 dark:text-slate-200">{cert.name}</CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">{cert.issuer}</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {cert.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
