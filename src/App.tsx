import { SectionWorld } from './components/SectionWorld';
import { SectionMap } from './components/SectionMap';
import { SectionLore } from './components/SectionLore';
import { SectionRoster } from './components/SectionRoster';
import { FloatingNav } from './components/FloatingNav';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function App() {
  const scrollToContent = () => {
    document.getElementById('world-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-rose-900/50 selection:text-white">
      <FloatingNav />
      {/* Hero Header */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background dark gradient overlay */}
        <div className="absolute inset-0 bg-zinc-950/50 z-0 pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/10 blur-[120px] rounded-full z-0 pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 space-y-6"
        >
          <p className="text-zinc-500 font-mono tracking-[0.3em] uppercase text-sm md:text-base">
            세계관 도입부 가이드
          </p>
          <img 
            src="https://mapleimage.uk/smt/title.png" 
            alt="검과 마법의 도시의 빙의자" 
            className="w-full max-w-[800px] h-auto object-contain mx-auto mix-blend-lighten"
          />
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            신화적인 무력과 절대적인 마법이 공존하는 미궁도시 아리안토스.<br/>
            끝없는 심연을 탐험할 당신의 이야기가 시작됩니다.
          </p>
        </motion.div>

        <motion.button 
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 z-10 text-zinc-500 hover:text-zinc-200 transition-colors flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown />
        </motion.button>
      </header>

      {/* Main Content Area */}
      <main id="world-content" className="relative z-10 bg-zinc-950">
        <SectionWorld />
        
        {/* Academies Intro Header before Roster */}
        <section className="bg-zinc-900/30 border-y border-zinc-800/50 py-20 text-center px-4">
          <div className="max-w-4xl mx-auto space-y-8">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-200">두 거대 아카데미의 양립</h2>
             <p className="text-zinc-400 leading-relaxed text-lg">
               크라트의 미궁을 두고 아리안토스의 패권을 다투는 두 개의 거대한 축.<br/>
               신체를 극한으로 이끌어내는 무투파 <strong>기간토스 검술 아카데미</strong>와<br/>
               법칙을 왜곡하고 조율하는 지성파 <strong>세오른 마법 아카데미</strong>.<br/>
               그리고 이들의 정점에 선 전설적인 인물들이 존재합니다.
             </p>
             <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
               <div className="flex-1 p-6 rounded-2xl border border-rose-900/30 bg-rose-950/10">
                 <h3 className="text-xl font-bold text-rose-200 mb-2">기간토스 <span className="text-rose-400">4신 5제</span></h3>
                 <p className="text-sm text-zinc-400">오러 5성의 경지에 이른 초인들. 무술의 4대 기본 요소를 정점으로 끌어올린 4명의 '신'과 파생된 특수 검술을 마스터한 5명의 '황제'.</p>
               </div>
               <div className="flex-1 p-6 rounded-2xl border border-indigo-900/30 bg-indigo-950/10">
                 <h3 className="text-xl font-bold text-indigo-200 mb-2">세오른 <span className="text-indigo-400">12 권위자</span></h3>
                 <p className="text-sm text-zinc-400">원소, 간섭, 영역, 정령학파를 대표하는 정점. 혼자서 군대나 자연재해 수준의 이적을 행할 수 있는 대마법사들.</p>
               </div>
             </div>
          </div>
        </section>

        <SectionLore />

        <SectionRoster />

        <SectionMap />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>AI Character Chat Web Compendium © {new Date().getFullYear()}</p>
        <p className="mt-2 text-xs">Based on user prompt universe settings.</p>
      </footer>
    </div>
  );
}
