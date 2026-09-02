import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function Counter({ target, duration = 2000, inView }: { target: number; duration?: number; inView: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, target, duration]);
  return <>{v}</>;
}

export default function CompanionStatsSlide() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    x: Math.random() * 90 + 5,
    y: Math.random() * 80 + 10,
    size: Math.random() * 20 + 8,
    delay: i * 0.3,
    emoji: ['💬', '🤖', '❤️', '😊', '🫂', '💭', '📱'][i % 7],
  }));

  return (
    <div ref={ref} className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Floating chat bubbles background */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute text-lg pointer-events-none"
          style={{ left: `${b.x}%`, top: `${b.y}%`, fontSize: `${b.size}px` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.15, scale: 1, y: [0, -20, 0] } : {}}
          transition={{
            opacity: { duration: 0.5, delay: b.delay },
            scale: { duration: 0.5, delay: b.delay },
            y: { duration: 3 + Math.random() * 2, repeat: Infinity, delay: b.delay },
          }}
        >
          {b.emoji}
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-md">
        {/* Growth explosion */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 0.3 }}
        >
          <div className="inline-block bg-dai/80 border border-liujin/30 rounded-xl px-6 py-4">
            <div className="text-5xl font-bold text-gradient-gold">
              <Counter target={700} inView={inView} />%
            </div>
            <p className="text-sm text-cang mt-1">Surge in AI companion apps (2022–2025)</p>
          </div>
        </motion.div>

        {/* Key stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.div
            className="bg-dai/60 border border-liujin/20 rounded-lg p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-3xl font-bold text-liujin">
              <Counter target={72} inView={inView} />%
            </div>
            <p className="text-[11px] text-cang mt-1">of teens have used AI companions</p>
          </motion.div>

          <motion.div
            className="bg-dai/60 border border-zhusha/20 rounded-lg p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-3xl font-bold text-zhusha">
              1 in 3
            </div>
            <p className="text-[11px] text-cang mt-1">find AI as satisfying as humans</p>
          </motion.div>

          <motion.div
            className="col-span-2 bg-dai/60 border border-shiqing/20 rounded-lg p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">🧠</span>
              <div>
                <div className="text-2xl font-bold text-shiqing">
                  ~<Counter target={20} inView={inView} />%
                </div>
                <p className="text-[11px] text-cang">of 12–21-year-olds seek mental health advice from AI</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="seal-stamp mx-auto">
            LET THAT SINK IN
          </div>
        </motion.div>
      </div>
    </div>
  );
}
