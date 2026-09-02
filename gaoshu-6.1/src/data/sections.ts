export interface Section {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  subsections?: { id: string; title: string }[];
}

export const sections: Section[] = [
  {
    id: 'intro',
    title: '开场白',
    shortTitle: '开场',
    icon: '◈',
  },
  {
    id: 'overview',
    title: '知识框架与考情分析',
    shortTitle: '框架',
    icon: '◇',
  },
  {
    id: 'multivar',
    title: '多元函数微分学',
    shortTitle: '微分学',
    icon: '△',
    subsections: [
      { id: 'multivar-props', title: '四个性质的关系' },
      { id: 'multivar-chain', title: '偏导数与链式法则' },
      { id: 'multivar-implicit', title: '隐函数求导' },
      { id: 'multivar-gradient', title: '方向导数与梯度' },
      { id: 'multivar-tangent', title: '切线与切平面' },
      { id: 'multivar-extrema', title: '极值与最值' },
    ],
  },
  {
    id: 'integral',
    title: '重积分',
    shortTitle: '重积分',
    icon: '▽',
    subsections: [
      { id: 'integral-double', title: '二重积分' },
      { id: 'integral-triple', title: '三重积分' },
    ],
  },
  {
    id: 'curve-surface',
    title: '曲线积分与曲面积分',
    shortTitle: '曲线曲面',
    icon: '◎',
    subsections: [
      { id: 'cs-type1-curve', title: '第一型曲线积分' },
      { id: 'cs-type2-curve', title: '第二型曲线积分' },
      { id: 'cs-type1-surface', title: '第一型曲面积分' },
      { id: 'cs-type2-surface', title: '第二型曲面积分' },
    ],
  },
  {
    id: 'series',
    title: '无穷级数',
    shortTitle: '级数',
    icon: '∞',
    subsections: [
      { id: 'series-convergence', title: '数项级数收敛性' },
      { id: 'series-power', title: '幂级数' },
      { id: 'series-fourier', title: '傅里叶级数' },
    ],
  },
  {
    id: 'advanced',
    title: '综合冲刺与压轴题',
    shortTitle: '冲刺',
    icon: '★',
  },
  {
    id: 'strategy',
    title: '冲刺策略与时间分配',
    shortTitle: '策略',
    icon: '⚡',
  },
  {
    id: 'closing',
    title: '结语',
    shortTitle: '结语',
    icon: '♦',
  },
];
