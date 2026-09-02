import { SectionBlock, SectionHeading, Callout } from '../components/ui';

export function ClosingSection() {
  return (
    <SectionBlock id="closing">
      <SectionHeading
        icon="♦"
        title="结语"
        label="Closing"
      />

      <div className="max-w-2xl space-y-6 text-sm md:text-base leading-relaxed text-silver-200">
        <p>
          同学们，到这里，我们这次复习讲座的主要内容就讲完了。
        </p>
        <p>希望大家课后能：</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-10">
        {[
          { num: '01', text: '整理自己的笔记，把今天讲的考点、例题、技巧梳理一遍' },
          { num: '02', text: '完整做 1-2 套真题，掐时间模拟考场' },
          { num: '03', text: '建立自己的错题本，把做错的题、易错的概念专门记录' },
        ].map((item) => (
          <div key={item.num} className="rounded-xl border border-cyan-border bg-deep/40 p-5">
            <span className="font-mono text-2xl font-bold text-cyan-glow/40">{item.num}</span>
            <p className="text-sm text-silver-200 mt-3 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <Callout type="success" title="给所有同学">
        <p className="text-base font-medium mb-3">
          高数下确实是一门难课，但它不是"魔鬼课"。
        </p>
        <p>
          它的考点是有限的、套路是清晰的、解法是固定的。只要你愿意花时间去理解、去练习，就一定能取得好成绩。
        </p>
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 mb-12">
        <div className="rounded-xl border border-cyan-border bg-deep/40 p-6">
          <p className="text-xs font-mono text-cyan-dim tracking-wider uppercase mb-3">基础薄弱的同学</p>
          <p className="text-sm text-silver-200 leading-relaxed">
            <strong className="text-silver-100">不要放弃！</strong>哪怕你现在只掌握了 60%，认真复习一周，多看几道真题，过线甚至 <span className="font-mono text-cyan-glow font-bold">75+</span> 完全可能。
          </p>
        </div>
        <div className="rounded-xl border border-warning/20 bg-warning/[0.03] p-6">
          <p className="text-xs font-mono text-warning tracking-wider uppercase mb-3">冲分的同学</p>
          <p className="text-sm text-silver-200 leading-relaxed">
            <strong className="text-silver-100">注意细节！</strong>高分和满分之间的差距，往往就在那些容易忽略的"小坑"上。
          </p>
        </div>
      </div>

      <div className="text-center py-16 border-t border-cyan-border/20">
        <p className="text-sm text-silver-300 mb-2">预祝大家在期末考试中取得理想的成绩！</p>
        <p className="text-lg font-semibold text-silver-100 mt-6" style={{ fontFamily: 'var(--font-display)' }}>
          彭康书院学业辅导与发展中心
        </p>
        <p className="text-xs text-cyan-dim mt-1 tracking-widest">与你同行</p>
        <div className="mt-8 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="inline-block w-1 h-1 rounded-full bg-cyan-glow/40" />
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}
