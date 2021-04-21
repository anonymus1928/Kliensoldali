import { examplePlaylists } from '../../domain/playlist';
import { ADD_PLAYLIST, ADD_TRACK_TO_PLAYLIST } from './actions';

const initialState = examplePlaylists;

export const playlistsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === ADD_PLAYLIST) {
        const playlists = state;
        const newPlaylist = payload;
        return [...playlists, newPlaylist];
    }

    if (type === ADD_TRACK_TO_PLAYLIST) {
        const playlists = state;
        const { playlistId, trackId } = payload;

        const playlist = playlists.find(p => p.id === playlistId);
        if(!playlist) return state;
        if(playlist.tracks.includes(trackId)) return state;
        const modifiedPlaylist = {
            ...playlist,
            tracks: playlist.tracks.concat(trackId),
        }
        return playlists.map(p => p.id !== playlistId ? p : modifiedPlaylist);
    }

    return state;
};
