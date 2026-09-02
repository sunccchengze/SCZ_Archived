import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, XCircle, AlertTriangle, MapPin } from 'lucide-react';

const hiddenProblems = [
  {
    icon: Building2,
    title: '同校却形同异地',
    subtitle: '最荒诞的困局',
    desc: '他们大概率在同一所大学。他自己都说出了「我们搞的是异地恋吗？还是网恋？」。但他紧接着说「我有什么办法」「我不知道怎么办才好」。',
    insight: '一个 INTJ 说「我不知道怎么办」，不是真的不知道。是他在这个议题上选择了放弃主动权。他把「见面少」归因为客观限制，但客观限制真有那么不可逾越吗？同一所学校，走路可能十分钟。',
    keyPoint: '他没有把「陪伴她」当作一个需要被优先调度的任务。',
  },
  {
    icon: XCircle,
    title: '她的回避同样值得警惕',
    subtitle: '被动攻击的闭环',
    desc: '「我今天出汗太多了，不想以这个样子见你」—— 这是一个借口，双方都知道。她在用回避来惩罚他，用拒绝见面来表达「你不主动，我就让你连被动的机会都没有」。',
    insight: '这是一种被动攻击的闭环：她越不满 → 越回避 → 见面越少 → 她越不满。而他看到的只是「你看，你也不来见我」。',
    keyPoint: '回避式惩罚的最大问题是：对方永远不知道你在惩罚什么。',
  },
  {
    icon: AlertTriangle,
    title: 'INTJ 的优先级盲区',
    subtitle: '「效率」思维在亲密关系中的失效',
    desc: 'INTJ 天然倾向于以「ROI」思维处理事务：投入产出比最高的先处理。在他的优先级排序中，图书馆（学业/个人事务）排在前面，而她的情感需求排在「有空再说」的位置。',
    insight: '这是 INTJ 在亲密关系中的经典盲区—— 他们无法理解「情感维护」不是「课余活动」，而是关系存续的基础设施。图书馆一天不去没关系；一句「我想你」没说出口，裂痕可以很深。',
    keyPoint: '情感需求的优先级不应该根据「紧急程度」来排。等你觉得「紧急」的时候，往往已经晚了。',
  },
  {
    icon: MapPin,
    title: 'INFP 的「沉默螺旋」',
    subtitle: '在爆发前的无数次求救信号',
    desc: 'INFP 的特征是：在爆发之前会给很多次机会，每一次都是用情绪信号在求救。但一旦她得出「这个人永远听不懂我」的结论，她会在内心彻底关门。',
    insight: '分手时他会觉得「毫无征兆」，但其实每一次「你去和图书馆谈恋爱吧」都是倒计时。没有一次争吵是无缘无故的，也没有一次沉默是真的无事发生。',
    keyPoint: 'INFP 的 Final end 不是大吵大闹，是突然的安静—— 比争吵更可怕。',
  },
];

export default function HiddenIssues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-night-400/15" />
            <AlertTriangle className="w-4 h-4 text-night-400/25" />
            <div className="h-px w-12 bg-night-400/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-dawn/70 tracking-[0.2em] mb-4">
            隐性结构问题
          </h2>
          <p className="text-sm text-night-300/30 font-light tracking-wider max-w-md mx-auto">
            水面下的暗流，才是真正决定关系走向的力量
          </p>
        </motion.div>

        <div className="space-y-20">
          {hiddenProblems.map((prob, i) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-night-800/60 border border-night-700/30 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-night-300/50" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-dawn/65 tracking-wider mb-1">
                      {prob.title}
                    </h3>
                    <p className="text-xs text-night-400/35 tracking-wider">{prob.subtitle}</p>
                  </div>
                </div>

                <div className="ml-0 md:ml-15 pl-0 md:pl-1 space-y-4">
                  <p className="text-sm text-night-200/45 font-light leading-relaxed">
                    {prob.desc}
                  </p>
                  <div className="rounded-xl p-5 bg-night-800/40 border border-night-700/25 backdrop-blur-sm">
                    <p className="text-sm font-serif text-night-200/55 leading-relaxed mb-3">
                      {prob.insight}
                    </p>
                    <div className="glow-line rounded px-4 py-2.5">
                      <p className="text-xs text-ember/50 font-light leading-relaxed tracking-wide">
                        {prob.keyPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
