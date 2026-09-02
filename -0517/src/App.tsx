import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';
import Chapter5 from './components/Chapter5';
import Chapter6 from './components/Chapter6';
import SummarySection from './components/SummarySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E14] text-[#E0E6ED] scanline">
      <Navbar />
      <main>
        <HeroSection />

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>

        <Chapter1 />

        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>

        <Chapter2 />

        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>

        <Chapter3 />

        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>

        <Chapter4 />

        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>

        <Chapter5 />

        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>

        <Chapter6 />

        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>

        <SummarySection />
      </main>
      <Footer />
    </div>
  );
}
