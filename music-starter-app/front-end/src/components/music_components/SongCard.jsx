import { useState } from "react";
import { Heart } from "lucide-react";
import PlayPause from "../PlayPause";

const SongCard = ({ song, isPlaying, activeSong, i, data, handlePlayClick, handlePauseClick }) => {
 
  const [isFavorited, setIsFavorited] = useState(false);
  const currentSong = data?.music_list?.[i] || song;
  const songName = currentSong?.album || "Unknown Album";
  const artistName = currentSong?.author || "Unknown Artist";
  const imageUrl =
    currentSong?.cover_large?.url_list?.[0] ||
    currentSong?.cover_medium?.url_list?.[0] ||
    currentSong?.cover_thumb?.url_list?.[0] ||
    "";

    const toggleFavorite = () => {
      setIsFavorited(!isFavorited);
      handleFavoriteClick(currentSong, !isFavorited); // Pass data to parent for backend update
    };

  return (
    <div className="flex flex-col w-[300px] p-5 bg-gradient-to-r from-green-500 to-teal-500 bg-opacity-90 backdrop-blur-md animate-fadeIn rounded-xl shadow-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === currentSong?.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={currentSong} 
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
            data={data}
            i={i}
          />
        </div>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${songName} cover`}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white">
            No Image Available
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-black text-lg font-semibold truncate">{songName}</p>
        <p className="text-black-400 text-sm truncate">{artistName}</p>
      </div>
      <div
        className="absolute bottom-4 right-4 cursor-pointer"
        onClick={toggleFavorite}
      >
        <Heart
          className={`w-6 h-6 ${
            isFavorited ? "text-red-500" : "text-black-400"
          }`}
          fill={isFavorited ? "currentColor" : "none"}
        />
      </div>
    </div>
  );
};

export default SongCard;


