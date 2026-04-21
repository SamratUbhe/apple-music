export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year: string;
  cover: string;
  tracks?: Track[];
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  cover: string;
  trackCount: number;
}

export const featuredAlbum: Album = {
  id: 'feat-1',
  title: 'Midnights',
  artist: 'Taylor Swift',
  year: '2022',
  cover: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=600',
};

export const recentlyPlayed: Album[] = [
  {
    id: 'rp-1',
    title: 'After Hours',
    artist: 'The Weeknd',
    year: '2020',
    cover: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'rp-2',
    title: 'Blonde',
    artist: 'Frank Ocean',
    year: '2016',
    cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'rp-3',
    title: 'Ctrl',
    artist: 'SZA',
    year: '2017',
    cover: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'rp-4',
    title: 'Igor',
    artist: 'Tyler, The Creator',
    year: '2019',
    cover: 'https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'rp-5',
    title: 'Dawn FM',
    artist: 'The Weeknd',
    year: '2022',
    cover: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'rp-6',
    title: 'Happier Than Ever',
    artist: 'Billie Eilish',
    year: '2021',
    cover: 'https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const newReleases: Album[] = [
  {
    id: 'nr-1',
    title: 'GNX',
    artist: 'Kendrick Lamar',
    year: '2024',
    cover: 'https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'nr-2',
    title: 'Short n Sweet',
    artist: 'Sabrina Carpenter',
    year: '2024',
    cover: 'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'nr-3',
    title: 'The Great Impersonator',
    artist: 'Halsey',
    year: '2024',
    cover: 'https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'nr-4',
    title: 'Chromakopia',
    artist: 'Tyler, The Creator',
    year: '2024',
    cover: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'nr-5',
    title: 'Radical Optimism',
    artist: 'Dua Lipa',
    year: '2024',
    cover: 'https://images.pexels.com/photos/1267093/pexels-photo-1267093.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'nr-6',
    title: 'HIT ME HARD AND SOFT',
    artist: 'Billie Eilish',
    year: '2024',
    cover: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const featuredPlaylists: Playlist[] = [
  {
    id: 'pl-1',
    title: 'Today\'s Hits',
    description: 'The biggest songs right now',
    cover: 'https://images.pexels.com/photos/1771838/pexels-photo-1771838.jpeg?auto=compress&cs=tinysrgb&w=400',
    trackCount: 50,
  },
  {
    id: 'pl-2',
    title: 'Chill Vibes',
    description: 'Relax and unwind',
    cover: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=400',
    trackCount: 42,
  },
  {
    id: 'pl-3',
    title: 'Late Night Drive',
    description: 'Music for the open road',
    cover: 'https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=400',
    trackCount: 35,
  },
  {
    id: 'pl-4',
    title: 'Hip-Hop Essentials',
    description: 'Classic and current bangers',
    cover: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
    trackCount: 60,
  },
];

export const queueTracks: Track[] = [
  {
    id: 't-1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    cover: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't-2',
    title: 'As It Was',
    artist: 'Harry Styles',
    album: 'Harry\'s House',
    duration: '2:47',
    cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't-3',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'F*CK LOVE 3',
    duration: '2:21',
    cover: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't-4',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    cover: 'https://images.pexels.com/photos/1267093/pexels-photo-1267093.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't-5',
    title: 'good 4 u',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
    cover: 'https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export const radioStations = [
  { id: 'r-1', name: 'Apple Music 1', host: 'Zane Lowe', cover: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=400', live: true },
  { id: 'r-2', name: 'Apple Music Hits', host: 'Various DJs', cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400', live: true },
  { id: 'r-3', name: 'Apple Music Country', host: 'Kelleigh Bannen', cover: 'https://images.pexels.com/photos/1021142/pexels-photo-1021142.jpeg?auto=compress&cs=tinysrgb&w=400', live: false },
];
