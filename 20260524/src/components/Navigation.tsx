import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: '🌌 Home', emoji: '🏠' },
  { id: 'star-birth', label: '⭐ Star Birth', emoji: '⭐' },
  { id: 'star-life', label: '🌟 Star Life', emoji: '🌟' },
  { id: 'star-death', label: '💫 Star Death', emoji: '💫' },
  { id: 'supernova', label: '💥 Supernova', emoji: '💥' },
  { id: 'neutron-stars', label: '🔮 Neutron Stars', emoji: '🔮' },
  { id: 'black-holes', label: '🕳️ Black Holes', emoji: '🕳️' },
  { id: 'gravity-sim', label: '🎮 Gravity Sim', emoji: '🎮' },
  { id: 'fun-facts', label: '🤯 Fun Facts', emoji: '🤯' },
  { id: 'quiz', label: '📝 Quiz', emoji: '📝' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-blur bg-space-900/80 shadow-lg shadow-purple-900/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollTo('hero')}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🌌</span>
              <span className="font-bold text-sm sm:text-base bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Monsters of the Universe
              </span>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />
            <motion.div
              className="absolute right-0 top-16 w-64 bg-space-900/95 nav-blur border-l border-purple-500/20 h-[calc(100vh-4rem)] overflow-y-auto"
              initial={{ x: 264 }}
              animate={{ x: 0 }}
              exit={{ x: 264 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
