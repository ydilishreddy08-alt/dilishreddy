import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const trailIndex = useRef(0);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    // Create trail elements
    const trailCount = 5;
    const trailContainer = document.createElement('div');
    trailContainer.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9997;';
    document.body.appendChild(trailContainer);

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.opacity = '0';
      trailContainer.appendChild(trail);
      trailsRef.current.push(trail);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;

      // Trail
      const trail = trailsRef.current[trailIndex.current];
      if (trail) {
        trail.style.left = `${mouseX - 2}px`;
        trail.style.top = `${mouseY - 2}px`;
        trail.style.opacity = '0.6';
        trail.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          if (trail) trail.style.opacity = '0';
        }, 300);
      }
      trailIndex.current = (trailIndex.current + 1) % trailCount;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX - 18}px`;
      ring.style.top = `${ringY - 18}px`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleHover = () => {
      const interactive = document.querySelectorAll('a, button, .glass-card-hover, input, textarea, select');
      interactive.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    handleHover();
    // Re-run periodically to catch dynamically added elements
    const interval = setInterval(handleHover, 2000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
      trailContainer.remove();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} />
    </>
  );
}
