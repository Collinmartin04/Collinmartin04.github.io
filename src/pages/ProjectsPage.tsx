import { useEffect, useState } from 'react';
import { Sparkles, ArrowUpRight, Filter } from 'lucide-react';
import { projects, type Project, type PageId } from '@/data/portfolio';

type Props = {
  onNavigate: (page: PageId) => void;
};

const accentMap: Record<Project['accent'], { ring: string; text: string; bg: string; border: string }> = {
  accent: {
    ring: 'hover:border-accent-500/40',
    text: 'text-accent-300',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/30',
  },
  gold: {
    ring: 'hover:border-gold-500/40',
    text: 'text-gold-400',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/30',
  },
  blue: {
    ring: 'hover:border-sky-500/40',
    text: 'text-sky-300',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
  },
};

export default function ProjectsPage({ onNavigate }: Props) {
  useEffect(() => {
    document.title = 'Projects — Collin Martin';
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="animate-fade-in pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="container-mx container-px">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio
          </span>
          <h1 className="heading-1 mt-4 text-white">
            Selected <span className="text-gradient">projects</span>
          </h1>
          <p className="body-lg mt-6">
            A sample of analytics, visualization, and machine learning work I've delivered.
            Each one started with a question worth answering and ended with a measurable result.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-10 flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-500 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-accent-500 text-ink-950'
                  : 'border border-ink-700 text-ink-400 hover:text-white hover:border-ink-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((project, idx) => {
            const a = accentMap[project.accent];
            return (
              <article
                key={project.id}
                className={`card-surface p-7 hover-lift ${a.ring} animate-fade-in-up stagger-${Math.min((idx % 4) + 1, 4)} group`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`badge ${a.bg} ${a.border} ${a.text}`}>
                      {project.category}
                    </span>
                    <h2 className="font-display font-bold text-xl text-white mt-3 group-hover:text-accent-300 transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-ink-700 text-ink-400 group-hover:text-white group-hover:border-accent-500/40 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <p className="text-sm text-ink-400 leading-relaxed mt-4">{project.description}</p>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center p-3 rounded-xl bg-ink-800/40 border border-ink-700/40">
                      <div className={`font-display font-bold text-lg ${a.text}`}>{m.value}</div>
                      <div className="text-[11px] text-ink-500 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge-neutral text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="body-lg">Want to learn more about my background?</p>
          <button onClick={() => onNavigate('experience')} className="btn-primary mt-5">
            See my experience
          </button>
        </div>
      </div>
    </div>
  );
}
