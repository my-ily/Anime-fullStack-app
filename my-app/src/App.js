import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import AnimeCarousel from './component/AnimeCarousel';
import AuthContainer from './component/auth/AuthContainer';
import axios from 'axios';
import { FaStar, FaPlay, FaInfoCircle } from 'react-icons/fa';

// Initial State
const initialState = {
  allAnimes: [],
  filteredAnimes: [],
  topAnimes: [],
  selectedCategory: "All"
};

// Action Types
const ACTIONS = {
  SET_ANIMES: 'SET_ANIMES',
  FILTER_BY_CATEGORY: 'FILTER_BY_CATEGORY'
};

// Reducer Function
function animeReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ANIMES:
      return {
        ...state,
        allAnimes: action.payload,
        filteredAnimes: action.payload,
        topAnimes: action.payload.slice(0, 6)
      };

    case ACTIONS.FILTER_BY_CATEGORY:
      const category = action.payload;
      let filtered = state.allAnimes;

      if (category !== "All") {
        filtered = state.allAnimes.filter((anime) =>
          anime.genres?.some((g) => g.name === category)
        );
      }

      return {
        ...state,
        selectedCategory: category,
        filteredAnimes: filtered
      };

    default:
      return state;
  }
}

function App() {
  const [model, setModel] = useState(false);
  const [state, dispatch] = useReducer(animeReducer, initialState);

  const categories = ["All", "Adventure", "Comedy", "Drama", "Fantasy"];

  const handleCategory = (category) => {
    dispatch({ type: ACTIONS.FILTER_BY_CATEGORY, payload: category });
  };

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get("http://localhost:5051/anime", {
          params: { page: 1, limit: 25 }
        });
        dispatch({ type: ACTIONS.SET_ANIMES, payload: res.data.data });
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
    };
    fetchAnime();
  }, []);



const handleFilteList=(cat)=>{



}
const handleModel = ()=>{
  setModel(!model)
}

  return (
    <>
   
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-black to-black transition-all duration-300 px-3">
        <Navbar model={model} setModel={setModel} handleModel={handleModel}/>
      <section>
        <main className="flex-grow pt-20 flex">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 px-4">
            <Sidebar />
          </aside>
 <AuthContainer model={model} setModel={setModel} handleModel={handleModel}/>
          {/* main content */}
          <div className="flex-1 px-6 py-4">
            <AnimeCarousel />
          </div>

          {/* Top Movies section aligned to the right of the carousel */}
          <div className="w-64 ml-6 flex-shrink-0 text-white">
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Top Movies</h2>
            <div className="flex flex-col gap-4">
              {state.topAnimes.map((anime) => (
                <div key={anime.mal_id} className="flex bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-2 border border-white/10 hover:border-purple-500/30 transition-all duration-200 cursor-pointer group">
                  <img
                    src={anime.images?.jpg?.image_url}
                    alt={anime.title}
                    className="w-16 h-24 object-cover rounded-md transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="ml-3 flex flex-col justify-center">
                    <h3 className="text-md font-bold text-purple-200 group-hover:text-purple-300 transition-colors">{anime.title}</h3>
                    <p className="text-xs text-gray-300">{anime.synopsis?.slice(0, 60)}...</p>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </main>
      </section>

<section className='flex flex-col gap-6 text-white px-6 py-8'>
  <h1 className='text-3xl font-bold text-white mb-2'>Browse by Category</h1>


      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategory(category)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 border cursor-pointer
              ${
                state.selectedCategory === category
                  ? "bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border-purple-500/30"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 border-white/10 hover:border-white/20"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
  <div className='grid grid-cols-4 gap-6'>
    {state.filteredAnimes.map((anime) => (
    <div 
      key={anime.mal_id}
      className="group relative w-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
    >
      {/* Poster */}
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url}
          alt={anime.title_english || anime.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Rating Badge */}
        {anime.score && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-yellow-500/30">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-yellow-300 font-bold text-sm">{anime.score}</span>
          </div>
        )}

        {/* Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100">
          <FaPlay className="text-lg ml-1" />
        </button>
      </div>

      {/* Info Card */}
      <div className="p-5 bg-gradient-to-b from-black/80 to-black/90">
        <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-200">
          {anime.title_english || anime.title}
        </h2>
        
        {/* Genres */}
        {anime.genres && anime.genres.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {anime.genres.slice(0, 2).map((genre, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30"
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        {anime.synopsis && (
          <p className="text-sm text-gray-400 line-clamp-2 mb-3">
            {anime.synopsis}
          </p>
        )}

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          {anime.year && (
            <span className="text-xs text-gray-400">{anime.year}</span>
          )}
          {anime.episodes && (
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <FaInfoCircle className="text-purple-400" />
              <span>{anime.episodes} Episodes</span>
            </div>
          )}
        </div>
      </div>
    </div>
    ))}
  </div>
</section>

        <Footer />
      </div>

    </>
  )
  
}

export default App
