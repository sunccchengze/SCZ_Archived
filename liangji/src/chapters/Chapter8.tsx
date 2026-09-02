import AnimatedSection from '../components/AnimatedSection';

export default function Chapter8() {
  return (
    <section id="ch8" className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 08</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              MRO与全寿命
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「买它花几千万，养它花几个亿」
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-taupe/10 shadow-sm">
            {/* Donut chart */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-48 flex-shrink-0">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#B1ADA120" strokeWidth="16"/>
                  {/* Purchase cost - small slice */}
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#6A9BCC" strokeWidth="16"
                    strokeDasharray={`${0.2 * 314} ${0.8 * 314}`}
                    strokeDashoffset="78.5"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Maintenance cost - large slice */}
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#D97757" strokeWidth="16"
                    strokeDasharray={`${0.8 * 314} ${0.2 * 314}`}
                    strokeDashoffset={78.5 - 0.2 * 314}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Center text */}
                  <text x="60" y="56" textAnchor="middle" fill="#141413" fontSize="10" fontFamily="Poppins" fontWeight="bold">全寿命</text>
                  <text x="60" y="68" textAnchor="middle" fill="#141413" fontSize="10" fontFamily="Poppins" fontWeight="bold">成本</text>
                </svg>
                {/* Legend */}
                <div className="flex justify-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-[10px] font-[Poppins]">
                    <div className="w-3 h-3 rounded bg-blue" />
                    购买 ~20%
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-[Poppins]">
                    <div className="w-3 h-3 rounded bg-peach" />
                    维护 ~80%
                  </div>
                </div>
              </div>

              <div>
                <p className="font-[Lora] text-charcoal/80 text-sm md:text-base leading-relaxed">
                  一台大型航空发动机售价约<span className="text-peach font-bold">2000-3000万美元</span>，
                  但它在30年使用寿命内的维修、翻新、零部件更换成本，可以达到购买价的<span className="text-peach font-bold">4-5倍</span>。
                </p>
                <p className="font-[Lora] text-charcoal/80 text-sm md:text-base leading-relaxed mt-3">
                  这就是为什么发动机厂商愿意<span className="text-peach font-semibold">「赔钱卖发动机」</span>——
                  真正赚钱的是后面几十年的<span className="text-peach font-semibold">维修合同（MRO）</span>。
                  中国在这个领域几乎是空白，建立自主MRO体系是必经之路。
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
