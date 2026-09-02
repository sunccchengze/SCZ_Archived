import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnimatedWord = ({ word, delay }: { word: string; delay: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
      animate={visible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="inline-block"
    >
      {word}
    </motion.span>
  );
};

export default function HeroSection() {
  const poem = ['雨', '落', '了', '整', '夜', '她', '还', '没', '来'];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-ember-glow blur-[150px] opacity-40" />
      </div>

      {/* Ambient side glows */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[600px] bg-ember-glow blur-[120px] opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-[200px] h-[400px] bg-ember-glow blur-[100px] opacity-8" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Hairline above title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
          className="w-16 h-px bg-mist/30 mx-auto mb-12"
        />

        {/* Poem line - appearing character by character */}
        <div className="mb-8 flex justify-center gap-3 text-3xl md:text-4xl font-serif font-extralight text-ash tracking-[0.3em]">
          {poem.map((char, i) => (
            <AnimatedWord key={i} word={char} delay={800 + i * 300} />
          ))}
        </div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, delay: 3.5 }}
          className="text-5xl md:text-7xl font-serif font-bold text-dawn/90 tracking-[0.15em] mb-6 text-shadow-glow"
        >
          然后呢？
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 5 }}
          className="text-base md:text-lg font-light text-mist/60 tracking-[0.5em] uppercase mb-4"
        >
          一段正在走向终局的关系
        </motion.p>

        {/* Descriptive text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 5.8 }}
          className="font-serif text-sm md:text-base text-night-200/40 font-light tracking-wider max-w-lg mx-auto leading-loose mt-6"
        >
          INFP 与 INTJ 的聊天记录，藏着所有无法言说的沉默、误解与渐行渐远的距离
        </motion.p>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 6.5, ease: 'easeInOut' }}
          className="w-24 h-px bg-mist/20 mx-auto mt-16"
        />

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7.5 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <span className="text-[11px] tracking-[0.4em] text-night-400/40 uppercase">向下探索</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-night-400/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
