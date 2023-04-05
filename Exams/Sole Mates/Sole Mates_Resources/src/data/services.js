import { get, post, put, del } from "./api.js";

export async function getAllOffers() {
    return get("/data/shoes?sortBy=_createdOn%20desc")
}

export async function createCard(card) {
    return post('/data/shoes', card)
}

export async function deleteCard(id) {
    return del(`/data/shoes/${id}`)
}

export async function getCardById(id) {
    return get(`/data/shoes/${id}`)
}

export async function editCard(id, card) {
    return put(`/data/shoes/${id}`, card)
}