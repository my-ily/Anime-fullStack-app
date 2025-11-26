
import { FaHome, FaTags, FaHeart, FaDownload, FaCog, FaSignOutAlt } from 'react-icons/fa';
export default function Sidebar() {
  return (
<div
  className="relative flex h-[calc(100vh-8rem)] w-full flex-col w-64 h-screen bg-transparent backdrop-blur-md">
  <div className="p-4 mb-4">
    <h5 className="block text-xl font-semibold text-white">
      Menu
    </h5>
  </div>
  <nav className="flex flex-col gap-2">
    <div role="button"
      className="flex items-center w-full p-3 transition-all rounded-lg outline-none text-start hover:bg-purple-500/20 hover:text-white focus:bg-purple-500/20 active:bg-purple-500/20 cursor-pointer">
      <div className="mr-4">
        <FaHome className="w-5 h-5" />
      </div>
      <span className="text-purple-200">Home</span>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 transition-all rounded-lg outline-none text-start hover:bg-purple-500/20 hover:text-white focus:bg-purple-500/20 active:bg-purple-500/20 cursor-pointer">
      <div className="mr-4">
        <FaTags className="w-5 h-5" />
      </div>
      <span className="text-purple-200">Categories</span>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 transition-all rounded-lg outline-none text-start hover:bg-purple-500/20 hover:text-white focus:bg-purple-500/20 active:bg-purple-500/20 cursor-pointer">
      <div className="mr-4">
        <FaHeart className="w-5 h-5" />
      </div>
      <span className="text-purple-200">Favorites</span>
      <div className="ml-auto">
        <div className="px-2 py-1 text-xs font-bold rounded-full bg-pink-500/30 text-pink-200">
          <span>14</span>
        </div>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 transition-all rounded-lg outline-none text-start hover:bg-purple-500/20 hover:text-white focus:bg-purple-500/20 active:bg-purple-500/20 cursor-pointer">
      <div className="mr-4">
        <FaDownload className="w-5 h-5" />
      </div>
      <span className="text-purple-200">Download</span>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 transition-all rounded-lg outline-none text-start hover:bg-purple-500/20 hover:text-white focus:bg-purple-500/20 active:bg-purple-500/20 cursor-pointer">
      <div className="mr-4">
        <FaCog className="w-5 h-5" />
      </div>
      <span className="text-purple-200">Settings</span>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 transition-all rounded-lg outline-none text-start hover:bg-purple-500/20 hover:text-white focus:bg-purple-500/20 active:bg-purple-500/20 cursor-pointer">
      <div className="mr-4">
        <FaSignOutAlt className="w-5 h-5" />
      </div>
      <span className="text-purple-200">Log Out</span>
    </div>
  </nav>
</div>
  )
}