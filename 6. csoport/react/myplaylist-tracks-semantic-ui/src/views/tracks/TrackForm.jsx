/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Modal } from "semantic-ui-react";

const Field = ({ label, ...rest }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ open, handleClose, tracks, setTracks }) {
  const [formState, setFormState] = useState(defaultState);

  const resetForm = () => setFormState(defaultState);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormState({...formState, [name]: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
    const id = Math.max(...tracks.map(track => track.id)) + 1;
    setTracks([...tracks, {...formState, id}]);
    resetForm();
    handleClose();
  }
  

  return (
    <Modal as="form" open={open} onClose={() => {resetForm(); handleClose();}} closeIcon onSubmit={handleSubmit}>
      <div className="header">Add new Track</div>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="three fields">
              <Field label="Author" placeholder="John Williams" name="artist" value={formState.artist} onChange={handleChange} type="text" required />
              <Field label="Track name" placeholder="Imperial March" name="title" value={formState.title} onChange={handleChange} type="text" required />
              <Field label="Length" placeholder="3:44" name="length" value={formState.length} onChange={handleChange} type="text" required />
            </div>
            <div className="three fields">
              <Field label="Spotify URL" placeholder="https://" name="spotifyURL" value={formState.spotifyURL} onChange={handleChange} type="text" />
              <Field label="Lyrics URL" placeholder="https://" name="lyricsURL" value={formState.lyricsURL} onChange={handleChange} type="text" />
              <Field label="Guitar tab URL" placeholder="https://" name="chordsURL" value={formState.chordsURL} onChange={handleChange} type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="ui black deny button" onClick={() => {resetForm(); handleClose();}}>Cancel</div>
        <button className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
}
