import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

const nebulaImages = [
  { name: 'Ring Nebula', emoji: '🔵', desc: 'A dying star\'s final breath' },
  { name: 'Cat\'s Eye Nebula', emoji: '🟢', desc: 'Intricate layers of expelled gas' },
  { name: 'Hourglass Nebula', emoji: '🟣', desc: 'Shaped by stellar winds' },
  { name: 'Helix Nebula', emoji: '🔴', desc: 'The Eye of God' },
];

export default function StarDeathSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="star-death" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          emoji="💫"
          title="A Gentle Goodbye"
          subtitle="How small & medium stars like our Sun die — beautifully"
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-16">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-red-500 to-blue-300" />

          {[
            {
              icon: '☀️',
              title: 'Running Out of Fuel',
              desc: 'In about 5 billion years, our Sun will start running out of hydrogen fuel. The balance between gravity and fusion begins to shift.',
              color: 'border-yellow-500/30',
            },
            {
              icon: '🔴',
              title: 'Red Giant Phase',
              desc: 'The Sun swells up enormously — becoming a Red Giant so large it will swallow Mercury, Venus, and possibly Earth!',
              color: 'border-red-500/30',
            },
            {
              icon: '💨',
              title: 'Shedding Outer Layers',
              desc: 'The outer layers slowly drift away into space, creating a beautiful, glowing cloud of gas called a planetary nebula.',
              color: 'border-purple-500/30',
            },
            {
              icon: '⚪',
              title: 'White Dwarf Remains',
              desc: 'What\'s left is a tiny, super-dense white dwarf — Earth-sized but containing almost the entire mass of the star. A teaspoon weighs 5-10 tons!',
              color: 'border-blue-300/30',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-16 sm:pl-20 pb-10 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="absolute left-2 sm:left-4 w-8 sm:w-8 h-8 sm:h-8 flex items-center justify-center text-xl sm:text-2xl bg-space-900 z-10 rounded-full border border-gray-700">
                {item.icon}
              </div>
              <div className={`p-5 sm:p-6 rounded-2xl border ${item.color} bg-white/5 backdrop-blur-sm`}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Planetary Nebulae Gallery */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-center text-xl sm:text-2xl font-bold text-purple-300 mb-6">
            ✨ Beautiful Planetary Nebulae
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nebulaImages.map((neb, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl border border-purple-500/20 bg-purple-900/10 text-center card-glow"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl mb-2 block">{neb.emoji}</span>
                <h4 className="font-bold text-white text-sm mb-1">{neb.name}</h4>
                <p className="text-gray-400 text-xs">{neb.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition to massive stars */}
        <motion.div
          className="text-center mt-16 p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-900/20 to-orange-900/20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-lg sm:text-xl text-gray-300">
            That's how a small star dies — with a gentle, beautiful goodbye.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-red-400 mt-4">
            But what about the BIG stars? 😈
          </p>
          <p className="text-2xl sm:text-3xl font-black text-white mt-2">
            They do NOT go gently...
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
