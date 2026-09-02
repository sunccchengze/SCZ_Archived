import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, DoorClosed, Timer, CloudRain, Zap, Ban, Power } from 'lucide-react';

interface TimelineNode {
  stage: string;
  time: string;
  icon: typeof GitBranch;
  desc: string;
  detail: string;
  signal: string;
  active?: boolean;
}

const timeline: TimelineNode[] = [
  {
    stage: '当前位置',
    time: '现在',
    icon: CloudRain,
    desc: '「然后呢」已经说出口，「不知道」是最后一个回复',
    detail: '两个人都停在了各自的终点上。她开始审视而不是争取，他放弃了探索如何关心。',
    signal: '已有信号：她已经开始质疑关系存在的意义',
    active: true,
  },
  {
    stage: '短暂冷静',
    time: '1-2 天',
    icon: Timer,
    desc: '表面和好，不提此事',
    detail: 'INFP 会在这两天里反复复盘整个对话，INTJ 会觉得「好像没事了」。但实际上裂缝在扩大。',
    signal: '表面平静掩盖下的情绪累积',
  },
  {
    stage: '下一次触发',
    time: '1-2 周内',
    icon: Zap,
    desc: '他又说「我先去忙了」',
    detail: '类似场景重现，但因为之前的问题没有得到解决，这次的反应会更加剧烈。',
    signal: '更剧烈的爆发 + 翻旧账：「你每次都这样」',
  },
  {
    stage: '第二次对峙',
    time: '2-4 周内',
    icon: GitBranch,
    desc: '他更强硬地用逻辑反驳 / 或彻底沉默',
    detail: 'INTJ 在被反复指责后会进入防御姿态，要么用更强的逻辑反驳，要么完全沉默不回应。',
    signal: '回应模式的固化：她更加情绪化，他更加理性化',
  },
  {
    stage: 'Door Slam',
    time: '1-2 个月内',
    icon: DoorClosed,
    desc: 'INFP 启动「Door Slam」—— 不是吵，是突然安静了',
    detail: 'INFP 的特征：在爆发之前给无数次机会，但一旦得出「这个人永远听不懂我」的结论，内心彻底关门。不是大吵大闹，是突然的平静。',
    signal: '不再情绪化，异常冷静，说话变少',
  },
  {
    stage: '终局',
    time: '1-3 个月内',
    icon: Power,
    desc: '提出分手，态度异常平静，不可挽回',
    detail: '大概率由女方发起。他会在失去之后才开始精确复盘，但那时已经太晚了。',
    signal: '「我觉得我们还是分开吧。」—— 语气平静得像在说天气',
  },
];

const keySignals = [
  '「我谈恋爱干嘛啊」—— 她已经在质疑这段关系存在的意义',
  '「我还要你干嘛呢」—— 她已经在进行关系的成本收益分析',
  '「然后呢」—— 她已经停止试图让他理解，转为旁观者视角审视他',
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 px-6">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-400/15" />
            <DoorClosed className="w-4 h-4 text-red-400/25" />
            <div className="h-px w-12 bg-red-400/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-dawn/70 tracking-[0.2em] mb-4">
            最高概率推演
          </h2>
          <p className="text-sm text-night-300/30 font-light tracking-wider mb-2">
            结局预测：分手
          </p>
          <p className="text-xs text-red-300/25 font-light tracking-wider">
            时间窗口：1-3 个月内 · 大概率由女方发起
          </p>
        </motion.div>

        {/* Key signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16 rounded-xl p-6 bg-night-800/40 border border-red-900/10 backdrop-blur-sm"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-red-400/30 mb-4 font-medium">
            <Ban className="w-3 h-3 inline mr-2" />
            已经出现的关键信号
          </p>
          <div className="space-y-3">
            {keySignals.map((sig, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className="flex items-start gap-3"
              >
                <div className="w-1 h-1 rounded-full bg-red-400/30 mt-2 flex-shrink-0" />
                <p className="text-xs text-night-200/40 font-light leading-relaxed">{sig}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline flow */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute left-5 md:left-6 top-0 bottom-0 w-px origin-top bg-night-600/20"
          />

          <div className="space-y-12">
            {timeline.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
                  className="relative flex gap-5 md:gap-6"
                >
                  {/* Node dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border ${
                      node.active
                        ? 'border-red-400/30 bg-red-900/20'
                        : 'border-night-600/30 bg-night-800/60'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        node.active ? 'text-red-400/50' : 'text-night-400/40'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 pb-4 flex-1">
                    <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                      <h4 className="text-sm font-serif font-medium text-dawn/55 tracking-wider">
                        {node.stage}
                      </h4>
                      <span className="text-[10px] text-night-400/30 tracking-wider">
                        {node.time}
                      </span>
                    </div>
                    <p className="text-sm text-night-200/45 font-light leading-relaxed mb-2">
                      {node.desc}
                    </p>
                    <p className="text-xs text-night-300/30 font-light leading-relaxed mb-2">
                      {node.detail}
                    </p>
                    <div className="flex items-start gap-2 mt-2">
                      <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-400/20 flex-shrink-0" />
                      <p className="text-[11px] text-red-300/25 font-light leading-relaxed">
                        {node.signal}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-20 text-center"
        >
          <div className="section-divider mb-8" />
          <p className="door-slam-text text-xl md:text-2xl font-serif font-light tracking-wider leading-relaxed max-w-xl mx-auto">
            这段关系的终局已经写在「然后呢」这两个字里了
          </p>
        </motion.div>
      </div>
    </section>
  );
}
