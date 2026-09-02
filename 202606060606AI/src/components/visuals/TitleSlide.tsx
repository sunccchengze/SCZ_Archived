import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src="/images/slide1-future.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-xuan via-xuan/80 to-xuan/40" />
      </div>

      {/* Decorative frame */}
      <motion.div
        className="absolute inset-8 border border-liujin/20 pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* Corner ornaments */}
        {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-12 h-12`}>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-liujin" />
            <div className="absolute top-0 left-0 w-[2px] h-full bg-liujin" />
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 text-center px-8">
        {/* Chinese seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          className="inline-block mb-6"
        >
          <div className="border-2 border-zhusha p-3 inline-block" style={{ transform: 'rotate(-3deg)' }}>
            <span className="text-zhusha text-lg font-bold tracking-widest">未来已来</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gradient-gold">Spooky, Smart,</span>
          <br />
          <span className="text-gao">and a Little Bit</span>
          <br />
          <span className="text-zhusha">Dangerous</span>
        </motion.h1>

        <motion.div
          className="gold-line w-48 mx-auto my-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />

        <motion.p
          className="text-cang text-lg tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          A Tour of the Three Technologies Rewriting Your Future
        </motion.p>

        {/* Three topic icons */}
        <motion.div
          className="flex gap-8 mt-10 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            { icon: '🤖', label: 'AI Coding', color: '#1E90A6' },
            { icon: '💬', label: 'AI Friends', color: '#C9A96E' },
            { icon: '⚛️', label: 'Quantum', color: '#E23C3C' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{ border: `2px solid ${item.color}`, background: `${item.color}15` }}
              >
                {item.icon}
              </div>
              <span className="text-xs text-cang">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
