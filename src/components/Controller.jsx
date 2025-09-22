// src/components/Controller.jsx
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
    <div className="controller">
      <h2>Controller</h2>
      <button onClick={playPreviousTrack}>⏮ Prev</button>
      <button onClick={togglePlay}>{isPlaying ? "⏸ Pause" : "▶️ Play"}</button>
      <button onClick={playNextTrack}>Next ⏭</button>
      <p>Current: {currentTrackName || "None"}</p>
    </div>
  );
};

export default Controller;
