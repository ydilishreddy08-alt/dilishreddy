import { useState } from 'react';
import {
  FileCode, Cpu, Binary, Coffee, Layout, Server, Smartphone, GitBranch, Cloud, Database, Brain, ChevronDown, ChevronUp, ArrowRight,
} from 'lucide-react';
import { Reveal } from './Reveal';

type Resource = {
  name: string;
  icon: typeof FileCode;
  description: string;
  level: number;
  path: string[];
};

const resources: Resource[] = [
  { name: 'PYTHON', icon: FileCode, description: 'Versatile language for scripting, data, and AI.', level: 2, path: ['Syntax basics', 'Data structures', 'OOP', 'Libraries (NumPy, Pandas)'] },
  { name: 'C', icon: Cpu, description: 'Foundational systems programming language.', level: 1, path: ['Variables & types', 'Pointers', 'Memory management', 'System calls'] },
  { name: 'C++', icon: Binary, description: 'Powerful language for performance-critical apps.', level: 2, path: ['C++ basics', 'STL containers', 'Templates', 'Advanced OOP'] },
  { name: 'JAVA', icon: Coffee, description: 'Enterprise-grade object-oriented programming.', level: 2, path: ['Java syntax', 'OOP concepts', 'Collections', 'Spring framework'] },
  { name: 'FRONTEND', icon: Layout, description: 'Build beautiful, interactive user interfaces.', level: 2, path: ['HTML & CSS', 'JavaScript', 'React', 'Advanced frameworks'] },
  { name: 'BACKEND', icon: Server, description: 'Server-side development and APIs.', level: 2, path: ['Node.js basics', 'REST APIs', 'Databases', 'Microservices'] },
  { name: 'APP DEVELOPMENT', icon: Smartphone, description: 'Build mobile apps for iOS and Android.', level: 1, path: ['Flutter/Dart basics', 'UI components', 'State management', 'Deployment'] },
  { name: 'GIT & GITHUB', icon: GitBranch, description: 'Version control and collaboration.', level: 1, path: ['Git basics', 'Branching', 'Pull requests', 'CI/CD'] },
  { name: 'AWS / CLOUD', icon: Cloud, description: 'Cloud computing and deployment.', level: 2, path: ['Cloud fundamentals', 'EC2 & S3', 'Lambda & Serverless', 'Architecture'] },
  { name: 'DATA STRUCTURES', icon: Database, description: 'Master the building blocks of algorithms.', level: 3, path: ['Arrays & linked lists', 'Trees & graphs', 'Dynamic programming', 'Advanced algorithms'] },
  { name: 'MACHINE LEARNING', icon: Brain, description: 'AI, neural networks, and data science.', level: 3, path: ['ML basics', 'Supervised learning', 'Neural networks', 'Deep learning'] },
];

const levelLabels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={index * 50}>
      <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-scope-green/10 border border-scope-green/30 flex items-center justify-center group-hover:shadow-green-glow-sm group-hover:scale-110 transition-all duration-300">
            <resource.icon className="w-6 h-6 text-scope-green" />
          </div>
          {/* XP-style level indicator */}
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((lvl) => (
              <div
                key={lvl}
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                  lvl <= resource.level
                    ? 'bg-scope-green/20 text-scope-green border border-scope-green/40'
                    : 'bg-scope-dark-green/30 text-gray-600 border border-gray-700'
                }`}
              >
                L{lvl}
              </div>
            ))}
          </div>
        </div>

        <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-scope-green transition-colors duration-300">
          {resource.name}
        </h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{resource.description}</p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-mono text-scope-green/60">
              {levelLabels[resource.level - 1]}
            </span>
            <span className="text-xs font-mono text-gray-500">
              {Math.round((resource.level / 3) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-scope-dark-green/40 rounded-full overflow-hidden">
            <div
              className="h-full xp-bar rounded-full"
              style={{ width: `${(resource.level / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Expandable learning path */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-mono text-scope-green/70 hover:text-scope-green transition-colors mb-2"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          LEARNING PATH
        </button>

        {expanded && (
          <div className="mt-2 mb-4 space-y-2 animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
            {resource.path.map((step, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 ${
                  i <= resource.level
                    ? 'bg-scope-green/15 border border-scope-green/40 text-scope-green'
                    : 'bg-scope-dark-green/30 border border-gray-700 text-gray-500'
                }`}>
                  {i + 1}
                </div>
                <span className={i <= resource.level ? 'text-gray-300' : 'text-gray-500'}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        )}

        <button className="flex items-center gap-2 text-sm font-bold text-scope-green hover:gap-3 transition-all duration-300 mt-2">
          START LEARNING
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-scope-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Reveal>
  );
}

export function Resources() {
  return (
    <section id="resources" className="relative section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <Database className="w-3.5 h-3.5 text-scope-green" />
            <span className="text-xs font-mono text-scope-green/80 tracking-wider">KNOWLEDGE BASE</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            RESOURCE <span className="gradient-text">CAVE</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to level up.</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <ResourceCard key={resource.name} resource={resource} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
