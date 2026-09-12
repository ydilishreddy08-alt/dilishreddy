import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Boxes, Sparkles } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const stats = [
  { value: 500, suffix: '+', label: 'Students' },
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 20, suffix: '+', label: 'Events' },
  { value: 10, suffix: '+', label: 'Workshops' },
];

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-display font-bold text-3xl md:text-4xl gradient-text">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-gray-400 mt-1 font-mono tracking-wider">{label}</div>
    </div>
  );
}

export function Hero() {
  const scrollY = useScrollPosition();
  const sectionRef = useRef<HTMLElement>(null);
  const [statsStart, setStatsStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsStart(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const parallax = (factor: number) => `translateY(${scrollY * factor}px)`;

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hero background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glowing portal */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, transparent 70%)',
            transform: parallax(0.1),
          }}
        />

        {/* Floating cubes */}
        <div className="absolute top-[20%] left-[10%] animate-float" style={{ transform: parallax(0.2) }}>
          <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-scope-green/30 rounded-lg bg-scope-green/5 backdrop-blur-sm flex items-center justify-center shadow-green-glow">
            <div className="w-6 h-6 md:w-10 md:h-10 bg-scope-green/20 rounded animate-pulse-glow" />
          </div>
        </div>
        <div className="absolute top-[60%] left-[8%] animate-float-rev" style={{ transform: parallax(0.15) }}>
          <div className="w-12 h-12 md:w-16 md:h-16 border border-scope-emerald/30 rounded bg-scope-emerald/5 backdrop-blur-sm" />
        </div>
        <div className="absolute top-[25%] right-[12%] animate-float-slow" style={{ transform: parallax(0.25) }}>
          <div className="w-14 h-14 md:w-20 md:h-20 border-2 border-scope-lime/30 rounded-lg bg-scope-lime/5 backdrop-blur-sm flex items-center justify-center">
            <div className="w-5 h-5 md:w-8 md:h-8 bg-scope-lime/20 rounded animate-pulse-glow" />
          </div>
        </div>
        <div className="absolute top-[65%] right-[15%] animate-float" style={{ transform: parallax(0.2), animationDelay: '2s' }}>
          <div className="w-10 h-10 md:w-14 md:h-14 border border-scope-green/30 rounded bg-scope-green/5" />
        </div>
        <div className="absolute top-[45%] left-[5%] animate-float-slow" style={{ transform: parallax(0.3), animationDelay: '1s' }}>
          <div className="w-8 h-8 border border-scope-green/40 rounded bg-scope-green/10" />
        </div>

        {/* Grid floor effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%] opacity-30"
          style={{
            background: 'linear-gradient(to top, rgba(57, 255, 20, 0.08) 0%, transparent 100%)',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom',
          }}
        >
          <div className="absolute inset-0 grid-bg" />
        </div>

        {/* Tree silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end opacity-20 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center" style={{ transform: parallax(0.05) }}>
              <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-scope-dark-green" />
              <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[32px] border-l-transparent border-r-transparent border-b-scope-dark-green -mt-2" />
              <div className="w-2 h-12 bg-scope-dark-green" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-scope-green" />
          <span className="text-xs font-mono text-scope-green tracking-wider">STUDENT DEVELOPER COMMUNITY</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          ENTER THE WORLD OF <span className="gradient-text neon-text">CODE</span>
        </h1>

        {/* Subheading */}
        <p className="font-display text-xl md:text-2xl text-scope-green font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          Build. Explore. Compete. Create.
        </p>

        {/* Supporting text */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          SCOPE is a student-driven programming community where developers learn, build projects,
          participate in hackathons, explore emerging technologies and grow together.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="neon-btn px-8 py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2 group"
          >
            EXPLORE SCOPE
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2 border border-scope-green/30 text-gray-300 hover:text-scope-green hover:border-scope-green/60 hover:bg-scope-green/5 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            FIND EVENTS
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card neon-border rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} start={statsStart} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-scope-green/50">
            <Boxes className="w-4 h-4 animate-bounce-subtle" />
            <span className="text-xs font-mono">scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
