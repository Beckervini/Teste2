
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { activeSection, scrollToSection } = useScrollNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />

      <main className="pt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
