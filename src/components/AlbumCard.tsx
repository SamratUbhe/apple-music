import { Play } from 'lucide-react';
import { Album, Playlist } from '../data/mockData';

interface AlbumCardProps {
  item: Album | Playlist;
  size?: 'sm' | 'md' | 'lg';
}

export default function AlbumCard({ item, size = 'md' }: AlbumCardProps) {
  const isPlaylist = 'trackCount' in item;
  const subtitle = isPlaylist
    ? (item as Playlist).description
    : `${(item as Album).artist} · ${(item as Album).year}`;

  const sizeClasses = {
    sm: 'w-36',
    md: 'w-44',
    lg: 'w-52',
  };

  return (
    <div className={`${sizeClasses[size]} shrink-0 group cursor-pointer`}>
      <div className="relative rounded-xl overflow-hidden shadow-lg mb-2.5 aspect-square">
        <img
          src={item.cover}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200" />
        <button className="absolute bottom-2.5 right-2.5 w-10 h-10 glass-dark flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 hover:scale-110 active:scale-95">
          <Play size={16} fill="white" className="text-white ml-0.5" />
        </button>
      </div>
      <div>
        <p className="text-white text-[13px] font-semibold truncate leading-tight">{item.title}</p>
        <p className="text-[#ebebf599] text-[12px] truncate mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
