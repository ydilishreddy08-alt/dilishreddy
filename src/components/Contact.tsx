import { useState } from 'react';
import { Mail, Instagram, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top, id });
    setTimeout(() => setRipple(null), 600);
  };

  const socials = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-white' },
  ];

  return (
    <section id="contact" className="relative section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <Mail className="w-3.5 h-3.5 text-scope-green" />
            <span className="text-xs font-mono text-scope-green/80 tracking-wider">CONNECT</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            ENTER THE <span className="gradient-text">COMMUNITY</span>
          </h2>
          <p className="text-gray-400 text-lg">Join the conversation. Build something great together.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <Reveal variant="left">
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Get in touch</h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-scope-green/10 border border-scope-green/30 flex items-center justify-center group-hover:shadow-green-glow-sm group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-scope-green" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-scope-green/60 tracking-wider">EMAIL</p>
                    <p className="text-gray-300 text-sm">scope@community.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-scope-green/10 border border-scope-green/30 flex items-center justify-center group-hover:shadow-green-glow-sm group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-scope-green" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-scope-green/60 tracking-wider">LOCATION</p>
                    <p className="text-gray-300 text-sm">Student Community Hub</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 pt-8 border-t border-scope-green/10">
                <p className="text-xs font-mono text-scope-green/60 tracking-wider mb-4">FOLLOW US</p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 rounded-xl bg-scope-dark-green/30 border border-scope-green/20 flex items-center justify-center text-gray-400 ${social.color} hover:shadow-green-glow-sm hover:scale-110 hover:border-scope-green/50 transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal variant="right">
            <form onSubmit={handleSubmit} className="glass-card neon-border rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-xs font-mono text-scope-green/70 tracking-wider block mb-2">NAME</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-scope-black/50 border border-scope-green/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-scope-green/50 focus:shadow-green-glow-sm transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-scope-green/70 tracking-wider block mb-2">EMAIL</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-scope-black/50 border border-scope-green/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-scope-green/50 focus:shadow-green-glow-sm transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-scope-green/70 tracking-wider block mb-2">MESSAGE</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your ideas..."
                  rows={4}
                  className="w-full px-4 py-3 bg-scope-black/50 border border-scope-green/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-scope-green/50 focus:shadow-green-glow-sm transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                onClick={handleRipple}
                className="neon-btn w-full py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2 relative overflow-hidden"
              >
                {ripple && (
                  <span
                    className="ripple"
                    style={{
                      left: ripple.x - 50,
                      top: ripple.y - 50,
                      width: 100,
                      height: 100,
                    }}
                  />
                )}
                {sent ? (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-scope-green rounded-full animate-pulse-glow" />
                    MESSAGE SENT
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    SEND MESSAGE
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
