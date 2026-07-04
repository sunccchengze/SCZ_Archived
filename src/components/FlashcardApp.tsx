'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Check, 
  X, 
  Shuffle, 
  BarChart3, 
  HelpCircle, 
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Eye,
  EyeOff,
  Sparkles,
  Trophy,
  Flame,
  Target,
  Zap,
  Brain,
  Layers,
  Clock,
  Filter,
  RotateCcw,
} from 'lucide-react';
import { flashcards, layers, type Flashcard } from '@/data/flashcards';
import { 
  useLocalStorage, 
  initialProgress, 
  initialCardState, 
  type LearningProgress, 
  type CardState 
} from '@/hooks/useLocalStorage';

// Confetti component
const Confetti = ({ show }: { show: boolean }) => {
  if (!show) return null;
  
  const colors = ['#D97757', '#6A8C5F', '#C9973B', '#6A9BCC', '#B84A3A'];
  const shapes = ['circle', 'square', 'triangle'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 60 }).map((_, i) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 6 + Math.random() * 10;
        
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20px',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: shape !== 'triangle' ? color : 'transparent',
              borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? '2px' : '0',
              borderLeft: shape === 'triangle' ? `${size/2}px solid transparent` : undefined,
              borderRight: shape === 'triangle' ? `${size/2}px solid transparent` : undefined,
              borderBottom: shape === 'triangle' ? `${size}px solid ${color}` : undefined,
              animation: `confetti ${2 + Math.random() * 2}s ease-out forwards`,
              animationDelay: `${Math.random() * 0.8}s`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
          25% { transform: translateY(25vh) rotate(180deg) scale(1.1); opacity: 1; }
          50% { transform: translateY(50vh) rotate(360deg) scale(1); opacity: 0.9; }
          75% { transform: translateY(75vh) rotate(540deg) scale(0.8); opacity: 0.6; }
          100% { transform: translateY(100vh) rotate(720deg) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Sparkle effect component
const SparkleEffect = ({ show }: { show: boolean }) => {
  if (!show) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[var(--color-warning)] rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animation: `sparkle ${0.5 + Math.random() * 0.5}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.3}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes sparkle {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(2); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Welcome modal for first-time users
const WelcomeModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="card p-8 max-w-lg w-full animate-scale-in text-center" onClick={e => e.stopPropagation()}>
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center mx-auto mb-6 shadow-lg floating">
          <Brain className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-2xl font-bold mb-3 font-[family-name:var(--font-heading)] gradient-text">
          欢迎使用 AI 核心概念闪卡
        </h2>
        
        <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
          38张精选闪卡，覆盖AI领域7大核心层级。通过键盘快捷键高效学习，支持收藏、标记掌握程度、错题复习等功能。
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="bg-[var(--color-surface-2)] rounded-lg p-3 flex items-center gap-2">
            <kbd className="kbd">←</kbd><kbd className="kbd">→</kbd>
            <span className="text-[var(--color-text-muted)]">切换卡片</span>
          </div>
          <div className="bg-[var(--color-surface-2)] rounded-lg p-3 flex items-center gap-2">
            <kbd className="kbd">Enter</kbd>
            <span className="text-[var(--color-text-muted)]">翻转卡片</span>
          </div>
          <div className="bg-[var(--color-surface-2)] rounded-lg p-3 flex items-center gap-2">
            <kbd className="kbd">M</kbd>
            <span className="text-[var(--color-text-muted)]">标记掌握</span>
          </div>
          <div className="bg-[var(--color-surface-2)] rounded-lg p-3 flex items-center gap-2">
            <kbd className="kbd">F</kbd>
            <span className="text-[var(--color-text-muted)]">收藏卡片</span>
          </div>
        </div>
        
        <button onClick={onClose} className="btn btn-primary w-full">
          <Sparkles className="w-5 h-5" />
          开始学习
        </button>
        
        <p className="mt-4 text-xs text-[var(--color-text-faint)]">
          按 <kbd className="kbd text-[10px]">?</kbd> 随时查看所有快捷键
        </p>
      </div>
    </div>
  );
};

// Card navigation mini view
const CardNavigator = ({ 
  cards, 
  currentIndex, 
  cardStates, 
  onSelect, 
  onClose 
}: { 
  cards: Flashcard[];
  currentIndex: number;
  cardStates: Record<number, CardState>;
  onSelect: (index: number) => void;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="card p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)]">快速导航</h2>
          <span className="text-sm text-[var(--color-text-muted)]">{cards.length} 张卡片</span>
        </div>
        
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 overflow-y-auto max-h-[60vh] p-1">
          {cards.map((card, index) => {
            const state = cardStates[card.id] || initialCardState;
            const isCurrent = index === currentIndex;
            
            return (
              <button
                key={card.id}
                onClick={() => {
                  onSelect(index);
                  onClose();
                }}
                className={`relative aspect-square rounded-lg p-2 text-xs font-medium transition-all ${
                  isCurrent 
                    ? 'bg-[var(--color-primary)] text-white ring-2 ring-[var(--color-primary)] ring-offset-2' 
                    : 'bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-1)] hover:shadow-md'
                }`}
                title={card.conceptName}
              >
                <span className="absolute top-1 left-1 text-[10px] opacity-60">#{card.id}</span>
                <div className="h-full flex items-center justify-center">
                  <span className="text-lg">{card.layerEmoji}</span>
                </div>
                
                {/* Status indicators */}
                <div className="absolute bottom-1 right-1 flex gap-0.5">
                  {state.mastered === true && (
                    <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                  )}
                  {state.mastered === false && (
                    <span className="w-2 h-2 rounded-full bg-[var(--color-error)]" />
                  )}
                  {state.favorited && (
                    <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" /> 已掌握
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--color-error)]" /> 未掌握
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]" /> 已收藏
          </span>
        </div>
      </div>
    </div>
  );
};

// Keyboard shortcut display component
const KeyboardShortcuts = ({ onClose }: { onClose: () => void }) => {
  const shortcuts = [
    { key: '← / →', desc: '切换上一题/下一题' },
    { key: 'Enter', desc: '翻转卡片' },
    { key: 'Space', desc: '展开/收起解析' },
    { key: 'M', desc: '标记为已掌握' },
    { key: 'N', desc: '标记为未掌握' },
    { key: 'F', desc: '收藏/取消收藏' },
    { key: 'R', desc: '随机跳转' },
    { key: 'G', desc: '快速导航' },
    { key: 'S', desc: '显示学习统计' },
    { key: '?', desc: '显示快捷键帮助' },
    { key: 'Esc', desc: '关闭弹窗' },
  ];

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="card p-8 max-w-md w-full animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)]">键盘快捷键</h2>
        </div>
        <div className="space-y-3">
          {shortcuts.map(({ key, desc }) => (
            <div key={key} className="flex items-center justify-between py-2 border-b border-[var(--color-border-faint)] last:border-0">
              <span className="text-[var(--color-text-muted)]">{desc}</span>
              <kbd className="kbd">{key}</kbd>
            </div>
          ))}
        </div>
        <button 
          onClick={onClose}
          className="btn btn-primary w-full mt-6"
        >
          知道了
        </button>
      </div>
    </div>
  );
};

// Statistics Modal
const StatsModal = ({ 
  progress, 
  onClose 
}: { 
  progress: LearningProgress; 
  onClose: () => void;
}) => {
  const totalCards = flashcards.length;
  const answeredCards = Object.values(progress.cardStates).filter(s => s.answered).length;
  const correctCards = Object.values(progress.cardStates).filter(s => s.correct === true).length;
  const masteredCards = Object.values(progress.cardStates).filter(s => s.mastered === true).length;
  const notMasteredCards = Object.values(progress.cardStates).filter(s => s.mastered === false).length;
  const favoritedCards = Object.values(progress.cardStates).filter(s => s.favorited).length;
  const wrongCards = progress.wrongCards.length;

  const accuracy = answeredCards > 0 ? Math.round((correctCards / answeredCards) * 100) : 0;
  const progressPercent = Math.round((masteredCards / totalCards) * 100);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}小时${minutes}分钟`;
    return `${minutes}分钟`;
  };

  const stats = [
    { icon: BookOpen, label: '已学习', value: `${answeredCards}/${totalCards}`, color: 'var(--color-info)' },
    { icon: Target, label: '正确率', value: `${accuracy}%`, color: 'var(--color-success)' },
    { icon: Trophy, label: '已掌握', value: masteredCards, color: 'var(--color-warning)' },
    { icon: X, label: '未掌握', value: notMasteredCards, color: 'var(--color-error)' },
    { icon: Bookmark, label: '收藏', value: favoritedCards, color: 'var(--color-primary)' },
    { icon: RotateCcw, label: '待复习', value: wrongCards, color: 'var(--color-text-muted)' },
    { icon: Flame, label: '连续天数', value: `${progress.streakDays}天`, color: '#FF6B35' },
    { icon: Clock, label: '学习时长', value: formatTime(progress.totalStudyTime), color: 'var(--color-info)' },
  ];

  // Layer progress
  const layerProgress = layers.map(layer => {
    const layerCards = flashcards.filter(c => c.layer === layer.name);
    const masteredInLayer = layerCards.filter(c => progress.cardStates[c.id]?.mastered === true).length;
    return {
      ...layer,
      total: layerCards.length,
      mastered: masteredInLayer,
      percent: Math.round((masteredInLayer / layerCards.length) * 100),
    };
  });

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)]">学习统计</h2>
        </div>

        {/* Overall Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--color-text-muted)]">总体掌握进度</span>
            <span className="text-sm font-semibold">{progressPercent}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-[var(--color-surface-2)] rounded-lg p-4 text-center">
              <Icon className="w-5 h-5 mx-auto mb-2" style={{ color }} />
              <div className="text-2xl font-bold font-[family-name:var(--font-heading)]" style={{ color }}>{value}</div>
              <div className="text-xs text-[var(--color-text-muted)]">{label}</div>
            </div>
          ))}
        </div>

        {/* Layer Progress */}
        <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">各层级进度</h3>
        <div className="space-y-3">
          {layerProgress.map(layer => (
            <div key={layer.name} className="bg-[var(--color-surface-2)] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span>{layer.emoji}</span>
                  <span className="text-sm font-medium">{layer.name}</span>
                </div>
                <span className="text-sm text-[var(--color-text-muted)]">{layer.mastered}/{layer.total}</span>
              </div>
              <div className="progress-bar h-2">
                <div 
                  className="h-full rounded-full transition-all duration-500" 
                  style={{ 
                    width: `${layer.percent}%`,
                    backgroundColor: layer.color,
                  }} 
                />
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="btn btn-primary w-full mt-6"
        >
          继续学习
        </button>
      </div>
    </div>
  );
};

// Filter Modal
const FilterModal = ({ 
  currentFilter, 
  onFilterChange, 
  onClose,
  progress,
}: { 
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onClose: () => void;
  progress: LearningProgress;
}) => {
  const filters: Array<{ id: string; label: string; count: number; icon: typeof Layers; emoji?: string }> = [
    { id: 'all', label: '全部卡片', count: flashcards.length, icon: Layers },
    { id: 'favorited', label: '收藏的', count: Object.values(progress.cardStates).filter(s => s.favorited).length, icon: Bookmark },
    { id: 'mastered', label: '已掌握', count: Object.values(progress.cardStates).filter(s => s.mastered === true).length, icon: Check },
    { id: 'not-mastered', label: '未掌握', count: Object.values(progress.cardStates).filter(s => s.mastered === false).length, icon: X },
    { id: 'wrong', label: '错题本', count: progress.wrongCards.length, icon: RotateCcw },
    { id: 'unanswered', label: '未学习', count: flashcards.length - Object.values(progress.cardStates).filter(s => s.answered).length, icon: Eye },
    ...layers.map(l => ({ id: `layer-${l.name}`, label: l.name, count: flashcards.filter(c => c.layer === l.name).length, icon: Brain, emoji: l.emoji })),
  ];

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="card p-6 max-w-md w-full animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center">
            <Filter className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)]">筛选卡片</h2>
        </div>
        <div className="space-y-2 max-h-[60vh] overflow-y-auto">
          {filters.map(({ id, label, count, icon: Icon, emoji }) => (
            <button
              key={id}
              onClick={() => {
                onFilterChange(id);
                onClose();
              }}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                currentFilter === id 
                  ? 'bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]' 
                  : 'hover:bg-[var(--color-surface-2)]'
              }`}
            >
              <div className="flex items-center gap-3">
                {emoji ? (
                  <span className="text-lg">{emoji}</span>
                ) : (
                  <Icon className="w-5 h-5" />
                )}
                <span className="font-medium">{label}</span>
              </div>
              <span className={`text-sm ${currentFilter === id ? '' : 'text-[var(--color-text-muted)]'}`}>
                {count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Flashcard Component
export default function FlashcardApp() {
  const [progress, setProgress] = useLocalStorage<LearningProgress>('ai-flashcard-progress', initialProgress);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showNavigator, setShowNavigator] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [filter, setFilter] = useState('all');
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [animateCard, setAnimateCard] = useState<'left' | 'right' | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Filter cards based on current filter
  const filteredCards = flashcards.filter(card => {
    const state = progress.cardStates[card.id] || initialCardState;
    switch (filter) {
      case 'favorited':
        return state.favorited;
      case 'mastered':
        return state.mastered === true;
      case 'not-mastered':
        return state.mastered === false;
      case 'wrong':
        return progress.wrongCards.includes(card.id);
      case 'unanswered':
        return !state.answered;
      default:
        if (filter.startsWith('layer-')) {
          return card.layer === filter.replace('layer-', '');
        }
        return true;
    }
  });

  const currentCard = filteredCards[currentIndex] || flashcards[0];
  const cardState = progress.cardStates[currentCard?.id] || initialCardState;
  const [showSparkle, setShowSparkle] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // Track study time
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => ({
        ...prev,
        totalStudyTime: prev.totalStudyTime + 1,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, [setProgress]);

  // Show welcome on first visit
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenWelcome = localStorage.getItem('ai-flashcard-welcome-seen');
      if (!hasSeenWelcome) {
        setShowWelcome(true);
        localStorage.setItem('ai-flashcard-welcome-seen', 'true');
      }
    }
  }, []);

  // Update streak on mount
  useEffect(() => {
    const today = new Date().toDateString();
    setProgress(prev => {
      if (prev.lastStreakDate === today) return prev;
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (prev.lastStreakDate === yesterday.toDateString()) {
        return {
          ...prev,
          streakDays: prev.streakDays + 1,
          lastStreakDate: today,
          lastStudyDate: today,
        };
      }
      
      return {
        ...prev,
        streakDays: prev.lastStreakDate ? 1 : 0,
        lastStreakDate: today,
        lastStudyDate: today,
      };
    });
  }, [setProgress]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowExplanation(false);
  }, [filter]);

  const updateCardState = useCallback((cardId: number, updates: Partial<CardState>) => {
    setProgress(prev => ({
      ...prev,
      cardStates: {
        ...prev.cardStates,
        [cardId]: {
          ...(prev.cardStates[cardId] || initialCardState),
          ...updates,
          lastAttempt: new Date().toISOString(),
        },
      },
    }));
  }, [setProgress]);

  const goToNext = useCallback(() => {
    if (filteredCards.length === 0) return;
    setSlideDirection('left');
    setAnimateCard('left');
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % filteredCards.length);
      setIsFlipped(false);
      setShowExplanation(false);
      setAnimateCard(null);
      setTimeout(() => setSlideDirection(null), 300);
    }, 150);
  }, [filteredCards.length]);

  const goToPrev = useCallback(() => {
    if (filteredCards.length === 0) return;
    setSlideDirection('right');
    setAnimateCard('right');
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
      setIsFlipped(false);
      setShowExplanation(false);
      setAnimateCard(null);
      setTimeout(() => setSlideDirection(null), 300);
    }, 150);
  }, [filteredCards.length]);

  const goToRandom = useCallback(() => {
    if (filteredCards.length <= 1) return;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * filteredCards.length);
    } while (newIndex === currentIndex);
    const direction = Math.random() > 0.5 ? 'left' : 'right';
    setSlideDirection(direction);
    setAnimateCard(direction);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFlipped(false);
      setShowExplanation(false);
      setAnimateCard(null);
      setTimeout(() => setSlideDirection(null), 300);
    }, 150);
  }, [filteredCards.length, currentIndex]);

  const toggleFavorite = useCallback(() => {
    if (!currentCard) return;
    updateCardState(currentCard.id, { favorited: !cardState.favorited });
  }, [currentCard, cardState.favorited, updateCardState]);

  const markAsMastered = useCallback(() => {
    if (!currentCard) return;
    const wasMastered = cardState.mastered;
    updateCardState(currentCard.id, { 
      mastered: true,
      answered: true,
    });
    
    // Remove from wrong cards if present
    setProgress(prev => ({
      ...prev,
      wrongCards: prev.wrongCards.filter(id => id !== currentCard.id),
    }));
    
    if (!wasMastered) {
      setShowConfetti(true);
      setShowSparkle(true);
      setTimeout(() => {
        setShowConfetti(false);
        setShowSparkle(false);
      }, 2000);
    }
  }, [currentCard, cardState.mastered, updateCardState, setProgress]);

  const markAsNotMastered = useCallback(() => {
    if (!currentCard) return;
    updateCardState(currentCard.id, { 
      mastered: false,
      answered: true,
    });
    
    // Add to wrong cards if not present
    setProgress(prev => ({
      ...prev,
      wrongCards: prev.wrongCards.includes(currentCard.id) 
        ? prev.wrongCards 
        : [...prev.wrongCards, currentCard.id],
    }));
  }, [currentCard, updateCardState, setProgress]);

  const flipCard = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const toggleExplanation = useCallback(() => {
    setShowExplanation(prev => !prev);
  }, []);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      setActiveKey(e.key);
      setTimeout(() => setActiveKey(null), 150);

      switch (e.key) {
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Enter':
          flipCard();
          break;
        case ' ':
          e.preventDefault();
          toggleExplanation();
          break;
        case 'm':
        case 'M':
          markAsMastered();
          break;
        case 'n':
        case 'N':
          markAsNotMastered();
          break;
        case 'f':
        case 'F':
          toggleFavorite();
          break;
        case 'r':
        case 'R':
          goToRandom();
          break;
        case 's':
        case 'S':
          setShowStats(true);
          break;
        case '?':
          setShowHelp(true);
          break;
        case 'g':
        case 'G':
          setShowNavigator(true);
          break;
        case 'Escape':
          setShowStats(false);
          setShowHelp(false);
          setShowFilter(false);
          setShowNavigator(false);
          setShowWelcome(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, goToRandom, flipCard, toggleExplanation, markAsMastered, markAsNotMastered, toggleFavorite]);

  // Touch/swipe handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    const minSwipeDistance = 50;
    
    // Only handle horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    
    touchStartRef.current = null;
  }, [goToNext, goToPrev]);

  if (filteredCards.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-4">
        <div className="card p-8 text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-[var(--color-text-muted)]" />
          </div>
          <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">没有找到卡片</h2>
          <p className="text-[var(--color-text-muted)] mb-6">当前筛选条件下没有卡片，试试其他筛选条件？</p>
          <button onClick={() => setFilter('all')} className="btn btn-primary">
            查看全部卡片
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Confetti show={showConfetti} />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border-faint)]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-sm">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold font-[family-name:var(--font-heading)]">AI核心概念闪卡</h1>
                <p className="text-xs text-[var(--color-text-muted)]">38张卡片 · 7大层级</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {progress.streakDays > 0 && (
                <div className="badge badge-warning">
                  <Flame className="w-3 h-3" />
                  {progress.streakDays}天
                </div>
              )}
              <button
                onClick={() => setShowNavigator(true)}
                className={`btn btn-ghost p-2 ${activeKey === 'g' || activeKey === 'G' ? 'kbd-active' : ''}`}
                title="快速导航 (G)"
              >
                <Layers className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowFilter(true)}
                className={`btn btn-ghost p-2`}
                title="筛选"
              >
                <Filter className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowStats(true)}
                className={`btn btn-ghost p-2 ${activeKey === 's' || activeKey === 'S' ? 'kbd-active' : ''}`}
                title="统计 (S)"
              >
                <BarChart3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowHelp(true)}
                className={`btn btn-ghost p-2 ${activeKey === '?' ? 'kbd-active' : ''}`}
                title="快捷键 (?)"
              >
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex-1 progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }} 
              />
            </div>
            <span className="text-sm font-medium text-[var(--color-text-muted)] whitespace-nowrap">
              {currentIndex + 1} / {filteredCards.length}
            </span>
          </div>

          {/* Filter indicator */}
          {filter !== 'all' && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-[var(--color-text-muted)]">筛选:</span>
              <span className="badge badge-primary">
                {filter === 'favorited' && '收藏的'}
                {filter === 'mastered' && '已掌握'}
                {filter === 'not-mastered' && '未掌握'}
                {filter === 'wrong' && '错题本'}
                {filter === 'unanswered' && '未学习'}
                {filter.startsWith('layer-') && filter.replace('layer-', '')}
              </span>
              <button 
                onClick={() => setFilter('all')} 
                className="text-xs text-[var(--color-primary)] hover:underline"
              >
                清除
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Card status badges */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {cardState.mastered === true && (
            <span className="badge badge-success animate-scale-in">
              <Check className="w-3 h-3" /> 已掌握
            </span>
          )}
          {cardState.mastered === false && (
            <span className="badge badge-error animate-scale-in">
              <X className="w-3 h-3" /> 未掌握
            </span>
          )}
          {cardState.favorited && (
            <span className="badge badge-warning animate-scale-in">
              <BookmarkCheck className="w-3 h-3" /> 已收藏
            </span>
          )}
        </div>

        {/* Flashcard */}
        <div 
          ref={cardRef}
          className={`card p-0 overflow-hidden cursor-pointer transition-all duration-300 card-glow relative ${
            animateCard === 'left' ? 'translate-x-[-30px] opacity-0 scale-95' : 
            animateCard === 'right' ? 'translate-x-[30px] opacity-0 scale-95' : 
            slideDirection === 'left' ? 'slide-in-right' :
            slideDirection === 'right' ? 'slide-in-left' :
            'translate-x-0 opacity-100'
          }`}
          style={{ perspective: '1000px' }}
          onClick={flipCard}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <SparkleEffect show={showSparkle} />
          <div 
            className="relative transition-transform duration-500"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front of card */}
            <div 
              className="p-8 min-h-[400px]"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currentCard.layerEmoji}</span>
                  <div>
                    <span className="badge badge-primary">{currentCard.layer}</span>
                    {currentCard.abbreviation !== '—' && (
                      <span className="ml-2 text-sm text-[var(--color-text-muted)] font-mono">
                        {currentCard.abbreviation}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-[var(--color-text-faint)]">#{currentCard.id}</span>
              </div>

              {/* Concept name */}
              <h2 className="text-3xl font-bold mb-2 font-[family-name:var(--font-heading)]">
                {currentCard.conceptName}
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 font-mono text-sm">
                {currentCard.englishName}
              </p>

              {/* Simple explanation (teaser) */}
              <div className="bg-[var(--color-surface-2)] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="font-medium text-[var(--color-primary)]">一句话理解</span>
                </div>
                <p className="text-lg leading-relaxed">{currentCard.simpleExplanation}</p>
              </div>

              {/* Flip hint */}
              <div className="mt-8 text-center text-sm text-[var(--color-text-faint)]">
                按 <kbd className="kbd mx-1">Enter</kbd> 或点击卡片查看详细解释
              </div>
            </div>

            {/* Back of card */}
            <div 
              className="absolute inset-0 p-8 overflow-y-auto"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              {/* Definition */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-[var(--color-info)]" />
                  <span className="font-medium text-[var(--color-info)]">核心定义</span>
                </div>
                <p className="text-[var(--color-text-primary)] leading-relaxed">
                  {currentCard.definition}
                </p>
              </div>

              {/* Example */}
              <div className="mb-6 bg-[var(--color-surface-2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-[var(--color-warning)]" />
                  <span className="font-medium text-[var(--color-warning)]">典型例子</span>
                </div>
                <p className="text-[var(--color-text-primary)] leading-relaxed">
                  {currentCard.example}
                </p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-[var(--color-success)]" />
                  <span className="font-medium text-[var(--color-success)]">关键词</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentCard.keywords.map((keyword, i) => (
                    <span key={i} className="badge badge-info">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mnemonic */}
              <div className="bg-gradient-to-br from-[var(--color-primary-soft)]/50 to-[var(--color-primary-soft)] rounded-xl p-5 border border-[var(--color-primary)]/20">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="font-medium text-[var(--color-primary)]">记忆口诀</span>
                </div>
                <p className="text-[var(--color-text-primary)] leading-relaxed font-medium">
                  {currentCard.mnemonic}
                </p>
              </div>

              {/* Flip back hint */}
              <div className="mt-6 text-center text-sm text-[var(--color-text-faint)]">
                按 <kbd className="kbd mx-1">Enter</kbd> 返回正面
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={goToPrev}
            className={`btn btn-secondary ${activeKey === 'ArrowLeft' ? 'kbd-active' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
            上一张
          </button>
          
          <button
            onClick={markAsNotMastered}
            className={`btn ${cardState.mastered === false ? 'btn-primary bg-[var(--color-error)]' : 'btn-secondary'} ${activeKey === 'n' || activeKey === 'N' ? 'kbd-active' : ''}`}
            title="标记为未掌握 (N)"
          >
            <X className="w-5 h-5" />
            未掌握
          </button>

          <button
            onClick={markAsMastered}
            className={`btn ${cardState.mastered === true ? 'btn-primary bg-[var(--color-success)]' : 'btn-secondary'} ${activeKey === 'm' || activeKey === 'M' ? 'kbd-active' : ''}`}
            title="标记为已掌握 (M)"
          >
            <Check className="w-5 h-5" />
            已掌握
          </button>

          <button
            onClick={toggleFavorite}
            className={`btn ${cardState.favorited ? 'btn-primary bg-[var(--color-warning)]' : 'btn-secondary'} ${activeKey === 'f' || activeKey === 'F' ? 'kbd-active' : ''}`}
            title="收藏 (F)"
          >
            {cardState.favorited ? (
              <BookmarkCheck className="w-5 h-5" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
            收藏
          </button>

          <button
            onClick={goToRandom}
            className={`btn btn-secondary ${activeKey === 'r' || activeKey === 'R' ? 'kbd-active' : ''}`}
            title="随机跳转 (R)"
          >
            <Shuffle className="w-5 h-5" />
            随机
          </button>
          
          <button
            onClick={goToNext}
            className={`btn btn-primary ${activeKey === 'ArrowRight' ? 'kbd-active' : ''}`}
          >
            下一张
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hints */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--color-text-faint)]">
          <span className="flex items-center gap-1">
            <kbd className={`kbd ${activeKey === 'ArrowLeft' ? 'kbd-active' : ''}`}>←</kbd>
            <kbd className={`kbd ${activeKey === 'ArrowRight' ? 'kbd-active' : ''}`}>→</kbd>
            切换
          </span>
          <span className="flex items-center gap-1">
            <kbd className={`kbd ${activeKey === 'Enter' ? 'kbd-active' : ''}`}>Enter</kbd>
            翻转
          </span>
          <span className="flex items-center gap-1">
            <kbd className={`kbd ${activeKey === 'm' || activeKey === 'M' ? 'kbd-active' : ''}`}>M</kbd>
            掌握
          </span>
          <span className="flex items-center gap-1">
            <kbd className={`kbd ${activeKey === 'n' || activeKey === 'N' ? 'kbd-active' : ''}`}>N</kbd>
            未掌握
          </span>
          <span className="flex items-center gap-1">
            <kbd className={`kbd ${activeKey === 'f' || activeKey === 'F' ? 'kbd-active' : ''}`}>F</kbd>
            收藏
          </span>
          <span className="flex items-center gap-1">
            <kbd className={`kbd ${activeKey === '?' ? 'kbd-active' : ''}`}>?</kbd>
            更多
          </span>
        </div>
      </main>

      {/* Modals */}
      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
      {showHelp && <KeyboardShortcuts onClose={() => setShowHelp(false)} />}
      {showStats && <StatsModal progress={progress} onClose={() => setShowStats(false)} />}
      {showFilter && (
        <FilterModal 
          currentFilter={filter} 
          onFilterChange={setFilter} 
          onClose={() => setShowFilter(false)}
          progress={progress}
        />
      )}
      {showNavigator && (
        <CardNavigator
          cards={filteredCards}
          currentIndex={currentIndex}
          cardStates={progress.cardStates}
          onSelect={(index) => {
            setCurrentIndex(index);
            setIsFlipped(false);
            setShowExplanation(false);
          }}
          onClose={() => setShowNavigator(false)}
        />
      )}
    </div>
  );
}
