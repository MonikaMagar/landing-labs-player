const WaveVisualizer = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div
      className={`
        flex items-end gap-[4px] h-6
        ${isPlaying ? "wave-active" : "wave-paused"}
      `}
    >
      <span className="wave-bar" />
      <span className="wave-bar" />
      <span className="wave-bar" />
      <span className="wave-bar" />
    </div>
  );
};

export default WaveVisualizer;
