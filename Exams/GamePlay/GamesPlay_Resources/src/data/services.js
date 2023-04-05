import { get, post, put, del } from "./api.js";

export async function getAllCards() {
    return get("/data/games?sortBy=_createdOn%20desc")
}

export async function getAllCardsForHomePage() {
    return get("/data/games?sortBy=_createdOn%20desc&distinct=category")
}
export async function createCard(card) {
    return post("/data/games", card)
}

export async function getCardById(id) {
    return get(`/data/games/${id}`)
}

export async function deleteCard(id) {
    return del(`/data/games/${id}`)
}

export async function editCard(id, card) {
    return put(`/data/games/${id}`, card)
}

export async function getByGameId(gameId) {
    return get(`/data/comments?where=gameId%3D%22${gameId}%22`)
}

export async function postcomment(comment) {
    return post('/data/comments', comment)
}