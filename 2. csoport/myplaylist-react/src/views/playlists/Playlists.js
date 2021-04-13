import { useContext } from 'react';

import { PlaylistForm } from './PlaylistForm';
import { PlaylistLists } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { Tracklist } from './Tracklist';

import { exampleTracks } from '../../domain/track';
import { useParams } from 'react-router';
import { PlaylistsContext } from '../../state/PlaylistsProvider';

export function Playlists() {
    const { playlistId, trackId } = useParams();

    const {playlists, addNewPlaylist} = useContext(PlaylistsContext);

    const playlistsWithTracks = playlists.map(playlist => ({
        ...playlist,
        tracks: playlist.tracks.map(trackId => exampleTracks.find(track => track.id === trackId))
    }));

    const selectedPlaylist = playlistsWithTracks.find((p) => p.id === playlistId);
    const selectedTrack = exampleTracks.find((t) => t.id === trackId);

    return (
        <div className="ui container">
            <h1>My Playlists</h1>
            <div className="ui stackable two column grid">
                <div className="ui six wide column">
                    <h3>Playlists</h3>
                    <PlaylistForm onSubmit={addNewPlaylist} />
                    <PlaylistLists playlists={playlists} />
                </div>
                <div className="ui ten wide column">
                    <Tracklist playlist={selectedPlaylist} />
                </div>
            </div>
            <div className="ui divider"></div>
            <TrackDetails track={selectedTrack} />
        </div>
    );
}
