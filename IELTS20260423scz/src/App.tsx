import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('part1')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fluorescentGold = 'text-[#FFF68F]'
  const fluorescentOrange = 'text-[#FFA54D]'
  const fluorescentBlue = 'text-[#87CEFF]'
  const glowGold = 'shadow-[0_0_20px_rgba(255,246,143,0.5)]'
  const glowBlue = 'shadow-[0_0_20px_rgba(135,206,255,0.5)]'

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-['Inter']">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#FFF68F] via-[#FFA54D] to-[#87CEFF] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFF68F] opacity-5 blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FFA54D] opacity-5 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#87CEFF] opacity-5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-['Playfair_Display'] bg-gradient-to-r from-[#FFF68F] via-[#FFA54D] to-[#87CEFF] bg-clip-text text-transparent">
              IELTS Masterclass
            </h1>
            <div className="hidden md:flex items-center gap-8">
              {['part1', 'part2', 'part3'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#FFF68F] ${
                    activeSection === section ? 'text-[#FFF68F]' : 'text-gray-400'
                  }`}
                >
                  {section === 'part1' && 'Part I — 头脑风暴'}
                  {section === 'part2' && 'Part II — 开头段'}
                  {section === 'part3' && 'Part III — 搭配'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
              IELTS Writing Task 2 Complete Guide
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FFF68F] via-[#FFA54D] to-[#87CEFF] bg-clip-text text-transparent">
              IELTS Masterclass
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-['Noto_Serif_SC'] mb-4">
            雅思写作大师课
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide to brainstorming, essay structure, and vocabulary collocations
            <br />
            头脑风暴、文章结构和词汇搭配的完整指南
          </p>
          
          <div className="mt-16 flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection('part1')}
              className={`px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFF68F] via-[#FFA54D] to-[#87CEFF] text-[#0a0a0f] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,246,143,0.4)]`}
            >
              Start Learning — 开始学习
            </button>
          </div>
        </div>
      </section>

      {/* PART I */}
      <section id="part1" className="relative py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#FFF68F]/10 to-[#FFA54D]/10 border border-[#FFF68F]/20 mb-6">
              <span className={`text-sm font-medium ${fluorescentGold}`}>PART I</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold mb-6">
              <span className={fluorescentGold}>Brainstorming Ideas</span>
              <br />
              <span className="text-gray-500">for IELTS Task 2</span>
            </h2>
            <p className="text-xl text-gray-400 font-['Noto_Serif_SC']">
              雅思大作文头脑风暴
            </p>
          </div>

          {/* Essay Question Card */}
          <div 
            className={`relative mb-20 p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 transition-all duration-500 ${hoveredCard === 'question' ? 'border-[#FFF68F]/40 shadow-[0_0_60px_rgba(255,246,143,0.2)]' : ''}`}
            onMouseEnter={() => setHoveredCard('question')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFF68F]/0 via-[#FFF68F]/5 to-[#FFF68F]/0 opacity-0 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FFF68F] shadow-[0_0_10px_#FFF68F]" />
                <h3 className={`text-2xl font-['Playfair_Display'] font-semibold ${fluorescentGold}`}>
                  Essay Question — 作文题目
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-['Playfair_Display'] leading-relaxed mb-6">
                <span className={fluorescentGold}>Some people think</span> it is <span className={fluorescentOrange}>impossible to help all people</span> in the world, so <span className={fluorescentBlue}>governments should only focus on people in their own countries</span>.
              </p>
              <p className="text-xl md:text-2xl font-['Playfair_Display'] leading-relaxed mb-6">
                <span className={fluorescentOrange}>Others believe</span> that <span className={fluorescentBlue}>governments are supposed to make every effort to help other nations and regions</span>.
              </p>
              <p className="text-xl md:text-2xl font-['Playfair_Display'] leading-relaxed">
                <span className={fluorescentGold}>Discuss both views and give your own opinion</span>.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-black/30 border border-white/5">
                <p className="text-lg text-gray-400 font-['Noto_Serif_SC'] leading-relaxed">
                  有些人认为不可能帮助世界上所有的人，因此政府应该只关注本国人。另一些人认为政府应该尽一切努力帮助其他国家和区域。讨论双方观点并给出你自己的意见。
                </p>
              </div>
            </div>
          </div>

          {/* Core Interpretation */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFA54D] shadow-[0_0_10px_#FFA54D]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentOrange}`}>
                1. Core Interpretation of the Question — 题目核心解读
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This essay requires you to <span className={fluorescentGold}>examine two competing perspectives</span>:
              <br />
              这篇文章要求你审视两种相互竞争的观点：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFF68F]/5 to-transparent border border-[#FFF68F]/20">
                <h4 className={`text-lg font-semibold mb-3 ${fluorescentGold}`}>View 1 — 观点一</h4>
                <p className="text-gray-300 leading-relaxed">
                  <span className={fluorescentGold}>Governments should prioritise their own citizens</span> because <span className={fluorescentOrange}>resources are finite</span> and <span className={fluorescentBlue}>domestic obligations come first</span>.
                </p>
                <p className="text-gray-400 mt-3 text-sm">
                  政府应优先考虑本国公民，因为资源有限，国内义务优先。
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#87CEFF]/5 to-transparent border border-[#87CEFF]/20">
                <h4 className={`text-lg font-semibold mb-3 ${fluorescentBlue}`}>View 2 — 观点二</h4>
                <p className="text-gray-300 leading-relaxed">
                  <span className={fluorescentBlue}>Governments should also assist other countries</span> because <span className={fluorescentGold}>global interdependence</span> and <span className={fluorescentOrange}>moral responsibility</span> make international support necessary.
                </p>
                <p className="text-gray-400 mt-3 text-sm">
                  政府也应援助其他国家，因为全球相互依存和道德责任使国际支持成为必要。
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-4">
                A <span className={fluorescentGold}>high-quality response</span> should not drift into vague humanitarian rhetoric. Instead, it should focus on:
                <br />
                高质量的回答不应陷入模糊的人道主义言辞，而应聚焦于：
              </p>
              <ul className="space-y-2">
                {[
                  'public finance and policy priorities — 公共财政与政策优先事项',
                  'moral and legal obligations — 道德与法律义务',
                  'global interdependence — 全球相互依存',
                  'pragmatic limits on state capacity — 国家能力的实际限制'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#FFF68F] mt-1">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* View 1 Brainstorming */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFA54D] shadow-[0_0_10px_#FFA54D]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentOrange}`}>
                2. Brainstorming for View 1 — 观点一头脑风暴
              </h3>
            </div>
            <p className="text-xl text-gray-400 mb-8 font-['Noto_Serif_SC']">
              Governments should focus on their own countries — 政府应专注于本国
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Main Idea A — 主要观点 A',
                  highlight: 'Governments are elected to serve their own citizens first',
                  translation: '政府是选举产生的，应首先为本国公民服务',
                  points: [
                    'A government derives its legitimacy from its electorate. — 政府的合法性源于其选民',
                    'Tax revenue is collected primarily to fund domestic welfare, healthcare, education, infrastructure, and security. — 税收主要用于资助国内福利、医疗、教育、基础设施和安全',
                    'If a state neglects pressing internal problems while funding external causes, it may be perceived as derelict in its primary duty. — 如果国家在资助外部事业时忽视紧迫的内部问题，可能被视为玩忽职守'
                  ],
                  color: 'gold'
                },
                {
                  title: 'Main Idea B — 主要观点 B',
                  highlight: 'Resources are finite and must be allocated strategically',
                  translation: '资源有限，必须战略性分配',
                  points: [
                    'Even affluent countries face budgetary constraints. — 即使是富裕国家也面临预算约束',
                    'Public expenditure must address urgent domestic needs such as housing shortages, unemployment, overstretched hospitals, inflationary pressure. — 公共支出必须解决紧迫的国内需求，如住房短缺、失业、医院超负荷、通胀压力',
                    'Large-scale foreign aid may be politically and economically difficult to justify when domestic hardship persists. — 当国内困难持续时，大规模外援可能在政治和经济上难以证明合理性'
                  ],
                  color: 'orange'
                },
                {
                  title: 'Main Idea C — 主要观点 C',
                  highlight: 'Domestic stability is a prerequisite for external generosity',
                  translation: '国内稳定是对外慷慨的前提',
                  points: [
                    'A country with weak public services or deep internal inequality is less capable of sustaining meaningful international assistance. — 公共服务薄弱或内部不平等严重的国家难以维持有意义的国际援助',
                    'Governments should consolidate economic resilience at home before assuming broader international responsibilities. — 政府应在承担更广泛的国际责任之前巩固国内经济韧性'
                  ],
                  color: 'blue'
                },
                {
                  title: 'Main Idea D — 主要观点 D',
                  highlight: 'Foreign aid is not always effective',
                  translation: '外援并不总是有效',
                  points: [
                    'In some cases, aid is lost through corruption, bureaucratic inefficiency, or weak governance in recipient states. — 在某些情况下，援助因受援国的腐败、官僚低效或治理薄弱而流失',
                    'Critics argue that funds can be squandered without producing durable improvements. — 批评者认为资金可能被浪费而无法产生持久的改善',
                    'Therefore, indiscriminate assistance may be less defensible than targeted domestic spending. — 因此，不加区分的援助可能不如有针对性的国内支出合理'
                  ],
                  color: 'gold'
                }
              ].map((idea, i) => (
                <div 
                  key={i}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${
                    idea.color === 'gold' ? 'from-[#FFF68F]/5 to-transparent border-[#FFF68F]/20' :
                    idea.color === 'orange' ? 'from-[#FFA54D]/5 to-transparent border-[#FFA54D]/20' :
                    'from-[#87CEFF]/5 to-transparent border-[#87CEFF]/20'
                  } border transition-all duration-300 hover:scale-[1.02]`}
                >
                  <h4 className={`text-xl font-semibold mb-4 ${
                    idea.color === 'gold' ? fluorescentGold :
                    idea.color === 'orange' ? fluorescentOrange :
                    fluorescentBlue
                  }`}>
                    {idea.title}
                  </h4>
                  <p className="text-lg text-gray-200 mb-2 font-['Playfair_Display']">
                    <span className={
                      idea.color === 'gold' ? fluorescentGold :
                      idea.color === 'orange' ? fluorescentOrange :
                      fluorescentBlue
                    }>{idea.highlight}</span>
                  </p>
                  <p className="text-gray-400 mb-4 font-['Noto_Serif_SC']">{idea.translation}</p>
                  <ul className="space-y-2">
                    {idea.points.map((point, j) => (
                      <li key={j} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                        <span className={`mt-1 text-xs ${
                          idea.color === 'gold' ? 'text-[#FFF68F]' :
                          idea.color === 'orange' ? 'text-[#FFA54D]' :
                          'text-[#87CEFF]'
                        }`}>◦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sophisticated Examples */}
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#FFF68F]/10 to-transparent border border-[#FFF68F]/30">
              <h4 className={`text-xl font-semibold mb-4 ${fluorescentGold}`}>
                Sophisticated Examples / References — 高级示例/参考
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-300 leading-relaxed">
                  <span className={fluorescentGold}>A government confronting a cost-of-living crisis</span> may prioritise fuel subsidies, healthcare budgets, or pension reform over external aid expansion.
                  <br />
                  <span className="text-gray-400 text-sm">面对生活成本危机的政府可能会优先考虑燃料补贴、医疗预算或养老金改革，而不是扩大外援。</span>
                </li>
                <li className="text-gray-300 leading-relaxed">
                  <span className={fluorescentOrange}>Countries with ageing populations</span> may need to direct substantial expenditure towards social care and pension systems.
                  <br />
                  <span className="text-gray-400 text-sm">人口老龄化的国家可能需要将大量支出用于社会养老和养老金制度。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* View 2 Brainstorming */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#87CEFF] shadow-[0_0_10px_#87CEFF]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentBlue}`}>
                3. Brainstorming for View 2 — 观点二头脑风暴
              </h3>
            </div>
            <p className="text-xl text-gray-400 mb-8 font-['Noto_Serif_SC']">
              Governments should help other nations and regions — 政府应帮助其他国家和区域
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Main Idea A — 主要观点 A',
                  highlight: 'Wealthier nations have a moral responsibility to assist vulnerable populations',
                  translation: '较富裕的国家有道德责任援助弱势群体',
                  points: [
                    'Severe poverty, famine, war, and natural disasters cannot be dismissed simply because they occur beyond national borders. — 严重的贫困、饥荒、战争和自然灾害不能仅仅因为它们发生在国界之外就被忽视',
                    'Human suffering carries ethical significance regardless of geography. — 人类苦难具有伦理意义，与地理位置无关',
                    'Affluent states possess the capacity to save lives and alleviate hardship through aid, medical assistance, and disaster relief. — 富裕国家有能力通过援助、医疗援助和救灾来拯救生命和缓解苦难'
                  ],
                  color: 'blue'
                },
                {
                  title: 'Main Idea B — 主要观点 B',
                  highlight: 'Global problems cannot be solved within national boundaries',
                  translation: '全球问题无法在国界内解决',
                  points: [
                    'Many contemporary challenges are transnational in nature: climate change, pandemics, refugee crises, food insecurity, terrorism. — 许多当代挑战本质上是跨国界的：气候变化、大流行病、难民危机、粮食不安全、恐怖主义',
                    'Assisting other regions is not mere charity; it is a form of enlightened self-interest. — 援助其他地区不仅仅是慈善；这是一种开明的自利',
                    'If poorer countries collapse under these pressures, the repercussions will eventually affect other states as well. — 如果贫穷国家在这些压力下崩溃，后果最终也会影响其他国家'
                  ],
                  color: 'gold'
                },
                {
                  title: 'Main Idea C — 主要观点 C',
                  highlight: 'International assistance promotes long-term global stability',
                  translation: '国际援助促进长期全球稳定',
                  points: [
                    'Supporting economic development, public health, and education abroad can reduce conflict, displacement, and extremism. — 支持国外的经济发展、公共卫生和教育可以减少冲突、流离失所和极端主义',
                    'Preventive aid is often more cost-effective than dealing with the consequences of instability later. — 预防性援助通常比后来处理不稳定后果更具成本效益',
                    'Helping other countries become more resilient contributes to a safer and more prosperous international order. — 帮助其他国家增强韧性有助于建立更安全、更繁荣的国际秩序'
                  ],
                  color: 'orange'
                },
                {
                  title: 'Main Idea D — 主要观点 D',
                  highlight: 'International cooperation strengthens diplomatic relations',
                  translation: '国际合作加强外交关系',
                  points: [
                    'Foreign aid can enhance soft power, trust, and international influence. — 外援可以增强软实力、信任和国际影响力',
                    'Countries that contribute to humanitarian relief or development initiatives often gain goodwill and strategic partnerships. — 参与人道主义救援或发展倡议的国家通常能获得善意和战略伙伴关系',
                    'Such cooperation can later yield economic, diplomatic, and security benefits. — 这种合作后来可以产生经济、外交和安全效益'
                  ],
                  color: 'blue'
                }
              ].map((idea, i) => (
                <div 
                  key={i}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${
                    idea.color === 'gold' ? 'from-[#FFF68F]/5 to-transparent border-[#FFF68F]/20' :
                    idea.color === 'orange' ? 'from-[#FFA54D]/5 to-transparent border-[#FFA54D]/20' :
                    'from-[#87CEFF]/5 to-transparent border-[#87CEFF]/20'
                  } border transition-all duration-300 hover:scale-[1.02]`}
                >
                  <h4 className={`text-xl font-semibold mb-4 ${
                    idea.color === 'gold' ? fluorescentGold :
                    idea.color === 'orange' ? fluorescentOrange :
                    fluorescentBlue
                  }`}>
                    {idea.title}
                  </h4>
                  <p className="text-lg text-gray-200 mb-2 font-['Playfair_Display']">
                    <span className={
                      idea.color === 'gold' ? fluorescentGold :
                      idea.color === 'orange' ? fluorescentOrange :
                      fluorescentBlue
                    }>{idea.highlight}</span>
                  </p>
                  <p className="text-gray-400 mb-4 font-['Noto_Serif_SC']">{idea.translation}</p>
                  <ul className="space-y-2">
                    {idea.points.map((point, j) => (
                      <li key={j} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                        <span className={`mt-1 text-xs ${
                          idea.color === 'gold' ? 'text-[#FFF68F]' :
                          idea.color === 'orange' ? 'text-[#FFA54D]' :
                          'text-[#87CEFF]'
                        }`}>◦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sophisticated Examples */}
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#87CEFF]/10 to-transparent border border-[#87CEFF]/30">
              <h4 className={`text-xl font-semibold mb-4 ${fluorescentBlue}`}>
                Sophisticated Examples / References — 高级示例/参考
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-300 leading-relaxed">
                  <span className={fluorescentBlue}>International vaccine distribution during a pandemic</span> protects not only recipient countries but also the global population by limiting transmission and mutation.
                  <br />
                  <span className="text-gray-400 text-sm">大流行病期间的国际疫苗分配不仅保护受援国家，还通过限制传播和变异保护全球人口。</span>
                </li>
                <li className="text-gray-300 leading-relaxed">
                  <span className={fluorescentGold}>Humanitarian assistance after earthquakes, floods, or armed conflicts</span> can prevent regional instability and mass displacement.
                  <br />
                  <span className="text-gray-400 text-sm">地震、洪水或武装冲突后的人道主义援助可以防止地区不稳定和大规模流离失所。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Balanced Evaluation */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFF68F] shadow-[0_0_10px_#FFF68F]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentGold}`}>
                4. Balanced Evaluation — 平衡评估
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              A <span className={fluorescentGold}>sophisticated essay</span> should acknowledge that both perspectives contain valid reasoning.
              <br />
              一篇精致的文章应承认两种观点都包含合理的推理。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#FFA54D]/10 to-transparent border border-[#FFA54D]/20">
                <h4 className={`text-xl font-semibold mb-4 ${fluorescentOrange}`}>
                  What is persuasive about the first view — 观点一的说服力
                </h4>
                <ul className="space-y-3">
                  {[
                    'Governments do indeed carry a primary obligation towards their citizens. — 政府确实对本国公民负有主要义务',
                    'Public trust depends on visible domestic competence. — 公众信任取决于可见的国内能力',
                    'Unlimited international commitments are unrealistic. — 无限制的国际承诺是不现实的'
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="mt-1 text-xs text-[#FFA54D]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#87CEFF]/10 to-transparent border border-[#87CEFF]/20">
                <h4 className={`text-xl font-semibold mb-4 ${fluorescentBlue}`}>
                  What is persuasive about the second view — 观点二的说服力
                </h4>
                <ul className="space-y-3">
                  {[
                    'Absolute national self-containment is no longer viable in an interconnected world. — 在相互联系的世界中，绝对的国家自给自足已不再可行',
                    'Humanitarian disasters abroad can rapidly become economic, epidemiological, or security problems elsewhere. — 国外的人道主义灾难可能迅速成为其他地方的经济、流行病或安全问题',
                    'Responsible international engagement is both ethical and practical. — 负责任的国际参与既是道德的也是实际的'
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="mt-1 text-xs text-[#87CEFF]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* My Position */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#87CEFF] shadow-[0_0_10px_#87CEFF]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentBlue}`}>
                5. My Position — 我的立场
              </h3>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-[#FFF68F]/10 via-[#FFA54D]/10 to-[#87CEFF]/10 border border-white/20">
              <h4 className={`text-2xl font-semibold mb-6 ${fluorescentGold}`}>
                Recommended opinion — 推荐观点
              </h4>
              <p className="text-xl text-gray-200 leading-relaxed mb-6 font-['Playfair_Display']">
                Governments should <span className={`${fluorescentGold} ${glowGold} px-2 rounded`}>prioritise domestic welfare</span>, but they should <span className={`${fluorescentBlue} ${glowBlue} px-2 rounded`}>not confine themselves exclusively to internal concerns</span>. A prudent government ought to establish a clear hierarchy of obligations: its citizens come first, yet meaningful and well-targeted international assistance remains essential in a globalised world.
              </p>
              <p className="text-gray-400 font-['Noto_Serif_SC'] leading-relaxed mb-8">
                政府应优先考虑国内福利，但不应完全局限于内部事务。审慎的政府应建立明确的义务层级：公民优先，但在全球化世界中，有意义且有针对性的国际援助仍然必不可少。
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { text: 'morally defensible', trans: '道德上站得住脚', color: 'gold' },
                  { text: 'economically realistic', trans: '经济上现实', color: 'orange' },
                  { text: 'politically balanced', trans: '政治上平衡', color: 'blue' },
                  { text: 'analytically nuanced', trans: '分析上细致', color: 'gold' }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl bg-black/30 border border-${item.color === 'gold' ? '#FFF68F' : item.color === 'orange' ? '#FFA54D' : '#87CEFF'}/30 text-center`}>
                    <p className={`font-semibold ${
                      item.color === 'gold' ? fluorescentGold :
                      item.color === 'orange' ? fluorescentOrange :
                      fluorescentBlue
                    }`}>{item.text}</p>
                    <p className="text-sm text-gray-400 mt-1">{item.trans}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thesis Statements */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFA54D] shadow-[0_0_10px_#FFA54D]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentOrange}`}>
                6. Strong Thesis Statements You Can Use — 可用的强力论点句
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  option: 'Option 1 — 选项一',
                  thesis: 'Although governments are unquestionably obliged to safeguard the welfare of their own citizens, I believe they should also provide measured and strategic assistance to other countries, particularly when global crises demand collective action.',
                  translation: '虽然政府毫无疑问有义务保障本国公民的福利，但我认为他们也应该为其他国家提供适度且有战略性的援助，特别是当全球危机需要集体行动时。',
                  color: 'gold'
                },
                {
                  option: 'Option 2 — 选项二',
                  thesis: 'While domestic priorities should remain paramount, it would be short-sighted for governments to disregard the needs of other nations, since international aid often advances both humanitarian goals and long-term national interests.',
                  translation: '虽然国内优先事项应保持首要地位，但政府忽视其他国家的需求是短视的，因为国际援助通常既能推进人道主义目标又能促进长期国家利益。',
                  color: 'orange'
                },
                {
                  option: 'Option 3 — 选项三',
                  thesis: 'In my view, states should neither neglect their own populations nor retreat into narrow nationalism; instead, they should balance domestic responsibilities with carefully targeted support for countries in need.',
                  translation: '在我看来，国家既不应忽视本国人民，也不应退缩到狭隘的民族主义中；相反，他们应在国内责任与对需要国家的精心定向支持之间取得平衡。',
                  color: 'blue'
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${
                    item.color === 'gold' ? 'from-[#FFF68F]/5 to-transparent border-[#FFF68F]/20' :
                    item.color === 'orange' ? 'from-[#FFA54D]/5 to-transparent border-[#FFA54D]/20' :
                    'from-[#87CEFF]/5 to-transparent border-[#87CEFF]/20'
                  } border transition-all duration-300 hover:scale-[1.02]`}
                >
                  <h4 className={`text-lg font-semibold mb-4 ${
                    item.color === 'gold' ? fluorescentGold :
                    item.color === 'orange' ? fluorescentOrange :
                    fluorescentBlue
                  }`}>
                    {item.option}
                  </h4>
                  <p className="text-lg text-gray-200 leading-relaxed mb-4 font-['Playfair_Display']">
                    <span className={
                      item.color === 'gold' ? fluorescentGold :
                      item.color === 'orange' ? fluorescentOrange :
                      fluorescentBlue
                    }>{item.thesis}</span>
                  </p>
                  <p className="text-gray-400 font-['Noto_Serif_SC']">{item.translation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Essay Structure */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFF68F] shadow-[0_0_10px_#FFF68F]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentGold}`}>
                7. Possible Essay Structure — 可能的文章结构
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  section: 'Introduction — 引言',
                  points: [
                    'Paraphrase the question — 改写题目',
                    'State that both views will be discussed — 说明将讨论双方观点',
                    'Present your opinion: domestic priority, but not domestic exclusivity — 提出你的观点：国内优先，但不是国内排他'
                  ],
                  color: 'gold'
                },
                {
                  section: 'Body Paragraph 1 — 主体段 1',
                  points: [
                    'Explain why governments should focus primarily on their own citizens — 解释为什么政府应主要关注本国公民',
                    'Develop points on taxation, electoral responsibility, limited budgets, and internal stability — 展开税收、选举责任、有限预算和内部稳定等要点'
                  ],
                  color: 'orange'
                },
                {
                  section: 'Body Paragraph 2 — 主体段 2',
                  points: [
                    'Explain why governments should help other countries — 解释为什么政府应帮助其他国家',
                    'Develop points on morality, global interdependence, transnational crises, and long-term stability — 展开道德、全球相互依存、跨国危机和长期稳定等要点'
                  ],
                  color: 'blue'
                },
                {
                  section: 'Conclusion — 结论',
                  points: [
                    'Reaffirm that domestic obligations should come first — 重申国内义务应优先',
                    'Emphasise that strategic international assistance remains necessary and beneficial — 强调战略性国际援助仍然必要且有益'
                  ],
                  color: 'gold'
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${
                    item.color === 'gold' ? 'from-[#FFF68F]/5 to-transparent border-[#FFF68F]/20' :
                    item.color === 'orange' ? 'from-[#FFA54D]/5 to-transparent border-[#FFA54D]/20' :
                    'from-[#87CEFF]/5 to-transparent border-[#87CEFF]/20'
                  } border`}
                >
                  <h4 className={`text-lg font-semibold mb-4 ${
                    item.color === 'gold' ? fluorescentGold :
                    item.color === 'orange' ? fluorescentOrange :
                    fluorescentBlue
                  }`}>
                    {item.section}
                  </h4>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className={`mt-1 text-xs ${
                          item.color === 'gold' ? 'text-[#FFF68F]' :
                          item.color === 'orange' ? 'text-[#FFA54D]' :
                          'text-[#87CEFF]'
                        }`}>→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PART II */}
      <section id="part2" className="relative py-32 bg-gradient-to-b from-transparent to-[#0d0d14]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#FFA54D]/10 to-[#87CEFF]/10 border border-[#FFA54D]/20 mb-6">
              <span className={`text-sm font-medium ${fluorescentOrange}`}>PART II</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold mb-6">
              <span className={fluorescentOrange}>Four Introduction Paragraphs</span>
              <br />
              <span className="text-gray-500">Based on the Same Topic</span>
            </h2>
            <p className="text-xl text-gray-400 font-['Noto_Serif_SC']">
              基于同一主题的四个开头段
            </p>
          </div>

          {/* Base Topic */}
          <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-[#FFA54D]/10 via-[#87CEFF]/10 to-[#FFF68F]/10 border border-white/20 text-center">
            <h3 className={`text-2xl font-semibold mb-4 ${fluorescentGold}`}>
              Base Topic — 基础主题
            </h3>
            <p className="text-2xl font-['Playfair_Display'] mb-4">
              <span className={fluorescentBlue}>Studying online</span> is <span className={fluorescentOrange}>far more effective</span> than <span className={fluorescentGold}>attending classes on campus</span>.
            </p>
            <p className="text-gray-400 font-['Noto_Serif_SC']">
              在线学习比参加校园课程有效得多。
            </p>
          </div>

          {/* Four Introductions */}
          <div className="space-y-8">
            {[
              {
                type: 'Introduction 1 — 开头段一',
                questionType: 'To what extent do you agree or disagree? — 你在多大程度上同意或不同意？',
                content: 'In recent years, online education has expanded dramatically, prompting many people to argue that it is considerably more effective than traditional campus-based learning. Although digital platforms offer remarkable flexibility and broader access to educational resources, I do not entirely agree with the claim, as face-to-face instruction still provides irreplaceable academic and social benefits. This essay will argue that while online learning is highly advantageous in certain contexts, it is not universally superior to studying on campus.',
                translation: '近年来，在线教育急剧扩张，促使许多人认为它比传统的校园学习有效得多。虽然数字平台提供了显著的灵活性和更广泛的教育资源获取途径，但我并不完全同意这一说法，因为面对面教学仍然提供不可替代的学术和社交益处。本文将论证，虽然在线学习在某些背景下非常有利，但它并非普遍优于校园学习。',
                color: 'gold'
              },
              {
                type: 'Introduction 2 — 开头段二',
                questionType: 'What are the advantages and disadvantages of studying online? — 在线学习的优缺点是什么？',
                content: 'The growing prevalence of online education has transformed the way students access knowledge and participate in academic programmes. Studying online is often regarded as an efficient alternative to attending classes on campus because it enables greater flexibility and convenience. However, this mode of learning also presents notable drawbacks, particularly in relation to student engagement, self-discipline, and interpersonal interaction. This essay will examine both the advantages and the disadvantages of online study.',
                translation: '在线教育的日益普及改变了学生获取知识和参与学术项目的方式。在线学习通常被视为参加校园课程的高效替代方案，因为它提供了更大的灵活性和便利性。然而，这种学习模式也存在明显的缺点，特别是在学生参与度、自律和人际互动方面。本文将考察在线学习的优缺点。',
                color: 'orange'
              },
              {
                type: 'Introduction 3 — 开头段三',
                questionType: 'Discuss both views and give your opinion — 讨论双方观点并给出你的意见',
                content: 'There is considerable debate over whether online study is more effective than attending classes on campus. Supporters of virtual education contend that it is more flexible, accessible, and better suited to contemporary lifestyles, whereas others maintain that campus-based learning offers superior interaction, structure, and academic support. This essay will discuss both perspectives before arguing that the effectiveness of either mode depends largely on the learner needs, although on-campus education remains more beneficial in most cases.',
                translation: '关于在线学习是否比参加校园课程更有效存在相当大的争论。虚拟教育的支持者认为它更灵活、更易获取，更适合当代生活方式，而其他人则认为基于校园的学习提供更好的互动、结构和学术支持。本文将讨论两种观点，然后论证任何一种模式的有效性在很大程度上取决于学习者的需求，尽管在大多数情况下，校园教育仍然更有益。',
                color: 'blue'
              },
              {
                type: 'Introduction 4 — 开头段四',
                questionType: 'More and more students choose to study online rather than attend classes on campus. What are the causes of this? What solutions can you suggest? — 越来越多的学生选择在线学习而不是参加校园课程。原因是什么？你能提出什么解决方案？',
                content: 'An increasing number of students are choosing online education in preference to conventional campus-based study. This trend can be attributed to several factors, including lower costs, greater scheduling flexibility, and rapid advances in educational technology. Nevertheless, the shift away from physical classrooms may undermine student academic engagement and social development if left unaddressed. This essay will analyse the principal causes of this phenomenon and propose measures that educational institutions can adopt to make on-campus learning more attractive and accessible.',
                translation: '越来越多的学生选择在线教育而非传统的校园学习。这一趋势可归因于几个因素，包括较低的成本、更大的日程安排灵活性和教育技术的快速发展。然而，如果得不到解决，远离实体课堂的转变可能会损害学生的学术参与和社会发展。本文将分析这一现象的主要原因，并提出教育机构可以采取的措施，使校园学习更具吸引力和可及性。',
                color: 'gold'
              }
            ].map((intro, i) => (
              <div 
                key={i}
                className={`p-8 rounded-3xl bg-gradient-to-br ${
                  intro.color === 'gold' ? 'from-[#FFF68F]/5 to-transparent border-[#FFF68F]/20' :
                  intro.color === 'orange' ? 'from-[#FFA54D]/5 to-transparent border-[#FFA54D]/20' :
                  'from-[#87CEFF]/5 to-transparent border-[#87CEFF]/20'
                } border transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,246,143,0.1)]`}
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h4 className={`text-xl font-semibold ${
                    intro.color === 'gold' ? fluorescentGold :
                    intro.color === 'orange' ? fluorescentOrange :
                    fluorescentBlue
                  }`}>
                    {intro.type}
                  </h4>
                  <span className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-400">
                    {intro.questionType}
                  </span>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed mb-6 font-['Playfair_Display']">
                  <span className={
                    intro.color === 'gold' ? fluorescentGold :
                    intro.color === 'orange' ? fluorescentOrange :
                    fluorescentBlue
                  }>{intro.content}</span>
                </p>
                <div className="p-6 rounded-2xl bg-black/30 border border-white/5">
                  <p className="text-gray-400 font-['Noto_Serif_SC'] leading-relaxed">
                    {intro.translation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART III */}
      <section id="part3" className="relative py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#87CEFF]/10 to-[#FFF68F]/10 border border-[#87CEFF]/20 mb-6">
              <span className={`text-sm font-medium ${fluorescentBlue}`}>PART III</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold mb-6">
              <span className={fluorescentBlue}>Collocations</span>
              <br />
              <span className="text-gray-500">词汇搭配</span>
            </h2>
            <p className="text-xl text-gray-400 font-['Noto_Serif_SC']">
              Essential phrases for Band 7+ writing
            </p>
          </div>

          {/* Domain A: Work and Life */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFF68F] shadow-[0_0_10px_#FFF68F]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentGold}`}>
                A. Collocations in the Domain of Work and Life — 工作与生活的搭配
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { collocation: 'maintain a work-life balance', translation: '保持工作与生活的平衡', highlight: 'work-life balance' },
                { collocation: 'meet a deadline', translation: '满足截止日期', highlight: 'deadline' },
                { collocation: 'shoulder responsibility', translation: '承担责任', highlight: 'shoulder responsibility' },
                { collocation: 'pursue a career', translation: '追求事业', highlight: 'career' },
                { collocation: 'gain promotion', translation: '获得晋升', highlight: 'promotion' },
                { collocation: 'job satisfaction', translation: '工作满意度', highlight: 'satisfaction' },
                { collocation: 'heavy workload', translation: '繁重的工作量', highlight: 'workload' },
                { collocation: 'secure employment', translation: '稳定就业', highlight: 'employment' },
                { collocation: 'acquire practical skills', translation: '获得实用技能', highlight: 'skills' },
                { collocation: 'face unemployment', translation: '面临失业', highlight: 'unemployment' },
                { collocation: 'earn a living', translation: '谋生', highlight: 'living' },
                { collocation: 'work long hours', translation: '长时间工作', highlight: 'long hours' },
                { collocation: 'take early retirement', translation: '提前退休', highlight: 'retirement' },
                { collocation: 'career prospects', translation: '职业前景', highlight: 'prospects' },
                { collocation: 'vocational training', translation: '职业培训', highlight: 'training' }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-[#FFF68F]/40 hover:shadow-[0_0_20px_rgba(255,246,143,0.2)] hover:scale-[1.02]"
                >
                  <p className="text-lg font-['Playfair_Display'] font-semibold text-gray-100 mb-2">
                    <span className="text-[#FFF68F]">{item.collocation.split(' ').map((word, j) => 
                      item.highlight.split(' ').includes(word) ? 
                      <span key={j} className="bg-[#FFF68F]/20 px-1 rounded">{word}</span> : word
                    ).join(' ')}</span>
                  </p>
                  <p className="text-sm text-gray-400">{item.translation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Domain B: Society */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#87CEFF] shadow-[0_0_10px_#87CEFF]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentBlue}`}>
                B. Collocations in the Domain of Society — 社会领域的搭配
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { collocation: 'social inequality', translation: '社会不平等', highlight: 'inequality' },
                { collocation: 'public welfare', translation: '公共福利', highlight: 'welfare' },
                { collocation: 'tackle poverty', translation: '解决贫困', highlight: 'poverty' },
                { collocation: 'raise public awareness', translation: '提高公众意识', highlight: 'awareness' },
                { collocation: 'crime rate', translation: '犯罪率', highlight: 'crime' },
                { collocation: 'social cohesion', translation: '社会凝聚力', highlight: 'cohesion' },
                { collocation: 'economic disparity', translation: '经济差距', highlight: 'disparity' },
                { collocation: 'public services', translation: '公共服务', highlight: 'services' },
                { collocation: 'equal opportunities', translation: '平等机会', highlight: 'opportunities' },
                { collocation: 'ageing population', translation: '老龄化人口', highlight: 'ageing' },
                { collocation: 'cultural diversity', translation: '文化多样性', highlight: 'diversity' },
                { collocation: 'social integration', translation: '社会融合', highlight: 'integration' },
                { collocation: 'housing shortage', translation: '住房短缺', highlight: 'shortage' },
                { collocation: 'civic responsibility', translation: '公民责任', highlight: 'responsibility' },
                { collocation: 'vulnerable groups', translation: '弱势群体', highlight: 'vulnerable' }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-[#87CEFF]/40 hover:shadow-[0_0_20px_rgba(135,206,255,0.2)] hover:scale-[1.02]"
                >
                  <p className="text-lg font-['Playfair_Display'] font-semibold text-gray-100 mb-2">
                    <span className="text-[#87CEFF]">{item.collocation}</span>
                  </p>
                  <p className="text-sm text-gray-400">{item.translation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Example Sentences */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFA54D] shadow-[0_0_10px_#FFA54D]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentOrange}`}>
                Example Sentences — 例句
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  sentence: 'Many employees struggle to maintain a healthy work-life balance in highly competitive industries.',
                  translation: '许多员工在竞争激烈的行业中难以保持健康的工作与生活平衡。',
                  highlight: 'work-life balance'
                },
                {
                  sentence: 'Professionals in demanding sectors are often required to meet tight deadlines.',
                  translation: '高要求行业的专业人士经常被要求满足紧迫的截止日期。',
                  highlight: 'deadlines'
                },
                {
                  sentence: 'Persistent social inequality can undermine national cohesion and economic mobility.',
                  translation: '持续的社会不平等可能破坏国家凝聚力和经济流动性。',
                  highlight: 'social inequality'
                },
                {
                  sentence: 'Governments are expected to invest in public welfare through education, healthcare, and housing.',
                  translation: '政府被期望通过教育、医疗和住房投资公共福利。',
                  highlight: 'public welfare'
                },
                {
                  sentence: 'A rising crime rate is often associated with unemployment, exclusion, and weak social institutions.',
                  translation: '犯罪率上升通常与失业、排斥和薄弱的社会机构相关。',
                  highlight: 'crime rate'
                },
                {
                  sentence: 'An ageing population places increasing pressure on healthcare systems and pension schemes.',
                  translation: '老龄化人口给医疗体系和养老金计划带来越来越大的压力。',
                  highlight: 'ageing population'
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-[#FFA54D]/30 hover:shadow-[0_0_20px_rgba(255,165,77,0.15)]"
                >
                  <p className="text-lg text-gray-200 leading-relaxed mb-3 font-['Playfair_Display']">
                    <span className="text-[#FFA54D]">{item.sentence}</span>
                  </p>
                  <p className="text-gray-400 font-['Noto_Serif_SC']">{item.translation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reference Notes */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FFF68F] shadow-[0_0_10px_#FFF68F]" />
              <h3 className={`text-3xl font-['Playfair_Display'] font-semibold ${fluorescentGold}`}>
                Optional Reference Notes for Memorisation — 可选记忆参考笔记
              </h3>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              If you want to turn the collocations into concise revision notes, you may memorise them in grouped form:
              <br />
              如果你想将搭配转化为简洁的复习笔记，可以分组记忆：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#FFF68F]/10 to-transparent border border-[#FFF68F]/20">
                <h4 className={`text-xl font-semibold mb-6 ${fluorescentGold}`}>Work and Life — 工作与生活中</h4>
                <ul className="space-y-2">
                  {[
                    'maintain a work-life balance',
                    'meet a deadline',
                    'shoulder responsibility',
                    'pursue a career',
                    'gain promotion',
                    'job satisfaction',
                    'heavy workload',
                    'secure employment',
                    'acquire practical skills',
                    'face unemployment'
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="mt-1 text-xs text-[#FFF68F]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#87CEFF]/10 to-transparent border border-[#87CEFF]/20">
                <h4 className={`text-xl font-semibold mb-6 ${fluorescentBlue}`}>Society — 社会中</h4>
                <ul className="space-y-2">
                  {[
                    'social inequality',
                    'public welfare',
                    'tackle poverty',
                    'raise public awareness',
                    'crime rate',
                    'social cohesion',
                    'economic disparity',
                    'public services',
                    'equal opportunities',
                    'ageing population'
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="mt-1 text-xs text-[#87CEFF]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-10 rounded-3xl bg-gradient-to-r from-[#FFF68F]/10 via-[#FFA54D]/10 to-[#87CEFF]/10 border border-white/20">
            <h3 className={`text-2xl font-semibold mb-6 text-center ${fluorescentGold}`}>
              If you want, I can next help you with either of these:
              <br />
              如果你愿意，我接下来可以帮你做以下任何一件事：
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: '1',
                  text: 'Write the full Band 8/9 essay for Part I',
                  translation: '为第一部分撰写完整的 8/9 分范文',
                  color: 'gold'
                },
                {
                  number: '2',
                  text: 'Expand Part II into full introductions + thesis analysis',
                  translation: '将第二部分扩展为完整的开头段 + 论点分析',
                  color: 'orange'
                },
                {
                  number: '3',
                  text: 'Turn Part III into a bilingual memorisation table for easier review',
                  translation: '将第三部分转化为双语记忆表以便复习',
                  color: 'blue'
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`p-6 rounded-2xl bg-black/30 border border-${item.color === 'gold' ? '#FFF68F' : item.color === 'orange' ? '#FFA54D' : '#87CEFF'}/30 text-center transition-all duration-300 hover:scale-105`}
                >
                  <div className={`w-12 h-12 rounded-full bg-${item.color === 'gold' ? '#FFF68F' : item.color === 'orange' ? '#FFA54D' : '#87CEFF'}/20 flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-2xl font-bold ${
                      item.color === 'gold' ? fluorescentGold :
                      item.color === 'orange' ? fluorescentOrange :
                      fluorescentBlue
                    }`}>{item.number}</span>
                  </div>
                  <p className="text-gray-200 font-medium mb-2">{item.text}</p>
                  <p className="text-sm text-gray-400">{item.translation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4">
            IELTS Masterclass — 雅思大师课
          </p>
          <p className="text-gray-600 text-sm">
            Complete Guide to Writing Task 2 — 大作文完整指南
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-3 h-3 rounded-full bg-[#FFF68F] shadow-[0_0_10px_#FFF68F]" />
            <div className="w-3 h-3 rounded-full bg-[#FFA54D] shadow-[0_0_10px_#FFA54D]" />
            <div className="w-3 h-3 rounded-full bg-[#87CEFF] shadow-[0_0_10px_#87CEFF]" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
