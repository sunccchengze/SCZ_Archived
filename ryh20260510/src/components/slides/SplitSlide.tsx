import { motion } from 'framer-motion';
import { type Slide } from '../../data/slides';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SplitVisual({ slideId }: { slideId: string }) {
  switch (slideId) {
    case 'freeman-dyson':
      return (
        <div className="flex flex-col items-center gap-4">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155] flex items-center justify-center overflow-hidden relative">
            <div className="text-5xl">👨‍🔬</div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0f172a] to-transparent" />
          </div>
          <div className="text-center">
            <div className="text-white text-sm font-bold">Freeman Dyson</div>
            <div className="text-gray-500 text-xs">1923 – 2020</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-14 rounded bg-[#ffb54711] border border-[#ffb54722] flex items-center justify-center text-lg">📖</div>
            <div className="text-xs text-gray-500 text-left">
              <div className="text-[#ffb547]">Star Maker</div>
              <div>— Olaf Stapledon</div>
            </div>
          </div>
        </div>
      );

    case 'ir-signature':
      return (
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex-1 p-4 rounded-xl bg-[#ffb54708] border border-[#ffb54722]">
            <div className="text-center mb-3">
              <span className="text-3xl">☀️</span>
              <div className="text-[#ffb547] text-sm font-bold mt-1">裸露太阳</div>
            </div>
            <div className="h-20 relative overflow-hidden rounded-lg bg-[#ffffff04]">
              {/* Visible light peak */}
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M 0 38 Q 20 35 35 30 Q 50 5 65 30 Q 80 38 100 38" fill="none" stroke="#ffb547" strokeWidth="2" />
                <text x="50" y="10" textAnchor="middle" fill="#ffb547" fontSize="5">可见光峰</text>
              </svg>
            </div>
          </div>
          <div className="flex-1 p-4 rounded-xl bg-[#ff450008] border border-[#ff450022]">
            <div className="text-center mb-3">
              <span className="text-3xl">🔴</span>
              <div className="text-[#ff4500] text-sm font-bold mt-1">被包裹后</div>
            </div>
            <div className="h-20 relative overflow-hidden rounded-lg bg-[#ffffff04]">
              {/* IR peak shifted */}
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M 0 38 Q 15 36 25 32 Q 40 28 55 32 Q 70 5 85 30 Q 95 38 100 38" fill="none" stroke="#ff4500" strokeWidth="2" />
                <text x="72" y="10" textAnchor="middle" fill="#ff4500" fontSize="5">红外峰 ↑</text>
                <text x="40" y="25" textAnchor="middle" fill="#ffffff44" fontSize="4">可见光 ↓</text>
              </svg>
            </div>
          </div>
        </div>
      );

    case 'seti-technosignature':
      return (
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex-1 p-5 rounded-xl bg-[#00f6ff08] border border-[#00f6ff22] text-center">
            <div className="text-4xl mb-3">📡</div>
            <div className="text-[#00f6ff] font-bold mb-2">传统 SETI</div>
            <div className="text-gray-400 text-sm">"听"无线电信号</div>
          </div>
          <div className="flex items-center justify-center text-gray-600 text-xl">→</div>
          <div className="flex-1 p-5 rounded-xl bg-[#a56dff08] border border-[#a56dff22] text-center">
            <div className="text-4xl mb-3">🔭</div>
            <div className="text-[#a56dff] font-bold mb-2">技术特征搜索</div>
            <div className="text-gray-400 text-sm">"看"能量使用模式</div>
          </div>
        </div>
      );

    case 'bio-vs-tech':
      return (
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex-1 p-5 rounded-xl bg-[#00ff8808] border border-[#00ff8822] text-center">
            <div className="text-4xl mb-3">🧬</div>
            <div className="text-[#00ff88] font-bold mb-2">生物特征</div>
            <div className="text-gray-400 text-sm space-y-1">
              <div>大气成分</div>
              <div>氧气 + 甲烷组合</div>
              <div>生命活动痕迹</div>
            </div>
          </div>
          <div className="flex items-center justify-center text-gray-600 text-xl">vs</div>
          <div className="flex-1 p-5 rounded-xl bg-[#ffb54708] border border-[#ffb54722] text-center">
            <div className="text-4xl mb-3">🏗️</div>
            <div className="text-[#ffb547] font-bold mb-2">技术特征</div>
            <div className="text-gray-400 text-sm space-y-1">
              <div>巨构工程</div>
              <div>红外过量</div>
              <div>能量使用模式</div>
            </div>
          </div>
        </div>
      );

    case 'energy-transmission':
      return (
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex-1 p-5 rounded-xl bg-[#00f6ff08] border border-[#00f6ff22] text-center">
            <div className="text-4xl mb-3">📶</div>
            <div className="text-[#00f6ff] font-bold mb-2">微波输能</div>
            <div className="text-gray-400 text-sm">看不见的能量管道</div>
          </div>
          <div className="flex-1 p-5 rounded-xl bg-[#ff450008] border border-[#ff450022] text-center">
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-[#ff4500] font-bold mb-2">激光输能</div>
            <div className="text-gray-400 text-sm">精准的能量箭</div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function SplitSlide({ slide }: { slide: Slide; slideIndex: number }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div variants={item} className="text-center mb-4">
        <span className="text-[#a56dff] text-xs font-mono tracking-wider">
          {slide.chapterTitle}
        </span>
      </motion.div>

      <motion.h2 variants={item} className="text-3xl md:text-4xl font-black text-white mb-3 text-center tracking-wide">
        {slide.title}
      </motion.h2>

      {slide.subtitle && (
        <motion.p variants={item} className="text-gray-400 text-lg mb-6 text-center">
          {slide.subtitle}
        </motion.p>
      )}

      <motion.div variants={item} className="mb-6">
        <SplitVisual slideId={slide.id} />
      </motion.div>

      {slide.bullets && (
        <div className="space-y-2 max-w-2xl mx-auto text-left">
          {slide.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#ffffff04] border border-[#ffffff08]"
            >
              <span className="text-[#00f6ff] mt-0.5 text-sm">▸</span>
              <span className="text-gray-300 text-sm leading-relaxed">{bullet}</span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
