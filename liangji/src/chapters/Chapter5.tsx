import AnimatedSection from '../components/AnimatedSection';
import CountUpNumber from '../components/CountUpNumber';

const milestones = [
  { year: '2002', event: '成为第五个航空发动机生产国', side: 'up' as const },
  { year: '2015', event: '「两机」写入政府工作报告', side: 'up' as const },
  { year: '2016', event: 'AECC（中国航发）成立\n决心可比两弹一星', side: 'down' as const },
  { year: '2022', event: '全国产化F级50MW\n重型燃气轮机发运', side: 'up' as const },
  { year: '2023', event: '首台全国产化\n重型燃机商业运行', side: 'down' as const },
  { year: '2025', event: 'CJ-1000A\n进入适航取证阶段', side: 'up' as const },
];

const starModels = [
  {
    name: '歼-20 + 涡扇-15',
    desc: '中国四代大推，超音速巡航能力的象征',
    icon: '🛩️',
    color: 'bg-blue/10 border-blue/20',
  },
  {
    name: 'C919 + CJ-1000A',
    desc: '民用大涵道比涡扇，2027年目标适航认证',
    quote: '「史坚忠：它的表现好于我最乐观的预期」',
    icon: '✈️',
    color: 'bg-peach/10 border-peach/20',
  },
  {
    name: 'QC280',
    desc: '装在中国海军驱逐舰上——舰用燃机的重大突破',
    icon: '🚢',
    color: 'bg-green/10 border-green/20',
  },
];

export default function Chapter5() {
  return (
    <section id="ch5" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 05</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              中国在哪里
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「我们在追——比你想象的更用力」
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={100}>
          <div className="relative max-w-3xl mx-auto mb-16">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-peach/30 -translate-y-1/2" />
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 relative">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 150}>
                  <div className={`flex flex-col items-center ${m.side === 'up' ? '' : 'flex-col-reverse'}`}>
                    <div className={`text-center ${m.side === 'up' ? 'mb-3' : 'mt-3'}`}>
                      <p className="text-[10px] md:text-xs text-charcoal/60 font-[Lora] leading-tight whitespace-pre-line">{m.event}</p>
                    </div>
                    <div className="relative z-10">
                      <div className="w-8 h-8 rounded-full bg-peach flex items-center justify-center shadow-lg">
                        <span className="text-white text-[8px] font-[Poppins] font-bold">{m.year.slice(2)}</span>
                      </div>
                    </div>
                    <div className={`text-center ${m.side === 'up' ? 'mt-1' : 'mb-1'}`}>
                      <span className="font-[Poppins] font-bold text-xs text-peach">{m.year}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Star Models */}
        <AnimatedSection delay={200}>
          <h3 className="font-[Poppins] text-lg font-bold text-charcoal mb-6 text-center">⭐ 三个明星型号</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {starModels.map(model => (
              <div key={model.name} className={`${model.color} border rounded-2xl p-5`}>
                <div className="text-3xl mb-2">{model.icon}</div>
                <h4 className="font-[Poppins] font-bold text-charcoal text-sm">{model.name}</h4>
                <p className="text-xs text-charcoal/60 font-[Lora] mt-1">{model.desc}</p>
                {model.quote && (
                  <p className="text-[11px] text-peach font-[Lora] italic mt-2">{model.quote}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Localization Progress */}
        <AnimatedSection delay={200}>
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-taupe/10 shadow-sm mb-8">
            <h3 className="font-[Poppins] text-lg font-bold text-charcoal mb-6 text-center">差距的本质：国产化进程</h3>
            
            <div className="max-w-lg mx-auto space-y-4">
              <div>
                <div className="flex justify-between text-xs font-[Poppins] mb-1">
                  <span className="text-charcoal">2020年 国产化率</span>
                  <span className="text-taupe">~40%</span>
                </div>
                <div className="h-6 bg-cream rounded-full overflow-hidden flex">
                  <div className="h-full bg-green/60 rounded-l-full" style={{ width: '40%' }} />
                  <div className="h-full bg-yellow-400/60" style={{ width: '25%' }} />
                  <div className="h-full bg-red-300/60 rounded-r-full" style={{ width: '35%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-[Poppins] mb-1">
                  <span className="text-charcoal">2025年 国产化率</span>
                  <span className="text-peach font-bold">~65%</span>
                </div>
                <div className="h-6 bg-cream rounded-full overflow-hidden flex">
                  <div className="h-full bg-green/70 rounded-l-full" style={{ width: '65%' }} />
                  <div className="h-full bg-yellow-400/60" style={{ width: '15%' }} />
                  <div className="h-full bg-red-300/60 rounded-r-full" style={{ width: '20%' }} />
                </div>
              </div>

              <div className="flex gap-4 text-[10px] font-[Poppins] justify-center mt-2">
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green/60" /> 已国产化</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-yellow-400/60" /> 正在攻克</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-300/60" /> 仍依赖进口</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Golden quote */}
        <AnimatedSection delay={100}>
          <div className="text-center py-8">
            <p className="font-[Lora] text-xl md:text-2xl text-charcoal font-medium leading-relaxed">
              「这场追赶，花了超过
              <span className="text-peach font-bold font-[Poppins]">
                <CountUpNumber end={1200} suffix="亿" duration={2000} />
              </span>
              人民币，举全国之力。」
            </p>
            <p className="font-[Lora] text-base text-taupe mt-2 italic">
              这恰恰说明这条路有多难。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
