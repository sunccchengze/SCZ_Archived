import { useState } from 'react';

const breakthroughs = [
  {
    id: 'neuralink',
    title: 'Neuralink：马斯克的"心灵感应"计划',
    icon: '🔗',
    color: '#39FF14',
    stats: [
      { label: '电极数量', value: '3,072', unit: '个' },
      { label: '细丝数量', value: '96', unit: '根' },
      { label: '打字速度', value: '40', unit: '词/分钟' },
    ],
    description:
      'Neuralink成立于2016年，开发名为"Link"的芯片，也被称为"Telepathy"——心灵感应。电极阵列由专门的神经外科手术机器人以微米级精度植入，避开大脑表面的血管。',
    keyTerms: [
      { term: 'Electrode', meaning: '电极：采集或传输电信号的导体' },
      { term: 'Motor Cortex', meaning: '运动皮层：大脑中控制身体运动的区域' },
      { term: 'Neural Signal', meaning: '神经信号：神经元之间传递的电化学信息' },
    ],
  },
  {
    id: 'noland',
    title: '诺兰德的故事：我的整个人生都改变了',
    icon: '🎮',
    color: '#00BFFF',
    stats: [
      { label: '植入时间', value: '2024', unit: '年1月' },
      { label: '每日使用', value: '10', unit: '小时' },
      { label: '事故年份', value: '2016', unit: '年' },
    ],
    description:
      '诺兰德·阿尔博在2016年的游泳事故中颈椎脱位，导致肩膀以下完全瘫痪。2024年1月成为Neuralink第一位人类受试者。手术在亚利桑那州的巴罗神经学研究所进行。他第一次公开亮相时说："你好，人类。"全场掌声雷动。',
    quote: {
      text: '我的整个人生都改变了。',
      author: '诺兰德·阿尔博，2025年8月',
    },
  },
  {
    id: 'china',
    title: '中国的突破：从实验室到小区遛弯',
    icon: '🇨🇳',
    color: '#FF6B6B',
    stats: [
      { label: '临床试验', value: '3', unit: '例' },
      { label: '系统延迟', value: '<100', unit: 'ms' },
      { label: '全球排名', value: '#2', unit: '' },
    ],
    description:
      '2025年，中国科学院赵郑拓、李雪团队完成三例侵入式脑机接口临床试验。我国成为继美国后，全球第二个进入侵入式脑机接口临床试验阶段的国家。一位高位截瘫患者仅凭"意念"控制，即可坐着电动轮椅在小区里遛弯，还能指挥机器狗去取外卖！',
    quote: {
      text: '就像控制游戏里的人物，不用特意去想摇杆要往哪个方向摆，自然而然想往哪个方向就过去了。信号传输比较稳，也没有太多延时。',
      author: '中国脑机接口临床试验患者',
    },
    highlight: {
      title: '比你自己的神经反应还快！',
      content: '人体自然神经环路的传导延迟约200ms，但该团队把端到端延迟压缩到了100ms以内。',
      term: 'Seamless Control（无缝控制）',
    },
  },
  {
    id: 'speech',
    title: '语言解码：让失语者重新"开口"',
    icon: '🗣️',
    color: '#FFD700',
    stats: [
      { label: '音节数量', value: '142', unit: '个' },
      { label: '解码准确率', value: '71%', unit: '' },
      { label: '单字延迟', value: '<100', unit: 'ms' },
    ],
    description:
      '2025年3月，我国"北脑一号"半侵入式系统完成第三例人体植入，使渐冻症失语患者成功恢复语言交流能力。脑虎科技联合华山医院团队在语言区肿瘤患者身上实现了142个常用汉语音节下71%的解码准确率。',
    keyTerms: [
      { term: 'Speech Decoding', meaning: '语言解码：把大脑中"准备说话"的神经信号翻译成实际的语言输出' },
    ],
  },
];

export default function Chapter3() {
  const [activeCard, setActiveCard] = useState('neuralink');
  const [expandedTerm, setExpandedTerm] = useState<number | null>(null);

  const activeData = breakthroughs.find((b) => b.id === activeCard)!;

  return (
    <section id="chapter3" className="relative py-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
            <span className="text-xs font-display text-[#39FF14] tracking-wider">CHAPTER 03</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E6ED] mb-4">
            今天的脑机接口<span className="text-[#39FF14] glow-green">有多强</span>？
          </h2>
          <p className="text-[#8A92A0] text-lg max-w-2xl mx-auto">
            从Neuralink到中国突破——全球脑机接口最新进展
          </p>
        </div>

        {/* Card selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {breakthroughs.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCard(item.id)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeCard === item.id
                  ? 'bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.3)] glow-box'
                  : 'bg-[rgba(16,22,32,0.6)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(57,255,20,0.2)]'
              }`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p
                className={`text-sm font-bold transition-colors ${
                  activeCard === item.id ? 'text-[#39FF14]' : 'text-[#B8C0CC]'
                }`}
              >
                {item.id === 'neuralink'
                  ? 'Neuralink'
                  : item.id === 'noland'
                  ? '诺兰德'
                  : item.id === 'china'
                  ? '中国突破'
                  : '语言解码'}
              </p>
            </button>
          ))}
        </div>

        {/* Active card content */}
        <div className="fade-in-up" key={activeCard}>
          <div className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `${activeData.color}15` }}
              >
                {activeData.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#E0E6ED]">{activeData.title}</h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {activeData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[rgba(57,255,20,0.05)] border border-[rgba(57,255,20,0.1)] text-center"
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[#39FF14]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#8A92A0] mt-1">{stat.unit}</p>
                  <p className="text-sm text-[#B8C0CC] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-[#B8C0CC] leading-relaxed mb-6 text-lg">{activeData.description}</p>

            {/* Quote */}
            {activeData.quote && (
              <div className="p-5 rounded-xl bg-[rgba(57,255,20,0.05)] border-l-4 border-[#39FF14] mb-6">
                <p className="text-[#E0E6ED] italic text-lg mb-2">"{activeData.quote.text}"</p>
                <p className="text-[#8A92A0] text-sm">—— {activeData.quote.author}</p>
              </div>
            )}

            {/* Highlight box */}
            {activeData.highlight && (
              <div className="p-6 rounded-xl bg-gradient-to-r from-[rgba(57,255,20,0.08)] to-[rgba(0,191,255,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14] flex items-center justify-center">
                    <span className="text-[#0A0E14] text-xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#39FF14]">{activeData.highlight.title}</h4>
                </div>
                <p className="text-[#B8C0CC] mb-3">{activeData.highlight.content}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(57,255,20,0.1)]">
                  <span className="text-xs font-display text-[#39FF14]">TERM</span>
                  <span className="text-sm text-[#E0E6ED] font-medium">
                    {activeData.highlight.term}
                  </span>
                </div>
              </div>
            )}

            {/* Key terms */}
            {activeData.keyTerms && (
              <div className="space-y-2">
                <h4 className="text-sm font-display text-[#8A92A0] tracking-wider mb-3">
                  KEY TERMS
                </h4>
                {activeData.keyTerms.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setExpandedTerm(expandedTerm === idx ? null : idx)}
                    className="w-full p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(57,255,20,0.2)] transition-all text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#39FF14] font-display text-sm font-bold">
                        {item.term}
                      </span>
                      <span
                        className={`text-[#8A92A0] transition-transform ${
                          expandedTerm === idx ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedTerm === idx ? 'max-h-20 mt-2' : 'max-h-0'
                      }`}
                    >
                      <p className="text-[#B8C0CC] text-sm">{item.meaning}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
