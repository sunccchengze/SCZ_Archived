import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BreakthroughSlide() {
  const [showW, setShowW] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-xuan via-dai to-zitan/20" />

      <div className="relative z-10 w-full max-w-md">
        {/* Error correction visualization */}
        <motion.div
          className="bg-dai/60 border border-shiqing/20 rounded-xl p-5 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-bold text-shiqing mb-3 flex items-center gap-2">
            <span>🔧</span> Quantum Error Correction
          </h4>

          {/* Grid of qubits showing error correction */}
          <div className="grid grid-cols-5 gap-2 mb-3">
            {Array.from({ length: 15 }).map((_, i) => {
              const isError = i === 3 || i === 11;
              const isCorrected = i === 3 || i === 11;
              return (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-[10px] font-mono"
                  style={{
                    border: `1px solid ${isError ? '#E23C3C44' : '#1E90A644'}`,
                    background: isError ? '#E23C3C11' : '#1E90A611',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  animate={isCorrected ? {
                    borderColor: ['#E23C3C44', '#C9A96E88', '#1E90A644'],
                    background: ['#E23C3C11', '#C9A96E22', '#1E90A611'],
                  } : {}}

                >
                  {isError ? (
                    <motion.span
                      className="text-zhusha"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ✗
                    </motion.span>
                  ) : (
                    <span className="text-shiqing">✓</span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <p className="text-[11px] text-cang">
            Harvard breakthrough: First quantum computer that{' '}
            <span className="text-liujin font-bold">reliably corrects its own errors at scale</span>
          </p>
        </motion.div>

        {/* W State */}
        <motion.div
          className="bg-dai/60 border border-liujin/20 rounded-xl p-5 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => setShowW(!showW)}
          whileHover={{ scale: 1.01 }}
        >
          <h4 className="text-sm font-bold text-liujin mb-3 flex items-center gap-2">
            <span>🔗</span> W State Detection
            <span className="text-[10px] text-cang ml-auto">Click to explore</span>
          </h4>

          {/* W state triangle */}
          <div className="flex justify-center mb-3">
            <svg width="160" height="140" viewBox="0 0 160 140">
              {/* Connection lines */}
              <motion.line x1="80" y1="20" x2="30" y2="120" stroke="#C9A96E" strokeWidth="1.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }} opacity={0.5} />
              <motion.line x1="80" y1="20" x2="130" y2="120" stroke="#C9A96E" strokeWidth="1.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }} opacity={0.5} />
              <motion.line x1="30" y1="120" x2="130" y2="120" stroke="#C9A96E" strokeWidth="1.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }} opacity={0.5} />

              {/* Particles */}
              {[
                { cx: 80, cy: 20 },
                { cx: 30, cy: 120 },
                { cx: 130, cy: 120 },
              ].map((p, i) => (
                <g key={i}>
                  <motion.circle
                    cx={p.cx} cy={p.cy} r="12" fill={showW && i === 0 ? '#E23C3C33' : '#1E90A633'}
                    stroke={showW && i === 0 ? '#E23C3C' : '#1E90A6'} strokeWidth="1.5"
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.2, type: 'spring' }}
                    animate={{ r: showW && i === 0 ? [12, 8, 12] : [12, 14, 12] }}
                  />
                  <text x={p.cx} y={p.cy + 4} textAnchor="middle" fill={showW && i === 0 ? '#E23C3C' : '#D6E4E8'}
                    fontSize="10" fontFamily="monospace">
                    {showW && i === 0 ? '✗' : `Q${i + 1}`}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {showW ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-[11px] text-gao border-t border-liujin/15 pt-3"
            >
              <p className="text-zhusha mb-1">❌ Particle 1 lost!</p>
              <p>But Q2 and Q3 <span className="text-liujin font-bold">remain entangled</span> — the W state is resilient to partial loss. Japan&apos;s breakthrough enables instant detection of this state.</p>
            </motion.div>
          ) : (
            <p className="text-[11px] text-cang">
              A W state: 3+ particles entangled with resilience to partial loss
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
