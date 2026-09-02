import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function KardashevCards() {
  const levels = [
    { level: 'I', label: '行星级', icon: '🌍', color: '#00f6ff', desc: '掌握整个行星的能源', power: '~10¹⁶ W' },
    { level: 'II', label: '恒星级', icon: '☀️', color: '#ffb547', desc: '掌握一颗恒星的能量', power: '~10²⁶ W' },
    { level: 'III', label: '星系级', icon: '🌌', color: '#a56dff', desc: '掌握整个星系的能量', power: '~10³⁶ W' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 my-6 max-w-3xl mx-auto">
      {levels.map((l, i) => (
        <motion.div
          key={i}
          variants={item}
          className="flex-1 rounded-2xl p-5 card-hover cursor-default"
          style={{
            background: `${l.color}08`,
            border: `1px solid ${l.color}33`,
          }}
        >
          <div className="text-4xl mb-3">{l.icon}</div>
          <div className="font-mono text-2xl font-bold mb-1" style={{ color: l.color }}>{l.level} 型文明</div>
          <div className="text-white text-sm font-medium mb-2">{l.label}能量</div>
          <div className="text-gray-400 text-xs mb-2">{l.desc}</div>
          <div className="font-mono text-xs" style={{ color: l.color }}>{l.power}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ThreeTypesCards() {
  const types = [
    { name: '戴森壳', en: 'Dyson Shell', icon: '🛡️', color: '#ff4500', desc: '完整硬壳包围', key: '靠结构' },
    { name: '戴森群', en: 'Dyson Swarm', icon: '🐝', color: '#00f6ff', desc: '卫星蜂群环绕', key: '靠轨道' },
    { name: '戴森泡', en: 'Dyson Bubble', icon: '🪁', color: '#a56dff', desc: '光压悬浮风筝', key: '靠光压' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 my-6 max-w-3xl mx-auto">
      {types.map((t, i) => (
        <motion.div
          key={i}
          variants={item}
          className="flex-1 rounded-2xl p-5 card-hover cursor-default"
          style={{
            background: `${t.color}08`,
            border: `1px solid ${t.color}33`,
          }}
        >
          <div className="text-4xl mb-3">{t.icon}</div>
          <div className="text-white text-lg font-bold mb-1">{t.name}</div>
          <div className="font-mono text-xs mb-2" style={{ color: t.color }}>{t.en}</div>
          <div className="text-gray-400 text-sm mb-2">{t.desc}</div>
          <div className="text-xs px-2 py-1 rounded-full inline-block" style={{ background: `${t.color}15`, color: t.color }}>
            {t.key}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function CardsSlide({ slide }: { slide: Slide; slideIndex: number }) {
  const isKardashev = slide.id === 'kardashev-scale';
  const isThreeTypes = slide.id === 'three-types';
  const isSummary = slide.id === 'three-types-summary';

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

      {isKardashev && <KardashevCards />}
      {(isThreeTypes || isSummary) && <ThreeTypesCards />}

      {!isKardashev && !isThreeTypes && !isSummary && slide.bullets && (
        <div className="space-y-3 max-w-2xl mx-auto text-left mt-4">
          {slide.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#ffffff04] border border-[#ffffff08] card-hover"
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
