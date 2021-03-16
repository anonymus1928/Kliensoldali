import React from 'react';
import { Menu } from './menu/Menu';
import { PlaylistForm } from './playlists/PlaylistForm';
import { PlaylistLists } from './playlists/PlaylistList';
import { Tracklist } from './playlists/Tracklist';
import { TrackDetails } from './playlists/TrackDetails';

import { examplePlaylists } from '../domain/playlist';
import { exampleTracks } from '../domain/track';


export function App() {
    const selectedPlaylist = examplePlaylists[0];
    const selectedTrack = exampleTracks[0];
    return (
        <div className="ui container">
            <Menu />
            <div className="ui container">
                <h1>My Playlists</h1>
                <div className="ui stackable two column grid">
                    <div className="ui six wide column">
                        <h3>Playlists</h3>
                        <PlaylistForm />
                        <PlaylistLists playlists={examplePlaylists} selectedPlaylistId={1} />
                    </div>
                    <div className="ui ten wide column">
                        <Tracklist playlist={selectedPlaylist} selectedTrackId={1} />
                    </div>
                </div>
                <div className="ui divider"></div>
                <TrackDetails track={selectedTrack} />
            </div>
        </div>
    );
}
