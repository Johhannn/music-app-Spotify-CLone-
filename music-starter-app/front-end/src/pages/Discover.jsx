import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import usePlayerStore from '../components/music_components/UsePlayerStore';
import useMusicStore from '../zustand/Service/shazamCoreApi';
import Error from "../components/music_components/Error";
import SongCard from "../components/music_components/SongCard";




const Discover = () => {
  const activeSong = usePlayerStore((state) => state.activeSong);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const playSong = usePlayerStore((state) => state.playSong);
  const pauseSong = usePlayerStore((state) => state.pauseSong);
  const { musicData, error, loading, fetchMusicData } = useMusicStore();

  useEffect(() => {
    fetchMusicData();
  }, [fetchMusicData]);

  if (loading) return <Loader2 title="Loading song..." />;
  if (error) return <Error title="Something went wrong..." />;

  
  const songs = Array.isArray(musicData?.music_list) ? musicData.music_list : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-teal-500">
      <div className="flex flex-wrap justify-center items-start w-full pt-10">
        <div className="w-full flex justify-around items-center sm:flex-row mt-4 mb-10">
          <h2 className="ffont-semibold text-4xl text-black text-center mt-8">
            &nbsp;&nbsp;&nbsp;&nbsp;Explore Music
          </h2>
        </div>

        {/* Adjusting the song cards container */}
        <div className="flex flex-wrap justify-evenly gap-6 w-full px-6 py-4">
          {songs.length > 0 ? (
            songs.map((song, i) => (
              <SongCard
                key={song.id || i} 
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePlayClick={() => playSong(i)}  
                handlePauseClick={pauseSong}
              />
            ))
          ) : (
            <p className="text-white">No songs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;


