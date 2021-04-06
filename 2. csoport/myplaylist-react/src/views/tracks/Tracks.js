import { Track } from "./Track";
import { TrackModal } from "./TrackModal";

import { exampleTracks } from "../../domain/track";
import { useState } from "react";



export function Tracks() {
    const [open, setOpen] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="ui container">
                <button
                    href="#"
                    className="ui right floated green button"
                    id="newModal"
                    onClick={handleOpen}
                >
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
                        
                        {exampleTracks.map(track => (
                            <Track key={track.id} track={track} />
                        ))}
                        
                    </tbody>
                </table>
            </div>

            <TrackModal open={open} onClose={handleClose} />
        </>
    );
}
