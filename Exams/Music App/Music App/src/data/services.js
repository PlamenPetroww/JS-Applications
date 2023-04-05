import { get, post, put, del } from "./api.js";

export async function getMySongs() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name')
}

export async function createSong(song) {
    return post('/data/albums', song)
}

export async function getSongById(id) {
    return get(`/data/albums/${id}`)
}

export async function deleteSong(id) {
    return del(`/data/albums/${id}`)
}

export async function editBook(id, song) {
    return put(`/data/albums/${id}`, song)
}