import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa'

function Navbar({model , setModel ,handleModel}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-lg  ">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Anime
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-purple-200 hover:text-white transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#movies" className="text-purple-200 hover:text-white transition-colors duration-200 font-medium">
              Movies
            </a>
            <a href="#about" className="text-purple-200 hover:text-white transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-purple-200 hover:text-white transition-colors duration-200 font-medium">
              Contact
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-purple-100 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent w-64"
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>



            <button  className="relative p-2 text-purple-200 hover:text-white transition-colors">
              <FaBell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>





            <button 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-purple-300/50 cursor-pointer hover:scale-105 transition-transform"
           onClick={handleModel}
            ></button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-purple-200 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-purple-500/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-purple-200 hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="#movies" className="text-purple-200 hover:text-white transition-colors font-medium">
                Movies
              </a>
              <a href="#about" className="text-purple-200 hover:text-white transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-purple-200 hover:text-white transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

