import { Modal } from 'semantic-ui-react';
import { Field } from './Field';

export function TrackModal({ open, onClose }) {
    return (
        <Modal className="ui modal" open={open} onClose={onClose}>
            <i className="close icon" onClick={onClose}></i>
            <div className="header">Add new Track</div>
            <div className="image content">
                <div className="description">
                    <form className="ui form">
                        <div className="two fields">
                            <Field name="artist" label="Author" placeholder="John Williams" />
                            <Field name="title" label="Track name" placeholder="Imperial March" />
                        </div>
                        <div className="three fields">
                            <Field name="spotifyURL" label="Spotify URL" placeholder="https://" />
                            <Field name="chordsURL" label="Lyrics URL" placeholder="https://" />
                            <Field name="lyricsURL" label="Guitar tab URL" placeholder="https://" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="actions">
                <div className="ui black deny button" onClick={onClose}>
                    Cancel
                </div>
                <div className="ui positive right labeled icon button">
                    Add
                    <i className="plus icon"></i>
                </div>
            </div>
        </Modal>
    );
}
