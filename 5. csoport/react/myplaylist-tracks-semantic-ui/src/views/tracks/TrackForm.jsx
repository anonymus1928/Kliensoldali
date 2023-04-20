/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Modal } from "semantic-ui-react";

const Field = ({ label, placeholder, name, ...rest }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input name={name} placeholder={placeholder} {...rest} />
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

export function TrackForm({ open, handleClose, createTrack }) {
  const [formState, setFormState] = useState(defaultState);

  const resetForm = () => setFormState(defaultState);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
    createTrack(formState);
    resetForm();
    handleClose();
  }

  const handelChange = e => {
    const {value, name} = e.target;
    setFormState({ ...formState, [name]: value });
  }




  return (
    <Modal as="form" open={open} onClose={handleClose} closeIcon onSubmit={handleSubmit}>
      <div className="header">Add new Track</div>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="three fields">
              <Field label="Author" placeholder="John Williams" name="artist" value={formState.artist} onChange={handelChange} type="text" required />
              <Field label="Track name" placeholder="Imperial March" name="title" value={formState.title} onChange={handelChange} type="text" required />
              <Field label="Length" placeholder="3:44" name="length" value={formState.length} onChange={handelChange} type="text" required />
            </div>
            <div className="three fields">
              <Field label="Spotify URL" placeholder="https://" name="spotifyURL" value={formState.spotifyURL} onChange={handelChange} type="text" />
              <Field label="Lyrics URL" placeholder="https://" name="lyricsURL" value={formState.lyricsURL} onChange={handelChange} type="text" />
              <Field label="Guitar tab URL" placeholder="https://" name="chordsURL" value={formState.chordsURL} onChange={handelChange} type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="ui black deny button" onClick={() => handleClose()}>Cancel</div>
        <button className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
}
