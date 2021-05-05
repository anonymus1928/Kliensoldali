import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tracksReducer } from './tracks/reducer';
import { playlistsReducer } from './playlists/reducer';
import thunk from 'redux-thunk';
import { messageReducer } from './messages/reducer';

// const rootReducer = (state = initialState, action) => {
//     return {
//         tracks: tracksReducer(state.tracks, action),
//         playlists: playlistsReducer(state.playlists, action),
//     };
// };

const rootReducer = combineReducers({
    tracks: tracksReducer,
    playlists: playlistsReducer,
    messages: messageReducer,
});

const logger = createLogger({
    collapsed: true,
});

export const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
};
