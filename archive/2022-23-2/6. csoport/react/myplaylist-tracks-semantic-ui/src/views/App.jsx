// import React from "react";
import { Layout } from "./layout/Layout";
import { Tracks } from "./tracks/Tracks";
// import { exampleTracks } from "../domain/track";

// export const TracksContext = React.createContext(null);

export function App() {
  return (
    <Layout>
      {/* <TracksContext.Provider value={exampleTracks}> */}
        <Tracks />
      {/* </TracksContext.Provider> */}
    </Layout>
  );
}
