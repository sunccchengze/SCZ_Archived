import { sections } from '../data/sections';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activeSection, onNavigate, isOpen, onClose }: SidebarProps) {
  const handleClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-void/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <nav
        className={`fixed top-0 left-0 z-50 h-full w-72 border-r border-cyan-border/40 bg-abyss/95 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="border-b border-cyan-border/30 px-6 py-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cyan-dim">
              XJTU · 彭康书院
            </span>
          </div>
          <h1
            className="text-lg font-bold text-silver-100 tracking-tight mt-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            高等数学（下）
          </h1>
          <p className="text-xs text-silver-400 mt-0.5">期末冲刺复习讲座</p>
        </div>

        {/* Nav items */}
        <div className="sidebar-scroll overflow-y-auto h-[calc(100%-140px)] px-3 py-4">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id ||
              sec.subsections?.some((sub) => activeSection === sub.id);

            return (
              <div key={sec.id} className="mb-1">
                <button
                  onClick={() => handleClick(sec.id)}
                  className={`w-full text-left rounded-lg px-3 py-2.5 text-sm transition-all relative ${
                    isActive && !sec.subsections
                      ? 'nav-active bg-cyan-glow/[0.06] text-cyan-glow font-medium'
                      : isActive && sec.subsections
                      ? 'text-silver-100 font-medium'
                      : 'text-silver-400 hover:text-silver-200 hover:bg-slate-mid/40'
                  }`}
                >
                  <span className="mr-2.5 text-xs opacity-60">{sec.icon}</span>
                  {sec.shortTitle}
                </button>

                {/* Subsections */}
                {sec.subsections && isActive && (
                  <div className="ml-4 mt-0.5 mb-2 border-l border-cyan-border/30 pl-3 animate-fade-in">
                    {sec.subsections.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleClick(sub.id)}
                        className={`w-full text-left rounded-md px-2.5 py-1.5 text-xs transition-all ${
                          activeSection === sub.id
                            ? 'text-cyan-glow font-medium'
                            : 'text-silver-400 hover:text-silver-200'
                        }`}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-cyan-border/20 px-6 py-3 bg-abyss/90">
          <p className="font-mono text-[9px] tracking-wider text-silver-400/50 uppercase">
            学业辅导与发展中心
          </p>
        </div>
      </nav>
    </>
  );
}
