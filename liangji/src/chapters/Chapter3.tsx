import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import CountUpNumber from '../components/CountUpNumber';

function GateCard({ number, title, emoji, children }: { number: string; title: string; emoji: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-taupe/10 shadow-sm overflow-hidden mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center gap-4 hover:bg-cream/50 transition-colors text-left"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-peach/10 flex items-center justify-center">
          <span className="text-2xl">{emoji}</span>
        </div>
        <div className="flex-1">
          <div className="text-xs text-peach font-[Poppins] font-semibold">{number}</div>
          <div className="font-[Poppins] font-bold text-charcoal text-base md:text-lg">{title}</div>
        </div>
        <div className={`text-peach transition-transform duration-300 text-lg ${open ? 'rotate-180' : ''}`}>▼</div>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-taupe/5 pt-4 animate-[fade-in-up_0.3s_ease]">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Chapter3() {
  const [crystalMode, setCrystalMode] = useState<'multi' | 'single'>('multi');

  return (
    <section id="ch3" className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 03</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              为什么这么难
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「三道关，每一道都是人类工程能力的极限」
            </p>
          </div>
        </AnimatedSection>

        {/* Gate 1: Materials */}
        <AnimatedSection delay={100}>
          <GateCard number="关卡一" title="材料——在地狱里求生存" emoji="🔥">
            {/* Temperature shock */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                {/* Thermometer */}
                <div className="relative h-64 w-8 mx-auto bg-gradient-to-t from-blue/20 via-peach/30 to-red-500/40 rounded-full overflow-hidden border border-taupe/20">
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-peach to-red-500 rounded-full transition-all duration-1000" style={{ height: '85%' }}>
                    <div className="absolute top-0 left-full ml-3 whitespace-nowrap">
                      <span className="text-[10px] text-red-500 font-[Poppins] font-bold">2000°C+ 工作温度</span>
                    </div>
                  </div>
                  {/* Reference marks */}
                  <div className="absolute bottom-[50%] right-full mr-3 whitespace-nowrap text-right">
                    <span className="text-[10px] text-taupe font-[Poppins]">🌋 岩浆 1200°C</span>
                  </div>
                  <div className="absolute bottom-[62%] right-full mr-3 whitespace-nowrap text-right">
                    <span className="text-[10px] text-taupe font-[Poppins]">🔩 钢铁熔点 1500°C</span>
                  </div>
                  <div className="absolute bottom-[70%] left-full ml-3 whitespace-nowrap">
                    <div className="text-[10px] text-red-500 font-[Poppins] font-bold border-b border-dashed border-red-300">
                      ⚠️ 叶片材料熔点线
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="font-[Poppins] font-bold text-charcoal text-lg md:text-xl">
                  叶片的工作温度，<span className="text-peach">超过了它自身材料的熔点</span>
                </p>
                <p className="font-[Lora] text-taupe text-sm mt-1 italic">——它怎么活下来的？</p>
              </div>
            </div>

            {/* Three solutions */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue/5 rounded-xl p-4 border border-blue/10">
                <div className="text-center mb-3">
                  <span className="text-3xl">💨</span>
                  <h5 className="font-[Poppins] font-bold text-sm text-blue mt-1">气膜冷却</h5>
                </div>
                <svg viewBox="0 0 120 80" className="w-full h-16 mb-2">
                  {/* Blade cross section */}
                  <rect x="20" y="10" width="80" height="60" rx="8" fill="#B1ADA1" opacity="0.3" stroke="#B1ADA1"/>
                  {/* Internal cooling channels */}
                  <path d="M40 15 L40 65" stroke="#6A9BCC" strokeWidth="3" strokeDasharray="4,2"/>
                  <path d="M60 15 L60 65" stroke="#6A9BCC" strokeWidth="3" strokeDasharray="4,2"/>
                  <path d="M80 15 L80 65" stroke="#6A9BCC" strokeWidth="3" strokeDasharray="4,2"/>
                  {/* Micro holes */}
                  {[20, 35, 50, 65].map(y => (
                    <g key={y}>
                      <circle cx="100" cy={y} r="2" fill="#6A9BCC"/>
                      <line x1="102" y1={y} x2="115" y2={y-3} stroke="#6A9BCC" strokeWidth="1" opacity="0.5"/>
                    </g>
                  ))}
                  <text x="108" y="78" fill="#6A9BCC" fontSize="6" fontFamily="Poppins">气膜</text>
                </svg>
                <p className="text-[11px] text-charcoal/60 font-[Lora]">
                  在叶片内部开凿数百条微通道，冷空气从微孔喷出，在叶片表面形成一层"冷气薄膜"
                </p>
              </div>

              <div className="bg-peach/5 rounded-xl p-4 border border-peach/10">
                <div className="text-center mb-3">
                  <span className="text-3xl">🛡️</span>
                  <h5 className="font-[Poppins] font-bold text-sm text-peach mt-1">热障涂层</h5>
                </div>
                <svg viewBox="0 0 120 80" className="w-full h-16 mb-2">
                  {/* Base metal */}
                  <rect x="10" y="35" width="100" height="35" rx="4" fill="#B1ADA1" opacity="0.4"/>
                  <text x="60" y="57" textAnchor="middle" fill="#141413" fontSize="7" fontFamily="Poppins">金属基体</text>
                  {/* Ceramic coating */}
                  <rect x="10" y="20" width="100" height="15" rx="4" fill="#F5F0E8" stroke="#D97757" strokeWidth="1"/>
                  <text x="60" y="30" textAnchor="middle" fill="#D97757" fontSize="6" fontFamily="Poppins">陶瓷涂层 TBC</text>
                  {/* Heat arrows blocked */}
                  <path d="M30 5 L30 18" stroke="#C44D2A" strokeWidth="2" markerEnd="url(#arrowRed)"/>
                  <path d="M60 5 L60 18" stroke="#C44D2A" strokeWidth="2"/>
                  <path d="M90 5 L90 18" stroke="#C44D2A" strokeWidth="2"/>
                  <text x="60" y="10" textAnchor="middle" fill="#C44D2A" fontSize="6">🔥 热量</text>
                  {/* Block symbols */}
                  <text x="30" y="18" textAnchor="middle" fill="#D97757" fontSize="8">✕</text>
                  <text x="60" y="18" textAnchor="middle" fill="#D97757" fontSize="8">✕</text>
                  <text x="90" y="18" textAnchor="middle" fill="#D97757" fontSize="8">✕</text>
                </svg>
                <p className="text-[11px] text-charcoal/60 font-[Lora]">
                  在叶片表面喷涂一层氧化钇稳定氧化锆陶瓷，像穿了一层"隔热衣"
                </p>
              </div>

              <div className="bg-green/5 rounded-xl p-4 border border-green/10">
                <div className="text-center mb-3">
                  <span className="text-3xl">💎</span>
                  <h5 className="font-[Poppins] font-bold text-sm text-green mt-1">单晶叶片</h5>
                </div>
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setCrystalMode('multi')}
                    className={`flex-1 text-[10px] py-1 rounded-lg font-[Poppins] transition-colors ${crystalMode === 'multi' ? 'bg-red-100 text-red-600 font-bold' : 'bg-gray-100 text-taupe'}`}
                  >
                    多晶 ✕
                  </button>
                  <button
                    onClick={() => setCrystalMode('single')}
                    className={`flex-1 text-[10px] py-1 rounded-lg font-[Poppins] transition-colors ${crystalMode === 'single' ? 'bg-green/20 text-green font-bold' : 'bg-gray-100 text-taupe'}`}
                  >
                    单晶 ✓
                  </button>
                </div>
                <svg viewBox="0 0 120 60" className="w-full h-12 mb-2">
                  {crystalMode === 'multi' ? (
                    <g>
                      {/* Multi-crystal with grain boundaries */}
                      <rect x="10" y="5" width="100" height="50" rx="6" fill="#B1ADA1" opacity="0.2" stroke="#B1ADA1"/>
                      <path d="M30 5 L40 30 L25 55" stroke="#C44D2A" strokeWidth="1" opacity="0.7"/>
                      <path d="M60 5 L50 25 L65 45 L55 55" stroke="#C44D2A" strokeWidth="1" opacity="0.7"/>
                      <path d="M85 5 L90 30 L80 55" stroke="#C44D2A" strokeWidth="1" opacity="0.7"/>
                      <text x="60" y="32" textAnchor="middle" fill="#C44D2A" fontSize="6" fontFamily="Poppins">晶界=弱点</text>
                    </g>
                  ) : (
                    <g>
                      {/* Single crystal - uniform */}
                      <rect x="10" y="5" width="100" height="50" rx="6" fill="#788C5D" opacity="0.15" stroke="#788C5D"/>
                      <text x="60" y="32" textAnchor="middle" fill="#788C5D" fontSize="6" fontFamily="Poppins">完整单晶=超强</text>
                    </g>
                  )}
                </svg>
                <p className="text-[11px] text-charcoal/60 font-[Lora]">
                  {crystalMode === 'multi'
                    ? '多晶金属有晶界，高温下晶界是裂纹的起点，容易断裂'
                    : '单晶：整片叶片只有一个晶粒，没有弱点，抗蠕变性能暴增'}
                </p>
              </div>
            </div>

            {/* CMC */}
            <div className="bg-cream rounded-xl p-4 border border-taupe/10">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🆕</span>
                <div>
                  <h5 className="font-[Poppins] font-bold text-sm text-charcoal">CMC陶瓷基复合材料——下一代革命</h5>
                  <p className="text-xs text-charcoal/60 font-[Lora] mt-1">
                    密度仅为镍基合金的<span className="text-peach font-semibold">1/3</span>，耐温更高，且不需要冷却。
                    GE已在LEAP发动机中使用CMC涡轮罩环，减重、提效一举两得。
                  </p>
                </div>
              </div>
            </div>
          </GateCard>
        </AnimatedSection>

        {/* Gate 2: Manufacturing */}
        <AnimatedSection delay={200}>
          <GateCard number="关卡二" title="制造——精密到令人窒息" emoji="🔬">
            <h4 className="font-[Poppins] font-bold text-charcoal text-sm mb-4">失蜡法精密铸造——每一步都不能出错</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { step: '①', title: '蜡模制作', desc: '注入蜡液，内含陶瓷芯，形成冷却通道模型', icon: '🕯️', color: 'bg-yellow-50 border-yellow-200' },
                { step: '②', title: '浇陶瓷外壳', desc: '在蜡模外层层浇淋陶瓷浆料，烘干成型', icon: '🏺', color: 'bg-orange-50 border-orange-200' },
                { step: '③', title: '脱蜡', desc: '高温加热，蜡液流出，留下空腔', icon: '♨️', color: 'bg-red-50 border-red-200' },
                { step: '④', title: '灌注金属液', desc: '将熔融镍基合金灌入空腔，冷却凝固', icon: '🔩', color: 'bg-gray-50 border-gray-200' },
              ].map(item => (
                <div key={item.step} className={`${item.color} border rounded-xl p-3 text-center`}>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="font-[Poppins] font-bold text-xs text-charcoal">{item.step} {item.title}</div>
                  <p className="text-[10px] text-charcoal/50 font-[Lora] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Precision data */}
            <div className="bg-cream rounded-xl p-4 border border-taupe/10 mb-4">
              <div className="text-center">
                <p className="font-[Poppins] font-bold text-charcoal text-sm">叶片内部冷却通道直径</p>
                <p className="font-[Poppins] text-3xl font-black text-peach mt-1">
                  {'< '}
                  <CountUpNumber end={1} suffix="mm" duration={1500} />
                </p>
                <p className="text-xs text-taupe font-[Lora] mt-1">
                  比一根头发丝（约0.07mm）粗不了多少——在金属内部雕刻如此精细的通道
                </p>
              </div>
            </div>

            {/* 3D Printing */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <img
                src="https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400"
                alt="3D打印金属零件"
                className="rounded-xl w-full md:w-48 h-32 object-cover"
                loading="lazy"
              />
              <div>
                <h5 className="font-[Poppins] font-bold text-sm text-charcoal">🖨️ 3D打印（增材制造）</h5>
                <p className="text-xs text-charcoal/60 font-[Lora] mt-1">
                  GE用3D打印把原来的<span className="text-peach font-semibold">20个零件合成1个</span>燃油喷嘴，
                  <span className="text-peach font-semibold">减重25%</span>，耐用性提升5倍。
                  这是制造技术的革命。
                </p>
              </div>
            </div>
          </GateCard>
        </AnimatedSection>

        {/* Gate 3: Design System */}
        <AnimatedSection delay={300}>
          <GateCard number="关卡三" title="设计体系——这才是最深的鸿沟" emoji="🧠">
            {/* Two paths */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green/5 rounded-xl p-5 border border-green/10">
                <h5 className="font-[Poppins] font-bold text-green text-sm mb-3">✅ 正向设计之路</h5>
                <div className="space-y-2">
                  {['需求分析', '理论模型', '数据库积累', '设计迭代', '试验验证', '持续改进'].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green/20 flex items-center justify-center text-[10px] font-[Poppins] text-green font-bold">
                        {i + 1}
                      </div>
                      <span className="text-xs font-[Lora] text-charcoal/70">{step}</span>
                      {i < 5 && <span className="text-green/30 text-xs">→</span>}
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <span className="text-2xl">🏔️</span>
                  <p className="text-[10px] text-green font-[Poppins] font-semibold">稳步登顶</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h5 className="font-[Poppins] font-bold text-red-500 text-sm mb-3">❌ 逆向仿制之路</h5>
                <div className="space-y-2">
                  {['拆解样品', '测量尺寸', '复制外形', '遇到新需求', '？？？'].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-[Poppins] font-bold ${
                        i < 3 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-500'
                      }`}>
                        {i < 4 ? i + 1 : '!'}
                      </div>
                      <span className={`text-xs font-[Lora] ${i >= 3 ? 'text-red-400' : 'text-charcoal/70'}`}>{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <span className="text-2xl">🧗</span>
                  <p className="text-[10px] text-red-400 font-[Poppins] font-semibold">走到悬崖边——无法继续</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="bg-charcoal/5 rounded-xl p-5 border-l-4 border-peach mb-6">
              <p className="font-[Lora] text-charcoal/80 text-sm italic leading-relaxed">
                「你只知道它<span className="text-peach font-semibold">'是什么样'</span>，不知道它<span className="text-peach font-semibold">'为什么是这样'</span>。
                一旦想改进，就无从下手。」
              </p>
            </blockquote>

            {/* Iceberg */}
            <div className="text-center">
              <h5 className="font-[Poppins] font-bold text-sm text-charcoal mb-4">🧊 冰山模型：巨头的真正壁垒</h5>
              <div className="relative max-w-xs mx-auto">
                {/* Above water */}
                <div className="bg-peach/10 rounded-t-2xl p-4 border border-peach/20 border-b-0">
                  <div className="text-2xl mb-1">✈️</div>
                  <div className="text-xs font-[Poppins] font-bold text-peach">水面上：发动机产品</div>
                  <div className="text-[10px] text-taupe font-[Lora]">外界看到的成品</div>
                </div>
                {/* Water line */}
                <div className="h-1 bg-blue/40 relative">
                  <span className="absolute right-2 -top-3 text-[10px] text-blue font-[Poppins]">~水面~</span>
                </div>
                {/* Below water */}
                <div className="bg-blue/10 rounded-b-2xl p-4 border border-blue/20 border-t-0">
                  <div className="space-y-1 text-[11px] font-[Lora] text-charcoal/60">
                    <div>📊 几十年试验数据库</div>
                    <div>📐 设计准则与规范</div>
                    <div>💻 自研仿真软件</div>
                    <div>🔄 设计-试验-改进闭环</div>
                    <div>👨‍🔬 人才梯队与经验传承</div>
                  </div>
                  <div className="text-[10px] text-blue font-[Poppins] font-bold mt-2">
                    这才是真正的壁垒
                  </div>
                </div>
              </div>
            </div>
          </GateCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
