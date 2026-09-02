import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const chainColors = ['#00f6ff', '#a56dff', '#ffb547', '#00ff88'];

export default function IconsSlide({ slide }: { slide: Slide }) {
  const isChain = slide.id === 'great-power';

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <motion.div variants={item} className="mb-4">
        <span className="text-[#a56dff] text-xs font-mono tracking-wider">
          {slide.chapterTitle}
        </span>
      </motion.div>

      <motion.h2 variants={item} className="text-3xl md:text-4xl font-black text-white mb-8 tracking-wide">
        {slide.title}
      </motion.h2>

      {slide.bullets && (
        <div className={`space-y-4 max-w-2xl mx-auto ${isChain ? 'text-center' : 'text-left'}`}>
          {slide.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                isChain
                  ? 'justify-center bg-[#ffffff04] border border-[#ffffff08]'
                  : 'bg-[#ffffff04] border border-[#ffffff08] card-hover'
              }`}
            >
              {isChain ? (
                <div className="text-center">
                  <span className="text-lg leading-relaxed" style={{ color: chainColors[i % chainColors.length] }}>
                    {bullet}
                  </span>
                  {i < slide.bullets!.length - 1 && (
                    <div className="text-gray-600 mt-2 text-xl">↓</div>
                  )}
                </div>
              ) : (
                <span className="text-gray-200 text-base leading-relaxed">{bullet}</span>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
