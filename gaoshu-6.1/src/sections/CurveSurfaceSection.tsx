import { SectionBlock, SectionHeading, SubHeading, Callout, FormulaBlock, Step } from '../components/ui';
import { Math } from '../components/Math';
import { Quiz } from '../components/Quiz';
import { Collapsible } from '../components/Collapsible';

export function CurveSurfaceSection() {
  return (
    <SectionBlock id="curve-surface">
      <SectionHeading
        icon="◎"
        title="曲线积分与曲面积分"
        label="Part 4 · Line & Surface Integrals"
        subtitle="分值最大、最容易丢分的部分——约 30-35 分"
      />

      <Callout type="danger" title="重点警告">
        <p>这是高数下分值最大、最容易丢分的模块。必须系统掌握四种积分的计算方法和三大公式（格林、高斯、斯托克斯）。</p>
      </Callout>

      {/* 4.1 */}
      <SubHeading id="cs-type1-curve">第一型曲线积分（对弧长的积分）</SubHeading>

      <FormulaBlock>
        <Math tex="\int_L f(x,y)\,ds" display />
        <p className="text-sm text-silver-200 mt-3">
          参数方程 <Math tex="L:x=x(t),y=y(t),\;t\in[\alpha,\beta]" />，则 <Math tex="ds=\sqrt{x'^2+y'^2}\,dt" />
        </p>
      </FormulaBlock>

      <Quiz
        question="（24年单选3）椭圆 C: 2x²+3y²=6 周长为 l，求 ∮_C(x²/3 + y²/2 - 5x) ds ="
        options={[
          { label: 'A', text: '0' },
          { label: 'B', text: 'l/2' },
          { label: 'C', text: 'l' },
          { label: 'D', text: '2l' },
        ]}
        correctIndex={2}
        explanation="椭圆标准形式 x²/3 + y²/2 = 1，在 C 上该项恒等于 1。5x 关于 x 是奇函数，对称区域上积分为 0。所以原积分 = ∮_C 1·ds = l。"
      />

      {/* 4.2 */}
      <SubHeading id="cs-type2-curve">第二型曲线积分（对坐标的积分）</SubHeading>

      <FormulaBlock>
        <Math tex="\int_L P\,dx+Q\,dy" display />
        <div className="mt-4 space-y-2 text-sm text-silver-200">
          <p>① <strong className="text-silver-100">直接参数化</strong></p>
          <p>② <strong className="text-silver-100">格林公式</strong>（封闭曲线）：</p>
        </div>
        <Math tex="\oint_L P\,dx+Q\,dy=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)d\sigma" display />
        <p className="text-sm text-silver-200">③ <strong className="text-silver-100">路径无关</strong>（条件：<Math tex="\partial P/\partial y=\partial Q/\partial x" />）</p>
      </FormulaBlock>

      <Callout type="warning" title="格林公式注意事项">
        <p>使用格林公式必须满足：</p>
        <ol className="list-decimal ml-4 mt-2 space-y-1">
          <li>曲线封闭、取正向</li>
          <li><Math tex="P, Q" /> 在所围闭区域上有连续偏导数（<strong className="text-warning">无奇点！</strong>）</li>
        </ol>
      </Callout>

      <Quiz
        question="（23年单选4）计算 ∮_C (x dx + y dy)/(x²+y²) 时，下列哪条曲线所围区域上可直接使用格林公式？"
        options={[
          { label: 'A', text: 'x²+y²=1（含原点，不可用）' },
          { label: 'B', text: '(x-1)²+y²=1（过原点，不可用）' },
          { label: 'C', text: '3(x-1)²+y²=2（不含原点，可用）' },
          { label: 'D', text: '|x|+|y|=1（含原点，不可用）' },
        ]}
        correctIndex={2}
        explanation="被积函数在原点处无定义（奇点），格林公式要求区域内无奇点。只有 C 选项 3(x-1)²+y²=2 所围区域不包含原点，可直接使用。"
      />

      <Collapsible title="24年第三大题第6题 · 路径无关 + 凑微分" tag="真题">
        <Callout type="info" title="题目">
          <p>
            设 <Math tex="f(x)" /> 有连续导数，计算曲线积分（<Math tex="L" /> 从 <Math tex="A(3,2/3)" /> 到 <Math tex="B(1,2)" />）：
          </p>
          <Math tex="\int_L \frac{1+y^2 f(xy)}{y}dx+\frac{x}{y^2}[y^2 f(xy)-1]dy" display />
        </Callout>

        <Step number={1}>
          <span>验证 <Math tex="\partial P/\partial y=\partial Q/\partial x" />，确认路径无关。</span>
        </Step>
        <Step number={2}>
          <span>凑微分：</span>
        </Step>
        <p className="text-sm text-silver-300 ml-11 mb-2">
          注意 <Math tex="\frac{1}{y}dx-\frac{x}{y^2}dy=d\!\left(\frac{x}{y}\right)" />，<Math tex="yf(xy)dx+xf(xy)dy=f(xy)\,d(xy)" />
        </p>
        <Step number={3}>
          <span>原积分 <Math tex="=\left[\frac{x}{y}+F(xy)\right]_A^B" />，其中 <Math tex="F" /> 是 <Math tex="f" /> 的原函数。</span>
        </Step>
        <p className="text-sm text-silver-300 ml-11 mb-2">
          两点 <Math tex="xy" /> 均为 2，<Math tex="F(2)" /> 项抵消！只需算 <Math tex="x/y" /> 之差。
        </p>
        <FormulaBlock>
          <Math tex="\frac{1}{2}-\frac{9}{2}=-4" display />
        </FormulaBlock>
        <Callout type="info">
          <p className="text-xs text-silver-400">
            解题思路是关键：先验证路径无关 → 再凑微分或选简单路径。请同学们以标准答案为准，掌握方法最重要。
          </p>
        </Callout>
      </Collapsible>

      {/* 4.3 */}
      <SubHeading id="cs-type1-surface">第一型曲面积分</SubHeading>

      <FormulaBlock>
        <Math tex="\iint_\Sigma f(x,y,z)\,dS" display />
        <p className="text-sm text-silver-200 mt-3">
          若 <Math tex="\Sigma:z=z(x,y)" />，投影到 <Math tex="xOy" /> 面为 <Math tex="D" />，则 <Math tex="dS=\sqrt{1+z_x^2+z_y^2}\,dxdy" />
        </p>
      </FormulaBlock>

      <Collapsible title="24年第三大题第2题 · 圆锥面积分" tag="真题">
        <Callout type="info" title="题目">
          <p>计算 <Math tex="\iint_\Sigma(x+y+z)dS" />，<Math tex="\Sigma" /> 为圆锥面 <Math tex="z=\sqrt{x^2+y^2}" />，<Math tex="0\leq z\leq 1" />。</p>
        </Callout>
        <p className="text-sm text-silver-300 mt-3">
          <Math tex="\sqrt{1+z_x^2+z_y^2}=\sqrt{2}" />，投影域 <Math tex="D:x^2+y^2\leq 1" />。
        </p>
        <p className="text-sm text-silver-300">
          由对称性 <Math tex="\iint_D x\,dxdy=\iint_D y\,dxdy=0" />，剩下：
        </p>
        <Math tex="I=\sqrt{2}\int_0^{2\pi}d\theta\int_0^1 r^2\,dr=\frac{2\sqrt{2}\pi}{3}" display />
      </Collapsible>

      {/* 4.4 */}
      <SubHeading id="cs-type2-surface">第二型曲面积分</SubHeading>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">高斯公式（封闭曲面外侧）</p>
        <Math tex="\oiint_\Sigma P\,dy\wedge dz+Q\,dz\wedge dx+R\,dx\wedge dy=\iiint_V\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dV" display />
      </FormulaBlock>

      <Callout type="warning" title="高斯公式步骤">
        <ol className="list-decimal ml-4 space-y-1">
          <li>曲面不封闭 → <strong className="text-warning">补面</strong>让它封闭</li>
          <li>注意补面后整体取<strong className="text-warning">外侧</strong></li>
          <li>用高斯公式后，<strong className="text-warning">减去补面</strong>的积分</li>
        </ol>
      </Callout>

      <Collapsible title="24年第三大题第3题 · 高斯公式（关键技巧）" tag="真题">
        <Callout type="info" title="题目">
          <p>
            <Math tex="\Sigma" /> 为 <Math tex="z=9-x^2-y^2" />（<Math tex="z\geq 0" />），取上侧。分母为 <Math tex="z+x^2+y^2" />。
          </p>
        </Callout>
        <Callout type="success" title="关键观察">
          <p>在曲面上，<Math tex="z+x^2+y^2=9" /> 是常数！可以直接提出来！</p>
        </Callout>
        <p className="text-sm text-silver-300 mt-3">
          补面 <Math tex="\Sigma_0:z=0" /> 取下侧 → 封闭曲面外侧 → 高斯公式 → 减去补面积分。
        </p>
        <p className="text-sm text-silver-300 mt-2">
          技巧核心：<strong className="text-cyan-glow">先看分母是否在曲面上为常数；不封闭就补面用高斯</strong>。
        </p>
      </Collapsible>

      <Collapsible title="24年第三大题第4题 · 斯托克斯公式 / 参数化" tag="真题">
        <Callout type="info" title="题目">
          <p>
            计算 <Math tex="\oint_\Gamma y^2 dx+xy\,dy+xz\,dz" />，<Math tex="\Gamma" /> 为柱面 <Math tex="x^2+y^2=2y" /> 与平面 <Math tex="y=z" /> 的交线。
          </p>
        </Callout>
        <p className="text-sm text-silver-300 mt-3">
          参数化：<Math tex="x=\cos t,\;y=1+\sin t,\;z=1+\sin t" />。注意方向判定。
        </p>
        <FormulaBlock>
          <p className="text-center">
            <span className="text-sm text-silver-200">结果：</span>
            <span className="font-mono text-xl font-bold text-cyan-glow ml-2">−π</span>
          </p>
        </FormulaBlock>
      </Collapsible>
    </SectionBlock>
  );
}
