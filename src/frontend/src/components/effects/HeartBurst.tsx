import { useEffect, useRef } from 'react';

interface BurstParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function HeartBurst() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const colors = ['#ff6b9d', '#ff8fab', '#ffb3c1', '#ffc8d4', '#ff1744'];
    const particles: BurstParticle[] = [];

    // Create burst particles
    for (let i = 0; i < 100; i++) {
      const angle = (Math.PI * 2 * i) / 100;
      const velocity = Math.random() * 8 + 4;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 15 + 5,
        life: 1,
        maxLife: Math.random() * 60 + 40,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.2; // Gravity
        particle.life++;

        const alpha = 1 - particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;

        // Draw heart
        ctx.fillStyle = particle.color;
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.beginPath();
        const size = particle.size;
        ctx.moveTo(0, size * 0.3);
        ctx.bezierCurveTo(-size * 0.5, -size * 0.2, -size * 0.5, size * 0.3, 0, size * 0.7);
        ctx.bezierCurveTo(size * 0.5, size * 0.3, size * 0.5, -size * 0.2, 0, size * 0.3);
        ctx.fill();
        ctx.restore();
      });

      frame++;
      if (frame < 100) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
