import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function Chapter1() {
  const [showSubTypes, setShowSubTypes] = useState(false);
  const [cycleStep, setCycleStep] = useState(0);

  const cycleSteps = [
    { label: '吸气', icon: '💨', desc: '大量空气被吸入', color: 'bg-blue/20 text-blue' },
    { label: '压缩', icon: '🔧', desc: '压气机叶片高速旋转压缩空气', color: 'bg-green/20 text-green' },
    { label: '燃烧', icon: '🔥', desc: '喷入燃料，点火，温度飙升', color: 'bg-peach/20 text-peach' },
    { label: '膨胀', icon: '💥', desc: '高温高压燃气喷出，推动涡轮', color: 'bg-peach/30 text-peach' },
  ];

  return (
    <section id="ch1" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 01</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              两兄弟的前世今生
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「同一个爹妈生的，但活法完全不同」
            </p>
          </div>
        </AnimatedSection>

        {/* Character Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={100}>
            <div className="bg-blue/10 rounded-2xl p-6 md:p-8 border border-blue/20 h-full">
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">🧑‍✈️</div>
                <div className="inline-block bg-blue/20 text-blue px-4 py-1 rounded-full text-sm font-[Poppins] font-semibold">
                  航空发动机——飞行员弟弟
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {['身材轻盈', '爆发力强', '万米高空'].map(tag => (
                  <span key={tag} className="bg-white/60 text-charcoal px-3 py-1 rounded-full text-xs font-[Poppins]">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-center text-charcoal/70 font-[Lora] text-sm italic">
                「把飞机推上天，是他的使命」
              </p>
              <img
                src="https://images.pexels.com/photos/11213147/pexels-photo-11213147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500"
                alt="航空发动机"
                className="mt-4 rounded-xl w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-peach/10 rounded-2xl p-6 md:p-8 border border-peach/20 h-full">
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">👷</div>
                <div className="inline-block bg-peach/20 text-peach px-4 py-1 rounded-full text-sm font-[Poppins] font-semibold">
                  燃气轮机——劳模哥哥
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {['持久耐用', '热效率极致', '蹲地上不动'].map(tag => (
                  <span key={tag} className="bg-white/60 text-charcoal px-3 py-1 rounded-full text-xs font-[Poppins]">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-center text-charcoal/70 font-[Lora] text-sm italic">
                「发电、驱舰、供能，是他的职责」
              </p>
              <img
                src="https://images.pexels.com/photos/31516243/pexels-photo-31516243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500"
                alt="燃气轮机电厂"
                className="mt-4 rounded-xl w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Brayton Cycle connector */}
        <AnimatedSection delay={300}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-cream border-2 border-peach/30 rounded-full px-6 py-3">
              <span className="text-blue text-xl">🔵</span>
              <span className="font-[Poppins] font-semibold text-charcoal text-sm md:text-base">
                布雷顿循环：同一个物理原理
              </span>
              <span className="text-peach text-xl">🟠</span>
            </div>
          </div>

          {/* Brayton Cycle Animation */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-3 mb-4">
              {cycleSteps.map((step, i) => (
                <button
                  key={step.label}
                  onClick={() => setCycleStep(i)}
                  className={`rounded-xl p-3 md:p-4 text-center transition-all duration-300 border-2 ${
                    cycleStep === i ? `${step.color} border-current scale-105 shadow-lg` : 'bg-white border-taupe/20 hover:border-peach/30'
                  }`}
                >
                  <div className="text-2xl md:text-3xl mb-1">{step.icon}</div>
                  <div className="font-[Poppins] font-semibold text-xs md:text-sm">{step.label}</div>
                </button>
              ))}
            </div>
            {/* Flow arrows */}
            <div className="flex items-center justify-center gap-1 mb-3">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 md:w-16 h-1 rounded-full transition-colors ${i <= cycleStep ? 'bg-peach' : 'bg-taupe/20'}`} />
                  {i < 3 && <span className={`text-xs ${i < cycleStep ? 'text-peach' : 'text-taupe/30'}`}>▶</span>}
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal/70 font-[Lora] text-sm">
              {cycleSteps[cycleStep].desc}
            </p>
          </div>
        </AnimatedSection>

        {/* Expandable sub-types */}
        <AnimatedSection delay={400}>
          <div className="mt-10 max-w-3xl mx-auto">
            <button
              onClick={() => setShowSubTypes(!showSubTypes)}
              className="w-full bg-white border border-taupe/20 rounded-xl px-6 py-4 flex items-center justify-between hover:border-peach/40 transition-colors group"
            >
              <span className="font-[Poppins] font-medium text-charcoal text-sm md:text-base">
                🔍 燃气轮机还细分成几个"工种"——点击查看
              </span>
              <span className={`text-peach transition-transform duration-300 ${showSubTypes ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {showSubTypes && (
              <div className="grid md:grid-cols-3 gap-4 mt-4 animate-[fade-in-up_0.4s_ease]">
                <div className="bg-white rounded-xl p-4 border border-taupe/10 shadow-sm">
                  <div className="text-3xl mb-2">🏭</div>
                  <h4 className="font-[Poppins] font-semibold text-sm text-charcoal">重型燃气轮机</h4>
                  <p className="text-xs text-taupe mt-1 font-[Lora]">装在发电厂里，功率可达数百MW，是电网的中坚力量</p>
                  <img
                    src="https://images.pexels.com/photos/27647540/pexels-photo-27647540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=400"
                    alt="发电厂"
                    className="mt-3 rounded-lg w-full h-24 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 border border-taupe/10 shadow-sm">
                  <div className="text-3xl mb-2">🚢</div>
                  <h4 className="font-[Poppins] font-semibold text-sm text-charcoal">舰用燃气轮机</h4>
                  <p className="text-xs text-taupe mt-1 font-[Lora]">装在军舰上，要求启动快、功率密度大、在海上可靠运转</p>
                  <img
                    src="https://images.pexels.com/photos/27815335/pexels-photo-27815335.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=400"
                    alt="驱逐舰"
                    className="mt-3 rounded-lg w-full h-24 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 border border-taupe/10 shadow-sm">
                  <div className="text-3xl mb-2">⛽</div>
                  <h4 className="font-[Poppins] font-semibold text-sm text-charcoal">航改型燃气轮机</h4>
                  <p className="text-xs text-taupe mt-1 font-[Lora]">航发改装而来，用于油气田、管道加压站等工业场景</p>
                  <img
                    src="https://images.pexels.com/photos/2566844/pexels-photo-2566844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=400"
                    alt="工业场景"
                    className="mt-3 rounded-lg w-full h-24 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
