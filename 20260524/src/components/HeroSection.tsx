import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/blackhole-hero.jpg"
          alt="Black hole"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space-900/60 via-space-900/40 to-space-900" />
      </div>

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-purple-500/20"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="text-6xl sm:text-8xl">🌌</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="gradient-text">Monsters</span>
          <br />
          <span className="text-white">of the </span>
          <span className="gradient-text-fire">Universe</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-purple-200/80 font-light mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Black Holes & Supernovas
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          A journey through the most powerful, mysterious, and terrifying phenomena
          in the cosmos. Even <span className="text-yellow-400 font-semibold">light</span> — the fastest thing in the universe — cannot escape.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { icon: '⭐', label: 'Star Birth' },
            { icon: '💥', label: 'Supernovas' },
            { icon: '🕳️', label: 'Black Holes' },
            { icon: '🎮', label: 'Interactive' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-200 text-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139,92,246,0.5)' }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <ChevronDown className="text-purple-400" size={24} />
      </motion.div>
    </section>
  );
}
