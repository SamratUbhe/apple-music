import { X, Music2 } from 'lucide-react';
import { queueTracks } from '../data/mockData';

interface QueueProps {
  onClose: () => void;
}

export default function Queue({ onClose }: QueueProps) {
  return (
    <div className="w-72 bg-[#1c1c1e] border-l border-white/10 flex flex-col shrink-0">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <h2 className="text-white font-semibold text-[15px]">Up Next</h2>
        <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        <div className="px-3 mb-1">
          <p className="text-[11px] font-semibold text-[#ebebf566] uppercase tracking-wider px-2 py-1">Now Playing</p>
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-white/10">
            <img
              src={queueTracks[0].cover}
              alt={queueTracks[0].album}
              className="w-10 h-10 rounded-md object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="text-white text-[13px] font-medium truncate">{queueTracks[0].title}</p>
              <p className="text-[#ebebf580] text-[12px] truncate">{queueTracks[0].artist}</p>
            </div>
            <div className="flex gap-0.5 items-end h-4 shrink-0">
              <div className="w-0.5 bg-[#fc3c44] animate-music-bar1 rounded-full" style={{ height: '60%' }} />
              <div className="w-0.5 bg-[#fc3c44] animate-music-bar2 rounded-full" style={{ height: '100%' }} />
              <div className="w-0.5 bg-[#fc3c44] animate-music-bar1 rounded-full" style={{ height: '40%' }} />
            </div>
          </div>
        </div>

        <div className="px-3 mt-3">
          <p className="text-[11px] font-semibold text-[#ebebf566] uppercase tracking-wider px-2 py-1">Queue</p>
          {queueTracks.slice(1).map((track, idx) => (
            <button
              key={track.id}
              className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="relative">
                <img
                  src={track.cover}
                  alt={track.album}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div className="absolute inset-0 rounded-md bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Music2 size={12} className="text-white" />
                </div>
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-white text-[13px] font-medium truncate">{track.title}</p>
                <p className="text-[#ebebf580] text-[12px] truncate">{track.artist}</p>
              </div>
              <span className="text-[11px] text-white/30 shrink-0">{track.duration}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
