import { TabId } from "./Tabs";

const messages: Record<TabId, { title: string; subtitle: string }> = {
  all: {
    title: "No tracks found",
    subtitle: "Try adjusting your search keywords.",
  },
  favourites: {
    title: "No favourites yet",
    subtitle: "Tap the heart icon on a track to save it here.",
  },
  recent: {
    title: "Nothing played yet",
    subtitle: "Start listening and your recent history will appear here.",
  },
};

const EmptyState = ({ tab }: { tab: TabId }) => {
  const msg = messages[tab];

  return (
    <div
      className="
        flex flex-col items-center justify-center
        text-center
        px-4 py-10
        text-white/70
      "
    >
      {/* Icon */}
      <div
        className="
          text-3xl mb-3
          h-12 w-12 flex items-center justify-center
          rounded-full
          bg-white/5 border border-white/10
          shadow-md shadow-black/40
        "
      >
        ♪
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white mb-1">
        {msg.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-white/60 max-w-[220px]">
        {msg.subtitle}
      </p>
    </div>
  );
};

export default EmptyState;
