import { get, post, put, del } from "./api.js";

export async function getAllCards() {
    return get('/data/fruits?sortBy=_createdOn%20desc')
}

export async function createCard(card) {
    return post('/data/fruits', card)
}

export async function getCardById(id) {
    return get(`/data/fruits/${id}`)
}

export async function deleteCard(id) {
    return del(`/data/fruits/${id}`)
}

export async function editCard(id, card) {
    return put(`/data/fruits/${id}`, card)
}

export async function searchAlbum(query) {
    return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`)
}