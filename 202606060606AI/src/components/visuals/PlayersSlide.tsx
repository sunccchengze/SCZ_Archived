import { motion } from 'framer-motion';
import { useState } from 'react';

const players = [
  {
    name: 'GitHub Copilot',
    icon: '🐙',
    users: '20M+',
    growth: '400%',
    description: 'Crossed 20 million users in July 2025',
    color: '#C9A96E',
  },
  {
    name: 'Claude Code',
    icon: '🧠',
    users: '#1',
    growth: '46%',
    description: 'Most loved AI coding tool, 46% satisfaction',
    color: '#1E90A6',
  },
  {
    name: 'OpenAI Codex',
    icon: '⚡',
    users: 'New',
    growth: '60%',
    description: 'Reached 60% of Cursor\'s usage almost instantly',
    color: '#E23C3C',
  },
];

export default function PlayersSlide() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 pattern-huiwen opacity-20" />

      <motion.div
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block bg-dai/60 border border-shiqing/30 rounded-lg px-4 py-2">
          <span className="text-sm text-cang">Market Size: </span>
          <span className="text-xl font-bold text-gradient-teal">$12.8B</span>
          <span className="text-xs text-cang ml-2">(↑151% from 2024)</span>
        </div>
      </motion.div>

      <div className="flex flex-col gap-4 w-full max-w-md relative z-10">
        {players.map((player, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            onClick={() => setActive(active === i ? null : i)}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="bg-dai/80 border rounded-lg p-4 flex items-center gap-4 transition-all duration-300"
              style={{
                borderColor: active === i ? player.color : `${player.color}33`,
                boxShadow: active === i ? `0 0 20px ${player.color}22` : 'none',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0"
                style={{ background: `${player.color}15`, border: `2px solid ${player.color}44` }}
              >
                {player.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold" style={{ color: player.color }}>
                  {player.name}
                </h3>
                <div className="flex gap-3 text-xs text-cang">
                  <span>Users: <b className="text-gao">{player.users}</b></span>
                  <span>Growth: <b className="text-gao">{player.growth}</b></span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: active === i ? 180 : 0 }}
                className="text-cang"
              >
                ▼
              </motion.div>
            </div>

            {active === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-dai/40 border-x border-b rounded-b-lg px-4 py-3 text-sm text-gao"
                style={{ borderColor: `${player.color}33` }}
              >
                {player.description}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-xs text-cang mt-6 text-center relative z-10 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Click each card to learn more →
      </motion.p>
    </div>
  );
}
