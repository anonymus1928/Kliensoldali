import { Layout } from './layout/Layout';
import { Home } from './home/Home';
import { Playlist } from './playlists/Playlist';
import { Tracks } from './tracks/Tracks';
import { Search } from './search/Search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlaylists, setPlaylists } from '../state/playlists/actions';
import { fetchTracks, setTracks } from '../state/tracks/actions';
import { playlistsStorage } from '../api/PlaylistsStorage';
import { exampleTracks } from "../domain/track";
import { examplePlaylists } from "../domain/playlist";
import { tracksStorage } from '../api/TracksStorage';
import { wsConnect } from '../state/messages/actions';

export function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // playlistsStorage.fill(examplePlaylists).then(playlists => dispatch(setPlaylists(playlists)));
        // tracksStorage.fill(exampleTracks).then(tracks => dispatch(setTracks(tracks)));

        dispatch(fetchPlaylists());
        dispatch(fetchTracks());
        dispatch(wsConnect());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/playlists/:playlistId?/:trackId?">
                        <Playlist />
                    </Route>
                    <Route path="/tracks">
                        <Tracks />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
