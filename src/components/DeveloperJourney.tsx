import { useEffect, useRef, useState } from 'react';
import { Compass, Hammer, Brain, Swords, Crown } from 'lucide-react';
import { Reveal } from './Reveal';

const levels = [
  { level: '01', title: 'CODE EXPLORER', icon: Compass, xp: 0, next: 20, color: 'text-scope-green' },
  { level: '02', title: 'BUILDER', icon: Hammer, xp: 20, next: 45, color: 'text-scope-emerald' },
  { level: '03', title: 'PROBLEM SOLVER', icon: Brain, xp: 45, next: 70, color: 'text-scope-lime' },
  { level: '04', title: 'HACKATHON WARRIOR', icon: Swords, xp: 70, next: 90, color: 'text-scope-green' },
  { level: '05', title: 'FULL-STACK MASTER', icon: Crown, xp: 90, next: 100, color: 'text-scope-emerald' },
];

export function DeveloperJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentXP, setCurrentXP] = useState(0);
  const [activeLevel, setActiveLevel] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate XP to 68
          let xp = 0;
          const interval = setInterval(() => {
            xp += 1;
            if (xp >= 68) {
              xp = 68;
              clearInterval(interval);
            }
            setCurrentXP(xp);
            const level = levels.filter((l) => l.xp <= xp).length - 1;
            setActiveLevel(level);
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative section-pad px-6">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <span className="w-2 h-2 bg-scope-green rounded-sm animate-pulse-glow" />
            <span className="text-xs font-mono text-scope-green/80 tracking-wider">PROGRESSION SYSTEM</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            YOUR <span className="gradient-text">DEVELOPER JOURNEY</span>
          </h2>
          <p className="text-gray-400 text-lg">Level up from explorer to master. Every line of code counts.</p>
        </Reveal>

        {/* XP Bar */}
        <Reveal className="mb-12">
          <div className="glass-card neon-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm text-scope-green">XP: {currentXP} / 100</span>
              <span className="font-mono text-sm text-gray-400">LEVEL {String(activeLevel + 1).padStart(2, '0')}</span>
            </div>
            <div className="h-4 bg-scope-dark-green/40 rounded-full overflow-hidden relative">
              <div
                className="h-full xp-bar rounded-full relative transition-all duration-100"
                style={{ width: `${currentXP}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-marquee" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Levels */}
        <div className="space-y-4">
          {levels.map((lvl, i) => {
            const isUnlocked = i <= activeLevel;
            const isCurrent = i === activeLevel;
            return (
              <Reveal key={lvl.level} delay={i * 100} variant="left">
                <div
                  className={`glass-card rounded-xl p-6 flex items-center gap-6 transition-all duration-500 ${
                    isCurrent
                      ? 'neon-border shadow-green-glow'
                      : isUnlocked
                      ? 'border border-scope-green/30'
                      : 'border border-gray-800 opacity-50'
                  }`}
                >
                  {/* Level number */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-xl ${
                    isUnlocked
                      ? 'bg-scope-green/15 border border-scope-green/40 text-scope-green'
                      : 'bg-gray-800/40 border border-gray-700 text-gray-600'
                  }`}>
                    {isUnlocked ? <lvl.icon className={`w-7 h-7 ${lvl.color}`} /> : <span className="text-2xl">?</span>}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-scope-green/50">LEVEL {lvl.level}</span>
                      {isCurrent && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-scope-green/15 border border-scope-green/40 text-scope-green animate-pulse-glow">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className={`font-display font-bold text-lg ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                      {isUnlocked ? lvl.title : '???'}
                    </h3>
                  </div>

                  {/* XP range */}
                  <div className="hidden md:block text-right">
                    <div className="text-xs font-mono text-gray-500">{lvl.xp}–{lvl.next} XP</div>
                    {isUnlocked && (
                      <div className="text-xs text-scope-green/60 mt-1">Unlocked</div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
