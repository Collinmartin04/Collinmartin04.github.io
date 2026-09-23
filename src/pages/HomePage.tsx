import { useEffect } from 'react';
import { ArrowRight, MapPin, Github, Linkedin, Sparkles, TrendingUp, BarChart3, Database } from 'lucide-react';
import { profile, type PageId } from '@/data/portfolio';

type Props = {
  onNavigate: (page: PageId) => void;
};

export default function HomePage({ onNavigate }: Props) {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`;
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
                I build software that turns data into something useful.
              </h2>
              <p className="body-lg mt-6">{profile.intro2}</p>
              <p className="body mt-4">
                Whether it's cleaning messy datasets, building a forecasting model, or shipping
                a full-stack application, I bring the same curiosity and rigor: understand the
                problem, respect the data, and deliver something people can actually use.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => onNavigate('skills')} className="btn-ghost text-sm">
                  Explore my skills
                </button>
                <button onClick={() => onNavigate('experience')} className="btn-ghost text-sm">
                  See my experience
                </button>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: 'Data Analysis',
                  desc: 'Cleaning, exploring, and visualizing complex datasets.',
                },
                {
                  icon: TrendingUp,
                  title: 'Forecasting',
                  desc: 'Time-series models that predict demand and improve decisions.',
                },
                {
                  icon: Database,
                  title: 'Full-Stack Development',
                  desc: 'End-to-end applications with real users in production.',
                },
                {
                  icon: Sparkles,
                  title: 'Research & ETL',
                  desc: 'Extracting structured data from unstructured sources.',
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
          <div className="relative overflow-hidden card-surface p-10 lg:p-16 text-center hover:border-accent-500/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <h2 className="heading-3 text-white">Have a project in mind?</h2>
              <p className="body-lg mt-4 max-w-xl mx-auto">
                I'm always happy to talk about software, data, and how to turn an idea into
                something real. Let's connect.
              </p>
              <button onClick={() => onNavigate('projects')} className="btn-primary mt-7">
                View my projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
