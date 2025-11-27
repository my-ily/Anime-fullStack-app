import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaHeart } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative mt-auto bg-gradient-to-b from-black via-black/95 to-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] opacity-50"></div>
      
      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              <span className="text-3xl mr-2">🎬</span>
              AnimeHub
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for discovering and exploring the best anime from around the world.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#movies" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Browse Anime
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Categories
                </a>
              </li>
              <li>
                <a href="#top" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Top Rated
                </a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#adventure" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Adventure
                </a>
              </li>
              <li>
                <a href="#comedy" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Comedy
                </a>
              </li>
              <li>
                <a href="#drama" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Drama
                </a>
              </li>
              <li>
                <a href="#fantasy" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Fantasy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Follow us for the latest updates and anime news
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-200 group"
                aria-label="Facebook"
              >
                <FaFacebook className="text-sm group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-200 group"
                aria-label="Twitter"
              >
                <FaTwitter className="text-sm group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-200 group"
                aria-label="YouTube"
              >
                <FaYoutube className="text-sm group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-200 group"
                aria-label="GitHub"
              >
                <FaGithub className="text-sm group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center">
              &copy; 2024 AnimeHub. Made with <FaHeart className="text-red-500 mx-1 text-xs" /> for anime lovers
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

