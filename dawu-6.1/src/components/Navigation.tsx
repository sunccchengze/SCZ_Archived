import React from 'react';
import { Chapter } from '../data/chapters';

interface NavigationProps {
  chapters: Chapter[];
  activeChapter: string;
  activeSection: string;
  onChapterClick: (chapterId: string) => void;
  onSectionClick: (chapterId: string, sectionId: string) => void;
  progress: { [key: string]: boolean };
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  chapters,
  activeChapter,
  activeSection,
  onChapterClick,
  onSectionClick,
  progress,
  isMobileOpen,
  onMobileClose
}) => {
  const completedCount = Object.values(progress).filter(Boolean).length;
  const totalSections = chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
  const progressPercent = Math.round((completedCount / totalSections) * 100);

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/70 z-40"
          onClick={onMobileClose}
        />
      )}

      {/* Navigation sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-72 bg-[#0a0a0f] border-r border-[#9d4edd]/20 z-50
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-[#9d4edd]/20">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-display text-lg text-[#e8e8e8] tracking-wider">
              PHYSICS II
            </h1>
            <button 
              onClick={onMobileClose}
              className="lg:hidden text-[#808080] hover:text-[#e8e8e8]"
            >
              ✕
            </button>
          </div>
          <p className="text-[#808080] text-sm font-tech">大学物理（下）期末复习</p>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-[#808080] mb-1">
              <span>学习进度</span>
              <span className="text-[#00d4ff]">{progressPercent}%</span>
            </div>
            <div className="h-1 bg-[#1a1a25] rounded-full overflow-hidden">
              <div 
                className="h-full progress-bar rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Chapter list */}
        <div className="overflow-y-auto h-[calc(100%-180px)] py-4">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="mb-2">
              {/* Chapter header */}
              <button
                onClick={() => onChapterClick(chapter.id)}
                className={`
                  w-full px-6 py-3 flex items-center gap-3 text-left transition-all duration-200
                  ${activeChapter === chapter.id 
                    ? 'bg-[#9d4edd]/10 text-[#c77dff] nav-active' 
                    : 'text-[#808080] hover:text-[#c0c0c0] hover:bg-[#1a1a25]/50'
                  }
                `}
              >
                <span className="text-lg">{chapter.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xs opacity-50">
                      {chapter.number}
                    </span>
                    <span className="font-tech text-sm truncate">
                      {chapter.title}
                    </span>
                  </div>
                </div>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeChapter === chapter.id ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Section list */}
              {activeChapter === chapter.id && (
                <div className="ml-8 border-l border-[#333] slide-in-right">
                  {chapter.sections.map((section) => {
                    const isCompleted = progress[`${chapter.id}-${section.id}`];
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          onSectionClick(chapter.id, section.id);
                          onMobileClose();
                        }}
                        className={`
                          w-full px-4 py-2 text-left text-sm transition-all duration-200 flex items-center gap-2
                          ${activeSection === section.id 
                            ? 'text-[#00d4ff] border-l-2 border-[#00d4ff] -ml-px bg-[#00d4ff]/5' 
                            : 'text-[#666] hover:text-[#c0c0c0] hover:border-l-2 hover:border-[#666] hover:-ml-px'
                          }
                        `}
                      >
                        {isCompleted && (
                          <span className="text-green-400 text-xs">✓</span>
                        )}
                        <span className="truncate">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#9d4edd]/20 bg-[#0a0a0f]">
          <p className="text-[#666] text-xs text-center font-tech">
            彭康书院学业辅导中心
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
