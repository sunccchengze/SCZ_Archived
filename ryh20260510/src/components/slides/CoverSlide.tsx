import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function CoverSlide({ slide }: { slide: Slide }) {
  return (
    <div className="w-full max-w-5xl mx-auto text-center relative">
      {/* Sun visual */}
      <motion.div variants={item} className="relative mx-auto mb-8" style={{ width: 200, height: 200 }}>
        {/* Sun core */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#ffb547] via-[#ff8c00] to-[#ff4500] shadow-[0_0_80px_#ffb54766,0_0_160px_#ff8c0033]" />
        {/* Dyson ring 1 */}
        <div
          className="absolute inset-0 rounded-full border-2 border-[#00f6ff33] orbit-ring"
          style={{ animationDuration: '12s' }}
        />
        {/* Dyson ring 2 */}
        <div
          className="absolute inset-[-12px] rounded-full border border-[#a56dff22]"
          style={{ animation: 'orbit-ring 18s linear infinite reverse', transform: 'rotateX(75deg) rotateY(30deg)' }}
        />
        {/* Dyson ring 3 */}
        <div
          className="absolute inset-[-24px] rounded-full border border-[#00f6ff15]"
          style={{ animation: 'orbit-ring 25s linear infinite', transform: 'rotateX(60deg) rotateY(-15deg)' }}
        />
        {/* Glow particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#00f6ff]"
            style={{
              top: `${50 + 48 * Math.sin((i * Math.PI * 2) / 8)}%`,
              left: `${50 + 48 * Math.cos((i * Math.PI * 2) / 8)}%`,
              opacity: 0.6,
              animation: `twinkle ${2 + i * 0.3}s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item}
        className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-wider"
        style={{
          background: 'linear-gradient(135deg, #00f6ff, #a56dff, #ffb547)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Orbitron', 'Noto Sans SC', sans-serif",
        }}
      >
        {slide.title}
      </motion.h1>

      <motion.p
        variants={item}
        className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide"
      >
        {slide.subtitle}
      </motion.p>

      <motion.div
        variants={item}
        className="flex flex-wrap justify-center gap-4 text-xs font-mono text-gray-500"
      >
        <span className="px-3 py-1 rounded-full border border-[#00f6ff22] text-[#00f6ff66]">Dyson Sphere</span>
        <span className="px-3 py-1 rounded-full border border-[#a56dff22] text-[#a56dff66]">Kardashev Scale</span>
        <span className="px-3 py-1 rounded-full border border-[#ffb54722] text-[#ffb54766]">Energy & Civilizations</span>
      </motion.div>

      <motion.p
        variants={item}
        className="mt-8 text-gray-500 text-sm"
      >
        给初二天文爱好者的一场宇宙级脑洞
      </motion.p>
    </div>
  );
}
