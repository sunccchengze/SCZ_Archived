import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function EntanglementSlide() {
  const [measured, setMeasured] = useState(false);
  const [value, setValue] = useState<0 | 1>(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    let animId: number;
    let t = 0;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw entanglement line
      ctx.beginPath();
      ctx.moveTo(60, h / 2);

      for (let x = 60; x < w - 60; x++) {
        const y = h / 2 + Math.sin((x + t * 2) * 0.03) * 15 * Math.sin(t * 0.02 + x * 0.01);
        ctx.lineTo(x, y);
      }

      const grad = ctx.createLinearGradient(60, 0, w - 60, 0);
      grad.addColorStop(0, '#1E90A6');
      grad.addColorStop(0.5, '#C9A96E');
      grad.addColorStop(1, '#1E90A6');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.globalAlpha = measured ? 0.3 : 0.6;
      ctx.stroke();

      // Particles along line
      for (let i = 0; i < 8; i++) {
        const px = ((t * 0.5 + i * 50) % (w - 120)) + 60;
        const py = h / 2 + Math.sin((px + t * 2) * 0.03) * 15 * Math.sin(t * 0.02 + px * 0.01);
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#C9A96E';
        ctx.globalAlpha = 0.4;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [measured]);

  const handleMeasure = () => {
    const v = Math.random() > 0.5 ? 1 : 0;
    setValue(v as 0 | 1);
    setMeasured(true);
    setTimeout(() => setMeasured(false), 4000);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-xuan via-zitan/20 to-xuan" />

      <div className="relative z-10 w-full max-w-lg">
        <motion.h3
          className="text-xl font-bold text-center mb-6 text-gradient-teal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Quantum Entanglement
        </motion.h3>

        {/* Two particles with connection */}
        <div className="relative h-48 mb-6">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />

          {/* London particle */}
          <motion.div
            className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-2 cursor-pointer"
              style={{
                borderColor: measured ? '#C9A96E' : '#1E90A6',
                background: measured ? '#C9A96E22' : '#1E90A622',
                boxShadow: `0 0 20px ${measured ? '#C9A96E33' : '#1E90A633'}`,
              }}
              animate={!measured ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={handleMeasure}
            >
              {measured ? <span className="text-liujin font-mono">{value}</span> : <span className="text-shiqing">?</span>}
            </motion.div>
            <span className="text-xs text-cang mt-2">🇬🇧 London</span>
          </motion.div>

          {/* Tokyo particle */}
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-2"
              style={{
                borderColor: measured ? '#E23C3C' : '#1E90A6',
                background: measured ? '#E23C3C22' : '#1E90A622',
                boxShadow: `0 0 20px ${measured ? '#E23C3C33' : '#1E90A633'}`,
              }}
              animate={measured ? { scale: [1, 1.3, 1] } : { scale: [1, 1.1, 1] }}
              transition={{ duration: measured ? 0.5 : 2, repeat: measured ? 0 : Infinity }}
            >
              {measured ? (
                <span className="text-zhusha font-mono">{1 - value}</span>
              ) : (
                <span className="text-shiqing">?</span>
              )}
            </motion.div>
            <span className="text-xs text-cang mt-2">🇯🇵 Tokyo</span>
          </motion.div>

          {/* Instantaneous label */}
          {measured && (
            <motion.div
              className="absolute top-2 left-1/2 -translate-x-1/2 bg-zhusha/20 border border-zhusha/40 rounded px-3 py-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' }}
            >
              <span className="text-xs text-zhusha font-bold">⚡ INSTANTANEOUS ⚡</span>
            </motion.div>
          )}
        </div>

        {/* Measure button */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer"
            style={{
              background: measured ? '#E23C3C' : 'linear-gradient(135deg, #1E90A6, #2B1A3D)',
              color: '#E8E0D0',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMeasure}
            disabled={measured}
          >
            {measured ? 'Entangled! Correlated instantly!' : '🔬 Measure London\'s Qubit'}
          </motion.button>
          <p className="text-[10px] text-cang mt-1">Click to collapse — watch Tokyo respond instantly</p>
        </motion.div>

        {/* Einstein quote */}
        <motion.div
          className="bg-dai/60 border border-liujin/15 rounded-lg p-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-gao italic">
            &ldquo;Spooky action at a distance&rdquo;
          </p>
          <p className="text-xs text-cang mt-1">— Albert Einstein (who was wrong about this)</p>
        </motion.div>
      </div>
    </div>
  );
}
