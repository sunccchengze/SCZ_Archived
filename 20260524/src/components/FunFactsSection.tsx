import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

const facts = [
  {
    icon: '🌍',
    title: 'Earth as a Black Hole',
    fact: 'If you compressed the entire EARTH into a black hole, it would be about the size of a marble.',
    detail: 'A tiny little marble — but with the mass of the entire planet Earth!',
    color: 'from-blue-500/20 to-green-500/20',
    border: 'border-blue-500/30',
  },
  {
    icon: '☀️',
    title: 'Sun as a Black Hole',
    fact: 'If you compressed our SUN into a black hole, it would be only about 6 kilometers across.',
    detail: 'You could walk across it in about an hour — if you wouldn\'t be instantly destroyed.',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
  },
  {
    icon: '🧑‍🔬',
    title: 'Hawking Radiation',
    fact: 'Stephen Hawking discovered that black holes slowly release tiny amounts of energy over time.',
    detail: 'Over trillions of years, a black hole can slowly evaporate. Even the mightiest monster eventually disappears!',
    color: 'from-purple-500/20 to-indigo-500/20',
    border: 'border-purple-500/30',
  },
  {
    icon: '💨',
    title: 'Rogue Black Holes',
    fact: 'There might be black holes zooming through our galaxy at millions of km/h — invisible, gobbling up anything in their path.',
    detail: 'Don\'t worry — the nearest known black hole is about 1,500 light-years away. That\'s very, VERY far.',
    color: 'from-red-500/20 to-pink-500/20',
    border: 'border-red-500/30',
  },
  {
    icon: '🌊',
    title: 'Gravitational Waves',
    fact: 'In 2015, we detected ripples in spacetime from two black holes colliding 1.3 BILLION years ago.',
    detail: 'The signal moved the detector by less than one-thousandth the width of a single proton. And we STILL detected it!',
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/30',
  },
];

export default function FunFactsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (i: number) => {
    setFlipped((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <SectionWrapper id="fun-facts" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          emoji="🤯"
          title="Mind-Blowing Facts"
          subtitle="The wildest facts about black holes and the cosmos — click each card to reveal more!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              className={`relative p-6 rounded-2xl border ${fact.border} bg-gradient-to-br ${fact.color} cursor-pointer min-h-[220px] card-glow`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              onClick={() => toggleFlip(i)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-3 right-3 text-xs text-gray-500 bg-black/20 px-2 py-1 rounded-full">
                {flipped.includes(i) ? 'click to flip back' : 'click to reveal more'}
              </div>

              {!flipped.includes(i) ? (
                <div>
                  <span className="text-4xl mb-4 block">{fact.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-3">{fact.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{fact.fact}</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-center h-full"
                >
                  <span className="text-3xl mb-3 block">💡</span>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                    {fact.detail}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Bonus: humans are amazing */}
          <motion.div
            className="p-6 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex flex-col justify-center text-center card-glow"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: facts.length * 0.12, duration: 0.5 }}
          >
            <span className="text-4xl mb-3">🧠</span>
            <h3 className="text-lg font-bold text-green-300 mb-2">Human Achievement</h3>
            <p className="text-gray-300 text-sm">
              Tiny humans on a tiny planet can understand events happening 
              <span className="text-green-300 font-bold"> billions of light-years away</span>. 
              We are pretty amazing, aren't we?
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
