import { Character } from '../types';
import { motion } from 'motion/react';
import { FC } from 'react';

export const CharacterCard: FC<{ character: Character; expanded?: boolean; onClose?: () => void }> = ({ character, expanded, onClose }) => {
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

  const Wrapper = expanded ? 'div' : motion.div;

  return (
    <Wrapper 
      initial={expanded ? undefined : { opacity: 0, y: 20 }}
      whileInView={expanded ? undefined : { opacity: 1, y: 0 }}
      viewport={expanded ? undefined : { once: true }}
      className={`group flex flex-col md:flex-row overflow-hidden rounded-xl bg-zinc-900 ${expanded ? '' : 'border transition-all'} ${factionColors}`}
    >
      {/* Visual Image Side - Large */}
      <div className={`w-full ${expanded ? 'md:w-[35%] xl:w-[35%]' : 'md:w-[40%] xl:w-[45%]'} h-80 md:h-auto min-h-[300px] relative shrink-0 bg-zinc-950 overflow-hidden`}>
         <motion.img 
           layoutId={`image-${character.id}`}
           src={character.imageUrl} 
           alt={character.name} 
           className={`absolute inset-0 w-full h-full object-cover ${expanded ? '' : 'group-hover:scale-105 transition-transform duration-700'}`} 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900 opacity-80 mix-blend-multiply" />
      </div>

      {/* Details Side */}
      <div className={`w-full ${expanded ? 'md:w-[65%] xl:w-[65%]' : 'md:w-[60%] xl:w-[55%]'} p-6 md:p-8 flex flex-col justify-between`}>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex justify-between items-start gap-4 mb-3">
              <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${roleColor}`}>
                {character.school ? `${character.school}학파 / ` : ''}{character.role}
              </span>
              <div className="flex shrink-0 gap-1.5 mt-0.5">
                <span className={`text-[10px] md:text-xs px-2 py-0.5 rounded border font-mono ${badgeColor}`}>{character.mbti}</span>
                <span className={`text-[10px] md:text-xs px-2 py-0.5 rounded border font-mono ${badgeColor}`}>{character.enneagram}</span>
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-zinc-100 leading-tight">
              {character.name}
            </h3>
            <p className="text-base md:text-lg font-medium text-zinc-400 mt-2">
              "{character.title}"
            </p>

            <div className="flex items-center gap-4 mt-5 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 font-medium">성별</span>
                <span className="text-zinc-200">{character.gender}</span>
              </div>
              <div className="w-px h-3 bg-zinc-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 font-medium">소속</span>
                <span className="text-zinc-200">{character.faction}</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          {(character.quote && character.quote.trim() !== '') && (
            <div className="pl-4 py-3 border-l-2 border-zinc-700 group-hover:border-zinc-500 transition-colors bg-zinc-950/40 rounded-r-lg">
              <p className="text-zinc-300 text-sm md:text-base font-serif italic leading-relaxed">
                "{character.quote}"
              </p>
            </div>
          )}
          
          {/* Detailed Content Areas */}
          <div className="space-y-6 pt-2 h-full">
            {/* Rank & Combat Style */}
            <div>
               <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">
                 <span>등장 랭크 / 전투 스타일</span>
                 {character.icon && <span className="opacity-80 text-base">{character.icon}</span>}
               </h4>
               <div className="bg-zinc-950/20 rounded-lg p-4 border border-zinc-800/50">
                 <p className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-2 whitespace-pre-wrap">
                   <strong className="text-zinc-100 font-semibold block mb-1">[{character.rank} 랭크 — {character.weaponOrMagic}]</strong>
                   {character.combatDescription || "이곳에 캐릭터의 상세한 전투 방식, 주력 마법이나 검술의 특징, 그리고 전투 시 두드러지는 성향이 서술됩니다. 코드를 열어 내용을 채워주세요."}
                 </p>
               </div>
            </div>

            {/* General Description / TMI */}
            <div>
               <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">
                 원작의 미래
               </h4>
               <div className="bg-zinc-950/20 rounded-lg p-4 border border-zinc-800/50">
                 <p className="text-zinc-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                   {character.futureDescription || "캐릭터의 과거나 행적, 원작에서의 미래가 기록될 공간입니다. 코드를 열어 내용을 채워주세요."}
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
