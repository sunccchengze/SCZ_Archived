import { SectionBlock, SectionHeading, StatCard, ProgressBar, Callout } from '../components/ui';

export function OverviewSection() {
  return (
    <SectionBlock id="overview">
      <SectionHeading
        icon="◇"
        title="知识框架与考情分析"
        label="Part 1 · Overview"
        subtitle="鸟瞰高数下全貌，明确复习方向"
      />

      {/* Module cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <StatCard value="01" label="多元函数微分学" />
        <StatCard value="02" label="重积分" />
        <StatCard value="03" label="曲线曲面积分" accent />
        <StatCard value="04" label="无穷级数" />
      </div>

      {/* Score distribution */}
      <div className="rounded-xl border border-cyan-border bg-deep/40 p-6 md:p-8 mb-10">
        <h4 className="font-mono text-xs tracking-widest uppercase text-cyan-dim mb-6">
          分值分布（近十年真题）
        </h4>
        <ProgressBar value={25} max={30} label="多元函数微分学" color="cyan" />
        <ProgressBar value={15} max={20} label="重积分" color="success" />
        <ProgressBar value={30} max={35} label="曲线曲面积分 ← 重点" color="warning" />
        <ProgressBar value={20} max={25} label="无穷级数" color="cyan" />
      </div>

      {/* Exam structure */}
      <div className="rounded-xl border border-cyan-border bg-deep/40 p-6 md:p-8 mb-10">
        <h4 className="font-mono text-xs tracking-widest uppercase text-cyan-dim mb-6">
          考试结构
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-silver-100" style={{ fontFamily: 'var(--font-display)' }}>6</p>
            <p className="text-xs text-silver-400 mt-1">单选题</p>
            <p className="font-mono text-xs text-cyan-dim mt-0.5">≈18 分</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-silver-100" style={{ fontFamily: 'var(--font-display)' }}>6</p>
            <p className="text-xs text-silver-400 mt-1">填空题</p>
            <p className="font-mono text-xs text-cyan-dim mt-0.5">≈18 分</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-silver-100" style={{ fontFamily: 'var(--font-display)' }}>6-8</p>
            <p className="text-xs text-silver-400 mt-1">计算题</p>
            <p className="font-mono text-xs text-cyan-dim mt-0.5">≈50-60 分</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-silver-100" style={{ fontFamily: 'var(--font-display)' }}>1-2</p>
            <p className="text-xs text-silver-400 mt-1">综合 / 证明</p>
            <p className="font-mono text-xs text-cyan-dim mt-0.5">≈10-15 分</p>
          </div>
        </div>
      </div>

      <Callout type="warning" title="重要趋势">
        <p>
          从24年和23年的真题看，考试越来越强调<strong className="text-warning">"理解"</strong>和<strong className="text-warning">"灵活应用"</strong>，单纯背公式已经不够了，必须理解每个概念的本质。
        </p>
      </Callout>
    </SectionBlock>
  );
}
