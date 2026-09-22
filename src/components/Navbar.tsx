import { useEffect, useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { navItems, type PageId } from '@/data/portfolio';

type NavbarProps = {
  current: PageId;
  onNavigate: (page: PageId) => void;
};

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg shadow-ink-950/40' : 'bg-transparent'
      }`}
    >
      <nav className="container-mx container-px flex items-center justify-between h-16 lg:h-20">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 group"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-ink-950 group-hover:scale-105 transition-transform">
            <Home className="w-6 h-6" strokeWidth={2.5} />
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  current === item.id
                    ? 'text-white'
                    : 'text-ink-400 hover:text-white'
                }`}
              >
                {item.label}
                {current === item.id && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-accent-400 to-gold-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-ink-200 hover:text-white hover:bg-ink-800/60 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-ink-800/50 animate-fade-in-down">
          <ul className="container-mx container-px py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    current === item.id
                      ? 'bg-accent-500/10 text-accent-300'
                      : 'text-ink-300 hover:bg-ink-800/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
