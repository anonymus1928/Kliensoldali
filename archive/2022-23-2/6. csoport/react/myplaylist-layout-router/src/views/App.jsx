import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
import { Layout } from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="playlists/:playlistID?/:trackID?" element={<Playlists />} />
            <Route path="tracks" element={<Tracks />} />
            <Route path="search" element={<Search />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}
