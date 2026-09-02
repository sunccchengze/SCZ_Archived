import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const lifecycle = [
    { emoji: '☁️', label: 'Nebula', desc: 'Gas clouds' },
    { emoji: '⭐', label: 'Star Born', desc: 'Fusion ignites' },
    { emoji: '☀️', label: 'Main Sequence', desc: 'Stable life' },
    { emoji: '🔴', label: 'Giant Phase', desc: 'Running out of fuel' },
    { emoji: '💥', label: 'Supernova', desc: 'Massive explosion' },
    { emoji: '🕳️', label: 'Black Hole', desc: 'Or neutron star' },
    { emoji: '☁️', label: 'New Nebula', desc: 'Cycle restarts' },
  ];

  return (
    <SectionWrapper id="closing" className="py-20 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Star lifecycle */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/star-lifecycle.jpg"
              alt="Star Lifecycle"
              className="w-full h-48 sm:h-64 object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center">
                The Cosmic Cycle
              </h2>
            </div>
          </div>

          {/* Lifecycle steps */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {lifecycle.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-1 sm:gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl block">{step.emoji}</span>
                  <span className="text-xs text-gray-300 font-bold">{step.label}</span>
                  <span className="text-xs text-gray-500 block">{step.desc}</span>
                </div>
                {i < lifecycle.length - 1 && (
                  <span className="text-gray-600 text-lg">→</span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Stars are born, live, die, and their remains become the seeds for new stars. 
            It's an eternal cosmic cycle of birth, death, and rebirth.
          </motion.p>
        </div>

        {/* Carl Sagan quote */}
        <motion.div
          className="max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-5xl mb-6 block">✨</span>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
            "We are a way for the <span className="gradient-text">cosmos</span> to know itself."
          </blockquote>
          <p className="text-purple-300 font-medium">— Carl Sagan</p>
        </motion.div>

        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
        >
          <p className="text-lg sm:text-xl text-gray-300">
            Keep looking up. Keep asking questions. Keep being curious.
          </p>
          <p className="text-base text-gray-400">
            Because you never know — maybe <span className="text-purple-300 font-bold">YOU</span> will be the 
            scientist who finally figures out what's INSIDE a black hole.
          </p>
          <div className="flex justify-center gap-2 text-3xl pt-4">
            <span>🌌</span>
            <span>🔭</span>
            <span>🚀</span>
            <span>⭐</span>
            <span>🕳️</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
