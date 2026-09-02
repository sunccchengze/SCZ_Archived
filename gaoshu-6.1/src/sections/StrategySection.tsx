import { SectionBlock, SectionHeading, SubHeading, Callout } from '../components/ui';

export function StrategySection() {
  return (
    <SectionBlock id="strategy">
      <SectionHeading
        icon="⚡"
        title="冲刺策略与时间分配"
        label="Part 7 · Strategy"
        subtitle="考前一周的科学复习方法与考场技巧"
      />

      {/* 复习策略 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="rounded-xl border border-cyan-border bg-deep/40 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block rounded bg-cyan-glow/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-cyan-glow">
              基础薄弱
            </span>
          </div>
          <ul className="space-y-3 text-sm text-silver-200">
            <li className="flex gap-2">
              <span className="text-cyan-dim flex-shrink-0">01</span>
              <span>优先复习基本概念（连续、可微、偏导）</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-dim flex-shrink-0">02</span>
              <span>死磕计算题套路：偏导、隐函数、链式法则、重积分基本计算</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-dim flex-shrink-0">03</span>
              <span>至少把近 3 年的真题完整做一遍</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-warning/20 bg-warning/[0.03] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block rounded bg-warning/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-warning">
              冲刺高分
            </span>
          </div>
          <ul className="space-y-3 text-sm text-silver-200">
            <li className="flex gap-2">
              <span className="text-warning/70 flex-shrink-0">01</span>
              <span>重点突破综合大题：曲线曲面积分、级数综合题</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning/70 flex-shrink-0">02</span>
              <span>多做证明题，培养逻辑思维</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning/70 flex-shrink-0">03</span>
              <span>关注小题中的"陷阱"：对称性、奇偶性、可微性反例</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 时间分配 */}
      <SubHeading>考场时间分配（150 分钟）</SubHeading>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { time: '30-40', unit: 'min', label: '选择 + 填空', color: 'border-cyan-glow/20' },
          { time: '80-90', unit: 'min', label: '计算题', color: 'border-warning/20' },
          { time: '20-30', unit: 'min', label: '综合 / 证明', color: 'border-danger/20' },
          { time: '10', unit: 'min', label: '检查', color: 'border-success/20' },
        ].map((t) => (
          <div key={t.label} className={`rounded-xl border ${t.color} bg-deep/40 p-5 text-center`}>
            <p className="font-mono text-2xl font-bold text-silver-100" style={{ fontFamily: 'var(--font-display)' }}>
              {t.time}
            </p>
            <p className="font-mono text-[10px] text-silver-400 uppercase tracking-wider">{t.unit}</p>
            <p className="text-xs text-silver-300 mt-2">{t.label}</p>
          </div>
        ))}
      </div>

      <Callout type="danger" title="重要">
        <p>选择填空遇到难题先跳过！不要在小题上耗费过多时间。</p>
      </Callout>

      {/* 答题技巧 */}
      <SubHeading>答题技巧</SubHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '🎯', title: '明确题型套路', desc: '看到题目第一反应："这是哪一类题"，然后调用相应方法' },
          { icon: '⚖️', title: '善用对称性', desc: '积分题中先看对称性，能省一半计算' },
          { icon: '🔄', title: '善用换元', desc: '球坐标、柱坐标、参数化要熟练' },
          { icon: '✏️', title: '画图辅助', desc: '积分区域、积分路径，画图能避免很多错误' },
          { icon: '📐', title: '检查单位', desc: '方向导数要单位化方向向量；高斯公式要用外侧' },
          { icon: '📝', title: '不要空着', desc: '实在不会的题，写开头公式也能得部分分' },
        ].map((tip) => (
          <div key={tip.title} className="rounded-xl border border-cyan-border bg-deep/40 p-5">
            <span className="text-lg">{tip.icon}</span>
            <p className="text-sm font-semibold text-silver-100 mt-2 mb-1">{tip.title}</p>
            <p className="text-xs text-silver-400 leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>

      {/* 易错点 */}
      <SubHeading>常见易错点总结</SubHeading>

      <div className="space-y-3 mb-8">
        {[
          '对称性使用错误：先看积分区域是否对称，再看被积函数的奇偶性',
          '高斯公式忘记补面 或 补面方向错误',
          '幂级数收敛域忘记检查端点',
          '隐函数求二阶导时忘记 fᵢ 还是复合函数',
          '可微性判断不规范，不写极限直接说"可微"',
          '格林公式中含奇点直接使用导致错误',
        ].map((err, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg border border-danger/10 bg-danger/[0.02] p-4">
            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-danger/15 font-mono text-[10px] font-bold text-danger">
              {i + 1}
            </span>
            <p className="text-sm text-silver-200">{err}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
