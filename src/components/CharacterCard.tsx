import { Character } from '../types';
import { motion } from 'motion/react';

export function CharacterCard({ character }: { character: Character }) {
  // Determine gradient colors based on faction for accents
  let factionColors = 'border-zinc-800 hover:border-zinc-500/50';
  let badgeColor = 'bg-zinc-800 text-zinc-300 border-zinc-700';
  let roleColor = 'text-zinc-400';

  if (character.faction === '기간토스 검술 아카데미') {
    factionColors = 'border-rose-900/30 hover:border-rose-500/50 focus-within:border-rose-500/50';
    badgeColor = 'bg-rose-950/40 text-rose-300 border-rose-900/50';
    roleColor = 'text-rose-400';
  } else if (character.faction === '세오른 마법 아카데미') {
    factionColors = 'border-indigo-900/30 hover:border-indigo-500/50';
    badgeColor = 'bg-indigo-950/40 text-indigo-300 border-indigo-900/50';
    roleColor = 'text-indigo-400';
  } else if (character.faction === '검은 여명회') {
    factionColors = 'border-purple-900/40 hover:border-purple-500/50';
    badgeColor = 'bg-purple-950/40 text-purple-300 border-purple-900/50';
    roleColor = 'text-purple-400';
  } else if (character.faction === '길드') {
    factionColors = 'border-amber-900/30 hover:border-amber-500/50';
    badgeColor = 'bg-amber-950/40 text-amber-300 border-amber-900/50';
    roleColor = 'text-amber-400';
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group flex flex-col md:flex-row overflow-hidden rounded-xl bg-zinc-900 border transition-all ${factionColors}`}
    >
      {/* Visual Image Side - Large */}
      <div className="w-full md:w-[40%] xl:w-[45%] h-64 md:h-auto min-h-[300px] relative shrink-0 bg-zinc-950 overflow-hidden">
         <img 
           src={character.imageUrl} 
           alt={character.name} 
           className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 VIA-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900 opacity-80 mix-blend-multiply" />
      </div>

      {/* Details Side */}
      <div className="w-full md:w-[60%] xl:w-[55%] p-6 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <div className="flex justify-between items-start gap-4 mb-2">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${roleColor}`}>
                {character.school ? `${character.school}학파 / ` : ''}{character.role}
              </span>
              <div className="flex shrink-0 gap-1 mt-0.5">
                <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono ${badgeColor}`}>{character.mbti}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono ${badgeColor}`}>{character.enneagram}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-serif text-zinc-100 leading-tight">
              {character.name}
            </h3>
            <p className="text-sm font-medium text-zinc-400 mt-1">
              "{character.title}"
            </p>
          </div>

          {/* Quote Core */}
          <div className="pl-3 py-1 border-l-2 border-zinc-700 group-hover:border-zinc-400 transition-colors my-4">
             <p className="text-zinc-200 text-sm font-serif italic leading-relaxed">
               {character.quote}
             </p>
          </div>
        </div>

        {/* Footer Traits */}
        <div className="pt-4 mt-2 border-t border-zinc-800/50 flex justify-between items-end">
           <div>
             <span className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">전투 방식 / 랭크</span>
             <p className="text-zinc-300 font-medium text-sm flex items-center gap-2">
                {character.icon && <span className="opacity-70">{character.icon}</span>}
                {character.weaponOrMagic} <span className="text-zinc-500 border-l border-zinc-800 pl-2 ml-1">{character.rank}</span>
             </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
