import { del, get } from "./api.js";

const endPoints = {
    catalog: '/data/autoparts',
    byId: '/data/autoparts/'
}

export async function getParts() {
    return get(endPoints.catalog);
}

export async function getById(id) {
    return get(endPoints.byId + id);
}

export async function deleteById(id) {
    return del(endPoints.byId + id);
}