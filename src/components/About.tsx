import { BookOpen, Hammer, Trophy, Users } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    icon: BookOpen,
    title: 'LEARN',
    description: 'Build strong foundations in programming and technology.',
    delay: 0,
  },
  {
    icon: Hammer,
    title: 'BUILD',
    description: 'Turn ideas into real-world projects.',
    delay: 100,
  },
  {
    icon: Trophy,
    title: 'COMPETE',
    description: 'Participate in hackathons and coding contests.',
    delay: 200,
  },
  {
    icon: Users,
    title: 'CONNECT',
    description: 'Meet passionate students, developers and technology enthusiasts.',
    delay: 300,
  },
];

export function About() {
  return (
    <section id="about" className="relative section-pad px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <span className="w-2 h-2 bg-scope-green rounded-sm animate-pulse-glow" />
            <span className="text-xs font-mono text-scope-green/80 tracking-wider">INSIDE SCOPE</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            More than a club. <span className="gradient-text">A world of builders.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            SCOPE is a student-driven programming community where curiosity meets code.
            We learn together, build together, and grow together — exploring the vast
            landscape of technology one block at a time.
          </p>
        </Reveal>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Reveal key={feature.title} delay={feature.delay}>
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full relative overflow-hidden group">
                {/* Block decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="grid grid-cols-4 gap-0.5">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-scope-green rounded-sm" />
                    ))}
                  </div>
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-scope-green/10 border border-scope-green/30 flex items-center justify-center group-hover:shadow-green-glow-sm transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-scope-green" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-scope-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
