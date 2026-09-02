import { useState } from 'react';

const timelineEvents = [
  {
    year: '1963',
    title: '斗牛场的惊世实验',
    subtitle: '何塞·德尔加多的疯狂之举',
    icon: '🐂',
    color: '#FF6B6B',
    description:
      '西班牙神经科学家德尔加多走进斗牛场，面对一头愤怒的公牛。当公牛冲过来的瞬间，他按下遥控器——植入公牛大脑的装置让公牛立刻停住，像被按了暂停键。',
    quote: '人类正处于进化的转折点，我们离拥有构建自己心智功能的能力已经很近了。',
    quoteAuthor: '何塞·德尔加多',
    significance: '首次证明电信号可以控制生物行为，但也引发伦理担忧',
  },
  {
    year: '1996',
    title: '神经营养电极问世',
    subtitle: '菲尔·肯尼迪的突破性发明',
    icon: '🔬',
    color: '#00BFFF',
    description:
      '肯尼迪发明了"神经营养电极"（Neurotrophic Electrode），让电极能和大脑神经长在一起，解决了以前电极容易脱落的难题。',
    quote: null,
    quoteAuthor: null,
    significance: '解决了BCI领域的核心工程难题——电极长期稳定性',
  },
  {
    year: '1998',
    title: '第一位"赛博格"诞生',
    subtitle: '约翰尼·雷用意念写字',
    icon: '🤖',
    color: '#39FF14',
    description:
      '越战老兵约翰尼·雷因中风患上"闭锁综合征"——大脑清醒，但全身瘫痪。肯尼迪为他植入脑机接口后，他学会了用"想"来控制电脑光标，打出人生第一批用意念写出的字。',
    quote: null,
    quoteAuthor: null,
    significance: '人类首次通过脑机接口实现意念控制外部设备',
    extraInfo: {
      term: 'Cyborg',
      definition: '赛博格，来自 Cybernetic Organism 的缩写，意为"半人半机械"',
    },
  },
  {
    year: '2012',
    title: 'BrainGate的里程碑',
    subtitle: '瘫痪患者15年来首次自己喝咖啡',
    icon: '☕',
    color: '#FFD700',
    description:
      'BrainGate的研究人员发表研究：凯西·哈钦森女士因脑干中风瘫痪多年，但通过脑机接口控制机械臂，她完成了15年来第一次自己喝咖啡的动作。',
    quote: null,
    quoteAuthor: null,
    significance: '证明脑机接口可控制复杂的三维空间运动',
  },
  {
    year: '2014',
    title: '肯尼迪的疯狂抉择',
    subtitle: '在自己脑袋上动刀',
    icon: '🧠',
    color: '#FF69B4',
    description:
      '67岁的肯尼迪为获取健康人大脑数据，花3万美元飞到伯利兹，请当地医生把电极植入自己的大脑。88天后因伤口无法愈合，他不得不取出部分设备，但有些电极永远留在了他脑中。',
    quote: '这是我找到答案的唯一方法。',
    quoteAuthor: '菲尔·肯尼迪',
    significance: '科学家为探索未知不惜以身试验的极致精神',
  },
  {
    year: '2024',
    title: 'Neuralink首例人体植入',
    subtitle: '诺兰德用意念玩《文明6》',
    icon: '🎮',
    color: '#39FF14',
    description:
      '诺兰德·阿尔博成为Neuralink第一位人类受试者。他曾因游泳事故导致肩膀以下完全瘫痪，现在可以用意念下棋、浏览网页、发消息，甚至玩复杂的策略游戏。',
    quote: '我的整个人生都改变了。',
    quoteAuthor: '诺兰德·阿尔博（2025年8月）',
    significance: '脑机接口进入商业应用时代',
    extraInfo: {
      term: '打字速度',
      definition: '每分钟40个词，与普通人触屏键盘打字速度相当',
    },
  },
];

export default function Chapter2() {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section id="chapter2" className="relative py-20 px-4 sm:px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.3),transparent)]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(0,191,255,0.3),transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
            <span className="text-xs font-display text-[#39FF14] tracking-wider">CHAPTER 02</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E6ED] mb-4">
            脑机接口<span className="text-[#39FF14] glow-green">简史</span>
          </h2>
          <p className="text-[#8A92A0] text-lg max-w-2xl mx-auto">
            从斗牛场到手术室——60年奇幻旅程
          </p>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          {/* Timeline navigation */}
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#39FF14] via-[#39FF14]/30 to-transparent hidden lg:block" />
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
              {timelineEvents.map((event, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEvent(idx)}
                  className={`flex-shrink-0 flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                    activeEvent === idx
                      ? 'bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.3)]'
                      : 'hover:bg-[rgba(255,255,255,0.03)]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeEvent === idx
                        ? 'bg-[#39FF14] text-[#0A0E14] shadow-[0_0_15px_rgba(57,255,20,0.5)]'
                        : 'bg-[rgba(57,255,20,0.1)] text-[#39FF14]'
                    }`}
                  >
                    <span className="text-sm font-display font-bold">{event.year.slice(-2)}</span>
                  </div>
                  <div className="text-left">
                    <p
                      className={`text-sm font-bold transition-colors ${
                        activeEvent === idx ? 'text-[#39FF14]' : 'text-[#B8C0CC]'
                      }`}
                    >
                      {event.year}
                    </p>
                    <p className="text-xs text-[#8A92A0] hidden lg:block">{event.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Event detail */}
          <div className="fade-in-up" key={activeEvent}>
            <div className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${timelineEvents[activeEvent].color}15` }}
                >
                  {timelineEvents[activeEvent].icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="font-display text-2xl font-bold"
                      style={{ color: timelineEvents[activeEvent].color }}
                    >
                      {timelineEvents[activeEvent].year}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs bg-[rgba(255,255,255,0.05)] text-[#8A92A0]">
                      {activeEvent + 1} / {timelineEvents.length}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E0E6ED]">
                    {timelineEvents[activeEvent].title}
                  </h3>
                  <p className="text-[#8A92A0]">{timelineEvents[activeEvent].subtitle}</p>
                </div>
              </div>

              <p className="text-[#B8C0CC] leading-relaxed mb-6 text-lg">
                {timelineEvents[activeEvent].description}
              </p>

              {/* Quote */}
              {timelineEvents[activeEvent].quote && (
                <div className="p-5 rounded-xl bg-[rgba(57,255,20,0.05)] border-l-4 border-[#39FF14] mb-6">
                  <p className="text-[#E0E6ED] italic text-lg mb-2">
                    "{timelineEvents[activeEvent].quote}"
                  </p>
                  <p className="text-[#8A92A0] text-sm">—— {timelineEvents[activeEvent].quoteAuthor}</p>
                </div>
              )}

              {/* Extra info */}
              {timelineEvents[activeEvent].extraInfo && (
                <div className="p-4 rounded-xl bg-[rgba(0,191,255,0.05)] border border-[rgba(0,191,255,0.2)] mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-display text-[#00BFFF] tracking-wider">
                      KEY TERM
                    </span>
                  </div>
                  <p className="text-[#E0E6ED] font-bold">
                    {timelineEvents[activeEvent].extraInfo!.term}
                  </p>
                  <p className="text-[#B8C0CC] text-sm">
                    {timelineEvents[activeEvent].extraInfo!.definition}
                  </p>
                </div>
              )}

              {/* Significance */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
                <div className="w-8 h-8 rounded-lg bg-[rgba(57,255,20,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#39FF14] text-sm">💡</span>
                </div>
                <div>
                  <p className="text-sm text-[#8A92A0] mb-1">历史意义</p>
                  <p className="text-[#E0E6ED]">{timelineEvents[activeEvent].significance}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setActiveEvent(Math.max(0, activeEvent - 1))}
                  disabled={activeEvent === 0}
                  className="px-4 py-2 rounded-lg text-sm text-[#8A92A0] hover:text-[#39FF14] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← 上一个事件
                </button>
                <button
                  onClick={() =>
                    setActiveEvent(Math.min(timelineEvents.length - 1, activeEvent + 1))
                  }
                  disabled={activeEvent === timelineEvents.length - 1}
                  className="px-4 py-2 rounded-lg text-sm text-[#8A92A0] hover:text-[#39FF14] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  下一个事件 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
