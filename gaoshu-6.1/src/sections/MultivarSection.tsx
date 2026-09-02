import { SectionBlock, SectionHeading, SubHeading, Callout, FormulaBlock, Step, Tag } from '../components/ui';
import { Math } from '../components/Math';
import { Quiz } from '../components/Quiz';
import { Collapsible } from '../components/Collapsible';

export function MultivarSection() {
  return (
    <SectionBlock id="multivar">
      <SectionHeading
        icon="△"
        title="多元函数微分学"
        label="Part 2 · Multivariable Calculus"
        subtitle="偏导、可微、链式法则、极值——约 25-30 分"
      />

      {/* 2.1 四个性质 */}
      <SubHeading id="multivar-props">四个性质的关系 <Tag color="danger">高频考点</Tag></SubHeading>

      <p className="text-sm text-silver-200 leading-relaxed mb-6 max-w-2xl">
        每年必考。弄清楚二元函数 <Math tex="f(x,y)" /> 的四个性质：<strong className="text-silver-100">连续、偏导数存在、可微、偏导数连续</strong>之间的关系。
      </p>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">核心关系图</p>
        <Math
          tex="\text{偏导数连续} \;\Rightarrow\; \text{可微} \;\Rightarrow\; \begin{cases} \text{连续} \\ \text{偏导数存在} \end{cases}"
          display
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag color="danger">所有箭头不可逆</Tag>
          <Tag color="warning">连续 ⇔ 偏导存在 无蕴含</Tag>
        </div>
      </FormulaBlock>

      {/* Quiz */}
      <Quiz
        question="（24年期末第5题）对于二元函数 z = f(x,y)，下列说法正确的是："
        options={[
          { label: 'A', text: '若函数可偏导，则一定连续' },
          { label: 'B', text: '若函数可微，则一定存在偏导数，且偏导数连续' },
          { label: 'C', text: '若函数两个偏导数都存在，则一定可微' },
          { label: 'D', text: '若函数两个混合偏导 f_xy 和 f_yx 连续，则 f_xy = f_yx' },
        ]}
        correctIndex={3}
        explanation="A错：可偏导推不出连续。B错：可微只能推出偏导数存在，不能推出偏导数连续。C错：偏导数存在推不出可微。D对：这是混合偏导相等的充分条件（克莱罗定理）。"
      />

      <Collapsible title="经典反例集（必须记住）" tag="反例">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-mono text-cyan-dim mb-2">反例1：偏导存在但不连续</p>
            <Math
              tex="f(x,y)=\begin{cases}\dfrac{xy}{x^2+y^2}, & (x,y)\neq(0,0) \\ 0, & (x,y)=(0,0)\end{cases}"
              display
            />
            <p className="text-sm text-silver-300">
              原点处偏导数存在（都为0），但沿 <Math tex="y=kx" /> 取极限值不同，不连续。
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-cyan-dim mb-2">反例2：24年单选第1题</p>
            <Math
              tex="f(x,y)=\begin{cases}\dfrac{5x^2 y}{x^4+y^2}, & x^2+y^2\neq 0 \\ 0, & x^2+y^2=0\end{cases}"
              display
            />
            <p className="text-sm text-silver-300">
              沿 <Math tex="y=x^2" /> 趋近原点，极限为 5/2 ≠ 0，不连续；但 <Math tex="f_x(0,0)=f_y(0,0)=0" />，偏导数存在。
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-cyan-dim mb-2">反例3：偏导存在但不可微</p>
            <Math tex="f(x,y)=\sqrt{|xy|}" display />
            <p className="text-sm text-silver-300">在原点偏导数存在但不可微。</p>
          </div>
        </div>
      </Collapsible>

      <Collapsible title="判断可微性的标准方法" tag="方法">
        <p className="text-sm text-silver-200 mb-4">
          题目问 <Math tex="f(x,y)" /> 在 <Math tex="(x_0,y_0)" /> 处是否可微：
        </p>
        <Step number={1}>
          <span>验证偏导数存在，求出 <Math tex="f_x(x_0,y_0)" /> 和 <Math tex="f_y(x_0,y_0)" />。若某个偏导数不存在 → 不可微。</span>
        </Step>
        <Step number={2}>
          <span>计算极限：</span>
        </Step>
        <Math
          tex="\lim_{(\Delta x,\Delta y)\to(0,0)}\frac{f(x_0+\Delta x, y_0+\Delta y)-f(x_0,y_0)-f_x\Delta x-f_y\Delta y}{\sqrt{\Delta x^2+\Delta y^2}}"
          display
        />
        <p className="text-sm text-silver-300 mt-2">极限 = 0 → 可微；≠ 0 或不存在 → 不可微。</p>
      </Collapsible>

      <Collapsible title="23年第11题 · 经典综合题（详解）" tag="真题">
        <Callout type="info" title="题目">
          <p>
            已知 <Math tex="z=f(x,y)" /> 在 <Math tex="(0,0)" /> 邻域内连续，且
          </p>
          <Math tex="\lim_{(x,y)\to(0,0)}\dfrac{f(x,y)}{1-\cos\sqrt{x^2+y^2}}=-2" display />
          <p>讨论 <Math tex="f(x,y)" /> 在 <Math tex="(0,0)" /> 处的可微性及是否取得极值。</p>
        </Callout>

        <p className="text-sm text-silver-200 mt-4 mb-3 font-medium">解答：</p>

        <Step number={1}>
          <span>由极限条件和分母趋于 0，得 <Math tex="f(0,0)=0" />。</span>
        </Step>
        <Step number={2}>
          <span>
            <Math tex="f(\Delta x,0)" /> 当 <Math tex="\Delta x\to 0" /> 时，是关于 <Math tex="\Delta x^2" /> 的高阶无穷小，故 <Math tex="f_x(0,0)=0" />，同理 <Math tex="f_y(0,0)=0" />。
          </span>
        </Step>
        <Step number={3}>
          <span>验证可微性：</span>
        </Step>
        <Math
          tex="\lim\frac{f(\Delta x,\Delta y)}{\sqrt{\Delta x^2+\Delta y^2}}=\lim\frac{f(\Delta x,\Delta y)}{1-\cos\sqrt{\Delta x^2+\Delta y^2}}\cdot\frac{1-\cos\sqrt{\Delta x^2+\Delta y^2}}{\sqrt{\Delta x^2+\Delta y^2}}"
          display
        />
        <p className="text-sm text-silver-300 mb-4">
          利用 <Math tex="1-\cos u\sim u^2/2" />，后一个因子趋于 0，前一个趋于 −2。总极限为 0，<strong className="text-success">可微</strong>。
        </p>
        <Step number={4}>
          <span>
            极值：由保号性，邻域内 <Math tex="f(x,y)<0=f(0,0)" />，故 <Math tex="(0,0)" /> 是<strong className="text-cyan-glow">极大值点</strong>。
          </span>
        </Step>
      </Collapsible>

      {/* 2.2 链式法则 */}
      <SubHeading id="multivar-chain">偏导数与链式法则</SubHeading>

      <Collapsible title="24年第三大题第1题 · 复合函数二阶偏导" tag="真题" defaultOpen>
        <Callout type="info" title="题目">
          <p>设 <Math tex="z=x^3 f(xy, y/x)" />，<Math tex="f" /> 具有二阶连续偏导数，求 <Math tex="\dfrac{\partial^2 z}{\partial y^2}" /> 及 <Math tex="\dfrac{\partial^2 z}{\partial x\partial y}" />。</p>
        </Callout>

        <p className="text-sm text-silver-300 mt-4">
          记 <Math tex="u=xy,\;v=y/x" />，则 <Math tex="z=x^3 f(u,v)" />。
        </p>

        <Step number={1}>
          <span>求 <Math tex="\partial z/\partial y" />：</span>
        </Step>
        <Math tex="\frac{\partial z}{\partial y}=x^3\left(f_1\cdot x+f_2\cdot\frac{1}{x}\right)=x^4 f_1+x^2 f_2" display />

        <Step number={2}>
          <span>求 <Math tex="\partial^2 z/\partial y^2" />（注意 <Math tex="f_1, f_2" /> 仍是 <Math tex="(u,v)" /> 的复合函数）：</span>
        </Step>
        <Math tex="\frac{\partial^2 z}{\partial y^2}=x^5 f_{11}+2x^3 f_{12}+x f_{22}" display />

        <Callout type="warning" title="关键技巧">
          <p>① 记号要清楚：<Math tex="f_1" /> 表示 <Math tex="f" /> 对第一个变量的偏导。</p>
          <p>② 求二阶偏导时，<Math tex="f_i" /> 仍是复合函数，需再次用链式法则。</p>
          <p>③ 善用 <Math tex="f_{12}=f_{21}" /> 简化计算。</p>
        </Callout>
      </Collapsible>

      {/* 2.3 隐函数 */}
      <SubHeading id="multivar-implicit">隐函数求导</SubHeading>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">隐函数偏导公式</p>
        <p className="text-sm text-silver-200 mb-3">
          方程 <Math tex="F(x,y,z)=0" /> 隐式定义 <Math tex="z=z(x,y)" />：
        </p>
        <Math tex="\frac{\partial z}{\partial x}=-\frac{F_x}{F_z},\quad \frac{\partial z}{\partial y}=-\frac{F_y}{F_z}" display />
      </FormulaBlock>

      <Collapsible title="例题：全微分法求隐函数" tag="例题">
        <p className="text-sm text-silver-200 mb-3">
          <Math tex="e^z-xy+yz=e" /> 在 <Math tex="(0,0,1)" /> 处求 <Math tex="dz" />。
        </p>
        <p className="text-sm text-silver-300 mb-2">两边求微分：</p>
        <Math tex="e^z dz - y\,dx - x\,dy + z\,dy + y\,dz = 0" display />
        <p className="text-sm text-silver-300">
          代入 <Math tex="(0,0,1)" />：<Math tex="e\cdot dz + dy = 0" />，即 <Math tex="dz=-\dfrac{1}{e}dy" />。
        </p>
      </Collapsible>

      {/* 2.4 方向导数与梯度 */}
      <SubHeading id="multivar-gradient">方向导数与梯度</SubHeading>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">核心公式</p>
        <div className="space-y-2 text-sm text-silver-200">
          <p>梯度：<Math tex="\nabla f=(f_x, f_y, f_z)" /></p>
          <p>方向导数：<Math tex="\dfrac{\partial f}{\partial \vec{l}}=\nabla f\cdot \vec{e}_l" />（<Math tex="\vec{e}_l" /> 为单位向量）</p>
          <p>方向导数最大值 = <Math tex="|\nabla f|" />，方向沿梯度方向</p>
        </div>
      </FormulaBlock>

      <Collapsible title="24年填空1 · 方向导数计算" tag="真题">
        <p className="text-sm text-silver-200 mb-3">
          <Math tex="u=1+\dfrac{x^2}{6}+\dfrac{y^2}{12}+\dfrac{z^2}{18}" />，<Math tex="\vec{n}=\dfrac{1}{\sqrt{3}}(1,1,1)" />，求 <Math tex="\dfrac{\partial u}{\partial \vec{n}}\Big|_{(1,2,3)}" />。
        </p>
        <Math tex="\nabla u\Big|_{(1,2,3)}=\left(\frac{1}{3},\frac{1}{3},\frac{1}{3}\right)" display />
        <Math tex="\frac{\partial u}{\partial\vec{n}}=\frac{1}{3}\cdot\frac{1}{\sqrt{3}}\cdot 3 = \frac{\sqrt{3}}{3}" display />
      </Collapsible>

      {/* 2.5 切线与切平面 */}
      <SubHeading id="multivar-tangent">空间曲线的切线与曲面的切平面</SubHeading>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">曲面 F(x,y,z)=0 的切平面</p>
        <p className="text-sm text-silver-200 mb-2">法向量：<Math tex="\nabla F|_{P_0}=(F_x, F_y, F_z)|_{P_0}" /></p>
        <Math tex="F_x(x-x_0)+F_y(y-y_0)+F_z(z-z_0)=0" display />
      </FormulaBlock>

      <Collapsible title="24年填空3 · 求平行切平面" tag="真题">
        <Callout type="info" title="题目">
          <p>曲面 <Math tex="z=x^2+y^2" /> 上一点处与平面 <Math tex="2x+4y-z=0" /> 平行的切平面方程。</p>
        </Callout>
        <p className="text-sm text-silver-300 mt-3">
          记 <Math tex="F=z-x^2-y^2" />，<Math tex="\nabla F=(-2x,-2y,1)" />。平行条件：
        </p>
        <Math tex="\frac{-2x_0}{2}=\frac{-2y_0}{4}=\frac{1}{-1}" display />
        <p className="text-sm text-silver-300">
          解得 <Math tex="x_0=1,\;y_0=2,\;z_0=5" />。切平面：<Math tex="2x+4y-z=5" />。
        </p>
      </Collapsible>

      {/* 2.6 极值与最值 */}
      <SubHeading id="multivar-extrema">多元函数的极值与最值</SubHeading>

      <FormulaBlock>
        <p className="text-xs font-mono text-cyan-dim mb-3 tracking-wider uppercase">无条件极值判别</p>
        <div className="space-y-1 text-sm text-silver-200">
          <Step number={1}><span>求驻点：<Math tex="f_x=f_y=0" /></span></Step>
          <Step number={2}><span>计算 <Math tex="A=f_{xx},\;B=f_{xy},\;C=f_{yy}" />，判别式 <Math tex="\Delta=AC-B^2" /></span></Step>
          <Step number={3}>
            <span>
              <Math tex="\Delta>0,A>0" /> → 极小值；<Math tex="\Delta>0,A<0" /> → 极大值；<Math tex="\Delta<0" /> → 非极值；<Math tex="\Delta=0" /> → 不确定
            </span>
          </Step>
        </div>
      </FormulaBlock>

      <Collapsible title="24年第四大题 · 椭圆域上的最值（拉格朗日乘数法）" tag="真题" defaultOpen>
        <Callout type="info" title="题目">
          <p>
            已知 <Math tex="dz=2x\,dx-2y\,dy" />，<Math tex="f(1,1)=2" />，求 <Math tex="f(x,y)" /> 在椭圆域 <Math tex="D:\{x^2+y^2/4\leq 1\}" /> 上的最大值和最小值。
          </p>
        </Callout>

        <Step number={1}>
          <span>由全微分：<Math tex="z=x^2-y^2+C" />。代入 <Math tex="f(1,1)=2" /> 得 <Math tex="C=2" />，故 <Math tex="f(x,y)=x^2-y^2+2" />。</span>
        </Step>
        <Step number={2}>
          <span>内部驻点：<Math tex="(0,0)" />，<Math tex="f(0,0)=2" />。</span>
        </Step>
        <Step number={3}>
          <span>边界参数化：<Math tex="y^2=4(1-x^2)" />，代入 <Math tex="z=5x^2-2" />，<Math tex="-1\leq x\leq 1" />。</span>
        </Step>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-success/20 bg-success/5 p-4 text-center">
            <p className="font-mono text-2xl font-bold text-success">3</p>
            <p className="text-xs text-silver-400 mt-1">最大值（x=±1, y=0）</p>
          </div>
          <div className="rounded-lg border border-danger/20 bg-danger/5 p-4 text-center">
            <p className="font-mono text-2xl font-bold text-danger">−2</p>
            <p className="text-xs text-silver-400 mt-1">最小值（x=0, y=±2）</p>
          </div>
        </div>
      </Collapsible>
    </SectionBlock>
  );
}
