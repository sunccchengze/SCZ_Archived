import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Special visual for slide 3 (human-energy-level)
function EnergyComparison() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-3xl mx-auto my-8">
      {/* Human bar */}
      <div className="flex-1 w-full">
        <div className="text-center mb-2 text-gray-400 text-sm">人类文明</div>
        <div className="relative h-16 rounded-xl bg-[#ffffff08] border border-[#00f6ff22] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '8%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-[#00f6ff33] to-[#00f6ff66] rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[#00f6ff] text-lg font-bold">10¹³ W</span>
          </div>
        </div>
      </div>
      <div className="text-2xl text-gray-600">vs</div>
      {/* Sun bar */}
      <div className="flex-1 w-full">
        <div className="text-center mb-2 text-[#ffb547] text-sm">太阳</div>
        <div className="relative h-16 rounded-xl bg-[#ffffff08] border border-[#ffb54733] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.8 }}
            className="h-full bg-gradient-to-r from-[#ffb54733] to-[#ff4500aa] rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[#ffb547] text-lg font-bold">3.8 × 10²⁶ W</span>
          </div>
        </div>
        <div className="text-center mt-1 text-gray-500 text-xs">
          差距：约 10¹³ 倍 ⚡
        </div>
      </div>
    </div>
  );
}

export default function ComparisonSlide({ slide }: { slide: Slide; slideIndex: number }) {
  const showEnergyComparison = slide.id === 'human-energy-level';
  const showLuminosity = slide.id === 'luminosity';
  const showArea = slide.id === 'dyson-area';

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div variants={item} className="mb-4">
        <span className="text-[#a56dff] text-xs font-mono tracking-wider">
          {slide.chapterTitle}
        </span>
      </motion.div>

      <motion.h2 variants={item} className="text-3xl md:text-5xl font-black text-white mb-3 tracking-wide">
        {slide.title}
      </motion.h2>

      {slide.subtitle && (
        <motion.p variants={item} className="text-gray-400 text-lg mb-6">
          {slide.subtitle}
        </motion.p>
      )}

      {/* Custom visuals */}
      {showEnergyComparison && <motion.div variants={item}><EnergyComparison /></motion.div>}

      {showLuminosity && (
        <motion.div variants={item} className="my-8">
          <div className="inline-block relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[#ffb547] via-[#ff8c00] to-[#ff4500] shadow-[0_0_60px_#ffb54766,0_0_120px_#ff8c0033] flex items-center justify-center">
              <span className="text-2xl font-mono font-bold text-white drop-shadow-lg">☀️</span>
            </div>
            <div className="mt-4 font-mono text-3xl text-[#ffb547] font-bold" style={{ textShadow: '0 0 20px #ffb54744' }}>
              3.8 × 10²⁶ W
            </div>
            <div className="mt-2 text-gray-400 text-sm">= 3.8×10²⁴ 个 💡 同时发光</div>
          </div>
        </motion.div>
      )}

      {showArea && slide.formula && (
        <motion.div variants={item} className="my-6">
          <div className="inline-block px-8 py-4 rounded-xl bg-[#ffb54710] border border-[#ffb54733]">
            <div className="font-mono text-3xl text-[#ffb547] font-bold">{slide.formula}</div>
            {slide.formulaExplain && (
              <div className="mt-2 text-gray-400 text-sm">💡 {slide.formulaExplain}</div>
            )}
          </div>
        </motion.div>
      )}

      {/* Bullets */}
      {slide.bullets && (
        <div className="space-y-3 max-w-2xl mx-auto text-left mt-6">
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
