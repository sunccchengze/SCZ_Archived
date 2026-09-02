import { useState, useEffect, useCallback } from 'react';
import { chapters } from './data/chapters';
import Navigation from './components/Navigation';
import ContentRenderer from './components/ContentRenderer';
import FormulaSheet from './components/FormulaSheet';
import HeroSection from './components/HeroSection';

function App() {
  const [showHero, setShowHero] = useState(true);
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);
  const [activeSection, setActiveSection] = useState(chapters[0].sections[0].id);
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  const [showFormulaSheet, setShowFormulaSheet] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Get current chapter and section
  const currentChapter = chapters.find(c => c.id === activeChapter) || chapters[0];
  const currentSection = currentChapter.sections.find(s => s.id === activeSection) || currentChapter.sections[0];

  // Check if user has visited before
  useEffect(() => {
    const hasVisited = localStorage.getItem('physics-visited');
    if (hasVisited) {
      setShowHero(false);
    }
  }, []);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('physics-progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('physics-progress', JSON.stringify(progress));
  }, [progress]);

  // Mark section as complete
  const markComplete = useCallback(() => {
    const key = `${activeChapter}-${activeSection}`;
    setProgress(prev => ({ ...prev, [key]: true }));
  }, [activeChapter, activeSection]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('content-container');
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(progress);

        // Auto mark complete when scrolled to bottom
        if (progress > 95) {
          markComplete();
        }
      }
    };

    const container = document.getElementById('content-container');
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [markComplete]);

  // Navigate to section
  const goToSection = (chapterId: string, sectionId: string) => {
    setActiveChapter(chapterId);
    setActiveSection(sectionId);
    // Scroll to top
    const container = document.getElementById('content-container');
    container?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to next/prev section
  const navigateSection = (direction: 'next' | 'prev') => {
    const chapterIndex = chapters.findIndex(c => c.id === activeChapter);
    const sectionIndex = currentChapter.sections.findIndex(s => s.id === activeSection);

    if (direction === 'next') {
      if (sectionIndex < currentChapter.sections.length - 1) {
        goToSection(activeChapter, currentChapter.sections[sectionIndex + 1].id);
      } else if (chapterIndex < chapters.length - 1) {
        const nextChapter = chapters[chapterIndex + 1];
        goToSection(nextChapter.id, nextChapter.sections[0].id);
      }
    } else {
      if (sectionIndex > 0) {
        goToSection(activeChapter, currentChapter.sections[sectionIndex - 1].id);
      } else if (chapterIndex > 0) {
        const prevChapter = chapters[chapterIndex - 1];
        goToSection(prevChapter.id, prevChapter.sections[prevChapter.sections.length - 1].id);
      }
    }
  };

  // Check if can navigate
  const canNavigatePrev = () => {
    const chapterIndex = chapters.findIndex(c => c.id === activeChapter);
    const sectionIndex = currentChapter.sections.findIndex(s => s.id === activeSection);
    return chapterIndex > 0 || sectionIndex > 0;
  };

  const canNavigateNext = () => {
    const chapterIndex = chapters.findIndex(c => c.id === activeChapter);
    const sectionIndex = currentChapter.sections.findIndex(s => s.id === activeSection);
    return chapterIndex < chapters.length - 1 || sectionIndex < currentChapter.sections.length - 1;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showHero) return;
      
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      if (e.key === 'ArrowRight' || e.key === 'j') {
        if (canNavigateNext()) navigateSection('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        if (canNavigatePrev()) navigateSection('prev');
      } else if (e.key === 'f') {
        setShowFormulaSheet(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showHero, activeChapter, activeSection]);

  // Start learning
  const handleStart = () => {
    setShowHero(false);
    localStorage.setItem('physics-visited', 'true');
  };

  // Show hero page
  if (showHero) {
    return <HeroSection onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] bg-grid relative">
      {/* Ambient glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#9d4edd]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation */}
      <Navigation
        chapters={chapters}
        activeChapter={activeChapter}
        activeSection={activeSection}
        onChapterClick={(id) => {
          setActiveChapter(id);
          const chapter = chapters.find(c => c.id === id);
          if (chapter) {
            setActiveSection(chapter.sections[0].id);
          }
        }}
        onSectionClick={goToSection}
        progress={progress}
        isMobileOpen={isMobileNavOpen}
        onMobileClose={() => setIsMobileNavOpen(false)}
      />

      {/* Main content */}
      <main className="lg:ml-72 min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#333]">
          {/* Scroll progress */}
          <div className="h-0.5 bg-[#1a1a25]">
            <div 
              className="h-full progress-bar"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden text-[#808080] hover:text-[#e8e8e8] p-2"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#9d4edd] font-display text-xs">第{currentChapter.number}章</span>
              <span className="text-[#333]">/</span>
              <span className="text-[#808080] font-tech">{currentSection.title}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFormulaSheet(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[#9d4edd]/10 border border-[#9d4edd]/30 rounded-lg text-[#c77dff] text-sm font-tech hover:bg-[#9d4edd]/20 transition-all"
              >
                <span>📋</span>
                <span className="hidden sm:inline">公式速查</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content area */}
        <div 
          id="content-container"
          className="flex-1 overflow-y-auto px-4 lg:px-8 py-8 lg:py-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Chapter title */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{currentChapter.icon}</span>
                <div>
                  <div className="text-[#9d4edd] font-display text-sm tracking-widest mb-1">
                    CHAPTER {currentChapter.number}
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-[#e8e8e8] font-tech">
                    {currentChapter.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Section title */}
            <div className="mb-8">
              <h2 className="text-xl lg:text-2xl text-[#00d4ff] font-tech tracking-wide glow-text-blue inline-block">
                {currentSection.title}
              </h2>
              <div className="mt-2 h-0.5 w-24 bg-gradient-to-r from-[#00d4ff] to-transparent" />
            </div>

            {/* Content blocks */}
            <div className="space-y-2">
              {currentSection.content.map((block, index) => (
                <ContentRenderer key={index} block={block} index={index} />
              ))}
            </div>

            {/* Complete button */}
            <div className="mt-12 pt-8 border-t border-[#333]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={markComplete}
                  className={`px-6 py-3 rounded-lg font-tech text-sm transition-all ${
                    progress[`${activeChapter}-${activeSection}`]
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-[#9d4edd]/20 text-[#c77dff] border border-[#9d4edd]/30 hover:bg-[#9d4edd]/30'
                  }`}
                >
                  {progress[`${activeChapter}-${activeSection}`] ? '✓ 已完成' : '标记为已学习'}
                </button>

                {/* Navigation buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigateSection('prev')}
                    disabled={!canNavigatePrev()}
                    className="px-4 py-2 rounded-lg border border-[#333] text-[#808080] text-sm font-tech hover:border-[#9d4edd]/30 hover:text-[#c0c0c0] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ← 上一节
                  </button>
                  <button
                    onClick={() => navigateSection('next')}
                    disabled={!canNavigateNext()}
                    className="px-4 py-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-tech hover:bg-[#00d4ff]/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    下一节 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#333] px-4 lg:px-8 py-6 mt-auto">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#666]">
            <p className="font-tech">彭康书院学业辅导与发展中心 · 2025</p>
            <div className="hidden md:flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-[#1a1a25] border border-[#333] rounded text-[#808080]">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-[#1a1a25] border border-[#333] rounded text-[#808080]">→</kbd>
                <span className="text-[#666]">导航</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-[#1a1a25] border border-[#333] rounded text-[#808080]">F</kbd>
                <span className="text-[#666]">公式表</span>
              </span>
            </div>
            <p className="text-[#9d4edd]/50">祝考试顺利 🚀</p>
          </div>
        </footer>
      </main>

      {/* Formula Sheet Modal */}
      <FormulaSheet 
        isOpen={showFormulaSheet} 
        onClose={() => setShowFormulaSheet(false)} 
      />
    </div>
  );
}

export default App;
