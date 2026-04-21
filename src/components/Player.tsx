import { useState, useEffect, useRef } from 'react';
import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Shuffle,
  Repeat,
  Heart,
  List,
  Airplay,
  ChevronUp,
} from 'lucide-react';
import { queueTracks } from '../data/mockData';

interface PlayerProps {
  onQueueToggle: () => void;
  showQueue: boolean;
}

export default function Player({ onQueueToggle, showQueue }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(34);
  const [volume, setVolume] = useState(80);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const track = queueTracks[currentTrackIndex];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setCurrentTrackIndex((i) => (i + 1) % queueTracks.length);
            return 0;
          }
          return p + 0.1;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentTrackIndex((i) => (i - 1 + queueTracks.length) % queueTracks.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentTrackIndex((i) => (i + 1) % queueTracks.length);
    setProgress(0);
  };

  const formatProgress = (val: number) => {
    const total = 200;
    const current = Math.floor((val / 100) * total);
    const m = Math.floor(current / 60);
    const s = current % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-[90px] bg-[#1c1c1e]/95 backdrop-blur-2xl border-t border-white/10 flex items-center px-5 gap-4 shrink-0">
      <div className="flex items-center gap-3 w-[280px] min-w-0">
        <div className="relative group cursor-pointer shrink-0">
          <img
            src={track.cover}
            alt={track.album}
            className="w-12 h-12 rounded-lg object-cover shadow-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ChevronUp size={16} className="text-white" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white text-[13px] font-semibold truncate">{track.title}</p>
          <p className="text-[#ebebf599] text-[12px] truncate">{track.artist}</p>
        </div>
        <button
          onClick={() => setLiked(!liked)}
          className="shrink-0 transition-colors"
        >
          <Heart
            size={16}
            className={liked ? 'fill-[#fc3c44] text-[#fc3c44]' : 'text-white/40 hover:text-white/70'}
          />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center gap-1.5 max-w-[500px]">
        <div className="flex items-center gap-5">
          <button
            onClick={() => setShuffle(!shuffle)}
            className={`transition-colors ${shuffle ? 'text-[#fc3c44]' : 'text-white/40 hover:text-white/70'}`}
          >
            <Shuffle size={15} />
          </button>
          <button onClick={handlePrev} className="text-white/70 hover:text-white transition-colors">
            <SkipBack size={20} fill="currentColor" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            {isPlaying ? (
              <Pause size={16} fill="#000" className="text-black" />
            ) : (
              <Play size={16} fill="#000" className="text-black ml-0.5" />
            )}
          </button>
          <button onClick={handleNext} className="text-white/70 hover:text-white transition-colors">
            <SkipForward size={20} fill="currentColor" />
          </button>
          <button
            onClick={() => setRepeat(!repeat)}
            className={`transition-colors ${repeat ? 'text-[#fc3c44]' : 'text-white/40 hover:text-white/70'}`}
          >
            <Repeat size={15} />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <span className="text-[11px] text-white/40 w-8 text-right tabular-nums">{formatProgress(progress)}</span>
          <div className="flex-1 relative h-1 group cursor-pointer">
            <div className="absolute inset-0 bg-white/20 rounded-full" />
            <div
              className="absolute left-0 top-0 h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
            />
          </div>
          <span className="text-[11px] text-white/40 w-8 tabular-nums">3:20</span>
        </div>
      </div>

      <div className="flex items-center gap-3 w-[280px] justify-end">
        <button
          onClick={() => setMuted(!muted)}
          className="text-white/40 hover:text-white/70 transition-colors"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <div className="relative w-20 h-1 group cursor-pointer">
          <div className="absolute inset-0 bg-white/20 rounded-full" />
          <div
            className="absolute left-0 top-0 h-full bg-white/70 rounded-full"
            style={{ width: `${muted ? 0 : volume}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={muted ? 0 : volume}
            onChange={(e) => { setVolume(Number(e.target.value)); setMuted(false); }}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>

        <div className="w-px h-5 bg-white/10" />

        <button className="text-white/40 hover:text-white/70 transition-colors">
          <Airplay size={16} />
        </button>
        <button
          onClick={onQueueToggle}
          className={`transition-colors ${showQueue ? 'text-[#fc3c44]' : 'text-white/40 hover:text-white/70'}`}
        >
          <List size={16} />
        </button>
      </div>
    </div>
  );
}
