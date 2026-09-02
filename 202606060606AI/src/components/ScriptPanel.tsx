import { motion } from 'framer-motion';

interface Props {
  section: string;
  sectionColor: string;
  title: string;
  scriptText: string;
  slideIndex: number;
  totalSlides: number;
}

export default function ScriptPanel({ section, sectionColor, title, scriptText, slideIndex, totalSlides }: Props) {
  const paragraphs = scriptText.split('\n').filter(p => p.trim());

  return (
    <div className="h-full flex flex-col bg-xuan/95 script-panel relative">
      {/* Decorative left border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        style={{ background: `linear-gradient(180deg, transparent, ${sectionColor}, transparent)` }}
      />

      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-liujin/10 shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: sectionColor }}
          />
          <span className="text-[10px] text-cang uppercase tracking-widest">{section}</span>
          <span className="text-[10px] text-cang/50 ml-auto">
            {slideIndex + 1} / {totalSlides}
          </span>
        </div>
        <motion.h3
          className="text-lg font-bold leading-tight"
          style={{ color: sectionColor }}
          key={title}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
      </div>

      {/* Script content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 custom-scrollbar script-panel-scrollable">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="text-sm text-gao/90 leading-relaxed mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              style={{ fontFamily: 'Georgia, "Noto Serif", serif' }}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Bottom ornament */}
      <div className="px-5 py-3 border-t border-liujin/8 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === slideIndex ? '16px' : '4px',
                  backgroundColor: i === slideIndex ? sectionColor : '#6B7E8A33',
                }}
              />
            ))}
          </div>
          <div className="text-[9px] text-cang/40 tracking-wider">
            口述稿
          </div>
        </div>
      </div>
    </div>
  );
}
