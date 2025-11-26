import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🎬</span>
              MovieDB
            </h3>
            <p className="text-gray-400">
              Your ultimate destination for discovering and exploring movies from around the world.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#movies" className="hover:text-yellow-400 transition">Movies</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 MovieDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

