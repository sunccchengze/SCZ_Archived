import { SectionBlock, SectionHeading, Callout, FormulaBlock, Step } from '../components/ui';
import { Math } from '../components/Math';
import { Collapsible } from '../components/Collapsible';

export function AdvancedSection() {
  return (
    <SectionBlock id="advanced">
      <SectionHeading
        icon="★"
        title="综合冲刺与压轴题"
        label="Part 6 · Advanced Problems"
        subtitle="冲刺 120 分以上必须掌握的压轴级别题目"
      />

      <Collapsible title="23年第18题 · 傅里叶级数 → 求 Σ1/n²" tag="综合题" defaultOpen>
        <Callout type="info" title="题目">
          <p>
            将 <Math tex="f(x)=2+|x|" />（<Math tex="-1\leq x\leq 1" />）展成以 2 为周期的傅里叶级数，并求 <Math tex="\sum\frac{1}{n^2}" />。
          </p>
        </Callout>

        <p className="text-sm text-silver-300 mt-3"><Math tex="f" /> 偶函数，<Math tex="b_n=0" />。</p>

        <Math tex="a_0=2\int_0^1(2+x)dx=5" display />
        <Math tex="a_n=2\int_0^1(2+x)\cos n\pi x\,dx=\frac{2[(-1)^n-1]}{n^2\pi^2}" display />

        <p className="text-sm text-silver-300 mt-3">令 <Math tex="x=0" />，利用奇数项结果：</p>
        <Math tex="\sum\frac{1}{(2k+1)^2}=\frac{\pi^2}{8}" display />

        <p className="text-sm text-silver-300 mt-3">再利用：</p>
        <Math tex="\sum\frac{1}{n^2}=\sum\frac{1}{(2k+1)^2}+\frac{1}{4}\sum\frac{1}{n^2}" display />

        <FormulaBlock>
          <div className="text-center">
            <Math tex="\sum_{n=1}^\infty\frac{1}{n^2}=\frac{\pi^2}{6}" display />
            <p className="text-xs text-silver-400 mt-2 text-center">欧拉的巴塞尔问题 · Basel Problem</p>
          </div>
        </FormulaBlock>
      </Collapsible>

      <Collapsible title="24年第五题 · 格林公式证明题" tag="证明题">
        <Callout type="info" title="题目">
          <p>
            函数 <Math tex="u,v" /> 在 <Math tex="D:x^2+y^2\leq 1" /> 上一阶连续偏导。
            <Math tex="\vec{F}=v\vec{i}+u\vec{j}" />，<Math tex="\vec{G}=(u_x-u_y)\vec{i}+(v_x-v_y)\vec{j}" />。
            在 <Math tex="L" /> 上 <Math tex="u\equiv 1,v\equiv y" />。
            证明：<Math tex="\iint_D \vec{F}\cdot\vec{G}\,d\sigma=-\pi" />。
          </p>
        </Callout>

        <Step number={1}>
          <span>展开点积：<Math tex="\vec{F}\cdot\vec{G}=v(u_x-u_y)+u(v_x-v_y)" /></span>
        </Step>
        <Step number={2}>
          <span>
            利用乘积法则：<Math tex="(uv)_x=u_x v+u v_x" /> 和 <Math tex="(uv)_y=u_y v+u v_y" />，
            得 <Math tex="\vec{F}\cdot\vec{G}=(uv)_x-(uv)_y" />。
          </span>
        </Step>
        <Step number={3}>
          <span>
            由格林公式（取 <Math tex="P=Q=uv" />）：
          </span>
        </Step>
        <Math tex="\iint_D[(uv)_x-(uv)_y]d\sigma=\oint_L (uv)dx+(uv)dy" display />
        <Step number={4}>
          <span>
            在 <Math tex="L" /> 上 <Math tex="uv=y" />：
          </span>
        </Step>
        <Math tex="\oint_L y\,dx+y\,dy" display />
        <Step number={5}>
          <span>参数化单位圆 <Math tex="x=\cos\theta,y=\sin\theta" />：</span>
        </Step>
        <Math tex="\oint y\,dx=\int_0^{2\pi}\sin\theta(-\sin\theta)d\theta=-\pi" display />
        <Math tex="\oint y\,dy=\int_0^{2\pi}\sin\theta\cos\theta\,d\theta=0" display />

        <FormulaBlock>
          <p className="text-center text-sm text-silver-200">
            故 <Math tex="\iint_D\vec{F}\cdot\vec{G}\,d\sigma=-\pi" />
            <span className="ml-2 text-cyan-glow">■</span>
          </p>
        </FormulaBlock>

        <Callout type="success" title="考点覆盖">
          <p>多元函数微分 + 格林公式 + 参数化 → 真正的综合题。</p>
        </Callout>
      </Collapsible>
    </SectionBlock>
  );
}
