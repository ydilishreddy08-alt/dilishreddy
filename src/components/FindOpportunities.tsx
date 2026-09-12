import { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, Zap, Clock, Signal } from 'lucide-react';
import { Reveal } from './Reveal';

type Opportunity = {
  name: string;
  category: string;
  technology: string;
  deadline: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Open' | 'Closing soon' | 'Ongoing';
};

const opportunities: Opportunity[] = [
  { name: 'HackTheNorth 2026', category: 'Hackathons', technology: 'React, Node.js', deadline: 'Mar 15', difficulty: 'Intermediate', status: 'Open' },
  { name: 'AWS Cloud Workshop', category: 'Workshops', technology: 'AWS, Cloud', deadline: 'This week', difficulty: 'Beginner', status: 'Ongoing' },
  { name: 'CodeFest Competitive', category: 'Coding contests', technology: 'DSA, C++', deadline: 'Apr 2', difficulty: 'Advanced', status: 'Open' },
  { name: 'Open Source Project', category: 'Projects', technology: 'Python, Git', deadline: 'Rolling', difficulty: 'Intermediate', status: 'Open' },
  { name: 'Summer Internship', category: 'Internships', technology: 'Full-stack', deadline: 'Feb 28', difficulty: 'Intermediate', status: 'Closing soon' },
  { name: 'ML Bootcamp', category: 'Learning resources', technology: 'Python, TensorFlow', deadline: 'May 10', difficulty: 'Advanced', status: 'Open' },
  { name: 'Flutter App Challenge', category: 'Projects', technology: 'Flutter, Dart', deadline: 'Mar 20', difficulty: 'Intermediate', status: 'Open' },
  { name: 'Frontend Mastery', category: 'Learning resources', technology: 'React, CSS', deadline: 'Self-paced', difficulty: 'Beginner', status: 'Ongoing' },
  { name: 'Cloud Trek Hackathon', category: 'Events', technology: 'AWS, Serverless', deadline: 'Jun 5', difficulty: 'Advanced', status: 'Open' },
];

const categories = ['All', 'Hackathons', 'Workshops', 'Coding contests', 'Projects', 'Internships', 'Events', 'Learning resources'];
const technologies = ['All', 'React', 'Python', 'AWS', 'C++', 'Node.js', 'Flutter', 'Git'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

function DifficultyBadge({ level }: { level: Opportunity['difficulty'] }) {
  const bars = level === 'Beginner' ? 1 : level === 'Intermediate' ? 2 : 3;
  return (
    <div className="flex items-center gap-1">
      <Signal className="w-3.5 h-3.5 text-scope-green/60" />
      <div className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-1 h-3 rounded-sm ${i <= bars ? 'bg-scope-green' : 'bg-scope-green/20'}`}
          />
        ))}
      </div>
      <span className="text-xs text-gray-400 font-mono">{level}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: Opportunity['status'] }) {
  const color =
    status === 'Open' ? 'text-scope-green border-scope-green/40 bg-scope-green/10'
    : status === 'Closing soon' ? 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10'
    : 'text-scope-emerald border-scope-emerald/40 bg-scope-emerald/10';
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono border ${color}`}>
      <Clock className="w-3 h-3" />
      {status}
    </span>
  );
}

export function FindOpportunities() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTech, setActiveTech] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');

  const filtered = useMemo(() => {
    return opportunities.filter((opp) => {
      const matchSearch = opp.name.toLowerCase().includes(search.toLowerCase()) || opp.technology.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === 'All' || opp.category === activeCategory;
      const matchTech = activeTech === 'All' || opp.technology.includes(activeTech);
      const matchLevel = activeLevel === 'All' || opp.difficulty === activeLevel;
      return matchSearch && matchCategory && matchTech && matchLevel;
    });
  }, [search, activeCategory, activeTech, activeLevel]);

  return (
    <section id="find" className="relative section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <Zap className="w-3.5 h-3.5 text-scope-green" />
            <span className="text-xs font-mono text-scope-green/80 tracking-wider">DISCOVER</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            FIND YOUR <span className="gradient-text">NEXT QUEST</span>
          </h2>
          <p className="text-gray-400 text-lg">Search through opportunities tailored for your developer journey.</p>
        </Reveal>

        {/* Search interface */}
        <Reveal>
          <div className="glass-card neon-border rounded-2xl p-6 md:p-8 mb-8">
            {/* Search bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-scope-green/50" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search opportunities..."
                className="w-full pl-12 pr-4 py-4 bg-scope-black/50 border border-scope-green/20 rounded-xl text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-scope-green/50 focus:shadow-green-glow-sm transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="space-y-4">
              {/* Category */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="w-4 h-4 text-scope-green/60" />
                  <span className="text-xs font-mono text-scope-green/70 tracking-wider">CATEGORY</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        activeCategory === cat
                          ? 'bg-scope-green/15 border border-scope-green/50 text-scope-green shadow-green-glow-sm'
                          : 'bg-scope-dark-green/20 border border-scope-green/10 text-gray-400 hover:text-scope-green hover:border-scope-green/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technology */}
              <div>
                <span className="text-xs font-mono text-scope-green/70 tracking-wider mb-2 block">TECHNOLOGY</span>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setActiveTech(tech)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        activeTech === tech
                          ? 'bg-scope-green/15 border border-scope-green/50 text-scope-green shadow-green-glow-sm'
                          : 'bg-scope-dark-green/20 border border-scope-green/10 text-gray-400 hover:text-scope-green hover:border-scope-green/30'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div>
                <span className="text-xs font-mono text-scope-green/70 tracking-wider mb-2 block">LEVEL</span>
                <div className="flex flex-wrap gap-2">
                  {levels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setActiveLevel(lvl)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        activeLevel === lvl
                          ? 'bg-scope-green/15 border border-scope-green/50 text-scope-green shadow-green-glow-sm'
                          : 'bg-scope-dark-green/20 border border-scope-green/10 text-gray-400 hover:text-scope-green hover:border-scope-green/30'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 font-mono">No quests found. Try different filters.</p>
            </div>
          ) : (
            filtered.map((opp, i) => (
              <Reveal key={opp.name} delay={i * 50}>
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full relative overflow-hidden group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-scope-dark-green/40 border border-scope-green/20 text-scope-green/70">
                      {opp.category}
                    </span>
                    <StatusBadge status={opp.status} />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-scope-green transition-colors duration-300">
                    {opp.name}
                  </h3>

                  <p className="text-sm text-gray-400 mb-3">
                    <span className="text-scope-green/60 font-mono">Tech:</span> {opp.technology}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <DifficultyBadge level={opp.difficulty} />
                    <span className="text-xs text-gray-500 font-mono">{opp.deadline}</span>
                  </div>

                  <button className="flex items-center gap-2 text-sm font-bold text-scope-green hover:gap-3 transition-all duration-300">
                    EXPLORE
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-scope-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Reveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
