import { SectionBlock, SectionHeading, Callout, Tag } from '../components/ui';

export function IntroSection() {
  return (
    <SectionBlock id="intro">
      <SectionHeading
        icon="◈"
        title="开场白"
        label="Welcome"
        subtitle="欢迎来到高等数学（下）期末冲刺复习讲座"
      />

      <div className="max-w-2xl space-y-6 text-sm md:text-base leading-relaxed text-silver-200">
        <p>
          亲爱的同学们，大家好！欢迎来到本次高等数学（下）期末冲刺复习讲座。
        </p>
        <p>
          我知道，坐在这里的同学情况各异：有的同学平时一直在认真听课、做题，现在希望通过最后的冲刺把分数提到更高；有的同学因为种种原因，可能对高数下半学期的内容掌握得还不够扎实，甚至有些章节几乎是空白，现在心里很慌、很焦虑。
        </p>
      </div>

      <Callout type="success" title="核心信念">
        <p className="text-base font-medium">
          不管你现在处于什么状态，只要你愿意从今天开始认真复习，都还来得及。
        </p>
        <p className="mt-2 text-silver-300">
          高数下虽然内容多、难度大，但是它的考点是非常集中、非常套路化的。只要我们把核心的考点、典型的题型和解题方法吃透，拿到一个让自己满意的分数，是完全可能的。
        </p>
      </Callout>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-xl border border-cyan-border bg-deep/40 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Tag color="cyan">基础薄弱</Tag>
          </div>
          <p className="text-sm text-silver-200 leading-relaxed">
            请重点听每一章节的<span className="text-cyan-glow font-medium">"基础回顾"</span>和<span className="text-cyan-glow font-medium">"必会题型"</span>部分，把这些拿下，你就能稳过及格线，争取到 <span className="font-mono text-cyan-glow font-bold">75+</span>。
          </p>
        </div>
        <div className="rounded-xl border border-warning/20 bg-warning/[0.03] p-6">
          <div className="flex items-center gap-2 mb-4">
            <Tag color="warning">冲刺高分</Tag>
          </div>
          <p className="text-sm text-silver-200 leading-relaxed">
            请重点关注<span className="text-warning font-medium">"易错点"</span>、<span className="text-warning font-medium">"难点突破"</span>和<span className="text-warning font-medium">"压轴题分析"</span>，这些是拉开分差的关键。
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}
