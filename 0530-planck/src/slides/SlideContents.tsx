import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ====== Stock image URLs ======
const IMAGES = {
  hotMetal: "https://images.pexels.com/photos/5845899/pexels-photo-5845899.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  forge2: "https://images.pexels.com/photos/5845914/pexels-photo-5845914.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  molten: "https://images.pexels.com/photos/6804260/pexels-photo-6804260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  piano: "https://images.pexels.com/photos/19541583/pexels-photo-19541583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  pianoKeys: "https://images.pexels.com/photos/20021641/pexels-photo-20021641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  stars: "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  milkyway: "https://images.pexels.com/photos/11858855/pexels-photo-11858855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  prism: "https://images.pexels.com/photos/32489243/pexels-photo-32489243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  spectrum: "https://images.pexels.com/photos/9386338/pexels-photo-9386338.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  chip: "https://images.pexels.com/photos/37052613/pexels-photo-37052613.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  chip2: "https://images.pexels.com/photos/36169774/pexels-photo-36169774.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lightbulb: "https://images.pexels.com/photos/15110872/pexels-photo-15110872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  lightbulb2: "https://images.pexels.com/photos/3217851/pexels-photo-3217851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  germanBuilding: "https://images.pexels.com/photos/32593272/pexels-photo-32593272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  palace: "https://images.pexels.com/photos/31192313/pexels-photo-31192313.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  atom: "https://images.pexels.com/photos/12784315/pexels-photo-12784315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  molecules: "https://images.pexels.com/photos/13014236/pexels-photo-13014236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  newton: "https://images.pexels.com/photos/9785612/pexels-photo-9785612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

// ====== Reusable Components ======

function FadeIn({ children, delay = 0, className = "", y = 20 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }} className={className}>
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, type: "spring", stiffness: 200, damping: 15 }} className={className}>
      {children}
    </motion.div>
  );
}

function SlideImage({ src, alt, className = "", delay = 0.3 }: { src: string; alt: string; className?: string; delay?: number }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-2xl shadow-xl shadow-black/30 object-cover ${className}`}
      loading="lazy"
    />
  );
}

function QuoteBlock({ quote, author }: { quote: string; author?: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="border-l-4 border-amber-400 pl-5 py-3 my-3 bg-amber-400/5 rounded-r-xl"
    >
      <p className="text-base italic text-amber-100/90 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
        "{quote}"
      </p>
      {author && <cite className="block mt-2 text-xs text-amber-400/60 not-italic">— {author}</cite>}
    </motion.blockquote>
  );
}

function KeyPoint({ icon, text, delay = 0 }: { icon: string; text: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.35 }}
      className="flex items-start gap-3 bg-white/[0.03] hover:bg-white/[0.06] rounded-xl p-3 backdrop-blur-sm transition-colors border border-white/[0.03]"
    >
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

function FormulaBox({ formula, label, glow = false }: { formula: string; label: string; glow?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      className={`relative rounded-2xl p-5 text-center overflow-hidden ${glow ? "bg-gradient-to-br from-amber-500/15 to-purple-500/10 border border-amber-400/30" : "bg-white/5 border border-white/10"}`}
    >
      <p className="text-3xl font-mono font-bold text-amber-300 tracking-wider relative z-10">{formula}</p>
      <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-[0.2em] relative z-10">{label}</p>
      {glow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-purple-400/5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}

// ====== Interactive Components ======

function BlackbodySlider() {
  const [temp, setTemp] = useState(3000);
  const getColor = (t: number) => {
    if (t < 2000) return "#cc2200";
    if (t < 3000) return "#ff4400";
    if (t < 4000) return "#ff8800";
    if (t < 5000) return "#ffbb33";
    if (t < 6500) return "#fff5cc";
    if (t < 8000) return "#ccddff";
    return "#88aaff";
  };
  const getLabel = (t: number) => {
    if (t < 2000) return "🔴 Dull Red";
    if (t < 3000) return "🟠 Cherry Red";
    if (t < 4000) return "🟡 Orange";
    if (t < 5000) return "⚪ Yellow-White";
    if (t < 6500) return "☀️ White (like our Sun!)";
    if (t < 8000) return "🔵 Blue-White";
    return "💙 Deep Blue";
  };
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-black/50 rounded-2xl p-4 border border-white/10">
      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/50 font-bold mb-3">🎮 Try it: Heat the metal!</p>
      <div className="flex items-center gap-5">
        <motion.div
          className="w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-200 flex-shrink-0"
          style={{ backgroundColor: getColor(temp), boxShadow: `0 0 ${temp / 80}px ${temp / 200}px ${getColor(temp)}50` }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-4xl drop-shadow-lg">🔩</span>
        </motion.div>
        <div className="flex-1 space-y-2">
          <input type="range" min="1000" max="10000" value={temp} onChange={(e) => setTemp(Number(e.target.value))} className="w-full cursor-pointer" />
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-600 font-mono">1,000 K</span>
            <span className="text-sm font-mono font-bold px-3 py-1 rounded-full bg-black/30" style={{ color: getColor(temp) }}>
              {temp.toLocaleString()} K
            </span>
            <span className="text-[10px] text-slate-600 font-mono">10,000 K</span>
          </div>
          <p className="text-center text-xs" style={{ color: getColor(temp) }}>{getLabel(temp)}</p>
        </div>
      </div>
    </motion.div>
  );
}

function EnergyStaircase() {
  const [mode, setMode] = useState<"classical" | "quantum">("classical");
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-black/50 rounded-2xl p-4 border border-white/10">
      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/50 font-bold mb-3">🎮 Try it: Classical vs Quantum Energy</p>
      <div className="flex gap-2 mb-3">
        <button onClick={() => setMode("classical")} className={`flex-1 px-3 py-2 rounded-xl text-xs font-medium transition-all ${mode === "classical" ? "bg-blue-500/20 text-blue-300 border border-blue-400/30 shadow-md shadow-blue-500/10" : "bg-white/5 text-slate-500 hover:bg-white/10 border border-transparent"}`}>
          📐 Classical (Ramp)
        </button>
        <button onClick={() => setMode("quantum")} className={`flex-1 px-3 py-2 rounded-xl text-xs font-medium transition-all ${mode === "quantum" ? "bg-amber-500/20 text-amber-300 border border-amber-400/30 shadow-md shadow-amber-500/10" : "bg-white/5 text-slate-500 hover:bg-white/10 border border-transparent"}`}>
          🪜 Quantum (Staircase)
        </button>
      </div>
      <div className="h-32 px-2 relative">
        <AnimatePresence mode="wait">
          {mode === "classical" ? (
            <motion.div key="classical" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <defs>
                  <linearGradient id="rampG" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <polygon points="10,95 190,5 190,95" fill="url(#rampG)" />
                <line x1="10" y1="95" x2="190" y2="5" stroke="#3b82f6" strokeWidth="2.5" />
                <text x="100" y="55" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">Any value OK</text>
                <text x="100" y="70" textAnchor="middle" fill="#60a5fa" fontSize="7">← Smooth ramp →</text>
                {/* Moving dot */}
                <circle cx="60" cy="65" r="4" fill="#60a5fa">
                  <animate attributeName="cx" values="30;170;30" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="85;15;85" dur="4s" repeatCount="indefinite" />
                </circle>
              </svg>
            </motion.div>
          ) : (
            <motion.div key="quantum" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <defs>
                  <linearGradient id="stepG" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <g key={i}>
                    <rect x={10 + i * 25} y={95 - (i + 1) * 13} width="25" height={(i + 1) * 13} fill="url(#stepG)" stroke="#f59e0b" strokeWidth="0.8" rx="1" />
                    <motion.circle cx={10 + i * 25 + 12.5} cy={95 - (i + 1) * 13 + 5} r="3.5" fill="#fbbf24" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.08 + 0.2 }}>
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                    </motion.circle>
                    <text x={10 + i * 25 + 12.5} y={95 - (i + 1) * 13 - 3} textAnchor="middle" fill="#fcd34d" fontSize="5.5" fontWeight="bold">{i + 1}hf</text>
                  </g>
                ))}
                <text x="100" y="98" textAnchor="middle" fill="#fbbf24" fontSize="7" fontWeight="bold">Only fixed steps!</text>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function AtomModel() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="flex justify-center">
      <div className="relative w-48 h-48">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-500/40 z-10 flex items-center justify-center">
          <span className="text-sm font-bold text-white">+</span>
        </div>
        {[{ size: "w-24 h-24", color: "blue", dur: 1.8, label: "n=1" }, { size: "w-36 h-36", color: "emerald", dur: 2.8, label: "n=2" }, { size: "w-48 h-48", color: "purple", dur: 4, label: "n=3" }].map((orbit, i) => (
          <div key={i} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${orbit.size} border rounded-full`} style={{ borderColor: `var(--color-${orbit.color}-400)`, opacity: 0.3 }}>
            <motion.div animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: orbit.dur, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
              <div className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-md`} style={{ backgroundColor: `var(--color-${orbit.color}-400)`, boxShadow: `0 0 8px var(--color-${orbit.color}-400)` }} />
            </motion.div>
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-[8px]" style={{ color: `var(--color-${orbit.color}-300)` }}>{orbit.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PhotonEmission() {
  const [emitting, setEmitting] = useState(false);
  useEffect(() => {
    const iv = setInterval(() => { setEmitting(true); setTimeout(() => setEmitting(false), 1500); }, 3000);
    return () => clearInterval(iv);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="bg-black/50 rounded-2xl p-4 border border-white/10 flex flex-col items-center">
      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/50 font-bold mb-2">⚡ Quantum Leap</p>
      <div className="relative w-full h-24 flex items-center justify-center">
        <div className="absolute w-3/4"><div className="h-px bg-blue-400/40 absolute top-0 w-full" /><span className="absolute top-0 -left-1 text-[7px] text-blue-300/70 -translate-y-3">E₂ high</span>
          <div className="h-px bg-green-400/40 absolute top-[60px] w-full" /><span className="absolute top-[60px] -left-1 text-[7px] text-green-300/70 -translate-y-3">E₁ low</span>
        </div>
        <motion.div animate={emitting ? { y: [0, 60] } : { y: 0 }} transition={{ duration: 0.25, ease: "easeIn" }} className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full shadow-md shadow-yellow-400/50 z-10" />
        <AnimatePresence>
          {emitting && <motion.div initial={{ opacity: 0, x: 0, scale: 0 }} animate={{ opacity: [0, 1, 1, 0], x: [0, 30, 80, 120], scale: [0, 1.2, 1, 0.5] }} transition={{ duration: 1.2, delay: 0.25 }} className="absolute top-7 left-1/2 text-xl">💫</motion.div>}
        </AnimatePresence>
      </div>
      <p className="text-[9px] text-slate-500 mt-1">Electron drops → photon with E = hf released!</p>
    </motion.div>
  );
}

function SugarBagDemo() {
  const [bags, setBags] = useState(1);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-black/50 rounded-2xl p-4 border border-white/10">
      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/50 font-bold mb-3">🎮 Try it: Buy quantized sugar!</p>
      <div className="flex items-center gap-4 mb-3">
        <button onClick={() => setBags(Math.max(1, bags - 1))} className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition text-lg font-bold active:scale-90">−</button>
        <div className="flex gap-1.5 flex-wrap justify-center flex-1 min-h-[40px] items-center">
          {Array.from({ length: bags }).map((_, i) => (
            <motion.span key={i} initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 300, delay: i * 0.05 }} className="text-2xl">🛍️</motion.span>
          ))}
        </div>
        <button onClick={() => setBags(Math.min(8, bags + 1))} className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition text-lg font-bold active:scale-90">+</button>
      </div>
      <p className="text-center text-sm"><span className="text-amber-400 font-bold font-mono text-lg">{bags}</span> <span className="text-slate-400">bag{bags > 1 ? "s" : ""}</span> = <span className="text-amber-400 font-bold font-mono text-lg">{bags}</span> <span className="text-slate-400">quantum of energy</span></p>
      <p className="text-center text-[10px] text-slate-600 mt-1">✓ 1, 2, 3 bags  ✗ never 1.5 bags!</p>
    </motion.div>
  );
}

function SpectrumDemo() {
  const elements = [
    { name: "Hydrogen", emoji: "💧", lines: [{ pos: "15%", c: "#ff0000" }, { pos: "35%", c: "#00ccff" }, { pos: "55%", c: "#4400ff" }, { pos: "70%", c: "#6600aa" }] },
    { name: "Sodium", emoji: "🧂", lines: [{ pos: "42%", c: "#ffdd00" }, { pos: "44%", c: "#ffcc00" }] },
    { name: "Neon", emoji: "💡", lines: [{ pos: "20%", c: "#ff0000" }, { pos: "30%", c: "#ff3300" }, { pos: "40%", c: "#ff6600" }, { pos: "50%", c: "#ff4400" }, { pos: "60%", c: "#ff2200" }] },
  ];
  const [sel, setSel] = useState(0);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-black/50 rounded-2xl p-4 border border-white/10">
      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/50 font-bold mb-3">🎮 Try it: Element spectra</p>
      <div className="flex gap-2 mb-3">
        {elements.map((el, i) => (
          <button key={i} onClick={() => setSel(i)} className={`flex-1 px-2 py-2 rounded-xl text-xs font-medium transition-all border ${sel === i ? "bg-white/10 text-white border-white/20" : "bg-transparent text-slate-500 border-transparent hover:bg-white/5"}`}>
            {el.emoji} {el.name}
          </button>
        ))}
      </div>
      <div className="h-14 bg-black rounded-xl overflow-hidden relative border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-black to-red-950/30" />
        <AnimatePresence mode="wait">
          <motion.div key={sel} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            {elements[sel].lines.map((line, i) => (
              <motion.div key={i} initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }} transition={{ delay: i * 0.08 }} className="absolute top-0 bottom-0 w-[3px] rounded-full" style={{ left: line.pos, backgroundColor: line.c, boxShadow: `0 0 12px ${line.c}88, 0 0 24px ${line.c}44` }} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-[9px] text-slate-500 mt-2 text-center">Each element has unique spectral lines — its "fingerprint"! 🔬</p>
    </motion.div>
  );
}

function PixelZoom() {
  const [zoomed, setZoomed] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-black/50 rounded-2xl p-4 border border-white/10">
      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/50 font-bold mb-3">🎮 Try it: Zoom into nature's pixels</p>
      <button onClick={() => setZoomed(!zoomed)} className="w-full px-4 py-2 rounded-xl text-xs font-medium bg-purple-500/15 text-purple-300 hover:bg-purple-500/25 transition-all mb-3 border border-purple-400/15 active:scale-[0.98]">
        {zoomed ? "🔍 Zoom Out — see smooth" : "🔎 Zoom In — see quanta!"}
      </button>
      <div className="h-16 rounded-xl overflow-hidden border border-white/5">
        <AnimatePresence mode="wait">
          {!zoomed ? (
            <motion.div key="smooth" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full" style={{ background: "linear-gradient(90deg, #1e1b4b, #312e81, #4338ca, #6366f1, #818cf8, #a5b4fc, #c7d2fe)" }} />
          ) : (
            <motion.div key="pixel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex gap-[2px] p-[2px] bg-black">
              {["#1e1b4b", "#2a276a", "#312e81", "#3b38a0", "#4338ca", "#5048d5", "#6366f1", "#7578f2", "#818cf8", "#9ba2fa", "#a5b4fc", "#b5c0fd", "#c7d2fe", "#d7dffe"].map((c, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.02 }} className="flex-1 rounded-[2px]" style={{ backgroundColor: c }} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="text-[9px] text-slate-500 mt-2 text-center">{zoomed ? "⬆️ Discrete blocks — quanta! The universe has 'pixels'!" : "Looks smooth from far away..."}</p>
    </motion.div>
  );
}

function TechGrid() {
  const techs = [
    { icon: "💻", label: "Computer\nChips" }, { icon: "📱", label: "Smart\nphones" },
    { icon: "🏥", label: "MRI\nMachines" }, { icon: "💡", label: "LED\nLights" },
    { icon: "☀️", label: "Solar\nCells" }, { icon: "⚛️", label: "Nuclear\nEnergy" },
    { icon: "🔬", label: "Lasers" }, { icon: "🧬", label: "Molecular\nBiology" },
  ];
  return (
    <div className="grid grid-cols-4 gap-2">
      {techs.map((t, i) => (
        <ScaleIn key={i} delay={0.5 + i * 0.06}>
          <div className="bg-white/[0.03] hover:bg-white/[0.07] rounded-xl p-3 flex flex-col items-center gap-1 transition-all cursor-default border border-white/[0.03] hover:border-amber-400/10">
            <span className="text-2xl">{t.icon}</span>
            <span className="text-[8px] text-slate-500 text-center leading-tight whitespace-pre-line">{t.label}</span>
          </div>
        </ScaleIn>
      ))}
    </div>
  );
}

function PlanckUnitsTable() {
  const units = [
    { name: "Planck Length", value: "1.6 × 10⁻³⁵ m", note: "Smallest meaningful length", icon: "📏" },
    { name: "Planck Time", value: "5.4 × 10⁻⁴⁴ s", note: "Shortest meaningful time", icon: "⏱️" },
    { name: "Planck Mass", value: "2.2 × 10⁻⁸ kg", note: "~mass of a flea egg", icon: "⚖️" },
    { name: "Planck Temp", value: "1.4 × 10³² K", note: "Hottest meaningful temp", icon: "🌡️" },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-black/40 rounded-2xl p-4 border border-white/10">
      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/50 font-bold mb-3">📐 The Planck Units — Nature's Smallest Scales</p>
      <div className="space-y-1.5">
        {units.map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }} className="flex items-center gap-2 bg-white/[0.03] rounded-lg p-2.5 hover:bg-white/[0.05] transition-colors">
            <span className="text-lg">{u.icon}</span>
            <span className="text-amber-400 font-mono text-[11px] font-bold w-24 flex-shrink-0">{u.name}</span>
            <span className="text-slate-300 font-mono text-[11px] flex-1">{u.value}</span>
            <span className="text-[8px] text-slate-600 w-28 text-right">{u.note}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TragedyTimeline() {
  const events = [
    { year: "1909", event: "First wife Marie dies", icon: "💔" },
    { year: "1916", event: "Son Karl killed in WWI", icon: "⚔️" },
    { year: "1917", event: "Daughter Margarete dies in childbirth", icon: "😢" },
    { year: "1919", event: "Daughter Emma dies in childbirth", icon: "😢" },
    { year: "1933", event: "Hitler seizes power", icon: "⚡" },
    { year: "1944", event: "Home destroyed by bombing", icon: "💥" },
    { year: "1945", event: "Son Erwin executed", icon: "🖤" },
    { year: "1947", event: "Planck dies at age 89", icon: "🕊️" },
  ];
  return (
    <div className="space-y-1.5">
      {events.map((e, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.12 }} className="flex items-center gap-3 bg-white/[0.02] rounded-lg px-3 py-2 hover:bg-white/[0.04] transition-colors">
          <span className="font-mono text-[11px] w-10 text-slate-600 font-bold">{e.year}</span>
          <span className="text-base">{e.icon}</span>
          <span className="text-xs text-slate-400">{e.event}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ====== Main Dispatch ======

export function SlideContent({ slideId }: { slideId: number }) {
  const comps: Record<number, () => React.ReactElement> = {
    1: Slide1, 2: Slide2, 3: Slide3, 4: Slide4, 5: Slide5, 6: Slide6,
    7: Slide7, 8: Slide8, 9: Slide9, 10: Slide10, 11: Slide11, 12: Slide12,
    13: Slide13, 14: Slide14, 15: Slide15, 16: Slide16, 17: Slide17, 18: Slide18,
    19: Slide19, 20: Slide20, 21: Slide21, 22: Slide22, 23: Slide23, 24: Slide24,
    25: Slide25, 26: Slide26, 27: Slide27, 28: Slide28,
  };
  const Comp = comps[slideId];
  return Comp ? <Comp /> : null;
}

// ====== SLIDES ======

function Slide1() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-8 relative overflow-hidden">
      {/* Floating particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div key={i} className="absolute rounded-full" style={{ width: 2 + Math.random() * 3, height: 2 + Math.random() * 3, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, backgroundColor: `rgba(251,191,36,${0.15 + Math.random() * 0.2})` }}
          animate={{ y: [0, -(20 + Math.random() * 40), 0], x: [0, (Math.random() - 0.5) * 30, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      {/* Background portrait */}
      <motion.img src="/images/planck-portrait.jpg" alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.08 }} transition={{ delay: 1 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <ScaleIn delay={0.2} className="mb-6">
        <div className="relative">
          <span className="text-8xl">⚛️</span>
          <motion.div className="absolute inset-0 rounded-full" animate={{ boxShadow: ["0 0 30px rgba(251,191,36,0.1)", "0 0 60px rgba(251,191,36,0.2)", "0 0 30px rgba(251,191,36,0.1)"] }} transition={{ duration: 3, repeat: Infinity }} />
        </div>
      </ScaleIn>

      <FadeIn delay={0.5}>
        <h1 className="text-5xl font-black text-white mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          The <span className="text-amber-400">Reluctant</span> Revolutionary
        </h1>
      </FadeIn>

      <FadeIn delay={0.7}>
        <p className="text-xl text-slate-400 mb-6">The Story of <span className="text-amber-300 font-semibold">Max Planck</span></p>
      </FadeIn>

      <FadeIn delay={0.9}>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <span className="bg-white/5 px-3 py-1 rounded-full border border-white/5">🎓 A 40-Min Lecture</span>
          <span className="bg-white/5 px-3 py-1 rounded-full border border-white/5">⚛️ Birth of Quantum Physics</span>
          <span className="bg-white/5 px-3 py-1 rounded-full border border-white/5">🇩🇪 1858 — 1947</span>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide2() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-5 relative overflow-hidden">
      <motion.img src={IMAGES.atom} alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <FadeIn delay={0.2} className="text-center"><span className="text-6xl">🤯</span></FadeIn>

      <FadeIn delay={0.3}>
        <h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
          A Discovery Too Strange to <span className="text-amber-400">Believe</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-3 gap-3">
        <KeyPoint icon="🧮" text="In 1900, Planck solved a physics problem" delay={0.5} />
        <KeyPoint icon="😱" text={<>The answer was so weird, he didn't believe it for <strong className="text-amber-300">YEARS</strong></>} delay={0.6} />
        <KeyPoint icon="💥" text={<>That answer <strong className="text-red-400">destroyed old physics</strong> & created quantum physics</>} delay={0.7} />
      </div>

      <FadeIn delay={0.9}>
        <div className="bg-gradient-to-r from-amber-500/10 via-purple-500/5 to-red-500/10 rounded-2xl p-5 text-center border border-amber-400/15">
          <p className="text-base text-slate-300 leading-relaxed">
            Today: the <span className="text-amber-400 font-bold">science</span>,
            the <span className="text-red-400 font-bold">heartbreak</span>,
            and the <span className="text-green-400 font-bold">courage</span> of Max Planck.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={1.1}>
        <p className="text-center text-slate-600 text-sm italic">Let's go back to 19th-century Germany... 🇩🇪</p>
      </FadeIn>
    </div>
  );
}

function Slide3() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <div className="flex gap-5 items-stretch">
        <div className="flex flex-col gap-3 flex-shrink-0 w-44">
          <SlideImage src="/images/planck-young.jpg" alt="Young Planck" className="w-full h-44" delay={0.2} />
          <SlideImage src="/images/kiel-germany.jpg" alt="Kiel Germany" className="w-full h-24" delay={0.4} />
        </div>
        <div className="flex-1 space-y-3">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Born into <span className="text-amber-400">Brilliance</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">🇩🇪 April 23, 1858 — Kiel, Germany</p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.03]">
              <p className="text-xs font-bold text-amber-400 mb-2">👨‍👩‍👦 The Professor Family</p>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[{ gen: "Great-grandpa", role: "Professor" }, { gen: "Grandpa", role: "Theology" }, { gen: "Father", role: "Law Prof." }, { gen: "Max", role: "Physics! 🎯" }].map((p, i) => (
                  <ScaleIn key={i} delay={0.6 + i * 0.08}>
                    <div className="bg-white/[0.04] rounded-lg p-2">
                      <span className="text-lg">🎓</span>
                      <p className="text-[9px] text-amber-400/80 mt-1 font-bold">{p.gen}</p>
                      <p className="text-[8px] text-slate-600">{p.role}</p>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <KeyPoint icon="📚" text="Quiet, disciplined, hardworking" delay={0.8} />
        <KeyPoint icon="🧑‍🔬" text="Not flashy — deeply serious" delay={0.9} />
        <KeyPoint icon="🎵" text="Brilliant musician too!" delay={1.0} />
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>🎹 The Musician Who Chose <span className="text-amber-400">Physics</span></h2></FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <SlideImage src={IMAGES.piano} alt="Grand Piano" className="w-full h-40" delay={0.3} />
        <SlideImage src={IMAGES.pianoKeys} alt="Piano Keys" className="w-full h-40" delay={0.4} />
      </div>

      <FadeIn delay={0.5}>
        <div className="grid grid-cols-4 gap-2">
          {["🎹 Piano", "🎻 Cello", "⛪ Organ", "🎼 Composer"].map((item, i) => (
            <ScaleIn key={i} delay={0.6 + i * 0.08}>
              <div className="bg-purple-500/8 rounded-xl p-3 text-center border border-purple-400/10">
                <p className="text-sm text-purple-300">{item}</p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.9}>
        <div className="bg-gradient-to-r from-purple-500/10 to-amber-500/10 rounded-2xl p-5 border border-purple-400/15 text-center">
          <p className="text-base text-slate-300">
            Physics could have lost one of its greatest minds to <span className="text-purple-400 font-bold">a career in music!</span>
          </p>
          <p className="text-xs text-slate-500 mt-2">But Max chose physics. Then his professor said something unforgettable...</p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide5() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-5">
      <FadeIn><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>"Physics Is <span className="text-red-400">Complete</span>" 🤦</h2></FadeIn>

      <FadeIn delay={0.3}>
        <div className="bg-red-500/8 rounded-2xl p-5 border border-red-400/15">
          <div className="flex items-start gap-4">
            <span className="text-4xl flex-shrink-0">🧑‍🏫</span>
            <div>
              <p className="text-red-300 font-bold text-sm mb-1">Professor Philipp von Jolly:</p>
              <p className="text-base text-slate-300 italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Young man, why would you want to study physics? Physics is essentially <span className="text-red-400 font-bold">complete</span>. All the great discoveries have already been made."
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.6}><p className="text-sm text-slate-500 text-center italic">Spoiler: He could not have been more wrong! 😅</p></FadeIn>

      <FadeIn delay={0.7}>
        <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.03]">
          <p className="text-xs text-slate-400 mb-3 font-bold">Why they thought physics was "done" in the 1890s:</p>
          <div className="grid grid-cols-3 gap-3">
            {[{ icon: "🍎", title: "Newton", desc: "Mechanics ✓", img: IMAGES.newton }, { icon: "⚡", title: "Maxwell", desc: "Electromagnetism ✓" }, { icon: "🔥", title: "Thermodynamics", desc: "Heat laws ✓" }].map((item, i) => (
              <ScaleIn key={i} delay={0.8 + i * 0.1}>
                <div className="bg-green-500/5 rounded-xl p-3 text-center border border-green-400/10 relative overflow-hidden">
                  {item.img && <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />}
                  <span className="text-2xl relative z-10">{item.icon}</span>
                  <p className="text-xs text-green-400 font-bold mt-1 relative z-10">{item.title}</p>
                  <p className="text-[10px] text-slate-500 relative z-10">{item.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide6() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4 relative overflow-hidden">
      <motion.img src="/images/planck-desk.jpg" alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.07 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <FadeIn className="relative z-10"><h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>A Man in Love with <span className="text-amber-400">Deep Truth</span></h2></FadeIn>

      <QuoteBlock quote="I do not wish to discover new things. I only wish to understand the existing foundations of physics more deeply." author="Max Planck" />

      <div className="space-y-2 relative z-10">
        {[{ y: "1879", e: "Gets his doctorate at 21 — incredibly young! 🎓" }, { y: "1885", e: "Becomes professor, devotes himself to thermodynamics 🔥" }, { y: "1889", e: "Takes prestigious position at University of Berlin 🏛️" }].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.12 }} className="flex gap-3 items-center bg-white/[0.03] rounded-xl p-3 backdrop-blur-sm border border-white/[0.02]">
            <span className="font-mono text-xs text-amber-400 font-bold bg-amber-400/10 px-2 py-1 rounded-lg">{item.y}</span>
            <span className="text-sm text-slate-300">{item.e}</span>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={1.1} className="relative z-10">
        <div className="bg-gradient-to-r from-amber-500/8 to-red-500/8 rounded-xl p-4 border border-amber-400/10">
          <p className="text-xs text-slate-400"><span className="text-amber-400 font-bold">Thermodynamics</span> = the science of heat & energy. This "boring" subject → <span className="text-red-400 font-bold">biggest revolution ever.</span></p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide7() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><div className="text-center"><span className="text-5xl">🔥</span></div></FadeIn>
      <FadeIn delay={0.2}><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>The <span className="text-red-400">Blackbody</span> Radiation Problem</h2></FadeIn>

      <FadeIn delay={0.4}>
        <div className="bg-white/[0.04] rounded-2xl p-5 border border-white/[0.05]">
          <p className="text-sm font-bold text-amber-400 mb-2">🤔 What is a "blackbody"?</p>
          <p className="text-sm text-slate-300 leading-relaxed">An idealized object that <span className="text-red-400 font-bold">absorbs ALL</span> light hitting it. Nothing is reflected.</p>
          <p className="text-sm text-amber-300 mt-3 font-medium">✨ Key insight: Heat it up → it <span className="font-bold">glows!</span></p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <FadeIn delay={0.6}>
          <div className="bg-black/50 rounded-xl p-4 border border-white/5 text-center">
            <p className="text-[10px] text-slate-500 mb-2">⬛ Cold: Absorbs everything</p>
            <div className="flex gap-2 items-center justify-center"><span className="text-sm">☀️ →</span><div className="w-14 h-14 bg-black rounded-xl border border-white/10 flex items-center justify-center"><span className="text-2xl">⬛</span></div><span className="text-xs text-red-400">✗</span></div>
          </div>
        </FadeIn>
        <FadeIn delay={0.7}>
          <div className="bg-black/50 rounded-xl p-4 border border-orange-400/10 text-center">
            <p className="text-[10px] text-orange-300/60 mb-2">🔥 Hot: It glows!</p>
            <div className="flex gap-2 items-center justify-center"><span className="text-sm">🔥 →</span>
              <motion.div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-400 rounded-xl flex items-center justify-center" animate={{ boxShadow: ["0 0 15px rgba(251,146,60,0.3)", "0 0 30px rgba(251,146,60,0.5)", "0 0 15px rgba(251,146,60,0.3)"] }} transition={{ duration: 2, repeat: Infinity }}>
                <span className="text-2xl">✨</span>
              </motion.div>
              <span className="text-xs text-amber-400">→ 💡</span>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.9}><p className="text-xs text-slate-500 text-center">Physicists wanted ONE formula to describe the glow at every wavelength. Simple, right? Wrong! 😬</p></FadeIn>
    </div>
  );
}

function Slide8() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>🔩 Glowing Hot Metal — <span className="text-amber-400">You've Seen This!</span></h2></FadeIn>

      <div className="grid grid-cols-3 gap-3">
        <SlideImage src={IMAGES.hotMetal} alt="Hot metal forge" className="w-full h-28" delay={0.2} />
        <SlideImage src={IMAGES.forge2} alt="Forging steel" className="w-full h-28" delay={0.3} />
        <SlideImage src={IMAGES.molten} alt="Molten metal" className="w-full h-28" delay={0.4} />
      </div>

      <FadeIn delay={0.5}>
        <div className="flex gap-2 justify-between">
          {[{ temp: "Low", color: "#cc3300", label: "Dull Red" }, { temp: "↑", color: "#ff6600", label: "Orange" }, { temp: "↑↑", color: "#ffcc00", label: "Yellow" }, { temp: "↑↑↑", color: "#ffffff", label: "White" }, { temp: "MAX", color: "#6699ff", label: "Blue" }].map((item, i) => (
            <ScaleIn key={i} delay={0.6 + i * 0.08}>
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full mb-1 transition-all" style={{ backgroundColor: item.color, boxShadow: `0 0 16px ${item.color}55` }} />
                <span className="text-[9px] text-slate-500">{item.temp}</span>
                <span className="text-[9px] font-bold" style={{ color: item.color }}>{item.label}</span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </FadeIn>

      <BlackbodySlider />
    </div>
  );
}

function Slide9() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-3">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Two Halves of an Answer ⚔️</h2></FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <FadeIn delay={0.3}>
          <div className="bg-blue-500/8 rounded-2xl p-4 border border-blue-400/15 h-full">
            <p className="text-blue-400 font-bold text-sm mb-2">Wilhelm Wien (1896)</p>
            <div className="h-20 mb-2">
              <svg viewBox="0 0 120 60" className="w-full h-full">
                <text x="10" y="10" fill="#60a5fa" fontSize="6">Short λ</text><text x="85" y="10" fill="#60a5fa" fontSize="6">Long λ</text>
                <path d="M10,50 Q30,10 60,30 Q80,42 110,48" stroke="#60a5fa" fill="none" strokeWidth="2" />
                <path d="M10,50 Q30,8 60,25 Q80,35 110,42" stroke="#4ade80" fill="none" strokeWidth="1.5" strokeDasharray="3,3" />
                <circle cx="35" cy="18" r="9" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="0.5" /><text x="28" y="20" fill="#22c55e" fontSize="5">✓</text>
                <circle cx="95" cy="45" r="9" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="0.5" /><text x="88" y="47" fill="#ef4444" fontSize="5">✗</text>
              </svg>
            </div>
            <p className="text-[10px] text-green-400">✅ Short wavelengths (UV)</p>
            <p className="text-[10px] text-red-400">❌ Fails for long wavelengths</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="bg-red-500/8 rounded-2xl p-4 border border-red-400/15 h-full">
            <p className="text-red-400 font-bold text-sm mb-2">Rayleigh & Jeans</p>
            <div className="h-20 mb-2">
              <svg viewBox="0 0 120 60" className="w-full h-full">
                <text x="10" y="10" fill="#f87171" fontSize="6">Short λ</text><text x="85" y="10" fill="#f87171" fontSize="6">Long λ</text>
                <path d="M10,50 Q30,10 60,30 Q80,42 110,48" stroke="#f87171" fill="none" strokeWidth="2" />
                <path d="M10,-10 Q20,5 40,20 Q60,32 80,40 Q100,46 110,48" stroke="#4ade80" fill="none" strokeWidth="1.5" strokeDasharray="3,3" />
                <text x="3" y="7" fill="#ef4444" fontSize="7" fontWeight="bold">∞!!</text>
                <circle cx="95" cy="44" r="9" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="0.5" /><text x="88" y="46" fill="#22c55e" fontSize="5">✓</text>
              </svg>
            </div>
            <p className="text-[10px] text-green-400">✅ Long wavelengths</p>
            <p className="text-[10px] text-red-400">❌ Goes to INFINITY!! 💥</p>
          </div>
        </FadeIn>
      </div>

      <SlideImage src="/images/blackbody-spectrum.jpg" alt="Blackbody spectrum" className="w-full h-28" delay={0.7} />
    </div>
  );
}

function Slide10() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4 relative overflow-hidden">
      <motion.img src="/images/uv-catastrophe.jpg" alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.08 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <FadeIn className="relative z-10"><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>The <span className="text-red-400">Ultraviolet Catastrophe</span> ☢️</h2></FadeIn>

      <FadeIn delay={0.3} className="relative z-10">
        <div className="bg-red-500/10 rounded-2xl p-5 border border-red-400/20 text-center backdrop-blur-sm">
          <motion.p className="text-5xl mb-3" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>💥</motion.p>
          <p className="text-lg text-red-300 font-bold">Classical physics predicted INFINITE energy!</p>
          <p className="text-sm text-slate-400 mt-2">Turn on your stove → get vaporized? Obviously wrong! 😱</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.6} className="relative z-10">
        <div className="bg-black/60 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
          <p className="text-xs font-bold text-slate-300 mb-3">📊 The Scoreboard in 1900:</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-3 bg-blue-500/5 rounded-lg p-2"><span className="text-blue-400 text-xs font-mono w-32 font-bold">Wien</span><span className="text-green-400 text-[11px]">✅ short λ</span><span className="text-red-400 text-[11px]">❌ long λ</span></div>
            <div className="flex items-center gap-3 bg-red-500/5 rounded-lg p-2"><span className="text-red-400 text-xs font-mono w-32 font-bold">Rayleigh-Jeans</span><span className="text-red-400 text-[11px]">❌ short λ (∞!)</span><span className="text-green-400 text-[11px]">✅ long λ</span></div>
            <div className="flex items-center gap-3 bg-amber-400/10 rounded-lg p-2 border border-amber-400/15"><span className="text-amber-400 text-xs font-mono w-32 font-bold">Needed:</span><span className="text-amber-400 text-[11px] font-bold">✅ ALL wavelengths — ???</span></div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.9} className="relative z-10"><p className="text-center text-amber-400 font-bold text-sm">Enter: Max Planck. 🚀</p></FadeIn>
    </div>
  );
}

function Slide11() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-5 relative overflow-hidden">
      <motion.img src="/images/planck-desk.jpg" alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <FadeIn className="text-center relative z-10"><motion.span className="text-6xl inline-block" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🎂</motion.span></FadeIn>
      <FadeIn delay={0.2} className="relative z-10"><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}><span className="text-amber-400">October 19, 1900</span></h2></FadeIn>
      <FadeIn delay={0.4} className="relative z-10"><p className="text-center text-slate-400 italic text-sm">The Birthday of Quantum Physics 🎉</p></FadeIn>

      <FadeIn delay={0.5} className="relative z-10">
        <div className="bg-gradient-to-br from-amber-500/10 to-green-500/8 rounded-2xl p-6 border border-amber-400/15 backdrop-blur-sm">
          <p className="text-base text-slate-300 leading-relaxed text-center">
            Planck presented a new formula to the German Physical Society. It was <span className="text-amber-400 font-bold">elegant</span>. It matched data <span className="text-green-400 font-bold">PERFECTLY</span>.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.7} className="relative z-10">
        <div className="flex items-center gap-2 justify-center flex-wrap">
          {["✅ Short λ", "✅ Long λ", "✅ All λ between", "✅ Every temperature"].map((item, i) => (
            <ScaleIn key={i} delay={0.8 + i * 0.08}><span className="text-green-400 text-xs bg-green-400/8 px-3 py-1.5 rounded-full border border-green-400/15">{item}</span></ScaleIn>
          ))}
        </div>
      </FadeIn>

      <div className="relative z-10"><FormulaBox formula="Planck's Formula ✓" label="Perfect match — the ONLY formula that works" glow /></div>
    </div>
  );
}

function Slide12() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-5">
      <FadeIn><h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>🔍 Working <span className="text-amber-400">Backwards</span></h2></FadeIn>

      <FadeIn delay={0.3}>
        <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.03]">
          <div className="flex items-center gap-6 justify-center">
            {[{ icon: "✅", label: "Formula works!", color: "text-green-400" }, { icon: "🤔", label: "But WHY?", color: "text-amber-400" }, { icon: "😱", label: "Shocking answer!", color: "text-red-400" }].map((step, i) => (
              <ScaleIn key={i} delay={0.4 + i * 0.15}>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl">{step.icon}</span>
                  <span className={`text-xs font-bold ${step.color}`}>{step.label}</span>
                </div>
                {i < 2 && <motion.span className="text-2xl text-slate-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.15 }}>→</motion.span>}
              </ScaleIn>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="space-y-2">
        <KeyPoint icon="🧩" text="Found the formula through intuition + clever math interpolation" delay={0.7} />
        <KeyPoint icon="⏳" text={<>Spent <strong className="text-amber-300">TWO MONTHS</strong> trying to find the physical explanation</>} delay={0.8} />
        <KeyPoint icon="💡" text={<>December 1900: Found it. And it <strong className="text-red-400">SHOCKED</strong> him.</>} delay={0.9} />
      </div>

      <FadeIn delay={1.1}>
        <div className="bg-red-500/8 rounded-xl p-4 border border-red-400/10 text-center">
          <p className="text-red-300 font-bold text-sm">⚡ The explanation required one RADICAL assumption...</p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide13() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-3">
      <FadeIn><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Energy Is <span className="text-red-400">NOT</span> Continuous! 🤯</h2></FadeIn>
      <SlideImage src="/images/quantum-staircase.jpg" alt="Ramp vs Staircase" className="w-full h-28" delay={0.3} />
      <EnergyStaircase />
      <FadeIn delay={1}>
        <div className="bg-amber-500/8 rounded-xl p-4 border border-amber-400/10">
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="text-blue-400 font-bold">Classical:</span> Energy = water from a tap — any amount.
            <br /><span className="text-amber-400 font-bold">Quantum:</span> Energy = staircase — only fixed steps!
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide14() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-5 relative overflow-hidden">
      <motion.div className="absolute inset-0" animate={{ background: ["radial-gradient(ellipse at 30% 50%, rgba(251,191,36,0.04) 0%, transparent 70%)", "radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)", "radial-gradient(ellipse at 30% 50%, rgba(251,191,36,0.04) 0%, transparent 70%)"] }} transition={{ duration: 8, repeat: Infinity }} />

      <FadeIn className="relative z-10"><h2 className="text-2xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>The Equation That Changed Everything</h2></FadeIn>
      <div className="relative z-10"><FormulaBox formula="E = hf" label="Energy of one quantum" glow /></div>

      <FadeIn delay={0.7} className="relative z-10">
        <div className="grid grid-cols-3 gap-3">
          {[{ sym: "E", name: "Energy", desc: "of one quantum", color: "text-amber-400" }, { sym: "h", name: "Planck's Constant", desc: "6.626 × 10⁻³⁴ J·s", color: "text-purple-400" }, { sym: "f", name: "Frequency", desc: "of the radiation", color: "text-blue-400" }].map((item, i) => (
            <ScaleIn key={i} delay={0.8 + i * 0.1}>
              <div className="bg-white/[0.04] rounded-xl p-4 text-center border border-white/[0.04] hover:border-amber-400/10 transition-colors">
                <p className={`text-3xl font-mono font-bold ${item.color}`}>{item.sym}</p>
                <p className="text-[11px] text-slate-400 mt-1 font-medium">{item.name}</p>
                <p className="text-[9px] text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={1.1} className="relative z-10">
        <div className="bg-purple-500/8 rounded-xl p-4 border border-purple-400/10 text-center">
          <p className="text-sm text-slate-300"><span className="text-purple-400 font-bold">h</span> is incredibly tiny: <span className="font-mono text-purple-300 text-xs">0.000000000000000000000000000000000663 J·s</span></p>
          <p className="text-[10px] text-slate-500 mt-1">A tiny number — but its meaning is <span className="text-amber-300 font-bold">GIGANTIC</span></p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide15() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>🛍️ The Sugar Bag <span className="text-amber-400">Analogy</span></h2></FadeIn>
      <SugarBagDemo />
      <div className="grid grid-cols-2 gap-3">
        <FadeIn delay={0.7}><div className="bg-blue-500/8 rounded-xl p-4 border border-blue-400/10"><p className="text-sm text-blue-300 font-bold mb-1">Classical 📐</p><p className="text-xs text-slate-400">Buy any amount: 1g, 1.5g, 1.37g...</p><p className="text-[10px] text-blue-300/70 mt-1">Like water from a tap 💧</p></div></FadeIn>
        <FadeIn delay={0.8}><div className="bg-amber-500/8 rounded-xl p-4 border border-amber-400/10"><p className="text-sm text-amber-300 font-bold mb-1">Quantum 🪜</p><p className="text-xs text-slate-400">Only 1, 2, 3 bags... never 1.5!</p><p className="text-[10px] text-amber-300/70 mt-1">Fixed packets only 📦</p></div></FadeIn>
      </div>
      <FadeIn delay={1}>
        <div className="bg-red-500/8 rounded-xl p-4 border border-red-400/10 text-center">
          <p className="text-sm text-red-300">This was an <span className="font-bold">EARTHQUAKE</span> — 200+ years of assuming energy was continuous, shattered.</p>
          <p className="text-[10px] text-slate-500 mt-1">But the wildest part? Planck didn't believe it himself! 😱</p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide16() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4 relative overflow-hidden">
      <motion.img src="/images/planck-portrait.jpg" alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <FadeIn className="text-center relative z-10"><span className="text-5xl">😰</span></FadeIn>
      <FadeIn delay={0.2} className="relative z-10"><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>"An Act of <span className="text-red-400">Desperation</span>"</h2></FadeIn>

      <QuoteBlock quote="I was ready to sacrifice any of my previous convictions about physics." author="Max Planck" />

      <div className="space-y-2 relative z-10">
        <KeyPoint icon="🏛️" text="Planck was conservative — loved order, tradition, established laws" delay={0.6} />
        <KeyPoint icon="🔢" text={<>His own math said the old system was <strong className="text-red-400">BROKEN</strong></>} delay={0.7} />
        <KeyPoint icon="🙏" text="He didn't WANT to introduce the quantum — math FORCED him" delay={0.8} />
        <KeyPoint icon="⏳" text="For years, he tried to undo it — hoping it was 'just a math trick'" delay={0.9} />
      </div>

      <FadeIn delay={1.1} className="relative z-10"><p className="text-center text-sm text-amber-400 italic font-medium">But the quantum was not a trick. It was reality. ✨</p></FadeIn>
    </div>
  );
}

function Slide17() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Einstein Takes the <span className="text-amber-400">Baton</span> 🏃</h2></FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <SlideImage src="/images/planck-einstein.jpg" alt="Planck and Einstein" className="w-full h-36" delay={0.3} />
        <SlideImage src="/images/nobel-medal.jpg" alt="Nobel Prize" className="w-full h-36" delay={0.4} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <FadeIn delay={0.5}>
          <div className="bg-blue-500/8 rounded-xl p-4 border border-blue-400/10">
            <p className="text-blue-300 font-bold text-sm">Planck:</p>
            <p className="text-xs text-slate-400 mt-1">"Energy is <span className="text-blue-300 font-semibold">emitted in quanta</span>"</p>
            <p className="text-[10px] text-slate-600 mt-2">🏆 Nobel Prize 1918</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.6}>
          <div className="bg-amber-500/8 rounded-xl p-4 border border-amber-400/10">
            <p className="text-amber-300 font-bold text-sm">Einstein went further:</p>
            <p className="text-xs text-slate-400 mt-1">"Light <span className="text-amber-300 font-semibold">ITSELF is quanta — photons!</span>"</p>
            <p className="text-[10px] text-slate-600 mt-2">🏆 Nobel Prize 1921</p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.8}>
        <div className="bg-gradient-to-r from-amber-500/8 to-purple-500/8 rounded-xl p-4 border border-amber-400/10">
          <p className="text-sm text-slate-300 text-center">
            <span className="text-amber-400 font-bold">The irony:</span> Planck opened a door he was <span className="text-red-400 font-semibold">afraid to walk through</span>.
            Others — Einstein, Bohr, Heisenberg, Schrödinger — walked through and built quantum mechanics.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide18() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-3">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>⚛️ Quantum Leaps & <span className="text-amber-400">Atomic Orbits</span></h2></FadeIn>

      <FadeIn delay={0.3}>
        <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.03]">
          <p className="text-sm text-slate-300"><span className="text-amber-400 font-bold">WHY</span> can electrons only be in certain orbits? → Because energy is <span className="text-amber-400 font-bold">quantized!</span></p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3 items-center">
        <div className="relative">
          <SlideImage src={IMAGES.atom} alt="Atom visualization" className="w-full h-40" delay={0.4} />
          <div className="absolute inset-0 flex items-center justify-center">
            <AtomModel />
          </div>
        </div>
        <PhotonEmission />
      </div>

      <FadeIn delay={0.9}>
        <div className="bg-amber-500/8 rounded-xl p-3 border border-amber-400/10">
          <p className="text-xs text-slate-300"><span className="text-amber-400 font-bold">Bohr (1913):</span> Electrons only at fixed energy levels. Jump between them → emit photon with E = hf!</p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide19() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-3">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>🌟 Why Stars Have <span className="text-amber-400">Colors</span></h2></FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <SlideImage src={IMAGES.stars} alt="Starry sky" className="w-full h-28" delay={0.2} />
        <SlideImage src={IMAGES.prism} alt="Prism spectrum" className="w-full h-28" delay={0.3} />
      </div>

      <SpectrumDemo />

      <SlideImage src={IMAGES.spectrum} alt="Light spectrum" className="w-full h-16" delay={0.8} />

      <FadeIn delay={1}>
        <div className="bg-purple-500/8 rounded-xl p-3 border border-purple-400/10">
          <p className="text-xs text-slate-300"><span className="text-purple-400 font-bold">Spectroscopy:</span> Analyzing starlight tells us what distant stars are made of — thanks to quantized energy! 🔭</p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide20() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><h2 className="text-2xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}><span className="text-amber-400">E = hf</span> vs <span className="text-blue-400">E = mc²</span></h2></FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <FormulaBox formula="E = mc²" label="Mass ↔ Energy (Einstein)" />
        <FormulaBox formula="E = hf" label="Universe is grainy (Planck)" glow />
      </div>

      <PixelZoom />

      <FadeIn delay={0.9}>
        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.03]">
          <p className="text-xs text-slate-300 leading-relaxed">
            <span className="text-amber-400 font-bold">🏀 Baseballs, cars, people:</span> quantum steps so tiny they look continuous.
            <br /><span className="text-purple-400 font-bold">⚛️ Atoms, electrons, photons:</span> quantum effects dominate everything!
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide21() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-red-950/10 to-slate-950 pointer-events-none" />

      <FadeIn className="relative z-10"><h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>💔 A Life of <span className="text-red-400">Loss</span></h2></FadeIn>
      <FadeIn delay={0.2} className="relative z-10"><p className="text-sm text-slate-500">Planck lived 89 years (1858–1947). His personal life was marked by one tragedy after another.</p></FadeIn>

      <div className="relative z-10"><TragedyTimeline /></div>

      <FadeIn delay={1.5} className="relative z-10">
        <div className="bg-red-500/5 rounded-xl p-4 border border-red-400/8">
          <p className="text-xs text-slate-500 italic leading-relaxed">Three of his four children died before him. His twin daughters both died in childbirth, just two years apart...</p>
        </div>
      </FadeIn>
    </div>
  );
}

function Slide22() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/20 pointer-events-none" />

      <FadeIn className="relative z-10"><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Under the Shadow of <span className="text-red-400">Darkness</span></h2></FadeIn>

      <FadeIn delay={0.3} className="relative z-10">
        <div className="bg-red-900/15 rounded-2xl p-5 border border-red-800/20 backdrop-blur-sm">
          <p className="text-sm text-slate-300 leading-relaxed">When Hitler came to power in <span className="text-red-400 font-bold">1933</span>, Planck — president of Germany's top scientific organization — was in an impossible position.</p>
        </div>
      </FadeIn>

      <div className="space-y-2 relative z-10">
        <KeyPoint icon="🤝" text="Met with Hitler personally to protest firing of Jewish scientists" delay={0.5} />
        <KeyPoint icon="😤" text="Hitler flew into a rage and dismissed him" delay={0.6} />
        <KeyPoint icon="👀" text="Watched helplessly as Einstein and others fled" delay={0.7} />
        <KeyPoint icon="🏠" text="Chose to stay — tried to protect science from within" delay={0.8} />
      </div>

      <FadeIn delay={1} className="relative z-10"><p className="text-[11px] text-slate-600 italic text-center">He loved his country, even though he hated what it had become...</p></FadeIn>
    </div>
  );
}

function Slide23() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />

      <FadeIn className="relative z-10"><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>The <span className="text-red-400">Final Blow</span></h2></FadeIn>

      <FadeIn delay={0.3} className="relative z-10">
        <div className="bg-black/60 rounded-2xl p-6 border border-red-400/10 backdrop-blur-sm text-center">
          <p className="text-slate-600 text-xs mb-2">January 23, 1945</p>
          <p className="text-lg text-slate-300 leading-relaxed">Son <span className="text-amber-400 font-bold">Erwin</span> — part of the plot to assassinate Hitler — was <span className="text-red-400 font-bold">executed</span>.</p>
          <p className="text-xs text-slate-600 mt-2">Just months before the war ended.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.6} className="relative z-10">
        <div className="bg-white/[0.02] rounded-xl p-4 space-y-2">
          <p className="text-xs text-slate-500">At 86, Planck had lost:</p>
          <div className="flex gap-2 flex-wrap">{["His children", "His home (bombed)", "His country's soul"].map((item, i) => (<motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.1 }} className="text-[11px] bg-red-400/8 text-red-300/80 px-3 py-1.5 rounded-full border border-red-400/10">{item}</motion.span>))}</div>
        </div>
      </FadeIn>

      <QuoteBlock quote="In physics, he discovered discontinuity — sudden jumps. But in life, he embodied continuity — steadfastness, perseverance, an unbreakable commitment to truth." />
    </div>
  );
}

function Slide24() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>🌱 The Seed of <span className="text-amber-400">Everything Modern</span></h2></FadeIn>

      <FadeIn delay={0.3}>
        <div className="bg-gradient-to-r from-amber-500/8 to-green-500/8 rounded-xl p-4 border border-amber-400/10">
          <p className="text-sm text-slate-300 text-center">Quantum mechanics = <span className="text-amber-400 font-bold">most accurate theory in all of science</span>. It started with Planck.</p>
        </div>
      </FadeIn>

      <TechGrid />

      <div className="grid grid-cols-2 gap-3">
        <SlideImage src={IMAGES.chip} alt="Microchip" className="w-full h-24" delay={0.8} />
        <SlideImage src={IMAGES.chip2} alt="Circuit board" className="w-full h-24" delay={0.9} />
      </div>

      <FadeIn delay={1}>
        <p className="text-[11px] text-slate-500 text-center italic">No Planck → No quantum → No atoms understood → No chemistry → No electronics → No smartphones 📱</p>
      </FadeIn>
    </div>
  );
}

function Slide25() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-4">
      <FadeIn><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>🏛️ Max Planck Society & <span className="text-amber-400">Planck Units</span></h2></FadeIn>

      <div className="grid grid-cols-2 gap-3">
        <SlideImage src="/images/planck-legacy.jpg" alt="Max Planck Society" className="w-full h-32" delay={0.2} />
        <SlideImage src={IMAGES.germanBuilding} alt="German research building" className="w-full h-32" delay={0.3} />
      </div>

      <FadeIn delay={0.4}>
        <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.03]">
          <p className="text-sm text-slate-300">The <span className="text-amber-400 font-bold">Max Planck Society</span> operates <span className="text-amber-300 font-bold">80+</span> research institutes — one of the world's top scientific organizations! 🌍</p>
        </div>
      </FadeIn>

      <PlanckUnitsTable />
    </div>
  );
}

function Slide26() {
  return (
    <div className="h-full flex flex-col justify-center px-10 space-y-5 relative overflow-hidden">
      <motion.img src="/images/planck-portrait.jpg" alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <FadeIn className="relative z-10"><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>🦁 The Lesson: <span className="text-amber-400">Intellectual Courage</span></h2></FadeIn>

      <FadeIn delay={0.3} className="relative z-10">
        <div className="bg-gradient-to-br from-amber-500/10 to-purple-500/8 rounded-2xl p-5 border border-amber-400/15 text-center">
          <p className="text-lg text-amber-100 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Truth does not care about our preferences.</p>
        </div>
      </FadeIn>

      <div className="space-y-2 relative z-10">
        <KeyPoint icon="🔍" text="Planck did NOT want to discover the quantum" delay={0.5} />
        <KeyPoint icon="📊" text="But when evidence pointed to a new truth, he followed it" delay={0.6} />
        <KeyPoint icon="📝" text="Published the truth — even though it overthrew everything he believed" delay={0.7} />
        <KeyPoint icon="🏆" text={<><strong className="text-amber-300">That</strong> is the highest standard of science</>} delay={0.8} />
      </div>

      <FadeIn delay={1} className="text-center relative z-10"><span className="text-4xl">⚛️</span></FadeIn>
    </div>
  );
}

function Slide27() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-5 relative overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div key={i} className="absolute rounded-full" style={{ width: 2 + Math.random() * 4, height: 2 + Math.random() * 4, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, backgroundColor: `rgba(251,191,36,${0.1 + Math.random() * 0.2})` }}
          animate={{ y: [0, -(15 + Math.random() * 30), 0], opacity: [0.05, 0.35, 0.05] }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <FadeIn className="relative z-10"><h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Remember the <span className="text-amber-400">Glow</span> ✨</h2></FadeIn>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="relative z-10">
        <img src={IMAGES.lightbulb} alt="Glowing lightbulb" className="w-44 h-44 object-cover rounded-full shadow-2xl shadow-amber-500/20 border-2 border-amber-400/10" />
        <motion.div className="absolute inset-0 rounded-full" animate={{ boxShadow: ["0 0 20px rgba(251,191,36,0.1)", "0 0 50px rgba(251,191,36,0.25)", "0 0 20px rgba(251,191,36,0.1)"] }} transition={{ duration: 3, repeat: Infinity }} />
      </motion.div>

      <FadeIn delay={0.5} className="relative z-10">
        <div className="bg-white/[0.04] rounded-2xl p-5 text-center max-w-md border border-white/[0.05]">
          <p className="text-sm text-slate-300 leading-relaxed">In 1900, a careful professor found a formula — and buried inside was a tiny constant <span className="text-amber-400 font-bold">h</span> that revealed: the universe is <span className="text-amber-400 font-bold">grainy</span>, <span className="text-amber-400 font-bold">quantized</span>, not smooth.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.8} className="relative z-10"><p className="text-sm text-slate-500 italic text-center">That one desperate act of a reluctant revolutionary — changed everything.</p></FadeIn>
    </div>
  );
}

function Slide28() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 via-transparent to-purple-500/3 pointer-events-none" />
      <motion.img src="/images/planck-portrait.jpg" alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <FadeIn className="relative z-10"><h2 className="text-2xl font-bold text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Planck's <span className="text-amber-400">Principle</span></h2></FadeIn>

      <FadeIn delay={0.3} className="relative z-10">
        <div className="bg-gradient-to-br from-amber-500/8 to-purple-500/8 rounded-2xl p-7 border border-amber-400/15 max-w-lg backdrop-blur-sm">
          <p className="text-base text-amber-100/90 italic leading-relaxed text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            "A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it."
          </p>
          <p className="text-right text-xs text-amber-400/50 mt-4">— Max Planck</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.7} className="text-center relative z-10 space-y-2">
        <p className="text-lg text-slate-300"><span className="text-amber-400 font-bold">You</span> are the new generation.</p>
        <p className="text-slate-400 text-sm">Quantum physics is <span className="font-bold text-white">YOUR</span> physics. The quantum world is <span className="font-bold text-white">YOUR</span> world.</p>
      </FadeIn>

      <FadeIn delay={1} className="text-center relative z-10">
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
          <p className="text-3xl mb-2">🙏</p>
          <p className="text-slate-500 text-sm font-medium">Thank you.</p>
        </motion.div>
      </FadeIn>
    </div>
  );
}
