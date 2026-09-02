import { useEffect, useRef } from 'react';

interface RainDrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  windOffset: number;
}

interface Teardrop {
  x: number;
  y: number;
  radius: number;
  growing: boolean;
  maxRadius: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function RainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<RainDrop[]>([]);
  const teardropsRef = useRef<Teardrop[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dropCount = Math.floor(window.innerWidth / 8);
    dropsRef.current = Array.from({ length: dropCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 25 + 10,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.12 + 0.03,
      windOffset: Math.random() * 0.5 + 0.3,
    }));

    const createTeardrop = (x: number, y: number) => {
      const maxR = Math.random() * 15 + 8;
      teardropsRef.current.push({
        x, y,
        radius: 0,
        growing: true,
        maxRadius: maxR,
        opacity: 0.15,
        life: 0,
        maxLife: 120,
      });
    };

    let lastTeardrop = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rain lines
      dropsRef.current.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(
          drop.x + drop.windOffset,
          drop.y + drop.length
        );
        ctx.strokeStyle = `rgba(140, 180, 220, ${drop.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += drop.windOffset * 0.3;

        if (drop.y > canvas.height) {
          if (Math.random() < 0.08) {
            createTeardrop(drop.x, canvas.height - Math.random() * 100);
          }
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
        if (drop.x > canvas.width + 20) {
          drop.x = -20;
        }
      });

      // Teardrop ripples
      teardropsRef.current = teardropsRef.current.filter((td) => {
        td.life++;
        
        if (td.growing) {
          td.radius += (td.maxRadius - td.radius) * 0.08;
          td.growing = td.radius < td.maxRadius * 0.95;
        } else {
          td.opacity *= 0.97;
          td.radius += 0.3;
        }

        if (td.life < 2) return true;

        ctx.beginPath();
        ctx.ellipse(td.x, td.y, td.radius * 1.5, td.radius * 0.5, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(140, 180, 220, ${td.opacity * 0.6})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(td.x, td.y, td.radius * 0.8, td.radius * 0.25, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(140, 180, 220, ${td.opacity * 0.4})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        return td.life < td.maxLife;
      });

      // Random ambient teardrops at top
      lastTeardrop++;
      if (lastTeardrop > 30 && Math.random() < 0.4) {
        lastTeardrop = 0;
        createTeardrop(
          Math.random() * canvas.width,
          canvas.height * 0.7 + Math.random() * canvas.height * 0.25
        );
      }

      // Subtle fog
      const fogGrad = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.8, 0,
        canvas.width * 0.3, canvas.height * 0.8, canvas.width * 0.5
      );
      fogGrad.addColorStop(0, 'rgba(15, 21, 37, 0.06)');
      fogGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="rain-canvas" />;
}
