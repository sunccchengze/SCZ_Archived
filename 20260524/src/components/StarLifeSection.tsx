import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

const stars = [
  {
    name: 'Red Dwarf',
    size: 30,
    color: 'bg-red-600',
    glow: 'shadow-red-500/50',
    mass: '0.1× Sun',
    life: '100+ billion yrs',
    desc: 'The smallest, coolest stars. They live incredibly long!',
  },
  {
    name: 'Our Sun',
    size: 60,
    color: 'bg-yellow-400',
    glow: 'shadow-yellow-400/50',
    mass: '1× Sun',
    life: '10 billion yrs',
    desc: 'An average star — not too big, not too small.',
  },
  {
    name: 'Blue Giant',
    size: 100,
    color: 'bg-blue-400',
    glow: 'shadow-blue-400/50',
    mass: '10× Sun',
    life: '~20 million yrs',
    desc: 'Much bigger and hotter. Burns fuel fast!',
  },
  {
    name: 'Betelgeuse',
    size: 150,
    color: 'bg-orange-500',
    glow: 'shadow-orange-500/50',
    mass: '20× Sun',
    life: '~10 million yrs',
    desc: 'A red supergiant — would swallow Mercury, Venus, Earth & Mars!',
  },
  {
    name: 'UY Scuti',
    size: 200,
    color: 'bg-red-500',
    glow: 'shadow-red-500/50',
    mass: '30× Sun',
    life: '~few million yrs',
    desc: 'One of the largest known stars — extends past Jupiter\'s orbit!',
  },
];

export default function StarLifeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedStar, setSelectedStar] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <SectionWrapper id="star-life" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          emoji="🌟"
          title="Star Life"
          subtitle="Not all stars are the same — and size determines everything"
        />

        {/* Interactive star size comparison */}
        <div ref={ref} className="mb-16">
          <h3 className="text-center text-lg sm:text-xl font-bold text-purple-300 mb-8">
            👆 Click a star to learn more!
          </h3>

          {/* Stars display */}
          <div className="flex items-end justify-center gap-3 sm:gap-6 mb-8 h-64">
            {stars.map((star, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                onClick={() => setSelectedStar(i)}
              >
                <motion.div
                  className={`rounded-full ${star.color} ${
                    selectedStar === i ? 'ring-4 ring-white/30' : ''
                  }`}
                  style={{
                    width: `${isMobile ? star.size * 0.5 : star.size}px`,
                    height: `${isMobile ? star.size * 0.5 : star.size}px`,
                    boxShadow: `0 0 ${star.size / 2}px ${star.size / 4}px`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  animate={
                    selectedStar === i
                      ? { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } }
                      : {}
                  }
                />
                <span className="text-xs text-gray-400 mt-2 text-center max-w-[80px]">{star.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Selected star info */}
          <motion.div
            key={selectedStar}
            className="max-w-lg mx-auto p-6 rounded-2xl border border-purple-500/30 bg-purple-900/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-2xl font-bold text-white mb-2">{stars[selectedStar].name}</h4>
            <p className="text-gray-300 mb-4">{stars[selectedStar].desc}</p>
            <div className="flex justify-center gap-6">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Mass</div>
                <div className="text-lg font-bold text-purple-300">{stars[selectedStar].mass}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Lifespan</div>
                <div className="text-lg font-bold text-yellow-300">{stars[selectedStar].life}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Rule */}
        <motion.div
          className="max-w-3xl mx-auto text-center p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-900/20 to-orange-900/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            🔑 The Key Rule
          </h3>
          <p className="text-xl sm:text-2xl font-bold gradient-text-fire mb-4">
            "The Bigger the Star, the Shorter Its Life"
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Like a bonfire vs. a small candle — big stars burn SO intensely they run out of fuel much faster. 
            Those giant stars live fast and die <span className="text-red-400 font-bold">YOUNG</span>. 
            And the way they die... is <span className="text-orange-400 font-bold">SPECTACULAR</span>.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
