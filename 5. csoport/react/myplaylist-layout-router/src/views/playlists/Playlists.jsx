import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackList } from "./TrackList";
import { TrackDetails } from "./TrackDetails";

import { examplePlaylists } from "../../domain/playlist";
import { useParams } from "react-router-dom";

export const Playlists = () => {
  const { playlistID, trackID } = useParams();
  const selectedPlaylistId = parseInt(playlistID);

  const playlists = examplePlaylists;

  // Computed values
  const selectedPlaylist = playlists.find((pl) => pl.id === selectedPlaylistId);
  // console.log(selectedPlaylist);

  const selectedTrackID = parseInt(trackID);
  const selectedTrack = selectedPlaylist.tracks.find((tr) => tr.id === selectedTrackID);

  console.log(selectedTrackID);

  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <PlaylistForm />
          <PlaylistList playlists={playlists} selectedPlaylistId={selectedPlaylistId} />
        </div>
        <div className="ui ten wide column">
          {selectedPlaylist && 
            <TrackList playlist={selectedPlaylist} />
          }
        </div>
      </div>
      <div className="ui divider"></div>
          {selectedTrack && 
            <TrackDetails track={selectedTrack} />
          }
    </div>
  );
};
