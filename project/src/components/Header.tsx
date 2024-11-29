import React from 'react';
import { FC } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineVideoCamera, AiOutlineBell } from 'react-icons/ai';

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-14 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <AiOutlineMenu className="text-2xl" />
        </button>
        <img src="/youtube-logo.png" alt="YouTube" className="h-5" />
      </div>

      <div className="flex items-center flex-grow justify-center max-w-2xl">
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="px-6 py-2 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100">
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <AiOutlineVideoCamera className="text-2xl" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <AiOutlineBell className="text-2xl" />
        </button>
        <button className="w-8 h-8 rounded-full bg-gray-200">
          <span className="sr-only">User Profile</span>
        </button>
      </div>
    </header>
  );
};

export default Header;