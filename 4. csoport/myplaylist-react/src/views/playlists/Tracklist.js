import cn from 'classnames';

export function Tracklist({ playlist, selectedTrackId, onSelect }) {
    return (!playlist ? null :
        <>
            <h3>{playlist.title}</h3>
            <div className="ui very relaxed selection list">
                {playlist.tracks.map((track) => (
                    <div
                        className={cn('item', {
                            active: selectedTrackId === track.id,
                        })}
                        key={track.id}
                        onClick={() => onSelect(track.id)}
                    >
                        <i className="large music middle aligned icon"></i>
                        <div className="content">
                            <div className="header">{track.title}</div>
                            <div className="description">{track.artist}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
