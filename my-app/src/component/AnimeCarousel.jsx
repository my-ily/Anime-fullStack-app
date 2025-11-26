import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaStar, FaPlay, FaInfoCircle } from "react-icons/fa";

function AnimeCarousel() {
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // جلب البيانات من API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get("https://api.jikan.moe/v4/anime", {
          params: { page: 1, limit: 10 }
        });
        setAnimeList(res.data.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
    };
    fetchAnime();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || animeList.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animeList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, animeList.length]);

  if (animeList.length === 0) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-white text-xl">Loading anime...</div>
      </div>
    );
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % animeList.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + animeList.length) % animeList.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentAnime = animeList[currentIndex];
  
  // Get the highest quality image available
  const getBestImage = () => {
    // Try to get the highest quality image
    const images = currentAnime.images?.jpg;
    if (images?.large_image_url) return images.large_image_url;
    if (images?.image_url) return images.image_url;
    if (images?.small_image_url) return images.small_image_url;
    return '';
  };

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl group bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(${getBestImage()})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-pink-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-12 py-5">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="flex items-center gap-2 mb-4">
            {currentAnime.score && (
              <div className="flex items-center bg-yellow-500/30 px-3 py-1 rounded-full border border-yellow-500/40">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-yellow-300 font-bold">{currentAnime.score}</span>
              </div>
            )}
            {currentAnime.year && (
              <>
                <span className="text-white/80 text-sm">{currentAnime.year}</span>
                <span className="text-white/60 text-sm">•</span>
              </>
            )}
            {currentAnime.genres && currentAnime.genres.length > 0 && (
              <span className="text-white/80 text-sm">{currentAnime.genres[0].name}</span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            {currentAnime.title_english || currentAnime.title}
          </h2>

          {/* Episodes and Status */}
          {(currentAnime.episodes || currentAnime.status) && (
            <p className="text-purple-200 text-lg mb-4 font-medium">
              {currentAnime.episodes && <span>Episodes: <span className="text-white">{currentAnime.episodes}</span></span>}
              {currentAnime.episodes && currentAnime.status && <span className="mx-2">•</span>}
              {currentAnime.status && <span>Status: <span className="text-white">{currentAnime.status}</span></span>}
            </p>
          )}

          {/* Description */}
          {currentAnime.synopsis && (
            <p className="text-white/90 text-lg mb-8 leading-relaxed drop-shadow-lg line-clamp-3">
              {currentAnime.synopsis}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              <FaPlay />
              Watch Now
            </button>
            <a
              href={currentAnime.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 border border-white/30"
            >
              <FaInfoCircle />
              More Info
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {animeList.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-purple-500'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              width: '0%',
              animation: 'progress 5s linear forwards'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default AnimeCarousel;
