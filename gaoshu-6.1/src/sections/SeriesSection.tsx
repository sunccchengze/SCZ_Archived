import { SectionBlock, SectionHeading, SubHeading, Callout, FormulaBlock } from '../components/ui';
import { Math } from '../components/Math';
import { Quiz } from '../components/Quiz';
import { Collapsible } from '../components/Collapsible';

export function SeriesSection() {
  return (
    <SectionBlock id="series">
      <SectionHeading
        icon="∞"
        title="无穷级数"
        label="Part 5 · Infinite Series"
        subtitle="数项级数、幂级数、傅里叶级数——约 20-25 分"
      />

      {/* 5.1 */}
      <SubHeading id="series-convergence">数项级数的收敛性判别</SubHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl border border-cyan-border bg-deep/40 p-5">
          <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">正项级数判别法</p>
          <ul className="space-y-2 text-sm text-silver-200">
            <li>• <strong className="text-silver-100">比较判别法</strong>（极限形式）：<Math tex="\lim a_n/b_n=\lambda\in(0,\infty)" /> → 同敛散</li>
            <li>• <strong className="text-silver-100">比值判别法</strong>：<Math tex="\lim a_{n+1}/a_n=\rho" /></li>
            <li>• <strong className="text-silver-100">根值判别法</strong>：<Math tex="\lim\sqrt[n]{a_n}=\rho" /></li>
            <li>• <strong className="text-silver-100">积分判别法</strong></li>
          </ul>
        </div>
        <div className="rounded-xl border border-cyan-border bg-deep/40 p-5">
          <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">必背标准级数</p>
          <ul className="space-y-2 text-sm text-silver-200">
            <li>• 几何级数：<Math tex="\sum q^n" />，<Math tex="|q|<1" /> 收敛</li>
            <li>• <Math tex="p" />-级数：<Math tex="\sum 1/n^p" />，<Math tex="p>1" /> 收敛</li>
            <li>• 调和级数：<Math tex="\sum 1/n" /> <span className="text-danger font-medium">发散</span></li>
            <li>• 交错级数：莱布尼茨判别法</li>
          </ul>
        </div>
      </div>

      <Quiz
        question="（24年单选4）下列级数中收敛的是："
        options={[
          { label: 'A', text: 'Σ(√(n+1)−√n)：通项 ~ 1/(2√n)，发散' },
          { label: 'B', text: 'Σ 1/(n²−1)：通项 ~ 1/n²，收敛' },
          { label: 'C', text: 'Σ 1/√(2n²+1)：通项 ~ 1/(√2·n)，发散' },
          { label: 'D', text: 'Σ (n−1)/(2n) → 1/2 ≠ 0，发散' },
        ]}
        correctIndex={1}
        explanation="A：通项 ~ 1/(2√n)，p=1/2 级数发散。B：通项 ~ 1/n²，p=2>1 收敛。C：通项 ~ 1/n，调和级数发散。D：通项不趋于 0，必然发散。"
      />

      <Quiz
        question="（23年单选3）Σ(-1)ⁿ ln(1+a/n)（a>0）的敛散性？"
        options={[
          { label: 'A', text: '绝对收敛' },
          { label: 'B', text: '发散' },
          { label: 'C', text: '条件收敛' },
          { label: 'D', text: '无法判断' },
        ]}
        correctIndex={2}
        explanation="aₙ = ln(1+a/n) 单调减、趋于 0，交错级数收敛。但绝对值 ln(1+a/n) ~ a/n，与调和级数比较发散。所以条件收敛。"
      />

      {/* 5.2 */}
      <SubHeading id="series-power">幂级数</SubHeading>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">收敛半径</p>
        <Math tex="R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|" display />
        <Callout type="danger" title="易错">
          <p>求出 <Math tex="R" /> 后，必须<strong className="text-danger">单独检查端点</strong>的收敛性！</p>
        </Callout>
      </FormulaBlock>

      <Collapsible title="24年填空4 · 收敛域" tag="真题" defaultOpen>
        <p className="text-sm text-silver-200 mb-3">
          <Math tex="\sum_{n=1}^\infty\dfrac{(x-3)^n}{\sqrt{n}}" /> 的收敛域。
        </p>
        <p className="text-sm text-silver-300 mb-2">
          <Math tex="R=1" />，收敛区间 <Math tex="|x-3|<1" /> 即 <Math tex="(2,4)" />。
        </p>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="rounded-lg border border-success/20 bg-success/5 p-3">
            <p className="text-xs font-mono text-success mb-1">x = 2</p>
            <p className="text-xs text-silver-300">
              <Math tex="\sum\frac{(-1)^n}{\sqrt{n}}" /> 交错级数 → <span className="text-success">收敛</span>
            </p>
          </div>
          <div className="rounded-lg border border-danger/20 bg-danger/5 p-3">
            <p className="text-xs font-mono text-danger mb-1">x = 4</p>
            <p className="text-xs text-silver-300">
              <Math tex="\sum\frac{1}{\sqrt{n}}" /> p=1/2 → <span className="text-danger">发散</span>
            </p>
          </div>
        </div>
        <FormulaBlock>
          <p className="text-center text-sm">
            收敛域：<span className="font-mono text-lg font-bold text-cyan-glow">[2, 4)</span>
          </p>
        </FormulaBlock>
      </Collapsible>

      <Quiz
        question="（24年单选6·阿贝尔定理）幂级数 Σaₙ(x-1)ⁿ 在 x=-1 收敛，则在 x=3 处？"
        options={[
          { label: 'A', text: '绝对收敛' },
          { label: 'B', text: '条件收敛' },
          { label: 'C', text: '发散' },
          { label: 'D', text: '敛散性不能确定' },
        ]}
        correctIndex={3}
        explanation="x=-1 距中心 1 的距离为 2。由阿贝尔定理，|x-1|<2 时绝对收敛。x=3 时 |x-1|=2，恰好在收敛半径上，敛散性不能确定。"
      />

      <Collapsible title="必背幂级数展开公式" tag="公式">
        <div className="space-y-3">
          {[
            { name: '指数', tex: 'e^x=\\sum\\frac{x^n}{n!}' },
            { name: '正弦', tex: '\\sin x=\\sum\\frac{(-1)^n x^{2n+1}}{(2n+1)!}' },
            { name: '余弦', tex: '\\cos x=\\sum\\frac{(-1)^n x^{2n}}{(2n)!}' },
            { name: '对数', tex: '\\ln(1+x)=\\sum\\frac{(-1)^{n-1}x^n}{n},\\;x\\in(-1,1]' },
            { name: '几何', tex: '\\frac{1}{1-x}=\\sum x^n,\\;|x|<1' },
            { name: '反正切', tex: '\\arctan x=\\sum\\frac{(-1)^n x^{2n+1}}{2n+1},\\;|x|\\leq 1' },
          ].map((f) => (
            <div key={f.name} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-12 text-right font-mono text-xs text-cyan-dim">{f.name}</span>
              <Math tex={f.tex} />
            </div>
          ))}
        </div>
      </Collapsible>

      <Collapsible title="23年第17题 · 幂级数展开" tag="真题">
        <Callout type="info" title="题目">
          <p>将 <Math tex="f(x)=\frac{1}{4}\ln\frac{1+x}{1-x}+\frac{1}{2}\arctan x-x" /> 展开成 <Math tex="x" /> 的幂级数。</p>
        </Callout>
        <p className="text-sm text-silver-300 mt-3 mb-2">
          利用奇偶项叠加和消去，只剩 <Math tex="n" /> 偶数项（<Math tex="n=2k" />），再减 <Math tex="x" />：
        </p>
        <FormulaBlock>
          <Math tex="f(x)=\sum_{n=1}^\infty\frac{x^{4n+1}}{4n+1},\quad x\in(-1,1)" display />
        </FormulaBlock>
      </Collapsible>

      {/* 5.3 */}
      <SubHeading id="series-fourier">傅里叶级数</SubHeading>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">周期 2π 的傅里叶级数</p>
        <Math tex="f(x)\sim\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)" display />
        <div className="mt-3 space-y-1 text-sm text-silver-200">
          <p><Math tex="a_n=\frac{1}{\pi}\int_{-\pi}^\pi f(x)\cos nx\,dx" /></p>
          <p><Math tex="b_n=\frac{1}{\pi}\int_{-\pi}^\pi f(x)\sin nx\,dx" /></p>
        </div>
      </FormulaBlock>

      <Callout type="warning" title="狄利克雷定理（必考）">
        <ul className="space-y-1">
          <li>• 连续点处收敛于 <Math tex="f(x)" /></li>
          <li>• 间断点处收敛于 <Math tex="\frac{f(x_0^-)+f(x_0^+)}{2}" /></li>
        </ul>
      </Callout>

      <Collapsible title="24年第三大题第5题 · |x| 的傅里叶级数" tag="真题" defaultOpen>
        <Callout type="info" title="题目">
          <p>
            <Math tex="f(x)=|x|" />（<Math tex="-\pi\leq x\leq\pi" />）展开成傅里叶级数，并求 <Math tex="\sum\frac{1}{(2n-1)^2}" />。
          </p>
        </Callout>
        <p className="text-sm text-silver-300 mt-3 mb-2">
          偶函数 → <Math tex="b_n=0" />。计算 <Math tex="a_0=\pi" />，<Math tex="a_n=\frac{2[(-1)^n-1]}{\pi n^2}" />。
        </p>
        <FormulaBlock>
          <Math tex="f(x)=\frac{\pi}{2}-\frac{4}{\pi}\sum_{n=1}^\infty\frac{\cos(2n-1)x}{(2n-1)^2}" display />
        </FormulaBlock>
        <p className="text-sm text-silver-300">
          令 <Math tex="x=0" />：
        </p>
        <FormulaBlock>
          <Math tex="\sum_{n=1}^\infty\frac{1}{(2n-1)^2}=\frac{\pi^2}{8}" display />
        </FormulaBlock>
      </Collapsible>
    </SectionBlock>
  );
}
