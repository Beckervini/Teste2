
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};
