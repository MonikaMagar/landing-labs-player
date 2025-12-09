import { Track } from "../../utils/dummyTracks";
import TrackListItem from "./TrackListItem";
import EmptyState from "./EmptyState";
import { TabId } from "./Tabs";

type Props = {
  tracks: Track[];
  activeTab: TabId;
  isEmpty: boolean;
};

const TrackList = ({ tracks, activeTab, isEmpty }: Props) => {
  if (isEmpty) {
    return <EmptyState tab={activeTab} />;
  }

  return (
    <div className="track-list inertia-scroll">
      {tracks.map(track => (
        <TrackListItem key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackList;
