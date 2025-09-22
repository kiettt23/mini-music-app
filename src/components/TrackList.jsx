// src/components/TrackList.jsx
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
    <div className="track-list">
      <h2>Track List</h2>
      {trackList.map((track, index) => (
        <div
          key={index}
          className={`song-title ${
            index === currentTrackIndex ? "active" : ""
          }`}
          onClick={() => playTrack(index)}
        >
          {track.name}
          {index === currentTrackIndex && isPlaying && <span> ▶️</span>}
          {index === currentTrackIndex && !isPlaying && <span> ⏸️</span>}
        </div>
      ))}
      <p>Now Playing: {currentTrackName || "None"}</p>
    </div>
  );
};

export default TrackList;
