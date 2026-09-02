import { useMemo } from 'react';

export default function StarField() {
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      });
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020308] via-[#050b1a] to-[#0a0f20]" />
      
      {/* Nebula blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-nebula opacity-15"
        style={{
          background: 'radial-gradient(circle, #a56dff22 0%, transparent 70%)',
          top: '10%',
          right: '-10%',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-nebula opacity-10"
        style={{
          background: 'radial-gradient(circle, #00f6ff15 0%, transparent 70%)',
          bottom: '5%',
          left: '-5%',
          filter: 'blur(100px)',
          animationDelay: '-7s',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-nebula opacity-8"
        style={{
          background: 'radial-gradient(circle, #ffb54710 0%, transparent 70%)',
          top: '50%',
          left: '40%',
          filter: 'blur(90px)',
          animationDelay: '-13s',
        }}
      />

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: i % 5 === 0 ? '#a56dff' : i % 7 === 0 ? '#00f6ff' : '#e0e8f0',
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-[1px] opacity-5"
        style={{
          background: 'linear-gradient(90deg, transparent, #00f6ff, transparent)',
          animation: 'scan-line 8s linear infinite',
        }}
      />
    </div>
  );
}
