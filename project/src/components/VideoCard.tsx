import React from 'react';
import { FC } from 'react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

const VideoCard: FC<VideoCardProps> = ({ thumbnail, title, channel, views, timestamp }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover rounded-xl"
        />
      </div>
      <div className="flex gap-2">
        <div className="w-9 h-9 rounded-full bg-gray-200"></div>
        <div>
          <h3 className="font-medium line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600">{channel}</p>
          <p className="text-sm text-gray-600">
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;