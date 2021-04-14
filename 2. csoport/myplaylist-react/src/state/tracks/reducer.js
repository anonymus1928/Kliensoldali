import { exampleTracks } from '../../domain/track';

const initialState = exampleTracks;

export const tracksReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === 'ADD_TRACK') {
        return [...state, payload];
    }

    return state;
};
