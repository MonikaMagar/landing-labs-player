import { Track } from "../../utils/dummyTracks";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { formatTime } from "../../utils/formatTime";

type Props = {
  track: Track;
};

const TrackListItem = ({ track }: Props) => {
  const {
    currentTrack,
    isPlaying,
    playTrack,
    toggleFavourite,
    favourites,
  } = useAudioPlayer();

  const isActive = currentTrack?.id === track.id;
  const isFav = favourites.includes(track.id);

  return (
    <button
      onClick={() => playTrack(track)}
      className={`
        w-full
        grid grid-cols-[auto_minmax(0,1fr)_auto]
        items-center
        gap-3 px-2.5 py-2
        rounded-xl
        text-left
        transition
        ${
          isActive
            ? "bg-gradient-to-r from-[#9a6fff]/70 to-[#ee5aad]/70 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            : "hover:bg-white/5"
        }
      `}
    >
      {/* Thumbnail */}
      <img
        src={track.thumbnail}
        alt={track.title}
        className="w-10 h-10 rounded-xl object-cover"
        loading="lazy"
      />

      {/* Metadata (title + artist) */}
      <div className="min-w-0 flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold truncate">
            {track.title}
          </span>

          {/* Green playing dot */}
          {isActive && isPlaying && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </div>

        <span className="text-[11px] text-white/60 truncate">
          {track.artistName}
        </span>
      </div>

      {/* Favourite (heart) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavourite(track.id);
        }}
        className={`
          text-lg
          transition
          ${
            isFav
              ? "text-rose-400"
              : "text-white/50 hover:text-white"
          }
        `}
        aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
      >
        ♥
      </button>
    </button>
  );
};

export default TrackListItem;
