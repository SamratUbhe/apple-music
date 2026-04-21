import { Search } from 'lucide-react';

const categories = [
  { name: 'Pop', color: '#fc3c44', cover: 'https://images.pexels.com/photos/1771838/pexels-photo-1771838.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Hip-Hop', color: '#ff9500', cover: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'R&B', color: '#34c759', cover: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Electronic', color: '#5ac8fa', cover: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Rock', color: '#ff3b30', cover: 'https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Country', color: '#ffcc00', cover: 'https://images.pexels.com/photos/1021142/pexels-photo-1021142.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Jazz', color: '#af52de', cover: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Classical', color: '#007aff', cover: 'https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Latin', color: '#ff2d55', cover: 'https://images.pexels.com/photos/1267093/pexels-photo-1267093.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'K-Pop', color: '#32ade6', cover: 'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Metal', color: '#636366', cover: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Soul', color: '#ff6b35', cover: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const moods = ['Chill', 'Workout', 'Party', 'Focus', 'Sleep', 'Romance', 'Sad', 'Happy'];

interface BrowseProps {
  searchQuery: string;
}

export default function Browse({ searchQuery }: BrowseProps) {
  const filtered = searchQuery
    ? categories.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : categories;

  return (
    <div className="flex-1 overflow-y-auto bg-[#1c1c1e] px-8 py-6">
      {!searchQuery && (
        <div className="mb-8 relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Artists, songs, lyrics, and more"
            className="w-full bg-white/10 text-white text-[15px] placeholder-white/40 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:bg-white/15 transition-colors"
          />
        </div>
      )}

      {!searchQuery && (
        <div className="mb-8">
          <h2 className="text-white text-[19px] font-bold tracking-tight mb-4">Browse by Mood</h2>
          <div className="flex flex-wrap gap-2">
            {moods.map((mood) => (
              <button
                key={mood}
                className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white/80 hover:text-white text-[13px] font-medium rounded-full transition-colors"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-white text-[19px] font-bold tracking-tight mb-4">
          {searchQuery ? `Results for "${searchQuery}"` : 'Browse Categories'}
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {filtered.map((cat) => (
            <button
              key={cat.name}
              className="relative h-24 rounded-2xl overflow-hidden group cursor-pointer"
              style={{ backgroundColor: cat.color }}
            >
              <img
                src={cat.cover}
                alt={cat.name}
                className="absolute right-0 bottom-0 w-2/3 h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-4 text-white font-bold text-[15px] tracking-tight drop-shadow">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
