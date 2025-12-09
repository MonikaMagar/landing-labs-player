import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { formatTime } from "../../utils/formatTime";
import WaveVisualizer from "./WaveVisualizer";
import SeekBar from "./SeekBar";

const Player = () => {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    currentTime,
    duration,
    progress,
    favourites,
    toggleFavourite,
  } = useAudioPlayer();

  if (!currentTrack) return null;

  const isFav = favourites.includes(currentTrack.id);

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-8 items-center">
      {/* LEFT: Cover */}
      <div className="w-full md:w-[280px] flex justify-center md:justify-start">
        <div className="relative">
          <img
            src={currentTrack.thumbnail}
            alt={currentTrack.title}
            className="
              w-56 h-56 md:w-72 md:h-72
              rounded-3xl object-cover
              shadow-[0_24px_60px_rgba(0,0,0,0.8)]
            "
          />
        </div>
      </div>

      {/* RIGHT: Info + Controls */}
      <div className="flex-1 flex flex-col gap-5 md:gap-6 justify-center w-full">
        
        {/* Title + Artist + Favourite */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
              {currentTrack.title}
            </h1>
            <p className="mt-1 text-sm md:text-base text-white/70">
              {currentTrack.artistName}
            </p>
          </div>

          {/* ❤️ Favourite button */}
          <button
            onClick={() => toggleFavourite(currentTrack.id)}
            className={`
              text-2xl md:text-3xl ml-3 transition
              ${isFav ? "text-rose-400" : "text-white/50 hover:text-white"}
            `}
            aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
          >
            {isFav ? "♥" : "♡"}
          </button>
        </div>

        <WaveVisualizer isPlaying={isPlaying} />
        <SeekBar progress={progress} />

        <div className="flex items-center justify-between text-xs md:text-sm text-white/70">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={prevTrack}
            className="
              rounded-full px-3 py-2 text-sm
              bg-white/5 border border-white/10
              hover:bg-white/10 active:scale-95 transition
            "
          >
            ◀◀
          </button>

          <button
            onClick={togglePlay}
            className="
              h-12 w-12 md:h-14 md:w-14
              flex items-center justify-center
              rounded-full bg-white text-black text-lg md:text-xl
              shadow-[0_18px_40px_rgba(0,0,0,0.9)]
              active:scale-95 transition
            "
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button
            onClick={nextTrack}
            className="
              rounded-full px-3 py-2 text-sm
              bg-white/5 border border-white/10
              hover:bg-white/10 active:scale-95 transition
            "
          >
            ▶▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
