/* eslint-disable react/prop-types */
export function Track({ track, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <button className="ui icon button" onClick={onEdit}>
          <i className="edit icon"></i>
        </button>
        <button className="ui icon button red" onClick={onDelete}>
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
}
