import { React } from 'react';
import cn from 'classnames';

export function PlaylistLists({ playlists, selectedPlaylistId }) {
    // console.log(playlists);
    return (
        <div className="ui very relaxed selection list">
            {playlists.map(playlist => (
                <div className={cn('item', {active: playlist.id === selectedPlaylistId})}>
                    <i className="large compact disc middle aligned icon"></i>
                    <div className="content">
                        <a className="header">{playlist.title}</a>
                        <div className="description">{playlist.tracks.length} songs</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
