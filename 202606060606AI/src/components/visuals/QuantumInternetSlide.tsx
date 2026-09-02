import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function QuantumInternetSlide() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    const nodes = [
      { x: w * 0.2, y: h * 0.3, label: 'London', emoji: '🇬🇧' },
      { x: w * 0.8, y: h * 0.25, label: 'Tokyo', emoji: '🇯🇵' },
      { x: w * 0.3, y: h * 0.75, label: 'São Paulo', emoji: '🇧🇷' },
      { x: w * 0.7, y: h * 0.7, label: 'New York', emoji: '🇺🇸' },
      { x: w * 0.5, y: h * 0.5, label: 'Hub', emoji: '⚛️' },
    ];

    const connections = [
      [0, 4], [1, 4], [2, 4], [3, 4], [0, 2], [1, 3],
    ];

    let t = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      connections.forEach(([a, b]) => {
        const na = nodes[a];
        const nb = nodes[b];

        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);

        const grad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
        grad.addColorStop(0, '#1E90A644');
        grad.addColorStop(0.5, '#C9A96E44');
        grad.addColorStop(1, '#1E90A644');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Traveling particle
        const progress = ((t * 0.005 + a * 0.3 + b * 0.2) % 1);
        const px = na.x + (nb.x - na.x) * progress;
        const py = na.y + (nb.y - na.y) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#C9A96E';
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw nodes
      nodes.forEach((node) => {
        // Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 25);
        gradient.addColorStop(0, '#1E90A633');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(node.x - 25, node.y - 25, 50, 50);

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#151A2B';
        ctx.fill();
        ctx.strokeStyle = '#1E90A6';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-xuan via-zitan/10 to-xuan" />

      <div className="relative z-10 w-full max-w-lg">
        <motion.h3
          className="text-lg font-bold text-center mb-2 text-gradient-teal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          The Quantum Internet
        </motion.h3>

        <motion.p
          className="text-[11px] text-cang text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A distributed quantum computer — components separated by thousands of kilometres,
          behaving as a single machine.
        </motion.p>

        {/* Network visualization */}
        <motion.div
          className="relative h-52 bg-dai/40 border border-shiqing/15 rounded-xl overflow-hidden mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Labels */}
          {[
            { label: '🇬🇧', x: '17%', y: '18%' },
            { label: '🇯🇵', x: '77%', y: '13%' },
            { label: '🇧🇷', x: '27%', y: '68%' },
            { label: '🇺🇸', x: '67%', y: '63%' },
            { label: '⚛️', x: '47%', y: '40%' },
          ].map((n, i) => (
            <motion.div
              key={i}
              className="absolute text-sm"
              style={{ left: n.x, top: n.y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              {n.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Security note */}
        <motion.div
          className="bg-dai/60 border border-liujin/20 rounded-lg p-3 mb-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-start gap-2">
            <span className="text-lg">🔒</span>
            <p className="text-[11px] text-gao">
              <span className="text-liujin font-bold">Physically impossible to intercept.</span>{' '}
              Observing a quantum state irrevocably disturbs it — any eavesdropper automatically leaves a detectable trace.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-[11px] text-shiqing font-bold">
            Being built right now — "probably in this decade"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
