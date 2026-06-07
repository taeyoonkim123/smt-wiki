import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { characters } from '../data';
import { CharacterCard } from './CharacterCard';
import { Faction, School } from '../types';

export function SectionRoster() {
  const [activeTab, setActiveTab] = useState<Faction>('기간토스 검술 아카데미');

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
  
  // Render sub-segments based on faction logic
  const renderContent = () => {
    switch (activeTab) {
      case '기간토스 검술 아카데미':
        return gigantosGroups.map(group => {
           const members = characters.filter(c => c.faction === activeTab && c.role === group);
           if (members.length === 0) return null;
           return (
             <div key={group} className="mb-16">
               <h3 className="text-xl md:text-2xl font-bold font-serif text-rose-300 border-b border-rose-900/30 pb-3 mb-6 inline-block pr-12">
                 {group}
               </h3>
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                 {members.map(char => <CharacterCard key={char.id} character={char} />)}
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
             <div key={school} className="mb-16 relative">
               <h3 className="text-xl md:text-2xl font-bold font-serif text-indigo-300 border-b border-indigo-900/30 pb-3 mb-6 inline-block pr-12">
                 {school} 학파
               </h3>
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                 {schoolMembers.map(char => <CharacterCard key={char.id} character={char} />)}
               </div>
             </div>
           );
        });

      case '길드':
      case '검은 여명회':
        const fallbackMembers = characters.filter(c => c.faction === activeTab);
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-12">
             {fallbackMembers.map(char => <CharacterCard key={char.id} character={char} />)}
          </div>
        );
    }
  };

  return (
    <section className="bg-zinc-950 py-24 relative min-h-screen" id="roster">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mb-4">인물 사전</h2>
          <p className="text-zinc-400">마력과 검의 엉킨 궤적 속, 이야기를 만들어갈 초인들</p>
        </div>

        {/* Faction Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-20 border-b border-zinc-800 pb-2">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-5 py-3 text-sm md:text-base font-semibold transition-all relative ${
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
    </section>
  );
}
