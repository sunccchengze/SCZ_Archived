import { useState } from 'react';

const subjects = [
  { name: '神经科学', english: 'Neuroscience', icon: '🧠', color: '#39FF14', description: '了解大脑是怎么工作的' },
  { name: '电子工程', english: 'Electrical Engineering', icon: '⚡', color: '#00BFFF', description: '设计电路和芯片' },
  { name: '材料科学', english: 'Materials Science', icon: '🔬', color: '#FFD700', description: '研发生物相容的电极材料' },
  { name: '计算机科学', english: 'Computer Science', icon: '💻', color: '#FF69B4', description: '编写算法，训练AI' },
  { name: '医学', english: 'Medicine', icon: '🏥', color: '#FF6B6B', description: '进行临床手术和康复训练' },
];

const quotes = [
  {
    text: '我知道即使手术不成功——甚至出了什么严重问题——也会对后来的人有帮助。无论好坏，他们都会学到些什么，推动技术进步。',
    author: '诺兰德·阿尔博',
    role: 'Neuralink第一位受试者',
  },
  {
    text: '这是我找到答案的唯一方法。',
    author: '菲尔·肯尼迪',
    role: '67岁时在自己脑中植入电极',
  },
  {
    text: '人类正处于进化的转折点，我们离拥有构建自己心智功能的能力已经很近了。',
    author: '何塞·德尔加多',
    role: '1963年斗牛场实验先驱',
  },
];

export default function Chapter6() {
  const [hoveredSubject, setHoveredSubject] = useState<number | null>(null);
  const [activeQuote, setActiveQuote] = useState(0);

  return (
    <section id="chapter6" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
            <span className="text-xs font-display text-[#39FF14] tracking-wider">CHAPTER 06</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E6ED] mb-4">
            给你们的<span className="text-[#39FF14] glow-green">寄语</span>
          </h2>
          <p className="text-[#8A92A0] text-lg max-w-2xl mx-auto">
            也许将来，会有你们中的某位
          </p>
        </div>

        {/* Interdisciplinary learning */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-2 text-center">
            🎓 学习脑机接口需要什么知识？
          </h3>
          <p className="text-[#8A92A0] text-center mb-8">
            脑机接口是一个<span className="text-[#39FF14] font-medium">高度跨学科</span>（Interdisciplinary）的领域
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {subjects.map((subject, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSubject(idx)}
                onMouseLeave={() => setHoveredSubject(null)}
                className={`p-5 rounded-2xl text-center transition-all duration-300 cursor-pointer ${
                  hoveredSubject === idx
                    ? 'bg-[rgba(57,255,20,0.1)] border-[rgba(57,255,20,0.3)] translate-y-[-8px] glow-box'
                    : 'bg-[rgba(16,22,32,0.85)] border-[rgba(57,255,20,0.15)]'
                } border`}
              >
                <div className="text-4xl mb-3">{subject.icon}</div>
                <h4 className="text-sm font-bold text-[#E0E6ED] mb-1">{subject.name}</h4>
                <p className="text-xs font-display text-[#8A92A0] mb-2">{subject.english}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredSubject === idx ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs text-[#B8C0CC] mt-2">{subject.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[rgba(57,255,20,0.05)] to-[rgba(0,191,255,0.05)] border border-[rgba(57,255,20,0.15)] text-center">
            <p className="text-[#E0E6ED] text-lg">
              不管你现在喜欢<span className="text-[#39FF14] font-bold">物理、化学、生物</span>还是
              <span className="text-[#00BFFF] font-bold">计算机</span>，都可以成为未来脑机接口团队的一员。
            </p>
          </div>
        </div>

        {/* Scientific spirit */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-2 text-center">
            🔥 关于"科学精神"
          </h3>
          <p className="text-[#8A92A0] text-center mb-8">
            不是为了名利，而是为了探索未知、帮助他人
          </p>

          {/* Quote carousel */}
          <div className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[rgba(57,255,20,0.1)] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <div className="fade-in-up" key={activeQuote}>
                <blockquote className="text-xl sm:text-2xl text-[#E0E6ED] font-medium italic leading-relaxed mb-4 max-w-3xl mx-auto">
                  "{quotes[activeQuote].text}"
                </blockquote>
                <div>
                  <p className="text-[#39FF14] font-bold">{quotes[activeQuote].author}</p>
                  <p className="text-[#8A92A0] text-sm">{quotes[activeQuote].role}</p>
                </div>
              </div>
            </div>

            {/* Quote navigation */}
            <div className="flex justify-center gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuote(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeQuote === idx
                      ? 'bg-[#39FF14] w-8'
                      : 'bg-[rgba(57,255,20,0.2)] hover:bg-[rgba(57,255,20,0.4)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[rgba(57,255,20,0.08)] to-[rgba(0,191,255,0.08)] border border-[rgba(57,255,20,0.2)]">
            <div className="text-5xl mb-4">🌟</div>
            <p className="text-xl text-[#E0E6ED] font-bold mb-2">
              也许在座的某位同学
            </p>
            <p className="text-xl text-[#39FF14] font-bold glow-green">
              将来会加入这个行列
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
