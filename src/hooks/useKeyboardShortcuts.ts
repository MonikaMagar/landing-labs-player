import { useEffect } from "react";
import { useAudioPlayer } from "../context/AudioPlayerContext";

export const useKeyboardShortcuts = () => {
  const { togglePlay, nextTrack, prevTrack } = useAudioPlayer();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.code === "ArrowRight") {
        nextTrack();
      } else if (e.code === "ArrowLeft") {
        prevTrack();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [togglePlay, nextTrack, prevTrack]);
};
