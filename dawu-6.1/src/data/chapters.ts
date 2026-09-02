export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'text' | 'formula' | 'important' | 'example' | 'table' | 'tip' | 'warning' | 'quiz' | 'list';
  content?: string;
  items?: string[];
  formula?: string;
  label?: string;
  headers?: string[];
  rows?: string[][];
  question?: string;
  options?: string[];
  answer?: number;
  explanation?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  icon: string;
  color: 'purple' | 'blue' | 'mixed';
  sections: Section[];
}

export const chapters: Chapter[] = [
  {
    id: 'intro',
    number: '〇',
    title: '开场——如何读懂这份真题集',
    icon: '📋',
    color: 'purple',
    sections: [
      {
        id: 'intro-overview',
        title: '考试概览',
        content: [
          {
            type: 'important',
            content: '这门课的期末考试考察的知识点是高度重复的。只要你把核心考点彻底搞透，拿到一个不错的分数是完全可以实现的。'
          },
          {
            type: 'text',
            content: '考试的大致结构：'
          },
          {
            type: 'list',
            items: [
              '选择题（约30分）：考察概念理解，不需要复杂计算',
              '填空题（约30分）：考察基本公式应用，计算量中等',
              '计算题（约40分）：考察综合解题能力，拉开分差的关键'
            ]
          }
        ]
      },
      {
        id: 'intro-topics',
        title: '高频考点分布',
        content: [
          {
            type: 'table',
            headers: ['排名', '考点', '出现频率'],
            rows: [
              ['1', '静电场（高斯定理、电场强度、电势）', '★★★★★'],
              ['2', '相对论（时间膨胀、长度收缩、质能关系）', '★★★★★'],
              ['3', '导体与电介质（静电平衡、电位移矢量）', '★★★★☆'],
              ['4', '磁场（安培环路定理、毕奥-萨伐尔定律）', '★★★★☆'],
              ['5', '电磁感应（法拉第定律、互感自感）', '★★★☆☆'],
              ['6', '刚体转动与碰撞（转动惯量、角动量守恒）', '★★★☆☆'],
              ['7', '质点运动学（位移、速度、加速度）', '★★☆☆☆']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kinematics',
    number: '一',
    title: '质点运动学',
    icon: '🚀',
    color: 'blue',
    sections: [
      {
        id: 'kinematics-basics',
        title: '核心概念',
        content: [
          {
            type: 'formula',
            label: '位置向量（位矢）',
            formula: '\\vec{r} = x\\vec{i} + y\\vec{j} + z\\vec{k}'
          },
          {
            type: 'formula',
            label: '速度',
            formula: '\\vec{v} = \\frac{d\\vec{r}}{dt} = \\frac{dx}{dt}\\vec{i} + \\frac{dy}{dt}\\vec{j} + \\frac{dz}{dt}\\vec{k}'
          },
          {
            type: 'formula',
            label: '加速度',
            formula: '\\vec{a} = \\frac{d\\vec{v}}{dt}'
          }
        ]
      },
      {
        id: 'kinematics-integration',
        title: '反向积分技巧',
        content: [
          {
            type: 'text',
            content: '真题中反复出现的题型：已知速度v(t)或加速度a(x)，求运动方程。'
          },
          {
            type: 'example',
            content: '质点速度 v = 4 + t² (m/s)，当 t=3s 时，质点在 x=9m 处，求运动方程。'
          },
          {
            type: 'formula',
            label: '解',
            formula: 'x = \\int v \\, dt = \\int (4 + t^2) dt = 4t + \\frac{1}{3}t^3 + C'
          },
          {
            type: 'text',
            content: '代入条件：当 t=3 时，x=9，得 C = -12'
          },
          {
            type: 'formula',
            label: '答案',
            formula: '\\boxed{x = 4t + \\frac{1}{3}t^3 - 12 \\text{ (m)}}'
          },
          {
            type: 'warning',
            content: '一定要用初始条件定积分常数 C，这是最常见的失分点！'
          }
        ]
      },
      {
        id: 'kinematics-acceleration',
        title: '切向与法向加速度',
        content: [
          {
            type: 'text',
            content: '对于曲线运动，需要分解加速度：'
          },
          {
            type: 'formula',
            label: '速度大小',
            formula: 'v = \\sqrt{v_x^2 + v_y^2}'
          },
          {
            type: 'formula',
            label: '切向加速度（反映速度大小变化）',
            formula: 'a_t = \\frac{dv}{dt}'
          },
          {
            type: 'formula',
            label: '法向加速度（反映速度方向变化）',
            formula: 'a_n = \\sqrt{a^2 - a_t^2}'
          },
          {
            type: 'tip',
            content: '这个知识点在2021-2022年期末考试中考了两次（选择题+计算题），必须掌握！'
          }
        ]
      },
      {
        id: 'kinematics-chain',
        title: '链式法则处理 a(x) 问题',
        content: [
          {
            type: 'text',
            content: '当加速度是位移的函数时，需要用：'
          },
          {
            type: 'formula',
            label: '核心变换',
            formula: 'a = \\frac{dv}{dt} = \\frac{dv}{dx} \\cdot \\frac{dx}{dt} = v\\frac{dv}{dx}'
          },
          {
            type: 'formula',
            label: '积分形式',
            formula: 'a \\, dx = v \\, dv'
          },
          {
            type: 'example',
            content: 'a = 5 + 3x²，初速度 v₀ = 1 m/s，求 x=4m 时的速度。'
          },
          {
            type: 'formula',
            label: '解',
            formula: '\\int_0^4 (5+3x^2)dx = \\int_1^v v \\, dv \\Rightarrow v = 13 \\text{ m/s}'
          }
        ]
      },
      {
        id: 'kinematics-quiz',
        title: '自测题',
        content: [
          {
            type: 'quiz',
            question: '质点的加速度 a = 2t (m/s²)，初速度 v₀ = 0，则 t = 3s 时的速度是？',
            options: ['3 m/s', '6 m/s', '9 m/s', '18 m/s'],
            answer: 2,
            explanation: 'v = ∫a dt = ∫2t dt = t² + C，由 v₀ = 0 得 C = 0，所以 v = t² = 9 m/s'
          }
        ]
      }
    ]
  },
  {
    id: 'rotation',
    number: '二',
    title: '刚体转动与碰撞',
    icon: '⚙️',
    color: 'purple',
    sections: [
      {
        id: 'rotation-inertia',
        title: '转动惯量',
        content: [
          {
            type: 'text',
            content: '转动惯量是刚体转动的核心物理量，类比于平动中的质量。'
          },
          {
            type: 'formula',
            label: '定义式',
            formula: 'J = \\int r^2 \\, dm'
          },
          {
            type: 'table',
            headers: ['刚体类型', '转动轴', '转动惯量'],
            rows: [
              ['细棒（质量m，长L）', '端点轴', 'J = ⅓mL²'],
              ['细棒（质量m，长L）', '中心轴', 'J = 1/12·mL²'],
              ['圆盘/圆柱', '中心轴', 'J = ½mR²'],
              ['圆环', '中心轴', 'J = mR²'],
              ['实心球', '过球心', 'J = ⅖mR²']
            ]
          },
          {
            type: 'important',
            content: '这个积分过程在2017-2018年和2012-2013年计算题中直接考了，不要死记结论，要会推导！'
          }
        ]
      },
      {
        id: 'rotation-theorem',
        title: '转动定理与力矩',
        content: [
          {
            type: 'formula',
            label: '转动定理（类比 F = ma）',
            formula: 'M = J\\beta'
          },
          {
            type: 'text',
            content: '其中 M 是合外力矩，β 是角加速度。'
          },
          {
            type: 'formula',
            label: '摩擦力矩积分（高频考点）',
            formula: 'M_{摩擦} = \\int_0^L \\mu \\frac{m}{L}g \\cdot x \\, dx = \\frac{1}{2}\\mu mgL'
          }
        ]
      },
      {
        id: 'rotation-angular-momentum',
        title: '角动量守恒——碰撞问题核心',
        content: [
          {
            type: 'formula',
            label: '角动量定理',
            formula: 'M_{外} = \\frac{dL}{dt}'
          },
          {
            type: 'important',
            content: '角动量守恒条件：合外力矩为零时，L = Jω = 常量'
          },
          {
            type: 'example',
            content: '长为 l，质量为 M 的均匀细棒可绕O点转动，质量为 m 的质点以初速 v₀ 水平运动，与静止棒末端发生完全非弹性碰撞。'
          },
          {
            type: 'formula',
            label: '角动量守恒',
            formula: 'mv_0 l = \\left(\\frac{1}{3}Ml^2 + ml^2\\right)\\omega'
          },
          {
            type: 'formula',
            label: '碰撞后角速度',
            formula: '\\omega = \\frac{3mv_0}{(M + 3m)l}'
          },
          {
            type: 'warning',
            content: '为什么不用动量守恒？因为O点转轴有约束力，系统在水平方向动量不守恒。但O点约束力过轴，力矩为零，所以角动量守恒。'
          }
        ]
      },
      {
        id: 'rotation-rolling',
        title: '纯滚动问题',
        content: [
          {
            type: 'text',
            content: '圆柱体（I = ½mR²）在桌面上纯滚动，水平力F作用在质心：'
          },
          {
            type: 'formula',
            label: '质心平动',
            formula: 'F - f = ma_c'
          },
          {
            type: 'formula',
            label: '绕质心转动',
            formula: 'fR = \\frac{1}{2}mR^2 \\cdot \\beta'
          },
          {
            type: 'formula',
            label: '纯滚动条件',
            formula: 'a_c = \\beta R'
          },
          {
            type: 'formula',
            label: '联立得质心加速度',
            formula: '\\boxed{a_c = \\frac{2F}{3m}}'
          },
          {
            type: 'warning',
            content: '很多同学错误地以为质心加速度等于 F/m，忽略了摩擦力的作用！'
          }
        ]
      }
    ]
  },
  {
    id: 'relativity',
    number: '三',
    title: '狭义相对论',
    icon: '⚡',
    color: 'mixed',
    sections: [
      {
        id: 'relativity-principles',
        title: '两大基本原理',
        content: [
          {
            type: 'important',
            content: '（1）相对性原理：物理定律在所有惯性系中具有相同的形式。'
          },
          {
            type: 'text',
            content: '这意味着：在惯性系S中动量守恒，在任何其他惯性系中也必然守恒。'
          },
          {
            type: 'important',
            content: '（2）光速不变原理：真空中光速 c 对所有惯性系都相同，与光源运动状态、光的频率无关。'
          },
          {
            type: 'tip',
            content: '这道概念题反复出现：相对性原理、光速与频率/光源状态无关、各方向光速相同——三种说法全部正确。'
          }
        ]
      },
      {
        id: 'relativity-time',
        title: '时间膨胀（钟慢效应）',
        content: [
          {
            type: 'formula',
            label: '时间膨胀公式',
            formula: '\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}} = \\gamma \\Delta t_0'
          },
          {
            type: 'text',
            content: 'Δt₀ 是固有时间（在事件发生地静止的参考系中测得，最短），Δt 是运动参考系中测得（更长）。'
          },
          {
            type: 'important',
            content: '记忆口诀：运动的钟走得慢。'
          },
          {
            type: 'example',
            content: '介子固有寿命 τ₀ = 2×10⁻⁶ s，以 v = 0.6c 运动，在实验室系中寿命多长？'
          },
          {
            type: 'formula',
            label: '解',
            formula: '\\Delta t = \\frac{\\tau_0}{\\sqrt{1 - 0.36}} = \\frac{2 \\times 10^{-6}}{0.8} = 2.5 \\times 10^{-6} \\text{ s}'
          },
          {
            type: 'quiz',
            question: '一个粒子的静止寿命为 τ₀，以 v = 0.8c 的速度运动，实验室中测得的寿命是？',
            options: ['0.6τ₀', 'τ₀', '5τ₀/3', '5τ₀/4'],
            answer: 2,
            explanation: '√(1-0.8²) = 0.6，所以 γ = 1/0.6 = 5/3，实验室寿命 = γτ₀ = 5τ₀/3'
          }
        ]
      },
      {
        id: 'relativity-length',
        title: '长度收缩（尺缩效应）',
        content: [
          {
            type: 'formula',
            label: '长度收缩公式',
            formula: 'L = L_0\\sqrt{1 - v^2/c^2}'
          },
          {
            type: 'text',
            content: 'L₀ 是固有长度（在物体静止的参考系中测得，最长），L 是运动方向上测得（更短）。'
          },
          {
            type: 'warning',
            content: '注意：只在运动方向上收缩，垂直方向不变！'
          },
          {
            type: 'example',
            content: '宇航员要到离地球5光年的星球旅行，希望把路程缩短为3光年，需要多快的速度？'
          },
          {
            type: 'formula',
            label: '解',
            formula: '3 = 5\\sqrt{1 - v^2/c^2} \\Rightarrow v = 0.8c'
          }
        ]
      },
      {
        id: 'relativity-lorentz',
        title: '洛伦兹变换',
        content: [
          {
            type: 'formula',
            label: '坐标变换',
            formula: "x' = \\gamma(x - vt), \\quad t' = \\gamma\\left(t - \\frac{vx}{c^2}\\right)"
          },
          {
            type: 'formula',
            label: '逆变换',
            formula: "x = \\gamma(x' + vt'), \\quad t = \\gamma\\left(t' + \\frac{vx'}{c^2}\\right)"
          },
          {
            type: 'formula',
            label: '洛伦兹因子',
            formula: '\\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}}'
          },
          {
            type: 'important',
            content: '同时的相对性：飞船参考系中同时发生的事件，在地面参考系中不一定同时！'
          }
        ]
      },
      {
        id: 'relativity-energy',
        title: '相对论质量、动量、能量',
        content: [
          {
            type: 'formula',
            label: '相对论质量',
            formula: 'm = \\gamma m_0'
          },
          {
            type: 'formula',
            label: '相对论动量',
            formula: 'p = mv = \\gamma m_0 v'
          },
          {
            type: 'formula',
            label: '相对论能量',
            formula: 'E = mc^2 = \\gamma m_0 c^2'
          },
          {
            type: 'formula',
            label: '动能',
            formula: 'E_k = (\\gamma - 1)m_0 c^2'
          },
          {
            type: 'formula',
            label: '能量-动量关系（非常重要）',
            formula: 'E^2 = (pc)^2 + (m_0 c^2)^2'
          },
          {
            type: 'tip',
            content: '对于光子：m₀ = 0，所以 E = pc，即 E/p = c。'
          },
          {
            type: 'quiz',
            question: '粒子动能等于静止能量的4倍，质量是静止质量的几倍？',
            options: ['3倍', '4倍', '5倍', '6倍'],
            answer: 2,
            explanation: 'Eₖ = 4E₀ → E = 5E₀ → m = 5m₀'
          }
        ]
      }
    ]
  },
  {
    id: 'electrostatics',
    number: '四',
    title: '静电场',
    icon: '⚛️',
    color: 'blue',
    sections: [
      {
        id: 'electrostatics-coulomb',
        title: '库仑定律与场强叠加',
        content: [
          {
            type: 'formula',
            label: '库仑定律',
            formula: 'F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}'
          },
          {
            type: 'formula',
            label: '电场强度',
            formula: '\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}\\hat{r}'
          },
          {
            type: 'important',
            content: '叠加原理：E⃗总 = ΣE⃗ᵢ（矢量叠加！方向不能搞错）'
          }
        ]
      },
      {
        id: 'electrostatics-gauss',
        title: '高斯定理——最重要的工具',
        content: [
          {
            type: 'formula',
            label: '高斯定理',
            formula: '\\oint_S \\vec{E} \\cdot d\\vec{S} = \\frac{\\sum q_{内}}{\\varepsilon_0}'
          },
          {
            type: 'important',
            content: '核心思想：通过闭合曲面的电通量等于面内总电荷除以 ε₀，与面外电荷无关，与面的形状无关。'
          },
          {
            type: 'text',
            content: '三种常见对称性：'
          },
          {
            type: 'list',
            items: [
              '球对称：选球形高斯面',
              '轴对称（柱对称）：选同轴圆柱形高斯面',
              '平面对称：选方形高斯面（"药盒"形）'
            ]
          }
        ]
      },
      {
        id: 'electrostatics-sphere',
        title: '球形带电体场强',
        content: [
          {
            type: 'text',
            content: '均匀带电球壳（球面）：'
          },
          {
            type: 'formula',
            label: '球内（r < R）',
            formula: 'E = 0'
          },
          {
            type: 'formula',
            label: '球外（r > R）',
            formula: 'E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}'
          },
          {
            type: 'example',
            content: '非均匀带电球体：ρ = ρ₀(1 - r/R)，求各点场强。'
          },
          {
            type: 'formula',
            label: '球内场强',
            formula: 'E = \\frac{\\rho_0}{\\varepsilon_0}\\left(\\frac{r}{3} - \\frac{r^2}{4R}\\right)'
          },
          {
            type: 'formula',
            label: '球外场强',
            formula: 'E = \\frac{\\rho_0 R^3}{12\\varepsilon_0 r^2}'
          }
        ]
      },
      {
        id: 'electrostatics-potential',
        title: '电势',
        content: [
          {
            type: 'formula',
            label: '电势定义',
            formula: 'U_A = \\int_A^{参考点} \\vec{E} \\cdot d\\vec{l}'
          },
          {
            type: 'formula',
            label: '电势差',
            formula: 'U_A - U_B = \\int_B^A \\vec{E} \\cdot d\\vec{l}'
          },
          {
            type: 'formula',
            label: '场强与电势关系',
            formula: '\\vec{E} = -\\nabla U'
          },
          {
            type: 'warning',
            content: '积分求电势时，积分下限是终点，上限是起点，很多同学弄反了！'
          }
        ]
      },
      {
        id: 'electrostatics-conductor',
        title: '导体静电平衡',
        content: [
          {
            type: 'list',
            items: [
              '导体内部 E = 0',
              '导体是等势体，表面是等势面',
              '电荷只分布在表面',
              '导体内有空腔时，空腔内无电荷则内表面无感应电荷（静电屏蔽）'
            ]
          }
        ]
      },
      {
        id: 'electrostatics-dielectric',
        title: '电介质中的高斯定理',
        content: [
          {
            type: 'formula',
            label: 'D与E的关系',
            formula: '\\vec{D} = \\varepsilon_0\\varepsilon_r\\vec{E}'
          },
          {
            type: 'formula',
            label: 'D的高斯定理',
            formula: '\\oint_S \\vec{D} \\cdot d\\vec{S} = \\sum q_{自由}'
          },
          {
            type: 'important',
            content: '连接电源（恒压）插介质：E不变，D增大εᵣ倍\n断开电源（恒荷）插介质：D不变，E减小为1/εᵣ'
          }
        ]
      }
    ]
  },
  {
    id: 'magnetism',
    number: '五',
    title: '稳恒磁场',
    icon: '🧲',
    color: 'purple',
    sections: [
      {
        id: 'magnetism-biot',
        title: '毕奥-萨伐尔定律',
        content: [
          {
            type: 'formula',
            label: '毕奥-萨伐尔定律',
            formula: 'd\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{Id\\vec{l} \\times \\hat{r}}{r^2}'
          },
          {
            type: 'formula',
            label: '无限长直导线',
            formula: 'B = \\frac{\\mu_0 I}{2\\pi r}'
          },
          {
            type: 'formula',
            label: '圆形电流圆心处',
            formula: 'B = \\frac{\\mu_0 I}{2R}'
          },
          {
            type: 'formula',
            label: '圆形电流轴线上',
            formula: 'B = \\frac{\\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}'
          }
        ]
      },
      {
        id: 'magnetism-ampere',
        title: '安培环路定理',
        content: [
          {
            type: 'formula',
            label: '安培环路定理',
            formula: '\\oint_L \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\sum I_{穿过}'
          },
          {
            type: 'text',
            content: '长直圆柱导体内外的磁场（均匀电流分布，总电流I，半径R）：'
          },
          {
            type: 'formula',
            label: '柱内（r ≤ R）',
            formula: 'B = \\frac{\\mu_0 Ir}{2\\pi R^2}'
          },
          {
            type: 'formula',
            label: '柱外（r > R）',
            formula: 'B = \\frac{\\mu_0 I}{2\\pi r}'
          }
        ]
      }
    ]
  },
  {
    id: 'induction',
    number: '六',
    title: '电磁感应',
    icon: '🔄',
    color: 'mixed',
    sections: [
      {
        id: 'induction-faraday',
        title: '法拉第电磁感应定律',
        content: [
          {
            type: 'formula',
            label: '法拉第定律',
            formula: '\\varepsilon = -\\frac{d\\Phi_B}{dt}'
          },
          {
            type: 'text',
            content: '计算步骤：'
          },
          {
            type: 'list',
            items: [
              '建立坐标系，确定磁通量 Φ = ∫B⃗·dS⃗',
              '对时间求导（注意B和S都可能随时间变化）',
              '加负号得电动势（楞次定律决定方向）'
            ]
          }
        ]
      },
      {
        id: 'induction-example',
        title: '经典大题：导线旁的线框',
        content: [
          {
            type: 'example',
            content: '线框上边距无限长导线为 x，线框宽度 b，长度 c，导线电流 I'
          },
          {
            type: 'formula',
            label: '磁通量',
            formula: '\\Phi = \\int_x^{x+b} \\frac{\\mu_0 I}{2\\pi r} c \\, dr = \\frac{\\mu_0 Ic}{2\\pi}\\ln\\frac{x+b}{x}'
          },
          {
            type: 'text',
            content: '情形1：线框以匀速v向下运动，I恒定'
          },
          {
            type: 'formula',
            label: '动生电动势',
            formula: '\\varepsilon_1 = \\frac{\\mu_0 Icv}{2\\pi}\\left(\\frac{1}{x} - \\frac{1}{x+b}\\right)'
          },
          {
            type: 'text',
            content: '情形2：线框不动，I = I₀sinωt'
          },
          {
            type: 'formula',
            label: '感生电动势',
            formula: '\\varepsilon_2 = -\\frac{\\mu_0 I_0 c\\omega\\cos\\omega t}{2\\pi}\\ln\\frac{a+b}{a}'
          }
        ]
      },
      {
        id: 'induction-mutual',
        title: '互感与自感',
        content: [
          {
            type: 'formula',
            label: '互感定义',
            formula: 'M = \\frac{\\Psi_{12}}{I_2}'
          },
          {
            type: 'formula',
            label: '互感电动势',
            formula: '\\varepsilon_{互} = -M\\frac{dI}{dt}'
          },
          {
            type: 'formula',
            label: '长直螺线管自感',
            formula: 'L = \\mu_0\\mu_r\\frac{N^2S}{l}'
          },
          {
            type: 'formula',
            label: '自感电动势',
            formula: '\\varepsilon_{自} = -L\\frac{dI}{dt}'
          }
        ]
      }
    ]
  },
  {
    id: 'pitfalls',
    number: '七',
    title: '高频陷阱',
    icon: '⚠️',
    color: 'purple',
    sections: [
      {
        id: 'pitfalls-list',
        title: '最容易踩的10个坑',
        content: [
          {
            type: 'warning',
            content: '坑1：路程缩短用长度收缩，时间延长用时间膨胀——搞清楚固有量是什么。'
          },
          {
            type: 'warning',
            content: '坑2：高斯定理中只有高斯面内的电荷决定总通量，面外电荷影响各点场强，但不影响总通量。'
          },
          {
            type: 'warning',
            content: '坑3：积分求电势时，UA - UB = ∫[B→A] E⃗·dl⃗——积分下限是终点，上限是起点。'
          },
          {
            type: 'warning',
            content: '坑4：电势是标量，叠加时代数相加；场强是矢量，叠加时分量相加。'
          },
          {
            type: 'warning',
            content: '坑5：连接电源插介质——电压不变，D变；断开电源插介质——电荷不变，E变。'
          },
          {
            type: 'warning',
            content: '坑6：完全非弹性碰撞不守恒的是机械能，守恒的可能是动量或角动量。'
          },
          {
            type: 'warning',
            content: '坑7：γ ≥ 1，运动系测量的时间总是比固有时间长，长度总是比固有长度短。'
          },
          {
            type: 'warning',
            content: '坑8：相对论密度：质量增大，长度减小，两个效应叠加。'
          },
          {
            type: 'warning',
            content: '坑9：安培环路定理中的电流是穿过安培回路围合面积的净电流。'
          },
          {
            type: 'warning',
            content: '坑10：感应电动势方向用楞次定律：感应电流产生的磁场总是阻碍原磁通量的变化。'
          }
        ]
      },
      {
        id: 'pitfalls-numbers',
        title: '重要数值记忆',
        content: [
          {
            type: 'table',
            headers: ['数值', '结果', '常见应用'],
            rows: [
              ['√(1-0.6²)', '0.8', 'v=0.6c 时 γ=1.25'],
              ['√(1-0.8²)', '0.6', 'v=0.8c 时 γ=5/3'],
              ['ε₀', '8.85×10⁻¹² F/m', '真空介电常数'],
              ['μ₀', '4π×10⁻⁷ T·m/A', '真空磁导率'],
              ['c', '3×10⁸ m/s', '光速'],
              ['e', '1.6×10⁻¹⁹ C', '元电荷'],
              ['mₑ', '9.1×10⁻³¹ kg', '电子质量']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'strategy',
    number: '八',
    title: '复习策略',
    icon: '📚',
    color: 'blue',
    sections: [
      {
        id: 'strategy-basic',
        title: '基础薄弱（目标60-75分）',
        content: [
          {
            type: 'important',
            content: '优先掌握选择题和填空题（60分）——这是保命线！'
          },
          {
            type: 'list',
            items: [
              '相对论概念题（光速不变原理、γ因子计算）',
              '高斯定理理解（通量只与内部电荷有关）',
              '静电场基本概念（等势面、场强与电势关系）',
              '相对论计算（时间膨胀、长度收缩公式代入）'
            ]
          }
        ]
      },
      {
        id: 'strategy-medium',
        title: '中等基础（目标80-90分）',
        content: [
          {
            type: 'list',
            items: [
              '非均匀带电球体场强和电势（积分+分段）',
              '圆柱电容器的场强、电势差、电容',
              '刚体碰撞（角动量守恒+机械能守恒）',
              '电磁感应（无限长导线旁的线框）'
            ]
          }
        ]
      },
      {
        id: 'strategy-advanced',
        title: '冲刺满分（目标95+）',
        content: [
          {
            type: 'list',
            items: [
              '电子半径估算（静电能=相对论静止能）',
              '两层介质圆柱电容器',
              '动生+感生电动势综合',
              '各大定理的严格表述',
              '矢量方向、分情况讨论、量纲分析'
            ]
          }
        ]
      },
      {
        id: 'strategy-tips',
        title: '考场应试技巧',
        content: [
          {
            type: 'tip',
            content: '1. 先做容易的，后做难的。选择题和填空题是固定分，先保证这60分拿稳。'
          },
          {
            type: 'tip',
            content: '2. 大题的步骤分很重要。即使最终答案错了，思路正确、步骤清晰也能拿大部分分。'
          },
          {
            type: 'tip',
            content: '3. 画图！做电场/磁场题一定要先画图，画出高斯面/安培回路。'
          },
          {
            type: 'tip',
            content: '4. 标注物理依据。每步推导要说明用了什么定理。'
          },
          {
            type: 'tip',
            content: '5. 检查量纲。算完后检查量纲是否合理。'
          }
        ]
      }
    ]
  },
  {
    id: 'quiz',
    number: '附',
    title: '综合自测',
    icon: '🎯',
    color: 'mixed',
    sections: [
      {
        id: 'quiz-relativity',
        title: '相对论自测',
        content: [
          {
            type: 'text',
            content: '以下题目涵盖相对论核心考点，测试你的掌握程度。'
          },
          {
            type: 'quiz',
            question: '一个粒子以 v = 0.6c 运动，其洛伦兹因子 γ 等于？',
            options: ['0.8', '1.0', '1.25', '1.67'],
            answer: 2,
            explanation: 'γ = 1/√(1-0.36) = 1/0.8 = 1.25'
          },
          {
            type: 'quiz',
            question: '粒子动能等于静止能量，此时速度约为？',
            options: ['0.5c', '0.707c', '0.866c', '0.95c'],
            answer: 2,
            explanation: 'Eₖ = E₀ → (γ-1)m₀c² = m₀c² → γ = 2 → v = √3/2·c ≈ 0.866c'
          },
          {
            type: 'quiz',
            question: '对于光子，下列哪个是正确的？',
            options: ['E = mc²', 'E = pc', 'p = 0', 'm₀ = m'],
            answer: 1,
            explanation: '光子静止质量为零，由 E² = p²c² + m₀²c⁴ 得 E = pc'
          }
        ]
      },
      {
        id: 'quiz-electrostatics',
        title: '静电场自测',
        content: [
          {
            type: 'quiz',
            question: '均匀带电球壳内部（r < R）的电场强度是？',
            options: ['E = kQ/r²', 'E = kQ/R²', 'E = 0', 'E = kQr/R³'],
            answer: 2,
            explanation: '由高斯定理，球壳内部没有电荷，所以 E = 0'
          },
          {
            type: 'quiz',
            question: '两平行板电容器断开电源后插入介质（εᵣ=2），电场强度变为原来的？',
            options: ['2倍', '1/2', '不变', '4倍'],
            answer: 1,
            explanation: '断开电源时电荷不变，D不变，E = D/(ε₀εᵣ) 变为原来的 1/εᵣ = 1/2'
          },
          {
            type: 'quiz',
            question: '高斯定理中，通过闭合曲面的电通量取决于？',
            options: ['曲面外的电荷', '曲面内的电荷', '曲面的形状', '电场强度方向'],
            answer: 1,
            explanation: '高斯定理：∮E·dS = Σq内/ε₀，通量只与面内电荷有关'
          }
        ]
      },
      {
        id: 'quiz-magnetism',
        title: '磁场与电磁感应自测',
        content: [
          {
            type: 'quiz',
            question: '无限长直导线在距离 r 处产生的磁场强度公式是？',
            options: ['B = μ₀I/(2πr)', 'B = μ₀I/(4πr)', 'B = μ₀I/r', 'B = μ₀I/(2r)'],
            answer: 0,
            explanation: '由安培环路定理：B·2πr = μ₀I → B = μ₀I/(2πr)'
          },
          {
            type: 'quiz',
            question: '感应电动势的方向遵循？',
            options: ['右手定则', '左手定则', '楞次定律', '安培定律'],
            answer: 2,
            explanation: '楞次定律：感应电流的磁场总是阻碍原磁通量的变化'
          },
          {
            type: 'quiz',
            question: '螺线管拉长（总匝数不变），其自感系数会？',
            options: ['增大', '减小', '不变', '先增后减'],
            answer: 1,
            explanation: 'L = μ₀N²S/l，l增大则L减小'
          }
        ]
      }
    ]
  }
];

export const formulaSheet = {
  relativity: [
    { name: '时间膨胀', formula: '\\Delta t = \\gamma\\Delta t_0' },
    { name: '长度收缩', formula: 'L = L_0/\\gamma' },
    { name: '相对论质量', formula: 'm = \\gamma m_0' },
    { name: '相对论能量', formula: 'E = mc^2 = \\gamma m_0 c^2' },
    { name: '相对论动能', formula: 'E_k = (\\gamma-1)m_0c^2' },
    { name: '能量-动量关系', formula: 'E^2 = p^2c^2 + m_0^2c^4' },
    { name: '洛伦兹因子', formula: '\\gamma = 1/\\sqrt{1-v^2/c^2}' }
  ],
  electrostatics: [
    { name: '高斯定理', formula: '\\oint_S\\vec{E}\\cdot d\\vec{S} = \\frac{\\sum q}{\\varepsilon_0}' },
    { name: 'D的高斯定理', formula: '\\oint_S\\vec{D}\\cdot d\\vec{S} = \\sum q_{自由}' },
    { name: '电势差', formula: 'U_A - U_B = \\int_B^A\\vec{E}\\cdot d\\vec{l}' },
    { name: 'D与E的关系', formula: '\\vec{D} = \\varepsilon_0\\varepsilon_r\\vec{E}' },
    { name: '导体球静电能', formula: 'W = \\frac{Q^2}{8\\pi\\varepsilon_0 R}' }
  ],
  magnetism: [
    { name: '安培环路定理', formula: '\\oint_L\\vec{B}\\cdot d\\vec{l} = \\mu_0\\sum I' },
    { name: '无限长直导线', formula: 'B = \\frac{\\mu_0 I}{2\\pi r}' },
    { name: '圆形电流圆心', formula: 'B = \\frac{\\mu_0 I}{2R}' },
    { name: '磁场高斯定理', formula: '\\oint_S\\vec{B}\\cdot d\\vec{S} = 0' }
  ],
  induction: [
    { name: '法拉第定律', formula: '\\varepsilon = -\\frac{d\\Phi}{dt}' },
    { name: '互感EMF', formula: '\\varepsilon_{互} = -M\\frac{dI}{dt}' },
    { name: '自感EMF', formula: '\\varepsilon_{自} = -L\\frac{dI}{dt}' },
    { name: '螺线管自感', formula: 'L = \\mu_0\\mu_r\\frac{N^2S}{l}' }
  ]
};
