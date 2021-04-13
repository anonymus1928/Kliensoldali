import React from 'react';
import ReactDOM from 'react-dom';

import 'fomantic-ui-css/semantic.min.css'

import { App } from './views/App';
import { PlaylistsProvider } from './state/PlaylistsProvider';
import { playlistsStorage } from './api/PlaylistsStorage';
import { examplePlaylists } from './domain/playlist';

const render = () => {
    ReactDOM.render(
        <PlaylistsProvider>
            <App />
        </PlaylistsProvider>,
      document.getElementById('root')
    );
}

async function start() {
    const newPlaylists = await playlistsStorage.fill(examplePlaylists);
    console.log(newPlaylists);

    render();
}
start();
