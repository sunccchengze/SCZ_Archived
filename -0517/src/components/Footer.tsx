export default function Footer() {
  const resources = [
    { name: 'Neuralink官方频道', description: '手术和使用演示视频' },
    { name: 'BrainGate研究论文', description: '学术研究资料' },
    { name: '中国科学院脑科学中心', description: '国内前沿研究' },
    { name: '《Father of the Cyborgs》', description: '赛博格之父纪录片' },
    { name: 'Nature / Science', description: '顶级科学期刊最新进展' },
  ];

  return (
    <footer className="relative py-16 px-4 sm:px-6 border-t border-[rgba(57,255,20,0.1)]">
      <div className="max-w-6xl mx-auto">
        {/* Resources */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[#E0E6ED] mb-6 text-center">
            📖 课后延伸资源
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.1)] hover:border-[rgba(57,255,20,0.3)] transition-all duration-300 text-center"
              >
                <p className="text-[#E0E6ED] font-medium text-sm mb-1">{resource.name}</p>
                <p className="text-[#8A92A0] text-xs">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mb-12 p-6 rounded-2xl bg-[rgba(16,22,32,0.85)] border border-[rgba(57,255,20,0.15)]">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="px-4 py-2">
              <p className="text-xs text-[#8A92A0]">1963</p>
              <p className="text-sm text-[#B8C0CC]">斗牛场实验</p>
            </div>
            <span className="text-[#39FF14]">→</span>
            <div className="px-4 py-2">
              <p className="text-xs text-[#8A92A0]">1998</p>
              <p className="text-sm text-[#B8C0CC]">第一位赛博格</p>
            </div>
            <span className="text-[#39FF14]">→</span>
            <div className="px-4 py-2">
              <p className="text-xs text-[#8A92A0]">2012</p>
              <p className="text-sm text-[#B8C0CC]">BrainGate里程碑</p>
            </div>
            <span className="text-[#39FF14]">→</span>
            <div className="px-4 py-2">
              <p className="text-xs text-[#8A92A0]">2024</p>
              <p className="text-sm text-[#B8C0CC]">Neuralink首例</p>
            </div>
            <span className="text-[#39FF14]">→</span>
            <div className="px-4 py-2">
              <p className="text-xs text-[#8A92A0]">2025</p>
              <p className="text-sm text-[#39FF14]">中国突破</p>
            </div>
          </div>
        </div>

        {/* Closing message */}
        <div className="text-center mb-12">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[rgba(57,255,20,0.05)] to-[rgba(0,191,255,0.05)]">
            <p className="text-[#B8C0CC] text-lg mb-2">
              脑机接口临床试验尚处于初级阶段，才刚刚开始
            </p>
            <p className="text-[#E0E6ED] font-medium">
              要做到科幻电影里真正的脑机融合，最快也要
              <span className="text-[#39FF14] font-bold">5—10年</span>的时间
            </p>
            <p className="text-[#8A92A0] text-sm mt-2">—— 中国科学院院士 蒲慕明</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#39FF14] to-[#1A7A0A] flex items-center justify-center">
              <span className="text-[#0A0E14] font-bold text-sm">BCI</span>
            </div>
            <span className="font-display text-sm font-bold text-[#39FF14]">
              BRAIN·LINK
            </span>
          </div>
          <p className="text-[#8A92A0] text-sm mb-2">
            《用意念控制世界：脑机接口的奇幻旅程》
          </p>
          <p className="text-[#8A92A0] text-xs">
            初中生科普讲座 · 交互式学习版
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#39FF14]/30" />
            <span className="text-[#39FF14]/30 text-xs font-display">THANK YOU</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#39FF14]/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
