import { Play, ChevronRight } from 'lucide-react';
import AlbumCard from './AlbumCard';
import { recentlyPlayed, newReleases, featuredPlaylists, featuredAlbum } from '../data/mockData';

export default function ListenNow() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#1c1c1e]">
      <div
        className="relative h-72 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2c1a1a 0%, #1a0a0a 40%, #1c1c1e 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${featuredAlbum.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px) saturate(1.5)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1c1c1e]" />

        <div className="relative z-10 flex items-center h-full px-8 gap-8">
          <div className="relative group cursor-pointer shrink-0">
            <img
              src={featuredAlbum.cover}
              alt={featuredAlbum.title}
              className="w-48 h-48 rounded-2xl object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <span className="text-[11px] font-semibold text-[#fc3c44] uppercase tracking-widest">Featured Album</span>
              <h2 className="text-white text-4xl font-bold tracking-tight mt-1">{featuredAlbum.title}</h2>
              <p className="text-white/70 text-[15px] mt-1">{featuredAlbum.artist} · {featuredAlbum.year}</p>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <button className="flex items-center gap-2 bg-[#fc3c44] hover:bg-[#e0323a] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors shadow-lg">
                <Play size={14} fill="white" />
                Play
              </button>
              <button className="flex items-center gap-2 bg-white/15 hover:bg-white/20 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors backdrop-blur-sm">
                Add to Library
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-[19px] font-bold tracking-tight">Recently Played</h2>
            <button className="flex items-center gap-1 text-[#fc3c44] text-[13px] font-medium hover:text-[#e0323a] transition-colors">
              See All <ChevronRight size={14} />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {recentlyPlayed.map((album) => (
              <AlbumCard key={album.id} item={album} />
            ))}
          </div>
        </section>

        <div className="h-px bg-white/5" />

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-[19px] font-bold tracking-tight">New Releases</h2>
            <button className="flex items-center gap-1 text-[#fc3c44] text-[13px] font-medium hover:text-[#e0323a] transition-colors">
              See All <ChevronRight size={14} />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {newReleases.map((album) => (
              <AlbumCard key={album.id} item={album} />
            ))}
          </div>
        </section>

        <div className="h-px bg-white/5" />

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-[19px] font-bold tracking-tight">Made For You</h2>
            <button className="flex items-center gap-1 text-[#fc3c44] text-[13px] font-medium hover:text-[#e0323a] transition-colors">
              See All <ChevronRight size={14} />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {featuredPlaylists.map((pl) => (
              <AlbumCard key={pl.id} item={pl} size="lg" />
            ))}
          </div>
        </section>

        <div className="h-px bg-white/5" />

        <section className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-[19px] font-bold tracking-tight">Top Charts</h2>
            <button className="flex items-center gap-1 text-[#fc3c44] text-[13px] font-medium hover:text-[#e0323a] transition-colors">
              See All <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[...recentlyPlayed.slice(0, 4)].map((album, i) => (
              <button
                key={album.id}
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-colors group"
              >
                <span className="text-white/30 text-[13px] font-bold w-5 text-center shrink-0">{i + 1}</span>
                <img src={album.cover} alt={album.title} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-white text-[13px] font-semibold truncate">{album.title}</p>
                  <p className="text-white/50 text-[12px] truncate">{album.artist}</p>
                </div>
                <Play size={14} fill="white" className="text-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
