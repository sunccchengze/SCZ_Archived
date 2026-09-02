import StarField from './components/StarField';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StarBirthSection from './components/StarBirthSection';
import StarLifeSection from './components/StarLifeSection';
import StarDeathSection from './components/StarDeathSection';
import SupernovaSection from './components/SupernovaSection';
import NeutronStarSection from './components/NeutronStarSection';
import BlackHoleSection from './components/BlackHoleSection';
import GravitySimSection from './components/GravitySimSection';
import FunFactsSection from './components/FunFactsSection';
import QuizSection from './components/QuizSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-space-900 text-white overflow-x-hidden">
      <StarField />
      <Navigation />

      <main>
        <HeroSection />

        <div className="section-divider my-2" />
        <StarBirthSection />

        <div className="section-divider my-2" />
        <StarLifeSection />

        <div className="section-divider my-2" />
        <StarDeathSection />

        <div className="section-divider my-2" />
        <SupernovaSection />

        <div className="section-divider my-2" />
        <NeutronStarSection />

        <div className="section-divider my-2" />
        <BlackHoleSection />

        <div className="section-divider my-2" />
        <GravitySimSection />

        <div className="section-divider my-2" />
        <FunFactsSection />

        <div className="section-divider my-2" />
        <QuizSection />

        <div className="section-divider my-2" />
        <ClosingSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-purple-500/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-3 text-2xl mb-4">
            <span>🌌</span>
            <span>💥</span>
            <span>🕳️</span>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            Monsters of the Universe: Black Holes & Supernovas
          </p>
          <p className="text-gray-600 text-xs">
            An interactive companion to the lecture • We are all made of star stuff ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
