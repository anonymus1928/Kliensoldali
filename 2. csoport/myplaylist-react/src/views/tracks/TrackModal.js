import { Modal } from 'semantic-ui-react';

import { Field } from './Field';

export function TrackModal({ open, onClose }) {

    return (
        <Modal
            className="ui modal"
            onClose={onClose}
            open={open}
        >
            <i onClick={onClose} className="close icon"></i>
            <div className="header">Add new Track</div>
            <div className="image content">
                <div className="description">
                    <form className="ui form">
                        <div className="two fields">
                            <Field label="Author" placeholder="John Williams" />
                            <Field label="Track name" placeholder="Imperial March" />
                        </div>
                        <div className="three fields">
                            <Field label="Spotify URL" placeholder="https://" />
                            <Field label="Lyrics URL" placeholder="https://" />
                            <Field label="Guitar tab URL" placeholder="https://" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="actions">
                <div onClick={onClose} className="ui black deny button">Cancel</div>
                <div className="ui positive right labeled icon button">
                    Add
                    <i className="plus icon"></i>
                </div>
            </div>
        </Modal>
    );
}
