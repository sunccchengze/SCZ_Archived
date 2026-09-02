import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AlertOctagon, ChevronDown, ChevronUp, Skull } from 'lucide-react';

interface Pitfall {
  myth: string;
  reality: string;
  whyDangerous: string;
  howToAvoid: string;
}

const pitfalls: Pitfall[] = [
  {
    myth: '「等我不忙了就好了」',
    reality: '你永远不会「有空」。INTJ 的待办清单是无限延伸的，如果不把对方排入优先级，永远都不会有「不忙」的一天。',
    whyDangerous: '用未来时态拖延现在的问题。等她终于不「等」了，你已经失去了她。',
    howToAvoid: '把「陪伴时间」当作和上课/工作同等重要的日程项强制执行。不是「有空再见」，是「周三晚上六点，不见不散」。',
  },
  {
    myth: '「她自己会好的，不用哄」',
    reality: 'INFP 不会在沉默中自愈，而是在沉默中撤离。每一次你忽略她的情绪，她都在心里给这段关系减分。',
    whyDangerous: 'INTJ 的「等」和 INFP 的「等」是完全不同的概念。你在等她消气，她在等你说一句她在等的话。',
    howToAvoid: '当她沉默的时候，不是事情过去了，是她在给你最后一次机会主动开口。',
  },
  {
    myth: '「话都说了，她应该懂我的意思」',
    reality: 'INTJ 说的话通常包含 80% 的信息量和 20% 的情感量。INFP 听不懂那 80% 的逻辑，只感受到了 20% 的温度。',
    whyDangerous: '你以为你在沟通，她只觉得你在讲道理。沟通不是信息的单向输出，而是情感的确认。',
    howToAvoid: '每说完一段话，加一句：「我的意思其实是 ... 我想让你知道 ..." 明确表达情感意图。',
  },
  {
    myth: '「我们还在一起，说明没问题」',
    reality: '形式上的在一起不等于情感上的在一起。物理距离十米，心理距离可能已经十公里。',
    whyDangerous: 'INTJ 的默认思维模式是「如无问题 = 没有问题」。但 INFP 可能已经开始了内心的倒计时。',
    howToAvoid: '定期做一次关系温度检测—— 不是问「你还好吗」，而是问「你最近有没有觉得被忽视了」。',
  },
  {
    myth: '「等我准备好了再好好谈」',
    reality: '完美准备的对话永远不会到来。每一句没说的话都成了裂缝的一部分。',
    whyDangerous: 'INTJ 对「准备好」的标准是理想化的—— 整理好逻辑、准备好论据、选择完美时机。但感情不是项目。',
    howToAvoid: '不完美地沟通 >>> 完美地沉默。张开嘴，承认自己不知道怎么说，然后从「我在乎你」开始。',
  },
  {
    myth: '「她只是太敏感了」',
    reality: '把对方的需求定义为「过度敏感」，是在用评判代替理解。她在意的不是图书馆，是「你在哪」。',
    whyDangerous: '每次你把她的心情归因为「她太敏感」，就否认了感受的合理性，也在关系中种下了一颗不信任的种子。',
    howToAvoid: '不要把「敏感」当作批评。敏感的人只是更容易捕捉到关系中微小的温度变化。感谢她的敏感，而不是责怪。',
  },
  {
    myth: '「下次见面聊聊就好了」',
    reality: '如果已经好几周没有好好说话了，「下次见面聊聊」可能已经不存在了。',
    whyDangerous: '同校异地的悖论—— 物理上近在咫尺，心理上渐行渐远。等待见面的承诺在一次次爽约中失去了重量。',
    howToAvoid: '不要承诺「下次」，要说「今晚七点，食堂门口」。具体时间、具体地点、具体行动。',
  },
  {
    myth: '「分手后做朋友也挺好的」',
    reality: '"分手后做朋友"是一种温柔的说辞，但 INFP 的 Door Slam 意味着永远的、彻底的关闭。',
    whyDangerous: '低估 INFP 关门力度的 INTJ，会在分手后经历更长的困惑和痛苦。如果还没有失去，不要假设失去之后还能做朋友。',
    howToAvoid: '把「不失去」当作当下的唯一目标。如果真的到了那一步，尊重她的决定，然后承担失去的现实。',
  },
];

function PitfallCard({ pitfall, index }: { pitfall: Pitfall; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="rounded-xl bg-night-800/30 border border-night-700/20 backdrop-blur-sm overflow-hidden hover:border-red-900/10 transition-colors duration-500"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Skull className="w-3 h-3 text-red-400/25" />
            <span className="text-[10px] tracking-wider text-red-400/30">误区 #{index + 1}</span>
          </div>
          <p className="text-sm font-serif font-medium text-dawn/50 tracking-wider">
            {pitfall.myth}
          </p>
        </div>
        <div className="flex-shrink-0 mt-0.5">
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-night-400/30" />
          ) : (
            <ChevronDown className="w-4 h-4 text-night-400/30" />
          )}
        </div>
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4 }}
          className="px-5 pb-5 pt-0"
        >
          <div className="pt-3 border-t border-night-700/20 space-y-4">
            <div>
              <p className="text-[10px] tracking-wider uppercase text-night-300/30 mb-1.5">现实</p>
              <p className="text-xs text-night-200/45 font-light leading-relaxed">{pitfall.reality}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-wider uppercase text-red-400/25 mb-1.5">为什么危险</p>
              <p className="text-xs text-red-300/30 font-light leading-relaxed">{pitfall.whyDangerous}</p>
            </div>
            <div className="rounded-lg p-3 bg-night-900/40 border border-night-700/20">
              <p className="text-[10px] tracking-wider uppercase text-ember/30 mb-1.5">如何避免</p>
              <p className="text-xs text-night-200/50 font-light leading-relaxed">{pitfall.howToAvoid}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Pitfalls() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-400/15" />
            <AlertOctagon className="w-4 h-4 text-red-400/25" />
            <div className="h-px w-12 bg-red-400/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-dawn/70 tracking-[0.2em] mb-4">
            常见误区
          </h2>
          <p className="text-sm text-night-300/30 font-light tracking-wider max-w-lg mx-auto">
            这些话你是不是也在心里说过？如果是，请认真看看下面的现实
          </p>
        </motion.div>

        <div className="space-y-3">
          {pitfalls.map((pitfall, i) => (
            <PitfallCard key={i} pitfall={pitfall} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
