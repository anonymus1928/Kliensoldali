import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useState } from "react";
import { exampleTracks } from "../../domain/track";


export function Tracks() {
  const [open, setOpen] = useState(false);
  const [tracks, setTracks] = useState(exampleTracks);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const createTrack = (track) => {
    const id = Math.max(...tracks.map(t => t.id)) + 1;
    setTracks([...tracks, {...track, id}])
  };

  const removeTrack = (id) => {
    setTracks(tracks.filter(track => track.id !== id));
  }

  return (
    <>
      <div className="ui container">
        <button href="#" className="ui right floated green button" id="newModal" onClick={handleOpen}>
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track key={track.id} track={track} removeTrack={removeTrack} />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm open={open} handleClose={handleClose} createTrack={createTrack} />
    </>
  );
}
