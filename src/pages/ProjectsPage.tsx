import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Github, Filter, ArrowRight, X } from 'lucide-react';
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
  purple: {
    ring: 'hover:border-violet-500/40',
    text: 'text-violet-300',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
  },
};

export default function ProjectsPage({ onNavigate }: Props) {
  useEffect(() => {
    document.title = 'Projects — Collin Martin';
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.filterGroup)))];
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.filterGroup === filter);

  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxImage]);

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
            A sample of my analytics, machine learning, and full-stack work. Each project started
            with a real problem and ended with a measurable result.
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-ink-700 text-ink-400 hover:text-white hover:border-accent-500/40 transition-all shrink-0"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-ink-400 leading-relaxed mt-4">{project.description}</p>

                {/* Demo video */}
                {project.videoUrl && (
                  <video
                    src={project.videoUrl}
                    controls
                    playsInline
                    className="mt-5 w-full rounded-xl border border-ink-700/40"
                  />
                )}

                {/* Screenshots */}
                {project.images && project.images.length > 0 && (
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {project.images.map((img) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setLightboxImage(img)}
                        className="cursor-zoom-in rounded-lg border border-ink-700/40 overflow-hidden hover:border-accent-500/40 transition-all"
                      >
                        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-20 object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Key findings */}
                {project.keyFindings && project.keyFindings.length > 0 && (
                  <div className="mt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Key findings
                    </h3>
                    <ul className="mt-2.5 space-y-1.5">
                      {project.keyFindings.map((finding) => (
                        <li key={finding} className="text-sm text-ink-400 leading-relaxed pl-4 relative">
                          <span className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-current ${a.text}`} />
                          {finding}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics */}
                {project.metrics.length > 0 && (
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center p-3 rounded-xl bg-ink-800/40 border border-ink-700/40">
                      <div className={`font-display font-bold text-lg ${a.text}`}>{m.value}</div>
                      <div className="text-[11px] text-ink-500 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
                )}

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge-neutral text-[11px] px-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 relative overflow-hidden card-surface p-8 lg:p-10 text-center hover:border-accent-500/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              Want to learn more about my background?
            </h2>
            <p className="body mt-3 max-w-xl mx-auto">
              See the roles, education, and experience behind the work above.
            </p>
            <button onClick={() => onNavigate('experience')} className="btn-primary mt-5">
              See my experience
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-6 animate-fade-in"
            onClick={() => setLightboxImage(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Close"
              className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-lg border border-ink-700 text-ink-300 hover:text-white hover:border-accent-500/40 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full rounded-xl border border-ink-700/40"
            />
          </div>,
          document.body
        )}
    </div>
  );
}
