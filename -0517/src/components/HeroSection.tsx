import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'TURN THOUGHTS INTO ACTION';

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-transparent to-[#0A0E14]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#39FF14] rounded-full float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* Neural network visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 800">
          {/* Neural connections */}
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <line
                x1={100 + Math.random() * 800}
                y1={100 + Math.random() * 600}
                x2={100 + Math.random() * 800}
                y2={100 + Math.random() * 600}
                stroke="#39FF14"
                strokeWidth="0.5"
                opacity={0.3}
              />
              <circle
                cx={100 + Math.random() * 800}
                cy={100 + Math.random() * 600}
                r="2"
                fill="#39FF14"
                className="pulse-node"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Brain icon */}
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 mx-auto rounded-full border-2 border-[#39FF14]/30 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-[#39FF14]/5 animate-pulse" />
            <span className="text-5xl">🧠</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="text-[#E0E6ED]">用意念</span>
          <br />
          <span className="text-[#39FF14] glow-green">控制世界</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-[#8A92A0] mb-4 font-medium">
          脑机接口的奇幻旅程
        </p>

        {/* Typing effect */}
        <div className="mb-8 h-8">
          <span className="font-display text-lg sm:text-xl text-[#39FF14]/70 tracking-widest">
            {typedText}
            <span className="animate-pulse">_</span>
          </span>
        </div>

        {/* Key stat */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.2)] mb-8">
          <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
          <span className="text-sm text-[#B8C0CC]">
            <span className="text-[#39FF14] font-bold">860亿</span> 个神经元 ·{' '}
            <span className="text-[#39FF14] font-bold">60年</span> 的探索历程
          </span>
        </div>

        {/* Scroll hint */}
        <div className="mt-12">
          <button
            onClick={() =>
              document.getElementById('chapter1')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group flex flex-col items-center gap-2 mx-auto"
          >
            <span className="text-sm text-[#8A92A0] group-hover:text-[#39FF14] transition-colors">
              开始探索
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-[#39FF14]/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-[#39FF14] animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
