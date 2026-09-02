import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

export default function EndingSlide() {
  return (
    <div className="w-full max-w-3xl mx-auto text-center relative">
      {/* Faint Dyson ring in background */}
      <motion.div variants={item} className="relative mx-auto mb-12" style={{ width: 240, height: 240 }}>
        {/* Distant sun */}
        <div className="absolute inset-[90px] rounded-full bg-gradient-to-br from-[#ffb54733] to-[#ff450022] shadow-[0_0_40px_#ffb54722]" />
        {/* Faint ring */}
        <div className="absolute inset-4 rounded-full border border-[#00f6ff11]" style={{ animation: 'orbit-ring 30s linear infinite' }} />
        <div className="absolute inset-8 rounded-full border border-[#a56dff0a]" style={{ animation: 'orbit-ring 40s linear infinite reverse' }} />
        {/* Dim particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-[#00f6ff33]" style={{
            top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`,
            left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%`,
            animation: `twinkle ${3 + i * 0.5}s ease-in-out ${i * 0.8}s infinite`,
          }} />
        ))}
      </motion.div>

      <motion.blockquote variants={item} className="mb-6">
        <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed mb-6 italic">
          「仰望星空不是逃离现实，
          <br />
          而是在为现实寻找更大的坐标。」
        </p>
      </motion.blockquote>

      <motion.div variants={item}>
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#a56dff44] to-transparent mb-6" />
      </motion.div>

      <motion.blockquote variants={item}>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed italic">
          「戴森球也许很遥远，
          <br />
          但理解它的物理，从今天就可以开始。」
        </p>
      </motion.blockquote>

      <motion.div variants={item} className="mt-12">
        <div className="inline-flex items-center gap-2 text-gray-600 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#00f6ff33]" />
          <span>Dyson Sphere — 给初二天文爱好者的科普讲座</span>
          <span className="w-2 h-2 rounded-full bg-[#a56dff33]" />
        </div>
      </motion.div>
    </div>
  );
}
