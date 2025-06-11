
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  category: string;
  level: string;
  icon: LucideIcon;
}

export const SkillCard = ({ name, category, level, icon: Icon }: SkillCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">{name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{category}</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
          {level}
        </Badge>
      </CardContent>
    </Card>
  );
};
