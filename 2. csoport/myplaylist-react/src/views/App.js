import { Layout } from "./layout/Layout";
import { Home } from "./home/Home";
import { Playlists } from "./playlists/Playlists";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";

export function App() {
    return (
        <Layout>
            <Home />
            <Playlists />
            <Tracks />
            <Search />
        </Layout>
    );
}
