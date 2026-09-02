import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, User, Heart } from 'lucide-react';

interface ChatMessage {
  time: string;
  speaker: 'intj' | 'infp';
  message: string;
  hasEmoji?: boolean;
}

const day1Messages: ChatMessage[] = [
  { time: '21:39', speaker: 'intj', message: '[发送了一条3秒的语音]' },
  { time: '21:45', speaker: 'infp', message: '讲真的，你这么喜欢图书馆，你应该去和图书馆谈。', hasEmoji: true },
  { time: '21:45', speaker: 'intj', message: '你和宿舍谈吗？图书馆不就是一个场所吗？' },
  { time: '21:46', speaker: 'infp', message: '对，我和宿舍谈，我和宿舍长长久久。图书馆是个场所，但是我是单纯说这个吗？', hasEmoji: true },
  { time: '21:47', speaker: 'intj', message: '我今天出汗太多了，不想以这个样子见你。' },
  { time: '21:47', speaker: 'infp', message: '我又不是在单说今天的事情，只是今天吗？' },
  { time: '21:48', speaker: 'infp', message: '到底要干嘛？我们俩是在异地恋吗？还是在网恋？' },
  { time: '21:49', speaker: 'intj', message: '那你应该觉得我应该每天去你们书院找你玩吗？我的事情很多啊，总得有时间处理吧。我有什么办法。街上看到好多情侣手挽手散步我也羡慕啊。但咱不就是没在一块行动嘛。' },
  { time: '21:50', speaker: 'intj', message: '你平时还有舍友可以一起打游戏聊天之类的，在你身边陪着。' },
  { time: '21:50', speaker: 'infp', message: '宝贝，你要是这么说话的话，我谈恋爱干嘛啊。那我平时陪着都有室友陪我了，我还要你干嘛呢。' },
  { time: '21:51', speaker: 'intj', message: '我这边每天独来独往的，我倒是想你在我旁边但不现实啊。说实话，我不知道怎么办才好。' },
  { time: '21:52', speaker: 'infp', message: '等一下，那你说我室友是什么意思？我不是在说我们两个的问题吗？' },
  { time: '21:52', speaker: 'intj', message: '你平时身边不缺人陪，但我缺。' },
  { time: '21:53', speaker: 'infp', message: '然后呢。' },
  { time: '21:53', speaker: 'intj', message: '不知道。' },
];

const day2Messages: ChatMessage[] = [
  { time: '00:07', speaker: 'intj', message: '是该睡觉了吗？' },
  { time: '00:13', speaker: 'infp', message: '不是你该睡觉了吗？' },
  { time: '00:14', speaker: 'intj', message: '有道理。那我睡觉了啊。晚安咯。' },
  { time: '12:14', speaker: 'infp', message: '你真的没有看到我吗？' },
  { time: '12:14', speaker: 'intj', message: '？你在哪？没有啊，没看到你。' },
  { time: '12:15', speaker: 'infp', message: '我说的是在主D楼下。' },
  { time: '12:16', speaker: 'intj', message: '也没有啊。' },
  { time: '19:35', speaker: 'intj', message: '今晚有啥计划，有时间出来聊天吗？' },
  { time: '19:36', speaker: 'infp', message: '我今天晚上出去通宵拼豆。' },
  { time: '19:37', speaker: 'intj', message: '几点去？' },
  { time: '19:37', speaker: 'infp', message: '8点多出门。' },
  { time: '19:38', speaker: 'intj', message: '你还是直接说有没有时间聊天吧。要是你八点前要收拾东西，那我就不过去了。' },
  { time: '19:39', speaker: 'infp', message: '嗯嗯，不用过来了。' },
  { time: '19:39', speaker: 'intj', message: '行。' },
];

function ChatBubble({ msg, index }: { msg: ChatMessage; index: number }) {
  const isIntj = msg.speaker === 'intj';

  return (
    <motion.div
      initial={{ opacity: 0, x: isIntj ? -30 : 30, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.8, delay: index * 0.06 }}
      className={`flex ${isIntj ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`max-w-[85%] md:max-w-[70%]`}>
        <div className="flex items-center gap-2 mb-1.5">
          <User className={`w-3 h-3 ${isIntj ? 'text-ember/50' : 'text-fog/40'}`} />
          <span className={`text-[11px] tracking-wider ${isIntj ? 'text-ember/40' : 'text-fog/30'}`}>
            {isIntj ? '葳蕤燃新序' : '桂箸'}
          </span>
          <Clock className="w-2.5 h-2.5 text-night-400/30 ml-1" />
          <span className="text-[10px] text-night-400/25">{msg.time}</span>
        </div>
        <div
          className={`chat-bubble-${isIntj ? 'intj' : 'infp'} rounded-2xl px-5 py-3.5 ${
            isIntj ? 'rounded-bl-md' : 'rounded-br-md'
          }`}
        >
          <p className={`text-sm leading-relaxed font-light ${
            isIntj ? 'text-mist/70' : 'text-fog/60'
          }`}>
            {msg.message}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function DaySection({ date, subtitle, messages }: {
  date: string;
  subtitle: string;
  messages: ChatMessage[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-8 h-px bg-night-400/20" />
          <span className="text-[11px] tracking-[0.3em] text-night-300/40 uppercase">{date}</span>
          <div className="w-8 h-px bg-night-400/20" />
        </div>
        <p className="text-sm text-night-300/30 font-light tracking-wider">{subtitle}</p>
      </motion.div>

      <div className="space-y-1">
        {messages.map((msg, i) => (
          <ChatBubble key={`${date}-${i}`} msg={msg} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function ChatRecord() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-ember/20" />
            <Heart className="w-4 h-4 text-ember/30" />
            <div className="h-px w-12 bg-ember/20" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-dawn/70 tracking-[0.2em] mb-4">
            原始记录
          </h2>
          <p className="text-sm text-night-300/30 font-light tracking-wider max-w-md mx-auto">
            以下聊天记录完整呈现，未加任何删改。每一句话都是关系裂缝的注脚
          </p>
        </motion.div>

        <DaySection
          date="2026 年 4 月 2 日"
          subtitle="关于「图书馆」与「异地感」的争论"
          messages={day1Messages}
        />

        {/* Day separator */}
        <div className="my-20 flex justify-center">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-px h-20 bg-night-400/15"
          />
        </div>

        <DaySection
          date="2026 年 4 月 3 日"
          subtitle="错过与疏离"
          messages={day2Messages}
        />
      </div>
    </section>
  );
}
