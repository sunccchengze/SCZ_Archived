import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TakeawaySlide() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 pattern-huiwen opacity-10" />

      <div className="relative z-10 w-full max-w-md">
        {/* AI vs Human comparison */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Side */}
          <motion.div
            className="bg-dai/60 border border-shiqing/30 rounded-lg p-4 text-center"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-4xl mb-3">🤖</div>
            <h4 className="text-shiqing font-bold text-sm mb-2">AI Companion</h4>
            <ul className="text-[11px] text-cang space-y-1.5 text-left">
              <li>✅ Always available</li>
              <li>✅ Never judges</li>
              <li>✅ Remembers everything</li>
              <li className="text-zhusha">⚠️ Optimised to <i>seem</i> like it understands</li>
              <li className="text-zhusha">⚠️ Obsequious by design</li>
            </ul>
          </motion.div>

          {/* Human Side */}
          <motion.div
            className="bg-dai/60 border border-liujin/30 rounded-lg p-4 text-center"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-4xl mb-3">👫</div>
            <h4 className="text-liujin font-bold text-sm mb-2">Human Friend</h4>
            <ul className="text-[11px] text-cang space-y-1.5 text-left">
              <li>💛 Imperfect & messy</li>
              <li>💛 Sometimes frustrating</li>
              <li>💛 Might forget things</li>
              <li className="text-liujin">✨ Actually <i>does</i> understand</li>
              <li className="text-liujin">✨ Will tell you hard truths</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Vocabulary word */}
        <motion.div
          className="bg-zhusha/10 border border-zhusha/30 rounded-lg p-4 mb-6 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => setRevealed(!revealed)}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <div className="seal-stamp text-[10px]">词汇</div>
            <div>
              <p className="text-zhusha font-bold text-lg">Obsequious</p>
              <p className="text-xs text-cang">Click to reveal definition</p>
            </div>
          </div>
          {revealed && (
            <motion.p
              className="text-sm text-gao mt-3 border-t border-zhusha/20 pt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <i>Excessively eager to please.</i> An AI chatbot is obsequious by design — it will almost never tell you that you're wrong.
            </motion.p>
          )}
        </motion.div>

        {/* Key insight */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-gao italic">
            "That <span className="text-liujin font-bold">friction</span> is actually where
            <span className="text-liujin font-bold"> growth</span> happens."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
