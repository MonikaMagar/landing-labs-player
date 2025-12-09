// src/App.jsx
import React from "react";
import PlayerPage from "./pages/PlayerPage";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";

const AppShell = () => {
  // Global keyboard shortcuts: Space (play/pause), Left/Right (prev/next)
  useKeyboardShortcuts();

  return <PlayerPage />;
};

const App = () => {
  return (
    <ErrorBoundary>
      <AudioPlayerProvider>
        <AppShell />
      </AudioPlayerProvider>
    </ErrorBoundary>
  );
};

export default App;
