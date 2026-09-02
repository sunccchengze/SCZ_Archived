import NavBar from './components/NavBar';
import ChapterDivider from './components/ChapterDivider';
import Prologue from './chapters/Prologue';
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import Chapter4 from './chapters/Chapter4';
import Chapter5 from './chapters/Chapter5';
import Chapter6 from './chapters/Chapter6';
import Chapter7 from './chapters/Chapter7';
import Chapter8 from './chapters/Chapter8';
import Chapter9 from './chapters/Chapter9';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <NavBar />
      
      <Prologue />
      <ChapterDivider />
      
      <Chapter1 />
      <ChapterDivider />
      
      <Chapter2 />
      <ChapterDivider />
      
      <Chapter3 />
      <ChapterDivider />
      
      <Chapter4 />
      <ChapterDivider />
      
      <Chapter5 />
      <ChapterDivider />
      
      <Chapter6 />
      <ChapterDivider />
      
      <Chapter7 />
      <ChapterDivider />
      
      <Chapter8 />
      <ChapterDivider />
      
      <Chapter9 />
      
      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-taupe/10">
        <div className="max-w-md mx-auto">
          <p className="font-[Poppins] text-sm text-taupe">
            御风记 · 课后延伸阅读
          </p>
          <p className="font-[Lora] text-xs text-taupe/60 mt-2">
            航空发动机与燃气轮机科普长页面
          </p>
          <p className="font-[Lora] text-xs text-taupe/40 mt-1">
            西安交通大学 · 能源与动力工程学院
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <img 
              src="/images/校徽.png" 
              alt="西安交通大学" 
              className="w-8 h-8 object-contain opacity-60"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
