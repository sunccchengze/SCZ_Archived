import { type SlideData } from '../slideData';
import TitleSlide from './visuals/TitleSlide';
import HookSlide from './visuals/HookSlide';
import ImageSlide from './visuals/ImageSlide';
import StatsSlide from './visuals/StatsSlide';
import PlayersSlide from './visuals/PlayersSlide';
import TrustSlide from './visuals/TrustSlide';
import CompanionStatsSlide from './visuals/CompanionStatsSlide';
import TakeawaySlide from './visuals/TakeawaySlide';
import QubitSlide from './visuals/QubitSlide';
import EntanglementSlide from './visuals/EntanglementSlide';
import TeleportationSlide from './visuals/TeleportationSlide';
import BreakthroughSlide from './visuals/BreakthroughSlide';
import ApplicationsSlide from './visuals/ApplicationsSlide';
import QuantumInternetSlide from './visuals/QuantumInternetSlide';
import ClosingSlide from './visuals/ClosingSlide';

interface Props {
  slide: SlideData;
}

export default function SlideVisual({ slide }: Props) {
  switch (slide.id) {
    case 0:
      return <TitleSlide />;
    case 1:
      return <HookSlide />;
    case 2:
      return (
        <ImageSlide
          image={slide.image}
          title="Three Extraordinary Things"
          sectionColor={slide.sectionColor}
          highlights={[
            '🤖 Machines learned to write code themselves',
            '💬 AI has emotional conversations with millions of teens',
            '⚛️ Scientists started teleporting information through the air',
          ]}
        />
      );
    case 3:
      return (
        <ImageSlide
          image={slide.image}
          title="Sarah the Programmer"
          sectionColor={slide.sectionColor}
          highlights={[
            '📝 200–300 lines of code per 8-hour shift',
            '🔍 Searching Stack Overflow for the 8th time',
            '🐛 2 hours debugging why nothing works',
          ]}
        />
      );
    case 4:
      return (
        <ImageSlide
          image={slide.image}
          title="Sarah in 2026"
          sectionColor={slide.sectionColor}
          highlights={[
            '🗣️ Talks to an AI agent instead of typing',
            '🏗️ Less of a typist, more of an architect',
            '✅ AI plans, tests, and submits pull requests',
          ]}
        />
      );
    case 5:
      return <StatsSlide />;
    case 6:
      return <PlayersSlide />;
    case 7:
      return <TrustSlide />;
    case 8:
      return (
        <ImageSlide
          image={slide.image}
          title="You're Not the Violin"
          sectionColor={slide.sectionColor}
          highlights={[
            '🎻 33% of enterprise apps will include agentic AI',
            '🧠 15% of business decisions made autonomously by AI',
            '🎼 "Conducting an orchestra of AI agents"',
          ]}
        />
      );
    case 9:
      return (
        <ImageSlide
          image={slide.image}
          title="AI as a Friend"
          sectionColor={slide.sectionColor}
          highlights={[
            '🫂 Never judges, always available',
            '💭 Remembers everything you\'ve told it',
            '⚠️ A little bit unsettling?',
          ]}
        />
      );
    case 10:
      return <CompanionStatsSlide />;
    case 11:
      return (
        <ImageSlide
          image={slide.image}
          title="Red Flags"
          sectionColor="#E23C3C"
          highlights={[
            '🚨 Reports of suicide, violence, and delusional thinking',
            '⚠️ The longer you talk, the less reliably safe it becomes',
            '🔄 Opposite of human friendship: safety decreases over time',
          ]}
        />
      );
    case 12:
      return <TakeawaySlide />;
    case 13:
      return (
        <ImageSlide
          image={slide.image}
          title="Quantum Weirdness"
          sectionColor={slide.sectionColor}
          highlights={[
            '👻 Einstein called it "spooky action at a distance"',
            '📡 Information teleportation, not Star Trek',
            '❌ He tried to prove it wrong. He failed.',
          ]}
        />
      );
    case 14:
      return <QubitSlide />;
    case 15:
      return <EntanglementSlide />;
    case 16:
      return <TeleportationSlide />;
    case 17:
      return <BreakthroughSlide />;
    case 18:
      return <ApplicationsSlide />;
    case 19:
      return <QuantumInternetSlide />;
    case 20:
      return <ClosingSlide />;
    default:
      return (
        <ImageSlide
          image={slide.image}
          title={slide.title}
          sectionColor={slide.sectionColor}
        />
      );
  }
}
