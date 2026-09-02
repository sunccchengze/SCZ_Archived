import AnimatedSection from '../components/AnimatedSection';

const universities = [
  { name: '北航', highlight: false },
  { name: '西工大', highlight: false },
  { name: '清华', highlight: false },
  { name: '哈工大', highlight: false },
  { name: '西安交大', highlight: true, specialty: '叶轮机械气动热力学 · 工程热物理 · 热流固耦合' },
];

const numberCards = [
  { number: '1896', label: '西安交通大学建校年份', color: 'text-peach' },
  { number: '1952', label: '叶轮机械研究所前身成立\n中国高校最早的动力机械专业', color: 'text-blue' },
  { number: '全国第一', label: '锅炉、汽轮机、制冷与低温\n专业全部创立于此', color: 'text-green' },
  { number: '2017', label: '西交大教授牵头国家首批\n"两机"重大专项基础研究', color: 'text-peach' },
];

export default function Chapter9() {
  return (
    <section id="ch9" className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 09</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              西安交通大学与这个领域
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「一所在'两机'领域深耕七十年的高校」
            </p>
          </div>
        </AnimatedSection>

        {/* XJTU Logo */}
        <AnimatedSection delay={100}>
          <div className="flex items-center justify-center gap-4 mb-2">
            {/* 校徽 */}
            <img 
              src="/images/校徽.png" 
              alt="西安交通大学校徽" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-contain"
            />
            {/* 横版Logo */}
            <img 
              src="/images/横LOGO.png" 
              alt="西安交通大学" 
              className="h-12 md:h-16 object-contain"
            />
          </div>
          <div className="w-24 h-px bg-peach/40 mx-auto mb-10" />
        </AnimatedSection>

        {/* Number cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {numberCards.map((card, i) => (
            <AnimatedSection key={card.number} delay={i * 100}>
              <div className="bg-white rounded-2xl p-5 border border-taupe/10 shadow-sm text-center h-full">
                <div className={`font-[Poppins] text-2xl md:text-3xl font-black ${card.color}`}>
                  {card.number}
                </div>
                <p className="text-[11px] text-charcoal/60 font-[Lora] mt-2 leading-relaxed whitespace-pre-line">
                  {card.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* University tier */}
        <AnimatedSection delay={200}>
          <div className="bg-white rounded-2xl p-6 border border-taupe/10 shadow-sm mb-10">
            <h4 className="font-[Poppins] font-bold text-charcoal text-sm mb-4 text-center">
              🏫 国内"两机"第一梯队高校
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {universities.map(uni => (
                <div
                  key={uni.name}
                  className={`px-4 py-2 rounded-full text-sm font-[Poppins] font-semibold transition-all ${
                    uni.highlight
                      ? 'bg-peach text-white shadow-lg scale-110'
                      : 'bg-cream text-charcoal/60 border border-taupe/20'
                  }`}
                >
                  {uni.name}
                </div>
              ))}
            </div>
            {universities.find(u => u.highlight)?.specialty && (
              <p className="text-center text-xs text-peach font-[Lora] mt-3 italic">
                西安交大特色：{universities.find(u => u.highlight)!.specialty}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={100}>
          <div className="max-w-2xl mx-auto mb-10">
            <p className="font-[Lora] text-charcoal/70 text-sm md:text-base leading-relaxed text-center">
              从1952年成立叶轮机械专业至今，西安交通大学能源与动力工程学院在热力涡轮机械、工程热物理、制冷与低温等领域培养了数以万计的专业人才，其中不少人已成为中国"两机"事业的骨干力量。2017年，西交大教授牵头承担了国家首批"两机"重大专项基础研究项目，标志着这所高校在该领域的持续深耕与国家战略的紧密结合。
            </p>
          </div>
        </AnimatedSection>

        {/* Golden quote 1 */}
        <AnimatedSection delay={100}>
          <div className="max-w-2xl mx-auto text-center py-8">
            <blockquote className="font-[Lora] text-base md:text-lg text-charcoal leading-loose italic">
              「'两机'之所以难，是因为它是热力学、气动、材料、制造、控制几乎所有工科顶尖技术的<span className="text-peach font-semibold not-italic">极致集成</span>。
              它不是哪一个'卡脖子技术'的问题，而是<span className="text-peach font-semibold not-italic">整个工业体系成熟度</span>的问题。」
            </blockquote>
          </div>
        </AnimatedSection>

        {/* CTA block */}
        <AnimatedSection delay={200}>
          <div className="bg-peach rounded-3xl p-8 md:p-12 text-center">
            <p className="font-[Lora] text-white/90 text-base md:text-lg leading-relaxed">
              好消息是，中国正在以前所未有的力度和决心追赶。
            </p>
            <p className="font-[Poppins] text-white text-xl md:text-2xl font-bold mt-4 leading-relaxed">
              新一代的中国青年，<br/>
              将是实现"两机"自主的关键力量。
            </p>
            <p className="font-[Lora] text-white/80 text-sm mt-4">
              这条路很难，但值得走下去。
            </p>
            <div className="mt-6 text-4xl">🚀</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
