import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function QuoteSlide({ slide }: { slide: Slide; slideIndex: number }) {
  const isFermi = slide.id === 'fermi-paradox';
  const isMirror = slide.id === 'mirror';

  return (
    <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
      {/* Decorative elements */}
      <motion.div variants={item} className="mb-8 relative">
        {isFermi && (
          <div className="w-64 h-64 relative mx-auto">
            {/* Galaxy spiral */}
            <div className="absolute inset-0 rounded-full opacity-30" style={{
              background: 'conic-gradient(from 0deg, #a56dff11, #00f6ff11, #ffb54711, transparent, #a56dff11)',
              animation: 'slow-spin 30s linear infinite',
            }} />
            <div className="absolute inset-8 rounded-full opacity-20" style={{
              background: 'conic-gradient(from 180deg, #a56dff22, transparent, #00f6ff22, transparent)',
              animation: 'slow-spin 20s linear infinite reverse',
            }} />
            {/* Stars in galaxy */}
            {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 rounded-full bg-white" style={{
                top: `${50 + 40 * Math.sin(i * 0.7) * Math.cos(i * 0.3)}%`,
                left: `${50 + 40 * Math.cos(i * 0.5) * Math.sin(i * 0.9)}%`,
                opacity: 0.2 + Math.random() * 0.5,
                animation: `twinkle ${2 + i * 0.1}s ease-in-out ${i * 0.3}s infinite`,
              }} />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl">🌌</span>
            </div>
          </div>
        )}

        {isMirror && (
          <div className="w-48 h-48 relative mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a56dff11] to-[#00f6ff11] border border-[#ffffff08] animate-slow-spin" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00f6ff08] to-[#a56dff08]" style={{ animation: 'slow-spin 40s linear infinite reverse' }} />
            <div className="absolute inset-0 flex items-center justify-center text-4xl">🪞</div>
          </div>
        )}
      </motion.div>

      <motion.div variants={item} className="mb-4">
        <span className="text-[#a56dff] text-xs font-mono tracking-wider">
          {slide.chapterTitle}
        </span>
      </motion.div>

      {slide.title && (
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-black text-white mb-6">
          {slide.title}
        </motion.h2>
      )}

      <motion.div variants={item}>
        <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed max-w-xl mx-auto italic">
          「{slide.subtitle}」
        </p>
      </motion.div>

      {slide.bullets && (
        <div className="mt-8 space-y-2">
          {slide.bullets.map((bullet, i) => (
            <motion.p key={i} variants={item} className="text-gray-400 text-sm">
              {bullet}
            </motion.p>
          ))}
        </div>
      )}
    </div>
  );
}
