import AnimatedSection from '../components/AnimatedSection';

const policies = [
  { year: '2012', event: '设立"两机"重大专项', icon: '⚙️', accent: false },
  { year: '2015', event: '写入政府工作报告 + 《中国制造2025》', icon: '📋', accent: true },
  { year: '2016', event: '中国航空发动机集团（AECC）正式成立', icon: '✈️', accent: true },
  { year: '十三五', event: '全面启动重大专项，批量投入研发资金', icon: '🔬', accent: false },
  { year: '十四五', event: '关键核心技术攻关，国产化率稳步提升', icon: '🏗️', accent: false },
  { year: '十五五', event: '持续推进，瞄准世界先进水平', icon: '🎯', accent: true },
];

export default function Chapter6() {
  return (
    <section id="ch6" className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 06</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              政策与国家意志
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「举国之力，只为造好这两台机器」
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {policies.map((p, i) => (
            <AnimatedSection key={p.year} delay={i * 100}>
              <div className={`rounded-2xl p-5 md:p-6 border flex items-center gap-4 transition-all hover:shadow-md ${
                p.accent ? 'bg-peach/5 border-peach/20' : 'bg-white border-taupe/10'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  p.accent ? 'bg-peach/10' : 'bg-cream'
                }`}>
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <div className="flex-1">
                  <div className={`font-[Poppins] font-black text-xl md:text-2xl ${p.accent ? 'text-peach' : 'text-charcoal'}`}>
                    {p.year}
                  </div>
                  <p className="font-[Lora] text-sm text-charcoal/70 mt-0.5">{p.event}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
