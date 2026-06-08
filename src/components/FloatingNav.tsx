import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const navItems = [
  { label: '거대 세력과 도시', id: 'locations' },
  { label: '아카데미 설정', id: 'lore' },
  { label: '크라트의 미궁', id: 'labyrinth' },
  { label: '길드 시스템', id: 'guild' },
  { label: '인물 사전', id: 'roster' },
  { label: '세계지도', id: 'map' },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <motion.nav
        className={`flex items-center gap-1 p-1 md:p-1.5 rounded-full transition-all duration-300 overflow-x-auto hide-scrollbar ${
          scrolled 
            ? 'bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 shadow-xl shadow-black/50' 
            : 'bg-black/20 backdrop-blur-sm border border-white/5'
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`flex-shrink-0 px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
              scrolled 
                ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' 
                : 'text-zinc-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </motion.nav>
    </div>
  );
}
