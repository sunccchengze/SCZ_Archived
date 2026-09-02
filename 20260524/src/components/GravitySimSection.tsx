import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  trail: { x: number; y: number }[];
  life: number;
}

export default function GravitySimSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const [mass, setMass] = useState(5000);
  const [isRunning, setIsRunning] = useState(true);


  const colors = ['#f97316', '#facc15', '#3b82f6', '#ec4899', '#a855f7', '#22d3ee'];

  const addParticle = useCallback((cx: number, cy: number, canvasW: number, canvasH: number) => {
    const bhX = canvasW / 2;
    const bhY = canvasH / 2;
    const angle = Math.atan2(cy - bhY, cx - bhX) + Math.PI / 2;
    const dist = Math.sqrt((cx - bhX) ** 2 + (cy - bhY) ** 2);
    const speed = Math.sqrt(mass / Math.max(dist, 50)) * 0.8;

    particlesRef.current.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
      vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      trail: [],
      life: 1,
    });
  }, [mass]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    // Seed initial particles
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 100 + Math.random() * 200;
      addParticle(
        canvas.width / 2 + Math.cos(angle) * dist,
        canvas.height / 2 + Math.sin(angle) * dist,
        canvas.width,
        canvas.height
      );
    }

    const animate = () => {
      if (!isRunning) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = 'rgba(3, 0, 20, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const bhX = canvas.width / 2;
      const bhY = canvas.height / 2;

      // Draw gravitational field lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + Date.now() * 0.0002;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(124, 58, 237, 0.05)';
        ctx.lineWidth = 1;
        for (let r = 30; r < 300; r += 5) {
          const x = bhX + Math.cos(angle + r * 0.005) * r;
          const y = bhY + Math.sin(angle + r * 0.005) * r;
          if (r === 30) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw black hole
      const gradient = ctx.createRadialGradient(bhX, bhY, 0, bhX, bhY, 40);
      gradient.addColorStop(0, 'rgba(0,0,0,1)');
      gradient.addColorStop(0.5, 'rgba(0,0,0,0.9)');
      gradient.addColorStop(0.8, 'rgba(124,58,237,0.2)');
      gradient.addColorStop(1, 'rgba(124,58,237,0)');
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(bhX, bhY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Event horizon ring
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
      ctx.lineWidth = 2;
      ctx.arc(bhX, bhY, 20, 0, Math.PI * 2);
      ctx.stroke();

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        const dx = bhX - p.x;
        const dy = bhY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 15) return false; // absorbed
        if (p.x < -50 || p.x > canvas.width + 50 || p.y < -50 || p.y > canvas.height + 50) return false;

        // Gravitational force
        const force = mass / (dist * dist);
        const ax = (dx / dist) * force;
        const ay = (dy / dist) * force;

        p.vx += ax * 0.016;
        p.vy += ay * 0.016;
        p.x += p.vx;
        p.y += p.vy;

        // Trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 20) p.trail.shift();

        // Draw trail
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
          }
          ctx.strokeStyle = p.color + '40';
          ctx.lineWidth = p.radius * 0.5;
          ctx.stroke();
        }

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        ctx.beginPath();
        const pGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        pGlow.addColorStop(0, p.color + '40');
        pGlow.addColorStop(1, p.color + '00');
        ctx.fillStyle = pGlow;
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      // Auto-add particles if too few
      if (particlesRef.current.length < 30 && Math.random() < 0.1) {
        const edge = Math.floor(Math.random() * 4);
        let x: number, y: number;
        switch (edge) {
          case 0: x = Math.random() * canvas.width; y = 0; break;
          case 1: x = canvas.width; y = Math.random() * canvas.height; break;
          case 2: x = Math.random() * canvas.width; y = canvas.height; break;
          default: x = 0; y = Math.random() * canvas.height;
        }
        addParticle(x, y, canvas.width, canvas.height);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [mass, isRunning, addParticle]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 8; i++) {
      addParticle(
        x + (Math.random() - 0.5) * 30,
        y + (Math.random() - 0.5) * 30,
        canvas.width,
        canvas.height
      );
    }
  };

  return (
    <SectionWrapper id="gravity-sim" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <SectionTitle
          emoji="🎮"
          title="Gravity Simulator"
          subtitle="See how a black hole bends space and captures everything nearby"
        />

        <motion.div
          className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-black"
          style={{ height: '500px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <canvas
            ref={canvasRef}
            className="gravity-canvas w-full h-full"
            onClick={handleCanvasClick}
          />

          {/* Controls overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-purple-500/20">
              <span className="text-xs text-gray-400">Mass:</span>
              <input
                type="range"
                min="1000"
                max="20000"
                value={mass}
                onChange={(e) => setMass(Number(e.target.value))}
                className="w-24 sm:w-32 accent-purple-500"
              />
              <span className="text-xs text-purple-300 font-mono w-12">{(mass / 1000).toFixed(0)}k</span>
            </div>

            <div className="flex gap-2">
              <button
                className="px-3 py-1.5 text-xs rounded-lg bg-purple-600/30 text-purple-300 border border-purple-500/30 hover:bg-purple-600/50"
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? '⏸ Pause' : '▶️ Play'}
              </button>
              <button
                className="px-3 py-1.5 text-xs rounded-lg bg-purple-600/30 text-purple-300 border border-purple-500/30 hover:bg-purple-600/50"
                onClick={() => {
                  particlesRef.current = [];
                  const canvas = canvasRef.current;
                  if (canvas) {
                    for (let i = 0; i < 60; i++) {
                      const angle = Math.random() * Math.PI * 2;
                      const dist = 100 + Math.random() * 200;
                      addParticle(
                        canvas.width / 2 + Math.cos(angle) * dist,
                        canvas.height / 2 + Math.sin(angle) * dist,
                        canvas.width,
                        canvas.height
                      );
                    }
                  }
                }}
              >
                🔄 Reset
              </button>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-gray-500 text-sm mt-4">
          👆 Click anywhere on the canvas to launch particles! Drag the mass slider to change the black hole's gravity.
        </p>

        {/* Einstein quote */}
        <motion.div
          className="max-w-2xl mx-auto mt-12 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-900/10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-300 text-sm sm:text-base italic">
            "Gravity is not just a force — it's a <span className="text-indigo-300 font-bold">CURVE in space</span>. 
            Massive objects bend the fabric of space around them, and everything follows these curves."
          </p>
          <p className="text-indigo-400 font-bold text-sm mt-3">— Albert Einstein's General Relativity</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
