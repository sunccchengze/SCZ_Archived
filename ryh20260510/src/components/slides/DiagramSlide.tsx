import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Contextual visual based on slide id
function SlideVisual({ slideId }: { slideId: string }) {
  switch (slideId) {
    case 'what-is-dyson':
      return (
        <div className="relative w-48 h-48 mx-auto my-6">
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#ffb547] to-[#ff4500] shadow-[0_0_40px_#ffb54744]" />
          <div className="absolute inset-4 rounded-full border border-dashed border-[#00f6ff44] animate-slow-spin" />
          <div className="absolute inset-0 rounded-full border border-dotted border-[#a56dff33]" style={{ animation: 'slow-spin 40s linear infinite reverse' }} />
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 rounded-full bg-[#00f6ff66]" style={{
              top: `${50 + 46 * Math.sin(i * Math.PI / 6)}%`,
              left: `${50 + 46 * Math.cos(i * Math.PI / 6)}%`,
              animation: `twinkle ${1.5 + i * 0.2}s ease-in-out ${i * 0.3}s infinite`,
            }} />
          ))}
        </div>
      );

    case 'nuclear-fusion':
      return (
        <div className="relative w-56 h-56 mx-auto my-6">
          {/* Sun cross-section */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff8c0022] to-[#ff450011] border border-[#ff8c0033]">
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#ff8c0033] to-[#ff450022] border border-[#ff8c0022]">
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#ffb54744] to-[#ff8c0033] border border-[#ffb54733]">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#ffb547] to-[#ff4500] shadow-[0_0_30px_#ffb54766] flex items-center justify-center">
                  <span className="text-xs font-mono text-white font-bold">核心</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs text-gray-500">光球层</div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">对流层</div>
          <div className="absolute top-14 left-1/2 -translate-x-1/2 text-xs text-gray-500">辐射层</div>
        </div>
      );

    case 'wasted-sunlight':
      return (
        <div className="relative w-64 h-48 mx-auto my-6">
          {/* Sun */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#ffb547] to-[#ff4500] shadow-[0_0_40px_#ffb54744]" />
          {/* Rays going out */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            return (
              <div key={i} className="absolute" style={{
                left: `${18 + 10 * Math.cos(angle)}%`,
                top: `${50 + 40 * Math.sin(angle)}%`,
                width: '60%',
                height: '1px',
                background: i === 2 ? '#00f6ff44' : '#ffb54711',
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: '0 50%',
              }} />
            );
          })}
          {/* Earth dot */}
          <div className="absolute right-12 top-[38%] w-4 h-4 rounded-full bg-gradient-to-br from-[#00f6ff] to-[#0066ff] shadow-[0_0_8px_#00f6ff44]">
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-[#00f6ff] whitespace-nowrap">🌍 地球</div>
          </div>
        </div>
      );

    case 'thermodynamics':
      return (
        <div className="relative w-72 h-36 mx-auto my-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-[#00f6ff11] border border-[#00f6ff33] flex flex-col items-center justify-center">
              <span className="text-2xl">⚡</span>
              <span className="text-xs text-[#00f6ff] mt-1">有用功</span>
            </div>
            <div className="text-gray-500 text-2xl">+</div>
            <div className="w-20 h-20 rounded-xl bg-[#ff450011] border border-[#ff450033] flex flex-col items-center justify-center">
              <span className="text-2xl">🔥</span>
              <span className="text-xs text-[#ff4500] mt-1">废热</span>
            </div>
            <div className="text-gray-500 text-2xl">=</div>
            <div className="w-20 h-20 rounded-xl bg-[#ffb54711] border border-[#ffb54733] flex flex-col items-center justify-center">
              <span className="text-2xl">☀️</span>
              <span className="text-xs text-[#ffb547] mt-1">总能量</span>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-400 font-mono">Entropy ↑ 熵增加</div>
        </div>
      );

    case 'dyson-shell-1':
      return (
        <div className="relative w-48 h-48 mx-auto my-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#334155] to-[#1e293b] border-2 border-[#64748b44] shadow-[inset_0_0_40px_#ffb54722]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#ffb547] to-[#ff4500] shadow-[0_0_30px_#ffb54744]" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">完整刚性球壳</div>
        </div>
      );

    case 'dyson-swarm-1':
      return (
        <div className="relative w-48 h-48 mx-auto my-6">
          <div className="absolute inset-14 rounded-full bg-gradient-to-br from-[#ffb547] to-[#ff4500] shadow-[0_0_30px_#ffb54744]" />
          {[...Array(20)].map((_, i) => {
            const angle = (i * 18) * Math.PI / 180;
            const r = 42 + Math.sin(i * 1.5) * 5;
            return (
              <div key={i} className="absolute w-2 h-2 rounded-sm bg-[#00f6ff88] shadow-[0_0_4px_#00f6ff44]" style={{
                top: `${50 + r * Math.sin(angle)}%`,
                left: `${50 + r * Math.cos(angle)}%`,
                animation: `twinkle ${1.5 + i * 0.1}s ease-in-out ${i * 0.2}s infinite`,
              }} />
            );
          })}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">独立卫星蜂群</div>
        </div>
      );

    case 'dyson-bubble-1':
    case 'dyson-bubble-2':
      return (
        <div className="relative w-48 h-48 mx-auto my-6">
          <div className="absolute inset-14 rounded-full bg-gradient-to-br from-[#ffb547] to-[#ff4500] shadow-[0_0_30px_#ffb54744]" />
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            return (
              <div key={i} className="absolute animate-float" style={{
                top: `${50 + 40 * Math.sin(angle)}%`,
                left: `${50 + 40 * Math.cos(angle)}%`,
                animationDelay: `${i * 0.25}s`,
              }}>
                <div className="w-4 h-2 bg-[#a56dff44] border border-[#a56dff33] rounded-sm transform -rotate-12" />
              </div>
            );
          })}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">轻质反射帆</div>
        </div>
      );

    case 'materials-source':
      return (
        <div className="flex items-center justify-center gap-6 my-6">
          {[
            { emoji: '🪐', label: '水星', color: '#a56dff' },
            { emoji: '☄️', label: '小行星', color: '#00f6ff' },
            { emoji: '🌙', label: '月球', color: '#ffb547' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style={{ background: `${item.color}11`, border: `1px solid ${item.color}33` }}>
                {item.emoji}
              </div>
              <span className="text-xs" style={{ color: item.color }}>{item.label}</span>
            </div>
          ))}
          <div className="text-gray-500 text-xl">→</div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-[#00f6ff11] border border-[#00f6ff33] flex items-center justify-center text-3xl">☀️</div>
            <span className="text-xs text-[#00f6ff]">太阳轨道</span>
          </div>
        </div>
      );

    case 'heat-dissipation':
      return (
        <div className="relative w-56 h-40 mx-auto my-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-16 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center">
            <span className="text-sm">🛰️</span>
          </div>
          {/* Heat waves */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute rounded-full border border-[#ff450022]" style={{
              inset: `${-10 - i * 12}px`,
              opacity: 0.3 - i * 0.04,
              animation: `twinkle ${2 + i * 0.3}s ease-in-out ${i * 0.5}s infinite`,
            }} />
          ))}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#ff4500] whitespace-nowrap">辐射散热 = 太空"汗腺"</div>
        </div>
      );

    case 'orbital-stability':
      return (
        <div className="flex items-center justify-center gap-3 my-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${i === 2 ? 'bg-[#ff450033] border border-[#ff4500] animate-pulse' : 'bg-[#00f6ff11] border border-[#00f6ff33]'}`}>
                {i === 2 ? '💥' : '🛰️'}
              </div>
              {i < 4 && <div className="absolute top-1/2 -right-2 w-3 h-px bg-[#ffffff22]" />}
            </div>
          ))}
        </div>
      );

    case 'self-repair':
      return (
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="w-16 h-16 rounded-xl bg-[#ff450011] border border-[#ff450033] flex items-center justify-center text-2xl relative">
            🛰️
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ff4500] text-xs flex items-center justify-center text-white">!</div>
          </div>
          <div className="text-[#00f6ff] text-xl">→</div>
          <div className="w-16 h-16 rounded-xl bg-[#a56dff11] border border-[#a56dff33] flex items-center justify-center text-2xl">🤖</div>
          <div className="text-[#00f6ff] text-xl">→</div>
          <div className="w-16 h-16 rounded-xl bg-[#00f6ff11] border border-[#00f6ff33] flex items-center justify-center text-2xl relative">
            🛰️
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00ff88] text-xs flex items-center justify-center text-white">✓</div>
          </div>
        </div>
      );

    case 'exponential-growth':
      return (
        <div className="flex items-center justify-center gap-2 my-6">
          {[1, 2, 4, 8, 16].map((n, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="rounded-lg bg-[#a56dff11] border border-[#a56dff33] flex items-center justify-center font-mono text-[#a56dff] font-bold" style={{
                width: `${24 + i * 12}px`,
                height: `${24 + i * 12}px`,
                fontSize: `${10 + i * 2}px`,
              }}>
                {n}
              </div>
              {i < 4 && <div className="text-gray-600 text-xs mt-1">×2</div>}
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function DiagramSlide({ slide }: { slide: Slide; slideIndex: number }) {
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
        <motion.p variants={item} className="text-gray-400 text-lg mb-4">
          {slide.subtitle}
        </motion.p>
      )}

      <motion.div variants={item}>
        <SlideVisual slideId={slide.id} />
      </motion.div>

      {slide.formula && (
        <motion.div variants={item} className="my-4">
          <div className="inline-block px-6 py-3 rounded-xl bg-[#ffb54710] border border-[#ffb54733]">
            <span className="font-mono text-2xl text-[#ffb547] font-bold">{slide.formula}</span>
          </div>
          {slide.formulaExplain && (
            <div className="mt-2 text-gray-400 text-sm">💡 {slide.formulaExplain}</div>
          )}
        </motion.div>
      )}

      {slide.bullets && (
        <div className="space-y-3 max-w-2xl mx-auto text-left mt-4">
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
