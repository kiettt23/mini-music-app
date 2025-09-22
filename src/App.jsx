import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-8">🎵 Mini Music App</h1>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-xl space-y-6">
          <TrackList />
          <Controller />
        </div>
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
