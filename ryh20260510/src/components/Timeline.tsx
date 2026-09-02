import { chapters, slides } from '../data/slides';

interface TimelineProps {
  currentSlide: number;
  onNavigate: (index: number) => void;
  isVisible: boolean;
}

export default function Timeline({ currentSlide, onNavigate, isVisible }: TimelineProps) {
  const currentChapter = slides[currentSlide]?.chapter || 1;

  // Find first slide index for each chapter
  const chapterFirstSlide = chapters.map((ch) => {
    const idx = slides.findIndex((s) => s.chapter === ch.id);
    return idx >= 0 ? idx : 0;
  });

  return (
    <div
      className={`fixed left-0 top-0 bottom-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
      style={{ width: '64px' }}
    >
      <div className="flex flex-col items-center gap-1 py-4">
        {chapters.map((ch, i) => {
          const isActive = currentChapter === ch.id;
          const isVisited = currentChapter > ch.id;

          return (
            <div key={ch.id} className="flex flex-col items-center group relative">
              {/* Connecting line */}
              {i > 0 && (
                <div
                  className="w-[2px] h-6 -mb-1 transition-colors duration-300"
                  style={{
                    background: isVisited || isActive
                      ? 'linear-gradient(to bottom, #a56dff, #00f6ff)'
                      : '#a56dff22',
                  }}
                />
              )}

              {/* Node */}
              <button
                onClick={() => onNavigate(chapterFirstSlide[i])}
                className={`relative z-10 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-10 h-10 rounded-xl bg-[#00f6ff22] border-2 border-[#00f6ff] shadow-[0_0_20px_#00f6ff44]'
                    : isVisited
                    ? 'w-8 h-8 rounded-lg bg-[#a56dff22] border border-[#a56dff66]'
                    : 'w-8 h-8 rounded-lg bg-[#050b1a] border border-[#a56dff22]'
                }`}
              >
                <span className={`text-sm ${isActive ? 'text-[#00f6ff]' : isVisited ? 'text-[#a56dff]' : 'text-[#a56dff44]'}`}>
                  {ch.icon}
                </span>
                {isActive && (
                  <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
                )}
              </button>

              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                <div className="tooltip-card whitespace-nowrap text-xs px-3 py-2">
                  <span className={isActive ? 'text-[#00f6ff]' : 'text-gray-300'}>
                    {ch.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
