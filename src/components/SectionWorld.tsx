import { motion } from 'motion/react';
import { labyrinthData, questRanks, locations } from '../data';
import { ShieldAlert, Sparkles } from 'lucide-react';

export function SectionWorld() {
  return (
    <section className="bg-zinc-950 pb-24">
      {/* City and Academies (Locations) */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif">거대 세력과 도시의 양립</h2>
          <p className="text-zinc-400 text-lg">아리안토스를 구성하는 핵심 기관</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
             <motion.div 
                key={loc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group"
             >
               <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                 <img src={loc.imageUrl} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="p-6 relative z-20 -mt-8">
                 <h3 className="text-2xl font-bold text-zinc-100 mb-2">{loc.name}</h3>
                 <p className="text-sm text-zinc-400 mb-4">{loc.desc}</p>
                 <div className="flex flex-wrap gap-2">
                   {loc.facilities.map(f => (
                     <span key={f} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md border border-zinc-700/50">
                       {f}
                     </span>
                   ))}
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Labyrinth Intro */}
      <div className="bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight">고대의 악이 잠든 지하 동굴<br/><span className="text-zinc-500">크라트의 미궁</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              대륙 여러 군데에 존재하는 거대한 방추형 마력 지대. 가장 깊은 곳의 봉인석에서 뿜어져 나오는 마력이 빚어낸 독특한 몬스터와 생태계가 층별로 펼쳐집니다.
            </p>
          </motion.div>

          {/* Labyrinth Floors (Image Centric) */}
          <div className="space-y-12">
            {labyrinthData.map((floor, idx) => (
              <motion.div 
                key={floor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-8 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden"
              >
                {/* Visual Side */}
                <div className={`relative min-h-[300px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                   <img src={floor.imageUrl} alt={floor.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent" />
                   <div className="absolute bottom-6 left-6 right-6">
                     <h3 className="text-5xl font-bold font-serif text-white mb-2">{floor.name}</h3>
                     <p className="text-zinc-300 text-sm max-w-sm drop-shadow-md">{floor.desc}</p>
                   </div>
                </div>

                {/* Details Side */}
                <div className="p-8 lg:py-10 space-y-8 flex flex-col justify-center">
                  
                  {/* Monsters grid */}
                  <div>
                    <span className="text-rose-400 font-semibold mb-3 flex items-center gap-1 uppercase tracking-widest text-xs">
                       <ShieldAlert size={14} /> 주요 마물 군락
                    </span>
                    <div className="flex flex-wrap gap-4">
                      {floor.monsters.map(m => (
                        <div key={m.name} className="flex flex-col items-center gap-2 group">
                          <img src={m.imageUrl} alt={m.name} className="w-16 h-16 rounded-full object-cover border border-zinc-700 group-hover:border-rose-400 transition-colors" />
                          <span className="text-xs text-zinc-400 font-medium">{m.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Environment & Boss */}
                  <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800/50">
                     <div>
                       <span className="text-indigo-400 font-semibold mb-2 flex items-center gap-1 uppercase tracking-widest text-xs">
                          <Sparkles size={14} /> 생태 채집물
                       </span>
                       <ul className="text-sm text-zinc-400 space-y-1">
                         <li><strong className="text-zinc-300">함정:</strong> {floor.traps.join(', ')}</li>
                         <li><strong className="text-zinc-300">약초:</strong> {floor.plants.join(', ')}</li>
                         <li><strong className="text-zinc-300">광석:</strong> {floor.ores.join(', ')}</li>
                       </ul>
                     </div>

                     <div className="bg-zinc-900 border border-red-900/30 p-4 rounded-xl flex items-center gap-4">
                        <img src={floor.boss.imageUrl} alt={floor.boss.name} className="w-14 h-14 rounded-md object-cover border border-red-900/50" />
                        <div>
                          <span className="text-[10px] text-red-400 tracking-widest uppercase block mb-1">문지기 (Floor Boss)</span>
                          <span className="font-bold text-zinc-100 font-serif">{floor.boss.name}</span>
                        </div>
                     </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Guild & Economy Rules */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <h3 className="text-3xl font-bold mb-8 text-center">길드 시스템 & 퀘스트 규칙</h3>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-10 flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-4">
            <h4 className="text-xl font-bold text-amber-500">모험가 파티 규율</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              길드는 모험가와 학생들의 미궁 출입을 관리합니다. 생존율을 높이기 위해 <strong className="text-zinc-200">반드시 3인 이상 파티</strong>를 강제하며, 
              기본 포메이션인 <strong className="text-zinc-200">검사, 마법사, 로그가 최소 1명씩 포함</strong>되어야만 허가 도장을 찍어줍니다.
            </p>
            <div className="mt-8 bg-zinc-950/50 border border-emerald-900/40 rounded-lg p-4">
              <h5 className="text-emerald-400 font-bold text-sm mb-1 flex items-center gap-2">
                <Sparkles size={14} />
                아카데미 졸업 요건
              </h5>
              <p className="text-zinc-300 text-sm">
                4학년 이후 자율 활동 기간 동안 의뢰 점수 도합 <strong className="text-emerald-300 bg-emerald-900/40 px-1.5 py-0.5 rounded ml-1">500점</strong> 달성 (보통 2~3년 소요)
              </p>
            </div>
          </div>
          
          <div className="flex-[1.5] bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-sm">
            <h4 className="text-zinc-300 font-semibold mb-3">의뢰 등급 스코어</h4>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[400px]">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-500">
                    <th className="pb-2 font-medium w-20">Rank</th>
                    <th className="pb-2 font-medium w-16">Point</th>
                    <th className="pb-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  {questRanks.map(q => (
                    <tr key={q.rank} className="border-b border-zinc-800/50 last:border-0 hover:bg-zinc-900/50">
                      <td className="py-2 font-bold whitespace-nowrap">{q.rank}</td>
                      <td className="py-2 text-zinc-500 whitespace-nowrap">{q.points}</td>
                      <td className="py-2 text-zinc-400">{q.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
