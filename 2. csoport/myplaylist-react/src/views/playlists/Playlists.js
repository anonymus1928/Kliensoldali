import { useState } from 'react';

import { PlaylistForm } from './PlaylistForm';
import { PlaylistLists } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { Tracklist } from './Tracklist';

import { exampleTracks } from '../../domain/track';
import { examplePlaylists } from '../../domain/playlist';

export function Playlists() {
    // const selectedPlaylistId = 1;
    // const selectedTrackId = 1;
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
    const [selectedTrackId, setSelectedTrackId] = useState(1);

    
    const [playlists, setPlaylists] = useState(examplePlaylists); // később...


    const selectedPlaylist = playlists.find(
        (p) => p.id === selectedPlaylistId
    );
    const selectedTrack = exampleTracks.find((t) => t.id === selectedTrackId);




    function handlePlaylistChange(id) {
        setSelectedPlaylistId(id);
        setSelectedTrackId(null); // error: nem voltunk felkészülve arra, hogy ez null
    }

    const addNewPlaylist = title => {
        console.log(title);

        const id = playlists.reduce((maxId, p) => Math.max(maxId, p.id), 0) + 1
        setPlaylists([...playlists, {id, title, tracks: []}]) // playlists.push() nem jó!
    }

    return (
        <div className="ui container">
            <h1>My Playlists</h1>
            <div className="ui stackable two column grid">
                <div className="ui six wide column">
                    <h3>Playlists</h3>
                    <PlaylistForm onSubmit={addNewPlaylist} />
                    <PlaylistLists
                        playlists={playlists}
                        selectedPlaylistId={selectedPlaylistId}
                        onSelect={/* setSelectedPlaylistId */ handlePlaylistChange}
                    />
                </div>
                <div className="ui ten wide column">
                    <Tracklist
                        playlist={selectedPlaylist}
                        selectedTrackId={selectedTrackId}
                        onSelect={setSelectedTrackId}
                    />
                </div>
            </div>
            <div className="ui divider"></div>
            <TrackDetails track={selectedTrack} />
        </div>
    );
}
