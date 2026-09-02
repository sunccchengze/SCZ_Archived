import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wind, Sparkles } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-40 px-6 min-h-[80vh] flex flex-col items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-ember-glow blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-8 bg-dawn/10" />
            <Wind className="w-4 h-4 text-dawn/15" />
            <div className="h-px w-8 bg-dawn/10" />
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-light text-dawn/50 tracking-[0.25em] mb-12 leading-relaxed">
            愿每一个读到这里的你
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="space-y-6 mb-16"
        >
          <p className="text-base md:text-lg font-serif font-light text-night-200/30 leading-loose tracking-wider">
            不在沉默中失去，<br />不在误解中错过。
          </p>
          <p className="text-sm font-light text-night-300/25 leading-[2] tracking-widest">
            如果你正在相似的关系里，<br />
            希望你们能在裂缝变成深渊之前，<br />
            看见彼此真正的样子。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 1.2 }}
          className="mb-16"
        >
          <div className="glow-line rounded-lg px-8 py-6 inline-block">
            <Sparkles className="w-3.5 h-3.5 text-ember/20 mx-auto mb-4" />
            <p className="text-sm font-serif text-dawn/40 italic leading-relaxed tracking-wider">
              「最终的告别，不是不爱了，<br />
              是太累了。」
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 2 }}
        >
          <div className="h-px w-16 bg-dawn/8 mx-auto mb-6" />
          <p className="text-[11px] text-night-400/20 tracking-[0.4em] leading-loose">
            愿我们最终都能找到一个长久相伴的人
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 2.5 }}
          className="mt-24"
        >
          <p className="text-[10px] text-night-500/15 tracking-[0.3em]">
            基于 2026.4.2 — 2026.4.3 真实聊天记录分析
          </p>
          <p className="text-[10px] text-night-500/15 tracking-[0.3em] mt-1">
            文中所有分析以事实为依据，仅供参考
          </p>
        </motion.div>
      </div>
    </section>
  );
}
