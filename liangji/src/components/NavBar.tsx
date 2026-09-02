import { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const chapters = [
  { id: 'prologue', label: '序章' },
  { id: 'ch1', label: '第一章' },
  { id: 'ch2', label: '第二章' },
  { id: 'ch3', label: '第三章' },
  { id: 'ch4', label: '第四章' },
  { id: 'ch5', label: '第五章' },
  { id: 'ch6', label: '第六章' },
  { id: 'ch7', label: '第七章' },
  { id: 'ch8', label: '第八章' },
  { id: 'ch9', label: '第九章' },
];

export default function NavBar() {
  const progress = useScrollProgress();
  const [currentChapter, setCurrentChapter] = useState('序章');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
      
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setCurrentChapter(chapters[i].label);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-peach/20 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-[Poppins] font-semibold text-peach text-sm">御风记</span>
          <span className="text-taupe text-xs">|</span>
          <span className="text-charcoal text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{currentChapter}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => document.getElementById(ch.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                currentChapter === ch.label
                  ? 'bg-peach text-white'
                  : 'text-taupe hover:text-charcoal hover:bg-peach/10'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-0.5 bg-peach/10">
        <div
          className="h-full bg-peach transition-all duration-150 ease-out rounded-r-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
