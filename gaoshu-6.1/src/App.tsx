import { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { IntroSection } from './sections/IntroSection';
import { OverviewSection } from './sections/OverviewSection';
import { MultivarSection } from './sections/MultivarSection';
import { IntegralSection } from './sections/IntegralSection';
import { CurveSurfaceSection } from './sections/CurveSurfaceSection';
import { SeriesSection } from './sections/SeriesSection';
import { AdvancedSection } from './sections/AdvancedSection';
import { StrategySection } from './sections/StrategySection';
import { ClosingSection } from './sections/ClosingSection';
import { sections } from './data/sections';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for active section and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Find active section
      const allIds: string[] = [];
      sections.forEach((s) => {
        allIds.push(s.id);
        s.subsections?.forEach((sub) => allIds.push(sub.id));
      });

      let currentId = allIds[0];
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentId = id;
          }
        }
      }
      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="noise-overlay grid-bg min-h-screen">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-glow/80 to-cyan-dim/60 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between border-b border-cyan-border/20 bg-void/90 backdrop-blur-xl px-4 py-3 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-2 text-silver-300 hover:text-cyan-glow transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span className="font-mono text-[10px] tracking-wider uppercase">目录</span>
        </button>
        <span className="font-mono text-[10px] tracking-wider text-silver-400 uppercase">
          高数下 · 冲刺
        </span>
      </header>

      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="lg:ml-72 pt-16 lg:pt-0">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-cyan-border/20">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-glow/[0.02] via-transparent to-transparent" />
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-cyan-glow/[0.02] blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-cyan-dim/[0.02] blur-3xl" />

          <div className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-36 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-glow" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-dim">
                西安交通大学 · 彭康书院
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-silver-100 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              高等数学
              <span className="text-cyan-glow">（下）</span>
              <br />
              <span className="text-silver-300">期末冲刺复习</span>
            </h1>
            <p className="mt-6 text-sm md:text-base text-silver-400 max-w-lg leading-relaxed">
              交互式学习讲义 · 覆盖全部核心考点 · 真题解析 · 在线自测
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['多元微分', '重积分', '曲线曲面积分', '无穷级数'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-border bg-cyan-subtle px-3 py-1 font-mono text-[10px] tracking-wider text-cyan-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 h-px w-32 bg-gradient-to-r from-cyan-glow/40 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-4xl">
          <IntroSection />
          <OverviewSection />
          <MultivarSection />
          <IntegralSection />
          <CurveSurfaceSection />
          <SeriesSection />
          <AdvancedSection />
          <StrategySection />
          <ClosingSection />
        </div>

        {/* Footer */}
        <footer className="border-t border-cyan-border/20 px-6 md:px-12 lg:px-20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[10px] tracking-wider text-silver-400/50 uppercase">
              彭康书院学业辅导与发展中心
            </p>
            <p className="text-[10px] text-silver-400/30">
              交互式学习讲义 · 配合真题集使用效果更佳
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
