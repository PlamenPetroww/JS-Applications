import { del, get, post, put } from "./api.js";

const pageSize = 3;


const endPoints = {
    catalog: '/data/autoparts',
    byId: '/data/autoparts/'
};

/* export async function search(query) {
    const searchParam = `label LIKE "${query}"`;
    return get(endPoints.catalog + `?where=${encodeURIComponent(searchParam)}`)
} */

export async function getParts(page = 1, search) {
    const offset = (page - 1) * pageSize;

    let pageQuery = [`offset=${offset}&pageSize=3`];
    let countQuery = ['count'];

    if(search && search != '') {
        const searchParam = `label LIKE "${search}"`;
        const searchQuery = `where=${encodeURIComponent(searchParam)}`
        pageQuery.push(searchQuery);
        countQuery.push(searchQuery);
    }

    const [result, count] = await Promise.all([
        get(endPoints.catalog + '?' + pageQuery.join('&')),
        get(endPoints.catalog + '?' + countQuery.join('&'))
    ]);

    return {
        result,
        pages: Math.ceil(count / pageSize)
    }
}

export async function getById(id) {
    return get(endPoints.byId + id);
}

export async function deleteById(id) {
    return del(endPoints.byId + id);
}

export async function createPart(partData) {
    return post(endPoints.catalog, partData)
}

export async function updatePart(id, partData) {
    return put(endPoints.byId + id, partData)
}