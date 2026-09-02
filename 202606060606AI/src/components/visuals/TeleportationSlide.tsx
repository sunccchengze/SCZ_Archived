import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TeleportationSlide() {
  const [teleporting, setTeleporting] = useState(false);
  const [done, setDone] = useState(false);

  const handleTeleport = () => {
    setTeleporting(true);
    setDone(false);
    setTimeout(() => {
      setTeleporting(false);
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    }, 2500);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-xuan via-dai to-zitan/20" />

      <div className="relative z-10 w-full max-w-lg">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="seal-stamp inline-block mb-3 text-[10px]">量子传态</div>
        </motion.div>

        {/* Teleportation diagram */}
        <motion.div
          className="relative bg-dai/40 border border-shiqing/20 rounded-xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            {/* Source */}
            <div className="text-center flex-shrink-0">
              <motion.div
                className="w-16 h-16 rounded-full border-2 border-shiqing flex items-center justify-center mx-auto mb-2"
                style={{
                  background: teleporting ? 'transparent' : '#1E90A622',
                  boxShadow: teleporting ? 'none' : '0 0 20px #1E90A633',
                }}
                animate={teleporting ? { opacity: [1, 0.3, 0.1], scale: [1, 0.8, 0.5] } : {}}
                transition={{ duration: 2 }}
              >
                {!teleporting && !done && <span className="text-shiqing text-lg">|ψ⟩</span>}
                {teleporting && <span className="text-cang text-sm">...</span>}
                {done && <span className="text-cang text-sm">∅</span>}
              </motion.div>
              <span className="text-xs text-cang">Source</span>
              <div className="text-[10px] text-shiqing">Quantum Dot A</div>
            </div>

            {/* Arrow / particles */}
            <div className="flex-1 relative h-20 mx-4">
              {/* Entanglement channel */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-shiqing via-liujin to-shiqing opacity-30" />

              {/* Info transfer particles */}
              {teleporting && Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-liujin"
                  style={{ top: '50%', left: 0, marginTop: -4 }}
                  animate={{
                    left: ['0%', '100%'],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1.2, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-cang bg-xuan px-2">
                270m open air
              </div>
            </div>

            {/* Destination */}
            <div className="text-center flex-shrink-0">
              <motion.div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-2"
                style={{
                  borderColor: done ? '#C9A96E' : '#1E90A644',
                  background: done ? '#C9A96E22' : 'transparent',
                  boxShadow: done ? '0 0 30px #C9A96E44' : 'none',
                }}
                animate={done ? { scale: [0.8, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {done ? (
                  <span className="text-liujin text-lg">|ψ⟩</span>
                ) : (
                  <span className="text-cang/30 text-lg">?</span>
                )}
              </motion.div>
              <span className="text-xs text-cang">Destination</span>
              <div className="text-[10px] text-liujin">Quantum Dot B</div>
            </div>
          </div>

          {/* No-cloning theorem note */}
          <motion.div
            className="mt-4 text-center border-t border-shiqing/10 pt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-[10px] text-zhusha">⚠️ No-Cloning Theorem: </span>
            <span className="text-[10px] text-cang">Cannot copy — only teleport (original is destroyed)</span>
          </motion.div>
        </motion.div>

        {/* Teleport button */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-6 py-3 rounded-lg text-sm font-bold cursor-pointer text-xuan"
            style={{
              background: teleporting
                ? '#6B7E8A'
                : done
                ? '#C9A96E'
                : 'linear-gradient(135deg, #E23C3C, #C9A96E)',
            }}
            whileHover={!teleporting ? { scale: 1.05 } : {}}
            whileTap={!teleporting ? { scale: 0.95 } : {}}
            onClick={handleTeleport}
            disabled={teleporting}
          >
            {teleporting ? '⏳ Teleporting...' : done ? '✅ State Teleported!' : '🌀 Teleport Quantum State'}
          </motion.button>
        </motion.div>

        {/* NYC fiber note */}
        <motion.div
          className="bg-dai/60 border border-liujin/15 rounded-lg p-3 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-gao">
            🏙️ In 2026, a 3-node quantum network was tested across
            <span className="text-liujin font-bold"> existing fiber optic cables in NYC</span>
            — the same cables carrying your Netflix stream.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
