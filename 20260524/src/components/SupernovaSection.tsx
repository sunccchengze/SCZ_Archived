import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

const onionLayers = [
  { element: 'Hydrogen', color: '#60a5fa', time: 'Millions of years' },
  { element: 'Helium', color: '#a78bfa', time: 'Hundreds of thousands of years' },
  { element: 'Carbon', color: '#f472b6', time: 'Thousands of years' },
  { element: 'Neon', color: '#fb923c', time: 'Months' },
  { element: 'Oxygen', color: '#34d399', time: 'Months' },
  { element: 'Silicon', color: '#fbbf24', time: '~1 day' },
  { element: 'Iron ☠️', color: '#ef4444', time: 'DEAD END' },
];

export default function SupernovaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [exploded, setExploded] = useState(false);

  return (
    <SectionWrapper id="supernova" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          emoji="💥"
          title="SUPERNOVA"
          subtitle="The Most Powerful Explosion in the Universe"
        />

        {/* Hero image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/supernova.jpg"
            alt="Supernova explosion"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent" />
        </motion.div>

        {/* The Battle */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-8">
            ⚔️ The Constant Battle Inside a Star
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              className="p-6 rounded-2xl border border-blue-500/30 bg-blue-900/20 text-center"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="text-4xl mb-3 block">⬇️</span>
              <h4 className="text-lg font-bold text-blue-300 mb-2">Gravity</h4>
              <p className="text-gray-300 text-sm">Trying to CRUSH the star inward — collapsing everything to the center</p>
            </motion.div>
            <motion.div
              className="p-6 rounded-2xl border border-orange-500/30 bg-orange-900/20 text-center"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="text-4xl mb-3 block">⬆️</span>
              <h4 className="text-lg font-bold text-orange-300 mb-2">Nuclear Fusion</h4>
              <p className="text-gray-300 text-sm">Energy pushing OUTWARD — like a bomb going off, holding the star up</p>
            </motion.div>
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm sm:text-base">
            For millions of years, these two forces are perfectly balanced. But when a massive star runs out of fuel...
          </p>
        </div>

        {/* Onion Layers — Interactive */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-4">
            🧅 The Onion Structure of a Massive Star
          </h3>
          <p className="text-center text-gray-400 mb-8 text-sm sm:text-base">
            As the star runs out of one fuel, it starts fusing heavier elements. Each layer takes LESS time!
          </p>

          <div className="flex flex-col items-center gap-2">
            {onionLayers.map((layer, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 w-full max-w-md"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div
                  className="h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white px-3 flex-shrink-0"
                  style={{
                    backgroundColor: layer.color + '33',
                    borderLeft: `4px solid ${layer.color}`,
                    width: `${100 - i * 10}%`,
                    minWidth: '120px',
                  }}
                >
                  {layer.element}
                </div>
                <span className={`text-xs whitespace-nowrap flex-shrink-0 ${
                  i === onionLayers.length - 1 ? 'text-red-400 font-bold' : 'text-gray-500'
                }`}>
                  {layer.time}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-6 text-red-400 font-bold text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            ⚠️ Iron is the DEAD END. You cannot get energy from fusing iron. Fusion STOPS. Gravity WINS.
          </motion.p>
        </div>

        {/* Explosion Button */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">💣 Trigger the Supernova!</h3>
          <motion.button
            className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
              exploded
                ? 'bg-red-600 text-white'
                : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-red-500/30'
            }`}
            onClick={() => setExploded(!exploded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {exploded ? '💥 BOOM! SUPERNOVA!' : '🔴 Press to Detonate'}
          </motion.button>

          {/* Explosion animation */}
          {exploded && (
            <motion.div className="relative mt-8">
              {/* Expanding rings */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 rounded-full border-2 border-orange-500/50"
                  initial={{ width: 0, height: 0, x: '-50%', y: '-50%', opacity: 1 }}
                  animate={{
                    width: [0, 400 + i * 100],
                    height: [0, 400 + i * 100],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              ))}

              <motion.div
                className="relative z-10 p-8 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-900/30 to-red-900/30 mt-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
              >
                <p className="text-2xl sm:text-3xl font-black text-orange-400 mb-4">💥 SUPERNOVA!</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-white">10B+ years</div>
                    <div className="text-xs text-gray-400">of Sun's energy released in seconds</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">100B+ stars</div>
                    <div className="text-xs text-gray-400">outshone by a single supernova</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">70,000 km/s</div>
                    <div className="text-xs text-gray-400">speed of expanding debris (23% of light!)</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Star Stuff */}
        <motion.div
          className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-pink-900/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <span className="text-5xl mb-4 block">✨</span>
          <h3 className="text-2xl sm:text-3xl font-black gradient-text mb-4">
            "We Are Made of Star Stuff"
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            Every atom of <span className="text-blue-300 font-bold">calcium</span> in your bones, 
            every atom of <span className="text-red-300 font-bold">iron</span> in your blood, 
            every atom of <span className="text-green-300 font-bold">oxygen</span> you breathe — 
            was forged inside a massive star and blasted out by a supernova, billions of years ago.
          </p>
          <p className="text-lg sm:text-xl font-bold text-purple-300">
            🌟 "I come from an exploding star." 🌟
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
