import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

export default function NeutronStarSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="neutron-stars" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          emoji="🔮"
          title="Neutron Stars"
          subtitle="The Extreme Leftovers — Dense, fast, and absolutely mind-boggling"
        />

        {/* Main image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/neutron-star.jpg"
            alt="Neutron Star"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Cosmic Lighthouse
            </h3>
            <p className="text-gray-300 text-sm">
              Neutron stars — pulsars — spin and emit beams of radiation like cosmic lighthouses
            </p>
          </div>
        </motion.div>

        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {[
            {
              icon: '📏',
              stat: '~20 km',
              label: 'Diameter',
              desc: 'Smaller than most cities, yet contains more mass than our Sun!',
              color: 'border-blue-500/30',
            },
            {
              icon: '🥄',
              stat: '1 Billion Tons',
              label: 'Per Teaspoon',
              desc: 'Like crushing every car, truck, ship and plane on Earth into a spoon!',
              color: 'border-purple-500/30',
            },
            {
              icon: '🌀',
              stat: '716 per second',
              label: 'Spin Rate',
              desc: 'Some neutron stars rotate hundreds of times every single second!',
              color: 'border-pink-500/30',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl border ${item.color} bg-white/5 text-center card-glow`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">{item.stat}</div>
              <div className="text-sm font-bold text-purple-300 mb-2">{item.label}</div>
              <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Spinning neutron star animation */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-xl font-bold text-white mb-6">🌀 Pulsar Rotation</h3>
          <div className="relative inline-block">
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
              style={{
                boxShadow: '0 0 40px rgba(99,102,241,0.4), 0 0 80px rgba(99,102,241,0.2)',
              }}
            >
              {/* Beam */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-40 sm:h-52 -translate-y-full bg-gradient-to-t from-cyan-400 to-transparent opacity-60 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-40 sm:h-52 translate-y-full bg-gradient-to-b from-cyan-400 to-transparent opacity-60 rounded-full" />
            </motion.div>
          </div>
          <p className="text-gray-400 text-sm mt-16">
            ☝️ This pulsar animation spins ~2 times per second — real pulsars can spin <span className="text-cyan-400 font-bold">716 times per second!</span>
          </p>
        </div>

        {/* LGM story */}
        <motion.div
          className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl border border-green-500/20 bg-green-900/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="text-4xl mb-3 block">👽</span>
          <h3 className="text-xl font-bold text-green-300 mb-3">Little Green Men?</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            When scientists first discovered pulsars in 1967, the signal was SO regular and precise 
            that they thought it might be a message from <span className="text-green-400 font-bold">aliens</span>! 
            They jokingly named it <span className="font-bold text-green-300">"LGM-1"</span> — 
            <span className="italic">"Little Green Men."</span> Turns out it was just a rapidly spinning neutron star. 
            Still pretty cool, though! 😄
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
