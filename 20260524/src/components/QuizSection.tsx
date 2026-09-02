import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  emoji: string;
}

const questions: Question[] = [
  {
    question: 'What are baby stars born inside?',
    options: ['Black holes', 'Nebulae (gas clouds)', 'Planets', 'Comets'],
    correct: 1,
    explanation: 'Stars are born inside enormous clouds of gas and dust called nebulae — cosmic nurseries!',
    emoji: '⭐',
  },
  {
    question: 'What process powers a star?',
    options: ['Combustion (burning)', 'Nuclear fusion', 'Electricity', 'Chemical reactions'],
    correct: 1,
    explanation: 'Nuclear fusion — hydrogen atoms smash together to form helium, releasing tremendous energy!',
    emoji: '☀️',
  },
  {
    question: 'What happens to bigger stars?',
    options: ['They live longer', 'They live shorter lives', 'They never die', 'They explode immediately'],
    correct: 1,
    explanation: 'The bigger the star, the shorter its life! Like a bonfire vs. a candle — big stars burn out fast.',
    emoji: '🔑',
  },
  {
    question: 'What element causes a massive star to "die"?',
    options: ['Gold', 'Helium', 'Iron', 'Oxygen'],
    correct: 2,
    explanation: 'Iron is the dead end! You cannot get energy from fusing iron. When the core becomes iron, fusion stops and gravity wins.',
    emoji: '⚙️',
  },
  {
    question: 'What is "spaghettification"?',
    options: [
      'Making pasta in space',
      'Being stretched like a noodle by a black hole',
      'A type of star explosion',
      'How nebulae form',
    ],
    correct: 1,
    explanation: 'Spaghettification is the real scientific term for being stretched into a long thin string by a black hole\'s gravity!',
    emoji: '🍝',
  },
  {
    question: 'How heavy is a teaspoon of neutron star material?',
    options: ['1 ton', '1 million tons', '1 billion tons', '1 kilogram'],
    correct: 2,
    explanation: 'One teaspoon = about 1 billion tons! That\'s like crushing every vehicle on Earth onto a spoon.',
    emoji: '🥄',
  },
  {
    question: 'What did scientists first think pulsars might be?',
    options: ['Alien messages', 'Asteroids', 'New planets', 'Comets'],
    correct: 0,
    explanation: 'The signal was so regular they jokingly called it "LGM-1" — Little Green Men! It was actually a spinning neutron star.',
    emoji: '👽',
  },
  {
    question: 'When was the first photo of a black hole taken?',
    options: ['1967', '2001', '2019', '2025'],
    correct: 2,
    explanation: 'In April 2019, the Event Horizon Telescope captured the first-ever image of a black hole in galaxy M87!',
    emoji: '📸',
  },
  {
    question: 'What are you REALLY made of?',
    options: ['Earth minerals', 'Exploding star stuff', 'Moon dust', 'Dark matter'],
    correct: 1,
    explanation: 'Every atom in your body was forged inside a star and blasted out by a supernova. You come from an exploding star! ✨',
    emoji: '✨',
  },
  {
    question: 'How massive is the Milky Way\'s central black hole?',
    options: ['4 times the Sun', '4 thousand Suns', '4 million Suns', '4 billion Suns'],
    correct: 2,
    explanation: 'Sagittarius A* is about 4 million times the mass of our Sun! And M87\'s is 6.5 BILLION times!',
    emoji: '🌀',
  },
];

export default function QuizSection() {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: '-50px' });
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const q = questions[currentQ];

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === q.correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  const getScoreEmoji = () => {
    const pct = score / questions.length;
    if (pct >= 0.9) return '🌟';
    if (pct >= 0.7) return '⭐';
    if (pct >= 0.5) return '💫';
    return '🚀';
  };

  const getScoreMessage = () => {
    const pct = score / questions.length;
    if (pct >= 0.9) return 'Amazing! You\'re a cosmic genius! 🎉';
    if (pct >= 0.7) return 'Great job! You really know your space! 🌟';
    if (pct >= 0.5) return 'Not bad! Keep exploring the cosmos! 🚀';
    return 'Keep learning! The universe has so much to teach! 💫';
  };

  return (
    <SectionWrapper id="quiz" className="py-20 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <SectionTitle
          emoji="📝"
          title="Space Quiz"
          subtitle="Test your cosmic knowledge! How much did you learn?"
        />

        {!showResult ? (
          <motion.div
            key={currentQ}
            className="p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Progress */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-400">
                Question {currentQ + 1} of {questions.length}
              </span>
              <span className="text-sm text-purple-300 font-bold">
                Score: {score}/{currentQ + (answered ? 1 : 0)}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-800 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQ + (answered ? 1 : 0)) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">{q.emoji}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{q.question}</h3>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                let className = 'quiz-option p-4 rounded-xl border border-gray-700 bg-white/5';
                if (answered) {
                  if (i === q.correct) className += ' correct';
                  else if (i === selected && i !== q.correct) className += ' incorrect';
                }
                return (
                  <motion.button
                    key={i}
                    className={`${className} w-full text-left flex items-center gap-3`}
                    onClick={() => handleSelect(i)}
                    whileHover={!answered ? { scale: 1.01 } : {}}
                    whileTap={!answered ? { scale: 0.99 } : {}}
                    disabled={answered}
                  >
                    <span className="w-8 h-8 rounded-full bg-purple-600/20 text-purple-300 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-gray-200 text-sm sm:text-base">{opt}</span>
                    {answered && i === q.correct && <span className="ml-auto text-lg">✅</span>}
                    {answered && i === selected && i !== q.correct && <span className="ml-auto text-lg">❌</span>}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            {answered && (
              <motion.div
                className={`p-4 rounded-xl mb-6 ${
                  selected === q.correct
                    ? 'bg-green-900/20 border border-green-500/30'
                    : 'bg-red-900/20 border border-red-500/30'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-sm text-gray-200">
                  {selected === q.correct ? '🎉 Correct! ' : '😅 Not quite! '}
                  {q.explanation}
                </p>
              </motion.div>
            )}

            {/* Next button */}
            {answered && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full"
                  onClick={nextQuestion}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentQ < questions.length - 1 ? 'Next Question →' : 'See Results 🎉'}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="p-8 sm:p-12 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <span className="text-6xl mb-4 block">{getScoreEmoji()}</span>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
              {score} / {questions.length}
            </h3>
            <p className="text-lg text-purple-300 mb-6">{getScoreMessage()}</p>

            {/* Score visualization */}
            <div className="flex justify-center gap-2 mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full ${
                    i < score ? 'bg-green-500' : 'bg-red-500/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full"
              onClick={restart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 Try Again
            </motion.button>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
