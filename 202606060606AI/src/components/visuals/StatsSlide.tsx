import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedNumber({ target, suffix = '', prefix = '', duration = 2000 }: {
  target: number; suffix?: string; prefix?: string; duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [inView, target, duration]);

  return <span ref={ref}>{prefix}{current}{suffix}</span>;
}

function BarChart({ data, inView }: { data: Array<{ label: string; value: number; max: number; color: string }>; inView: boolean }) {
  return (
    <div className="space-y-3 w-full">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs text-cang w-28 text-right shrink-0">{item.label}</span>
          <div className="flex-1 h-6 bg-dai rounded-sm overflow-hidden relative">
            <motion.div
              className="h-full rounded-sm relative"
              style={{ background: item.color }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${(item.value / item.max) * 100}%` } : {}}
              transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
            >
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-xuan font-bold">
                {item.value}%
              </span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function StatsSlide() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 pattern-huiwen opacity-20" />

      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Big numbers */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <motion.div
            className="bg-dai/60 border border-liujin/20 rounded-lg p-4 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-gradient-gold">
              <AnimatedNumber target={84} suffix="%" />
            </div>
            <p className="text-xs text-cang mt-1">Developers using AI tools</p>
          </motion.div>

          <motion.div
            className="bg-dai/60 border border-shiqing/20 rounded-lg p-4 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-4xl font-bold text-gradient-teal">
              <AnimatedNumber target={51} suffix="%" />
            </div>
            <p className="text-xs text-cang mt-1">Code AI-assisted on GitHub</p>
          </motion.div>
        </div>

        {/* Bar chart */}
        <motion.div
          className="bg-dai/40 border border-liujin/10 rounded-lg p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-sm text-liujin mb-3 font-bold">Job Market Shifts (2025→2026)</h3>
          <BarChart
            inView={inView}
            data={[
              { label: 'AI Tool Jobs', value: 340, max: 400, color: 'linear-gradient(90deg, #1E90A6, #C9A96E)' },
              { label: 'Pure Coding Jobs', value: 17, max: 400, color: '#E23C3C66' },
            ]}
          />
          <div className="flex justify-between mt-2 text-[10px] text-cang">
            <span>↑ 340% increase</span>
            <span>↓ 17% decline</span>
          </div>
        </motion.div>

        {/* Seal stamp */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, rotate: -20, scale: 0 }}
          whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
        >
          <div className="seal-stamp text-sm">
            THIS YEAR · 2026
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
