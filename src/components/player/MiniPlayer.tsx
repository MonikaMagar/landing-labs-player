import { useAudioPlayer } from "../../context/AudioPlayerContext";

type Props = {
  onOpenMenu: () => void;
};

const MiniPlayer = ({ onOpenMenu }: Props) => {
  const { currentTrack, isPlaying, togglePlay } = useAudioPlayer();

  if (!currentTrack) return null;

  return (
    <div
      className="
        md:hidden
        flex items-center gap-3
        px-3 py-2
        border-t border-white/10
        bg-black/80 backdrop-blur-xl
      "
    >
      {/* Menu button */}
      <button
        className="
          flex items-center justify-center
          h-9 w-9 rounded-full
          border border-white/20
          bg-white/5
          text-base
        "
        onClick={onOpenMenu}
      >
        ☰
      </button>

      {/* Thumbnail */}
      <img
        src={currentTrack.thumbnail}
        alt={currentTrack.title}
        className="w-10 h-10 rounded-xl object-cover"
      />

      {/* Meta */}
      <div className="min-w-0 flex-1 flex flex-col">
        <span className="text-sm font-semibold truncate">
          {currentTrack.title}
        </span>
        <span className="text-[11px] text-white/70 truncate">
          {currentTrack.artistName}
        </span>
      </div>

      {/* Play / Pause */}
      <button
        className="
          flex items-center justify-center
          px-3 py-1.5
          rounded-full
          text-sm font-medium
          bg-[#9c71ff]/90 hover:bg-[#9c71ff]
          text-white
          shadow-md shadow-black/40
        "
        onClick={togglePlay}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
    </div>
  );
};

export default MiniPlayer;
