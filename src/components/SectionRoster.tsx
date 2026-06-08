import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { characters } from '../data';
import { CharacterCard } from './CharacterCard';
import { Faction, School, Character } from '../types';
import { X } from 'lucide-react';

export function SectionRoster() {
  const [activeTab, setActiveTab] = useState<Faction>('기간토스 검술 아카데미');
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  // Helper arrays for deterministic rendering layout
  const tabs: {name: Faction, label: string}[] = [
    { name: '기간토스 검술 아카데미', label: '기간토스' },
    { name: '세오른 마법 아카데미', label: '세오른' },
    { name: '길드', label: '길드' },
    { name: '검은 여명회', label: '검은 여명회' },
  ];

  const gigantosGroups = ['4신5제', '교관', '학생'];
  const seornSchools: School[] = ['원소', '간섭', '영역', '정령'];
  const seornRoles = ['12권위자', '교수', '학생'];
  
  const renderThumbnail = (char: Character) => (
    <motion.button
      layoutId={`card-${char.id}`}
      key={char.id}
      onClick={() => setSelectedChar(char)}
      className="group relative flex flex-col items-center w-full text-center"
      whileHover={{ y: -4 }}
    >
      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-500/50 transition-colors mb-3">
        <motion.img 
          layoutId={`image-${char.id}`}
          src={char.imageUrl} 
          alt={char.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full px-1">
        <span className="text-[10px] md:text-xs text-zinc-400 font-serif mb-1 truncate w-full">
          {char.title || '\u00A0'}
        </span>
        <span className="font-bold font-serif text-zinc-100 text-sm md:text-base leading-tight truncate w-full">
          {char.name}
        </span>
      </div>
    </motion.button>
  );

  // Render sub-segments based on faction logic
  const renderContent = () => {
    switch (activeTab) {
      case '기간토스 검술 아카데미':
        return gigantosGroups.map(group => {
           const members = characters.filter(c => c.faction === activeTab && c.role === group);
           if (members.length === 0) return null;
           return (
             <div key={group} className="mb-12">
               <h3 className="text-lg md:text-xl font-bold font-serif text-rose-300 border-b border-rose-900/30 pb-2 mb-6 inline-block pr-8">
                 {group}
               </h3>
               <div className="grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
                 {members.map(renderThumbnail)}
               </div>
             </div>
           );
        });

      case '세오른 마법 아카데미':
        return seornSchools.map(school => {
           const schoolMembers = characters.filter(c => c.faction === activeTab && c.school === school);
           if (schoolMembers.length === 0) return null;
           
           // Sort by rank: 12권위자 > 교수 > 학생
           schoolMembers.sort((a, b) => {
             const idxA = seornRoles.indexOf(a.role);
             const idxB = seornRoles.indexOf(b.role);
             return (idxA > -1 ? idxA : 99) - (idxB > -1 ? idxB : 99);
           });

           return (
             <div key={school} className="mb-12 relative">
               <h3 className="text-lg md:text-xl font-bold font-serif text-indigo-300 border-b border-indigo-900/30 pb-2 mb-6 inline-block pr-8">
                 {school} 학파
               </h3>
               <div className="grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
                 {schoolMembers.map(renderThumbnail)}
               </div>
             </div>
           );
        });

      case '길드':
      case '검은 여명회':
        const fallbackMembers = characters.filter(c => c.faction === activeTab);
        return (
          <div className="grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 pb-12">
             {fallbackMembers.map(renderThumbnail)}
          </div>
        );
    }
  };

  return (
    <section className="bg-zinc-950 py-24 relative min-h-screen scroll-mt-20" id="roster">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mb-4">인물 사전</h2>
          <p className="text-zinc-400">마력과 검의 엉킨 궤적 속, 이야기를 만들어갈 초인들</p>
        </div>

        {/* Faction Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 border-b border-zinc-800 pb-2">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 md:px-5 md:py-3 text-sm md:text-base font-semibold transition-all relative ${
                activeTab === tab.name 
                  ? 'text-zinc-100' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.name && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-zinc-200"
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Faction Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedChar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 min-h-[100dvh]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedChar(null)}
            />
            
            <div className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto hide-scrollbar rounded-xl shadow-2xl">
              <motion.div layoutId={`card-${selectedChar.id}`} className="bg-zinc-900 rounded-xl overflow-hidden">
                <CharacterCard character={selectedChar} expanded={true} onClose={() => setSelectedChar(null)} />
              </motion.div>
            </div>
            
            <motion.button 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-20 text-white/50 hover:text-white p-2 bg-black/50 hover:bg-black rounded-full transition-colors"
              onClick={() => setSelectedChar(null)}
            >
              <X size={24} />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
