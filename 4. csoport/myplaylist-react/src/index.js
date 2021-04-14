import React from 'react';
import ReactDOM from 'react-dom';

import 'fomantic-ui-css/semantic.min.css';

import { App } from './views/App';
import { PlaylistsProvider } from './state/PlaylistsProvider';
import { playlistsStorage } from './api/PlaylistsStorage';
import { examplePlaylists } from './domain/playlist';
import { configureStore } from './state/store';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch({ type: 'ADD_TRACK', payload: { title: 'q', artist: 'q' } });

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <PlaylistsProvider>
                <App />
            </PlaylistsProvider>
        </Provider>,
        document.getElementById('root')
    );
};

async function start() {
    const newPlaylists = await playlistsStorage.fill(examplePlaylists);
    console.log(newPlaylists);

    render();
}
start();
