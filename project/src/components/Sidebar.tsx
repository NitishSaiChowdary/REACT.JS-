import React from 'react';
import { FC } from 'react';
import { AiFillHome, AiOutlineHistory, AiOutlineLike } from 'react-icons/ai';
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar: FC = () => {
  return (
    <aside className="w-64 bg-white fixed h-full left-0 top-14 p-2">
      <div className="flex flex-col gap-2">
        <Link to="/" className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg">
          <AiFillHome className="text-2xl" />
          <span>Home</span>
        </Link>
        <Link to="/subscriptions" className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg">
          <MdSubscriptions className="text-2xl" />
          <span>Subscriptions</span>
        </Link>
        <Link to="/library" className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg">
          <MdVideoLibrary className="text-2xl" />
          <span>Library</span>
        </Link>
        <Link to="/history" className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg">
          <AiOutlineHistory className="text-2xl" />
          <span>History</span>
        </Link>
        <Link to="/liked" className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg">
          <AiOutlineLike className="text-2xl" />
          <span>Liked Videos</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;