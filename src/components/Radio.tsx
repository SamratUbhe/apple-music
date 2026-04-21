import { Play, Radio as RadioIcon } from 'lucide-react';
import { radioStations } from '../data/mockData';

const featured = [
  {
    id: 'f1',
    name: 'Apple Music 1',
    tagline: 'The world\'s most-listened-to radio station',
    cover: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=800',
    live: true,
  },
];

const genres = ['All Genres', 'Pop', 'Hip-Hop', 'Rock', 'Electronic', 'Country', 'R&B'];

export default function Radio() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1c1c1e] px-8 py-6">
      <div
        className="relative h-52 rounded-3xl overflow-hidden mb-8 cursor-pointer group"
      >
        <img
          src={featured[0].cover}
          alt={featured[0].name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-7">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#fc3c44] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live
            </span>
          </div>
          <h2 className="text-white text-3xl font-bold tracking-tight">{featured[0].name}</h2>
          <p className="text-white/70 text-[13px] mt-1">{featured[0].tagline}</p>
          <button className="mt-4 flex items-center gap-2 bg-white text-black text-[13px] font-semibold px-5 py-2.5 rounded-full w-fit hover:bg-white/90 active:scale-95 transition-all">
            <Play size={14} fill="#000" />
            Listen Live
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {genres.map((g, i) => (
          <button
            key={g}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap ${
              i === 0
                ? 'bg-white/20 text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-white text-[19px] font-bold tracking-tight mb-4">Apple Music Radio</h2>
        <div className="grid grid-cols-1 gap-3">
          {radioStations.map((station) => (
            <button
              key={station.id}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-2xl p-4 transition-colors group text-left"
            >
              <div className="relative shrink-0">
                <img
                  src={station.cover}
                  alt={station.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                {station.live && (
                  <span className="absolute -top-1 -right-1 bg-[#fc3c44] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                    Live
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-[15px]">{station.name}</p>
                <p className="text-white/50 text-[13px] mt-0.5">{station.host}</p>
              </div>
              <div className="flex items-center gap-3">
                <RadioIcon size={14} className="text-white/30" />
                <button className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <Play size={14} fill="white" className="text-white ml-0.5" />
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
