import { React } from 'react';
import cn from 'classnames';

export function Tracklist({ playlist, selectedTrackId }) {
    return (
        <>
            <h3>{playlist.title}</h3>
            <div className="ui very relaxed selection list">
                {playlist.tracks.map(track => (
                    <div className={cn('item', {active: selectedTrackId === track.id})}>
                        <i className="large music middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{track.title}</a>
                            <div className="description">{track.artist}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
