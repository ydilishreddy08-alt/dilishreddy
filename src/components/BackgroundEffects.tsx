import { useEffect, useRef } from 'react';

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; rotation: number }[] = [];
    const particleCount = Math.min(40, Math.floor(width / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * Math.PI,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(57, 255, 20, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(57, 255, 20, 0.5)';
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-60" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(11, 46, 19, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(11, 46, 19, 0.3) 0%, transparent 50%)',
        }}
      />

      {/* Floating particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Light streaks */}
      <div className="absolute inset-0">
        <div className="light-streak" style={{ left: '15%', animationDelay: '0s' }} />
        <div className="light-streak" style={{ left: '45%', animationDelay: '3s' }} />
        <div className="light-streak" style={{ left: '75%', animationDelay: '5s' }} />
        <div className="light-streak" style={{ left: '90%', animationDelay: '7s' }} />
      </div>

      {/* Fog overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(57, 255, 20, 0.03) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(0, 200, 83, 0.03) 0%, transparent 40%)',
        }}
      />
    </div>
  );
}
