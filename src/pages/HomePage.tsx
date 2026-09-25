import { useEffect } from 'react';
import { ArrowRight, MapPin, Github, Linkedin, Sparkles, TrendingUp, BarChart3, Database, Code2, Mail, Download } from 'lucide-react';
import { profile, type PageId } from '@/data/portfolio';

type Props = {
  onNavigate: (page: PageId) => void;
};

export default function HomePage({ onNavigate }: Props) {
  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`;
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 lg:pt-36 pb-20 lg:pb-28">
        {/* Background */}
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-32 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-mx container-px relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/5 text-accent-300 text-sm font-medium animate-fade-in-down stagger-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
              </span>
              Available for new opportunities
            </div>

            <h1 className="heading-1 mt-7 animate-fade-in-up stagger-2">
              <span className="text-white">Hi, I'm {profile.name.split(' ')[0]}.</span>
              <br />
              <span className="text-gradient">{profile.role}</span>
            </h1>

            <p className="body-lg mt-6 max-w-2xl mx-auto animate-fade-in-up stagger-3">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up stagger-4">
              <button onClick={() => onNavigate('projects')} className="btn-primary">
                View my work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => onNavigate('experience')} className="btn-ghost">
                My experience
              </button>
            </div>

            <div className="mt-7 flex items-center justify-center gap-5 text-sm text-ink-400 animate-fade-in stagger-5">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent-400" />
                {profile.location}
              </span>
              <span className="w-px h-4 bg-ink-700" />
              <a
                href={profile.socials.find((s) => s.icon === 'github')?.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <span className="w-px h-4 bg-ink-700" />
              <a
                href={profile.socials.find((s) => s.icon === 'linkedin')?.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>


        </div>
      </section>

      {/* About / Intro */}
      <section className="pt-4 lg:pt-8 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container-mx container-px relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow">
                <Sparkles className="w-3.5 h-3.5" />
                About me
              </span>
              <h2 className="heading-2 mt-4 text-white">
                I turn messy data into decisions people can act on.
              </h2>
              <p className="body-lg mt-6">{profile.intro2}</p>
              <p className="body mt-4">
                Whether I'm cleaning a messy dataset, building a forecasting model, or shipping
                an application, I bring the same approach: understand the problem, respect the
                data, and deliver something useful.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => onNavigate('skills')} className="btn-ghost text-sm">
                  Explore my skills
                </button>
                <button onClick={() => onNavigate('experience')} className="btn-ghost text-sm">
                  See my experience
                </button>
                <button onClick={() => onNavigate('projects')} className="btn-ghost text-sm">
                  View my projects
                </button>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: 'Data Analysis',
                  desc: 'Cleaning, exploring, and visualizing complex datasets with Python, SQL, and Excel.',
                },
                {
                  icon: TrendingUp,
                  title: 'Forecasting & Modeling',
                  desc: 'Time-series and machine learning models that predict demand and guide decisions.',
                },
                {
                  icon: Database,
                  title: 'Data Pipelines & ETL',
                  desc: 'Extracting structured data from messy sources, even 150-year-old scans.',
                },
                {
                  icon: Code2,
                  title: 'Full-Stack Development',
                  desc: 'Engineering skills to turn analysis into tools with real users.',
                },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className={`card-surface p-6 hover-lift hover:border-accent-500/30 animate-fade-in-up stagger-${i + 1}`}
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-500/10 text-accent-400 mb-4">
                    <f.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display font-semibold text-white text-lg">{f.title}</h3>
                  <p className="text-sm text-ink-400 mt-1.5 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="container-mx container-px">
          <div className="relative overflow-hidden card-surface p-8 lg:p-10 text-center hover:border-accent-500/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                Let's work together
              </h2>
              <p className="body mt-3 max-w-xl mx-auto">
                I'm open to data analyst and data science roles. If you're hiring, or just want
                to talk data, I'd love to hear from you.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  Get in touch
                  <Mail className="w-4 h-4" />
                </a>
                <a href="/resume/collin-martin-resume.pdf" download className="btn-ghost">
                  Download Resume
                  <Download className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profile.socials.find((s) => s.icon === 'linkedin')?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  LinkedIn
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
