import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Player from "../components/player/Player";
import MiniPlayer from "../components/player/MiniPlayer";
import SlideOutMenu from "../components/layout/Sidebar";
import FeaturedPlaylists from "../components/home/FeaturedPlaylists";
import { useDominantColor } from "../hooks/useDominantColor";
import { useAudioPlayer } from "../context/AudioPlayerContext";

const PlayerPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentTrack } = useAudioPlayer();
  const { gradientStyle } = useDominantColor(currentTrack?.thumbnail);

  return (
    <div
      className="min-h-screen w-full text-white bg-gradient-to-br from-slate-950 via-slate-900 to-black"
      style={gradientStyle}
    >
      {/* Glass overlay like Gaana background */}
      <div className="min-h-screen flex flex-col bg-black/40 backdrop-blur-2xl">
        {/* Mobile top bar */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-white/10 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full border border-white/20 bg-white/5"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>

          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold tracking-wide">
              {currentTrack ? "Now Playing" : "Listen"}
            </span>
            <span className="text-[11px] text-white/60 max-w-[200px] truncate">
              {currentTrack?.title || "Browse your favourite songs"}
            </span>
          </div>

          <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs">
            🎧
          </div>
        </header>

        {/* Main layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop sidebar */}
          <aside className="hidden lg:flex lg:w-72 xl:w-80 border-r border-white/10 bg-black/40">
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
              <Sidebar />
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 flex flex-col">
            {/* ===== existing player + right column section ===== */}
            <section className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 xl:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
              {/* Player card */}
              <div className="w-full lg:w-2/3 xl:w-3/4">
                <div className="h-full rounded-3xl bg-white/5 border border-white/10 p-4 lg:p-6 shadow-2xl shadow-black/50">
                  <Player />
                </div>
              </div>

              {/* Right side: Up Next / Similar */}
              <div className="hidden lg:flex w-1/3 xl:w-1/4 flex-col gap-4">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-4 flex-1">
                  <h2 className="text-sm font-semibold tracking-wide mb-3">
                    Up Next
                  </h2>
                  <div className="space-y-3 text-xs text-white/70">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Song Title</p>
                        <p className="text-[11px] text-white/50">Artist Name</p>
                      </div>
                      <span className="text-[11px] text-white/50">3:45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Song Title</p>
                        <p className="text-[11px] text-white/50">Artist Name</p>
                      </div>
                      <span className="text-[11px] text-white/50">4:12</span>
                    </div>
                    <div className="mt-2 text-[11px] text-white/40">
                      Connect this with your queue data.
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-4">
                  <h2 className="text-sm font-semibold tracking-wide mb-3">
                    Similar Songs
                  </h2>
                  <p className="text-xs text-white/60">
                    Show recommendations based on{" "}
                    <span className="font-medium">
                      {currentTrack?.title || "current track"}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* ===== Featured playlists footer section ===== */}
            <FeaturedPlaylists />
          </main>
        </div>

        {/* Mobile slide-out menu – ONLY mobile */}
        <div className="lg:hidden">
          <SlideOutMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          >
            <div className="h-full bg-black/95 text-white flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-sm font-semibold tracking-wide">
                  Library
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
                <Sidebar />
              </div>
            </div>
          </SlideOutMenu>
        </div>

        {/* Sticky bottom mini-player */}
        <footer className="border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-3 lg:px-6">
            <MiniPlayer onOpenMenu={() => setIsMenuOpen(true)} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PlayerPage;
