import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Player from './components/Player';
import Queue from './components/Queue';
import ListenNow from './components/ListenNow';
import Browse from './components/Browse';
import Radio from './components/Radio';

const viewTitles: Record<string, string> = {
  'listen-now': 'Listen Now',
  'browse': 'Browse',
  'radio': 'Radio',
  'recently-added': 'Recently Added',
  'albums': 'Albums',
  'artists': 'Artists',
  'playlists': 'Playlists',
  'songs': 'Songs',
  'downloaded': 'Downloaded',
};

export default function App() {
  const [activeView, setActiveView] = useState('listen-now');
  const [searchQuery, setSearchQuery] = useState('');
  const [showQueue, setShowQueue] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'listen-now':
        return <ListenNow />;
      case 'browse':
        return <Browse searchQuery={searchQuery} />;
      case 'radio':
        return <Radio />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center bg-[#1c1c1e]">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-[28px]">&#9835;</span>
              </div>
              <p className="text-white/50 text-[15px]">{viewTitles[activeView]} is empty</p>
              <p className="text-white/30 text-[13px] mt-1">Add some music to get started</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-[#111] flex flex-col overflow-hidden font-sans">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} onViewChange={(v) => { setActiveView(v); setSearchQuery(''); }} />

        <div className="flex flex-1 flex-col overflow-hidden">
          <TopBar
            title={viewTitles[activeView] || activeView}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <div className="flex flex-1 overflow-hidden">
            {renderContent()}
            {showQueue && <Queue onClose={() => setShowQueue(false)} />}
          </div>
        </div>
      </div>

      <Player onQueueToggle={() => setShowQueue(!showQueue)} showQueue={showQueue} />
    </div>
  );
}
