import { ChevronLeft, ChevronRight, Search, Grid3x3 as Grid3X3 } from 'lucide-react';

interface TopBarProps {
  title: string;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function TopBar({ title, searchQuery, onSearchChange }: TopBarProps) {
  return (
    <div className="h-14 bg-[#1c1c1e]/90 backdrop-blur-xl border-b border-white/5 flex items-center px-5 gap-4 shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-1">
        <button className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ChevronLeft size={14} className="text-white/70" />
        </button>
        <button className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ChevronRight size={14} className="text-white/70" />
        </button>
      </div>

      <h1 className="text-white font-bold text-[17px] tracking-tight flex-1">{title}</h1>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-white/10 text-white text-[13px] placeholder-white/40 rounded-lg pl-8 pr-3 py-1.5 w-52 focus:outline-none focus:bg-white/15 transition-colors"
          />
        </div>
        <button className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <Grid3X3 size={14} className="text-white/70" />
        </button>
      </div>
    </div>
  );
}
