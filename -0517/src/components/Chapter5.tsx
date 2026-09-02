import { useState } from 'react';

const roadmap = [
  {
    period: '短期（3年内）',
    color: '#39FF14',
    items: ['运动功能重建规模化应用', '语言功能重建规模化应用'],
  },
  {
    period: '中期（5年内）',
    color: '#00BFFF',
    items: ['人工视觉、听觉等感知觉修复', '帕金森、抑郁症等神经精神疾病精准调控'],
  },
  {
    period: '长期（10年左右）',
    color: '#FFD700',
    items: ['高度微创化系统', '医疗消费场景', '普通消费场景'],
  },
];

const ethicsTopics = [
  {
    id: 'privacy',
    icon: '🔒',
    title: '隐私问题',
    english: 'Privacy',
    color: '#FF6B6B',
    description:
      '如果设备能读取你的大脑信号，谁能保证这些数据不会被泄露或滥用？"脑数据"比指纹、面孔更私密——它直接反映你的思想和意图。',
    questions: ['谁有权访问你的脑数据？', '脑数据能否被用于商业目的？', '如何防止思想被窃取？'],
  },
  {
    id: 'equity',
    icon: '⚖️',
    title: '公平问题',
    english: 'Equity',
    color: '#00BFFF',
    description:
      '如果脑机接口将来能"增强"正常人的记忆力或计算能力，有钱人可以"升级大脑"，穷人却用不起——这公平吗？',
    questions: ['脑机会不会加剧贫富差距？', '如何保证技术的普惠性？', '增强型BCI应该被允许吗？'],
  },
  {
    id: 'identity',
    icon: '🪪',
    title: '身份认同',
    english: 'Identity',
    color: '#FFD700',
    description:
      '如果你大脑里有一块芯片在帮你思考，那"你"还是原来的"你"吗？人和机器的界限在哪里？',
    questions: ['意识的边界在哪里？', '机器辅助的思考还算"你的"思考吗？', '人机融合的终点是什么？'],
  },
  {
    id: 'safety',
    icon: '⚠️',
    title: '安全问题',
    english: 'Safety',
    color: '#FF69B4',
    description:
      '大脑有800亿到1000亿个神经元，我们对大脑的认知还远远不够。植入电极需要开颅手术，电极长期留在脑中有感染风险。',
    questions: ['长期植入的安全性如何保证？', '设备故障会有什么后果？', '如何应对外部攻击？'],
  },
];

const muskGoals = [
  '治疗失明',
  '治疗失语',
  '治疗精神疾病',
  '治疗失眠',
  '治疗成瘾',
];

const chinaMilestone = {
  date: '2025年12月',
  achievement: '中国国家药品监督管理局签发了全球首个获批用于治疗成瘾类精神疾病的侵入式脑机接口产品注册证。',
};

export default function Chapter5() {
  const [activeEthic, setActiveEthic] = useState('privacy');
  const activeEthicData = ethicsTopics.find((e) => e.id === activeEthic)!;

  return (
    <section id="chapter5" className="relative py-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.3),transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
            <span className="text-xs font-display text-[#39FF14] tracking-wider">CHAPTER 05</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E6ED] mb-4">
            未来与<span className="text-[#39FF14] glow-green">伦理</span>思考
          </h2>
          <p className="text-[#8A92A0] text-lg max-w-2xl mx-auto">
            技术越强大，我们越要谨慎
          </p>
        </div>

        {/* Future Roadmap */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-8 text-center">
            🗺️ 发展路线图
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {roadmap.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box-hover transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${phase.color}15` }}
                >
                  <span
                    className="font-display text-lg font-bold"
                    style={{ color: phase.color }}
                  >
                    {idx + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#E0E6ED] mb-3">{phase.period}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: phase.color }}
                      />
                      <span className="text-[#B8C0CC] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Musk goals */}
          <div className="mt-8 p-6 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <h4 className="text-lg font-bold text-[#E0E6ED]">
                马斯克的野心：BCI治疗目标
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {muskGoals.map((goal, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-[rgba(57,255,20,0.05)] border border-[rgba(57,255,20,0.15)] text-[#B8C0CC] text-sm"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>

          {/* China milestone */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[rgba(255,107,107,0.05)] to-[rgba(57,255,20,0.05)] border border-[rgba(57,255,20,0.15)]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🇨🇳</span>
              <span className="font-display text-sm text-[#39FF14]">{chinaMilestone.date}</span>
            </div>
            <p className="text-[#E0E6ED] font-medium">{chinaMilestone.achievement}</p>
          </div>
        </div>

        {/* Ethics Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-2 text-center">
            🤔 必须面对的伦理问题
          </h3>
          <p className="text-[#8A92A0] text-center mb-8">
            科技发展的方向，不只是科学家的事，也是我们每个人需要参与讨论的事
          </p>

          {/* Ethics topic selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {ethicsTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveEthic(topic.id)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  activeEthic === topic.id
                    ? 'bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.3)] glow-box'
                    : 'bg-[rgba(16,22,32,0.6)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(57,255,20,0.2)]'
                }`}
              >
                <span className="text-3xl block mb-2">{topic.icon}</span>
                <p
                  className={`text-sm font-bold ${
                    activeEthic === topic.id ? 'text-[#39FF14]' : 'text-[#B8C0CC]'
                  }`}
                >
                  {topic.title}
                </p>
                <p className="text-xs text-[#8A92A0] font-display">{topic.english}</p>
              </button>
            ))}
          </div>

          {/* Active ethics detail */}
          <div className="fade-in-up" key={activeEthic}>
            <div
              className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border glow-box transition-all duration-500"
              style={{ borderColor: `${activeEthicData.color}30` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${activeEthicData.color}15` }}
                >
                  {activeEthicData.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#E0E6ED]">{activeEthicData.title}</h4>
                  <p className="font-display text-sm" style={{ color: activeEthicData.color }}>
                    {activeEthicData.english}
                  </p>
                </div>
              </div>

              <p className="text-[#B8C0CC] leading-relaxed text-lg mb-6">
                {activeEthicData.description}
              </p>

              <div className="space-y-3">
                <h5 className="text-sm font-display text-[#8A92A0] tracking-wider">思考题</h5>
                {activeEthicData.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-start gap-3"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${activeEthicData.color}20` }}
                    >
                      <span className="text-xs" style={{ color: activeEthicData.color }}>
                        ?
                      </span>
                    </div>
                    <p className="text-[#E0E6ED]">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
