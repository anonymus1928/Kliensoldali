import classNames from "classnames";
import PropTypes from "prop-types";

export function PlaylistList({playlists, activePlaylist, setActivePlaylist}) {
    const handleClick = trackID => {
        setActivePlaylist(trackID);
    }

  return (
    <>
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {playlists.map((playlist) => (
          <div className={classNames("item", { active: activePlaylist === playlist.id })} key={playlist.id} onClick={() => handleClick(playlist.id)}>
            <i className="large compact disc middle aligned icon"></i>
            <div className="content">
              <a className="header">{playlist.title}</a>
              <div className="description">{playlist.tracks.length} songs</div>
            </div>
          </div>
        ))}

        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <a className="header">New</a>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </>
  );
}

PlaylistList.propTypes = {
    playlists: PropTypes.array,
    activePlaylist: PropTypes.number,
    setActivePlaylist: PropTypes.func
}
