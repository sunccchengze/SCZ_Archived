import { slides } from '../data/slides';

interface SpeakerPanelProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpeakerPanel({ currentSlide, isOpen, onClose }: SpeakerPanelProps) {
  const slide = slides[currentSlide];

  return (
    <div
      className={`fixed right-0 top-0 bottom-0 z-50 transition-all duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: 'min(420px, 85vw)' }}
    >
      <div className="h-full glass-panel border-l border-[#00f6ff15] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#00f6ff15]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00f6ff] animate-pulse" />
            <span className="text-[#00f6ff] text-sm font-medium">讲者稿 / 深度阅读</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* Slide info */}
          <div className="mb-4">
            <div className="text-[#a56dff] text-xs font-mono mb-1">
              Slide {currentSlide + 1} / {slides.length}
            </div>
            <h3 className="text-white text-lg font-bold mb-1">{slide?.title}</h3>
            {slide?.subtitle && (
              <p className="text-gray-400 text-sm">{slide.subtitle}</p>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#a56dff33] to-transparent mb-4" />

          {/* Speaker notes */}
          <div className="text-gray-300 text-sm leading-relaxed space-y-3">
            {slide?.speakerNotes.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Keywords section */}
          {slide?.keywords && slide.keywords.length > 0 && (
            <div className="mt-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#00f6ff22] to-transparent mb-4" />
              <h4 className="text-[#00f6ff] text-xs font-mono mb-3">📖 关键术语</h4>
              <div className="space-y-3">
                {slide.keywords.map((kw, i) => (
                  <div key={i} className="rounded-lg p-3 bg-[#00f6ff08] border border-[#00f6ff15]">
                    <div className="text-[#00f6ff] font-mono text-xs font-bold mb-1">{kw.term}</div>
                    <div className="text-gray-300 text-xs mb-1">{kw.definition}</div>
                    <div className="text-gray-500 text-xs">💡 {kw.analogy}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
