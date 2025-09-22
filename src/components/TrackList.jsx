import useMusicPlayer from "../hooks/useMusicPlayer";

const TrackList = () => {
  const {
    trackList,
    currentTrackName,
    playTrack,
    currentTrackIndex,
    isPlaying,
  } = useMusicPlayer();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Track List</h2>
      <div className="space-y-2">
        {trackList.map((track, index) => (
          <div
            key={index}
            onClick={() => playTrack(index)}
            className={`cursor-pointer px-4 py-2 rounded-lg transition ${
              index === currentTrackIndex
                ? "bg-blue-600 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {track.name}
            {index === currentTrackIndex && (
              <span className="ml-2">{isPlaying ? "▶️" : "⏸️"}</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Now Playing: {currentTrackName || "None"}
      </p>
    </div>
  );
};

export default TrackList;
