import {html} from '../../node_modules/lit-html/lit-html.js';
import { getParts } from '../data/autoparts.js';
import { createSubmitHandler } from '../util.js';

const catalogTemplate = (list, isLoading, prevPage, nextPage, search, onSearch) => html `
<h1>Catalog Page</h1>
${isLoading ? html`<p>Loading &hellip;</p>` : html`
<form @submit=${onSearch}>
    <input type="text" name="search" .value=${search}><button>Search</button>
</form>
<div>
    ${prevPage ?  html `<a href=${prevPage}>&lt; Prev</a>` : null}
    ${nextPage ? html `<a href=${nextPage}>Next &gt;</a>` : null}
</div>
<ul>${list.map(productTemplate)}</ul>`}`;

const productTemplate = (item) => html`
<li><a href="/catalog/${item._id}">${item.label}</a></li>`;

export async function catalogPage(ctx) {
    ctx.render(catalogTemplate([], true));

    const page = Number(ctx.query.page) || 1;
    const search = ctx.query.search || '';

    const {result, pages} = await getParts(page, search);

    let prevPage = page > 1 && `?page = ${page  - 1}`;
    let nextPage = page < pages && `?page = ${page  + 1}`;

    if(search) {
        prevPage = prevPage && prevPage + `&search =${search}`;
        nextPage = nextPage && nextPage + `&search =${search}`;
    }
    ctx.render(catalogTemplate(result, false, prevPage, nextPage, search, createSubmitHandler(onSearch)));

    function onSearch({search}) {
        ctx.page.redirect('/catalog?search=' + search)
    }
}