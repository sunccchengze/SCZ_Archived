import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

const steps = [
  {
    icon: '☁️',
    title: 'Nebula — The Star Nursery',
    desc: 'Stars are born inside enormous clouds of gas and dust called nebulae. These cosmic nurseries contain mostly hydrogen — the lightest and simplest element.',
    color: 'from-blue-500/20 to-purple-500/20',
    border: 'border-blue-500/30',
  },
  {
    icon: '🌀',
    title: 'Gravity Pulls Gas Together',
    desc: 'Gravity — that invisible force keeping your feet on the ground — starts pulling the gas together, tighter and tighter. As it compresses, it gets incredibly hot!',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
  },
  {
    icon: '🔥',
    title: '15 Million °C — Ignition!',
    desc: 'When the core reaches about 15 million degrees Celsius, hydrogen atoms smash together to form helium, releasing tremendous energy. This is nuclear fusion!',
    color: 'from-orange-500/20 to-yellow-500/20',
    border: 'border-orange-500/30',
  },
  {
    icon: '⭐',
    title: 'A Star Is Born!',
    desc: 'The moment fusion begins, a star is born! A star is a giant ball of gas so hot that atoms smash together, releasing light and heat. Our Sun does this every second.',
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'border-yellow-500/30',
  },
];

export default function StarBirthSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="star-birth" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          emoji="⭐"
          title="Star Birth"
          subtitle="The Nursery of the Universe — Where all stars begin their journey"
        />

        {/* Pillars of Creation image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 max-w-4xl mx-auto"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/images/pillars-of-creation.jpg"
            alt="Pillars of Creation"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              The Pillars of Creation
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              One of the most famous images in astronomy. Each pillar is about <span className="text-yellow-400 font-bold">5 light-years tall</span> — 
              at the speed of light (300,000 km/s), it would take 5 years to travel from bottom to top!
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`relative p-6 rounded-2xl border ${step.border} bg-gradient-to-br ${step.color} backdrop-blur-sm card-glow`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl sm:text-4xl flex-shrink-0">{step.icon}</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sun fact */}
        <motion.div
          className="max-w-3xl mx-auto text-center p-8 rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="text-5xl mb-4 block">☀️</span>
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-3">Our Sun Right Now</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Every single second, our Sun converts <span className="text-yellow-400 font-bold">600 million tons</span> of 
            hydrogen into helium. It's been doing this for <span className="text-yellow-400 font-bold">4.6 billion years</span> and 
            will continue for another 5 billion years. But eventually... every star runs out of fuel.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
