import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

interface CompanyInfo {
  name: string;
  country: string;
  flag: string;
  specialty: string;
  product: string;
  detail: string;
  color: string;
}

const aeroCompanies: CompanyInfo[] = [
  {
    name: 'GE Aerospace',
    country: '美国',
    flag: '🇺🇸',
    specialty: 'LEAP发动机、GE9X',
    product: '全球最大涵道比商用发动机',
    detail: 'GE90是人类造过的最大推力涡扇发动机。LEAP发动机使用CMC和3D打印技术，油耗降低15%。',
    color: 'bg-blue/10 border-blue/20',
  },
  {
    name: '普惠 (P&W)',
    country: '美国',
    flag: '🇺🇸',
    specialty: 'PW1100G 齿轮传动涡扇',
    product: '用齿轮让风扇和涡轮各转各的最佳转速',
    detail: '齿轮传动涡扇（GTF）是颠覆性设计：在风扇和低压涡轮之间加了一个行星齿轮箱，让两者各自以最优转速运转，省油16%。',
    color: 'bg-green/10 border-green/20',
  },
  {
    name: '罗尔斯·罗伊斯 (RR)',
    country: '英国',
    flag: '🇬🇧',
    specialty: '遄达 Trent 系列',
    product: '独特的三转子结构',
    detail: 'RR坚持三转子设计（低压+中压+高压），结构更复杂但效率更优。遄达XWB为A350提供动力。',
    color: 'bg-peach/10 border-peach/20',
  },
];

const gasCompanies = [
  { name: 'GE Vernova', flag: '🇺🇸', detail: '9HA级燃气轮机，联合循环效率世界纪录62.22%' },
  { name: '西门子能源', flag: '🇩🇪', detail: 'HL级燃气轮机，效率超63%（2024年宣布）' },
  { name: '三菱重工', flag: '🇯🇵', detail: 'J/JAC级，1650°C涡轮进口温度，亚洲唯一玩家' },
];

export default function Chapter4() {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);

  return (
    <section id="ch4" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-peach font-[Poppins] text-sm font-semibold tracking-wider uppercase">Chapter 04</span>
            <h2 className="font-[Poppins] text-3xl md:text-4xl font-bold text-charcoal mt-2">
              全球格局
            </h2>
            <p className="font-[Lora] text-lg text-taupe mt-2 italic">
              「三家公司，垄断了全球90%的天空」
            </p>
          </div>
        </AnimatedSection>

        {/* World Map SVG */}
        <AnimatedSection delay={100}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-taupe/10 shadow-sm mb-8">
            <h3 className="font-[Poppins] text-lg font-bold text-charcoal mb-6 text-center">
              ✈️ 航空发动机三巨头
            </h3>
            
            {/* Simplified world map with markers */}
            <div className="relative max-w-3xl mx-auto mb-6">
              <svg viewBox="0 0 800 400" className="w-full" fill="none">
                {/* Simplified continent outlines */}
                {/* North America */}
                <path d="M100 80 Q120 60 160 70 Q200 50 220 60 L230 80 Q250 70 260 90 L270 120 Q260 140 250 160 L240 180 Q230 190 220 185 L200 190 Q180 200 170 195 L150 185 Q130 180 120 160 L110 130 Q100 110 100 80Z" 
                  fill="#B1ADA1" opacity="0.15" stroke="#B1ADA1" strokeWidth="0.5"/>
                {/* South America */}
                <path d="M200 220 Q210 210 220 215 L240 230 Q250 250 255 280 L250 310 Q240 340 230 350 L220 345 Q210 330 210 310 L205 280 Q200 250 200 220Z"
                  fill="#B1ADA1" opacity="0.15" stroke="#B1ADA1" strokeWidth="0.5"/>
                {/* Europe */}
                <path d="M370 70 Q380 60 400 65 L420 70 Q440 75 450 85 L445 100 Q435 110 420 115 L400 110 Q385 105 375 95 L370 70Z"
                  fill="#B1ADA1" opacity="0.15" stroke="#B1ADA1" strokeWidth="0.5"/>
                {/* Africa */}
                <path d="M380 140 Q400 130 420 135 L440 150 Q450 170 455 200 L450 240 Q440 270 430 280 L410 275 Q395 260 390 240 L385 200 Q380 170 380 140Z"
                  fill="#B1ADA1" opacity="0.15" stroke="#B1ADA1" strokeWidth="0.5"/>
                {/* Asia */}
                <path d="M460 60 Q500 40 550 50 L600 60 Q650 55 680 70 L700 90 Q710 110 700 130 L680 150 Q660 160 640 155 L600 145 Q560 150 530 140 L500 130 Q480 120 470 100 L460 60Z"
                  fill="#B1ADA1" opacity="0.15" stroke="#B1ADA1" strokeWidth="0.5"/>
                {/* Australia */}
                <path d="M620 260 Q650 250 670 260 L680 280 Q675 300 660 305 L640 300 Q625 290 620 260Z"
                  fill="#B1ADA1" opacity="0.15" stroke="#B1ADA1" strokeWidth="0.5"/>

                {/* Company markers */}
                {/* GE & PW - USA */}
                <g className="cursor-pointer" onClick={() => setSelectedCompany(selectedCompany === 0 ? null : 0)}>
                  <circle cx="170" cy="120" r="12" fill="#6A9BCC" opacity="0.8"/>
                  <circle cx="170" cy="120" r="16" fill="none" stroke="#6A9BCC" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDuration: '3s' }}/>
                  <text x="170" y="125" textAnchor="middle" fill="white" fontSize="10" fontFamily="Poppins" fontWeight="bold">GE</text>
                </g>
                <g className="cursor-pointer" onClick={() => setSelectedCompany(selectedCompany === 1 ? null : 1)}>
                  <circle cx="200" cy="105" r="11" fill="#788C5D" opacity="0.8"/>
                  <text x="200" y="110" textAnchor="middle" fill="white" fontSize="8" fontFamily="Poppins" fontWeight="bold">PW</text>
                </g>
                {/* RR - UK */}
                <g className="cursor-pointer" onClick={() => setSelectedCompany(selectedCompany === 2 ? null : 2)}>
                  <circle cx="390" cy="82" r="11" fill="#D97757" opacity="0.8"/>
                  <circle cx="390" cy="82" r="15" fill="none" stroke="#D97757" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}/>
                  <text x="390" y="87" textAnchor="middle" fill="white" fontSize="8" fontFamily="Poppins" fontWeight="bold">RR</text>
                </g>

                {/* Labels */}
                <text x="170" y="148" textAnchor="middle" fill="#6A9BCC" fontSize="8" fontFamily="Poppins" fontWeight="500">GE + P&W</text>
                <text x="170" y="158" textAnchor="middle" fill="#B1ADA1" fontSize="7" fontFamily="Lora">美国</text>
                <text x="390" y="108" textAnchor="middle" fill="#D97757" fontSize="8" fontFamily="Poppins" fontWeight="500">Rolls-Royce</text>
                <text x="390" y="118" textAnchor="middle" fill="#B1ADA1" fontSize="7" fontFamily="Lora">英国</text>
              </svg>
            </div>

            {/* Company cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {aeroCompanies.map((company, i) => (
                <div
                  key={company.name}
                  className={`${company.color} border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md ${selectedCompany === i ? 'ring-2 ring-peach scale-[1.02]' : ''}`}
                  onClick={() => setSelectedCompany(selectedCompany === i ? null : i)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{company.flag}</span>
                    <span className="font-[Poppins] font-bold text-sm text-charcoal">{company.name}</span>
                  </div>
                  <div className="text-xs text-peach font-[Poppins] font-semibold mb-1">{company.specialty}</div>
                  <p className="text-[11px] text-charcoal/50 font-[Lora]">{company.product}</p>
                  {selectedCompany === i && (
                    <div className="mt-3 pt-3 border-t border-taupe/10 animate-[fade-in-up_0.3s_ease]">
                      <p className="text-xs text-charcoal/70 font-[Lora] leading-relaxed">{company.detail}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <img
                src="https://images.pexels.com/photos/35425768/pexels-photo-35425768.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=800"
                alt="航空发动机近景"
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
              />
              <p className="text-xs text-taupe mt-2 font-[Lora] italic">现代商用涡扇发动机——人类精密制造的巅峰之作</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Gas Turbine Companies */}
        <AnimatedSection delay={200}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-taupe/10 shadow-sm">
            <h3 className="font-[Poppins] text-lg font-bold text-charcoal mb-2 text-center">
              ⚡ 燃气轮机三巨头
            </h3>
            <p className="text-center text-xs text-taupe font-[Lora] mb-6">这个市场的垄断程度比航发还夸张</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {gasCompanies.map(company => (
                <div key={company.name} className="bg-cream rounded-xl p-4 border border-taupe/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{company.flag}</span>
                    <span className="font-[Poppins] font-bold text-sm text-charcoal">{company.name}</span>
                  </div>
                  <p className="text-xs text-charcoal/60 font-[Lora]">{company.detail}</p>
                </div>
              ))}
            </div>

            <img
              src="https://images.pexels.com/photos/27647540/pexels-photo-27647540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=800"
              alt="工业发电厂"
              className="rounded-xl w-full h-40 object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
