import { useState } from 'react';

const glossary = [
  { term: 'Brain-Computer Interface (BCI)', chinese: '脑机接口', meaning: '大脑与计算机之间的直接通道' },
  { term: 'Neuron', chinese: '神经元', meaning: '大脑的基本功能单位' },
  { term: 'Electrode', chinese: '电极', meaning: '采集或传输电信号的导体' },
  { term: 'Motor Cortex', chinese: '运动皮层', meaning: '控制身体运动的大脑区域' },
  { term: 'Neural Decoding', chinese: '神经解码', meaning: '把神经信号翻译成指令' },
  { term: 'Invasive / Non-invasive', chinese: '侵入式 / 非侵入式', meaning: '是否需要手术植入' },
  { term: 'Cyborg', chinese: '赛博格', meaning: '半人半机械的生命体' },
  { term: 'Speech Decoding', chinese: '语言解码', meaning: '把大脑中"准备说话"的信号翻译成语言' },
  { term: 'Seamless Control', chinese: '无缝控制', meaning: '意念与动作几乎同步的体验' },
];

const quizQuestions = [
  {
    question: '脑机接口的英文全称是什么？',
    options: [
      'Brain Control Interface',
      'Brain-Computer Interface',
      'Brain Connection Instrument',
      'Brain Channel Integration',
    ],
    correct: 1,
    explanation: 'BCI 的全称是 Brain-Computer Interface，意为"脑-计算机接口"。',
  },
  {
    question: '人类大脑大约有多少个神经元？',
    options: ['86亿', '860亿', '8600亿', '8.6万亿'],
    correct: 1,
    explanation: '人类大脑大约有860亿个神经元（Neuron），它们通过电信号和化学信号互相交流。',
  },
  {
    question: '以下哪种脑机接口需要开颅手术？',
    options: ['非侵入式', '半侵入式', '侵入式', '以上都不需要'],
    correct: 2,
    explanation: '侵入式（Invasive）脑机接口需要将电极直接植入大脑皮层，因此需要开颅手术。',
  },
  {
    question: '1963年德尔加多在斗牛场做了什么？',
    options: [
      '用剑斗牛',
      '用遥控器控制公牛停下',
      '给牛做手术',
      '拍摄纪录片',
    ],
    correct: 1,
    explanation: '德尔加多通过遥控器激活植入公牛大脑的装置，让冲向他的公牛瞬间停下。',
  },
  {
    question: '谁被称为"世界上第一个赛博格"？',
    options: ['菲尔·肯尼迪', '何塞·德尔加多', '约翰尼·雷', '诺兰德·阿尔博'],
    correct: 2,
    explanation: '约翰尼·雷（Johnny Ray）在1998年接受了脑机接口植入，被媒体称为"世界上第一个赛博格"。',
  },
  {
    question: 'Neuralink的打字速度可以达到每分钟多少个词？',
    options: ['10个', '20个', '40个', '60个'],
    correct: 2,
    explanation: 'Neuralink的临时报告显示，植入患者使用虚拟键盘打字速度可达每分钟40个词。',
  },
  {
    question: '中国脑机接口系统的端到端延迟压缩到了多少毫秒以内？',
    options: ['200ms', '150ms', '100ms', '50ms'],
    correct: 2,
    explanation: '研究团队把脑机接口系统的端到端延迟压缩到了100毫秒以内，比人体自然神经环路的200ms还快。',
  },
  {
    question: '"Cyborg"这个词来自什么的缩写？',
    options: [
      'Cyber Network Group',
      'Cybernetic Organism',
      'Cyber Operation Robot',
      'Cyborg Origin Brain',
    ],
    correct: 1,
    explanation: 'Cyborg 来自 Cybernetic Organism 的缩写，意为"控制论有机体"，即半人半机械。',
  },
];

export default function SummarySection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (idx: number) => {
    if (showResult) return;
    setSelectedAnswer(idx);
    setShowResult(true);
    if (idx === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section id="summary" className="relative py-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-6">
            <span className="text-xs font-display text-[#39FF14] tracking-wider">SUMMARY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#E0E6ED] mb-4">
            总结与<span className="text-[#39FF14] glow-green">互动</span>
          </h2>
        </div>

        {/* Key quote */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-[rgba(57,255,20,0.08)] to-[rgba(0,191,255,0.08)] border border-[rgba(57,255,20,0.2)] text-center">
          <p className="text-xs font-display text-[#8A92A0] tracking-wider mb-4">今日金句</p>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E0E6ED] mb-4">
            "Turn thoughts into action"
          </blockquote>
          <p className="text-[#39FF14] text-lg">—— 把想法变成行动</p>
          <p className="text-[#8A92A0] mt-4">
            这不只是BrainGate的口号，也可以是我们每个人的座右铭
          </p>
        </div>

        {/* Glossary table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-6 text-center">
            📚 核心概念回顾
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-display text-[#39FF14] tracking-wider rounded-tl-xl">
                    英文术语
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-display text-[#39FF14] tracking-wider">
                    中文
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-display text-[#39FF14] tracking-wider rounded-tr-xl">
                    含义
                  </th>
                </tr>
              </thead>
              <tbody>
                {glossary.map((item, idx) => (
                  <tr key={idx} className="transition-colors">
                    <td className="px-6 py-4 text-[#E0E6ED] font-medium text-sm">{item.term}</td>
                    <td className="px-6 py-4 text-[#39FF14] font-medium">{item.chinese}</td>
                    <td className="px-6 py-4 text-[#B8C0CC]">{item.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quiz section */}
        <div>
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-2 text-center">
            🧪 知识测验
          </h3>
          <p className="text-[#8A92A0] text-center mb-8">测试你今天学到了多少</p>

          {!quizStarted ? (
            <div className="text-center">
              <button
                onClick={() => setQuizStarted(true)}
                className="px-8 py-4 rounded-xl bg-[#39FF14] text-[#0A0E14] font-bold text-lg hover:bg-[#32CD32] transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                开始测验
              </button>
              <p className="text-[#8A92A0] text-sm mt-3">共 {quizQuestions.length} 道题</p>
            </div>
          ) : quizCompleted ? (
            <div className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box text-center">
              <div className="text-6xl mb-4">
                {score >= quizQuestions.length * 0.8
                  ? '🏆'
                  : score >= quizQuestions.length * 0.5
                  ? '👍'
                  : '💪'}
              </div>
              <h4 className="text-3xl font-bold text-[#E0E6ED] mb-2">
                测验完成！
              </h4>
              <p className="text-xl text-[#39FF14] font-bold mb-4">
                得分：{score} / {quizQuestions.length}
              </p>
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <svg className="w-full h-full progress-ring" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(57,255,20,0.1)"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#39FF14"
                    strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - score / quizQuestions.length)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-[#39FF14]">
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </span>
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="px-6 py-3 rounded-xl bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.3)] text-[#39FF14] font-medium hover:bg-[rgba(57,255,20,0.15)] transition-colors"
              >
                重新测验
              </button>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box">
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-[#8A92A0]">
                  第 {currentQuestion + 1} / {quizQuestions.length} 题
                </span>
                <span className="text-sm text-[#39FF14] font-display">得分：{score}</span>
              </div>
              <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.05)] mb-8 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#39FF14] transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question */}
              <h4 className="text-xl font-bold text-[#E0E6ED] mb-6">
                {quizQuestions[currentQuestion].question}
              </h4>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {quizQuestions[currentQuestion].options.map((option, idx) => {
                  const isCorrect = idx === quizQuestions[currentQuestion].correct;
                  const isSelected = idx === selectedAnswer;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        showResult
                          ? isCorrect
                            ? 'bg-[rgba(57,255,20,0.15)] border-[#39FF14] border'
                            : isSelected
                            ? 'bg-[rgba(255,107,107,0.15)] border-[#FF6B6B] border'
                            : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] opacity-50'
                          : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(57,255,20,0.3)] hover:bg-[rgba(57,255,20,0.05)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            showResult && isCorrect
                              ? 'bg-[#39FF14] text-[#0A0E14]'
                              : showResult && isSelected
                              ? 'bg-[#FF6B6B] text-white'
                              : 'bg-[rgba(255,255,255,0.05)] text-[#8A92A0]'
                          }`}
                        >
                          {showResult && isCorrect
                            ? '✓'
                            : showResult && isSelected
                            ? '✗'
                            : String.fromCharCode(65 + idx)}
                        </div>
                        <span
                          className={`${
                            showResult && isCorrect
                              ? 'text-[#39FF14] font-medium'
                              : showResult && isSelected
                              ? 'text-[#FF6B6B]'
                              : 'text-[#B8C0CC]'
                          }`}
                        >
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResult && (
                <div className="p-4 rounded-xl bg-[rgba(57,255,20,0.05)] border-l-4 border-[#39FF14] mb-6 fade-in-up">
                  <p className="text-sm text-[#8A92A0] mb-1">解析</p>
                  <p className="text-[#E0E6ED]">{quizQuestions[currentQuestion].explanation}</p>
                </div>
              )}

              {/* Next button */}
              {showResult && (
                <button
                  onClick={nextQuestion}
                  className="w-full py-3 rounded-xl bg-[#39FF14] text-[#0A0E14] font-bold hover:bg-[#32CD32] transition-colors"
                >
                  {currentQuestion < quizQuestions.length - 1 ? '下一题' : '查看结果'}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Interactive questions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#E0E6ED] mb-2 text-center">
            💭 互动思考题
          </h3>
          <p className="text-[#8A92A0] text-center mb-8">
            这些问题没有标准答案，但值得我们每个人思考
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                question: '如果你能用意念控制一样东西，你最想控制什么？为什么？',
                icon: '🎮',
              },
              {
                question: '你觉得脑机接口用于"治疗疾病"和"增强正常人"，哪个更应该优先发展？',
                icon: '⚖️',
              },
              {
                question: '如果将来脑机接口普及了，你愿意在自己脑袋里植入芯片吗？为什么？',
                icon: '🤔',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)] glow-box-hover transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-[#E0E6ED] font-medium leading-relaxed">{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
