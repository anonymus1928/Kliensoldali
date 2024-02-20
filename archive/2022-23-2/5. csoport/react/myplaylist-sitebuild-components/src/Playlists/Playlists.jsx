import { useState } from "react";
import { PlaylistList } from "./PlaylistList";
import { TrackDetails } from "./TrackDetails";
import { Tracklist } from "./Tracklist";
import { examplePlaylists } from "../../sitebuild/domain/playlist";

export function Playlists() {
  const [activePlaylist, setActivePlaylist] = useState(1);

  const playlist = examplePlaylists.find(p => p.id === activePlaylist);

  return (
    <>
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <PlaylistList playlists={examplePlaylists} activePlaylist={activePlaylist} setActivePlaylist={setActivePlaylist} />
        </div>
        <div className="ui ten wide column">
          <Tracklist playlist={playlist} />
        </div>
      </div>
      <div className="ui divider"></div>
      <div className="ui segment">
        <div className="ui items">
          <div className="item">
            <TrackDetails />
          </div>
        </div>
      </div>
    </>
  );
}
