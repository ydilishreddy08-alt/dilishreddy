import { Rocket, Code2, FolderGit2, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';

const activities = [
  {
    icon: Rocket,
    title: 'HACKATHONS',
    description: 'Challenge yourself, solve real problems and build innovative solutions.',
    tags: ['48h sprints', 'Team building', 'Innovation'],
    delay: 0,
  },
  {
    icon: Code2,
    title: 'CODING CONTESTS',
    description: 'Sharpen your problem-solving skills through competitive programming.',
    tags: ['DSA', 'Algorithms', 'Speed coding'],
    delay: 100,
  },
  {
    icon: FolderGit2,
    title: 'PROJECTS',
    description: 'Collaborate with students and transform ideas into working products.',
    tags: ['Open source', 'Teamwork', 'Real-world impact'],
    delay: 200,
  },
  {
    icon: Wrench,
    title: 'WORKSHOPS',
    description: 'Learn practical technologies through hands-on sessions.',
    tags: ['Hands-on', 'Mentorship', 'Skill building'],
    delay: 300,
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <span className="w-2 h-2 bg-scope-green rounded-sm animate-pulse-glow" />
            <span className="text-xs font-mono text-scope-green/80 tracking-wider">OUR ACTIVITIES</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            WHAT <span className="gradient-text">WE DO</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <Reveal key={activity.title} delay={activity.delay}>
              <div className="glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden group h-full">
                {/* Particle effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-scope-green rounded-full"
                      style={{
                        top: `${20 + i * 12}%`,
                        left: `${10 + i * 15}%`,
                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                        boxShadow: '0 0 6px rgba(57, 255, 20, 0.8)',
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-start gap-6 relative">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-scope-green/15 to-scope-emerald/10 border border-scope-green/30 flex items-center justify-center group-hover:shadow-green-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <activity.icon className="w-8 h-8 text-scope-green group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-wide group-hover:text-scope-green transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activity.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-scope-green/5 border border-scope-green/20 text-scope-green/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-scope-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
