import { exampleTracks } from '../../domain/track';
import { ADD_TRACK, DELETE_TRACK, UPDATE_TRACK } from './actions';

const initialState = exampleTracks;

export const tracksReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === ADD_TRACK) {
        return [...state, payload];
    }

    if (type === UPDATE_TRACK) {
        return state.map(track => track.id !== payload.id ? track : payload);
    }

    if (type === DELETE_TRACK) {
        return state.filter(track => track.id !== payload.id);
    }

    return state;
};
