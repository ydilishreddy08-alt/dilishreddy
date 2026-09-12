import { CheckCircle, Loader, Circle, ArrowRight, Trophy, Wrench, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

const events = [
  {
    name: 'ZENITH',
    type: 'Event',
    status: 'Completed',
    description: 'A flagship technical fest bringing together students for a day of coding challenges, tech talks, and innovation showcases.',
    icon: Trophy,
    date: '2025',
  },
  {
    name: 'AWS CLOUD TREK',
    type: 'Workshop',
    status: 'Completed',
    description: 'An immersive workshop series exploring cloud computing, AWS services, and modern cloud architecture through hands-on labs.',
    icon: Wrench,
    date: '2026',
  },
  {
    name: "TODAY'S WORKSHOP",
    type: 'Workshop',
    status: 'Ongoing',
    description: 'A live, hands-on session diving deep into modern web development and building real projects with the community.',
    icon: Calendar,
    date: 'Live now',
  },
];

const questStages = ['START', 'EXPLORE', 'BUILD', 'COMPETE', 'MASTER'];

function StatusBadge({ status }: { status: string }) {
  const isCompleted = status === 'Completed';
  const isOngoing = status === 'Ongoing';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide ${
        isCompleted
          ? 'bg-scope-emerald/10 border border-scope-emerald/40 text-scope-emerald'
          : isOngoing
          ? 'bg-scope-green/10 border border-scope-green/40 text-scope-green animate-pulse-glow'
          : 'bg-gray-700/30 border border-gray-600/40 text-gray-400'
      }`}
    >
      {isCompleted && <CheckCircle className="w-3 h-3" />}
      {isOngoing && <Loader className="w-3 h-3 animate-spin" />}
      {!isCompleted && !isOngoing && <Circle className="w-3 h-3" />}
      {status.toUpperCase()}
    </span>
  );
}

export function Events() {
  return (
    <section id="events" className="relative section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <span className="w-2 h-2 bg-scope-green rounded-sm animate-pulse-glow" />
            <span className="text-xs font-mono text-scope-green/80 tracking-wider">QUEST LOG</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            <span className="gradient-text">EVENTS</span>
          </h2>
          <p className="text-gray-400 text-lg">Adventures already completed. More quests ahead.</p>
        </Reveal>

        {/* Quest progression timeline */}
        <Reveal className="mb-16">
          <div className="relative flex items-center justify-between max-w-4xl mx-auto px-4">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 timeline-line -translate-y-1/2" />

            {/* Stages */}
            {questStages.map((stage, i) => (
              <div key={stage} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-mono text-xs font-bold border-2 transition-all duration-500 ${
                    i === 0
                      ? 'bg-scope-green/20 border-scope-green text-scope-green shadow-green-glow-sm'
                      : i < 3
                      ? 'bg-scope-emerald/15 border-scope-emerald/50 text-scope-emerald'
                      : 'bg-scope-dark-green/40 border-scope-green/20 text-scope-green/40'
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {i + 1}
                </div>
                <span className="mt-2 text-xs font-mono text-gray-400 tracking-wider hidden md:block">{stage}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <Reveal key={event.name} delay={i * 150}>
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full relative overflow-hidden group">
                {/* Top icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-scope-green/10 border border-scope-green/30 flex items-center justify-center group-hover:shadow-green-glow-sm group-hover:scale-110 transition-all duration-300">
                    <event.icon className="w-6 h-6 text-scope-green" />
                  </div>
                  <StatusBadge status={event.status} />
                </div>

                {/* Event name */}
                <h3 className="font-display font-bold text-xl text-white mb-2 tracking-wide group-hover:text-scope-green transition-colors duration-300">
                  {event.name}
                </h3>

                {/* Type */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-scope-dark-green/40 border border-scope-green/20 text-scope-green/70">
                    {event.type}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{event.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Button */}
                <button className="flex items-center gap-2 text-sm font-bold text-scope-green hover:gap-3 transition-all duration-300 group/btn">
                  VIEW EVENT
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

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
