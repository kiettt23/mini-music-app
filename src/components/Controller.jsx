import useMusicPlayer from "../hooks/useMusicPlayer";

const Controller = () => {
  const {
    togglePlay,
    playNextTrack,
    playPreviousTrack,
    isPlaying,
    currentTrackName,
  } = useMusicPlayer();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Controller</h2>
      <div className="flex gap-4">
        <button
          onClick={playPreviousTrack}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
        >
          ⏮ Prev
        </button>
        <button
          onClick={togglePlay}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
        >
          {isPlaying ? "⏸ Pause" : "▶️ Play"}
        </button>
        <button
          onClick={playNextTrack}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
        >
          Next ⏭
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Current: {currentTrackName || "None"}
      </p>
    </div>
  );
};

export default Controller;
