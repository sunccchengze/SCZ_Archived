import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const timelineItems = [
  { era: '原始', icon: '🔥', label: '火堆', year: '~100万年前' },
  { era: '农业', icon: '🐴', label: '畜力', year: '~1万年前' },
  { era: '工业', icon: '⚙️', label: '蒸汽机', year: '1760s' },
  { era: '电气', icon: '💡', label: '电灯', year: '1879' },
  { era: '航天', icon: '🚀', label: '火箭', year: '1950s' },
  { era: '信息', icon: '💻', label: '计算机', year: '1970s' },
  { era: '新能源', icon: '☀️', label: '太阳能', year: '2020s' },
  { era: '未来?', icon: '🌟', label: '恒星能', year: '????' },
];

export default function TimelineSlide({ slide }: { slide: Slide }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div variants={item} className="text-center mb-4">
        <span className="text-[#a56dff] text-xs font-mono tracking-wider">
          {slide.chapterTitle}
        </span>
      </motion.div>

      <motion.h2 variants={item} className="text-3xl md:text-5xl font-black text-white mb-3 text-center tracking-wide">
        {slide.title}
      </motion.h2>

      {slide.subtitle && (
        <motion.p variants={item} className="text-gray-400 text-lg mb-8 text-center">
          {slide.subtitle}
        </motion.p>
      )}

      {/* Timeline */}
      <motion.div variants={item} className="relative mb-8">
        {/* Line */}
        <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a56dff33] to-transparent" />
        
        <div className="flex justify-between items-start overflow-x-auto pb-4 gap-1">
          {timelineItems.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex flex-col items-center min-w-[60px] relative"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-2 transition-all ${
                i === timelineItems.length - 1
                  ? 'bg-[#ffb54722] border-2 border-[#ffb547] shadow-[0_0_12px_#ffb54744] animate-pulse'
                  : 'bg-[#ffffff06] border border-[#ffffff12]'
              }`}>
                {t.icon}
              </div>
              <div className={`text-xs font-medium ${i === timelineItems.length - 1 ? 'text-[#ffb547]' : 'text-gray-300'}`}>
                {t.label}
              </div>
              <div className="text-[10px] text-gray-600 mt-1">{t.year}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bullets */}
      {slide.bullets && (
        <div className="space-y-3 max-w-2xl mx-auto text-left">
          {slide.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#ffffff04] border border-[#ffffff08]"
            >
              <span className="text-[#00f6ff] mt-0.5 text-sm">▸</span>
              <span className="text-gray-300 text-base leading-relaxed">{bullet}</span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
