import { useEffect, useState } from 'react';
import RainBackground from './components/RainBackground';
import HeroSection from './components/HeroSection';
import ChatRecord from './components/ChatRecord';
import CoreIssues from './components/CoreIssues';
import HiddenIssues from './components/HiddenIssues';
import PersonalityBreakdown from './components/PersonalityBreakdown';
import Timeline from './components/Timeline';
import Guide from './components/Guide';
import Pitfalls from './components/Pitfalls';
import Footer from './components/Footer';

function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-night-950/70 backdrop-blur-xl border-b border-night-700/20">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-xs font-serif text-dawn/40 tracking-widest">然后呢</span>
          <div className="flex items-center gap-4">
            {[
              { label: '记录', href: '#chat' },
              { label: '剖析', href: '#core' },
              { label: '推演', href: '#timeline' },
              { label: '指南', href: '#guide' },
              { label: '误区', href: '#pitfalls' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] text-night-400/40 hover:text-dawn/50 transition-colors duration-300 tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen bg-night-950 text-fog">
      <RainBackground />
      <FloatingNav />

      {/* Content layers above rain */}
      <div className="relative z-10">
        <HeroSection />

        <div className="section-divider max-w-xs mx-auto" />

        <div id="chat">
          <ChatRecord />
        </div>

        <div className="section-divider max-w-xs mx-auto" />

        <div id="core">
          <CoreIssues />
        </div>

        <div className="section-divider max-w-xs mx-auto" />

        <HiddenIssues />

        <div className="section-divider max-w-xs mx-auto" />

        <PersonalityBreakdown />

        <div className="section-divider max-w-xs mx-auto" />

        <div id="timeline">
          <Timeline />
        </div>

        <div className="section-divider max-w-xs mx-auto" />

        <div id="guide">
          <Guide />
        </div>

        <div className="section-divider max-w-xs mx-auto" />

        <div id="pitfalls">
          <Pitfalls />
        </div>

        <div className="section-divider max-w-xs mx-auto" />

        <Footer />
      </div>
    </main>
  );
}
