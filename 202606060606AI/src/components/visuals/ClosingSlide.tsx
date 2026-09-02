import { motion } from 'framer-motion';

const recap = [
  {
    icon: '🤖',
    title: 'AI Coding Tools',
    summary: '51% of code is AI-assisted. The bar is rising for critical thinking.',
    color: '#1E90A6',
  },
  {
    icon: '💬',
    title: 'AI Companions',
    summary: '72% of teens using them. Comfort is real, but so are the risks.',
    color: '#C9A96E',
  },
  {
    icon: '⚛️',
    title: 'Quantum Computing',
    summary: 'Teleportation, entanglement, and the quantum internet — all happening now.',
    color: '#E23C3C',
  },
];

export default function ClosingSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/slide1-future.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-xuan via-xuan/90 to-xuan/60" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Recap cards */}
        <div className="space-y-3 mb-6">
          {recap.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 bg-dai/60 border rounded-lg p-3"
              style={{ borderColor: `${item.color}33` }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}44` }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold" style={{ color: item.color }}>{item.title}</h4>
                <p className="text-[11px] text-cang">{item.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inflection point */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="seal-stamp inline-block mb-3">
            INFLECTION POINT
          </div>
          <p className="text-sm text-gao">
            Not a gradual evolution, but a genuine{' '}
            <span className="text-liujin font-bold">rupture</span> in the history of technology.
          </p>
        </motion.div>

        {/* Key message */}
        <motion.div
          className="bg-dai/60 border border-liujin/20 rounded-xl p-5 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
        >
          <p className="text-sm text-gao leading-relaxed mb-3">
            Be <span className="text-liujin font-bold">curious</span>.{' '}
            Be <span className="text-shiqing font-bold">sceptical</span>.{' '}
            Be <span className="text-zhusha font-bold">rigorous</span>.
          </p>
          <motion.p
            className="text-lg text-gradient-gold font-bold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            You were born at the most interesting moment in the history of human knowledge.
          </motion.p>
        </motion.div>

        <motion.p
          className="text-xs text-cang text-center mt-6 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Thank you — this was genuinely one of the most enjoyable lectures I&apos;ve given. 🏯✨
        </motion.p>
      </div>
    </div>
  );
}
