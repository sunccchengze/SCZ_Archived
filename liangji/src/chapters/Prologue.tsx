import { useEffect, useState } from 'react';

export default function Prologue() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <section id="prologue" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Crown SVG */}
      <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <svg viewBox="0 0 400 280" className="w-64 md:w-80 lg:w-96 mx-auto" fill="none">
          {/* Crown body */}
          <path d="M60 200 L80 100 L140 150 L200 60 L260 150 L320 100 L340 200 Z" 
            fill="#D97757" fillOpacity="0.15" stroke="#D97757" strokeWidth="3" strokeLinejoin="round"/>
          {/* Crown base */}
          <rect x="50" y="200" width="300" height="30" rx="6" fill="#D97757" fillOpacity="0.2" stroke="#D97757" strokeWidth="2"/>
          {/* Crown jewel decorations */}
          <circle cx="200" cy="85" r="6" fill="#D97757" opacity="0.6"/>
          <circle cx="140" cy="145" r="5" fill="#D97757" opacity="0.4"/>
          <circle cx="260" cy="145" r="5" fill="#D97757" opacity="0.4"/>
          
          {/* Left gem - blue (Gas Turbine) */}
          <g>
            <ellipse cx="130" cy="175" rx="20" ry="15" fill="#6A9BCC" opacity="0.2">
              <animate attributeName="rx" values="20;24;20" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="ry" values="15;18;15" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="130" cy="175" rx="16" ry="12" fill="#6A9BCC" opacity="0.8"/>
            <ellipse cx="130" cy="175" rx="8" ry="6" fill="white" opacity="0.35"/>
          </g>
          
          {/* Right gem - orange (Aero Engine) */}
          <g>
            <ellipse cx="270" cy="175" rx="20" ry="15" fill="#D97757" opacity="0.2">
              <animate attributeName="rx" values="20;24;20" dur="2s" begin="1s" repeatCount="indefinite"/>
              <animate attributeName="ry" values="15;18;15" dur="2s" begin="1s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" begin="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="270" cy="175" rx="16" ry="12" fill="#D97757" opacity="0.8"/>
            <ellipse cx="270" cy="175" rx="8" ry="6" fill="white" opacity="0.35"/>
          </g>
          
          {/* Center gem */}
          <path d="M195 155 L200 140 L205 155 L215 160 L205 165 L200 180 L195 165 L185 160 Z" 
            fill="#D97757" opacity="0.7"/>

          {/* Labels */}
          <text x="130" y="245" textAnchor="middle" fill="#6A9BCC" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="500">燃气轮机</text>
          <text x="270" y="245" textAnchor="middle" fill="#D97757" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="500">航空发动机</text>
        </svg>
      </div>

      {/* Title */}
      <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h1 className="font-[Poppins] text-5xl md:text-7xl lg:text-8xl font-black text-charcoal tracking-tight">
          「两机」
        </h1>
        <p className="font-[Lora] text-lg md:text-xl text-charcoal/80 mt-4 italic">
          人类工业皇冠上最亮的两颗明珠
        </p>
        <p className="font-[Lora] text-sm md:text-base text-taupe mt-3 max-w-lg mx-auto leading-relaxed">
          ——航空发动机与燃气轮机，到底是什么关系？难在哪里？
        </p>
      </div>

      {/* Course badge */}
      <div className={`mt-8 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="inline-flex items-center gap-2 bg-peach/10 text-peach px-4 py-2 rounded-full text-sm font-[Poppins] font-medium">
          <span>📖</span> 御风记 · 课后延伸阅读
        </span>
      </div>

      {/* XJTU logo - bottom right */}
      <div className="absolute bottom-20 right-6 md:right-10 opacity-[0.85]">
        <img 
          src="/images/校徽.png" 
          alt="西安交通大学" 
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 text-taupe">
          <span className="text-xs font-[Poppins]">向下滚动</span>
          <svg className="w-5 h-5 animate-float-down" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
