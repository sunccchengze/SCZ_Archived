import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, HeartOff, Lightbulb, Repeat, ArrowRight } from 'lucide-react';

const hisProfile = {
  type: 'INTJ',
  name: '葳蕤燃新序',
  traits: ['理性优先', '问题解决导向', '情感表达障碍', '竞争性受害倾向'],
  mistakes: [
    {
      mistake: '用「图书馆」做挡箭牌',
      why: 'INTJ 把「陪伴」当作可量化的任务，而不是即时发生的情感连接。他不是因为真的在忙所以不能见，而是因为「陪女朋友聊天」没有被排进日程表。',
      harm: '让 INFP 感受到「我在你的优先级清单里排得很靠后」。',
    },
    {
      mistake: '「比惨式」回应',
      why: '面对抱怨，INTJ 的本能反应不是共情，而是「提供解决方案」或「证明情况没那么糟」。他搬出室友论，本质上是试图用逻辑消解对方的不满。',
      harm: '把她的感受判定为「不必要的情绪」，而不是「需要被接纳的信号」。',
    },
    {
      mistake: '最后的「不知道」',
      why: '「不知道」是 INTJ 面对超出逻辑框架的问题时的默认退出键。他不是不知道答案，是拒绝进入那个需要情感投入的空间。',
      harm: '这可能是整个聊天记录中最伤人的两个字。不是不关心，是「放弃探索如何关心」。',
    },
  ],
  tragedy: '他会在失去之后才开始复盘 —— 精确的找到每一个节点，意识到自己错过了什么。但那时候已经太晚了。',
};

const herProfile = {
  type: 'INFP',
  name: '桂箸',
  traits: ['情感驱动', '需要深度连接', '容易被忽视感吞噬', '回避式表达'],
  mistakes: [
    {
      mistake: '暗示代替直接表达',
      why: '「你应该去和图书馆谈恋爱」是一句赌气的话。INFP 太依赖情绪暗示，期待对方能「意会」。但 INTJ 的思维方式根本不走这条通道 —— 他们解码情绪的能力天然较弱。',
      harm: '他听到的是抱怨，她希望被听到的是求救。',
    },
    {
      mistake: '用回避和拒绝来惩罚',
      why: '「不用过来了」「行」—— 她想用这种冷淡来传递「我很失望」，但对于一个连暗示都读不懂的人，惩罚只会被解读为「她在忙/她不想见我」。',
      harm: '惩罚者获得了道德优越感，但沟通完全断裂。',
    },
    {
      mistake: '最后那句无声的心碎',
      why: '「你真的没有看到我吗？」这是她最后的一次求救。但她选择在线下（主 D 楼下）而不是线上沟通 —— INFP 暗恋式的沉默，期待着对方能主动看见自己。',
      harm: 'INTJ 没有看到。不是故意，而是他已经在自己的世界里走得太远了。',
    },
  ],
  tragedy: 'INFP 的特征是：在爆发之前给无数次机会。但一旦得出「这个人永远听不懂我」的结论，会在内心彻底关门 —— 分手时异常平静，不可挽回。',
};

function ProfileCard({ profile, side }: {
  profile: typeof hisProfile;
  side: 'his' | 'her';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isHis = side === 'his';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className={`flex flex-col ${isHis ? 'md:text-left' : 'md:text-right'}`}
    >
      {/* Header */}
      <div className={`mb-10 ${isHis ? 'text-left' : 'text-right'}`}>
        <div className={`flex items-center gap-3 mb-3 ${isHis ? '' : 'flex-row-reverse'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
            isHis ? 'border-ember/20 bg-ember/10' : 'border-night-300/20 bg-night-300/10'
          }`}>
            {isHis ? (
              <Brain className="w-3.5 h-3.5 text-ember/60" />
            ) : (
              <HeartOff className="w-3.5 h-3.5 text-night-300/60" />
            )}
          </div>
          <span className={`text-xs tracking-[0.2em] uppercase ${
            isHis ? 'text-ember/40' : 'text-night-300/40'
          }`}>
            {profile.type} — {profile.name}
          </span>
        </div>
        <h3 className="text-2xl font-serif font-medium text-dawn/65 tracking-wider mb-4">
          {isHis ? '他做错了什么' : '她做错了什么'}
        </h3>
        <div className={`flex flex-wrap gap-2 ${isHis ? '' : 'justify-end'}`}>
          {profile.traits.map((t, i) => (
            <span
              key={i}
              className="text-[10px] tracking-wider px-3 py-1 rounded-full border border-night-700/40 text-night-300/35"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Mistakes */}
      <div className="space-y-8">
        {profile.mistakes.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: isHis ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            className="rounded-xl bg-night-800/40 border border-night-700/25 p-5 backdrop-blur-sm"
          >
            <div className={`flex items-center gap-2 mb-3 ${isHis ? '' : 'flex-row-reverse'}`}>
              <span className="text-xs font-serif font-medium text-dawn/50">
                {m.mistake}
              </span>
            </div>
            <p className="text-xs text-night-200/40 font-light leading-relaxed mb-3">
              {m.why}
            </p>
            <div className="flex items-start gap-2">
              <ArrowRight className="w-3 h-3 text-red-400/30 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-red-300/35 font-light leading-relaxed">
                {m.harm}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tragedy quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 pl-4 border-l-2 border-night-600/30"
      >
        <p className="text-sm font-serif text-night-200/40 italic leading-relaxed">
          {profile.tragedy}
        </p>
      </motion.blockquote>
    </motion.div>
  );
}

export default function PersonalityBreakdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-night-400/15" />
            <Lightbulb className="w-4 h-4 text-night-400/25" />
            <div className="h-px w-12 bg-night-400/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-dawn/70 tracking-[0.2em] mb-6">
            双方人物剖析
          </h2>
          <p className="text-sm text-night-300/30 font-light tracking-wider max-w-lg mx-auto">
            不是分出对错，而是理解在这些对话背后，两个真实的人各自经历了什么
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <ProfileCard profile={hisProfile} side="his" />
          <ProfileCard profile={herProfile} side="her" />
        </div>

        {/* Mutual problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center"
        >
          <div className="section-divider mb-12" />
          <Repeat className="w-5 h-5 text-night-400/30 mx-auto mb-4" />
          <h3 className="text-lg font-serif font-medium text-dawn/55 tracking-wider mb-4">
            共同的问题：没有建立「修复机制」
          </h3>
          <p className="text-sm text-night-300/35 font-light leading-relaxed max-w-lg mx-auto">
            两个人都不会在争吵后主动修复关系。INTJ 倾向于「等事情自然过去」，INFP 倾向于「等对方来修复」。
            当两个人都在等的时候，裂缝只会越来越深。一段健康的关系需要的不是不吵架，而是吵架后知道如何回到彼此身边。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
