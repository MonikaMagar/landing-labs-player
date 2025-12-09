import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { tracks, Track } from "../utils/dummyTracks";

type AudioContextValue = {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;    // 0–1
  currentTime: number;
  duration: number;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seekTo: (ratio: number) => void;
  favourites: string[];
  toggleFavourite: (id: string) => void;
  recentlyPlayed: Track[];
};

const AudioPlayerContext = createContext<AudioContextValue | undefined>(
  undefined
);

const FAV_KEY = "landing_player_favs";
const RECENT_KEY = "landing_player_recent";

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [favourites, setFavourites] = useState<string[]>(() => {
    const saved = localStorage.getItem(FAV_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [recentlyPlayed, setRecentlyPlayed] = useState<Track[]>(() => {
    const saved = sessionStorage.getItem(RECENT_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Sync favourites / recent to storage
  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    sessionStorage.setItem(RECENT_KEY, JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);

    // Add to recently played (max 10, no duplicates at front)
    setRecentlyPlayed(prev => {
      const without = prev.filter(t => t.id !== track.id);
      const next = [track, ...without].slice(0, 10);
      return next;
    });
  };

  const togglePlay = () => setIsPlaying(prev => !prev);

  const nextTrack = () => {
    if (!currentTrack) return;
    const idx = tracks.findIndex(t => t.id === currentTrack.id);
    const next = tracks[(idx + 1) % tracks.length];
    playTrack(next);
  };

  const prevTrack = () => {
    if (!currentTrack) return;
    const idx = tracks.findIndex(t => t.id === currentTrack.id);
    const prev = tracks[(idx - 1 + tracks.length) % tracks.length];
    playTrack(prev);
  };

  const seekTo = (ratio: number) => {
    if (!audioRef.current || !duration) return;
    audioRef.current.currentTime = ratio * duration;
  };

  const toggleFavourite = (id: string) => {
    setFavourites(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Attach audio element events
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const { currentTime, duration } = audioRef.current;
    setCurrentTime(currentTime);
    setDuration(duration || 0);
    setProgress(duration ? currentTime / duration : 0);
  };

  const handleEnded = () => {
    nextTrack();
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  });

  // Sync isPlaying + currentTrack with <audio />
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.musicUrl;
    if (isPlaying) {
      audio
        .play()
        .catch(() => {
          // autoplay blocked
        });
    } else {
      audio.pause();
    }
  }, [currentTrack, isPlaying]);

  const value: AudioContextValue = {
    tracks,
    currentTrack,
    isPlaying,
    progress,
    currentTime,
    duration,
    playTrack,
    togglePlay,
    nextTrack,
    prevTrack,
    seekTo,
    favourites,
    toggleFavourite,
    recentlyPlayed,
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
      {/* hidden global audio element */}
      <audio ref={audioRef} preload="metadata" />
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) throw new Error("useAudioPlayer must be used inside provider");
  return ctx;
};
