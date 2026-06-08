import { motion } from 'motion/react';
import { Map as MapIcon, MapPin } from 'lucide-react';

const regions = [
  {
    id: 'region-1',
    name: '준비중',
    desc: '업데이트 예정입니다.',
  },
  {
    id: 'region-2',
    name: '준비중',
    desc: '업데이트 예정입니다.',
  },
  {
    id: 'region-3',
    name: '준비중',
    desc: '업데이트 예정입니다.',
  }
];

export function SectionMap() {
  return (
    <section id="map" className="bg-zinc-950 py-24 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mb-4 text-zinc-100">세계지도</h2>
          <p className="text-zinc-400">아리안토스 대륙과 그 너머의 광활한 영역들</p>
        </div>

        {/* Large Map Placeholder */}
        <div className="mb-20">
          <div className="w-full aspect-square md:aspect-[21/9] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden relative group shadow-2xl">
            {/* Replace image source when actual map is ready */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 bg-zinc-950/80 z-10">
              <MapIcon size={64} className="mb-4 opacity-50 text-zinc-500" />
              <p className="font-medium text-lg text-zinc-400">세계지도 준비중</p>
            </div>
            
            {/* Decorative background grid/pattern to make placeholder look nice */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
        </div>

        {/* Regions Descriptions */}
        <div>
          <h3 className="text-2xl font-bold text-zinc-100 font-serif mb-8 border-b border-zinc-800/50 pb-4 inline-block pr-12">주요 외곽 지역 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={region.id}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 hover:bg-zinc-900/80 transition-colors"
              >
                <h4 className="text-lg font-bold text-zinc-200 mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-rose-400" />
                  {region.name}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {region.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
