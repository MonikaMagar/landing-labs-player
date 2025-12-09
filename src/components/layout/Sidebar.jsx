import React, { useState, useMemo } from "react";
import Tabs, { TAB_IDS } from "../tracks/Tabs";
import TrackList from "../tracks/TrackList";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

const Sidebar = () => {
  const { tracks, favourites, recentlyPlayed } = useAudioPlayer();

  const [activeTab, setActiveTab] = useState(TAB_IDS.ALL);
  const [query, setQuery] = useState("");

  const filteredTracks = useMemo(() => {
    const lower = (query || "").toLowerCase();

    let base = [];

    if (activeTab === TAB_IDS.ALL) {
      base = Array.isArray(tracks) ? tracks : [];
    } else if (activeTab === TAB_IDS.FAVOURITES) {
      base = (Array.isArray(tracks) ? tracks : []).filter((t) =>
        Array.isArray(favourites) ? favourites.includes(t.id) : false
      );
    } else {
      // RECENT: may be track IDs or track objects
      const recent = Array.isArray(recentlyPlayed) ? recentlyPlayed : [];

      base = recent
        .map((item) => {
          if (!item) return null;

          if (typeof item === "string") {
            return (tracks || []).find((t) => t.id === item) || null;
          }

          if (item.id && item.title) {
            return item;
          }

          return null;
        })
        .filter(Boolean);
    }

    return base.filter(
      (t) =>
        t &&
        typeof t.title === "string" &&
        t.title.toLowerCase().includes(lower)
    );
  }, [tracks, favourites, recentlyPlayed, query, activeTab]);

  const isEmpty = !filteredTracks || filteredTracks.length === 0;
  const totalCount = Array.isArray(tracks) ? tracks.length : 0;

  return (
    <div className="h-full flex flex-col bg-black/30">
      {/* Sticky header: title + search + tabs */}
      <div className="sticky top-0 z-10 bg-black/70 backdrop-blur-md border-b border-white/10 px-3 pt-3 pb-3">
        {/* Title row */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-white/70">
              Library
            </h2>
            <p className="text-[11px] text-white/50">
              {totalCount} {totalCount === 1 ? "track" : "tracks"}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/50">
            🔍
          </span>
          <input
            placeholder="Search by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full pl-8 pr-3 py-1.5 rounded-full
              border border-white/15
              bg-white/5
              text-xs text-white
              placeholder:text-white/50
              outline-none
              focus:border-[#9c71ff]
              focus:ring-2 focus:ring-[#9c71ff]/30
            "
          />
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Track list area */}
      <div className="flex-1 px-3 py-3">
        <TrackList
          tracks={filteredTracks}
          activeTab={activeTab}
          isEmpty={isEmpty}
        />
      </div>
    </div>
  );
};

export default Sidebar;
