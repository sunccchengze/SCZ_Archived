import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "./slides/slidesData";
import { SlideContent } from "./slides/SlideContents";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

// Slide transition variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.92,
    rotateY: direction > 0 ? 8 : -8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.92,
    rotateY: direction < 0 ? 8 : -8,
  }),
};

const teleprompterVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [teleprompterFontSize, setTeleprompterFontSize] = useState(15);
  const teleprompterRef = useRef<HTMLDivElement>(null);

  // Use refs to avoid stale closure in keyboard handler
  const currentSlideRef = useRef(currentSlide);
  currentSlideRef.current = currentSlide;

  const totalSlides = slides.length;
  const slide = slides[currentSlide];

  const goToSlide = (index: number) => {
    if (index < 0 || index >= totalSlides) return;
    setDirection(index > currentSlideRef.current ? 1 : -1);
    setCurrentSlide(index);
    setShowNav(false);
  };

  const nextSlide = () => {
    const cur = currentSlideRef.current;
    if (cur < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(cur + 1);
    }
  };

  const prevSlide = () => {
    const cur = currentSlideRef.current;
    if (cur > 0) {
      setDirection(-1);
      setCurrentSlide(cur - 1);
    }
  };

  // Reset teleprompter scroll on slide change
  useEffect(() => {
    if (teleprompterRef.current) {
      teleprompterRef.current.scrollTop = 0;
    }
  }, [currentSlide]);

  // Keyboard navigation - use stable refs, no deps needed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if user is interacting with an input
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        const cur = currentSlideRef.current;
        if (cur < totalSlides - 1) {
          setDirection(1);
          setCurrentSlide(cur + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        const cur = currentSlideRef.current;
        if (cur > 0) {
          setDirection(-1);
          setCurrentSlide(cur - 1);
        }
      } else if (e.key === "Escape") {
        setShowNav(false);
      } else if (e.key === "Home") {
        e.preventDefault();
        setDirection(-1);
        setCurrentSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setDirection(1);
        setCurrentSlide(totalSlides - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  // Group slides by section for nav
  const sections = slides.reduce(
    (acc, s, i) => {
      const last = acc[acc.length - 1];
      if (last && last.section === s.section) {
        last.slides.push({ index: i, title: s.title });
      } else {
        acc.push({ section: s.section, slides: [{ index: i, title: s.title }] });
      }
      return acc;
    },
    [] as { section: string; slides: { index: number; title: string }[] }[]
  );

  // Progress
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="h-screen w-screen bg-slate-950 flex flex-col overflow-hidden select-none" tabIndex={0}>
      {/* Top Bar */}
      <div className="h-11 bg-slate-900/90 backdrop-blur-xl border-b border-white/5 flex items-center px-4 justify-between flex-shrink-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowNav(!showNav)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
          >
            {showNav ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-sm">⚛️</span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              {slide.section}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {slide.duration && (
            <span className="text-[10px] text-amber-400/50 font-mono bg-amber-400/5 px-2 py-0.5 rounded-full">{slide.duration}</span>
          )}
          <span className="text-xs text-slate-500 font-mono tabular-nums">
            {String(currentSlide + 1).padStart(2, "0")} / {totalSlides}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] bg-slate-800/50 flex-shrink-0 relative">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 shadow-sm shadow-amber-400/30"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Navigation overlay */}
        <AnimatePresence>
          {showNav && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowNav(false)}
                className="absolute inset-0 bg-black/50 z-30 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, x: -320 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -320 }}
                transition={{ type: "spring", damping: 28, stiffness: 200 }}
                className="absolute inset-y-0 left-0 w-80 bg-slate-900/98 backdrop-blur-xl z-40 border-r border-white/10 overflow-y-auto"
              >
                <div className="p-5 space-y-4">
                  <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <span>📋</span> Lecture Outline
                  </h3>
                  {sections.map((sec, si) => (
                    <div key={si}>
                      <p className="text-[10px] text-amber-400/70 uppercase tracking-[0.15em] mb-2 font-bold">
                        {sec.section}
                      </p>
                      {sec.slides.map((s) => (
                        <button
                          key={s.index}
                          onClick={() => goToSlide(s.index)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-xs mb-1 transition-all flex items-center gap-2 ${
                            s.index === currentSlide
                              ? "bg-amber-500/20 text-amber-300 border border-amber-400/20 shadow-sm shadow-amber-400/5"
                              : "text-slate-400 hover:bg-white/5 hover:text-slate-300"
                          }`}
                        >
                          <span className="text-slate-600 font-mono text-[10px] w-5">{s.index + 1}</span>
                          <span className="truncate">{s.title}</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* LEFT: Content (70%) */}
        <div
          className="w-[70%] h-full relative overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse at 20% 50%, rgba(120,80,255,0.04) 0%, transparent 70%)",
                "radial-gradient(ellipse at 80% 30%, rgba(251,191,36,0.04) 0%, transparent 70%)",
                "radial-gradient(ellipse at 50% 80%, rgba(120,80,255,0.04) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 28 },
                opacity: { duration: 0.35 },
                scale: { duration: 0.35 },
                rotateY: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              <SlideContent slideId={slide.id} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
                currentSlide === 0
                  ? "bg-white/5 text-slate-700 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20 hover:scale-110 active:scale-90 border border-white/5"
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Slide dots */}
            <div className="flex gap-[3px] px-2 py-1.5 bg-black/30 backdrop-blur-md rounded-full border border-white/5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "w-5 h-1.5 bg-amber-400 shadow-sm shadow-amber-400/30"
                      : "w-1.5 h-1.5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
                currentSlide === totalSlides - 1
                  ? "bg-white/5 text-slate-700 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20 hover:scale-110 active:scale-90 border border-white/5"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-px flex-shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />
        </div>

        {/* RIGHT: Teleprompter (30%) */}
        <div className="w-[30%] h-full bg-slate-950 flex flex-col">
          {/* Teleprompter header */}
          <div className="h-10 bg-slate-900/60 border-b border-white/5 flex items-center justify-between px-4 flex-shrink-0">
            <span className="text-[10px] uppercase tracking-[0.15em] text-amber-400/60 font-bold flex items-center gap-1.5">
              <span className="text-sm">📖</span> Script
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setTeleprompterFontSize(Math.max(11, teleprompterFontSize - 1))}
                className="text-slate-500 hover:text-white text-[10px] px-1.5 py-0.5 rounded hover:bg-white/10 transition font-bold"
              >
                A−
              </button>
              <span className="text-[9px] text-slate-600 font-mono w-4 text-center">{teleprompterFontSize}</span>
              <button
                onClick={() => setTeleprompterFontSize(Math.min(24, teleprompterFontSize + 1))}
                className="text-slate-500 hover:text-white text-[10px] px-1.5 py-0.5 rounded hover:bg-white/10 transition font-bold"
              >
                A+
              </button>
            </div>
          </div>

          {/* Teleprompter content */}
          <div
            ref={teleprompterRef}
            className="flex-1 overflow-y-auto px-5 py-5 scroll-smooth select-text"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#334155 transparent",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={teleprompterVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
              >
                {/* Section tag */}
                <div className="mb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-amber-400/40 font-bold">
                    {slide.section}
                  </span>
                  <h3
                    className="text-base font-bold text-white mt-1 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {slide.title}
                  </h3>
                  {slide.subtitle && (
                    <p className="text-[11px] text-slate-500 mt-0.5">{slide.subtitle}</p>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-amber-400/20 to-transparent mb-4" />

                {/* Script content */}
                <div
                  className="leading-relaxed text-slate-300 whitespace-pre-line"
                  style={{
                    fontSize: `${teleprompterFontSize}px`,
                    lineHeight: 1.85,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {slide.teleprompter.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {highlightText(paragraph)}
                    </p>
                  ))}
                </div>

                {/* Bottom padding for scrolling */}
                <div className="h-40" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Teleprompter footer */}
          <div className="h-7 bg-slate-900/40 border-t border-white/5 flex items-center justify-center flex-shrink-0">
            <p className="text-[9px] text-slate-600 flex items-center gap-2">
              <kbd className="bg-white/5 px-1 rounded text-[8px]">←</kbd>
              <kbd className="bg-white/5 px-1 rounded text-[8px]">→</kbd>
              navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Highlight important words in teleprompter
function highlightText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="text-amber-400 font-bold">
          {part.slice(2, -2)}
        </span>
      );
    }
    const highlighted = part.replace(
      /(E = hf|E = mc²|Planck's constant|quantum|quanta|photon|photons|blackbody|Ultraviolet Catastrophe)/gi,
      "⟪$1⟫"
    );
    const subParts = highlighted.split(/(⟪[^⟫]+⟫)/g);
    return subParts.map((sub, j) => {
      if (sub.startsWith("⟪") && sub.endsWith("⟫")) {
        return (
          <span key={`${i}-${j}`} className="text-amber-300 font-semibold bg-amber-400/5 px-0.5 rounded">
            {sub.slice(1, -1)}
          </span>
        );
      }
      if (sub.includes('"')) {
        const quoteParts = sub.split(/(\"[^\"]+\")/g);
        return quoteParts.map((qp, k) => {
          if (qp.startsWith('"') && qp.endsWith('"')) {
            return (
              <span key={`${i}-${j}-${k}`} className="text-blue-300/90 italic">
                {qp}
              </span>
            );
          }
          return qp;
        });
      }
      return sub;
    });
  });
}

export default App;
