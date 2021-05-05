import { tracksApi } from "../../api/rest";
import { sendMessage } from "../messages/actions";
import { deleteTrackFromAllPlaylists } from "../playlists/actions";

export const SET_TRACKS = 'SET_TRACKS';
export const ADD_TRACK = 'ADD_TRACK';
export const UPDATE_TRACK = 'UPDATE_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';

// Sync
export const setTracks = (tracks) => ({
    type: SET_TRACKS,
    payload: tracks,
});

export const addTrackToStore = (track) => ({
    type: ADD_TRACK,
    payload: {...track, id: Date.now().toString()},
});

export const updateTrackToStore = (track) => ({
    type: UPDATE_TRACK,
    payload: track,
});

export const deleteTrackFromStore = (track) => ({
    type: DELETE_TRACK,
    payload: track,
});

// Async
export const fetchTracks = () => async dispatch => {
    const playlists = await tracksApi.getAll()
    dispatch(setTracks(playlists));
}

export const addTrack = (track) => async dispatch => {
    const newTrack = await tracksApi.create(track);
    dispatch(sendMessage(`Track added: ${track.artist} | ${track.title}`));
    dispatch(addTrackToStore(newTrack));
}

export const updateTrack = (track) => async dispatch => {
    const updatedTrack = await tracksApi.update(track);
    dispatch(sendMessage(`Track updated: ${track.artist} | ${track.title}`));
    dispatch(updateTrackToStore(updatedTrack));
}

export const deleteTrack = (track) => async dispatch => {
    await tracksApi.delete(track.id);
    dispatch(sendMessage(`Track deleted: ${track.artist} | ${track.title}`));
    dispatch(deleteTrackFromStore(track));
    dispatch(deleteTrackFromAllPlaylists(track));
}
