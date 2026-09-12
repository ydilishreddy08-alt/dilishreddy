import { Terminal, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-scope-green/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-scope-green/20 to-scope-emerald/20 border border-scope-green/40 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-scope-green" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white tracking-wider">SCOPE</h3>
            </div>
            <p className="text-scope-green font-display font-medium text-lg mb-2">Build. Explore. Compete. Create.</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A student-driven programming community where developers learn, build, and grow together.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-mono text-scope-green/70 tracking-wider mb-4">QUICK LINKS</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-gray-400 hover:text-scope-green transition-colors duration-300 w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-mono text-scope-green/70 tracking-wider mb-4">FOLLOW US</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-scope-dark-green/30 border border-scope-green/20 flex items-center justify-center text-gray-400 hover:text-scope-green hover:shadow-green-glow-sm hover:scale-110 hover:border-scope-green/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-scope-green transition-colors duration-300 group"
            >
              <span className="w-8 h-8 rounded-lg border border-scope-green/20 flex items-center justify-center group-hover:border-scope-green/50 group-hover:shadow-green-glow-sm transition-all duration-300">
                <ArrowUp className="w-4 h-4" />
              </span>
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-scope-green/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-mono">
            © 2026 SCOPE Club. Built by students, powered by curiosity.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-scope-green rounded-sm animate-pulse-glow" />
            <span className="text-xs font-mono text-scope-green/50">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
