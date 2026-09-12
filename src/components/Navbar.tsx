import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WHAT WE DO', href: '#what-we-do' },
  { label: 'EVENTS', href: '#events' },
  { label: 'RESOURCES', href: '#resources' },
  { label: 'FIND', href: '#find' },
  { label: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-scope-black/80 backdrop-blur-xl border-b border-scope-green/15 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('#home')}>
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-scope-green/20 to-scope-emerald/20 border border-scope-green/40 flex items-center justify-center group-hover:shadow-green-glow-sm transition-all duration-300">
              <Terminal className="w-5 h-5 text-scope-green" />
            </div>
            <div className="absolute -inset-1 rounded-lg bg-scope-green/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-white tracking-wider leading-none">SCOPE</h1>
            <p className="text-[10px] text-scope-green/60 font-mono tracking-wide leading-tight mt-0.5">
              Student Community of Programming & Exploration
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-scope-green transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-scope-green group-hover:w-full transition-all duration-300 shadow-green-glow-sm" />
            </button>
          ))}
        </div>

        {/* Join button */}
        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden lg:flex neon-btn px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide items-center gap-2"
        >
          <span className="w-2 h-2 bg-scope-green rounded-sm animate-pulse-glow" />
          JOIN SCOPE
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-scope-green p-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2 bg-scope-black/95 backdrop-blur-xl border-t border-scope-green/10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-scope-green hover:bg-scope-green/5 rounded-lg transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="neon-btn px-5 py-3 rounded-lg text-sm font-bold tracking-wide mt-2"
          >
            JOIN SCOPE
          </button>
        </div>
      </div>
    </nav>
  );
}
