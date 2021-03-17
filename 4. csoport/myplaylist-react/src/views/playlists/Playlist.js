import { useState } from 'react';

import { PlaylistForm } from './PlaylistForm';
import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { Tracklist } from './Tracklist';

import { examplePlaylists } from '../../domain/playlist';
import { exampleTracks } from '../../domain/track';
import { useParams } from 'react-router';

export function Playlist() {
    const { playlistId: strPlaylistId, trackId: strTrackId } = useParams();
    const playlistId = Number.parseInt(strPlaylistId);
    const trackId = Number.parseInt(strTrackId);

    const [selectedPlaylistId, setSelectedPlaylistId] = useState(playlistId);
    const [selectedTrackId, setSelectedTrackId] = useState(trackId);

    const [playlists, setPlaylists] = useState(examplePlaylists);

    const selectedPlaylist = playlists.find((p) => p.id === selectedPlaylistId);
    const selectedTrack = exampleTracks.find((t) => t.id === selectedTrackId);

    function handlePlaylistChange(id) {
        setSelectedPlaylistId(id);
        setSelectedTrackId(null);
    }

    const addNewPlaylist = (title) => {
        console.log(title);

        const id = playlists.reduce((maxId, p) => Math.max(maxId, p.id), 0) + 1;
        setPlaylists([...playlists, { id, title, tracks: [] }]);
    };

    return (
        <div className="ui container">
            <h1>My Playlists</h1>
            <div className="ui stackable two column grid">
                <div className="ui six wide column">
                    <h3>Playlists</h3>
                    <PlaylistForm onSubmit={addNewPlaylist} />
                    <PlaylistList
                        playlists={playlists}
                        selectedPlaylistId={selectedPlaylistId}
                        onSelect={handlePlaylistChange}
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
