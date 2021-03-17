import { Layout } from "./layout/Layout";
import { Home } from './home/Home';
import { Playlist } from './playlists/Playlist';
import { Tracks } from './tracks/Tracks';
import { Search } from './search/Search';
import { BrowserRouter, Route } from "react-router-dom";

export function App() {
    return (
        <BrowserRouter>
            <Layout>
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
            </Layout>
        </BrowserRouter>
    );
}
