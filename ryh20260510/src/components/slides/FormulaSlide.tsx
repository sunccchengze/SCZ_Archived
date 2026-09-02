import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FormulaSlide({ slide }: { slide: Slide }) {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      {/* Chapter badge */}
      <motion.div variants={item} className="mb-4">
        <span className="text-[#a56dff] text-xs font-mono tracking-wider uppercase">
          {slide.chapterTitle}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2 variants={item} className="text-3xl md:text-5xl font-black text-white mb-3 tracking-wide">
        {slide.title}
      </motion.h2>

      {slide.subtitle && (
        <motion.p variants={item} className="text-gray-400 text-lg mb-10">
          {slide.subtitle}
        </motion.p>
      )}

      {/* Formula */}
      {slide.formula && (
        <motion.div
          variants={item}
          className="inline-block mb-8 relative"
        >
          <div className="px-10 py-6 rounded-2xl bg-gradient-to-br from-[#ffb54710] to-[#ff6b3508] border border-[#ffb54733] relative overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffb54708] to-transparent" />
            <div
              className="text-4xl md:text-6xl font-bold font-mono text-[#ffb547] relative z-10"
              style={{ fontFamily: "'JetBrains Mono', monospace", textShadow: '0 0 30px #ffb54744' }}
            >
              {slide.formula}
            </div>
          </div>
          {/* Formula explanation */}
          {slide.formulaExplain && (
            <div className="mt-4 text-gray-400 text-sm flex items-center justify-center gap-2">
              <span className="text-[#ffb547]">💡</span>
              {slide.formulaExplain}
            </div>
          )}
        </motion.div>
      )}

      {/* Bullets */}
      {slide.bullets && (
        <div className="space-y-3 max-w-2xl mx-auto text-left">
          {slide.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#ffffff04] border border-[#ffffff08] hover:border-[#00f6ff22] transition-colors"
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
