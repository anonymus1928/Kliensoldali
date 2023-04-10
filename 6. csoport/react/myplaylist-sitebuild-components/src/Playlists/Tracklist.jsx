import PropTypes from "prop-types";

export function Tracklist({ playlist }) {
  return (
    <>
      <h3>{playlist.title}</h3>
      <div className="ui very relaxed selection list">
        {playlist.tracks.map(track => (
            <div className="item" key={track.id}>
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

Tracklist.propTypes = {
    playlist: PropTypes.object,
}
