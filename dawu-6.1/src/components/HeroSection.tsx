import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection = ({ onStart }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9d4edd]/20 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00d4ff]/15 rounded-full blur-[200px]" />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#9d4edd]/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9d4edd]/10 border border-[#9d4edd]/30 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#00d4ff] rounded-full pulse-glow" />
          <span className="text-[#c77dff] text-sm font-tech tracking-wide">期末复习讲座</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#e8e8e8] tracking-wider mb-4">
          <span className="block">UNIVERSITY</span>
          <span className="block mt-2 bg-gradient-to-r from-[#9d4edd] via-[#c77dff] to-[#00d4ff] bg-clip-text text-transparent">
            PHYSICS II
          </span>
        </h1>

        {/* Chinese title */}
        <p className="text-xl md:text-2xl text-[#808080] font-tech tracking-[0.2em] mt-6">
          大学物理（下）
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#9d4edd]/50" />
          <div className="w-2 h-2 rotate-45 border border-[#9d4edd]/50" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#9d4edd]/50" />
        </div>

        {/* Description */}
        <p className="text-[#808080] leading-relaxed max-w-xl mx-auto mb-12">
          涵盖相对论、静电场、稳恒磁场、电磁感应等核心章节。
          <br />
          <span className="text-[#c77dff]">高度重复的考点</span> + <span className="text-[#00d4ff]">系统化的复习策略</span>
        </p>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#9d4edd] to-[#7b2cbf] rounded-lg text-white font-tech tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(157,78,221,0.4)]"
        >
          <span className="relative z-10">开始复习</span>
          <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { value: '8', label: '章节' },
            { value: '30+', label: '知识点' },
            { value: '10年', label: '真题覆盖' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-display text-[#00d4ff] glow-text-blue">
                {stat.value}
              </div>
              <div className="text-sm text-[#666] font-tech mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#666] font-tech">SCROLL</span>
        <div className="w-5 h-8 border border-[#666] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#666] rounded-full animate-bounce" />
        </div>
      </div>

      {/* Footer credit */}
      <div className="absolute bottom-8 right-8 text-xs text-[#333] font-tech">
        彭康书院学业辅导与发展中心
      </div>
    </div>
  );
};

export default HeroSection;
