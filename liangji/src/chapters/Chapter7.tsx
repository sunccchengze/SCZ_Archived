import AnimatedSection from '../components/AnimatedSection';

export default function Chapter7() {
  return (
    <section id="ch7" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 07</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              未来往哪走
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「下一步，更热、更轻、更绿」
            </p>
          </div>
        </AnimatedSection>

        {/* Two forking paths */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={100}>
            <div className="bg-blue/5 rounded-2xl p-6 border border-blue/10 h-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">✈️</span>
                <h3 className="font-[Poppins] font-bold text-blue text-lg">航发方向</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '🔄', title: '变循环发动机', desc: '一个发动机，能在涡扇（省油）和涡喷（高速）模式之间自由切换' },
                  { icon: '⚡', title: '电混合推进', desc: '燃气轮机+电动机，像混动汽车一样，兼顾效率和绿色' },
                  { icon: '💧', title: '氢燃料发动机', desc: '用氢气取代航空煤油，排放物只有水蒸气' },
                  { icon: '🧪', title: 'CMC大规模应用', desc: '陶瓷基复合材料全面替代金属，大幅减重提效' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-[Poppins] font-semibold text-sm text-charcoal">{item.title}</div>
                      <p className="text-xs text-charcoal/50 font-[Lora] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-peach/5 rounded-2xl p-6 border border-peach/10 h-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">⚡</span>
                <h3 className="font-[Poppins] font-bold text-peach text-lg">燃机方向</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '🔥', title: '掺氢/纯氢燃烧', desc: '逐步提高氢气掺比，最终实现100%氢燃烧零碳发电' },
                  { icon: '🏭', title: '联合碳捕集', desc: '在发电的同时捕获CO₂，实现近零排放' },
                  { icon: '🤖', title: '数字孪生 + AI', desc: '每台燃机有一个"数字分身"，AI实时优化运行参数' },
                  { icon: '🖥️', title: '为AI数据中心供电', desc: '全球AI爆发，数据中心电力需求暴增——燃机迎来新机遇' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-[Poppins] font-semibold text-sm text-charcoal">{item.title}</div>
                      <p className="text-xs text-charcoal/50 font-[Lora] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Easter egg */}
        <AnimatedSection delay={300}>
          <div className="bg-charcoal rounded-2xl p-6 md:p-8 text-center">
            <p className="font-[Lora] text-cream/90 text-sm md:text-base leading-relaxed">
              🤫 彩蛋：全球AI爆发，数据中心用电量激增——
            </p>
            <p className="font-[Poppins] font-bold text-peach-light text-lg md:text-xl mt-2">
              燃气轮机，意外成了AI时代的「幕后英雄」
            </p>
            <div className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-center">
              <img
                src="https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=300"
                alt="数据中心"
                className="rounded-xl w-full md:w-48 h-28 object-cover"
                loading="lazy"
              />
              <div className="text-cream/50 text-3xl">+</div>
              <img
                src="https://images.pexels.com/photos/27647540/pexels-photo-27647540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=300"
                alt="燃气轮机"
                className="rounded-xl w-full md:w-48 h-28 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
