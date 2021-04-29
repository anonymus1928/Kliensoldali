const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTk2MTIxNDYsImV4cCI6MTYyMjIwNDE0NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMSIsImp0aSI6IjkyNWVmN2UwLTNiNDctNDhkZi05ZTJhLTUxYzhjNDU2ODhjZiJ9.Wuktapqj3fgOpfe7oPOUMMyXQtJ845NuyINvOun061A';

const BASE_URL = 'http://localhost:3030';

const request = async (path = '', options = {}) => {
    let url = `${BASE_URL}${path}`;
    const headers = {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
    };
    const response = await fetch(url, {
        ...options,
        headers
    });
    return response.json();
};

class RestApi {
    constructor(resourcePath, convertFn) {
        this.resourcePath = resourcePath;
        this.convertFn = convertFn;
    }

    async create(object) {
        const newPlaylist = await request(this.resourcePath, {
            method: 'POST',
            body: JSON.stringify(object),
        });
        return this.convertFn(newPlaylist);
    }

    async fill(objects) {
        // await this.db.remove({}, { multi: true });
        // const newObjects = await Promise.all(
        //     objects.map((object) => this.create(object))
        // );
        const newObjects = objects;
        return newObjects;
    }

    async getAll() {
        const json = await request(this.resourcePath);
        const playlists = json.data;
        return playlists.map(this.convertFn);
    }

    async update(object) {
        if (!object.id) return;
        const updatedPlaylist = await request(`${this.resourcePath}/${object.id}`, {
            method: 'PUT',
            body: JSON.stringify(object),
        });
        return this.convertFn(updatedPlaylist);
    }

    async delete(id) {
        await request(`${this.resourcePath}/${id}`, {
            method: 'DELETE',
        })
    }
}

const convertPlaylistIds = (playlist) => ({
    ...playlist,
    id: playlist.id.toString(),
    tracks: playlist.tracks.map((id) => id.toString()),
});

export const playlistsApi = new RestApi('/playlists', convertPlaylistIds);

const convertTrackId = (track) => ({
    ...track,
    id: track.id.toString(),
});

export const tracksApi = new RestApi('/tracks', convertTrackId);
