import { BarChart3, Github, Linkedin, Mail } from 'lucide-react';
import { profile, navItems, type PageId } from '@/data/portfolio';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative border-t border-ink-800/60 bg-ink-950">
      <div className="container-mx container-px py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-ink-950">
                <BarChart3 className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold text-lg text-white">
                {profile.name}
              </span>
            </div>
            <p className="body max-w-xs text-sm">
              Data scientist and analyst based in {profile.location}. Open to new opportunities and collaborations.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={profile.socials.find((s) => s.icon === 'github')?.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-ink-700 text-ink-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/5 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.find((s) => s.icon === 'linkedin')?.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-ink-700 text-ink-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-ink-700 text-ink-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="link-underline text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 mb-4">
              Get in touch
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="link-underline">
                  {profile.email}
                </a>
              </li>
              <li className="text-ink-400">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
}
