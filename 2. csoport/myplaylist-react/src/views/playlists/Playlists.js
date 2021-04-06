import { useState } from 'react';

import { PlaylistForm } from './PlaylistForm';
import { PlaylistLists } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { Tracklist } from './Tracklist';

import { exampleTracks } from '../../domain/track';
import { examplePlaylists } from '../../domain/playlist';
import { useParams } from 'react-router';

export function Playlists() {
    const { playlistId, trackId } = useParams();

    const [playlists, setPlaylists] = useState(examplePlaylists);

    const selectedPlaylist = playlists.find(
        (p) => p.id === playlistId
    );
    const selectedTrack = exampleTracks.find((t) => t.id === trackId);

    const addNewPlaylist = title => {
        console.log(title);

        const id = playlists.reduce((maxId, p) => Math.max(maxId, p.id), 0) + 1
        setPlaylists([...playlists, {id, title, tracks: []}])
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
                    />
                </div>
                <div className="ui ten wide column">
                    <Tracklist
                        playlist={selectedPlaylist}
                    />
                </div>
            </div>
            <div className="ui divider"></div>
            <TrackDetails track={selectedTrack} />
        </div>
    );
}
