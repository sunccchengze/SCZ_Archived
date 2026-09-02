import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CircleAlert, Eye, ShieldAlert, MessageSquareOff, BarChart3 } from 'lucide-react';

interface IssueData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  icon: typeof CircleAlert;
  severity: string;
  details: {
    herWords: string;
    herRealNeed: string;
    hisResponse: string;
    coreMismatch: string;
  };
  analysis: string[];
  quote: string;
  quoteSource: string;
}

const issues: IssueData[] = [
  {
    id: 'issue-1',
    num: '01',
    title: '需求语言的根本性错位',
    subtitle: '她发出的是情感信号，他接收到的是逻辑命题',
    icon: MessageSquareOff,
    severity: '高危',
    details: {
      herWords: '讲真的，你这么喜欢图书馆，你应该去和图书馆谈。',
      herRealNeed: '我感到被你排在了后面，我需要你告诉我，我对你很重要。',
      hisResponse: '图书馆是个场所。',
      coreMismatch: 'INFP 用情感表达需求，INTJ 用逻辑框架回应。',
    },
    analysis: [
      '「你去和图书馆谈恋爱」——不是抱怨图书馆，而是说「你把时间给了「它」，而不是我」。',
      'INTJ 看到的是字面意思：「图书馆确实只是一个场所，和妻子谈什么？」。INFP 得不到回应，于是加码——「我和宿舍长长久久」。',
      '每一次「情绪升级」，INTJ 都会觉得是在「无理取闹」。不轻易离开。',
      '整段对话中，这个错位从未被修正。她每一次加码，都是在用更大的音量重复同一句话：「你能不能看见我的感受？」而他每一次回应，都在说另一件事：「你的论据在事实层面不成立。」',
      '他们不是在吵架。他们是两个人各自对着墙喊话。'
    ],
    quote: '「能和不能」是语法层面的问题。IGNORED是语法之外的问题，看到她真正在说的。',
    quoteSource: '—— 关系沟通的核心悖论',
  },
  {
    id: 'issue-2',
    num: '02',
    title: '「室友论」—— 这段关系中投下的核弹',
    subtitle: '「陪伴是可替代的」—— 对一位 INFP 来说，这是最致命的否定',
    icon: ShieldAlert,
    severity: '致命',
    details: {
      herWords: '宝贝，你要是这么说话的话，我谈恋爱干嘛啊。',
      herRealNeed: '你对我的需要是独特的、不可替代的。',
      hisResponse: '你平时还有舍友可以一起打游戏聊天之类的，在你身边陪着。',
      coreMismatch: '他把陪伴定义为「被满足」，忽略了「被唯一的人满足」才是恋爱存在的意义。',
    },
    analysis: [
      '他的本意大概是：「你不像我这么孤独，你的处境其实没那么差。」',
      '但他实际传达的信息是：「陪伴是可替代的。室友能陪你，所以我不陪你也没关系。」',
      '对 INFP 来说，这等于在说：「你对我的需要不是独特的、不可替代的。」—— 这直接否定了恋爱关系存在的根本意义。',
      '所以她精准反击：「那我平时有室友陪我就行了，我还要你干嘛呢？」这不是气话……这是她在逼他回答一个他可能根本没想过的问题：你觉得你在这段关系里的角色是什么？',
      '他没有回答。',
    ],
    quote: '"那你应该觉得我应该每天去你们书院找你玩吗？我的事情很多啊，总得有时间处理吧"—— 这句话是选择的结果而非无奈。',
    quoteSource: '—— 战略性回顾',
  },
  {
    id: 'issue-3',
    num: '03',
    title: '竞争性受害—— 最危险的博弈格局',
    subtitle: '零和博弈中，谁更惨谁就有道德优势',
    icon: BarChart3,
    severity: '致命',
    details: {
      herWords: '然后呢。',
      herRealNeed: '你比我孤独，所以呢？这能解决问题吗？',
      hisResponse: '你平时身边不缺人陪，但我缺。',
      coreMismatch: '把「我需要你」变成了「我比你需要更多关怀」。',
    },
    analysis: [
      '他不仅没有回应核心诉求，反而把议题切换成了：「你平时身边不缺人陪，但我缺。」',
      '这是一个典型的「比惨」策略：你觉得你难受？我比你更难受。',
      '这把一段亲密关系变成了零和博弈 —— 谁更惨谁就有道德优势，谁更惨谁就有权不付出。',
      '而她的回应 —— 那个冰冷的「然后呢」—— 是这段对话中最具战略意义的两个字。',
      '它的潜台词是：「你比我孤独，所以呢？这能解决我们的问题吗？这能让你来到我身边吗？」',
      '"然后呢"不是一个问句。它是一扇正在关上的门。',
    ],
    quote: '"然后呢"—— GB 的门。潜台词：我已停止尝试让你理解，变成旁观者审视你。',
    quoteSource: '—— 最冰冷的两个字',
  },
];

function IssueCard({ issue, index }: { issue: IssueData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState(false);
  const Icon = issue.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15 }}
      className="mb-28"
    >
      {/* Header */}
      <div className="flex items-start gap-6 mb-10">
        <div className="flex-shrink-0">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-serif font-extralight text-night-600/25 select-none"
          >
            {issue.num}
          </motion.span>
        </div>
        <div className="pt-2">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-4 h-4 text-ember/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-ember/40 font-medium">
              致命等级 · {issue.severity}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-medium text-dawn/75 tracking-wider mb-2">
            {issue.title}
          </h3>
          <p className="text-sm text-night-300/40 font-light leading-relaxed">
            {issue.subtitle}
          </p>
        </div>
      </div>

      {/* Detail cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ml-0 md:ml-16"
      >
        <div className="rounded-xl p-5 bg-night-800/50 backdrop-blur-sm border border-night-700/30">
          <p className="text-[10px] tracking-widest uppercase text-night-300/30 mb-3">她的表达</p>
          <p className="text-sm font-serif text-night-200/60 leading-relaxed italic">"{issue.details.herWords}"</p>
          <div className="mt-3 pt-3 border-t border-night-700/30">
            <p className="text-[10px] tracking-widest uppercase text-ember/30 mb-2">真实需求</p>
            <p className="text-xs font-light text-fog/50 leading-relaxed">{issue.details.herRealNeed}</p>
          </div>
        </div>
        <div className="rounded-xl p-5 bg-night-800/50 backdrop-blur-sm border border-night-700/30">
          <p className="text-[10px] tracking-widest uppercase text-night-300/30 mb-3">他的回应</p>
          <p className="text-sm font-serif text-night-200/60 leading-relaxed italic">"{issue.details.hisResponse}"</p>
          <div className="mt-3 pt-3 border-t border-night-700/30">
            <p className="text-[10px] tracking-widest uppercase text-ember/30 mb-2">核心错位</p>
            <p className="text-xs font-light text-fog/50 leading-relaxed">{issue.details.coreMismatch}</p>
          </div>
        </div>
      </motion.div>

      {/* Analysis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
        className="ml-0 md:ml-16 mb-8"
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 group mb-4"
        >
          <Eye className="w-3.5 h-3.5 text-night-400/40 group-hover:text-ember/50 transition-colors" />
          <span className="text-xs tracking-wider text-night-400/50 group-hover:text-ember/40 transition-colors">
            {expanded ? '收起深度分析' : '展开深度分析'}
          </span>
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {issue.analysis.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-1 h-1 rounded-full bg-ember/30 mt-2 flex-shrink-0" />
                <p className="text-sm text-night-200/45 font-light leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.9 }}
        className="ml-0 md:ml-16 pt-6 border-t border-night-700/20"
      >
        <p className="text-sm font-serif text-night-200/50 italic leading-relaxed mb-1">
          {issue.quote}
        </p>
        <p className="text-[11px] text-night-400/30 tracking-wider">{issue.quoteSource}</p>
      </motion.div>
    </motion.div>
  );
}

export default function CoreIssues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-28"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-400/15" />
            <CircleAlert className="w-4 h-4 text-red-400/25" />
            <div className="h-px w-12 bg-red-400/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-dawn/70 tracking-[0.2em] mb-6">
            三大结构性致命问题
          </h2>
          <p className="text-sm text-night-300/30 font-light tracking-wider max-w-lg mx-auto leading-relaxed">
            这些问题不是偶然的争吵，而是深植于两人沟通模式、认知框架和情感语言中的结构性缺陷
          </p>
        </motion.div>

        {issues.map((issue, i) => (
          <IssueCard key={issue.id} issue={issue} index={i} />
        ))}
      </div>
    </section>
  );
}
