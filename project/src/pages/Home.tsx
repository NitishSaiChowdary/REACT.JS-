import { FC } from 'react';
import VideoCard from '../components/VideoCard';
import React from 'react';

const MOCK_VIDEOS = [
  {
    id: 1,
    thumbnail: 'https://picsum.photos/seed/1/360/200',
    title: 'Building a YouTube Clone with React & Tailwind CSS',
    channel: 'Code Master',
    views: '120K',
    timestamp: '2 days ago'
  },
  {
    id: 2,
    thumbnail: 'https://picsum.photos/seed/2/360/200',
    title: 'Learn TypeScript in 2023 - Full Course',
    channel: 'Tech Academy',
    views: '250K',
    timestamp: '1 week ago'
  },
  {
    id: 3,
    thumbnail: 'https://picsum.photos/seed/3/360/200',
    title: 'Modern Web Development Tutorial',
    channel: 'WebDev Pro',
    views: '180K',
    timestamp: '3 days ago'
  }
];

const Home: FC = () => {
  return (
    <div className="pt-14 pl-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {MOCK_VIDEOS.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Home;