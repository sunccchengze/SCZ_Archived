import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import ScriptPanel from './components/ScriptPanel';
import SlideVisual from './components/SlideVisual';
import { slides } from './slideData';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index < 0 || index >= slides.length || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, currentSlide]);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextSlide, prevSlide]);

  // Wheel navigation
  useEffect(() => {
    let lastWheel = 0;
    const handleWheel = (e: WheelEvent) => {
      // Check if the event target is inside the script panel (right side)
      const target = e.target as HTMLElement;
      if (target.closest('.script-panel-scrollable')) return;

      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel < 1000) return;
      lastWheel = now;

      if (e.deltaY > 0) nextSlide();
      else if (e.deltaY < 0) prevSlide();
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [nextSlide, prevSlide]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.script-panel-scrollable')) return;

    const diff = touchStartRef.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const slide = slides[currentSlide];

  // Section nav items
  const sectionGroups = [
    { label: 'Opening', start: 0, end: 2, color: '#C9A96E', icon: '🎬' },
    { label: 'AI Coding', start: 3, end: 8, color: '#1E90A6', icon: '🤖' },
    { label: 'AI Friends', start: 9, end: 12, color: '#C9A96E', icon: '💬' },
    { label: 'Quantum', start: 13, end: 19, color: '#1E90A6', icon: '⚛️' },
    { label: 'Closing', start: 20, end: 20, color: '#E23C3C', icon: '🎤' },
  ];

  const currentGroup = sectionGroups.find(g => currentSlide >= g.start && currentSlide <= g.end);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-xuan overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ParticleBackground />

      {/* Main layout: 70% visual + 30% script */}
      <div className="relative z-10 flex w-full h-full">
        {/* Left: Visual area (70%) */}
        <div className="w-[70%] h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <SlideVisual slide={slide} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
            <motion.button
              className="w-10 h-10 rounded-full border border-liujin/30 flex items-center justify-center text-liujin/60 hover:text-liujin hover:border-liujin/60 transition-all cursor-pointer disabled:opacity-20"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ▲
            </motion.button>

            <div className="text-xs text-cang">
              <span className="text-liujin font-bold">{currentSlide + 1}</span>
              <span> / {slides.length}</span>
            </div>

            <motion.button
              className="w-10 h-10 rounded-full border border-liujin/30 flex items-center justify-center text-liujin/60 hover:text-liujin hover:border-liujin/60 transition-all cursor-pointer disabled:opacity-20"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ▼
            </motion.button>
          </div>

          {/* Section indicator (top left) */}
          {currentGroup && (
            <motion.div
              className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-dai/60 backdrop-blur-sm border border-liujin/10 rounded-full px-3 py-1.5"
              key={currentGroup.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm">{currentGroup.icon}</span>
              <span className="text-xs font-bold" style={{ color: currentGroup.color }}>
                {currentGroup.label}
              </span>
            </motion.div>
          )}

          {/* Mini navigation toggle */}
          <motion.button
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-liujin/20 flex items-center justify-center text-cang hover:text-liujin transition-colors cursor-pointer text-xs"
            onClick={() => setShowNav(!showNav)}
            whileHover={{ scale: 1.1 }}
          >
            ☰
          </motion.button>

          {/* Mini nav drawer */}
          <AnimatePresence>
            {showNav && (
              <motion.div
                className="absolute top-14 right-4 z-30 bg-dai/95 backdrop-blur-md border border-liujin/20 rounded-xl p-3 w-56"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {sectionGroups.map((group, gi) => (
                  <div key={gi} className="mb-2">
                    <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: group.color }}>
                      {group.icon} {group.label}
                    </div>
                    <div className="flex flex-wrap gap-1 ml-4">
                      {Array.from({ length: group.end - group.start + 1 }, (_, i) => {
                        const idx = group.start + i;
                        return (
                          <button
                            key={idx}
                            className="w-6 h-6 rounded text-[10px] cursor-pointer transition-all"
                            style={{
                              background: idx === currentSlide ? group.color : 'transparent',
                              color: idx === currentSlide ? '#0C0C14' : '#6B7E8A',
                              border: `1px solid ${idx === currentSlide ? group.color : '#6B7E8A33'}`,
                            }}
                            onClick={() => { goToSlide(idx); setShowNav(false); }}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Script panel (30%) */}
        <div className="w-[30%] h-full border-l border-liujin/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ScriptPanel
                section={slide.section}
                sectionColor={slide.sectionColor}
                title={slide.title}
                scriptText={slide.scriptText}
                slideIndex={currentSlide}
                totalSlides={slides.length}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Keyboard hint (fades out) */}
      <motion.div
        className="fixed bottom-3 right-6 z-30 text-[10px] text-cang/30"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5, duration: 2 }}
      >
        ↑↓ or scroll to navigate
      </motion.div>
    </div>
  );
}
