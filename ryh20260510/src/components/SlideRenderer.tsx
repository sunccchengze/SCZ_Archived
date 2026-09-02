import { motion } from 'framer-motion';
import { type Slide } from '../data/slides';
import CoverSlide from './slides/CoverSlide';
import FormulaSlide from './slides/FormulaSlide';
import ComparisonSlide from './slides/ComparisonSlide';
import DiagramSlide from './slides/DiagramSlide';
import CardsSlide from './slides/CardsSlide';
import BrainteaserSlide from './slides/BrainteaserSlide';
import QuoteSlide from './slides/QuoteSlide';
import SplitSlide from './slides/SplitSlide';
import IconsSlide from './slides/IconsSlide';
import EndingSlide from './slides/EndingSlide';
import TimelineSlide from './slides/TimelineSlide';

interface Props {
  slide: Slide;
  slideIndex: number;
  isActive: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.97,
    transition: { duration: 0.35 },
  },
};

export default function SlideRenderer({ slide, slideIndex, isActive }: Props) {
  if (!isActive) return null;

  const renderContent = () => {
    switch (slide.visual) {
      case 'cover':
        return <CoverSlide slide={slide} />;
      case 'formula':
        return <FormulaSlide slide={slide} />;
      case 'comparison':
        return <ComparisonSlide slide={slide} slideIndex={slideIndex} />;
      case 'diagram':
        return <DiagramSlide slide={slide} slideIndex={slideIndex} />;
      case 'cards':
        return <CardsSlide slide={slide} slideIndex={slideIndex} />;
      case 'brainteaser':
        return <BrainteaserSlide slide={slide} />;
      case 'quote':
        return <QuoteSlide slide={slide} slideIndex={slideIndex} />;
      case 'split':
        return <SplitSlide slide={slide} slideIndex={slideIndex} />;
      case 'icons':
        return <IconsSlide slide={slide} />;
      case 'ending':
        return <EndingSlide />;
      case 'timeline':
        return <TimelineSlide slide={slide} />;
      default:
        return <DiagramSlide slide={slide} slideIndex={slideIndex} />;
    }
  };

  return (
    <motion.div
      key={slide.id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center px-4 md:px-20 lg:px-28"
    >
      {renderContent()}
    </motion.div>
  );
}
