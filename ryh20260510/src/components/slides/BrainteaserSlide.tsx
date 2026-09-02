import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BrainteaserSlide({ slide }: { slide: Slide }) {
  const [answer, setAnswer] = useState('');
  const [showExamples, setShowExamples] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      {/* Brain icon with glow */}
      <motion.div variants={item} className="mb-6">
        <div className="inline-block relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#a56dff22] to-[#00f6ff11] border border-[#a56dff44] flex items-center justify-center text-4xl shadow-[0_0_30px_#a56dff22]">
            🧠
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ffb547] flex items-center justify-center text-xs text-black font-bold">
            ?
          </div>
        </div>
      </motion.div>

      <motion.h2 variants={item} className="text-2xl md:text-4xl font-black text-white mb-3">
        {slide.title}
      </motion.h2>

      <motion.p variants={item} className="text-xl md:text-2xl text-gradient-cyber font-bold mb-8 max-w-2xl mx-auto leading-relaxed">
        {slide.subtitle}
      </motion.p>

      {/* Options */}
      {slide.bullets && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
          {slide.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-4 rounded-xl bg-[#ffffff04] border border-[#ffffff08] hover:border-[#a56dff44] hover:bg-[#a56dff08] transition-all cursor-default text-left"
            >
              <span className="text-gray-300 text-sm leading-relaxed">{bullet}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Answer input */}
      <motion.div variants={item} className="max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="写下你的答案（不会上传）..."
            className="w-full px-5 py-3 rounded-xl bg-[#ffffff06] border border-[#ffffff12] text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#a56dff44] transition-colors text-sm"
          />
        </div>

        <button
          onClick={() => setShowExamples(!showExamples)}
          className="mt-3 text-[#a56dff] text-xs hover:text-[#00f6ff] transition-colors cursor-pointer"
        >
          {showExamples ? '收起示例答案 ▲' : '查看示例答案 ▼'}
        </button>

        {showExamples && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 p-4 rounded-xl bg-[#a56dff08] border border-[#a56dff22] text-left"
          >
            <div className="text-xs text-[#a56dff] font-mono mb-2">💬 同学们的想法：</div>
            <div className="space-y-2 text-gray-400 text-xs">
              <p>「我想用它造一艘能到比邻星的飞船！」</p>
              <p>「给火星装一个磁场发生器，让它有大气层。」</p>
              <p>「建一台能模拟整个宇宙的超级计算机。」</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
