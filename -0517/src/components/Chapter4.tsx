import { useState } from 'react';

const steps = [
  {
    id: 1,
    title: '信号采集',
    subtitle: '给大脑"装麦克风"',
    icon: '🎤',
    color: '#39FF14',
    description:
      '脑机接口的核心部件是"微电极阵列"（Microelectrode Array）。目前最著名的是BrainGate系统使用的"犹他阵列"（Utah Array），由100个细如发丝的电极组成。',
    analogy:
      '如果大脑是一个超大型演唱会现场，里面有860亿个歌手同时在唱歌。微电极阵列就像架在舞台上的高灵敏度麦克风，能听清楚它负责的那一小片区域里的声音。',
    components: ['微电极阵列', '犹他阵列', '信号放大器', '模数转换器'],
    keyTerm: {
      term: 'Microelectrode Array',
      definition: '微电极阵列：一种包含多个微小电极的装置，用于同时记录大量神经元的电活动',
    },
  },
  {
    id: 2,
    title: '信号处理',
    subtitle: '翻译大脑的"密码"',
    icon: '🔬',
    color: '#00BFFF',
    description:
      '采集到信号只是第一步。接下来需要解码（Decoding）——把神经信号翻译成指令。这里要用到机器学习（Machine Learning）和人工智能（AI）。',
    analogy:
      '系统会先让患者"想象"移动手臂向上、向下、向左、向右。每一种想象都会产生特定的神经信号模式。AI会学习这些模式，建立一个"字典"。',
    components: ['噪声滤波', '特征提取', '模式识别', 'AI解码器'],
    keyTerm: {
      term: 'Neural Decoding',
      definition: '神经解码：将神经信号模式转换为可理解的指令或信息的过程',
    },
    process: [
      { input: '患者想象"向上"', output: '神经信号模式A' },
      { input: '患者想象"向左"', output: '神经信号模式B' },
      { input: 'AI学习建立字典', output: '模式A = 向上' },
      { input: '实时翻译', output: '指令发送给设备' },
    ],
  },
  {
    id: 3,
    title: '执行输出',
    subtitle: '让意念变成行动',
    icon: '⚡',
    color: '#FFD700',
    description:
      '解码出来的指令可以控制很多东西：电脑光标、机械臂、轮椅、假肢，甚至语音合成器。',
    analogy:
      '2012年，凯西·哈钦森女士通过脑机接口控制机械臂，完成了15年来第一次自己喝咖啡的动作。机械臂缓缓举起咖啡杯，送到她嘴边。她的眼睛里满是泪水。这就是科技的温度。',
    components: ['电脑光标', '机械臂', '电动轮椅', '假肢', '语音合成器'],
    keyTerm: {
      term: 'Output Device',
      definition: '输出设备：接收解码后的指令并执行相应动作的外部设备',
    },
  },
];

export default function Chapter4() {
  const [activeStep, setActiveStep] = useState(0);
  const [showProcess, setShowProcess] = useState(false);

  return (
    <section id="chapter4" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
            <span className="text-xs font-display text-[#39FF14] tracking-wider">CHAPTER 04</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E6ED] mb-4">
            脑机接口<span className="text-[#39FF14] glow-green">怎么工作</span>？
          </h2>
          <p className="text-[#8A92A0] text-lg max-w-2xl mx-auto">
            三个步骤：采集 → 解码 → 执行
          </p>
        </div>

        {/* Flow visualization */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`relative group transition-all duration-300 ${
                    activeStep === idx ? 'scale-110' : 'scale-100 hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                      activeStep === idx
                        ? 'bg-[rgba(57,255,20,0.15)] border-2 border-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.3)]'
                        : 'bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] hover:border-[rgba(57,255,20,0.3)]'
                    }`}
                  >
                    <span className="text-2xl md:text-3xl mb-1">{step.icon}</span>
                    <span
                      className={`font-display text-xs font-bold ${
                        activeStep === idx ? 'text-[#39FF14]' : 'text-[#8A92A0]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <div
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-display ${
                      activeStep === idx
                        ? 'bg-[#39FF14] text-[#0A0E14]'
                        : 'bg-[rgba(255,255,255,0.1)] text-[#8A92A0]'
                    }`}
                  >
                    STEP {step.id}
                  </div>
                </button>
                {idx < steps.length - 1 && (
                  <div className="w-12 md:w-20 flex items-center justify-center px-2">
                    <div className="hidden md:flex items-center gap-1">
                      <div className="w-2 h-0.5 bg-[#39FF14]/30" />
                      <div className="w-3 h-0.5 bg-[#39FF14]/50" />
                      <div className="w-4 h-0.5 bg-[#39FF14]" />
                      <div className="text-[#39FF14]">→</div>
                    </div>
                    <div className="md:hidden text-[#39FF14]/50">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step detail */}
        <div className="fade-in-up" key={activeStep}>
          <div className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${steps[activeStep].color}15` }}
                  >
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#E0E6ED]">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-[#8A92A0]">{steps[activeStep].subtitle}</p>
                  </div>
                </div>

                <p className="text-[#B8C0CC] leading-relaxed mb-6">
                  {steps[activeStep].description}
                </p>

                {/* Analogy */}
                <div className="p-4 rounded-xl bg-[rgba(57,255,20,0.05)] border-l-4 border-[#39FF14] mb-6">
                  <p className="text-sm text-[#8A92A0] mb-2">💡 通俗比喻</p>
                  <p className="text-[#E0E6ED] italic">{steps[activeStep].analogy}</p>
                </div>

                {/* Key term */}
                <div className="p-4 rounded-xl bg-[rgba(0,191,255,0.05)] border border-[rgba(0,191,255,0.2)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-display text-[#00BFFF] tracking-wider">
                      KEY TERM
                    </span>
                  </div>
                  <p className="text-[#E0E6ED] font-bold">{steps[activeStep].keyTerm.term}</p>
                  <p className="text-[#B8C0CC] text-sm">{steps[activeStep].keyTerm.definition}</p>
                </div>
              </div>

              {/* Right: visualization */}
              <div>
                {/* Components list */}
                <h4 className="text-sm font-display text-[#8A92A0] tracking-wider mb-4">
                  核心组件
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {steps[activeStep].components.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 rounded-lg bg-[rgba(57,255,20,0.05)] border border-[rgba(57,255,20,0.15)] text-sm text-[#B8C0CC]"
                    >
                      {comp}
                    </span>
                  ))}
                </div>

                {/* Process flow for step 2 */}
                {steps[activeStep].process && (
                  <div>
                    <button
                      onClick={() => setShowProcess(!showProcess)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(57,255,20,0.1)] text-[#39FF14] hover:bg-[rgba(57,255,20,0.15)] transition-colors mb-4"
                    >
                      <span className="text-sm font-medium">
                        {showProcess ? '收起' : '展开'}解码流程
                      </span>
                      <span
                        className={`transition-transform ${showProcess ? 'rotate-180' : ''}`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        showProcess ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-3">
                        {steps[activeStep].process!.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[rgba(0,191,255,0.1)] flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-display text-[#00BFFF]">
                                {idx + 1}
                              </span>
                            </div>
                            <div className="flex-1 p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]">
                              <p className="text-sm text-[#B8C0CC]">{item.input}</p>
                            </div>
                            <span className="text-[#39FF14]">→</span>
                            <div className="flex-1 p-3 rounded-lg bg-[rgba(57,255,20,0.05)] border border-[rgba(57,255,20,0.1)]">
                              <p className="text-sm text-[#E0E6ED]">{item.output}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual diagram for step 1 */}
                {activeStep === 0 && (
                  <div className="p-6 rounded-xl bg-[rgba(255,255,255,0.03)] mt-4">
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[rgba(57,255,20,0.1)] flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🧠</span>
                        </div>
                        <p className="text-xs text-[#8A92A0]">860亿神经元</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#39FF14] to-[#00BFFF]" />
                        <span className="text-xs text-[#39FF14]">⚡</span>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#39FF14] to-[#00BFFF]" />
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[rgba(0,191,255,0.1)] flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🎤</span>
                        </div>
                        <p className="text-xs text-[#8A92A0]">微电极阵列</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#00BFFF] to-[#FFD700]" />
                        <span className="text-xs text-[#00BFFF]">→</span>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#00BFFF] to-[#FFD700]" />
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[rgba(255,215,0,0.1)] flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">📊</span>
                        </div>
                        <p className="text-xs text-[#8A92A0]">电信号数据</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual diagram for step 3 */}
                {activeStep === 2 && (
                  <div className="p-6 rounded-xl bg-[rgba(255,255,255,0.03)] mt-4">
                    <p className="text-sm text-[#8A92A0] mb-4 text-center">
                      2012年 BrainGate 里程碑
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-[rgba(57,255,20,0.1)] flex items-center justify-center mx-auto mb-2">
                          <span className="text-xl">🧠</span>
                        </div>
                        <p className="text-xs text-[#8A92A0]">凯西的意念</p>
                      </div>
                      <span className="text-[#39FF14]">→</span>
                      <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-[rgba(0,191,255,0.1)] flex items-center justify-center mx-auto mb-2">
                          <span className="text-xl">🤖</span>
                        </div>
                        <p className="text-xs text-[#8A92A0]">机械臂</p>
                      </div>
                      <span className="text-[#39FF14]">→</span>
                      <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-[rgba(255,215,0,0.1)] flex items-center justify-center mx-auto mb-2">
                          <span className="text-xl">☕</span>
                        </div>
                        <p className="text-xs text-[#8A92A0]">15年来首次</p>
                      </div>
                    </div>
                    <p className="text-center text-[#39FF14] text-sm mt-4 font-medium">
                      这就是科技的温度 ❤️
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
