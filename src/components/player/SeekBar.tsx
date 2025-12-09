import { useAudioPlayer } from "../../context/AudioPlayerContext";

const SeekBar = ({ progress }: { progress: number }) => {
  const { seekTo } = useAudioPlayer();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    seekTo(value / 100);
  };

  return (
    <input
      type="range"
      min={0}
      max={100}
      value={Math.round(progress * 100)}
      onChange={handleChange}
      className="
        w-full h-1.5 rounded-full appearance-none cursor-pointer
        bg-white/20
        accent-[#9c71ff]
        
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:shadow-[0_0_6px_rgba(255,255,255,0.8)]
        [&::-webkit-slider-thumb]:cursor-pointer

        [&::-moz-range-thumb]:h-4
        [&::-moz-range-thumb]:w-4
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-white
        [&::-moz-range-thumb]:cursor-pointer
      "
    />
  );
};

export default SeekBar;
