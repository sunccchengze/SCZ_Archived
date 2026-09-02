import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function TrustSlide() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [showIntern, setShowIntern] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setShowIntern(true), 2500);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/slide6-trust.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-xuan/80" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <motion.h3
          className="text-2xl font-bold text-center mb-8 text-gradient-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          The Paradox of Trust
        </motion.h3>

        {/* Adoption vs Trust visual */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-sm text-cang mb-2">Adoption</div>
            <div className="relative w-28 h-28 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#151A2B" strokeWidth="8" />
                <motion.circle
                  cx="50" cy="50" r="40" fill="none" stroke="#1E90A6" strokeWidth="8"
                  strokeDasharray={`${84 * 2.51} ${(100 - 84) * 2.51}`}
                  initial={{ strokeDasharray: '0 251' }}
                  animate={inView ? { strokeDasharray: `${84 * 2.51} ${(100 - 84) * 2.51}` } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-shiqing">84%</span>
              </div>
            </div>
            <div className="text-xs text-shiqing mt-2">📈 Rising</div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-sm text-cang mb-2">Trust</div>
            <div className="relative w-28 h-28 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#151A2B" strokeWidth="8" />
                <motion.circle
                  cx="50" cy="50" r="40" fill="none" stroke="#E23C3C" strokeWidth="8"
                  strokeDasharray={`${29 * 2.51} ${(100 - 29) * 2.51}`}
                  initial={{ strokeDasharray: '0 251' }}
                  animate={inView ? { strokeDasharray: `${29 * 2.51} ${(100 - 29) * 2.51}` } : {}}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-zhusha">29%</span>
              </div>
            </div>
            <div className="text-xs text-zhusha mt-2">📉 Declining</div>
          </motion.div>
        </div>

        {/* Arrows showing paradox */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-shiqing">More using</span>
          <span className="text-liujin text-xl">⟷</span>
          <span className="text-zhusha">Less trusting</span>
        </motion.div>

        {/* Intern analogy */}
        {showIntern && (
          <motion.div
            className="bg-dai/60 border border-liujin/20 rounded-lg p-4 text-center"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <div className="text-3xl mb-2">🧑‍💼</div>
            <p className="text-sm text-gao italic">
              "Think of it like a very talented, very fast intern who has a habit of
              <span className="text-zhusha font-bold"> confidently making things up</span>."
            </p>
            <p className="text-xs text-cang mt-2">
              You want them on your team. You just can't let them submit without checking.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
