import { motion } from 'motion/react';
import { Sword, Wand2, CalendarDays, Zap, Star } from 'lucide-react';

const gigantosSchedule = [
  { date: '3월 1일', event: '입학식' },
  { date: '3월 2일 ~ 20일', event: '멘토 찾기 기간' },
  { date: '4월 20일', event: '중간 실기 시험' },
  { date: '5월 15일 ~ 21일', event: '지옥주 훈련' },
  { date: '6월 10일 ~ 20일', event: '학원 교류전' },
  { date: '7월 ~ 10월', event: '자율 활동 (졸업 점수 모으기)' },
  { date: '11월 1일', event: '최종 실기 시험' },
  { date: '11월 5일', event: '학기 종료, 졸업 심사' },
];

const seornSchedule = [
  { date: '3월 1일', event: '입학식' },
  { date: '3월 2일 ~ 20일', event: '학파 탐색 기간 (1학년만, 2학년부터는 홍보)' },
  { date: '4월 20일', event: '중간 이론 시험' },
  { date: '5월 18일', event: '실기 평가' },
  { date: '6월 10일 ~ 20일', event: '학원 교류전' },
  { date: '7월 ~ 10월', event: '학파 활동' },
  { date: '11월 1일', event: '최종 실기 시험' },
  { date: '11월 5일', event: '학기 종료, 졸업 심사' },
];

const auraRanks = [
  { level: '0성', title: '일반인', desc: '' },
  { level: '1성', title: '견습 검사', desc: '마법 1~2서클과 동격' },
  { level: '2성', title: '평균 검사 수준', desc: '마법 3~4서클과 동격' },
  { level: '3성', title: '베테랑 검사', desc: '기간토스 아카데미 교관 평균, 마법 5~6서클과 동격' },
  { level: '4성', title: '세계관 강자 반열', desc: '기간토스 아카데미 핵심 전력, 마법 6~7서클과 동격' },
  { level: '5성', title: '신(神) 또는 제(帝)', desc: '세계관 초강자 반열 (마법 8~9서클과 동격). 기간토스 아카데미를 이끄는 4신5제의 경지.' },
  { level: '6성', title: '성(聖)', desc: '지고의 영역. 엔딩 직전의 테일리(원작 주인공)만 도달, 마법 10서클과 동격.' },
];

const magicSchools = [
  { 
    name: '원소학파', 
    authorities: '불, 얼음, 번개의 3권위자',
    desc: '불, 얼음, 번개 3원소를 중심으로 한 원거리 속성 공격. 개인 비전 원소마법 창시 가능.'
  },
  { 
    name: '간섭학파', 
    authorities: '시간, 공간, 환상의 3권위자',
    desc: '적 또는 현실 자체에 간섭하여 전투. 가장 다루기 어렵고 인원도 적으나 개인 비전이 가장 많음.'
  },
  { 
    name: '영역학파', 
    authorities: '둔화, 마력 증폭, 방어의 3권위자',
    desc: '주변 공간에 아군에게 이롭고 적에게 해로운 영역 전개. 원소 학파 다음으로 인원이 많으며 능력 있는 영역 마법사는 크게 우대받음.'
  },
  { 
    name: '정령학파', 
    authorities: '소환, 빙의, 가호의 3권위자',
    desc: '정령과의 마력 계약을 통해 전투. 정령을 다루는 방식은 무궁무진하나 크게 소환, 빙의, 가호 3가지로 나뉨.'
  },
];

export function SectionLore() {
  return (
    <section id="lore" className="bg-zinc-950 py-24 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mb-4 text-zinc-100">아카데미 설정</h2>
          <p className="text-zinc-400">아카데미 학사 일정 및 전투 체계</p>
        </div>

        {/* Gigantos Academy */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 border-b border-rose-900/30 pb-4">
            <div className="p-3 bg-rose-950/50 rounded-xl border border-rose-900/50 text-rose-400">
              <Sword size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-rose-200 font-serif">기간토스 아카데미 (검술)</h3>
              <p className="text-zinc-400 text-sm mt-1">오러를 다루는 자들의 전당</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Ranks */}
            <div>
              <h4 className="text-xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
                <Star className="text-rose-400" size={24} />
                오러 등급 체계
              </h4>
              <div className="space-y-4">
                {auraRanks.map((rank, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={rank.level}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:border-rose-900/50 transition-colors"
                  >
                    <div className="w-14 h-14 shrink-0 bg-zinc-950/80 rounded-lg border border-zinc-800 flex items-center justify-center font-bold text-rose-300 font-mono">
                      {rank.level}
                    </div>
                    <div>
                      <h5 className="font-bold text-zinc-200">{rank.title}</h5>
                      {rank.desc && <p className="text-xs md:text-sm text-zinc-400 mt-1 leading-relaxed">{rank.desc}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h4 className="text-xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
                <CalendarDays className="text-rose-400" size={24} />
                주요 학사 일정
              </h4>
              <div className="relative border-l border-zinc-800 ml-4 space-y-8 pb-4 mt-4">
                {gigantosSchedule.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={item.date} 
                    className="relative pl-8"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-rose-500 border-4 border-zinc-950 box-content" />
                    <span className="text-[10px] md:text-xs font-mono text-rose-400 bg-rose-950/30 px-2 py-1 rounded border border-rose-900/30">{item.date}</span>
                    <h5 className="text-zinc-200 font-medium mt-2 text-sm md:text-base leading-tight">{item.event}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Seorn Academy */}
        <div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 border-b border-indigo-900/30 pb-4">
            <div className="p-3 bg-indigo-950/50 rounded-xl border border-indigo-900/50 text-indigo-400">
              <Wand2 size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-200 font-serif">세오른 아카데미 (마법)</h3>
              <p className="text-zinc-400 text-sm mt-1">심오한 진리를 탐구하는 4대 학파</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Schools & Ranks */}
            <div>
              <div className="mb-10 bg-zinc-900/30 border border-indigo-900/20 rounded-xl p-5 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Zap size={120} />
                </div>
                <h4 className="text-lg font-bold text-indigo-300 mb-3 flex items-center gap-2">
                  <Zap size={20} />
                  마법 체계 (서클 계열)
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed relative z-10">
                  통용되는 서클 계열 규칙에 따라 <strong className="text-indigo-200">0~9서클</strong>로 나뉘며, 세계관 최강 반열에 해당하는 숨겨진 <strong className="text-indigo-300 bg-indigo-950/50 px-1 rounded">10서클</strong>이 존재합니다.
                  <br className="block mb-2" />
                  원소, 간섭, 영역, 정령 4개의 핵심 학파를 중심으로 <strong className="text-indigo-200">12 권위자</strong>들이 최고 권력을 행사합니다.
                </p>
              </div>

              <h4 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <Star className="text-indigo-400" size={24} />
                4대 학파 & 12 권위자
              </h4>
              <div className="space-y-4">
                {magicSchools.map((school, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={school.name}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-indigo-900/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                      <h5 className="font-bold text-indigo-100 text-lg">{school.name}</h5>
                      <span className="text-[10px] bg-indigo-950/40 text-indigo-300 px-2 py-1 border border-indigo-800/50 rounded self-start lg:self-auto font-medium">{school.authorities}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{school.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h4 className="text-xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
                <CalendarDays className="text-indigo-400" size={24} />
                주요 학사 일정
              </h4>
              <div className="relative border-l border-zinc-800 ml-4 space-y-8 pb-4 mt-4">
                {seornSchedule.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={item.date} 
                    className="relative pl-8"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 border-4 border-zinc-950 box-content" />
                    <span className="text-[10px] md:text-xs font-mono text-indigo-400 bg-indigo-950/30 px-2 py-1 rounded border border-indigo-900/30">{item.date}</span>
                    <h5 className="text-zinc-200 font-medium mt-2 text-sm md:text-base leading-tight">{item.event}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
