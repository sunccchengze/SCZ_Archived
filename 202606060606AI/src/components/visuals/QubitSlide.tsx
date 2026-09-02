import { motion } from 'framer-motion';
import { useState } from 'react';

export default function QubitSlide() {
  const [measured, setMeasured] = useState(false);
  const [result, setResult] = useState<0 | 1>(0);

  const handleMeasure = () => {
    setResult(Math.random() > 0.5 ? 1 : 0);
    setMeasured(true);
    setTimeout(() => setMeasured(false), 3000);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-xuan via-dai to-zitan/30" />

      <div className="relative z-10 w-full max-w-md">
        {/* Classical vs Quantum comparison */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Classical bit */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-cang text-sm mb-3">Classical Bit</h4>
            <div className="flex gap-3 justify-center">
              <div className="w-16 h-16 rounded-lg bg-dai border border-cang/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-gao font-mono">0</span>
              </div>
              <div className="flex items-center text-cang text-xl">or</div>
              <div className="w-16 h-16 rounded-lg bg-dai border border-cang/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-gao font-mono">1</span>
              </div>
            </div>
            <p className="text-[10px] text-cang mt-2">One state at a time</p>
          </motion.div>

          {/* Qubit */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-shiqing text-sm mb-3">Qubit</h4>
            <div className="flex justify-center">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, #1E90A6, #C9A96E)',
                  boxShadow: '0 0 30px #1E90A644',
                }}
                animate={!measured ? { rotateY: [0, 360] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                {measured ? (
                  <span className="text-2xl font-bold text-xuan font-mono">{result}</span>
                ) : (
                  <span className="text-lg font-bold text-xuan font-mono">0+1</span>
                )}
              </motion.div>
            </div>
            <p className="text-[10px] text-shiqing mt-2">
              {measured ? 'Collapsed!' : 'Superposition: both at once'}
            </p>
          </motion.div>
        </div>

        {/* The spinning coin analogy */}
        <motion.div
          className="bg-dai/60 border border-liujin/20 rounded-xl p-5 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-6 mb-3">
            <motion.div
              className="text-5xl"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'inline-block' }}
            >
              🪙
            </motion.div>
            <div className="text-cang text-2xl">→</div>
            <div className="text-4xl">
              {measured ? (result === 1 ? '👑' : '🔢') : '❓'}
            </div>
          </div>
          <p className="text-xs text-gao">
            Like a spinning coin — while spinning, it&apos;s both heads AND tails.
            <br />
            When it lands (measured), it collapses to one value.
          </p>
        </motion.div>

        {/* Interactive measure button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="px-6 py-3 rounded-lg font-bold text-sm text-xuan cursor-pointer"
            style={{
              background: measured
                ? '#E23C3C'
                : 'linear-gradient(135deg, #1E90A6, #C9A96E)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMeasure}
            disabled={measured}
          >
            {measured ? `Collapsed to: ${result}` : '🔬 Measure the Qubit!'}
          </motion.button>
          <p className="text-[10px] text-cang mt-2">Click to collapse the superposition</p>
        </motion.div>

        {/* Power visualization */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-[11px] text-cang">
            300 qubits = more states than{' '}
            <span className="text-liujin font-bold">atoms in the observable universe</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
