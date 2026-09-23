import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import SkillsPage from '@/pages/SkillsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import type { PageId } from '@/data/portfolio';

export default function App() {
  const [page, setPage] = useState<PageId>('home');

  const handleNavigate = (next: PageId) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <Navbar current={page} onNavigate={handleNavigate} />
      <main>
        {page === 'home' && <HomePage onNavigate={handleNavigate} />}
        {page === 'skills' && <SkillsPage onNavigate={handleNavigate} />}
        {page === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
        {page === 'experience' && <ExperiencePage onNavigate={handleNavigate} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
