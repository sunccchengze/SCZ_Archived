import { motion } from 'framer-motion';
import { useState } from 'react';

const apps = [
  {
    icon: '🔐',
    title: 'Encryption',
    color: '#E23C3C',
    short: 'Breaking & Making',
    detail: 'A quantum computer could render current encryption obsolete overnight. Governments are working on quantum-resistant protocols right now.',
  },
  {
    icon: '💊',
    title: 'Drug Discovery',
    color: '#1E90A6',
    short: 'Decades → Years',
    detail: 'Quantum computers could simulate molecular interactions precisely, slashing drug development timelines from decades to years.',
  },
  {
    icon: '🌍',
    title: 'Climate Modelling',
    color: '#C9A96E',
    short: 'Atmospheric Simulation',
    detail: 'The atmosphere is a quantum-mechanical system. More accurate simulation could dramatically improve our climate models.',
  },
  {
    icon: '🤖',
    title: 'AI Turbocharge',
    color: '#D6E4E8',
    short: 'Quantum + AI',
    detail: 'Quantum computing could turbocharge the very AI systems we discussed — revolutionising cryptography, materials science, and beyond.',
  },
];

export default function ApplicationsSlide() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-xuan to-dai" />

      <div className="relative z-10 w-full max-w-md">
        <motion.h3
          className="text-lg font-bold text-center mb-6 text-gradient-teal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Real-World Quantum Applications
        </motion.h3>

        <div className="grid grid-cols-2 gap-3">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              className="cursor-pointer rounded-xl p-4 text-center transition-all duration-300"
              style={{
                background: active === i ? `${app.color}15` : '#151A2B99',
                border: `1px solid ${active === i ? app.color : `${app.color}22`}`,
                boxShadow: active === i ? `0 0 25px ${app.color}22` : 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              onClick={() => setActive(active === i ? null : i)}
              whileHover={{ y: -3 }}
            >
              <div className="text-3xl mb-2">{app.icon}</div>
              <h4 className="text-sm font-bold" style={{ color: app.color }}>{app.title}</h4>
              <p className="text-[10px] text-cang mt-1">{app.short}</p>

              {active === i && (
                <motion.p
                  className="text-[11px] text-gao mt-3 text-left border-t pt-2"
                  style={{ borderColor: `${app.color}33` }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  {app.detail}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-[10px] text-cang text-center mt-4 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Click each application to explore →
        </motion.p>
      </div>
    </div>
  );
}
