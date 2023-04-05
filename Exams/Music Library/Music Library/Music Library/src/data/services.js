import { get, post, put, del } from "./api.js";

export async function getAllCards() {
    return get('/data/albums?sortBy=_createdOn%20desc')
}

export async function createCard(card) {
    return post('/data/albums', card)
}

export async function deleteCard(id) {
    return del(`/data/albums/${id}`)
}

export async function getCardById(id) {
    return get(`/data/albums/${id}`)
}

export async function editCard(id, card) {
    return put(`/data/albums/${id}`, card)
}