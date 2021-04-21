import { exampleTracks } from "../../domain/track";
import { ADD_TRACK, DELETE_TRACK, UPDATE_TRACK } from "./actions";

const initialState = exampleTracks;

export const tracksReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === ADD_TRACK) {
        const tracks = state;
        const newTrack = payload;
        return [...tracks, newTrack];
    }

    if(type === UPDATE_TRACK) {
        const tracks = state;
        const updatedTrack = payload;
        return tracks.map(track => track.id !== updatedTrack.id ? track : updatedTrack);
    }

    if(type === DELETE_TRACK) {
        const tracks = state;
        const deleteTrack = payload;
        return tracks.filter(track => track.id !== deleteTrack.id);
    }

    return state;
};
