import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, MessageCircleHeart, ShieldCheck } from 'lucide-react';

interface Tip {
  title: string;
  subtitle: string;
  content: string[];
  forType: 'intj' | 'infp' | 'both';
  importance: number;
}

const tips: Tip[] = [
  {
    title: 'INTJ：听懂弦外之音',
    subtitle: '她说的都不是字面意思',
    forType: 'intj',
    importance: 5,
    content: [
      '当她说「你去和图书馆谈恋爱」，她真正的意思是「我需要你」。学会这样翻译每一次「抱怨」。',
      '不要试图用逻辑消解对方的情绪。情绪不是需要被解决的问题，而是需要被接纳的信号。',
      '在她说完话后，先回答「我理解你的感受」，然后再说你的观点。这个顺序很关键。',
      '把「陪伴她」写进日程表——不是因为她要求，而是因为这是维护关系的基建投资。',
      '当她说「不知道」或沉默的时候，不要跟着沉默。那是她在等你追问：「告诉我，你在想什么？"',
    ],
  },
  {
    title: 'INFP：学会说「我需要」',
    subtitle: '直接表达不等于失去诗意',
    forType: 'infp',
    importance: 5,
    content: [
      '「你应该和谁谈恋爱」这种话会让他困惑和防御。试着说「我希望你今晚能陪我散步」—— 具体、直接、可操作。',
      'INTJ 读不懂暗示。你需要的是明确的请求和清晰的时间线，而不是期待他「忽然领悟」。',
      '回避和冷淡不是有效的沟通方式。如果他不明白你在惩罚他，惩罚就失去了意义。',
      '在感到不满时，先问自己：「我具体想要什么？"然后直接告诉他答案。',
      '给 INTJ 一些明确的信号 —— 「我们现在在吵架」「我需要你道歉」「事情已经过去了」—— 这种说法对他来说是明确的导航。',
    ],
  },
  {
    title: '建立「修复仪式」',
    subtitle: '吵架后如何回到彼此身边',
    forType: 'both',
    importance: 4,
    content: [
      '每次争吵后约定一个「重启」动作：一起吃一顿饭、散步一圈、或者一个简单的拥抱。不解决完问题不结束。',
      'INTJ 倾向于「等事情过去」，INFP 倾向于「等对方道歉」。双方都要先走出第一步。',
      '建立一个每周一次的「关系检查」时刻：聊聊这一周里，有什么让你开心的事，有什么让你不开心的事。',
    ],
  },
  {
    title: '设定「安全词」',
    subtitle: '在情绪失控前喊停',
    forType: 'both',
    importance: 3,
    content: [
      '当一方感到快要失控时，可以用一个约定好的词暂停对话。暂停不等于逃避，而是给彼此降温的时间。',
      'INTJ 可以在暂停期间整理思路，INFP 可以在暂停期间平复情绪。30 分钟后重新开始。',
    ],
  },
  {
    title: '定期做「情感预算」',
    subtitle: '别等到透支了才发现余额不足',
    forType: 'both',
    importance: 4,
    content: [
      '每周花 10 分钟回顾：我这一周给对方了多少高质量的关注时间？她/他有没有感到被忽视？',
      'INTJ 要学会把「情感维护」当作和学业/工作同等重要的任务事项来排期。',
      'INFP 要学会识别自己「情感账户」的最低余额，不要等到归零才说。',
    ],
  },
  {
    title: 'INTJ 特供：关于回应的正确姿势',
    subtitle: '「然后」呢的正确答案',
    forType: 'intj',
    importance: 5,
    content: [
      '面对「你去和图书馆谈恋爱吧」，唯一正确的回应是：「我知道你不是在说图书馆。你是觉得我没有把你放在最重要的位置。你说得对，我做得不够。」然后闭嘴。',
      '不解释，不辩驳，不比谁更惨。这就是她一直在等的那句话。',
    ],
  },
];

function TipCard({ tip, index }: { tip: Tip; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [expanded, setExpanded] = useState(false);

  const typeColors = {
    intj: 'text-ember/40 border-ember/15 bg-ember/5',
    infp: 'text-night-300/40 border-night-500/20 bg-night-600/15',
    both: 'text-fog/40 border-night-500/15 bg-night-700/15',
  };

  const typeLabels = {
    intj: '给 INTJ',
    infp: '给 INFP',
    both: '通用建议',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      className="rounded-xl bg-night-800/30 border border-night-700/20 backdrop-blur-sm overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-[10px] tracking-wider px-2.5 py-0.5 rounded-full border ${typeColors[tip.forType]}`}>
              {typeLabels[tip.forType]}
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 rounded-full ${
                    i < tip.importance ? 'bg-ember/30' : 'bg-night-600/30'
                  }`}
                />
              ))}
            </div>
          </div>
          <h4 className="text-sm font-serif font-medium text-dawn/60 tracking-wider mb-1">
            {tip.title}
          </h4>
          <p className="text-xs text-night-300/30 font-light">{tip.subtitle}</p>
        </div>
        <div className="flex-shrink-0 mt-1">
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
          <div className="pt-3 border-t border-night-700/20 space-y-3">
            {tip.content.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-ember/20 mt-1.5 flex-shrink-0" />
                <p className="text-xs text-night-200/45 font-light leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Guide() {
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
            <BookOpen className="w-4 h-4 text-night-400/25" />
            <div className="h-px w-12 bg-night-400/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-dawn/70 tracking-[0.2em] mb-6">
            情感指南
          </h2>
          <p className="text-sm text-night-300/30 font-light tracking-wider max-w-lg mx-auto mb-6">
            给所有正在经历类似困境的人—— 这些建议不是灵丹妙药，但如果你愿意试一试，至少不会那么遗憾
          </p>

          {/* Rescue note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="rounded-xl p-5 bg-night-800/30 border border-ember/10 backdrop-blur-sm max-w-lg mx-auto"
          >
            <div className="flex items-center gap-2 mb-2 justify-center">
              <MessageCircleHeart className="w-3.5 h-3.5 text-ember/35" />
              <span className="text-xs text-ember/40 tracking-wider">如果要救—— 唯一的窗口</span>
            </div>
            <p className="text-sm font-serif text-dawn/40 italic leading-relaxed">
              「我知道你不是在说图书馆。你是觉得我没有把你放在最重要的位置。你说得对，我做得不够。」
            </p>
            <p className="text-[11px] text-night-400/30 mt-2 font-light">
              然后闭嘴。不解释，不辩驳，不比谁更惨。
            </p>
            <div className="mt-3 pt-3 border-t border-night-700/20">
              <p className="text-[11px] text-night-400/25 font-light flex items-center gap-2 justify-center">
                <ShieldCheck className="w-3 h-3" />
                INTJ 自发说出这句话的概率极低，但如果你能读到这个网页，说明还有希望
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tips grid */}
        <div className="space-y-4">
          {tips.map((tip, i) => (
            <TipCard key={i} tip={tip} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
