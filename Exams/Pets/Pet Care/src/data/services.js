import { get, post, put, del } from "./api.js";

export async function getMyCard() {
    return get(`/data/pets?sortBy=_createdOn%20desc&distinct=name`)
}

export async function createCard(card) {
    return post('/data/pets', card)
}

export async function getCardById(id) {
    return get(`/data/pets/${id}`)
}

export async function deleteCard(id) {
    return del(`/data/pets/${id}`)
}

export async function editCard(id, card) {
    return put(`/data/pets/${id}`, card)
}