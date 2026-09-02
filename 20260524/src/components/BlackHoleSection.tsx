import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

export default function BlackHoleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'what',
      label: '🕳️ What Are They?',
      content: <WhatAreBlackHoles />,
    },
    {
      id: 'spaghetti',
      label: '🍝 Spaghettification',
      content: <Spaghettification />,
    },
    {
      id: 'time',
      label: '⏰ Time Dilation',
      content: <TimeDilation />,
    },
    {
      id: 'photo',
      label: '📸 First Photo',
      content: <FirstPhoto />,
    },
    {
      id: 'supermassive',
      label: '🌀 Supermassive',
      content: <Supermassive />,
    },
  ];

  return (
    <SectionWrapper id="black-holes" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          emoji="🕳️"
          title="BLACK HOLES"
          subtitle="The Ultimate Monsters — Where even light cannot escape"
        />

        {/* Animated Black Hole */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {/* Accretion disk */}
            <div
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, #f97316, #facc15, #f97316, #ef4444, #f97316, #facc15, #f97316)',
                filter: 'blur(8px)',
                opacity: 0.6,
              }}
            />
            {/* Event horizon */}
            <div
              className="absolute inset-8 sm:inset-12 rounded-full bg-black"
              style={{
                boxShadow:
                  'inset 0 0 30px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.8), 0 0 80px rgba(124,58,237,0.2)',
              }}
            />
          </motion.div>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === i
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                  : 'text-gray-400 hover:text-white border border-transparent hover:border-gray-700'
              }`}
              onClick={() => setActiveTab(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function WhatAreBlackHoles() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">The Birth of a Black Hole</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          If the exploding star was <span className="text-purple-300 font-bold">20+ times the mass of our Sun</span>, 
          the leftover core is SO heavy that even a neutron star can't hold itself up. Gravity just <span className="text-red-400 font-bold">WINS</span>. 
          Completely. Totally. Absolutely.
        </p>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          All that mass is crushed into a single point of <span className="text-yellow-300 font-bold">ZERO size</span> and 
          <span className="text-yellow-300 font-bold"> INFINITE density</span> called a <span className="text-purple-300 font-bold">singularity</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-900/10">
          <h4 className="font-bold text-blue-300 mb-2">🎯 Event Horizon</h4>
          <p className="text-gray-400 text-sm">
            The invisible boundary — the point of no return. Once you cross it, you can NEVER come back. 
            Not even light can escape. That's why it's "black"!
          </p>
        </div>
        <div className="p-6 rounded-2xl border border-orange-500/20 bg-orange-900/10">
          <h4 className="font-bold text-orange-300 mb-2">🔍 Finding the Invisible</h4>
          <p className="text-gray-400 text-sm">
            Like an invisible monster in a dark room — you can't see it, but you can see furniture 
            being pulled, floorboards creaking. We find black holes by their effects on everything around them.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-yellow-500/20 bg-yellow-900/10 text-center">
        <h4 className="font-bold text-yellow-300 mb-2">💡 The Greatest Irony</h4>
        <p className="text-gray-400 text-sm sm:text-base">
          The <span className="text-black font-bold bg-gray-300 px-1 rounded">darkest</span> object in the universe 
          is surrounded by one of the <span className="text-yellow-300 font-bold">brightest</span> things — 
          the accretion disk of superheated gas glowing with intense energy.
        </p>
      </div>
    </div>
  );
}

function Spaghettification() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="/images/spaghettification.jpg"
          alt="Spaghettification"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent rounded-2xl" />
      </div>

      <div className="p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-red-900/10">
        <h3 className="text-2xl sm:text-3xl font-black text-center text-red-400 mb-6">
          🍝 Spaghettification
        </h3>
        <p className="text-center text-sm text-gray-500 mb-4 italic">
          Yes, this is a REAL scientific term!
        </p>

        <div className="space-y-4">
          {[
            { step: '1', text: 'As you approach, your FEET feel stronger gravity than your HEAD.' },
            { step: '2', text: 'This difference starts to S-T-R-E-T-C-H you...' },
            { step: '3', text: 'Your body gets pulled longer and thinner...' },
            { step: '4', text: 'Like a piece of spaghetti being pulled apart! 🍝' },
            { step: '5', text: 'You become a long thin string of atoms stretching into the singularity.' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-red-600/30 text-red-300 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {item.step}
              </span>
              <p className="text-gray-300 text-sm sm:text-base pt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Not a great way to go! 😬
        </p>
      </div>
    </div>
  );
}

function TimeDilation() {
  const [timeNear, setTimeNear] = useState(0);
  const [timeFar, setTimeFar] = useState(0);

  const startDemo = () => {
    setTimeNear(0);
    setTimeFar(0);
    let near = 0;
    let far = 0;
    const interval = setInterval(() => {
      far += 1;
      if (far % 5 === 0) near += 1;
      setTimeNear(near);
      setTimeFar(far);
      if (far >= 50) clearInterval(interval);
    }, 100);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="p-6 sm:p-8 rounded-2xl border border-indigo-500/20 bg-indigo-900/10">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">⏰ Black Holes Mess with TIME</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center mb-4">
          <span className="text-indigo-300 font-bold">Albert Einstein</span> figured out that 
          gravity doesn't just pull objects — it affects the flow of <span className="text-yellow-300 font-bold">TIME</span> itself. 
          The stronger the gravity, the SLOWER time moves.
        </p>
      </div>

      {/* Interactive time demo */}
      <div className="p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
        <h4 className="font-bold text-center text-purple-300 mb-6">🎮 Time Dilation Demo</h4>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center p-4 rounded-xl bg-black/30 border border-red-500/20">
            <div className="text-xs text-gray-500 mb-2">🕳️ Near Black Hole</div>
            <div className="text-4xl sm:text-5xl font-black text-red-400 font-mono">{timeNear}</div>
            <div className="text-xs text-gray-500 mt-1">hours pass</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-black/30 border border-green-500/20">
            <div className="text-xs text-gray-500 mb-2">🌍 Far Away</div>
            <div className="text-4xl sm:text-5xl font-black text-green-400 font-mono">{timeFar}</div>
            <div className="text-xs text-gray-500 mt-1">years pass</div>
          </div>
        </div>
        <div className="text-center">
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full"
            onClick={startDemo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ▶️ Start Time Demo
          </motion.button>
        </div>
        <p className="text-center text-gray-500 text-xs mt-4">
          Like in Interstellar — a few hours near a black hole = 23 years for everyone else!
        </p>
      </div>
    </div>
  );
}

function FirstPhoto() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="p-6 sm:p-8 rounded-2xl border border-orange-500/20 bg-orange-900/10 text-center">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">📸 April 2019 — History Was Made</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          Scientists turned the <span className="text-orange-300 font-bold">entire EARTH</span> into one giant camera 
          using the Event Horizon Telescope (EHT) — and captured the first-ever photograph of a black hole!
        </p>

        {/* Simulated M87 image */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6">
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 30%, #f97316 35%, #facc15 50%, #f97316 65%, transparent 70%)',
              filter: 'blur(4px)',
            }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(249,115,22,0.3)',
                '0 0 60px rgba(249,115,22,0.5)',
                '0 0 30px rgba(249,115,22,0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="absolute inset-[30%] rounded-full bg-black" style={{
            boxShadow: 'inset 0 0 20px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)',
          }} />
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-gray-300">
            📍 <span className="text-orange-300 font-bold">Galaxy M87</span> — 55 million light-years away
          </p>
          <p className="text-gray-300">
            ⚫ The dark shadow = the <span className="font-bold text-white">event horizon</span>
          </p>
          <p className="text-gray-300">
            🔥 The bright ring = the <span className="font-bold text-orange-300">accretion disk</span>
          </p>
          <p className="text-gray-400 italic mt-4">
            When this photo was released, scientists around the world celebrated. Some cried. 
            Because this was VISUAL proof that black holes are real. 🥲
          </p>
        </div>
      </div>
    </div>
  );
}

function Supermassive() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">🌀 Supermassive Black Holes</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
          At the center of almost every galaxy — including our Milky Way — lurks a SUPERMASSIVE black hole.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          className="p-6 rounded-2xl border border-blue-500/20 bg-blue-900/10 text-center card-glow"
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="font-bold text-blue-300 mb-2">🏠 Our Galaxy</h4>
          <div className="text-sm font-mono text-gray-400 mb-2">Sagittarius A*</div>
          <div className="text-3xl sm:text-4xl font-black text-white mb-1">4 Million</div>
          <div className="text-sm text-gray-400">times the mass of our Sun</div>
        </motion.div>

        <motion.div
          className="p-6 rounded-2xl border border-orange-500/20 bg-orange-900/10 text-center card-glow"
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="font-bold text-orange-300 mb-2">📸 M87 Black Hole</h4>
          <div className="text-sm font-mono text-gray-400 mb-2">First Photographed</div>
          <div className="text-3xl sm:text-4xl font-black text-white mb-1">6.5 Billion</div>
          <div className="text-sm text-gray-400">times the mass of our Sun</div>
        </motion.div>
      </div>

      <div className="p-6 rounded-2xl border border-gray-500/20 bg-gray-900/20 text-center">
        <span className="text-3xl mb-3 block">❓</span>
        <h4 className="font-bold text-gray-300 mb-2">The Greatest Unsolved Mystery</h4>
        <p className="text-gray-400 text-sm">
          Nobody knows exactly HOW supermassive black holes got so big. Did they grow by eating gas and stars 
          for billions of years? Did they form differently? It's one of astronomy's greatest puzzles!
        </p>
      </div>
    </div>
  );
}
