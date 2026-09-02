import { useState } from 'react';

const bciTypes = [
  {
    id: 'non-invasive',
    type: '非侵入式',
    english: 'Non-invasive',
    icon: '🎧',
    color: '#39FF14',
    description: '戴在头上，无需手术',
    example: '脑电帽（EEG Headset）',
    analogy: '像用听诊器隔着衣服听心跳——能听到，但不太清楚',
    features: ['零风险', '信号较弱', '易于使用', '适合日常场景'],
  },
  {
    id: 'semi-invasive',
    type: '半侵入式',
    english: 'Semi-invasive',
    icon: '🔬',
    color: '#00BFFF',
    description: '放在颅骨下、硬脑膜外',
    example: '清华洪波团队方案',
    analogy: '像把传感器贴在墙壁外面——能感知内部震动，信号不错',
    features: ['中等风险', '信号较好', '需小手术', '平衡方案'],
  },
  {
    id: 'invasive',
    type: '侵入式',
    english: 'Invasive',
    icon: '⚡',
    color: '#FF6B6B',
    description: '直接植入大脑皮层',
    example: 'Neuralink / BrainGate',
    analogy: '像把麦克风直接放进心脏旁边——信号超清晰，但风险也更大',
    features: ['高风险', '信号最强', '需开颅手术', '医疗级应用'],
  },
];

export default function Chapter1() {
  const [activeType, setActiveType] = useState('non-invasive');
  const activeData = bciTypes.find((t) => t.id === activeType)!;

  return (
    <section id="chapter1" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
            <span className="text-xs font-display text-[#39FF14] tracking-wider">CHAPTER 01</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E6ED] mb-4">
            什么是<span className="text-[#39FF14] glow-green">脑机接口</span>？
          </h2>
          <p className="text-[#8A92A0] text-lg max-w-2xl mx-auto">
            Brain-Computer Interface (BCI) —— 大脑与计算机之间的直接通道
          </p>
        </div>

        {/* Core concept card */}
        <div className="mb-16 p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(57,255,20,0.1),transparent)] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#E0E6ED] mb-4">
                  🧠 从一个比喻开始
                </h3>
                <p className="text-[#B8C0CC] leading-relaxed mb-4">
                  你的大脑是一座超级繁忙的城市，里面住着大约{' '}
                  <span className="text-[#39FF14] font-bold">860亿</span> 个"居民"——这些居民叫做
                  <span className="text-[#39FF14] font-bold">神经元（Neuron）</span>。
                </p>
                <p className="text-[#B8C0CC] leading-relaxed mb-4">
                  每一秒，这些神经元都在疯狂地"发微信"——用电信号和化学信号互相交流。你想动动手指、眨眨眼、甚至只是"想一想"什么事情，都会在大脑里产生特定的电信号模式。
                </p>
                <div className="p-4 rounded-xl bg-[rgba(57,255,20,0.05)] border-l-4 border-[#39FF14]">
                  <p className="text-[#E0E6ED] font-medium">
                    💡 脑机接口就是一个<span className="text-[#39FF14] font-bold">翻译官</span>——把大脑里的"电信号语言"翻译成机器能听懂的"指令语言"。
                  </p>
                </div>
              </div>
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="p-6 rounded-xl bg-[rgba(57,255,20,0.05)] border border-[rgba(57,255,20,0.2)] text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#39FF14]/50" />
                    <span className="text-[#39FF14] font-display text-xs">SIGNAL</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#39FF14]/50" />
                  </div>
                  <div className="text-4xl mb-3">⚡</div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#39FF14]/50" />
                    <span className="text-[#39FF14] font-display text-xs">DECODE</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#39FF14]/50" />
                  </div>
                  <div className="text-4xl">💻</div>
                  <p className="mt-4 text-sm text-[#8A92A0] font-display">
                    Turn Thoughts Into Action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BCI Types Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-2 text-center">
            脑机接口的三种类型
          </h3>
          <p className="text-[#8A92A0] text-center mb-8">
            根据"贴近大脑程度"的不同，脑机接口分为三类
          </p>

          {/* Type selector tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {bciTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeType === type.id
                    ? 'bg-[rgba(57,255,20,0.15)] text-[#39FF14] border border-[rgba(57,255,20,0.3)] glow-box'
                    : 'bg-[rgba(16,22,32,0.6)] text-[#8A92A0] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(57,255,20,0.2)]'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                {type.type}
              </button>
            ))}
          </div>

          {/* Active type detail */}
          <div
            className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border glow-box transition-all duration-500"
            style={{ borderColor: `${activeData.color}30` }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${activeData.color}15` }}
                  >
                    {activeData.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#E0E6ED]">{activeData.type}</h4>
                    <p className="font-display text-sm" style={{ color: activeData.color }}>
                      {activeData.english}
                    </p>
                  </div>
                </div>
                <p className="text-[#B8C0CC] mb-4">{activeData.description}</p>
                <div className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] mb-4">
                  <p className="text-sm text-[#8A92A0] mb-1">代表案例</p>
                  <p className="text-[#E0E6ED] font-medium">{activeData.example}</p>
                </div>
                <div className="p-4 rounded-xl bg-[rgba(57,255,20,0.05)] border-l-4 border-[#39FF14]">
                  <p className="text-sm text-[#B8C0CC] italic">"{activeData.analogy}"</p>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold text-[#E0E6ED] mb-4">特点分析</h5>
                <div className="grid grid-cols-2 gap-3">
                  {activeData.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-center hover:border-[rgba(57,255,20,0.3)] transition-colors"
                    >
                      <div
                        className="w-3 h-3 rounded-full mx-auto mb-2"
                        style={{ background: activeData.color }}
                      />
                      <p className="text-sm text-[#B8C0CC]">{feature}</p>
                    </div>
                  ))}
                </div>
                {/* Visual comparison */}
                <div className="mt-6 p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-display text-[#8A92A0]">信号强度</span>
                  </div>
                  <div className="h-3 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width:
                          activeType === 'non-invasive'
                            ? '30%'
                            : activeType === 'semi-invasive'
                            ? '65%'
                            : '95%',
                        background: `linear-gradient(90deg, ${activeData.color}80, ${activeData.color})`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-[#8A92A0]">
                    <span>弱</span>
                    <span>强</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
