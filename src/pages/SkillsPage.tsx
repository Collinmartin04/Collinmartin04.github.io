import { useEffect, useRef, useState } from 'react';
import { Code2, BarChart3, BrainCircuit, Database, Sparkles } from 'lucide-react';
import { skillCategories, tools, certifications } from '@/data/portfolio';

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  chart: BarChart3,
  brain: BrainCircuit,
  database: Database,
};

export default function SkillsPage() {
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
            From writing the first SQL query to deploying a production model, here's everything I
            use to move a data project from idea to impact.
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
                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools cloud */}
        <div className="mt-14">
          <h2 className="heading-3 text-white mb-6">Tools & technologies I work with</h2>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool, i) => (
              <span
                key={tool}
                className={`badge-neutral hover:border-accent-500/40 hover:text-accent-300 hover:bg-accent-500/5 transition-all cursor-default animate-fade-in stagger-${Math.min((i % 6) + 1, 6)}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-14">
          <h2 className="heading-3 text-white mb-6">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <div
                key={cert}
                className={`card-surface p-5 flex items-center gap-3 hover-lift hover:border-gold-500/30 animate-fade-in-up stagger-${Math.min(i + 1, 4)}`}
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium text-ink-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(level);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-ink-200">{name}</span>
        <span className="text-xs font-mono text-ink-500">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
