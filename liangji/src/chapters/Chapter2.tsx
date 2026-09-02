import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Tooltip from '../components/Tooltip';
import CountUpNumber from '../components/CountUpNumber';

export default function Chapter2() {
  const [thrustWeight, setThrustWeight] = useState(50);
  const [runHours, setRunHours] = useState(87600);

  useEffect(() => {
    const timer = setInterval(() => {
      setRunHours(h => h + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ch2" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 02</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              骨子里一样，活法完全不同
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「一个要飞，一个要撑——目标不同，设计从根上就不同」
            </p>
          </div>
        </AnimatedSection>

        {/* Section 1: Seesaw */}
        <AnimatedSection delay={100}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-taupe/10 shadow-sm mb-12">
            <h3 className="font-[Poppins] text-xl md:text-2xl font-bold text-charcoal mb-6 text-center">
              <Tooltip term="推重比" explanation="发动机产生的推力除以自身重量。推重比越高，发动机越能让飞机轻盈地飞起来。">推重比</Tooltip>
              {' '}vs{' '}
              <Tooltip term="热效率" explanation="燃料化学能中，被转化为有用功的比例。100块钱的油，有多少钱变成了电或推力？">热效率</Tooltip>
            </h3>

            {/* Seesaw visual */}
            <div className="relative max-w-lg mx-auto mb-8">
              {/* Rotating group: characters + beam rotate together */}
              <div
                style={{
                  transform: `rotate(${(thrustWeight - 50) * -0.2}deg)`,
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center bottom',
                }}
              >
                {/* Characters */}
                <div className="flex justify-between items-end mb-3 px-4">
                  <div className="text-center flex-1">
                    <div
                      className="text-4xl mb-1 transition-transform duration-500"
                      style={{ transform: `translateY(${(thrustWeight - 50) * 0.3}px)` }}
                    >
                      🧑‍✈️
                    </div>
                    <div className="text-xs font-[Poppins] text-blue font-semibold">航发弟弟</div>
                    <div className="text-[10px] text-taupe mt-1">
                      {thrustWeight > 60 ? '「推重比才是王道！」' : thrustWeight < 40 ? '「热效率也很重要…」' : '「平衡一下…」'}
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <div
                      className="text-4xl mb-1 transition-transform duration-500"
                      style={{ transform: `translateY(${(50 - thrustWeight) * 0.3}px)` }}
                    >
                      👷
                    </div>
                    <div className="text-xs font-[Poppins] text-peach font-semibold">燃机大哥</div>
                    <div className="text-[10px] text-taupe mt-1">
                      {thrustWeight < 40 ? '「热效率才是王道！」' : thrustWeight > 60 ? '「我也要轻一点…」' : '「平衡一下…」'}
                    </div>
                  </div>
                </div>
                {/* Beam */}
                <div className="relative h-3 rounded-full overflow-hidden" style={{ background: 'linear-gradient(to right, #6A9BCC, #D97757)' }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-charcoal rounded-full border-2 border-cream z-10" />
                </div>
              </div>
              {/* Triangle base — fixed, does not rotate */}
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[14px] border-transparent border-t-charcoal" />
              </div>
            </div>

            {/* Slider */}
            <div className="max-w-sm mx-auto">
              <div className="flex justify-between text-xs text-taupe mb-1 font-[Poppins]">
                <span>← 追求推重比</span>
                <span>追求热效率 →</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={thrustWeight}
                onChange={e => setThrustWeight(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #6A9BCC ${thrustWeight}%, #D97757 ${thrustWeight}%)`
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className={`p-4 rounded-xl transition-all ${thrustWeight > 50 ? 'bg-blue/10 border-2 border-blue/30' : 'bg-blue/5 border border-taupe/10'}`}>
                <div className="font-[Poppins] font-semibold text-blue text-sm">航发的设计特征</div>
                <ul className="text-xs text-charcoal/70 mt-2 space-y-1 font-[Lora]">
                  <li>• 用最轻的材料（钛合金、碳纤维）</li>
                  <li>• 尽可能少的级数（减重）</li>
                  <li>• 追求极致推重比：10:1 以上</li>
                  <li>• 允许更高的油耗换取更猛的推力</li>
                </ul>
              </div>
              <div className={`p-4 rounded-xl transition-all ${thrustWeight < 50 ? 'bg-peach/10 border-2 border-peach/30' : 'bg-peach/5 border border-taupe/10'}`}>
                <div className="font-[Poppins] font-semibold text-peach text-sm">燃机的设计特征</div>
                <ul className="text-xs text-charcoal/70 mt-2 space-y-1 font-[Lora]">
                  <li>• 不在乎重量，钢铁尽管堆</li>
                  <li>• 压气机级数多达20+级</li>
                  <li>• 追求每一焦耳热量的利用率</li>
                  <li>• 联合循环把效率推到60%以上</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 62.22% Efficiency Section */}
        <AnimatedSection delay={200}>
          <div className="text-center mb-8">
            <div className="font-[Poppins] text-6xl md:text-8xl font-black text-peach">
              <CountUpNumber end={62.22} decimals={2} suffix="%" duration={2500} />
            </div>
            <p className="font-[Lora] text-charcoal/60 text-sm md:text-base mt-2">
              GE 9HA燃气轮机联合循环效率——人类热机的世界纪录
            </p>
            <p className="font-[Lora] text-charcoal/40 text-xs mt-1 italic">
              你觉得这不算高？——你还不知道热力学给人类划下了哪条死线
            </p>
          </div>
        </AnimatedSection>

        {/* Carnot Efficiency Visualization */}
        <AnimatedSection delay={300}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-taupe/10 shadow-sm mb-12">
            <h3 className="font-[Poppins] text-lg font-bold text-charcoal mb-6 text-center">
              <Tooltip term="卡诺效率" explanation="热力学第二定律告诉我们，热机的效率有一个理论上限，取决于高温热源和低温热源的温度差。这个上限叫卡诺效率，是宇宙的'硬规矩'。">
                卡诺效率
              </Tooltip>
              ：宇宙给人类划的死线
            </h3>

            {/* Temperature scale */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-between text-xs text-taupe mb-2 font-[Poppins]">
                <span>0K（绝对零度）</span>
                <span>288K（常温）</span>
                <span>1873K（燃烧室）</span>
              </div>
              <div className="h-6 rounded-full overflow-hidden relative" style={{
                background: 'linear-gradient(to right, #4A6FA5, #6A9BCC, #B1ADA1, #D97757, #C44D2A)'
              }}>
                <div className="absolute top-0 bottom-0 left-[15.4%] w-px bg-white/70" />
                <div className="absolute -top-5 left-[15.4%] text-[10px] text-white bg-charcoal px-1 rounded">T₂</div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-white/70" />
                <div className="absolute -top-5 right-0 text-[10px] text-white bg-charcoal px-1 rounded">T₁</div>
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-taupe">
                <span>❄️ 冷</span>
                <span>🔥 热</span>
              </div>
            </div>

            {/* Formula */}
            <div className="text-center mb-8">
              <div className="inline-block bg-cream rounded-xl px-6 py-4 border border-taupe/10">
                <div className="font-[Poppins] text-lg md:text-xl text-charcoal">
                  η = 1 − T₂/T₁ = 1 − 288/1873 = <span className="text-peach font-bold text-2xl md:text-3xl">84.6%</span>
                </div>
                <div className="text-xs text-taupe mt-2 font-[Lora]">这是热力学允许的理论极限——上帝的分数</div>
              </div>
            </div>

            {/* Progress bar comparison */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="mb-4">
                <div className="flex justify-between text-xs font-[Poppins] mb-1">
                  <span className="text-charcoal font-semibold">卡诺极限 vs GE实际成绩</span>
                  <span className="text-taupe">兑现率 73.5%</span>
                </div>
                <div className="h-8 bg-cream rounded-full overflow-hidden relative border border-taupe/10">
                  <div className="absolute top-0 bottom-0 left-0 bg-peach/30 rounded-full" style={{ width: '84.6%' }}>
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-red-500 border-r border-dashed border-red-400" />
                  </div>
                  <div className="absolute top-0 bottom-0 left-0 bg-peach rounded-full flex items-center justify-end pr-2" style={{ width: '62.22%' }}>
                    <span className="text-white text-xs font-[Poppins] font-bold">62.22%</span>
                  </div>
                  <div className="absolute top-0 text-[10px] text-red-500 font-[Poppins] font-bold" style={{ left: '84.6%', transform: 'translateX(-50%)', top: '-16px' }}>
                    84.6% 极限
                  </div>
                </div>
              </div>
            </div>

            {/* Bolt analogy */}
            <div className="max-w-2xl mx-auto bg-cream rounded-2xl p-5 border border-taupe/10">
              <h4 className="font-[Poppins] text-sm font-bold text-charcoal mb-4">🏃 博尔特类比：兑现率有多难？</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-[Poppins] mb-1">
                    <span>🏃 博尔特 · 百米短跑</span>
                    <span className="text-green font-bold">兑现率 83%</span>
                  </div>
                  <div className="h-5 bg-white rounded-full overflow-hidden relative">
                    <div className="absolute top-0 bottom-0 left-0 rounded-full" style={{ width: '100%', background: 'linear-gradient(to right, #788C5D20, #788C5D10)' }}>
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-red-400 border-dashed" />
                      <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[9px] text-red-400 font-[Poppins]">极限 8.0s</span>
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 bg-green rounded-full flex items-center justify-end pr-2" style={{ width: '83%' }}>
                      <span className="text-white text-[10px] font-[Poppins] font-bold">9.58s</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-[Poppins] mb-1">
                    <span>⚙️ GE 9HA · 热效率</span>
                    <span className="text-peach font-bold">兑现率 73.5%</span>
                  </div>
                  <div className="h-5 bg-white rounded-full overflow-hidden relative">
                    <div className="absolute top-0 bottom-0 left-0 rounded-full" style={{ width: '100%', background: 'linear-gradient(to right, #D9775720, #D9775710)' }}>
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-red-400" />
                      <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[9px] text-red-400 font-[Poppins]">极限 84.6%</span>
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 bg-peach rounded-full flex items-center justify-end pr-2" style={{ width: '73.5%' }}>
                      <span className="text-white text-[10px] font-[Poppins] font-bold">62.22%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Combined Cycle Animation */}
        <AnimatedSection delay={200}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-taupe/10 shadow-sm mb-12">
            <h3 className="font-[Poppins] text-lg font-bold text-charcoal mb-6 text-center">
              <Tooltip term="联合循环" explanation="燃气轮机发完电后，排出的废热（约500°C）还很烫！用这些废热再烧一遍蒸汽轮机，又能发一轮电。大哥吃肉，小弟喝汤，热量一滴不浪费。">
                联合循环
              </Tooltip>
              ：大哥吃肉，小弟喝汤
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              {/* Gas turbine */}
              <div className="bg-peach/10 rounded-2xl p-5 text-center flex-1 max-w-xs">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="font-[Poppins] font-bold text-peach text-sm">燃气轮机</div>
                <div className="text-xs text-charcoal/60 font-[Lora] mt-1">大哥先吃肉</div>
                <div className="mt-3 text-xs text-charcoal/50 font-[Lora]">
                  燃料燃烧 → 推动涡轮 → <span className="text-peach font-semibold">发电</span>
                </div>
                <div className="mt-2 text-xs text-peach font-[Poppins]">
                  排出 ~500°C 废气 →
                </div>
              </div>

              {/* Flow arrow */}
              <div className="flex flex-col items-center md:flex-row">
                <div className="relative w-16 md:w-24 h-3 md:h-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-peach to-peach-light rounded-full overflow-hidden">
                    <div className="absolute inset-0 animate-flow-right">
                      <div className="w-8 h-full bg-white/40 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-taupe font-[Poppins] mt-1 md:mt-0 md:ml-0">热流</div>
              </div>

              {/* Steam turbine */}
              <div className="bg-blue/10 rounded-2xl p-5 text-center flex-1 max-w-xs">
                <div className="text-4xl mb-2">🌀</div>
                <div className="font-[Poppins] font-bold text-blue text-sm">蒸汽轮机</div>
                <div className="text-xs text-charcoal/60 font-[Lora] mt-1">小弟喝汤</div>
                <div className="mt-3 text-xs text-charcoal/50 font-[Lora]">
                  废热 → 烧水变蒸汽 → <span className="text-blue font-semibold">再发电</span>
                </div>
                <div className="mt-2 text-xs text-green font-[Poppins]">
                  两者相加 = 62.22%
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Golden quote */}
        <AnimatedSection delay={100}>
          <div className="max-w-3xl mx-auto text-center py-8">
            <blockquote className="font-[Lora] text-base md:text-lg text-charcoal leading-relaxed italic">
              「每提升1%效率，一座600MW电厂每年少烧<span className="text-peach font-semibold not-italic">数百万美元</span>的气，少排<span className="text-green font-semibold not-italic">数万吨CO₂</span>。<br className="hidden md:block"/>工程师不是在跟竞争对手较劲——他们是在跟<span className="text-peach font-semibold not-italic">宇宙的基本法则</span>掰手腕。」
            </blockquote>
          </div>
        </AnimatedSection>

        {/* Section 2: Working Environment */}
        <AnimatedSection delay={100}>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Aero engine environment */}
            <div className="bg-blue/5 rounded-2xl p-6 border border-blue/10">
              <h4 className="font-[Poppins] font-bold text-blue text-base mb-4">✈️ 航发的"职场"</h4>
              <img
                src="https://images.pexels.com/photos/1493756/pexels-photo-1493756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=250&w=500"
                alt="飞机飞行"
                className="rounded-xl w-full h-36 object-cover mb-4"
                loading="lazy"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-lg">🌡️</span>
                  <span className="font-[Lora] text-charcoal/70">地面 +40°C ↔ 高空 -56°C，反复折腾</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-lg">🐦</span>
                  <span className="font-[Lora] text-charcoal/70">鸟撞、冰雹、火山灰——随时来</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-lg">🔄</span>
                  <span className="font-[Lora] text-charcoal/70">每次飞行：热→冷→热 循环疲劳</span>
                </div>
                {/* Fatigue waveform */}
                <div className="mt-3">
                  <svg viewBox="0 0 200 40" className="w-full h-8">
                    <path d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20" 
                      stroke="#6A9BCC" strokeWidth="2" fill="none"/>
                    <text x="10" y="10" fill="#6A9BCC" fontSize="6" fontFamily="Poppins">热</text>
                    <text x="60" y="38" fill="#6A9BCC" fontSize="6" fontFamily="Poppins">冷</text>
                    <text x="110" y="10" fill="#6A9BCC" fontSize="6" fontFamily="Poppins">热</text>
                    <text x="160" y="38" fill="#6A9BCC" fontSize="6" fontFamily="Poppins">冷</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Gas turbine environment */}
            <div className="bg-peach/5 rounded-2xl p-6 border border-peach/10">
              <h4 className="font-[Poppins] font-bold text-peach text-base mb-4">🏭 燃机的"职场"</h4>
              <img
                src="https://images.pexels.com/photos/31516243/pexels-photo-31516243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=250&w=500"
                alt="发电厂"
                className="rounded-xl w-full h-36 object-cover mb-4"
                loading="lazy"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-lg">🌡️</span>
                  <span className="font-[Lora] text-charcoal/70">空气经过滤再进入，干净可控</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-lg">⏱️</span>
                  <span className="font-[Lora] text-charcoal/70">
                    已连续运行：<span className="font-[Poppins] text-peach font-bold">{runHours.toLocaleString()}</span> 小时
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-lg">🔧</span>
                  <span className="font-[Lora] text-charcoal/70">每隔数万小时才需大修一次</span>
                </div>
                <div className="mt-3 bg-peach/10 rounded-lg p-3">
                  <div className="text-xs text-charcoal/60 font-[Lora]">
                    稳定、持久、可预测——就像一台不知疲倦的劳模
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 3: Parameter Comparison */}
        <AnimatedSection delay={100}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-taupe/10 shadow-sm">
            <h3 className="font-[Poppins] text-lg font-bold text-charcoal mb-8 text-center">
              📊 关键参数对比
            </h3>

            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                { label: '推重比', aero: 90, gas: 10, aeroLabel: '8~10:1', gasLabel: '不追求', unit: '' },
                { label: '设计寿命', aero: 30, gas: 95, aeroLabel: '~5,000h', gasLabel: '~100,000h', unit: '' },
                { label: '涡轮前温度', aero: 85, gas: 75, aeroLabel: '~2000K', gasLabel: '~1700K', unit: '' },
                { label: '压比', aero: 70, gas: 90, aeroLabel: '30~50:1', gasLabel: '23~25:1', unit: '' },
                { label: '重量关注度', aero: 95, gas: 15, aeroLabel: '极致减重', gasLabel: '无所谓', unit: '' },
                { label: '热效率', aero: 45, gas: 95, aeroLabel: '~40%', gasLabel: '~62%', unit: '' },
              ].map(item => (
                <div key={item.label} className="group">
                  <div className="flex justify-between text-xs font-[Poppins] mb-1.5">
                    <span className="text-charcoal font-medium">{item.label}</span>
                    <span className="text-taupe">{item.unit}</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-blue font-[Poppins] w-8">航发</span>
                      <div className="flex-1 h-4 bg-blue/10 rounded-full overflow-hidden">
                        <div className="h-full bg-blue/60 rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                          style={{ width: `${item.aero}%` }}>
                          <span className="text-[9px] text-white font-[Poppins] font-bold whitespace-nowrap">{item.aeroLabel}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-peach font-[Poppins] w-8">燃机</span>
                      <div className="flex-1 h-4 bg-peach/10 rounded-full overflow-hidden">
                        <div className="h-full bg-peach/60 rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                          style={{ width: `${item.gas}%` }}>
                          <span className="text-[9px] text-white font-[Poppins] font-bold whitespace-nowrap">{item.gasLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
