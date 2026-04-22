import {
  Home,
  Search,
  Radio,
  Music2,
  ListMusic,
  Mic2,
  Heart,
  Clock,
  Download,
  ChevronDown,
  Plus,
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const libraryItems = [
  { icon: Clock, label: 'Recently Added', view: 'recently-added' },
  { icon: Music2, label: 'Albums', view: 'albums' },
  { icon: Mic2, label: 'Artists', view: 'artists' },
  { icon: ListMusic, label: 'Playlists', view: 'playlists' },
  { icon: Heart, label: 'Songs', view: 'songs' },
  { icon: Download, label: 'Downloaded', view: 'downloaded' },
];

const playlists = [
  'Late Night Feels',
  'Workout Bangers',
  'Sunday Morning',
  'Coding Focus',
  'Road Trip 2024',
  'Throwbacks',
];

export default function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-64 glass-dark flex flex-col h-full select-none shrink-0">
      <div className="p-5 pb-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#fc3c44] rounded-lg flex items-center justify-center">
            <Music2 size={16} className="text-white" />
          </div>
          <span className="text-white font-semibold text-[15px] tracking-tight">Music</span>
        </div>

        <nav className="space-y-0.5">
          <button
            onClick={() => onViewChange('listen-now')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              activeView === 'listen-now'
                ? 'bg-white/10 text-white'
                : 'text-[#ebebf599] hover:text-white hover:bg-white/5'
            }`}
          >
            <Home size={16} className={activeView === 'listen-now' ? 'text-[#fc3c44]' : ''} />
            Listen Now
          </button>
          <button
            onClick={() => onViewChange('browse')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              activeView === 'browse'
                ? 'bg-white/10 text-white'
                : 'text-[#ebebf599] hover:text-white hover:bg-white/5'
            }`}
          >
            <Search size={16} className={activeView === 'browse' ? 'text-[#fc3c44]' : ''} />
            Browse
          </button>
          <button
            onClick={() => onViewChange('radio')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              activeView === 'radio'
                ? 'bg-white/10 text-white'
                : 'text-[#ebebf599] hover:text-white hover:bg-white/5'
            }`}
          >
            <Radio size={16} className={activeView === 'radio' ? 'text-[#fc3c44]' : ''} />
            Radio
          </button>
        </nav>
      </div>

      <div className="mt-4 px-5">
        <div className="h-px bg-white/10" />
      </div>

      <div className="mt-4 px-5 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-[#ebebf566] uppercase tracking-wider">Library</span>
          <button className="text-[#ebebf566] hover:text-white transition-colors">
            <ChevronDown size={14} />
          </button>
        </div>

        <nav className="space-y-0.5">
          {libraryItems.map(({ icon: Icon, label, view }) => (
            <button
              key={view}
              onClick={() => onViewChange(view)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                activeView === view
                  ? 'bg-white/10 text-white'
                  : 'text-[#ebebf599] hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={15} className={activeView === view ? 'text-[#fc3c44]' : ''} />
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-[#ebebf566] uppercase tracking-wider">Playlists</span>
            <button className="text-[#ebebf566] hover:text-[#fc3c44] transition-colors">
              <Plus size={14} />
            </button>
          </div>
          <nav className="space-y-0.5">
            {playlists.map((name) => (
              <button
                key={name}
                className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-[13px] text-[#ebebf599] hover:text-white hover:bg-white/5 transition-colors truncate"
              >
                <ListMusic size={13} className="shrink-0" />
                <span className="truncate text-left">{name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
