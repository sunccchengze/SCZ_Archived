import { SectionBlock, SectionHeading, SubHeading, Callout, FormulaBlock } from '../components/ui';
import { Math } from '../components/Math';
import { Quiz } from '../components/Quiz';
import { Collapsible } from '../components/Collapsible';

export function IntegralSection() {
  return (
    <SectionBlock id="integral">
      <SectionHeading
        icon="▽"
        title="重积分"
        label="Part 3 · Multiple Integrals"
        subtitle="二重积分、三重积分及其应用——约 15-20 分"
      />

      {/* 3.1 二重积分 */}
      <SubHeading id="integral-double">二重积分</SubHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { title: '直角坐标', desc: '先 x 后 y 或先 y 后 x' },
          { title: '极坐标', desc: '圆形特征时使用' },
          { title: '对称性', desc: '充分利用对称性简化' },
        ].map((m) => (
          <div key={m.title} className="rounded-xl border border-cyan-border bg-deep/40 p-5">
            <p className="text-sm font-semibold text-silver-100 mb-1">{m.title}</p>
            <p className="text-xs text-silver-400">{m.desc}</p>
          </div>
        ))}
      </div>

      <Callout type="danger" title="对称性应用（极其重要）">
        <p>
          若积分区域 <Math tex="D" /> 关于 <Math tex="x" /> 轴对称：
        </p>
        <ul className="mt-2 space-y-1 ml-4 list-disc">
          <li>被积函数对 <Math tex="y" /> 是奇函数 → 积分为 <strong>0</strong></li>
          <li>被积函数对 <Math tex="y" /> 是偶函数 → 积分为上半部分的 <strong>2 倍</strong></li>
        </ul>
      </Callout>

      <Quiz
        question="（24年单选2）D: x²+y²≤R²，D₁ 是其在第一象限部分。展开 (x+y)² 并利用对称性，下列哪个等式成立？"
        options={[
          { label: 'A', text: '∬_D (x+y)² = 2∬_{D₁}(x²+y²)' },
          { label: 'B', text: '∬_D (x+y)² = ∬_{D₁}(x²+2xy+y²)' },
          { label: 'C', text: '∬_D (x+y)² = 2∬_{D₁}(x²+2xy+y²)' },
          { label: 'D', text: '∬_D (x+y)² = 4∬_{D₁}(x²+y²)' },
        ]}
        correctIndex={3}
        explanation="展开 (x+y)² = x²+2xy+y²。由对称性，∬_D xy dxdy = 0（xy 关于 x 是奇函数），而 x²、y² 关于 x,y 都是偶函数，各等于 4∬_{D₁}。所以 ∬_D (x+y)² = 4∬_{D₁}(x²+y²)。"
      />

      <Collapsible title="23年填空10 · 二次积分交换次序" tag="真题">
        <p className="text-sm text-silver-200 mb-3">
          <Math tex="\int_1^2 dx\int_1^{x^2} f(x,y)dy" /> 改变积分次序。
        </p>
        <p className="text-sm text-silver-300 mb-2">
          画图：<Math tex="1\leq x\leq 2,\;1\leq y\leq x^2" />。转换为 <Math tex="y" /> 型：<Math tex="1\leq y\leq 4,\;\sqrt{y}\leq x\leq 2" />。
        </p>
        <FormulaBlock>
          <Math tex="\int_1^4 dy\int_{\sqrt{y}}^2 f(x,y)dx" display />
        </FormulaBlock>
      </Collapsible>

      {/* 3.2 三重积分 */}
      <SubHeading id="integral-triple">三重积分</SubHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { title: '柱坐标', tex: 'dV=r\\,dr\\,d\\theta\\,dz' },
          { title: '球坐标', tex: 'dV=r^2\\sin\\varphi\\,dr\\,d\\varphi\\,d\\theta' },
          { title: '直角坐标', tex: 'dV=dx\\,dy\\,dz' },
        ].map((m) => (
          <div key={m.title} className="rounded-xl border border-cyan-border bg-deep/40 p-5">
            <p className="text-sm font-semibold text-silver-100 mb-2">{m.title}</p>
            <Math tex={m.tex} />
          </div>
        ))}
      </div>

      <Collapsible title="24年填空6 · 球坐标三重积分" tag="真题">
        <Callout type="info" title="题目">
          <p>求 <Math tex="\iiint_V z^2\,dV" />，<Math tex="V:x^2+y^2+z^2\leq R^2" />。</p>
        </Callout>
        <Math tex="I=\int_0^{2\pi}d\theta\int_0^\pi\sin\varphi\,d\varphi\int_0^R r^2\cos^2\varphi\cdot r^2\,dr" display />
        <Math tex="=2\pi\cdot\frac{2}{3}\cdot\frac{R^5}{5}=\frac{4\pi R^5}{15}" display />
        <p className="text-sm text-silver-300 mt-2">
          注意 <Math tex="\int_0^\pi\cos^2\varphi\sin\varphi\,d\varphi=\frac{2}{3}" />（设 <Math tex="u=\cos\varphi" />）。
        </p>
      </Collapsible>
    </SectionBlock>
  );
}
