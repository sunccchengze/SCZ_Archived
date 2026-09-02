import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Eye, Menu, X } from 'lucide-react';
import StarField from './components/StarField';
import Timeline from './components/Timeline';
import SpeakerPanel from './components/SpeakerPanel';
import SlideRenderer from './components/SlideRenderer';
import { slides, chapters } from './data/slides';

type Mode = 'student' | 'speaker';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mode, setMode] = useState<Mode>('student');
  const [speakerOpen, setSpeakerOpen] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalSlides = slides.length;
  const slide = slides[currentSlide];
  const currentChapter = slide?.chapter || 1;

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(totalSlides - 1);
          break;
        case 'Escape':
          setSpeakerOpen(false);
          setMenuOpen(false);
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, goTo, totalSlides]);

  // Auto-open speaker panel in speaker mode
  useEffect(() => {
    if (mode === 'speaker') {
      setSpeakerOpen(true);
    }
  }, [mode]);

  // Progress calculation
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  // Get chapter info
  const chapterInfo = chapters.find(c => c.id === currentChapter);

  return (
    <div className="w-full h-full overflow-hidden relative bg-cosmos-black">
      {/* Star field background */}
      <StarField />

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Progress bar */}
        <div className="h-1 bg-[#ffffff08]">
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #a56dff, #00f6ff)',
              boxShadow: '0 0 10px #00f6ff44',
            }}
          />
        </div>

        {/* Top controls */}
        <div className="flex items-center justify-between px-4 py-2 glass-panel border-b border-[#ffffff08]">
          {/* Left: menu + chapter info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTimelineVisible(!timelineVisible)}
              className="w-8 h-8 rounded-lg bg-[#ffffff06] border border-[#ffffff08] flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer md:hidden"
            >
              {timelineVisible ? <X size={14} /> : <Menu size={14} />}
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-gray-500">{chapterInfo?.icon}</span>
              <span className="text-gray-400 font-mono text-xs">{chapterInfo?.title}</span>
            </div>
          </div>

          {/* Center: slide counter */}
          <div className="text-gray-500 text-xs font-mono">
            {currentSlide + 1} / {totalSlides}
          </div>

          {/* Right: mode switch + speaker notes */}
          <div className="flex items-center gap-2">
            {/* Mode switch */}
            <button
              onClick={() => setMode(mode === 'student' ? 'speaker' : 'student')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                mode === 'speaker'
                  ? 'bg-[#a56dff22] text-[#a56dff] border border-[#a56dff44]'
                  : 'bg-[#00f6ff11] text-[#00f6ff88] border border-[#00f6ff22]'
              }`}
            >
              {mode === 'speaker' ? <BookOpen size={12} /> : <Eye size={12} />}
              <span className="hidden sm:inline">{mode === 'speaker' ? '讲者模式' : '学生模式'}</span>
            </button>

            {/* Speaker notes toggle */}
            <button
              onClick={() => setSpeakerOpen(!speakerOpen)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                speakerOpen
                  ? 'bg-[#00f6ff22] text-[#00f6ff] border border-[#00f6ff44]'
                  : 'bg-[#ffffff06] text-gray-500 border border-[#ffffff08] hover:text-white'
              }`}
            >
              <BookOpen size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Timeline navigation (left side) */}
      <div className="hidden md:block">
        <Timeline
          currentSlide={currentSlide}
          onNavigate={goTo}
          isVisible={timelineVisible}
        />
      </div>

      {/* Mobile timeline overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute left-0 top-0 bottom-0 w-64 glass-panel p-4 pt-16">
            <h3 className="text-[#00f6ff] text-sm font-bold mb-4">章节导航</h3>
            {chapters.map((ch) => {
              const firstSlide = slides.findIndex(s => s.chapter === ch.id);
              return (
                <button
                  key={ch.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(firstSlide);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-colors cursor-pointer ${
                    currentChapter === ch.id
                      ? 'bg-[#00f6ff11] text-[#00f6ff] border border-[#00f6ff22]'
                      : 'text-gray-400 hover:text-white hover:bg-[#ffffff06]'
                  }`}
                >
                  {ch.icon} {ch.title}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main slide area */}
      <div
        className={`absolute top-[52px] bottom-0 transition-all duration-500 flex items-center ${
          timelineVisible ? 'md:left-[64px]' : 'left-0'
        } ${speakerOpen ? 'right-[min(420px,85vw)]' : 'right-0'}`}
      >
        <AnimatePresence mode="wait">
          <SlideRenderer
            key={currentSlide}
            slide={slide}
            slideIndex={currentSlide}
            isActive={true}
          />
        </AnimatePresence>
      </div>

      {/* Speaker panel */}
      <SpeakerPanel
        currentSlide={currentSlide}
        isOpen={speakerOpen}
        onClose={() => setSpeakerOpen(false)}
      />

      {/* Navigation buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {/* Prev */}
        <button
          onClick={prev}
          disabled={currentSlide === 0}
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
            currentSlide === 0
              ? 'bg-[#ffffff06] text-gray-700 border border-[#ffffff08] cursor-not-allowed'
              : 'bg-[#ffffff08] text-gray-300 border border-[#ffffff12] hover:bg-[#00f6ff11] hover:text-[#00f6ff] hover:border-[#00f6ff33]'
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next */}
        <button
          onClick={next}
          disabled={currentSlide === totalSlides - 1}
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
            currentSlide === totalSlides - 1
              ? 'bg-[#ffffff06] text-gray-700 border border-[#ffffff08] cursor-not-allowed'
              : 'bg-[#00f6ff15] text-[#00f6ff] border border-[#00f6ff33] hover:bg-[#00f6ff22] hover:shadow-[0_0_16px_#00f6ff22]'
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom left: keyboard hint */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 text-gray-600 text-xs">
        <kbd className="px-1.5 py-0.5 rounded border border-[#ffffff12] bg-[#ffffff06] text-gray-500 font-mono text-[10px]">←</kbd>
        <kbd className="px-1.5 py-0.5 rounded border border-[#ffffff12] bg-[#ffffff06] text-gray-500 font-mono text-[10px]">→</kbd>
        <span>翻页</span>
      </div>

      {/* Chapter transition overlay */}
      {currentSlide > 0 && slides[currentSlide - 1]?.chapter !== slide?.chapter && (
        <div className="fixed inset-0 z-30 pointer-events-none flex items-center justify-center">
          <div
            className="text-6xl opacity-0"
            style={{
              animation: 'count-up 0.8s ease-out forwards',
            }}
          >
            {chapterInfo?.icon}
          </div>
        </div>
      )}
    </div>
  );
}
