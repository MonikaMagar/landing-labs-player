// src/components/tracks/Tabs.tsx
import React from "react";

export const TAB_IDS = {
  ALL: "all",
  FAVOURITES: "favourites",
  RECENT: "recent",
} as const;

export type TabId = (typeof TAB_IDS)[keyof typeof TAB_IDS];

type TabsProps = {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
};

const TABS: { id: TabId; label: string }[] = [
  { id: TAB_IDS.ALL, label: "All Tracks" },
  { id: TAB_IDS.FAVOURITES, label: "Favourites" },
  { id: TAB_IDS.RECENT, label: "Recently Played" },
];

const Tabs: React.FC<TabsProps> = ({ activeTab, onChange }) => {
  return (
    <div className="flex gap-1.5">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            aria-pressed={isActive}
            className={`
              relative flex-1
              rounded-full px-3 py-1.5
              text-[12px] sm:text-[13px] font-medium
              transition
              ${isActive
                ? "bg-gradient-to-r from-[#9a6fff]/90 to-[#ee5aad]/90 text-white shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            <span className="truncate">{tab.label}</span>

            {isActive && (
              <span
                className="
                  pointer-events-none
                  absolute left-1/2 -bottom-1.5
                  h-0.5 w-8 -translate-x-1/2
                  rounded-full bg-white/80
                "
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
