import { get, post, put, del } from "./api.js";

export async function getAllCards() {
    return get('/data/posts?sortBy=_createdOn%20desc')
}

export async function createCard(card) {
    return post("/data/posts", card)
}

export async function getCardById(id) {
    return get(`/data/posts/${id}`)
}

export async function deleteCard(id) {
    return del(`/data/posts/${id}`)
}

export async function editCard(id, card) {
    return put(`/data/posts/${id}`, card)
}

export async function getMyBooks(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
