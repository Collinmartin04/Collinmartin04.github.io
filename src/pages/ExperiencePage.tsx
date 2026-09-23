import { useEffect } from 'react';
import { Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { experience, education, type PageId } from '@/data/portfolio';

type Props = {
  onNavigate: (page: PageId) => void;
};

export default function ExperiencePage({ onNavigate }: Props) {
  useEffect(() => {
    document.title = 'Experience — Collin Martin';
  }, []);

  return (
    <div className="animate-fade-in pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="container-mx container-px">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5" />
            Career
          </span>
          <h1 className="heading-1 mt-4 text-white">
            My <span className="text-gradient">experience</span>
          </h1>
          <p className="body-lg mt-6">
            From historical research data to production software, here's where I've put my skills to work.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/50 via-ink-700 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div
                key={`${item.company}-${idx}`}
                className={`relative pl-12 sm:pl-16 animate-fade-in-up stagger-${Math.min(idx + 1, 4)}`}
              >
                {/* Dot */}
                <span className="absolute left-0 top-1.5 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-ink-900 border border-accent-500/30 text-accent-400 shadow-lg shadow-accent-500/10">
                  <Briefcase className="w-5 h-5" />
                </span>

                <div className="card-surface p-6 hover-lift hover:border-accent-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h2 className="font-display font-bold text-lg text-white">{item.role}</h2>
                      <p className="text-accent-400 text-sm font-medium">{item.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                      <span className="badge-neutral text-xs">{item.period}</span>
                      <p className="text-xs text-ink-500 inline-flex items-center gap-1 mr-3">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="badge-neutral text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h2 className="heading-3 text-white mb-6 flex items-center gap-2.5">
            <GraduationCap className="w-6 h-6 text-accent-400" />
            Education
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className={`card-surface p-6 hover-lift hover:border-accent-500/30 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-white">{edu.degree}</h3>
                  <span className="badge-neutral text-xs shrink-0">{edu.period}</span>
                </div>
                <p className="text-accent-400 text-sm mt-1">{edu.school}</p>
                <p className="text-sm text-ink-400 mt-2">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="body-lg">Want to see what I've built?</p>
          <button onClick={() => onNavigate('projects')} className="btn-primary mt-5">
            View my projects
          </button>
        </div>
      </div>
    </div>
  );
}
