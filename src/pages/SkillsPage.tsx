import { useEffect } from 'react';
import { Code2, BarChart3, BrainCircuit, Database, Sparkles, ArrowRight } from 'lucide-react';
import { skillCategories, type PageId } from '@/data/portfolio';

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  chart: BarChart3,
  brain: BrainCircuit,
  database: Database,
};

type Props = {
  onNavigate: (page: PageId) => void;
};

export default function SkillsPage({ onNavigate }: Props) {
  useEffect(() => {
    document.title = 'Skills — Collin Martin';
  }, []);

  return (
    <div className="animate-fade-in pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="container-mx container-px">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5" />
            Skills & Tools
          </span>
          <h1 className="heading-1 mt-4 text-white">
            My technical <span className="text-gradient">toolkit</span>
          </h1>
          <p className="body-lg mt-6">
            The languages, libraries, and tools I use to analyze data, build models, and create
            applications.
          </p>
        </div>

        {/* Skill categories */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <div
                key={cat.title}
                className={`card-surface p-7 hover-lift hover:border-accent-500/30 animate-fade-in-up stagger-${Math.min(idx + 1, 6)}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-500/10 text-accent-400">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h2 className="font-display font-semibold text-white text-lg">{cat.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="badge-neutral hover:border-accent-500/40 hover:text-accent-300 hover:bg-accent-500/5 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 relative overflow-hidden card-surface p-8 lg:p-10 text-center hover:border-accent-500/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              Want to see these tools in action?
            </h2>
            <p className="body mt-3 max-w-xl mx-auto">
              These skills come together in the projects I've shipped, from forecasting models to
              full-stack applications.
            </p>
            <button onClick={() => onNavigate('projects')} className="btn-primary mt-5">
              View my projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
