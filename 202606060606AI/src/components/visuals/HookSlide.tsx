import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HookSlide() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500);
    const t2 = setTimeout(() => setPhase(2), 3000);
    const t3 = setTimeout(() => setPhase(3), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const programmers = Array.from({ length: 12 }, (_, i) => ({
    x: 15 + (i % 4) * 25,
    y: 25 + Math.floor(i / 4) * 25,
    delay: i * 0.15,
  }));

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pattern-huiwen opacity-30" />

      <motion.h2
        className="text-3xl font-bold text-gradient-gold mb-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What if every programmer... vanished?
      </motion.h2>

      <div className="relative w-80 h-64 mx-auto">
        {programmers.map((p, i) => (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            initial={{ opacity: 1, scale: 1 }}
            animate={phase >= 2 ? { opacity: 0, scale: 0, y: -40 } : {}}
            transition={{ duration: 0.6, delay: p.delay }}
          >
            <div className="text-3xl">👨‍💻</div>
            {phase < 2 && (
              <motion.div
                className="text-[10px] text-shiqing font-mono mt-1 opacity-60"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                {'</>'}
              </motion.div>
            )}
          </motion.div>
        ))}

        {phase >= 2 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🏖️</div>
              <p className="text-liujin text-sm">Permanent Vacation</p>
            </div>
          </motion.div>
        )}
      </div>

      {phase >= 3 && (
        <motion.div
          className="mt-8 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-6 justify-center text-4xl mb-4">
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>🌐</motion.span>
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>📱</motion.span>
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>⚡</motion.span>
          </div>
          <p className="text-gao text-lg">Would civilization grind to a halt?</p>
          <motion.p
            className="text-zhusha text-xl font-bold mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Surprisingly... probably not.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
